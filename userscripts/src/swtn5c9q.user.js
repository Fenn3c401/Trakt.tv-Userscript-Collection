// ==UserScript==
// @name         Trakt.tv | Playback Progress Manager
// @description  Adds playback progress badges to in-progress movies/episodes and allows for setting and removing playback progress states. Also adds playback progress overview pages to the "Progress" tab and allows for bulk deletion and renewal. DOES NOT WORK WITHOUT THE "TRAKT API WRAPPER" USERSCRIPT!
// @version      1.0.1
// @namespace    swtn5c9q
// @updateURL    https://update.greasyfork.org/scripts/564749.meta.js
// @icon         https://trakt.tv/assets/logos/logomark.square.gradient-b644b16c38ff775861b4b1f58c1230f6a097a2466ab33ae00445a505c33fcb91.svg
// @match        https://trakt.tv/*
// @match        https://classic.trakt.tv/*
// @run-at       document-start
// @grant        unsafeWindow
// @grant        GM_info
// @grant        GM_addStyle
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// ==/UserScript==

/* README
> Inspired by sharkykh's [Trakt.tv Playback Progress Manager](https://sharkykh.github.io/tppm/).

### General
- This script does not work without the [Trakt API Wrapper](f785bub0.md) userscript, so you'll need to install that one as well (or the [Megascript](zzzzzzzz.md)).
- By clicking on a playback progress badge, you can access options to either set a new playback progress state or remove it entirely.
- There are three context menu commands. "Set New" is only available on movie and episode summary pages and allows for setting a new playback progress state for that title.
    "Delete All" and "Renew All" are only available on the [Playback Progress - All Types](https://trakt.tv/users/me/progress/playback) page as those affect all stored playback progress states.
    From my testing the context menu commands are added reliably in Chrome, but not so much in Firefox. Fortunately Tampermonkey allows for triggering context menu commands via its
    extension popup window as well (see the screenshots below), so you can just use that as alternative.
- Playback progress states are automatically removed by Trakt after 6 months. Renewing them postpones the auto-removal by first removing and then setting the
    playback progress states again, while preserving the current order.
- Marking an in-progress movie or episode as watched will also remove the corresponding playback progress state.

### Playback Progress on Trakt
Trakt has supported storing playback progress states for movies and episodes via their api for many years now, however for some reason they never actually bothered to add support
for this to their website, so if you wanted to access those progress states you had to either do it through whichever 3rd party application saved them in the first place,
or use sharkykh's [TPPM](https://sharkykh.github.io/tppm/).

This has changed now, they've finally added native support for this to the new lite version of the website. Specifically on the "continue watching" page you can now see and remove
the playback progress states of movies. From what I can tell there's no episode support, no bulk actions, no option to set a new state and most importantly there are no
playback progress indicators on movie summary pages or any of the other grid views outside of the "continue watching" page. It's a rather lackluster implementation,
though at least it's in line with the rest of their new version.
*/


/* global moduleName */

'use strict';

let $, Cookies, traktApiWrapper;

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

const getProgRuntimeText = (itemData, runtime) => {
  const hoursIn = ~~(((itemData.progress / 100) * runtime) / 60),
        minsIn = Math.round(((itemData.progress / 100) * runtime) % 60),
        hoursLeft = ~~(((1 - (itemData.progress / 100)) * runtime) / 60),
        minsLeft = Math.round(((1 - (itemData.progress / 100)) * runtime) % 60);
  return `${itemData.progress.toFixed(1)}% (${hoursIn ? `${hoursIn}h` : ''}${minsIn}m | -${hoursLeft ? `${hoursLeft}h` : ''}${minsLeft}m)`;
}

const pbProgItems = {},
      menuCommands = { set: null, removeAll: null, renewAll: null };
let lastPausedAt;


if (location.pathname.includes('/progress/playback')) document.body?.classList.add('playback');
addStyles();

document.addEventListener('turbo:load', () => {
  $ ??= unsafeWindow.jQuery;
  Cookies ??= unsafeWindow.Cookies;
  traktApiWrapper ??= unsafeWindow.userscriptTraktApiWrapper;
  if (!$ || !Cookies) return;
  if (!traktApiWrapper) { logger.error('"Trakt API Wrapper" is not available. Please make sure you have it installed and/or enabled. Aborting..', { toast: false }); return; }

  unsafeWindow.userscriptPbProgMan ={
    set: setPbProg,
    remove: removePbProg,
    getAll: getPbProgAll,
    removeAll: removePbProgAll,
    renewAll: renewPbProgAll,
    items: pbProgItems,
  };

  Object.entries(menuCommands).forEach(([name, id]) => { if (id !== null) { GM_unregisterMenuCommand(id); menuCommands[name] = null; }; });
  const itemUrl = $(`:is(.sidebar, .sidebar .btn-item-report):is([data-type="movie"], [data-type="episode"])`).attr('data-url');
  if (itemUrl) menuCommands.set = GM_registerMenuCommand('PPM: Set New', () => setPbProg(itemUrl));

  if (location.pathname.includes('/progress/playback')) $('body').addClass('playback');
  if (new RegExp(`/users/(me|${Cookies.get('trakt_userslug')})/progress`).test(location.pathname)) addPbProgDropdownEntries();

  $(document).off('ajaxSuccess.userscript09213').on('ajaxSuccess.userscript09213', async (_evt, _xhr, opt, resp) => {
    if (opt.url.includes('/me/last_activities')) {
      if(!lastPausedAt || lastPausedAt !== resp.movies.paused_at + resp.episodes.paused_at) {
        getPbProgAll();
        lastPausedAt = resp.movies.paused_at + resp.episodes.paused_at;
      } else if (!$('#playback-progress-wrapper').length) {
        if ($('body').is('.show_progress.is-self.playback')) await populatePbProgPage();
        addPbProgBadges();
      }
    }

    if ([
      /\/shows\/.*\/recent_episodes$/,
      /\/movies\/.*\/related_items$/,
      /\/dashboard\/(recently_watched|on_deck|recommendations\/movies|network_activies|list)$/,
      /\/users\/.*\/profile\/(recently_watched|most_watched\/movies)$/,
    ].some((regExp) => regExp.test(opt.url))) addPbProgBadges();

    if (opt.url.endsWith('/watch')) {
      const itemUrl = opt.url.match(/(.+)\/watch/)[1];
      if (pbProgItems[itemUrl]) removePbProg(itemUrl);
    }
  });
}, { capture: true });

///////////////////////////////////////////////////////////////////////////////////////////////

async function setPbProg(itemUrl, progRaw, toast = true) {
  progRaw ??= prompt(`Please enter your playback progress.\nhttps://trakt.tv${itemUrl}\n\nIt's not possible to set a playback progress of < 1% or >= 80%.\n` +
                     `The input parsing is very lenient, valid formats include:\n13 | 13.37 | 13,37% | 0:42 | 0:42:59 | : 42 | 2h42m | 42 M 59s 2 H`);
  if (progRaw === null) return;
  const prog = await parseProgRaw(progRaw, itemUrl);
  if (!prog) { logger.error('Invalid playback progress input.'); return; }

  if (pbProgItems[itemUrl]) await removePbProg(itemUrl, false);

  try {
    const itemUrlSplit = itemUrl.split('/').filter(Boolean),
          itemType = itemUrlSplit[0].slice(0, -1);
    pbProgItems[itemUrl] = {
      ...(await traktApiWrapper.scrobble.stop({ [itemType]: { ids: { [itemType === 'movie' ? 'slug' : 'trakt']: itemUrlSplit[1] } }, progress: prog })),
      paused_at: new Date().toISOString(),
      type: itemType,
    };
    logger.success(`Playback progress for "${pbProgItems[itemUrl].show ? `${pbProgItems[itemUrl].show.title} - ` : ''}${pbProgItems[itemUrl][pbProgItems[itemUrl].type].title}" ` +
                   `has been set to ${pbProgItems[itemUrl].progress.toFixed(1)}%.`, { toast, data: pbProgItems[itemUrl] });
  } catch (err) {
    logger.error(`Failed to set playback progress!`, { toast, data: err });
    throw err;
  }

  if ($('body').is('.show_progress.is-self.playback')) await populatePbProgPage();
  addPbProgBadges();
}

async function removePbProg(itemUrl, toast = true) {
  try {
    await traktApiWrapper.sync.playback.remove({ id: pbProgItems[itemUrl].id });
    logger.success(`Playback progress for "${pbProgItems[itemUrl].show ? `${pbProgItems[itemUrl].show.title} - ` : ''}` +
                   `${pbProgItems[itemUrl][pbProgItems[itemUrl].type].title}" has been removed.`, { toast, data: pbProgItems[itemUrl] });
    delete pbProgItems[itemUrl];
  } catch (err) {
    if (err.status === 404) {
      logger.warning(`Playback progress has already been removed.`, { toast, data: err });
      delete pbProgItems[itemUrl];
    } else {
      logger.error(`Failed to remove playback progress!`, { toast, data: err });
      throw err;
    }
  }

  if ($('body').is('.show_progress.is-self.playback')) {
    $(`.grid-item[data-url="${itemUrl}"]`).remove();
    $('body > .tooltip').tooltip('destroy');
  } else $(`.pb-prog-badge[data-url="${itemUrl}"]`).remove();
}

async function getPbProgAll() {
  const resp = await traktApiWrapper.sync.playback.get();
  Object.keys(pbProgItems).forEach((itemUrl) => delete pbProgItems[itemUrl]);
  Object.assign(pbProgItems, Object.fromEntries(resp.map((item) => [`/${item.type}s/${item[item.type].ids[item.type === 'movie' ? 'slug' : 'trakt']}`, item])));

  if ($('body').is('.show_progress.is-self.playback')) await populatePbProgPage();
  $(`.pb-prog-badge`).remove();
  addPbProgBadges();

  return pbProgItems;
}

async function removePbProgAll(toast = true) {
  await Promise.all(
    Object.entries(pbProgItems)
      .sort((a, b) => new Date(a[1].paused_at) - new Date(b[1].paused_at))
      .map(([itemUrl]) => removePbProg(itemUrl, false))
  );
  logger.success(`All playback progress items have been removed.`, { toast });
}

async function renewPbProgAll(toast = true) {
  const sortedRenewableItemEntries = Object.entries(pbProgItems)
    .filter(([, { progress }]) => progress < 80)
    .sort((a, b) => new Date(a[1].paused_at) - new Date(b[1].paused_at));
  for (const [itemUrl, { progress }] of sortedRenewableItemEntries) await setPbProg(itemUrl, progress, false);

  if (sortedRenewableItemEntries.length) logger.success(`All (${sortedRenewableItemEntries.length}) renewable playback progress items have been renewed.`, { toast });
  else logger.warning(`No renewable playback progress items found.`, { toast });
}

async function parseProgRaw(progRaw, itemUrl) {
  progRaw = `${progRaw}`.trim();
  let prog;

  if (/^[\d.,%]+$/.test(progRaw)) {
    prog = parseFloat(progRaw.replace(',', '.'));
  } else if (itemUrl) {
    const itemUrlSplit = itemUrl.split('/').filter(Boolean),
          runtime = itemUrlSplit[0] === 'movies'
            ? (await traktApiWrapper.movies.summary({ id: itemUrlSplit[1], extended: 'full' })).runtime
            : (await traktApiWrapper.search.id({ id_type: 'trakt', id: itemUrlSplit[1], type: 'episode', extended: 'full' }))[0].episode.runtime;
    if (runtime) {
      if (progRaw.includes(':')) {
        prog = (progRaw.split(':').slice(0, 3).reduce((acc, v, i) => acc + v * (3600 / (60 ** i)), 0) / (runtime * 60)) * 100;
      } else if (/[hms]/i.test(progRaw)) {
        const [h, m, s] = ['h', 'm', 's'].map((unit) => +progRaw.match(new RegExp(`(\\d+)\s*${unit}`, 'i'))?.[1] || 0);
        prog = ((h*3600 + m*60 + s) / (runtime * 60)) * 100;
      }
    }
  }
  if (!isNaN(prog) && prog >= 1 && prog < 80) return prog;
}

///////////////////////////////////////////////////////////////////////////////////////////////

function addPbProgBadges() {
  if (!Object.keys(pbProgItems).length) return;

  $(`.grid-item:is([data-type="movie"], [data-type="episode"]):has(.poster, .fanart):not(:has(.pb-prog-badge)), ` +
    `.sidebar:is([data-type="movie"], [data-type="episode"], :has(.btn-item-report:is([data-type="movie"], [data-type="episode"]))):not(:has(.pb-prog-badge)), ` +
    `#summary-ratings-wrapper:has(.summary-user-rating:is([data-type="movie"], [data-type="episode"])) ~ .summary .mobile-poster:not(:has(.pb-prog-badge))`).each((_i, e) => {
    const itemUrl = $(e).attr('data-url') ?? $('.notable-summary').attr('data-url'),
          runtime = $(e).attr('data-runtime') ?? $('.notable-summary').attr('data-runtime');

    if (pbProgItems[itemUrl]) {
      $(`<div class="pb-prog-badge" data-url="${itemUrl}" style="--pb-prog-percent: ${pbProgItems[itemUrl].progress}%; display: none;"><div class="icon fa-solid fa-pause"></div></div>`)
        .appendTo($(e).is('.grid-item') ? $(e) : $(e).find('.poster')).tooltip({
          title: () =>
            `<span style="white-space: nowrap;">` +
              `Playback Progress<br>` +
              `${getProgRuntimeText(pbProgItems[itemUrl], runtime)}<br>` +
              `${unsafeWindow.formatDate(pbProgItems[itemUrl].paused_at)}<br>` +
              `<em>Click for options</em>` +
            `</span>`,
          placement: 'right',
          container: 'body',
          html: true,
        }).popover({
          template: '<div class="popover remove" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
          title: 'Playback Progress Options',
          content:
            `<button class="btn btn-primary less-rounded" onclick="$(this).closest('.popover').popover('hide'); userscriptPbProgMan.set('${itemUrl}');">Set New</button>` +
            `<button class="btn btn-primary less-rounded" onclick="$(this).closest('.popover').popover('destroy'); userscriptPbProgMan.remove('${itemUrl}');">Remove</button>` +
            `<button class="btn btn-cancel less-rounded" onclick="$(this).closest('.popover').popover('hide');">Cancel</button>`,
          trigger: 'manual',
          placement: 'bottom',
          container: 'body',
          html: true,
        }).on('click', function(evt) {
          evt.preventDefault();
          $(this).tooltip('hide').popover('show');
        }).fadeIn();
    }
  });
}

///////////////////////////////////////////////////////////////////////////////////////////////

function addPbProgDropdownEntries() {
  const $dropdownMenu = $('.subnav-wrapper .left .dropdown-menu');
  $dropdownMenu.append(
    `<li class="divider fader" role="presentation"></li>` +
    `<li class="dropdown-header" role="presentation">PLAYBACK</li>` +
    `<li><a href="/users/me/progress/playback">All Types</a></li>` +
    `<li><a href="/users/me/progress/playback/movies">Movies</a></li>` +
    `<li><a href="/users/me/progress/playback/episodes">Episodes</a></li>`
  );
  if ($('body').is('.playback')) {
    $dropdownMenu
      .find('.selected').removeClass('selected')
      .end().find(`[href$="${location.pathname.split('/').pop()}"]`).addClass('selected')
      .end().prev().contents()[0].textContent = `Playback - ${$dropdownMenu.find('.selected').text()} `;
  }
}

async function populatePbProgPage() {
  const typeFilter = location.pathname.split('/playback').pop();
  const $gridItems = await Promise.all(
    Object.entries(pbProgItems)
      .filter(([, { type }]) => !typeFilter || typeFilter.includes(type))
      .sort((a, b) => new Date(b[1].paused_at) - new Date(a[1].paused_at))
      .map(async ([itemUrl, itemData]) => {
        const [summary, summaryEp] = await Promise.all([
          traktApiWrapper[itemData.movie ? 'movies' : 'shows'].summary({ id: itemData[itemData.movie ? 'movie' : 'show'].ids.trakt, extended: 'full,images' }),
          itemData.episode ? traktApiWrapper.episodes.summary({ id: itemData.show.ids.trakt, season: itemData.episode.season, episode: itemData.episode.number, extended: 'full,images' }) : null,
        ]);
        return buildPbProgGridItem(itemUrl, itemData, summary, summaryEp);
      })
  );

  $(':is(#progress-wrapper, #playback-progress-wrapper)').attr('id', 'playback-progress-wrapper') // id change to bypass native progress watched actions (e.g. auto refresh)
    .children().html('<div class="row"></div>')
  $('body > .tooltip').tooltip('destroy');

  if ($gridItems.length) {
    $('#playback-progress-wrapper .row').addClass('posters').append($gridItems);
    unsafeWindow.isProgress = false; // needed for correct note-badge insertion/placement in addOverlays() => addNotesOverlays()
    unsafeWindow.addOverlays();
    unsafeWindow.posterGridTooltips();
    unsafeWindow.formatDates();
    unsafeWindow.hideUnreleasedRatings();
    unsafeWindow.lazyLoadImages();

    if (!typeFilter) {
      const removeAllMsg = `Remove all (${$gridItems.length}) playback progress items?\nThis will take about ${$gridItems.length * 1}s and cannot be undone!`,
            renewAllMsg = `Renew all (${$gridItems.length}) playback progress items?\nThis will take about ${$gridItems.length * 2}s and cannot be undone!\n\n` +
                          `Playback progress states are automatically removed by Trakt after 6 months. Renewing them postpones the auto-removal by first removing ` +
                          `and then setting the playback progress states again, while preserving the current order. Due to trakt api changes playback progress items ` +
                          `with a progress of >= 80% cannot be renewed and will be excluded.`;
      [['removeAll', 'Remove All', removeAllMsg, removePbProgAll], ['renewAll', 'Renew All', renewAllMsg, renewPbProgAll]].forEach(([idKey, name, msg, fn]) => {
        menuCommands[idKey] ??= GM_registerMenuCommand(`PPM: ${name}`, () => confirm(msg) && fn());
      });
    }
  } else {
    $('#playback-progress-wrapper .row').html(`<div class="col-md-12"><br><div class="alert alert-no-data">Nothing to see here. Move along, move along.</div></div>`);
  }
}

function buildPbProgGridItem(itemUrl, itemData, summary, summaryEp) {
  const releaseDate = summaryEp?.first_aired ?? summary.first_aired ?? summary.released + 'T00:00:00Z';
  const dataPercentage = Math.floor((summaryEp ?? summary).rating * 10);
  const runtime = (summaryEp ?? summary).runtime;
  const longPath = itemData.movie
    ? itemUrl
    : `/shows/${itemData.show.ids.slug}/seasons/${itemData.episode.season}/episodes/${itemData.episode.number}`;
  const longTitle = itemData.movie
    ? `${itemData.movie.title} (${itemData.movie.year})`
    : `${itemData.show.title}&lt;br&gt;${itemData.episode.season}x${String(itemData.episode.number).padStart(2, '0')} &quot;${itemData.episode.title}&quot;`;
  const dataEpisodeTitle = itemData.episode
    ? `&lt;span class='main-title-sxe'&gt;${itemData.episode.season}x${String(itemData.episode.number).padStart(2, '0')}&lt;/span&gt; &lt;span class='main-title' data-spoiler-episode-id='${itemData.episode.ids.trakt}' data-spoiler-show-id='${itemData.show.ids.trakt}'&gt;${itemData.episode.title}&lt;/span&gt;`
    : null;
  const episodeTypeClass = summaryEp
    ? summaryEp.episode_type.replace('_', '-')
    : null;
  const episodeTypeLabel = summaryEp && summaryEp.episode_type !== 'standard'
    ? summaryEp.episode_type.replace('_', ' ').toUpperCase()
    : null;

  return $(
    `<div class="grid-item col-xs-6 col-md-2 col-sm-3" data-${itemData.type}-id="${itemData[itemData.type].ids.trakt}" data-runtime="${runtime}" data-total-runtime="${runtime}" data-type="${itemData.type}" data-url="${itemUrl}" itemscope="" itemtype="http://schema.org/${itemData.movie ? 'Movie' : 'TVEpisode'}"` +
    ` data-paused-at="${itemData.paused_at}" data-progress="${itemData.progress}" data-percentage="${dataPercentage}" data-released="${releaseDate}" data-title="${longTitle}" data-votes="${summaryEp?.votes ?? summary.votes}"` +
    (itemData.episode
      ? ` data-episode-number="${itemData.episode.number}" ${itemData.episode.number === 1 ? `data-episode-type-class="${episodeTypeClass}" data-episode-type-label="${episodeTypeLabel}" ` : ''}data-season-id="" data-season-number="${itemData.episode.season}" data-show-id="${itemData.show.ids.trakt}" itemprop="episode"`
      : '') + '>' +
      `<meta content="https://trakt.tv${longPath}" itemprop="url">` +
      `<a href="${longPath}">` +
        `<div class="poster" title="${longTitle}">` +
          `<img class="base" src="/assets/placeholders/thumb/poster-7d5f5ef772b207dc5e74b5d7b0f1b5be444ea217fe09dbbe5995ffec2fefcd98.png">` +
          `<img class="real" data-original="https://${summary.images.poster[0]}" src="/assets/placeholders/thumb/poster-7d5f5ef772b207dc5e74b5d7b0f1b5be444ea217fe09dbbe5995ffec2fefcd98.png">` +
          `<div class="loading">` +
            `<div class="icon">` +
              `<div class="fa fa-refresh fa-spin"></div>` +
            `</div>` +
          `</div>` +
        `</div>` +
      `</a>` +
      `<div class="quick-icons smaller">` +
        `<div class="actions">` +
          `<a class="watch" data-${itemData.type}-id="${itemData[itemData.type].ids.trakt}" data-fanart="https://${summary.images.fanart[0]}" data-first-aired="${releaseDate}" data-full-title="${longTitle.split('&lt;br&gt;').join('  ')}" data-logo="https://${summary.images.logo[0]}" data-runtime="${runtime}" data-top-title="${itemData[itemData.type].title + (itemData.movie ? ` (${itemData.movie.year})` : '')}" data-total-runtime="${runtime}" data-type="${itemData.type}" data-url="${itemUrl}"` +
          (itemData.episode
            ? ` data-episode-number="${itemData.episode.number}" data-episode-title="${dataEpisodeTitle}" ${itemData.episode.number === 1 ? `data-episode-type-class="${episodeTypeClass}" data-episode-type-label="${episodeTypeLabel}" ` : ''}data-screenshot="${summaryEp.images.screenshot[0]}" data-season-id="" data-season-number="${itemData.episode.season}" data-show-id="${itemData.show.ids.trakt}"`
            : '') + '>' +
            `<div class="base"></div>` +
            `<div class="icon trakt-icon-check-thick"></div>` +
          `</a>` +
          `<a class="collect" data-original-title="" title="">` +
            `<div class="base"></div>` +
            `<div class="icon trakt-icon-collection-thick"></div>` +
          `</a>` +
          `<a class="list" data-original-title="" title="">` +
            `<div class="base"></div><div class="icon trakt-icon-list-thick"></div>` +
          `</a>` +
          `<a class="watch-now" data-source-counts="{'us':1}" data-source-slugs="{}" data-target="#watch-now-modal" data-toggle="modal" data-url="${itemUrl}" data-original-title="" title="">` +
            `<div class="base"></div>` +
            `<div class="fa-solid fa-play"></div>` +
          `</a>` +
        `</div>` +
        `<div class="metadata">` +
          `<div class="percentage" data-earliest-release-date="${releaseDate}" data-original-title="" title="">` +
            `<div class="fa fa-heart rating-${Math.floor((summaryEp ?? summary).rating)}"></div>${dataPercentage}%` +
          `</div>` +
        `</div>` +
      `</div>` +
      `<div class="titles">` +
        `<a class="titles-link" href="${longPath.split('/episodes/')[0]}">` +
          `<h3 class="ellipsify">` +
            (itemData.episode
              ? `<span class='main-title-sxe'>${itemData.episode.season}x${String(itemData.episode.number).padStart(2, '0')}</span> ` +
                `<span class='main-title' data-spoiler-episode-id='${itemData.episode.ids.trakt}' data-spoiler-show-id='${itemData.show.ids.trakt}'>${itemData.episode.title}</span>`
              : itemData.movie.title) +
          `</h3>` +
        `</a>` +
        `<a class="titles-link" href="${longPath.split('/seasons/')[0]}">` +
          `<h4 class="ellipsify">${getProgRuntimeText(itemData, runtime)}</h4>` +
        `</a>` +
        `<div class="titles-link">` +
          `<h4 class="ellipsify">` +
            `<span class="format-date relative-date-swap" data-date="${itemData.paused_at}">${itemData.paused_at}</span>` +
          `</h4>` +
        `</div>` +
      `</div>` +
      (itemData.episode
        ? `<span class="hidden" itemprop="partOfSeries" itemscope="" itemtype="http://schema.org/TVSeries">` +
            `<meta content="${itemData.show.title}" itemprop="name">` +
            `<meta content="https://trakt.tv/shows/${itemData.show.ids.slug}" itemprop="sameAs">` +
          `</span>` +
          `<meta content="${itemData.episode.number}" itemprop="episodeNumber">`
        : '') +
      `<meta content="${itemData[itemData.type].title + (itemData.movie ? ` (${itemData.movie.year})` : '')}" itemprop="name">` +
      `<meta content="${releaseDate}" itemprop="datePublished">` +
    `</div>`
  );
}

///////////////////////////////////////////////////////////////////////////////////////////////

function addStyles() {
  GM_addStyle(`
.pb-prog-badge {
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background:
    radial-gradient(#555 45%, transparent 45%),
    conic-gradient(from 180deg, #4CAF50 var(--pb-prog-percent), #333 var(--pb-prog-percent));
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ccc;
  z-index: 30;
  top: -10px;
  left: 0;
}
.grid-item:has(> .notable-badge, > .added-by) .pb-prog-badge {
  left: 20px;
}
.grid-item:has(> .notable-badge):has(> .added-by) .pb-prog-badge {
  left: 40px;
}
:is(.sidebar, .fanarts) :is(.pb-prog-badge, .notable-badge, .rewatching-badge) {
  top: 1.5% !important;
  margin-left: 1.5% !important;
}

body.show_progress.playback :is(#progress-wrapper, .subnav-wrapper .right, .subnav-wrapper.visible-xs-block .left) {
  display: none !important;
}
#playback-progress-wrapper .titles {
  margin: 10px 5px 10px !important;
}
#playback-progress-wrapper .titles h3 {
  margin-top: 0 !important;
}

.reports-wrapper .grid-item {
  position: relative;
}
  `);
}
