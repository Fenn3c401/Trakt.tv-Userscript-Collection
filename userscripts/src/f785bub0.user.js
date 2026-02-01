// ==UserScript==
// @name         Trakt.tv | Trakt API Wrapper
// @description  Exposes an authenticated Trakt API Wrapper. Intended to run alongside other userscripts which require (authenticated) access to the Trakt API.
// @version      1.0.1
// @namespace    f785bub0
// @updateURL    https://update.greasyfork.org/scripts/564750.meta.js
// @icon         https://trakt.tv/assets/logos/logomark.square.gradient-b644b16c38ff775861b4b1f58c1230f6a097a2466ab33ae00445a505c33fcb91.svg
// @match        https://trakt.tv/*
// @match        https://classic.trakt.tv/*
// @run-at       document-start
// @grant        unsafeWindow
// @grant        GM_info
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM.xmlHttpRequest
// @connect      trakt.tv
// ==/UserScript==

/* README
> Based on iDavide94/iFelix18's [Trakt API wrapper for userscripts](https://github.com/iDavide94) which in turn was based on
> vankasteelj's [Trakt.tv API wrapper for Node.js](https://github.com/vankasteelj/trakt.tv).

### General
- If you're not interested in the technical details, then the rest of the documentation here will probably be of little interest to you. This script will mostly speed up some of
    my other userscripts which would otherwise scrape the respective data instead of pulling it from the api (the api responses are cached for 8 hours).
- This wrapper is entirely self sufficient and requires no prior configuration or user input. It creates its own api application, fetches the respective client credentials and
    authenticates the user on the fly when a method is called. You can change the name and description of that api application to whatever you like,
    however please keep in mind that the name (in addition to the id) is used for checking for an existing application before creating a new one (useful after script reinstall).
    If you delete it a new one will be created in its place when the wrapper is used again.
- Only works if a user is logged in.
- The methods were last updated in Jan. 2026.

### Usage
- The wrapper is exposed through `window.userscriptTraktApiWrapper` and can be used like:<br>
    `const data = await userscriptTraktApiWrapper.search.id({ id_type: 'trakt', id: 1234, type: 'episode', extended: 'full', _auth: true, _meta: true, _revalidate: true });`<br>
    There are two types of props you can pass to a method, parameters corresponding to those listed in the Trakt API docs and options (denoted by a leading `_`) for the wrapper itself.
- ***Parameters***<br>
    There are three categories: path parameters, search parameters, and the props for the request's body. First the mandatory and optional parameters for the path
    are filled in, then for `GET`/`DELETE` requests the remaining parameters are appended as search parameters, whereas for `POST`/`PUT` requests they are added to the body.
- ***Options***<br>
    - `_method` - The type of HTTP request to make, normally supplied by the method config, but as with all options you can override it.
    - `_path` - The path template to use, normally supplied by the method config. Override it in case it's outdated.
    - `_auth` - Whether to authenticate the request. Normally supplied by the method config for methods with mandatory authentication.
        Override it to enable optional authentication (which also has a separate rate limit).
    - `_meta` - Whether to wrap the response's data in an object with the supplied trakt header metadata like: `{ data: returned_data, meta: { pagination_page: 3 } }`.
        `meta` includes all the trakt `x-`-prefixed headers and a couple select others in a normalized form to allow for dot-syntax access. Type coercion is done for numbers and booleans.
        It's also included as `parsedTraktHeaders` with the raw response object which get's thrown in case of a failed request.
    - `_revalidate` - Whether to revalidate the data instead of directly pulling it from the disk cache when possible.
    - `_retry` - Configuration for a basic exponential backoff based retry mechanism. By default only activated for authed `POST`/`PUT`/`DELETE` requests.
        Doesn't use the `ratelimit` and `retry_after` trakt headers. Takes a config object like `{ limit: 5, req_delay: 1000, resp_delay: 0 }`, with each retry
        `limit` gets decremented (= 5 retries) and `req_delay` doubled. If you want to turn it off you can just override it with `_retry: null`.
- In the userscript storage tab you can change the `apiUrl` to `https://api-staging.trakt.tv` for a sandbox environment
    and you can activate console logging of all api requests with `logApiRequests`.
- There's built-in rate-limiting for authed `POST`/`PUT`/`DELETE` requests (1/sec), which is complemented by the default `_retry` config, so you can just make a bunch of these
    requests at once and they'll be queued up and executed one by one in the same order in which you made them. This is complemented by the default `_retry` config where in this case
    a retried request delays all other queued requests.
*/


/* global moduleName */

'use strict';

const logger = {
  _defaults: {
    title: (typeof moduleName !== 'undefined' ? moduleName : GM_info.script.name).replace('Trakt.tv', 'Userscript'),
    toast: true,
    toastrOpt: { positionClass: 'toast-top-right', timeOut: 10000, progressBar: true },
    toastrStyles: '#toast-container#toast-container a { color: #fff !important; border-bottom: dotted 1px #fff; }',
  },
  _print(fnConsole, fnToastr, msg = '', opt = {}) {
    const { title = this._defaults.title, toast = this._defaults.toast, toastrOpt, toastrStyles = '', consoleStyles = '', data } = opt,
          fullToastrMsg = `${msg}${data !== undefined ? ' See console for details.' : ''}<style>${this._defaults.toastrStyles + toastrStyles}</style>`;
    console[fnConsole](`%c${title}: ${msg}`, consoleStyles, ...(data !== undefined ? [data] : []));
    if (toast) unsafeWindow.toastr?.[fnToastr](fullToastrMsg, title, { ...this._defaults.toastrOpt, ...toastrOpt });
  },
  info(msg, opt) { this._print('info', 'info', msg, opt) },
  success(msg, opt) { this._print('info', 'success', msg, { consoleStyles: 'color:#00c853;', ...opt }) },
  warning(msg, opt) { this._print('warn', 'warning', msg, opt) },
  error(msg, opt) { this._print('error', 'error', msg, opt) },
};

const gmStorage = { logApiRequests: false, apiUrl: 'https://api.trakt.tv', app: {}, auth: {}, ...(GM_getValue('traktApiWrapper')) };
GM_setValue('traktApiWrapper', gmStorage);

const userslug = document.cookie.match(/(?:^|; )trakt_userslug=([^;]*)/)?.[1];
let authedNonGetReqChain = Promise.resolve(),
    activeFetchApp = Promise.resolve(),
    activeFetchAuth = Promise.resolve(),
    methods;

if (userslug) unsafeWindow.userscriptTraktApiWrapper = methods = buildMethods(getRawMethods());

///////////////////////////////////////////////////////////////////////////////////////////////

async function callMethod(args) {
  const groupedArgs = Object.groupBy(Object.entries(args), ([key]) => key.startsWith('_') ? 'opts' : 'params'),
        opts = Object.fromEntries(groupedArgs.opts ?? []),
        params = Object.fromEntries(groupedArgs.params ?? []);

  const req = {
    method: opts._method,
    ...(opts._revalidate != null && { revalidate: Boolean(opts._revalidate) }),
    responseType: 'json',
    headers: {
      'content-type': 'application/json',
      'user-agent': 'TraktApiWrapper/v1',
      'trakt-api-version': '2',
    },
  };

  req.url = gmStorage.apiUrl + opts._path.replaceAll(/:(\?)?(\w+)/g, (_m, isOptional, key) => {
    if (params[key] != null) { delete params[key]; return args[key]; }
    if (isOptional) return '';
    throw new Error(`Missing mandatory path parameter: ${key}`);
  });
  if (/GET|DELETE/.test(opts._method)) req.url = req.url + (Object.keys(params).length ? `?${new URLSearchParams(params)}` : '');
  else if (/POST|PUT/.test(opts._method)) req.data = JSON.stringify(params);

  await activeFetchApp;
  if (!gmStorage.app.clientId || !gmStorage.app.clientSecret || !gmStorage.app.redirectUri) {
    activeFetchApp = fetchAppClientCreds();
    await activeFetchApp;
  }
  req.headers['trakt-api-key'] = gmStorage.app.clientId;

  if (opts._auth) {
    await activeFetchAuth;
    if (!gmStorage.auth.accessToken || !gmStorage.auth.expiresAt ||
        gmStorage.auth.expiresAt < Date.now() - 5*60*1000 ||
        gmStorage.auth.userslug !== userslug) {
      activeFetchAuth = fetchAuthTokens();
      await activeFetchAuth;
    }
    req.headers.authorization = `Bearer ${gmStorage.auth.accessToken}`;
  }

  if (opts._auth && opts._method !== 'GET') {
    const rateLimitDelay = 1100; // +100ms for network jitter; though the rate limit doesn't actually seem to be enforced
    return new Promise((resolveCaller) => {
      authedNonGetReqChain = authedNonGetReqChain.then(() => {
        const reqPromise = sendApiRequest(req, { _retry: { limit: 5, req_delay: rateLimitDelay, resp_delay: rateLimitDelay }, ...opts });
        resolveCaller(reqPromise);
        return new Promise((resolveChain) => {
          setTimeout(() => reqPromise.finally(resolveChain), rateLimitDelay);
        });
      });
    });
  } else {
    return sendApiRequest(req, opts);
  }
}

function sendApiRequest(req, opts) {
  return GM.xmlHttpRequest(req).then((resp) => {
    if (gmStorage.logApiRequests) logger.info(`${req.method}: ${req.url}`, { toast: false, data: { req, resp } });

    resp.parsedTraktHeaders = parseTraktHeaders(resp.responseHeaders);

    if (resp.status >= 200 && resp.status < 300) {
      return opts._meta ? { data: resp.response, meta: resp.parsedTraktHeaders } : resp.response;
    }
    if (resp.status === 429 && opts._retry?.limit) {
      const newOpts = { ...opts, _retry: { limit: opts._retry.limit - 1, req_delay: opts._retry.req_delay * 2 } }
      return new Promise((resolve) => setTimeout(() => resolve(sendApiRequest(req, newOpts)), opts._retry.req_delay))
        .then((resp) => new Promise((resolve) => setTimeout(() => resolve(resp), opts._retry.resp_delay)));
    }
    if (resp.status === 401 && !resp.parsedTraktHeaders.private_user) {
      gmStorage.auth = {};
      GM_setValue('traktApiWrapper', gmStorage);
      logger.warning('Auth tokens might be invalid and have been cleared.');
    }
    if (resp.status === 403) {
      gmStorage.app = { id: gmStorage.app.id };
      gmStorage.auth = {};
      GM_setValue('traktApiWrapper', gmStorage);
      logger.warning('Client credentials might be invalid and have been cleared.');
    }
    throw resp;
  });
}

function parseTraktHeaders(headers) {
  const normalizedHeaderEntries = headers.split(/\r?\n/).map((header) => header.split(':')).map(([key, val]) => [key.trim().toLowerCase(), val?.trim()]),
        traktHeaderKeys = normalizedHeaderEntries.find(([key]) => key === 'access-control-expose-headers')[1].toLowerCase().split(',');
  return Object.fromEntries(
    normalizedHeaderEntries
      .filter(([key]) => traktHeaderKeys.includes(key))
      .map(([key, val]) => {
        return [(key.startsWith('x-') ? key.slice(2) : key).replaceAll('-', '_'),
                val === 'true' ? true : val === 'false' ? false : /^-?\d*\.?\d+$/.test(val) ? +val : val];
      })
  );
}

///////////////////////////////////////////////////////////////////////////////////////////////

async function fetchAppClientCreds() {
  try {
    logger.info('No valid client credentials found. Checking for matching application..');
    const appName = 'Trakt API Wrapper for Userscripts';
    let appDoc;

    const appsDoc = await fetch('/oauth/applications').then((r) => r.text()).then((r) => new DOMParser().parseFromString(r, 'text/html'));
    const appEl = [...appsDoc.querySelectorAll('#authorized-applications > .row:has(.label-success) h4 a[href^="/oauth/applications/"]')].find((el) => {
      const hasMatchingId = gmStorage.app.id ? el.getAttribute('href').endsWith(gmStorage.app.id) : false,
            hasMatchingName = el.textContent.trim().toLowerCase() === appName.toLowerCase();
      return hasMatchingId || hasMatchingName;
    });
    if (appEl) appDoc = await fetch(appEl.getAttribute('href')).then((r) => r.text()).then((r) => new DOMParser().parseFromString(r, 'text/html'));

    if (!appDoc) {
      const formData = new FormData();
      [
        ['authenticity_token', appsDoc.querySelector('head meta[name="csrf-token"]').content],
        ['doorkeeper_application[name]', appName],
        ['doorkeeper_application[description]', 'A userscript which provides authenticated Trakt API access to other userscripts. https://github.com/Fenn3c401/Trakt.tv-Userscript-Collection'],
        ['doorkeeper_application[redirect_uri]', 'https://trakt.tv/dashboard'],
        ['doorkeeper_application[origins]', 'https://trakt.tv'],
        ['doorkeeper_application[icon]', new Blob([], { type: 'application/octet-stream' }), ''],
        ['doorkeeper_application[checkin]', '0'],
        ['doorkeeper_application[checkin]', '1'],
        ['doorkeeper_application[scrobble]', '0'],
        ['doorkeeper_application[scrobble]', '1'],
        ['commit', 'Save App'],
      ].forEach((args) => formData.append(...args));
      const resp = await GM.xmlHttpRequest({ url: '/oauth/applications', method: 'POST', data: formData, headers: { referer: 'https://trakt.tv/oauth/applications/new' } });
      if (resp.status >= 200 && resp.status < 300) {
        appDoc = new DOMParser().parseFromString(resp.responseText, 'text/html');
        logger.info(`No matching application found. New Trakt API application has been created. <a href="${resp.finalUrl}" target="_blank">${resp.finalUrl}</a>`);
      }
    }

    GM_setValue('traktApiWrapper', Object.assign(gmStorage, {
      app: {
        clientId: appDoc.querySelector('#authorized-applications .credentials:nth-child(1 of .credentials) code').textContent,
        clientSecret: appDoc.querySelector('#authorized-applications .credentials:nth-child(2 of .credentials) code').textContent,
        redirectUri: appDoc.querySelector('.redirect-uris code').textContent,
        id: +appDoc.querySelector('.btn.update[href$="edit"]').getAttribute('href').match(/\d+/)[0],
      },
    }));
    logger.success('Successfully fetched client credentials!', { data: gmStorage.app });
  } catch (err) {
    logger.error('Failed to fetch client credentials!');
    throw err;
  }
}

async function fetchAuthTokens() {
  try {
    const isAuthorization = !gmStorage.auth.refreshToken || gmStorage.auth.userslug !== userslug;
    let authCode;

    if (isAuthorization) {
      logger.info('No valid refresh token found. Authorizing application..');
      const authSearchParams = new URLSearchParams({ response_type: 'code', client_id: gmStorage.app.clientId, redirect_uri: gmStorage.app.redirectUri }),
            authUrl = `${gmStorage.apiUrl.replace(/api[.-]/, '')}/oauth/authorize?${authSearchParams}`,
            authDoc = await fetch(authUrl).then((r) => r.text()).then((r) => new DOMParser().parseFromString(r, 'text/html'));
      const resp = await GM.xmlHttpRequest({
        method: 'POST',
        url: '/oauth/authorize',
        headers: { referer: authUrl },
        data: new URLSearchParams([
          ['authenticity_token', authDoc.querySelector('head meta[name="csrf-token"]').content],
          ['client_id', gmStorage.app.clientId],
          ['redirect_uri', gmStorage.app.redirectUri],
          ['state', ''],
          ['response_type', 'code'],
          ['response_mode', 'query'],
          ['scope', 'public'],
          ['nonce', ''],
          ['code_challenge', ''],
          ['code_challenge_method', ''],
          ['commit', 'Yes'],
        ]),
      });
      if (resp.status >= 200 && resp.status < 300) {
        authCode = new URL(resp.finalUrl).searchParams.get('code');
        logger.success('Application successfully authorized!', { data: { code: authCode } });
      } else {
        gmStorage.app = { id: gmStorage.app.id };
        GM_setValue('traktApiWrapper', gmStorage);
        logger.warning('Client credentials might be invalid and have been cleared.');
      }
    }

    const resp = await methods.oauth.get({
      client_id: gmStorage.app.clientId,
      client_secret: gmStorage.app.clientSecret,
      redirect_uri: gmStorage.app.redirectUri,
      grant_type: isAuthorization ? 'authorization_code' : 'refresh_token',
      ...(isAuthorization ? { code: authCode } : { refresh_token: gmStorage.auth.refreshToken }),
    });
    GM_setValue('traktApiWrapper', Object.assign(gmStorage, {
      auth: {
        accessToken: resp.access_token,
        expiresAt: (resp.created_at + resp.expires_in) * 1000,
        refreshToken: resp.refresh_token,
        userslug: userslug,
      },
    }));
  } catch (err) {
    logger.error('Failed to fetch authentication tokens!');
    throw err;
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////

function buildMethods(obj, pathPrefix) {
  obj._path = (pathPrefix ?? '') + (obj._path ?? '');
  if (obj._method) return (args) => callMethod({ ...obj, ...args });
  else {
    for (const key in obj) if (!key.startsWith('_')) obj[key] = buildMethods(obj[key], obj._path);
    delete obj._path;
    return obj;
  }
}

function getRawMethods() {
  return {
    oauth: {
      _path: '/oauth',
      get: { _method: 'POST', _path: '/token' },
      revoke: { _method: 'POST', _path: '/revoke' },
    },
    calendars: {
      _path: '/calendars',
      my: {
        _path: '/my',
        shows: { _method: 'GET', _path: '/shows/:?start_date/:?days', _auth: true },
        new_shows: { _method: 'GET', _path: '/shows/new/:?start_date/:?days', _auth: true },
        season_premieres: { _method: 'GET', _path: '/shows/premieres/:?start_date/:?days', _auth: true },
        finales: { _method: 'GET', _path: '/shows/finales/:?start_date/:?days', _auth: true },
        movies: { _method: 'GET', _path: '/movies/:?start_date/:?days', _auth: true },
        streaming: { _method: 'GET', _path: '/streaming/:?start_date/:?days', _auth: true },
        dvd: { _method: 'GET', _path: '/dvd/:?start_date/:?days', _auth: true },
      },
      all: {
        _path: '/all',
        shows: { _method: 'GET', _path: '/shows/:?start_date/:?days' },
        new_shows: { _method: 'GET', _path: '/shows/new/:?start_date/:?days' },
        season_premieres: { _method: 'GET', _path: '/shows/premieres/:?start_date/:?days' },
        finales: { _method: 'GET', _path: '/shows/finales/:?start_date/:?days' },
        movies: { _method: 'GET', _path: '/movies/:?start_date/:?days' },
        streaming: { _method: 'GET', _path: '/streaming/:?start_date/:?days' },
        dvd: { _method: 'GET', _path: '/dvd/:?start_date/:?days' },
      },
    },
    checkin: {
      _path: '/checkin',
      add: { _method: 'POST', _auth: true },
      remove: { _method: 'DELETE', _auth: true },
    },
    certifications: { _method: 'GET', _path: '/certifications/:type' },
    comments: {
      _path: '/comments',
      comment: {
        add: { _method: 'POST', _auth: true },
        get: { _method: 'GET', _path: '/:id' },
        update: { _method: 'PUT', _path: '/:id', _auth: true },
        remove: { _method: 'DELETE', _path: '/:id', _auth: true },
      },
      replies: {
        _path: '/:id/replies',
        get: { _method: 'GET' },
        add: { _method: 'POST', _auth: true },
      },
      item: { _method: 'GET', _path: '/:id/item' },
      likes: {
        _path: '/:id',
        get: { _method: 'GET', _path: '/likes' },
        add: { _method: 'POST', _path: '/like', _auth: true },
        remove: { _method: 'DELETE', _path: '/like', _auth: true },
      },
      trending: { _method: 'GET', _path: '/trending/:?comment_type/:?type' },
      recent: { _method: 'GET', _path: '/recent/:?comment_type/:?type' },
      updates: { _method: 'GET', _path: '/updates/:?comment_type/:?type' },
    },
    countries: { _method: 'GET', _path: '/countries/:type' },
    genres: { _method: 'GET', _path: '/genres/:type', },
    languages: { _method: 'GET', _path: '/languages/:type' },
    lists: {
      _path: '/lists',
      trending: { _method: 'GET', _path: '/trending/:?type' },
      popular: { _method: 'GET', _path: '/popular/:?type' },
      list: {
        _path: '/:id',
        get: { _method: 'GET' },
        items: { _method: 'GET', _path: '/items/:?type/:?sort_by/:?sort_how' },
        comments: { _method: 'GET', _path: '/comments/:?sort' },
        likes: {
          get: { _method: 'GET', _path: '/likes' },
          add: { _method: 'POST', _path: '/like', _auth: true },
          remove: { _method: 'DELETE', _path: '/like', _auth: true },
        },
      },
    },
    movies: {
      _path: '/movies',
      trending: { _method: 'GET', _path: '/trending' },
      popular: { _method: 'GET', _path: '/popular' },
      favorited: { _method: 'GET', _path: '/favorited/:?period' },
      played: { _method: 'GET', _path: '/played/:?period' },
      watched: { _method: 'GET', _path: '/watched/:?period' },
      collected: { _method: 'GET', _path: '/collected/:?period' },
      anticipated: { _method: 'GET', _path: '/anticipated' },
      boxoffice: { _method: 'GET', _path: '/boxoffice' },
      updates: { _method: 'GET', _path: '/updates/:?start_date' },
      updated_ids: { _method: 'GET', _path: '/updates/id/:?start_date' },
      summary: { _method: 'GET', _path: '/:id' },
      aliases: { _method: 'GET', _path: '/:id/aliases' },
      releases: { _method: 'GET', _path: '/:id/releases/:?country' },
      translations: { _method: 'GET', _path: '/:id/translations/:?language' },
      comments: { _method: 'GET', _path: '/:id/comments/:?sort' },
      lists: { _method: 'GET', _path: '/:id/lists/:?type/:?sort' },
      people: { _method: 'GET', _path: '/:id/people' },
      ratings: { _method: 'GET', _path: '/:id/ratings' },
      related: { _method: 'GET', _path: '/:id/related' },
      stats: { _method: 'GET', _path: '/:id/stats' },
      studios: { _method: 'GET', _path: '/:id/studios' },
      watching: { _method: 'GET', _path: '/:id/watching' },
      videos: { _method: 'GET', _path: '/:id/videos' },
      refresh: { _method: 'POST', _path: '/:id/refresh', _auth: true },
    },
    networks: { _method: 'GET', _path: '/networks' },
    notes: {
      _path: '/notes',
      add: { _method: 'POST', _auth: true },
      get: { _method: 'GET', _path: '/:id', _auth: true },
      update: { _method: 'PUT', _path: '/:id', _auth: true },
      remove: { _method: 'DELETE', _path: '/:id', _auth: true },
      item: { _method: 'GET', _path: '/:id/item' },
    },
    people: {
      _path: '/people',
      updates: { _method: 'GET', _path: '/updates/:?start_date' },
      updated_ids: { _method: 'GET', _path: '/updates/id/:?start_date' },
      summary: { _method: 'GET', _path: '/:id' },
      movies: { _method: 'GET', _path: '/:id/movies' },
      shows: { _method: 'GET', _path: '/:id/shows' },
      lists: { _method: 'GET', _path: '/:id/lists/:?type/:?sort' },
      refresh: { _method: 'POST', _path: '/:id/refresh', _auth: true },
    },
    recommendations: {
      _path: '/recommendations',
      movies: {
        _path: '/movies',
        get: { _method: 'GET', _auth: true },
        hide: { _method: 'DELETE', _path: '/:id', _auth: true },
      },
      shows: {
        _path: '/shows',
        get: { _method: 'GET', _auth: true },
        hide: { _method: 'DELETE', _path: '/:id', _auth: true },
      },
    },
    scrobble: {
      _path: '/scrobble',
      start: { _method: 'POST', _path: '/start', _auth: true },
      stop: { _method: 'POST', _path: '/stop', _auth: true },
    },
    search: {
      _path: '/search',
      text: { _method: 'GET', _path: '/:type' },
      id: { _method: 'GET', _path: '/:id_type/:id' },
    },
    shows: {
      _path: '/shows',
      trending: { _method: 'GET', _path: '/trending' },
      popular: { _method: 'GET', _path: '/popular' },
      favorited: { _method: 'GET', _path: '/favorited/:?period' },
      played: { _method: 'GET', _path: '/played/:?period' },
      watched: { _method: 'GET', _path: '/watched/:?period' },
      collected: { _method: 'GET', _path: '/collected/:?period' },
      anticipated: { _method: 'GET', _path: '/anticipated' },
      updates: { _method: 'GET', _path: '/updates/:?start_date' },
      updated_ids: { _method: 'GET', _path: '/updates/id/:?start_date' },
      summary: { _method: 'GET', _path: '/:id' },
      aliases: { _method: 'GET', _path: '/:id/aliases' },
      certifications: { _method: 'GET', _path: '/:id/certifications' },
      translations: { _method: 'GET', _path: '/:id/translations/:?language' },
      comments: { _method: 'GET', _path: '/:id/comments/:?sort' },
      lists: { _method: 'GET', _path: '/:id/lists/:?type/:?sort' },
      progress: {
        _path: '/:id/progress',
        collection: { _method: 'GET', _path: '/collection', _auth: true },
        watched: { _method: 'GET', _path: '/watched', _auth: true },
        reset: { _method: 'POST', _path: '/watched/reset', _auth: true },
        undo_reset: { _method: 'DELETE', _path: '/watched/reset', _auth: true },
      },
      people: { _method: 'GET', _path: '/:id/people' },
      ratings: { _method: 'GET', _path: '/:id/ratings' },
      related: { _method: 'GET', _path: '/:id/related' },
      stats: { _method: 'GET', _path: '/:id/stats' },
      studios: { _method: 'GET', _path: '/:id/studios' },
      watching: { _method: 'GET', _path: '/:id/watching' },
      next_episode: { _method: 'GET', _path: '/:id/next_episode' },
      last_episode: { _method: 'GET', _path: '/:id/last_episode' },
      videos: { _method: 'GET', _path: '/:id/videos' },
      refresh: { _method: 'POST', _path: '/:id/refresh', _auth: true },
    },
    seasons: {
      _path: '/shows/:id/seasons',
      summary: { _method: 'GET' },
      season: { _method: 'GET', _path: '/:season/info' },
      episodes: { _method: 'GET', _path: '/:season' },
      translations: { _method: 'GET', _path: '/:season/translations/:?language' },
      comments: { _method: 'GET', _path: '/:season/comments/:?sort' },
      lists: { _method: 'GET', _path: '/:season/lists/:?type/:?sort' },
      people: { _method: 'GET', _path: '/:season/people' },
      ratings: { _method: 'GET', _path: '/:season/ratings' },
      stats: { _method: 'GET', _path: '/:season/stats' },
      watching: { _method: 'GET', _path: '/:season/watching' },
      videos: { _method: 'GET', _path: '/:season/videos' },
    },
    episodes: {
      _path: '/shows/:id/seasons/:season/episodes/:episode',
      summary: { _method: 'GET' },
      translations: { _method: 'GET', _path: '/translations/:?language' },
      comments: { _method: 'GET', _path: '/comments/:?sort' },
      lists: { _method: 'GET', _path: '/lists/:?type/:?sort' },
      people: { _method: 'GET', _path: '/people' },
      ratings: { _method: 'GET', _path: '/ratings' },
      stats: { _method: 'GET', _path: '/stats' },
      watching: { _method: 'GET', _path: '/watching' },
      videos: { _method: 'GET', _path: '/videos' },
    },
    sync: {
      _path: '/sync',
      last_activities: { _method: 'GET', _path: '/last_activities', _auth: true },
      playback: {
        _path: '/playback',
        get: { _method: 'GET', _path: '/:?type', _auth: true },
        remove: { _method: 'DELETE', _path: '/:id', _auth: true },
      },
      collection: {
        _path: '/collection',
        get: { _method: 'GET', _path: '/:type', _auth: true },
        add: { _method: 'POST', _auth: true },
        remove: { _method: 'POST', _path: '/remove', _auth: true },
      },
      watched: { _method: 'GET', _path: '/watched/:type', _auth: true },
      history: {
        _path: '/history',
        get: { _method: 'GET', _path: '/:?type/:?id', _auth: true },
        add: { _method: 'POST', _auth: true },
        remove: { _method: 'POST', _path: '/remove', _auth: true },
      },
      ratings: {
        _path: '/ratings',
        get: { _method: 'GET', _path: '/:?type/:?rating', _auth: true },
        add: { _method: 'POST', _auth: true },
        remove: { _method: 'POST', _path: '/remove', _auth: true },
      },
      watchlist: {
        _path: '/watchlist',
        get: { _method: 'GET', _path: '/:?type/:?sort_by/:?sort_how', _auth: true },
        update: { _method: 'PUT', _auth: true },
        add: { _method: 'POST', _auth: true },
        remove: { _method: 'POST', _path: '/remove', _auth: true },
        reorder: { _method: 'POST', _path: '/reorder', _auth: true },
        update_item: { _method: 'PUT', _path: '/:list_item_id', _auth: true },
      },
      favorites: {
        _path: '/favorites',
        get: { _method: 'GET', _path: '/:?type/:?sort_by/:?sort_how', _auth: true },
        update: { _method: 'PUT', _auth: true },
        add: { _method: 'POST', _auth: true },
        remove: { _method: 'POST', _path: '/remove', _auth: true },
        reorder: { _method: 'POST', _path: '/reorder', _auth: true },
        update_item: { _method: 'PUT', _path: '/:list_item_id', _auth: true },
      },
    },
    users: {
      _path: '/users',
      settings: { _method: 'GET', _path: '/settings', _auth: true },
      requests: {
        _path: '/requests',
        following: { _method: 'GET', _path: '/following', _auth: true },
        get: { _method: 'GET', _auth: true },
        approve: { _method: 'POST', _path: '/:id', _auth: true },
        deny: { _method: 'DELETE', _path: '/:id', _auth: true },
      },
      saved_filters: { _method: 'GET', _path: '/saved_filters/:?section', _auth: true },
      hidden: {
        _path: '/hidden',
        get: { _method: 'GET', _path: '/:section', _auth: true },
        add: { _method: 'POST', _path: '/:section', _auth: true },
        remove: { _method: 'POST', _path: '/:section/remove', _auth: true },
      },
      profile: { _method: 'GET', _path: '/:id' },
      likes: { _method: 'GET', _path: '/:id/likes/:?type' },
      collection: { _method: 'GET', _path: '/:id/collection/:type' },
      comments: { _method: 'GET', _path: '/:id/comments/:?comment_type/:?type' },
      notes: { _method: 'GET', _path: '/:id/notes/:?type' },
      lists: {
        _path: '/:id/lists',
        get: { _method: 'GET' },
        create: { _method: 'POST', _auth: true },
        reorder: { _method: 'POST', _path: '/reorder', _auth: true },
        collaborations: { _method: 'GET', _path: '/collaborations' },
      },
      list: {
        _path: '/:id/lists/:list_id',
        get: { _method: 'GET' },
        update: { _method: 'PUT', _auth: true },
        delete: { _method: 'DELETE', _auth: true },
        likes: {
          get: { _method: 'GET', _path: '/likes' },
          add: { _method: 'POST', _path: '/like', _auth: true },
          remove: { _method: 'DELETE', _path: '/like', _auth: true },
        },
        items: {
          _path: '/items',
          get: { _method: 'GET', _path: '/:?type/:?sort_by/:?sort_how' },
          add: { _method: 'POST', _auth: true },
          remove: { _method: 'POST', _path: '/remove', _auth: true },
          reorder: { _method: 'POST', _path: '/reorder', _auth: true },
          update: { _method: 'PUT', _path: '/:list_item_id', _auth: true },
        },
        comments: { _method: 'GET', _path: '/comments/:?sort' },
      },
      follow: {
        _path: '/:id/follow',
        add: { _method: 'POST', _auth: true },
        remove: { _method: 'DELETE', _auth: true },
      },
      followers: { _method: 'GET', _path: '/:id/followers' },
      following: { _method: 'GET', _path: '/:id/following' },
      friends: { _method: 'GET', _path: '/:id/friends' },
      history: { _method: 'GET', _path: '/:id/history/:?type/:?item_id' },
      ratings: { _method: 'GET', _path: '/:id/ratings/:?type/:?rating' },
      watchlist: { _method: 'GET', _path: '/:id/watchlist/:?type/:?sort_by/:?sort_how' },
      watchlist_comments: { _method: 'GET', _path: '/:id/watchlist/comments/:?sort' },
      favorites: { _method: 'GET', _path: '/:id/favorites/:?type/:?sort_by/:?sort_how', _auth: true },
      favorites_comments: { _method: 'GET', _path: '/:id/favorites/comments/:?sort' },
      watching: { _method: 'GET', _path: '/:id/watching' },
      watched: { _method: 'GET', _path: '/:id/watched/:type' },
      stats: { _method: 'GET', _path: '/:id/stats' },
    },
  };
}
