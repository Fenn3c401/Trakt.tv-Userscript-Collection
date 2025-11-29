// ==UserScript==
// @name         Trakt.tv | Megascript
// @description  All 11 userscripts from my "Trakt.tv Userscript Collection" repo merged into one for convenience. See README for details.
// @version      2025-11-29_04-19
// @namespace    https://github.com/Fenn3c401
// @author       Fenn3c401
// @license      GPL-3.0-or-later
// @homepageURL  https://github.com/Fenn3c401/Trakt.tv-Userscript-Collection#readme
// @supportURL   https://github.com/Fenn3c401/Trakt.tv-Userscript-Collection/issues
// @updateURL    https://raw.githubusercontent.com/Fenn3c401/Trakt.tv-Userscript-Collection/main/userscripts/meta/zzzzzzzz.meta.js
// @downloadURL  https://raw.githubusercontent.com/Fenn3c401/Trakt.tv-Userscript-Collection/main/userscripts/dist/zzzzzzzz.user.js
// @icon         data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDQ4IDQ4Ij4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiB1cmwoI3JhZGlhbC1ncmFkaWVudCk7CiAgICAgIH0KCiAgICAgIC5jbHMtMiB7CiAgICAgICAgZmlsbDogI2ZmZjsKICAgICAgfQogICAgPC9zdHlsZT4KICAgIDxyYWRpYWxHcmFkaWVudCBpZD0icmFkaWFsLWdyYWRpZW50IiBjeD0iNDguNDYiIGN5PSItLjk1IiBmeD0iNDguNDYiIGZ5PSItLjk1IiByPSI2NC44NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM5ZjQyYzYiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuMjciIHN0b3AtY29sb3I9IiNhMDQxYzMiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuNDIiIHN0b3AtY29sb3I9IiNhNDNlYmIiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuNTMiIHN0b3AtY29sb3I9IiNhYTM5YWQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuNjQiIHN0b3AtY29sb3I9IiNiNDMzOWEiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuNzMiIHN0b3AtY29sb3I9IiNjMDJiODEiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuODIiIHN0b3AtY29sb3I9IiNjZjIwNjEiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuOSIgc3RvcC1jb2xvcj0iI2UxMTQzYyIvPgogICAgICA8c3RvcCBvZmZzZXQ9Ii45NyIgc3RvcC1jb2xvcj0iI2Y1MDYxMyIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9InJlZCIvPgogICAgPC9yYWRpYWxHcmFkaWVudD4KICA8L2RlZnM+CiAgPGcgaWQ9Il94MkRfLXByb2R1Y3Rpb24iPgogICAgPGcgaWQ9ImxvZ29tYXJrLnNxdWFyZS5ncmFkaWVudCI+CiAgICAgIDxwYXRoIGlkPSJiYWNrZ3JvdW5kIiBjbGFzcz0iY2xzLTEiIGQ9Ik00OCwxMS4yNnYyNS40N2MwLDYuMjItNS4wNSwxMS4yNy0xMS4yNywxMS4yN0gxMS4yNmMtNi4yMiwwLTExLjI2LTUuMDUtMTEuMjYtMTEuMjdWMTEuMjZDMCw1LjA0LDUuMDQsMCwxMS4yNiwwaDI1LjQ3YzMuMzIsMCw2LjMsMS40Myw4LjM3LDMuNzIuNDcuNTIuODksMS4wOCwxLjI1LDEuNjguMTguMjkuMzQuNTkuNS44OS4zMy42OC42LDEuMzkuNzksMi4xNC4xLjM3LjE4Ljc2LjIzLDEuMTUuMDkuNTQuMTMsMS4xMS4xMywxLjY4WiIvPgogICAgICA8ZyBpZD0iY2hlY2tib3giPgogICAgICAgIDxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTEzLjYyLDE3Ljk3bDcuOTIsNy45MiwxLjQ3LTEuNDctNy45Mi03LjkyLTEuNDcsMS40N1pNMjguMDEsMzIuMzdsMS40Ny0xLjQ2LTIuMTYtMi4xNiwyMC4zMi0yMC4zMmMtLjE5LS43NS0uNDYtMS40Ni0uNzktMi4xNGwtMjIuNDYsMjIuNDYsMy42MiwzLjYyWk0xMi45MiwxOC42N2wtMS40NiwxLjQ2LDE0LjQsMTQuNCwxLjQ2LTEuNDctNC4zMi00LjMxTDQ2LjM1LDUuNGMtLjM2LS42LS43OC0xLjE2LTEuMjUtMS42OGwtMjMuNTYsMjMuNTYtOC42Mi04LjYxWk00Ny44Nyw5LjU4bC0xOS4xNywxOS4xNywxLjQ3LDEuNDYsMTcuODMtMTcuODN2LTEuMTJjMC0uNTctLjA0LTEuMTQtLjEzLTEuNjhaTTI1LjE2LDIyLjI3bC03LjkyLTcuOTItMS40NywxLjQ3LDcuOTIsNy45MiwxLjQ3LTEuNDdaTTQxLjMyLDM1LjEyYzAsMy40Mi0yLjc4LDYuMi02LjIsNi4ySDEyLjg4Yy0zLjQyLDAtNi4yLTIuNzgtNi4yLTYuMlYxMi44OGMwLTMuNDIsMi43OC02LjIxLDYuMi02LjIxaDIwLjc4di0yLjA3SDEyLjg4Yy00LjU2LDAtOC4yOCwzLjcxLTguMjgsOC4yOHYyMi4yNGMwLDQuNTYsMy43MSw4LjI4LDguMjgsOC4yOGgyMi4yNGM0LjU2LDAsOC4yOC0zLjcxLDguMjgtOC4yOHYtMy41MWgtMi4wN3YzLjUxWiIvPjwhLS0gNDVkMjM4NWQzYWFjYmI1OTMyNmEzODYxNDljNWE4NzggLS0+CiAgICAgIDwvZz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPg==
// @match        https://trakt.tv/*
// @run-at       document-body
// @resource     bitcine    https://www.bitcine.app/logo.svg
// @resource     cineby     https://www.cineby.ru/logo.png
// @resource     hexa       https://hexa.watch/hexa-logo.png
// @require      https://cdn.jsdelivr.net/npm/chart.js@4.4.9/dist/chart.umd.min.js#sha256-vOFUCAlZxXS+C7axqST/MvCOvG/0YMFZFx9RxTgCyEQ=
// @require      https://cdn.jsdelivr.net/npm/chartjs-plugin-zoom@2.2.0/dist/chartjs-plugin-zoom.min.js#sha256-5KCI5bq5O+buR8k57rnrqoDgs5FW1L39GvnIRL6BtsQ=
// @require      https://cdn.jsdelivr.net/npm/croner@9.0.0/dist/croner.umd.min.js#sha256-HN5mqfFU4KGwMqzXnKEjtnbQQpK8bGtloFZZQ93GADw=
// @grant        unsafeWindow
// @grant        GM_addStyle
// @grant        GM_getResourceURL
// @grant        GM_info
// @grant        GM_openInTab
// @grant        GM.cookie
// @grant        GM.getValue
// @grant        GM.getValues
// @grant        GM.setValue
// @grant        GM.xmlHttpRequest
// @connect      forvo.com
// @connect      walter-r2.trakt.tv
// ==/UserScript==

/* README
### General
- You can turn off individual modules in the userscript storage tab *(note: only displayed after first run)* by setting their respective id *(see table below)* to false.

| *SCRIPT_ID* | *NAME* |
| :---------- | :----- |
| `2hc6zfyy` | Trakt.tv \| Scheduled E-Mail Data Exports |
| `71cd9s61` | Trakt.tv \| Actor Pronunciation Helper |
| `cs1u5z40` | Trakt.tv \| Charts - Seasons |
| `fyk2l3vj` | Trakt.tv \| Enhanced Title Metadata |
| `kji85iek` | Trakt.tv \| Enhanced List Preview Posters |
| `p2o98x5r` | Trakt.tv \| All-in-One Lists View |
| `pmdf6nr9` | Trakt.tv \| Charts - Ratings Distribution |
| `txw82860` | Trakt.tv \| Nested Header Navigation Menus |
| `wkt34fcz` | Trakt.tv \| Custom Links (Watch-Now + External) |
| `x70tru7b` | Trakt.tv \| Partial VIP Unlock |
| `yl9xlca7` | Trakt.tv \| Average Season And Episode Ratings |
*/


/* README [Trakt.tv | Scheduled E-Mail Data Exports]
### General
- You might want to consider the use of an e-mail filter, so as to e.g. automatically move the data export e-mails to a dedicated trakt-tv-data-exports folder.
- If you don't like the success toasts, you can turn them off by setting showToastOnSuccess to false in the userscript storage tab *(note: only displayed after first run)*, there you can
    also specify your own [cron expression](https://crontab.guru/examples.html). E-Mail data exports have a cooldown period of 24 hours, there is no point in going below that with your cron expression.
*/

/* README [Trakt.tv | Charts - Seasons]
### General
- Clicking on the individual data points takes you to the summary page of the respective episode (or the comment page for comment data points).
- For charts with more than eight episodes, you can also zoom in by highlighting a section of the x-axis with your mouse. You can zoom out again by clicking anywhere inside the chart.
- This script won't work (well) on mobile devices and the chart is no beauty on light mode either. Basically the whole thing needs an overhaul and is not even close to being finished,
    but the core functionality is there and it might be while until I get back to it, which is why I'm putting it out there as it is right now.
*/

/* README [Trakt.tv | Enhanced Title Metadata]
> Inspired by sergeyhist's [Trakt.tv Clickable Info](https://github.com/sergeyhist/trakt-scripts/blob/main/trakt-info.user.js) userscript.

### General
- By clicking on the label for languages, genres, networks and studios, you can make a search for all their respective values combined, ANDed for genres and languages, ORed for networks and studios.
    For example if the genres are "Crime" and "Drama", then a label search will return a selection of other titles that also have the genres "Crime" AND "Drama".
- The search results default to either the "movies" or "shows" search category depending on the type of the current title.
- The title year and certification link to filtered search results as well.
- Mouse middle click opens the filtered search results (including those where the link is dynamically constructed) in a new background tab.
- Flags are not available for all countries.
- A "+ n more" button is added for networks when needed.
- Installing the [Trakt.tv | Partial VIP Unlock](x70tru7b.md) userscript will allow free users to further modify the applied advanced filters, after accessing the filtered search results.
- For the time being this script won't work for vip users.
*/

/* README [Trakt.tv | Enhanced List Preview Posters]
### General
- The [Trakt.tv | Bug Fixes and Optimizations](brzmp0a9.md) userscript fixes some rating related issues and enables (more) reliable updates of the list-preview-poster rating indicators.
*/

/* README [Trakt.tv | Charts - Ratings Distribution]
### General
- The installation of the [Trakt.tv | Trakt API Module](f785bub0.md) userscript is optional, as there is a (slower) scraping-based fallback, but very much recommended.
*/

/* README [Trakt.tv | Nested Header Navigation Menus]
> Inspired by sergeyhist's [Trakt.tv Hidden Items](https://github.com/sergeyhist/trakt-scripts/blob/main/Legacy/trakt-hidden.user.js) userscript.
*/

/* README [Trakt.tv | Custom Links (Watch-Now + External)]
> Inspired by Tusky's [Trakt Watchlist Downloader](https://greasyfork.org/scripts/17991) and Accus1958's [trakt.tv Streaming Services Integration](https://greasyfork.org/scripts/486706) userscripts.

### General
- The installation of the [Trakt.tv | Trakt API Module](f785bub0.md) userscript is optional, as there is a scraping-based fallback, but very much recommended. Scraping is comparatively slow,
    resource-intensive and error prone, with a heavily reduced set of available item-data. You can see what data is available by scraping alone, in the `scrapeFromSummaryPage()` function.
- This script also makes the color of watch-now buttons correspond to the title's digital release status. White means the title is available on a streaming service for your selected watch-now country,
    light-grey means the title is available on a streaming service of another country and dark-grey means that the title is not available on any streaming service.
    Keep in mind that the data-source-counts attribute (which this is based on) can be unreliable, the attribute can be empty despite the title being available for streaming or
    contain sources which don't actually have the title available yet.
- `DEFAULT_WNLINK_ADDITIONS` controls how many custom watch-now links are added to the two-slot watch-now preview on title summary pages and header search results. Can be 0-2.

### Adding/Modifying Custom Links
- Custom links are always inserted above the default links, in the order in which they appear in the respective configuration array.
- Item-data can be of five different types: `movies`, `shows`, `seasons`, `episodes` and `people`. `people` item-data is never provided to watch-now links. `seasons` and `episodes` item-data
    is the same as that for `shows`, except for it having an additional season/episode number property. You can see what data was fetched by checking `window.userscriptItemDataCache` in the console.
- There are eight properties that can be assigned to a custom link, all of which are technically optional, though at least a `name` and either `buildUrl` or `evalOnClick` should be provided:

| *LINK_TYPE* | *PROP_NAME*   | *DESCRIPTION* |
| :---------- | :------------ | :------------ |
| both        | `name`        | The name of the link. For watch-now links this will replace the logo if none is provided. |
| both        | `buildUrl`    | A function which takes item-data and returns an absolute url, which will be opened in a new tab on click. Defaults to current page url + '#' (which does nothing). |
| both        | `evalOnClick` | Will be set as onclick attribute if provided. Useful for e.g. cross-script interactions. Still allows for page navigation if `buildUrl` was set, unless you return `false`. |
| both        | `includeIf`   | A predicate function which takes item-data (and returns a boolean) to decide on whether to include this link for the current item. Defaults to `true`. Useful for e.g. only including a watch-now link if the title is of a specific genre OR not including an external link on `/people` pages. |
| watch_now   | `category`    | A link category to be displayed in a second line below the name. See the `watchNowCategories` object, though any string will work. The category line is omitted if no category is provided. |
| watch_now   | `bgColor`     | The background color of the link button. Defaults to `DEFAULT_WNLINK_BGCOLOR`. |
| watch_now   | `textColor`   | The text color of the link button, which is used for the name that is displayed instead of the logo if none is provided. Defaults to `DEFAULT_WNLINK_TEXTCOLOR`. |
| watch_now   | `logo`        | A logo for the link. Should have a transparent background. Can be a data uri (base64 encoded image, see "Tools" section below) or a regular url. Some external sites may disallow hotlinking of images, in that case use a data uri. Or they may have a restrictive image caching policy (then logo has to constantly be re-fetched, which results in a noticeable loading delay), in that case use `GM_getResourceURL` to have the userscript manager handle caching. |

### Tools
- [https://base64.guru/converter/encode/image](https://base64.guru/converter/encode/image)
- [https://compresspng.com](https://compresspng.com)
- [https://www.svgviewer.dev/](https://www.svgviewer.dev/)
*/

/* README [Trakt.tv | Partial VIP Unlock]
### Full Unlock
- filter-by-terms
- "more" buttons on dashboard
- rewatching
- watch-now modal country selection
- bulk list copy and move *(note: item selection is filter based)*
- all vip settings from /settings page (calendar autoscroll + limit dashboard "up next" episodes to watch-now favorites + only show watch-now icon if title is available on favorites + rewatching settings)
- ~2x faster page navigation with Hotwire's Turbo (allows for partial page updates instead of full page reloads when navigating, might break userscripts from other devs who didn't account for this)

### Partial Unlock
- custom calendars (get generated and work, but are not listed in sidebar (can't be deleted either), so you have to save the url of the custom calendar or "regenerate" it via /lists)
- advanced filters (no saved filters)
- ~~ical/atom feeds + csv exports~~ [How anyone can create data exports of arbitrary private user accounts](https://github.com/trakt/trakt-api/issues/636)
*/

/* README [Trakt.tv | Average Season And Episode Ratings]
> Inspired by Tusky's [Trakt Average Season Rating](https://greasyfork.org/scripts/30728) userscript.

### General
- The general ratings average is weighted by votes, to account for the inaccurate ratings of unreleased seasons/episodes.
- Specials are always excluded, except on the specials season page.
- Only visible (i.e. not hidden by a filter) items are used for the calculation of the averages and changes to those filters trigger a recalculation.
*/

'use strict';

const gmStorage = { '2hc6zfyy': true, '71cd9s61': true, 'cs1u5z40': true, 'fyk2l3vj': true, 'kji85iek': true, 'p2o98x5r': true, 'pmdf6nr9': true, 'txw82860': true, 'wkt34fcz': true, 'x70tru7b': true, 'yl9xlca7': true, ...(GM_getValue('megascript')) };
GM_setValue('megascript', gmStorage);


gmStorage['2hc6zfyy'] && (async () => {
/* global Cron */

'use strict';

(async () => { // iife because esbuild doesn't like top-level-await
  const $ = unsafeWindow.jQuery,
        toastr = unsafeWindow.toastr,
        userslug = unsafeWindow.Cookies?.get('trakt_userslug');
  if (!$ || !toastr || !userslug) return;

  let { showToastOnSuccess, cronExpr, lastRun } = await GM.getValues(['showToastOnSuccess', 'cronExpr', 'lastRun']);
  if (showToastOnSuccess === undefined) GM.setValue('showToastOnRun', showToastOnSuccess = true);
  if (cronExpr === undefined) GM.setValue('cronExpr', cronExpr = '@weekly');
  if (lastRun === undefined) GM.setValue('lastRun', lastRun = {});

  const Logger = Object.freeze({
    _DEFAULT_PREFIX: GM_info.script.name.replace('Trakt.tv', 'Userscript') + ': ',
    _DEFAULT_TOAST: true,
    _printMsg(fnConsole, fnToastr, msg, { data, prefix = Logger._DEFAULT_PREFIX, toast = Logger._DEFAULT_TOAST } = {}) {
      msg = prefix + msg;
      console[fnConsole](msg, (data ? data : ''));
      if (toast) toastr[fnToastr](msg + (data ? ' See console for details.' : ''));
    },
    info: (msg, opt) => Logger._printMsg('info', 'info', msg, opt),
    success: (msg, opt) => Logger._printMsg('info', 'success', msg, { ...opt, toast: showToastOnSuccess }),
    warning: (msg, opt) => Logger._printMsg('warn', 'warning', msg, opt),
    error: (msg, opt) => Logger._printMsg('error', 'error', msg, opt),
  });


  let cron;
  try {
    cron = new Cron(cronExpr, {
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    });
  } catch (err) {
    Logger.error('Invalid cron expression. Aborting..', { data: err });
    return;
  }

  window.addEventListener('turbo:load', () => {
    const dateNow = new Date();
    if (!lastRun[userslug] || cron.nextRun(lastRun[userslug]) <= dateNow && dateNow - new Date(lastRun[userslug]) >= 24 * 60 * 60 * 1000) {
      $.post('/settings/export_data')
        .done(() => {
          Logger.success('Success. Your data export is processing. You will receive an e-mail when it is ready.');
          lastRun[userslug] = dateNow.toISOString();
          GM.setValue('lastRun', lastRun);
        })
        .fail((xhr) => {
          if (xhr.status === 409) {
            Logger.warning('Failed. Cooldown from previous export is still active. Will retry on next scheduled data export.');
            lastRun[userslug] = dateNow.toISOString();
            GM.setValue('lastRun', lastRun);
          } else {
            Logger.error(`Failed with status: ${xhr.status}. Reload page to try again.`, { data: xhr });
          }
        });
    }
  });
})();
})();


gmStorage['71cd9s61'] && (async () => {
'use strict';

let $, toastr;


addStyles();

document.addEventListener('turbo:load', () => {
  if (!/^\/people\/[^\/]+$/.test(location.pathname)) return;

  $ ??= unsafeWindow.jQuery;
  toastr ??= unsafeWindow.toastr;
  if (!$ || !toastr) return;

  let audio;

  $(`<button id="btn-pronounce-name">` +
      `<div class="audio-animation fade">` +
        `<div class="bar-1"></div>` +
        `<div class="bar-2"></div>` +
        `<div class="bar-3"></div>` +
      `</div>` +
      `<div class="fa fa-volume fade in"></div>` +
    `</button>`
  ).appendTo($('#summary-wrapper .mobile-title h1')).tooltip({
    title: 'Pronounce Name',
    container: 'body',
    placement: 'top',
    html: true,
  }).on('click', async function() {
    $(this).tooltip('hide');

    if (!audio) {
      unsafeWindow.showLoading?.();
      const name = $('body > [itemtype$="Person"] > meta[itemprop="name"]').attr('content'), // doesn't exist on /people/<slug>/lists pages
            resp = await GM.xmlHttpRequest({ url: `https://forvo.com/search/${encodeURIComponent(name)}` }),
            doc = new DOMParser().parseFromString(resp.responseText, 'text/html'),
            audioHttpHost = $(doc).find('body > script').text().match(/_AUDIO_HTTP_HOST='(.+?)'/)?.[1],
            audioVariantsPaths = $(doc).find('[onclick^="Play"]').attr('onclick')?.match(/Play\([0-9]+,'(.*?)','(.*?)',(?:true|false),'(.*?)','(.*?)'/)?.slice(1).map(atob);
      unsafeWindow.hideLoading?.();

      if (!audioVariantsPaths?.length) {
        toastr.error(`Userscript | Actor Pronunciation Helper: Could not find a pronunciation for ${name} on forvo.com`);
        return;
      }

      const mp3Path = audioVariantsPaths[0] ? `/mp3/${audioVariantsPaths[0]}` : null,
            oggPath = audioVariantsPaths[1] ? `/ogg/${audioVariantsPaths[1]}` : null,
            mp3HighPath = audioVariantsPaths[2] ? `/audios/mp3/${audioVariantsPaths[2]}` : null,
            oggHighPath = audioVariantsPaths[3] ? `/audios/ogg/${audioVariantsPaths[3]}` : null;

      audio ??= new Audio('https://' + audioHttpHost + (oggHighPath ?? mp3HighPath ?? oggPath ?? mp3Path));
      $(audio).off('ended').on('ended', () => {
        setTimeout(() => {
          $(this).find('.audio-animation').removeClass('in')
          setTimeout(() => $(this).find('.fa').addClass('in'), 100);
        }, 100);
      });
    }

    $(this).find('.fa').removeClass('in');
    setTimeout(() => {
      $(this).find('.audio-animation').addClass('in');
      audio.load();
      audio.play();
    }, 200);
  });
}, { capture: true });


function addStyles() {
  GM_addStyle(`
    #btn-pronounce-name {
      margin: 0 0 2px 7px;
      position: relative;
      height: 20px;
      width: 20px;
      vertical-align: middle;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-style: none;
      background-color: transparent;
    }

    #btn-pronounce-name .fa {
      position: absolute;
      font-size: 16px;
      color: #aaa;
    }
    #btn-pronounce-name:hover .fa {
      color: var(--link-color);
    }

    #btn-pronounce-name .audio-animation {
      position: absolute;
      height: 75%;
      width: 75%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2px;
    }

    #btn-pronounce-name .audio-animation [class^="bar-"] {
      flex: 1;
      height: 100%;
      border-radius: 3px;
      background: linear-gradient(to bottom, rgb(255, 0, 0), rgb(155, 66, 200));
      transform: scaleY(0.2);
    }

    #btn-pronounce-name .in .bar-1 { animation: lineWave-1 .4s .3s infinite alternate; }
    #btn-pronounce-name .in .bar-2 { animation: lineWave-2 .3s .2s infinite alternate; }
    #btn-pronounce-name .in .bar-3 { animation: lineWave-3 .35s .25s infinite alternate; }

    @keyframes lineWave-1 { from { transform: scaleY(0.24); } to { transform: scaleY(0.85); } }
    @keyframes lineWave-2 { from { transform: scaleY(0.27); } to { transform: scaleY(0.98); } }
    @keyframes lineWave-3 { from { transform: scaleY(0.24); } to { transform: scaleY(0.80); } }
  `);
}
})();


gmStorage['cs1u5z40'] && (async () => {
/* global Chart */

'use strict';

let $, trakt;
let $grid, isSeasonChart, filterSpecials, labelsCallback, chart, datasetsData, firstRunDelay;

Chart.defaults.borderColor = 'rgb(44 44 44 / 0.5)';
const numFormatCompact = new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 });
numFormatCompact.formatTLC = (n) => numFormatCompact.format(n).toLowerCase();


addStyles();

document.addEventListener('turbo:load', async () => {
  if (!/^\/shows\/[^/]+\/seasons\/[^/]+$/.test(location.pathname)) return;

  $ ??= unsafeWindow.jQuery;
  trakt ??= unsafeWindow.userscriptTraktAPIModule?.isFulfilled ? await unsafeWindow.userscriptTraktAPIModule : null;
  if (!$) return;

  $grid = $('#seasons-episodes-sortable');
  if (!$grid.length) return;
  isSeasonChart = location.pathname.includes('/seasons/');
  filterSpecials = !location.pathname.includes('/seasons/0');
  labelsCallback = isSeasonChart ? (e) => `${e.seasonNum}x${String(e.episodeNum).padStart(2, '0')} ${e.watched ? '\u2714' : '\u2718'}` : (e) => `S. ${e.seasonNum} ${e.watched ? (e.watched == 100 ? '\u2714' : `(${e.watched}%)`) : '\u2718'}`;
  chart = null;
  datasetsData = [];
  firstRunDelay = true;
  if (!isSeasonChart && +$('.season-count').text().split(' ')[0] < 4 ||
      location.pathname.includes('/alternate/') && location.pathname.split('/').filter(Boolean).length < 6) return;

  $grid.on('arrangeComplete', () => {
    if ($grid.data('isotope')) {
      if (!chart) initializeChart();
      else updateChart();
    }
  });
  $(document).off('ajaxSuccess.userscript48372').on('ajaxSuccess.userscript48372', (_evt, _xhr, opt) => {
    if (opt.url.includes('/rate') && chart) updateChart();
  });
}, { capture: true });


function initializeChart() {
  const canvas = $('<div id="seasons-episodes-chart-wrapper"><canvas></canvas></div>').insertBefore($grid).children()[0];

  chart = new Chart(canvas.getContext('2d'), {
    type: 'line',
    data: getChartData(),
    options: getChartOptions(),
  });

  const intObs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        intObs.disconnect();
        if (!document.hidden) updateChart();
        else $(document).one('visibilitychange', updateChart);
      };
    });
  }, { threshold: 1.0 });
  intObs.observe(canvas);

  canvas.addEventListener('click', (event) => {
    const points = chart.getElementsAtEventForMode(event, 'nearest', { axis: 'x', intersect: false }, true);
    if (!points.length) return;
    const closestPoint = points.sort((p1, p2) => Math.abs(p1.element.y - event.layerY) - Math.abs(p2.element.y - event.layerY))[0];

    if (Math.abs(closestPoint.element.y - event.layerY) < 10) {
      const url = `${datasetsData[closestPoint.index].urlFull}${closestPoint.datasetIndex === 3 ? '/comments' : ''}`;
      GM_openInTab(url, { active: true, insert: true });
    } else {
      if (chart.isZoomedOrPanned()) {
        chart.resetZoom('active');
      }
    }
  });
}

async function updateChart() {
  const newDatasetsData = await getDatasetsData();
  if (JSON.stringify(datasetsData) !== JSON.stringify(newDatasetsData)) {
    datasetsData = newDatasetsData;
    chart.data = getChartData();
    chart.options = getChartOptions();
    chart.update();
    if (firstRunDelay) firstRunDelay = false;
  }
}

function getDatasetsData() {
  const datasetsData = $grid.data('isotope').filteredItems.filter((i) => filterSpecials ? i.element.dataset.seasonNumber !== '0' : true).map(async (i) => {
    const itemData = {
      generalRating: i.sortData.percentage,
      votes: i.sortData.votes,
      watchers: i.sortData.watchers,
      episodeNum: i.element.dataset.number || null,
      seasonNum: i.element.dataset.seasonNumber,
      urlFull: $(i.element).find('meta[itemprop="url"]').attr('content'),
      personalRating: $(i.element).find('.corner-rating > .text').text() || null,
      watched: $(i.element).find('a.watch.selected').attr('data-percentage') ?? 0,
      releaseDate: $(i.element).find('.percentage').attr('data-earliest-release-date'),
    };

    if (isSeasonChart) {
      itemData.mainTitle = $(i.element).find('.under-info .main-title').text();
      itemData.comments = $(i.element).find('.episode-stats > a[data-original-title="Comments"]').text() || 0;
    } else {
      itemData.mainTitle = $(i.element).find('div[data-type="season"] .titles-link h3').text();
      if (trakt) { // TODO
        const respJSON = await trakt.seasons.comments({ id: i.element.dataset.showId, season: itemData.seasonNum, pagination: true, limit: 1 });
        itemData.comments = respJSON.pagination.item_count;
      } else {
        const resp = await fetch(i.element.dataset.url + '.json');
        if (!resp.ok) throw new Error(`XHR for: ${resp.url} failed with status: ${resp.status}`);
        itemData.comments = (await resp.json()).stats.comment_count;
      }
    }

    return itemData;
  });
  return Promise.all(isSeasonChart ? datasetsData : datasetsData.reverse());
}


function getGradientY(context, callerID, yAxisID, ...colors) {
  if (!context) return colors.pop().color;
  const {ctx, chartArea, scales} = context.chart;
  if (!chartArea) return;
  ctx[callerID] ??= { };

  if (!ctx[callerID].gradient || ctx[callerID].height !== chartArea.height ||
      ctx[callerID].yAxisMin !== scales[yAxisID].min || ctx[callerID].yAxisMax !== scales[yAxisID].max) {
    ctx[callerID].height = chartArea.height;
    ctx[callerID].yAxisMin = scales[yAxisID].min;
    ctx[callerID].yAxisMax = scales[yAxisID].max;

    let newBottom = scales[yAxisID].max - scales[yAxisID].min;
    newBottom = newBottom ? scales[yAxisID].max / newBottom : 1;
    newBottom = chartArea.bottom * newBottom;

    ctx[callerID].gradient = ctx.createLinearGradient(0, newBottom, 0, chartArea.top);
    colors.forEach((c) => ctx[callerID].gradient.addColorStop(c.offset, c.color));
  }
  return ctx[callerID].gradient;
}

function getChartData() {
  return {
    labels: datasetsData.map(labelsCallback),
    datasets: [
      {
        label: 'Personal Rating',
        data: datasetsData.map((e) => e.personalRating ? e.personalRating * 10 : null),
        yAxisID: 'yAxisRating',
        borderColor: (context) => getGradientY(context, '_ratingPersonal', 'yAxisRating',
          { offset: 0, color: 'rgb(97 97 97 / 0.6)' },
          { offset: 0.1, color: 'rgb(97 97 97 / 0.6)' },
          { offset: 1, color: 'rgb(175 2 0)' }),
        backgroundColor: (context) => getGradientY(context, '_ratingPersonal', 'yAxisRating',
          { offset: 0, color: 'rgb(97 97 97 / 0.6)' },
          { offset: 0.1, color: 'rgb(97 97 97 / 0.6)' },
          { offset: 1, color: 'rgb(175 2 0)' }),
      },
      {
        label: 'General Rating',
        data: datasetsData.map((e) => e.generalRating),
        yAxisID: 'yAxisRating',
        fill: {
          target: '-1',
          above: `rgb(255 0 0 / ${$('body').hasClass('dark-knight') ? 0.15 : 0.3})`,
          below: `rgb(0 255 0 / ${$('body').hasClass('dark-knight') ? 0.15 : 0.3})`,
        },
        borderColor: (context) => getGradientY(context, '_ratingGeneral', 'yAxisRating',
          { offset: 0, color: 'rgb(97 97 97 / 0.6)' },
          { offset: 0.1, color: 'rgb(97 97 97 / 0.6)' },
          { offset: 1, color: 'rgb(225 31 117)' }),
        backgroundColor: (context) => getGradientY(context, '_ratingGeneral', 'yAxisRating',
          { offset: 0, color: 'rgb(97 97 97 / 0.6)' },
          { offset: 0.1, color: 'rgb(97 97 97 / 0.6)' },
          { offset: 1, color: 'rgb(225 31 117)' }),
      },
      {
        label: 'Watchers',
        data: datasetsData.map((e) => e.watchers),
        yAxisID: 'yAxisWatchers',
        borderColor: (context) => getGradientY(context, '_watchers', 'yAxisWatchers',
          { offset: 0, color: 'rgb(154 67 201 / 0.2)' },
          { offset: 1, color: 'rgb(154 67 201)' }),
        backgroundColor: (context) => getGradientY(context, '_watchers', 'yAxisWatchers',
          { offset: 0, color: 'rgb(154 67 201 / 0.2)' },
          { offset: 1, color: 'rgb(154 67 201)' }),
      },
      {
        label: 'Comments',
        data: datasetsData.map((e) => e.comments),
        yAxisID: 'yAxisComments',
        borderColor: (context) => getGradientY(context, '_comments', 'yAxisComments',
          { offset: 0, color: 'rgb(54 157 226 / 0.2)' },
          { offset: 1, color: 'rgb(54 157 226)' }),
        backgroundColor: (context) => getGradientY(context, '_comments', 'yAxisComments',
          { offset: 0, color: 'rgb(54 157 226 / 0.2)' },
          { offset: 1, color: 'rgb(54 157 226)' }),
      },
    ],
  };
}

function getChartOptions() {
  return {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false,
    },
    animation: {
      delay: (context) => (context.type === 'data' && context.mode === 'default') ?
        (firstRunDelay ? 500 : 0) + context.dataIndex * (750 / Math.max(datasetsData.length - 1, 1)) + context.datasetIndex * 100 : 0,
    },
    scales: {
      x: {
        offset: true,
      },
      yAxisRating: {
        type: 'linear',
        position: 'left',
        offset: true,
        suggestedMin: 60,
        max: 100,
        title: {
          display: true,
          text: 'Rating',
        },
        grid: {
          color: (context) => !(context.tick.value % 10) ? 'rgb(55 55 55)' : Chart.defaults.borderColor,
        },
        ticks: {
          callback: (tickValue) => `${tickValue}%`,
        },
      },
      yAxisWatchers: {
        type: 'linear',
        position: 'right',
        offset: true,
        min: 0,
        suggestedMax: 10,
        title: {
          display: true,
          text: 'Watchers',
        },
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          callback: (tickValue) => numFormatCompact.formatTLC(tickValue),
        }
      },
      yAxisComments: {
        type: 'linear',
        position: 'right',
        offset: true,
        min: 0,
        suggestedMax: 10,
        title: {
          display: true,
          text: 'Comments',
        },
        grid: {
          drawOnChartArea: false,
        },
      },
    },
    plugins: {
      tooltip: {
        usePointStyle: true,
        boxPadding: 5,
        backgroundColor: 'rgb(0 0 0 / 0.5)',
        caretSize: 10,
        padding: {
          x: 18,
          y: 6,
        },
        titleFont: {
          size: 13,
          weight: 'bold',
        },
        callbacks: {
          title: (tooltipItems) => {
            let mainTitle = datasetsData[tooltipItems[0].parsed.x].mainTitle;
            mainTitle = mainTitle.length > 20 ? mainTitle.slice(0, 20).trim() + '...' : mainTitle;
            return `${tooltipItems[0].label}${mainTitle ? `\n${mainTitle}` : ''}`;
          },
          label: (tooltipItem) => {
            const x = tooltipItem.parsed.x,
                  y = tooltipItem.parsed.y,
                  avgRatings = unsafeWindow.userscriptAvgSeasonEpisodeRatings;

            if (tooltipItem.datasetIndex === 0) {
              return `${y / 10}` +
                     `${avgRatings?.personal?.average ? `  (avg: ${avgRatings.personal.average.toFixed(1)})` : ''}`;
            } else if (tooltipItem.datasetIndex === 1) {
              return `${y}%  (${numFormatCompact.formatTLC(datasetsData[x].votes)} v.)` +
                     `${avgRatings?.general ? `  (avg: ${avgRatings.general.average ? Math.round(avgRatings.general.average) : '--'}%)` : ''}`;
            } else if (tooltipItem.datasetIndex === 2) {
              return `${numFormatCompact.formatTLC(y)}${datasetsData[0].watchers ? `  (${Math.round(y * 100 / datasetsData[0].watchers)}%)`: ''}`;
            } else {
              return `${y}`;
            }
          },
          labelColor: (tooltipItem) => {
            return {
              borderColor: tooltipItem.dataset.borderColor(),
              backgroundColor: tooltipItem.dataset.backgroundColor(),
            };
          },
          footer: (tooltipItems) => {
            const releaseDate = datasetsData[tooltipItems[0].parsed.x].releaseDate;
            return releaseDate ? unsafeWindow.formatDate?.(releaseDate) || releaseDate : undefined;
          },
        },
      },
      legend: {
        labels: {
          usePointStyle: true,
          filter: (legendItem, chartData) => chartData.datasets[legendItem.datasetIndex].data.some((v) => v !== null),
        },
      },
      filler: {
        propagate: false,
      },
      zoom: {
        zoom: {
          mode: 'x',
          drag: {
            enabled: true,
            threshold: 0,
          },
        },
        limits: {
          x: {
            minRange: 8,
          },
        },
      },
    },
  };
}


function addStyles() {
  GM_addStyle(`
    #seasons-episodes-chart-wrapper {
      position: relative;
      margin-top: 20px;
      width: 100%;
      height: 250px;
    }
    @media (width <= 767px) {
      #seasons-episodes-chart-wrapper {
        margin-left: -10px;
        margin-right: -10px;
        width: calc(100% + 20px);
      }
    }
    @media (991px < width) {
      #seasons-episodes-chart-wrapper {
        height: 300px;
      }
    }
  `);
}
})();


gmStorage['fyk2l3vj'] && (async () => {
'use strict';

let $, toastr, trakt;

const Logger = Object.freeze({
  _DEFAULT_PREFIX: GM_info.script.name.replace('Trakt.tv', 'Userscript') + ': ',
  _DEFAULT_TOAST: true,
  _printMsg(fnConsole, fnToastr, msg, { data, prefix = Logger._DEFAULT_PREFIX, toast = Logger._DEFAULT_TOAST } = {}) {
    msg = prefix + msg;
    console[fnConsole](msg, (data ? data : ''));
    if (toast) toastr[fnToastr](msg + (data ? ' See console for details.' : ''));
  },
  info: (msg, opt) => Logger._printMsg('info', 'info', msg, opt),
  success: (msg, opt) => Logger._printMsg('info', 'success', msg, opt),
  warning: (msg, opt) => Logger._printMsg('warn', 'warning', msg, opt),
  error: (msg, opt) => Logger._printMsg('error', 'error', msg, opt),
});


addStyles();

document.addEventListener('turbo:load', async () => {
  if (!/^\/(shows|movies)\//.test(location.pathname)) return;

  $ ??= unsafeWindow.jQuery;
  toastr ??= unsafeWindow.toastr;
  trakt ??= unsafeWindow.userscriptTraktAPIModule?.isFulfilled ? await unsafeWindow.userscriptTraktAPIModule : null;
  if (!$ || !toastr) return;

  const $additionalStatsLi = $('#overview .additional-stats > li'),
        pathSplit = location.pathname.split('/').filter(Boolean);
  if (!$additionalStatsLi.length) return;


  // YEAR
  const $year = $('#summary-wrapper .year');
  if ($year.parent().is('a')) $year.insertAfter($year.parent()); // year is part of link to title summary page on e.g. /comments subpage
  $year.wrapAll(`<a href="/search/${pathSplit[0]}?years=${$year.text().slice(0, 4)}-${$year.text().slice(-4)}"></a>`); // year range on /seasons/all


  // CERTIFICATION
  const $certification = $('#summary-wrapper div.certification');
  $certification.wrap(`<a href="/search/${pathSplit[0]}?certifications=${$certification.text().toLowerCase()}"></a>`);


  // GENRES
  const $genres = $additionalStatsLi.filter(':has([itemprop="genre"])'),
        matchingGenres = [];
  $genres.find('[itemprop="genre"]').each((i, e) => {
    matchingGenres[i] = $(e).text().toLowerCase().replaceAll(' ', '-');
    $(e).wrap(`<a href="/search/${pathSplit[0]}?genres=${matchingGenres[i]}"></a>`);
  });
  if (matchingGenres.length > 1) $genres.find('label').wrap(`<a href="/search/${pathSplit[0]}?genres=+${matchingGenres.join(',+')}"></a>`); // search for titles with the same set of genres combined


  // COUNTRY
  const $country = $additionalStatsLi.filter((_, e) => $(e).find('label').text().toLowerCase() === 'country'); // countryOfOrigin + name meta tags are unreliable
  let matchingCountry; // also used for networks and studios
  if ($country.length) {
    const allCountriesMap = await getMapOfAllCountries(),
          countryText = $country.contents().get(-1)?.textContent;

    matchingCountry = allCountriesMap[countryText];
    if (matchingCountry) {
      // flags seem to only be available for countries that are also watch-now countries (~139), no flag assets beyond those /movies/kpop-demon-hunters-2025/releases
      const countryFlag = unsafeWindow.watchnowAllCountries?.[matchingCountry]?.image;
      if (countryFlag) $country.children().last().after(`<img class="country-flag" src="${countryFlag}">`);

      $country.contents().filter((_, e) => !$(e).is('meta, label')).wrapAll(`<a href="/search/${pathSplit[0]}?countries=${matchingCountry}"></a>`);
    } else {
      GM.setValue('allCountriesMap', null);
      Logger.error(`Failed to match title country. Cached countries have been cleared. Reload page to try again.`);
    }
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////

  // LANGUAGES
  const $languages = $additionalStatsLi.filter((_, e) => $(e).find('label').text().toLowerCase().startsWith('language')),
        matchingLanguages = {}; // also used for networks and studios
  if ($languages.length) {
    const allLanugagesArrSorted = await getSortedArrOfAllLanguages(),
          allLanugagesMap = Object.fromEntries(allLanugagesArrSorted);
    let languagesText = $languages.contents().get(-1).textContent;

    allLanugagesArrSorted.forEach(([id, name], i) => {
      const regExp = new RegExp(`${RegExp.escape(name)}(, |$)`);
      if (regExp.test(languagesText)) {
        matchingLanguages[languagesText.indexOf(name)] = id;
        languagesText = languagesText.replace(regExp, (m) => ' '.repeat(m.length));
      }
    });

    if (!languagesText.trim()) {
      const matchingLanguagesIds = Object.values(matchingLanguages);

      $languages.contents().last().replaceWith(
        matchingLanguagesIds
          .map((id) => `<a href="/search/${pathSplit[0]}?languages=${id}">${allLanugagesMap[id]}</a>`)
          .join(', ')
      );

      if (matchingLanguagesIds.length > 1) $languages.find('label').wrap(`<a href="/search/${pathSplit[0]}?languages=+${matchingLanguagesIds.join(',+')}"></a>`);
    } else {
      GM.setValue('allLanugagesArrSorted', null);
      Logger.error(`Failed to match all title languages (original: ${$languages.contents().get(-1).textContent} | remainder: ${languagesText.trim()}). ` +
                   `Cached languages have been cleared. Reload page to try again.`);
    }
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////

  // NETWORKS
  const $networks = $additionalStatsLi.filter((_, e) => $(e).find('label').text().toLowerCase().startsWith('network')), // .stat class is unreliable
        $networkAlt = $additionalStatsLi.filter((_, e) => /airs|aired|premiered/i.test($(e).find('label').text())).first(); // can have one network as suffix
  if ($networks.length && pathSplit[3] !== 'all') { // network names on /seasons/all are invalid (memory addresses instead of names)
    const matchingNetworks = {},
          allNetworksArrSorted = await getSortedArrOfAllNetworks(),
          allNetworksMap = Object.fromEntries(allNetworksArrSorted);
    let networksText = $networks.contents().get(-1).textContent; // text is not sanitized and can contain tabs and stray spaces from network names

    allNetworksArrSorted.forEach(([id, { name, countryId }], i) => {
      const regExp = new RegExp(`${RegExp.escape(name)}(, |$)`);
      if (regExp.test(networksText) && (
        // !countryId || // TODO
        countryId === matchingCountry || Object.hasOwn(matchingLanguages, countryId) ||
        name !== allNetworksArrSorted[i+1]?.[1].name
      )) {
        matchingNetworks[networksText.indexOf(name)] = id;
        networksText = networksText.replace(regExp, (m) => ' '.repeat(m.length));
      }
    });

    if (!networksText.trim()) {
      const matchingNetworksIds = Object.values(matchingNetworks);

      $networks.contents().last().replaceWith(
        matchingNetworksIds
          .map((id) => `<a href="/search/shows?network_ids=${id}">${allNetworksMap[id].name}${allNetworksMap[id].countryId ? ` (${allNetworksMap[id].countryId.toUpperCase()})` : ''}</a>`)
          .join('')
      );

      if (matchingNetworksIds.length > 1) {
        $networks.find('label').wrap(`<a href="/search/shows?network_ids=${matchingNetworksIds.join(',')}"></a>`);

        $(`<a href onclick="$(this).hide(); $(this).next().show(); return false;"> + ${matchingNetworksIds.length - 1} more</a>`) // necessary because for some titles there are 10+ networks listed
          .insertAfter($networks.children().eq(1))
          .nextAll()
          .wrapAll(`<span style="display: none;"></span>`);
      }

      $networks.find('a:not(:has(label), [onclick])').slice(1).before(', '); // comma insertion done here because nextAll() doesn't support text nodes
    } else {
      GM.setValue('allNetworksArrSorted', null);
      Logger.error(`Failed to match all title networks (original: ${$networks.contents().get(-1).textContent} | remainder: ${networksText.trim()}). ` +
                   `Cached networks have been cleared. Reload page to try again.`);
    }
  } else if ($networkAlt.text().includes(' on ') && pathSplit[3] !== 'all') {
    const allNetworksArrSorted = await getSortedArrOfAllNetworks(),
          networkText = $networkAlt.contents().last().text().split(' on ')[1];

    const matchingNetwork = networkText ? allNetworksArrSorted.find(([id, { name, countryId }], i) =>
      new RegExp(`${RegExp.escape(name)}(, |$)`).test(networkText) && (
        // !countryId || // TODO
        countryId === matchingCountry || Object.hasOwn(matchingLanguages, countryId) ||
        name !== allNetworksArrSorted[i+1]?.[1].name
      )
    ) : null;

    if (matchingNetwork) {
      $networkAlt.contents().last().remove();
      $networkAlt.append(` on <a href="/search/shows?network_ids=${matchingNetwork[0]}">${matchingNetwork[1].name}` +
                         `${matchingNetwork[1].countryId ? ` (${matchingNetwork[1].countryId.toUpperCase()})` : ''}</a>`)
    } else {
      GM.setValue('allNetworksArrSorted', null);
      Logger.error(`Failed to match title network (${networkText}). Cached networks have been cleared. Reload page to try again.`);
    }
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////

  // STUDIOS
  const $studios = $additionalStatsLi.filter((_, e) => $(e).find('label').text().toLowerCase().startsWith('studio'));
  if ($studios.length) {
    if (trakt) {
      let hasRun = false;

      const matchStudioFromElemContext = async function(evt) {
        if (hasRun) return;
        hasRun = true;
        evt?.preventDefault();

        unsafeWindow.showLoading?.();
        const dataStudios = await trakt[pathSplit[0]].studios({ id: $('.summary-user-rating').attr(`data-${pathSplit[0].slice(0, -1)}-id`) }), // has the same order as $studios
              allStudioIdsJoined = dataStudios.map((studio) => studio.ids.trakt).join();
        unsafeWindow.hideLoading?.();

        if (evt) {
          const url = `/search/${pathSplit[0]}?studio_ids=${$(this).find('label').length ? allStudioIdsJoined : dataStudios[0].ids.trakt}`;
          if (evt.type === 'click') location.href = url;
          else GM_openInTab(location.origin + url, { insert: true, setParent: true });
        }

        $studios.children().eq(0).attr('href', `/search/${pathSplit[0]}?studio_ids=${allStudioIdsJoined}`);
        $studios.children().eq(1).attr('href', `/search/${pathSplit[0]}?studio_ids=${dataStudios[0].ids.trakt}`);
        $studios.find('.studios-more').html(dataStudios.slice(1).map((studio) => `, <a href="${studio.ids.trakt}">${studio.name}</a>`));
      }

      // wrap names with unresolved anchor tags to minimize api requests
      $studios.find('label').wrap($(`<a href="#"></a>`).one('click auxclick', matchStudioFromElemContext));
      $studios.contents().eq(1).wrap($(`<a href="#"></a>`).one('click auxclick', matchStudioFromElemContext));
      $studios.find('.studios-expand').one('click', () => matchStudioFromElemContext());
    } else {
      const matchingStudios = new Set(),
            $studiosMore = $studios.find('.studios-more'),
            $studiosExpand = $studios.find('.studios-expand'),
            studiosMoreSplit = $studiosMore.text().split(', ').slice(1),
            studiosMoreCount = +$studiosExpand.text().match(/\d+/)?.[0] || null;

      // use studio search endpoint from advanced filters modal (~250.000 studios total; several thousand studio names contain commas; returns max. of 1000 results per request sorted lexicographically)
      const queryStudioNameMatches = (query) => {
        return fetch('/autocomplete/studios?query=' + encodeURIComponent(query))
          .then((r) => r.json())
          .then((r) => Object.fromEntries(
            r.map(({ label: name, value: studioId, tag: countryId }) => [name, +studioId, countryId?.toLowerCase() ?? null])
             .sort(([nameA, studioIdA, countryIdA], [nameB, studioIdB, countryIdB]) => nameA === nameB
                   ? (countryIdA && (countryIdA === matchingCountry || Object.hasOwn(matchingLanguages, countryIdA))) -
                     (countryIdB && (countryIdB === matchingCountry || Object.hasOwn(matchingLanguages, countryIdB))) ||
                     // (countryIdB && 1) - (countryIdA && 1) || // TODO
                     studioIdB - studioIdA // the lower the studio id, the more major the studio tends to be
                   : 0)
          ));
      };

      // executed from the context of an unresolved anchor tag (no lookup on page load to minimize api requests)
      const matchStudioFromElemContext = async function(evt) {
        evt?.preventDefault();
        $(this).off();

        unsafeWindow.showLoading?.();
        const studioName = $(this).text(),
              queryResult = await queryStudioNameMatches(studioName),
              studioId = queryResult[studioName];
        unsafeWindow.hideLoading?.();

        if (studioId) {
          matchingStudios.add(studioId);
          const url = `/search/${pathSplit[0]}?studio_ids=${studioId}`;

          if (evt) {
            if (evt.type === 'click') location.href = url;
            else GM_openInTab(location.origin + url, { insert: true, setParent: true });
          }
          $(this).attr('href', url);
        } else {
          Logger.error('Failed to match title studio: ' + studioName, { data: queryResult });
        }
      };

      // algorithm to deal with getting ids for a list of studio names, separated by commas, which by themseves can contain commas:
      // for split(', ') part at index i try to find longest possible match in part's result list by looking for results[parts(i)], then results[parts(i) + parts(i+1)] etc. longest match wins
      const matchStudiosMoreSplit = async () => {
        if (matchingStudios.size > 1) return;

        unsafeWindow.showLoading?.();
        const partsQueryResults = await Promise.all(studiosMoreSplit.map((part) => queryStudioNameMatches(part).then((results) => [part, results])));
        let consumedUntilIndex = -1;
        unsafeWindow.hideLoading?.();

        $studiosMore.html(partsQueryResults.map(([part, results], i) => {
          if (i <= consumedUntilIndex) return null;

          let longestMatch;
          for (let j = i; j < partsQueryResults.length; j++) {
            if (j !== i) part += ', ' + partsQueryResults[j][0];
            if (results[part]) {
              consumedUntilIndex = j;
              longestMatch = [part, results[part]];
            }
          };
          if (longestMatch) {
            matchingStudios.add(longestMatch[1]);
            return `, <a href="/search/${pathSplit[0]}?studio_ids=${longestMatch[1]}">${longestMatch[0]}</a>`;
          } else {
            Logger.error('Failed to match all title studios. Could not match: ' + partsQueryResults[i][0], { data: results });
            throw new Error('Failed to match all title studios.'); // don't mutate original elem
          }
        }).join(''));
      }

      $studios.contents().eq(1).wrap($(`<a href="#"></a>`).on('click auxclick', matchStudioFromElemContext));

      if (studiosMoreCount) {
        // parseStudiosMoreSplit() always works, but it's overkill in most cases as only a small subset of studios have names containing commas, separate handling of trivial cases minimizes api requests
        if (studiosMoreCount === 1) {
          $studiosMore
            .text(', ')
            .append($(`<a href="#">${studiosMoreSplit.join(', ')}</a>`).on('click auxclick', matchStudioFromElemContext));
        } else if (studiosMoreCount === studiosMoreSplit.length) {
          $studiosMore.empty();
          studiosMoreSplit.forEach((part) => $studiosMore.append(', ', $(`<a href="#">${part}</a>`).on('click auxclick', matchStudioFromElemContext)));
        } else {
          $studiosExpand.one('click', matchStudiosMoreSplit);
        }

        $studios.find('label')
          .wrap(`<a href="#"></a>`)
          .parent()
          .on('click auxclick', async function(evt) {
            evt.preventDefault();
            $(this).off();

            await Promise.all([...$studios.find('a[href="#"]:not(:has(label), .studios-expand)').get().map((e) => matchStudioFromElemContext.call(e)), matchStudiosMoreSplit()]);
            const url = `/search/${pathSplit[0]}?studio_ids=${Array.from(matchingStudios).join(',')}`;

            if (evt.type === 'click') location.href = url;
            else GM_openInTab(location.origin + url, { insert: true, setParent: true }); // GM_openInTab for reliably opening background tabs
            $(this).attr('href', url);
          });
      }
    }
  }
}, { capture: true });

///////////////////////////////////////////////////////////////////////////////////////////////

// fetch and cache a map of all possible country values (~235) from the advanced filters modal
async function getMapOfAllCountries() {
  let allCountriesMap = JSON.parse(await GM.getValue('allCountriesMap', null));
  if (!allCountriesMap) {
    const doc = await fetch('/search/movies').then((r) => r.text()).then((d) => new DOMParser().parseFromString(d, 'text/html')); // movie countries are superset of show countries
    allCountriesMap = Object.fromEntries(
      $(doc).find('#filter-countries')
        .children()
        .get()
        .map((e) => [$(e).text(), $(e).attr('value').toLowerCase()])
    );
    GM.setValue('allCountriesMap', JSON.stringify(allCountriesMap))
  }
  return allCountriesMap;
}

// fetch and cache a sorted list of all possible language values (~179) from the advanced filters modal
async function getSortedArrOfAllLanguages() {
  let allLanguagesArrSorted = JSON.parse(await GM.getValue('allLanguagesArrSorted', null));
  if (!allLanguagesArrSorted) {
    const doc = await fetch('/search/movies').then((r) => r.text()).then((d) => new DOMParser().parseFromString(d, 'text/html')); // movie languages are superset of show languages
    allLanguagesArrSorted = $(doc).find('#filter-languages')
      .children()
      .get()
      .map((e) => [$(e).attr('value'), $(e).text()])
      .sort(([, nameA], [, nameB]) => nameB.length - nameA.length); // ensure longest names get matched first, necessary because language names can include other language names and commas
    GM.setValue('allLanguagesArrSorted', JSON.stringify(allLanguagesArrSorted))
  }
  return allLanguagesArrSorted;
}

// fetch and cache a sorted list of all possible network values (~4000) from the advanced filters modal (trakt api only returns one single network and only the name, no id)
async function getSortedArrOfAllNetworks() {
  let allNetworksArrSorted = JSON.parse(await GM.getValue('allNetworksArrSorted', null));
  if (!allNetworksArrSorted) {
    const doc = await fetch('/search/shows').then((r) => r.text()).then((d) => new DOMParser().parseFromString(d, 'text/html')),
          collator = new Intl.Collator();
    allNetworksArrSorted = $(doc).find('#filter-network_ids')
      .children()
      .get()
      .map((e) => $(e).text() ? [+$(e).attr('value'), { name: $(e).text(), countryId: $(e).attr('data-tag')?.toLowerCase() }] : null) // (names are not sanitized, can contain leading/trailing whitespace)
      .filter(Boolean) // at least one option has no name
      .sort(([networkIdA, { name: nameA, countryId: countryIdA }], [networkIdB, { name: nameB, countryId: countryIdB }]) =>
             nameB.length - nameA.length || // ensure longest names get matched first, necessary because network names can include other network names and commas
             collator.compare(nameA, nameB) || // make sure all those with the same name are neighbors
             (countryIdB && 1) - (countryIdA && 1) || // prioritize those with country code
             networkIdB - networkIdA // the lower the network id, the more major the network tends to be
           );
    GM.setValue('allNetworksArrSorted', JSON.stringify(allNetworksArrSorted))
  }
  return allNetworksArrSorted;
}

///////////////////////////////////////////////////////////////////////////////////////////////

function addStyles() {
  GM_addStyle(`
    #overview .additional-stats .country-flag {
      width: 20px !important;
      margin: -2px 5px 0 0 !important;
      transition: transform .5s ease;
    }
    #overview .additional-stats a:hover > .country-flag {
      transform: scale(1.1);
    }

    :is(#info-wrapper .additional-stats a > label, #summary-wrapper a > .year):hover {
      color: var(--link-color) !important;
      cursor: pointer !important;
    }
    #summary-wrapper a:has(> .certification):hover {
      color: #fff !important;
    }
  `);
}
})();


gmStorage['kji85iek'] && (async () => {
'use strict';

const $ = unsafeWindow.jQuery;
if (!$) return;


unsafeWindow.ratingOverlay = ($e, rating) => { // addOverlays() already calls ratingOverlay() for list preview posters (albeit with wrong selection) and handles .corner-rating removal if necessary
  if (!$e.length) {
    const $prevSelection = $e.end();
    if ($prevSelection.closest('.personal-list').length && $prevSelection.hasClass('poster')) $e = $prevSelection;
  }
  if (!$e.find('.corner-rating').length) {
    $e.prepend(`<div class="corner-rating corner-rating-${rating}"><div class="text">${rating}</div></div>`);
  }
}


const addLinksToPosters = unsafeWindow.userscriptAddLinksToListPreviewPosters = () => { // exposed for "Trakt.tv | All-in-One Lists View" userscript
  $('.personal-list .poster[data-url]:not(:has(> a))').each(function() {
    $(this).children().wrapAll(`<a href="${$(this).attr('data-url')}"></a>`);
  });
};

document.addEventListener('turbo:load', addLinksToPosters, { capture: true });

$(document).on('ajaxSuccess', (_evt, _xhr, opt) => {
  if (opt.url.endsWith('/popular_lists')) {
    addLinksToPosters();
    unsafeWindow.addOverlays();
  }
});


GM_addStyle(`
  @media (min-width: 992px) {
    .personal-list .poster .corner-rating {
      border-width: 0 24px 24px 0 !important;
    }
    .personal-list .poster .corner-rating > .text {
      height: 24px !important;
      width: 12px !important;
      font-size: 11px !important;
      line-height: 11px !important;
      right: -18px !important;
    }
  }

  .personal-list .poster.dropped-show .dropped-badge-wrapper {
    top: 50% !important; /* otherwise blocks interaction with summary page anchor tag */
    height: auto !important;
  }
`);
})();


gmStorage['p2o98x5r'] && (async () => {
/*
### General
- Sorting, filtering and list actions (unlike, delete etc.) should work as usual. Also works on /lists pages of other users.
- The [Trakt.tv | Bug Fixes and Optimizations](brzmp0a9.md) userscript contains an improved/fixed "Read more..." function which greatly speeds up the rendering of the appended lists.
*/


'use strict';

addStyles();

document.addEventListener('turbo:load', () => {
  if (!/^\/users\/[^\/]+\/lists$/.test(location.pathname)) return;

  const $ = unsafeWindow.jQuery;
  if (!$) return;


  const $sortableGrid = $('#sortable-grid'),
        $spacer = $sortableGrid.children().length ? $(`<hr id="all-in-one-lists-view-spacer">`).insertAfter($sortableGrid) : undefined,
        $btn = $(`<button id="all-in-one-lists-view-btn" type="button">All-in-One Lists View</button>`).insertAfter($spacer ?? $sortableGrid);

  $btn.on('click', async () => {
    $btn.text('Loading...').prop('disabled', true);

    const fetchListElems = async (pathSuffix) => fetch(location.pathname + pathSuffix)
                                                   .then((r) => r.text())
                                                   .then((r) => $(new DOMParser().parseFromString(r, 'text/html')).find('.personal-list'));
    let $fetchedLists = $((await Promise.all(['/collaborations', '/liked', '/liked/official'].map(fetchListElems))).flatMap(($listElems) => $listElems.get()));

    const $personalLists = $('.personal-list'),
          personalListsIds = $personalLists.map((_i, e) => $(e).attr('data-list-id')).get();
    $fetchedLists = $fetchedLists.filter((_i, e) => !personalListsIds.includes($(e).attr('data-list-id'))); // duplicate removal because a user can like his own personal lists

    if (!$fetchedLists.length) {
      $btn.text('No other lists found.')
      return;
    }

    const rankOffset = +$personalLists.last().attr('data-rank');
    $fetchedLists.each((i, e) => $(e).attr('data-rank', rankOffset + i + 1));

    $fetchedLists
      .find('.btn-list-progress').click(function() {
        unsafeWindow.showLoading();
        const dataListId = $(this).attr('data-list-id');
        if(dataListId && unsafeWindow.userSettings?.user.vip) unsafeWindow.redirect(unsafeWindow.userURL('progress?list=' + dataListId));
        else unsafeWindow.redirect('/vip/list-progress');
      })
      .end().find('.btn-list-subscribe').click(function() {
        unsafeWindow.showLoading();
        const dataListId = $(this).attr('data-list-id');
        if(dataListId && unsafeWindow.userSettings?.user.vip) {
          $.post(`/lists/${dataListId}/subscribe`, function(response) {
            unsafeWindow.redirect(response.url);
          }).fail(function() {
            unsafeWindow.hideLoading();
            unsafeWindow.toastr.error('Doh! We ran into some sort of error.');
          });
        }
        else unsafeWindow.redirect('/vip/calendars');
      })
      .end().find('.collaborations-deny').on('ajax:success', function(_e, response) {
        $('#collaborations-deny-' + response.id).children().addClass('trakt-icon-delete-thick');
        $('#collaborations-approve-' + response.id).addClass('off');
        $('#collaborations-block-' + response.id).addClass('off');
      });

    const $btnListEditLists = $('#btn-list-edit-lists');
    if ($btnListEditLists.hasClass('active')) $btnListEditLists.trigger('click');
    $btnListEditLists.hide();

    $sortableGrid.append($fetchedLists);
    $spacer?.remove();
    $btn.remove();

    unsafeWindow.genericTooltips();
    unsafeWindow.vipTooltips();
    unsafeWindow.shareIcons();
    unsafeWindow.convertEmojis();
    unsafeWindow.userscriptAddLinksToListPreviewPosters?.();
    unsafeWindow.addOverlays();
    unsafeWindow.$grid?.isotope('insert', $fetchedLists); // isotope instance is only initiliazed after first filtering/sorting
    unsafeWindow.updateListsCount();
    unsafeWindow.lazyLoadImages();

    // pre-filtering because the readmore plugin is a serious performance bottleneck
    // requires the renderReadmore() function override from the "Trakt.tv | Bug Fixes and Optimizations" userscript to actually speed things up
    requestAnimationFrame(() => {
      const $readmoreElemsToCollapse = $fetchedLists.find('.readmore').filter((_i, e) => $(e).height() > 300);
      unsafeWindow.renderReadmore($readmoreElemsToCollapse);
    });
  });
}, { capture: true });


function addStyles() {
  GM_addStyle(`
    #all-in-one-lists-view-btn {
      margin: 20px auto 0;
      padding: 8px 16px;
      border-radius: var(--btn-radius);
      border: 1px solid hsl(0deg 0% 20% / 65%);
      background-color: #fff;
      color: #333;
      font-size: 18px;
      font-weight: var(--headings-font-weight);
      font-family: var(--headings-font-family);
      transition: all 0.2s;
    }
    #all-in-one-lists-view-btn:hover {
      color: var(--brand-primary);
    }
    #all-in-one-lists-view-btn:active {
      background-color: #ccc;
    }
    body.dark-knight #all-in-one-lists-view-btn {
      border: none;
      background-color: #333;
      color: #fff;
    }
    body.dark-knight #all-in-one-lists-view-btn:hover {
      background-color: var(--brand-primary);
    }
    body.dark-knight #all-in-one-lists-view-btn:active {
      background-color: #666;
    }

    @media (min-width: 768px) {
      body:has(> .bottom[id*="content-page"]) #all-in-one-lists-view-btn {
        margin-bottom: -20px;
      }
    }

    :is(#all-in-one-lists-view-btn, #all-in-one-lists-view-spacer) {
      display: block !important;
    }
    body:has(#btn-list-edit-lists.active) :is(#all-in-one-lists-view-btn, #all-in-one-lists-view-spacer) {
      display: none !important;
    }
  `);
}
})();


gmStorage['pmdf6nr9'] && (async () => {
/* global Chart */

'use strict';

let $, trakt;
const numFormatCompact = new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 1 });
numFormatCompact.formatTLC = (n) => numFormatCompact.format(n).toLowerCase();


addStyles();

document.addEventListener('turbo:load', async () => {
  if (!/^\/(shows|movies)\//.test(location.pathname)) return;

  $ ??= unsafeWindow.jQuery;
  trakt ??= unsafeWindow.userscriptTraktAPIModule?.isFulfilled ? await unsafeWindow.userscriptTraktAPIModule : null;
  if (!$) return;

  const $summaryWrapper = $('#summary-wrapper'),
        $summaryRatingsWrapper = $summaryWrapper.find('#summary-ratings-wrapper'),
        statsPath = $summaryRatingsWrapper.find('.trakt-rating > a').attr('href');
  if (!statsPath) return;

  const $canvas = $(`<div id="ratings-distribution-chart-wrapper"><canvas></canvas></div>`)
                    .appendTo($summaryWrapper.find('.shadow-base'))
                    .find('canvas');
  const [ratingsData, fanartBrightness] = await Promise.all([getRatingsData(statsPath), getFanartBrightness($summaryWrapper)]);

  const newChart = () => {
    new Chart($canvas[0].getContext('2d'), {
      type: 'bar',
      data: getChartData(ratingsData, fanartBrightness),
      options: getChartOptions(ratingsData, $summaryRatingsWrapper),
    });
  };
  if (!document.hidden) newChart();
  else $(document).one('visibilitychange', newChart);
}, { capture: true });


async function getRatingsData(statsPath) {
  let ratingsData;
  if (trakt) {
    const statsPathSplit = statsPath.split('/').slice(1, -1),
          id = isNaN(statsPathSplit[1]) ? statsPathSplit[1] : $('.summary-user-rating').attr(`data-${statsPathSplit[0].slice(0, -1)}-id`), // /shows/1883 numeric slugs are interpreted as trakt id by api
          resp = await trakt[(statsPathSplit[4] ?? statsPathSplit[2] ?? statsPathSplit[0])].ratings({ id, season: statsPathSplit[3], episode: statsPathSplit[5] });
    ratingsData = { distribution: Object.values(resp.distribution), votes: resp.votes };
  } else {
    const resp = await fetch(statsPath),
          statsDoc = new DOMParser().parseFromString(await resp.text(), 'text/html'),
          ratDist = JSON.parse($(statsDoc).find('#charts-wrapper script').text().match(/ratingsDistribution = (\[.*\])/)[1]);
    ratingsData = { distribution: ratDist, votes: $('#summary-ratings-wrapper').data('vote-count') };
  }

  if (ratingsData.distribution.length === 11) { // bg logging of titles with malformed (length = 11, [0] === 1 or more, only movs/shows no seasons/eps) ratings distribution data e.g. /shows/chainsaw-man/stats
    // GM.setValue(statsPath, ratingsData.distribution.toString());
    console.warn('Userscript [' + GM_info.script.name + ']: Malformed ratings distribution data.', ratingsData.distribution);
    ratingsData.distribution.shift();
  }

  return ratingsData;
}

function getFanartBrightness($summaryWrapper) {
  const $fullScreenshot = $summaryWrapper.find('> .full-screenshot');

  const onBgImgSet = async () => {
    const url = $fullScreenshot.css('background-image').match(/https.*webp/)?.[0];
    if (!url) return 0.5;

    const resp = await GM.xmlHttpRequest({ url, responseType: 'blob', fetch: true });
    if (resp.status !== 200) throw new Error(`XHR for: ${resp.finalUrl} failed with status: ${resp.status}`);

    const blobUrl = URL.createObjectURL(resp.response),
          img = new Image();
    img.src = blobUrl;
    await img.decode();
    URL.revokeObjectURL(blobUrl);

    const canvas = document.createElement('canvas');
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);

    const cropWidth = img.naturalWidth / 4, cropHeight = img.naturalHeight / 4,
          data = ctx.getImageData(3*cropWidth, 2*cropHeight, cropWidth, cropHeight).data;
    let sum = 0, px = data.length / 16;
    for (let i = 0; i < data.length; i += 16) {
      sum += (0.299*data[i] + 0.587*data[i+1] + 0.114*data[i+2]) / 255;
    }
    return sum / px;
  }

  if ($fullScreenshot.attr('style')) return onBgImgSet();
  else {
    return new Promise((res) => {
      new MutationObserver((_mutations, mutObs) => {
        mutObs.disconnect();
        res(onBgImgSet());
      }).observe($fullScreenshot[0], { attributeFilter: ['style'] });
    });
  }
}


function getGradientY(context, callerId, yAxisId, ...colors) {
  if (!context) return colors.pop().color;
  const {ctx, chartArea, scales} = context.chart;
  if (!chartArea) return;

  ctx[callerId] ??= {};
  if (!ctx[callerId].gradient ||
      ctx[callerId].height !== chartArea.height ||
      ctx[callerId].yAxisMin !== scales[yAxisId].min ||
      ctx[callerId].yAxisMax !== scales[yAxisId].max) {
    let newBottom = scales[yAxisId].max - scales[yAxisId].min;
    newBottom = newBottom ? scales[yAxisId].max / newBottom : 1;
    newBottom = chartArea.bottom * newBottom;

    ctx[callerId].gradient = ctx.createLinearGradient(0, newBottom, 0, chartArea.top);
    colors.forEach((c) => ctx[callerId].gradient.addColorStop(c.offset, c.color));

    ctx[callerId].height = chartArea.height;
    ctx[callerId].yAxisMin = scales[yAxisId].min;
    ctx[callerId].yAxisMax = scales[yAxisId].max;
  }
  return ctx[callerId].gradient;
}

function getChartData(ratingsData, fanartBrightness) {
  return {
    labels: [...Array(10)].map((_, i) => String(i + 1)),
    datasets: [{
      label: 'Votes',
      data: ratingsData.distribution,
      categoryPercentage: 1,
      barPercentage: 0.97,
      backgroundColor: `rgba(${Array(3).fill(Math.min(fanartBrightness+0.35, 1)*255).join(', ')}, ${Math.min(fanartBrightness+0.3, 0.7)})`,
      hoverBackgroundColor: (context) => getGradientY(context, '_votes', 'y',
        { offset: 0, color: `rgba(155, 66, 200, ${Math.min(fanartBrightness+0.3, 0.7)})` },
        { offset: 0.9, color: `rgba(255, 0, 0, ${Math.min(fanartBrightness+0.3, 0.7)})` }),
    }],
  };
}

function getChartOptions(ratingsData, $summaryRatingsWrapper) {
  return {
    responsive: true,
    maintainAspectRatio: false,
    minBarLength: 2,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    animation: {
      delay: (context) => (context.type === 'data' && context.mode === 'default') ? 250 + context.dataIndex * (750 / (ratingsData.distribution.length - 1)) : 0,
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
        suggestedMax: 10,
      },
    },
    plugins: {
      tooltip: {
        displayColors: false,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        caretSize: 10,
        padding: {
          x: 12,
          y: 5,
        },
        titleAlign: 'center',
        titleMarginBottom: 2,
        titleFont: {
          weight: 'bold',
        },
        bodyAlign: 'center',
        bodyColor: 'rgb(170, 170, 170)',
        bodyFont: {
          size: 11,
        },
        footerAlign: 'center',
        footerColor: (context) => `hsl(0, ${context.tooltip.dataPoints[0].parsed.x * 11}%, 35%)`, // approximation
        footerMarginTop: 2,
        footerFont: {
          size: 18,
        },
        callbacks: {
          title: (tooltipItems) => {
            const label = tooltipItems[0].label;
            return `${label} - ${unsafeWindow.ratingsText?.[label]}`;
          },
          label: (tooltipItem) => {
            const y = tooltipItem.parsed.y;
            return `${ratingsData.votes > 0 ? (y*100 / ratingsData.votes).toFixed(1) : '--'}% (${numFormatCompact.formatTLC(y)} v.)`;
          },
          footer: (tooltipItems) => {
            const personalRating = $summaryRatingsWrapper.find('.summary-user-rating > :not([style="display: none;"]) > [class*="rating-"]').first().attr('class')?.match(/rating-(\d+)/)?.[1];
            return tooltipItems[0].parsed.x === personalRating - 1 ? '\u2764' : '';
          },
        },
      },
      legend: {
        display: false,
      },
    },
    onClick: (_evt, activeElems) => {
      if (!activeElems.length) return;

      const rating = activeElems[0].index + 1;
      $summaryRatingsWrapper.find('.summary-user-rating:not(.popover-on)').trigger('click');
      setTimeout(() => $(`.needsclick.rating-${rating}`).trigger('mouseover').trigger('click'), 500);
    },
  };
}


function addStyles() {
  GM_addStyle(`
    #summary-wrapper {
      container-type: inline-size;
      --rat-dist-chart-width: 28cqi;
    }
    #summary-wrapper .shadow-base {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
    }
    #ratings-distribution-chart-wrapper {
      position: relative;
      z-index: 30;
      height: 100%;
      width: var(--rat-dist-chart-width);
    }
    #summary-wrapper:has(#summary-ratings-wrapper) .summary .mobile-title {
      padding-right: calc(var(--rat-dist-chart-width) - ((100cqi - 100%) / 2) + 5px) !important;
    }
    @media (width <= 767px) {
      #ratings-distribution-chart-wrapper {
        height: 65%;
      }
    }


    #summary-wrapper .summary .mobile-title .year {
      white-space: nowrap;
    }
    #summary-wrapper .summary .mobile-title .year::after {
      content: "\\2060";
    }
  `);
}
})();


gmStorage['txw82860'] && (async () => {
'use strict';

const menuTemplates = {
  historySorting: (hrefPrefix, [anchorIndex = 1, ...submenuAnchorIndexes] = []) => ({
    hrefPrefix,
    entries: ((arr) => arr.with(anchorIndex, { ...arr.at(anchorIndex), anchor: true }))([
      { text: 'SORT BY' },
      { text: 'Watched Date', href: '/added' },
      { text: 'Plays', href: '/plays' },
      { text: 'Time Spent', href: '/time' },
      { text: 'Title', href: '/title' },
      { text: 'Release Date', href: '/released' },
      { text: 'Runtime', href: '/runtime' },
      { text: 'Popularity', href: '/popularity' },
      { text: 'Percentage', href: '/percentage' },
      { text: 'Votes', href: '/votes' },
    ]),
  }),
  progressSorting: (hrefPrefix, [anchorIndex = 1, ...submenuAnchorIndexes] = []) => ({
    hrefPrefix,
    entries: ((arr) => arr.with(anchorIndex, { ...arr.at(anchorIndex), anchor: true }))([
      { text: 'SORT BY' },
      { text: 'Watched Date', href: '/added' },
      { text: 'Completion %', href: '/completed' },
      { text: 'Episodes Left', href: '/episodes' },
      { text: 'Time Left', href: '/time' },
      { text: 'Plays', href: '/plays' },
      { text: 'Release Date', href: '/released' },
      { text: 'Premiere Date', href: '/premiered' },
      { text: 'Title', href: '/title' },
      { text: 'Popularity', href: '/popularity' },
      { text: 'Episode Runtime', href: '/runtime' },
      { text: 'Total Runtime', href: '/total-runtime' },
      { text: 'Random', href: '/random' },
    ]),
  }),
  librarySorting: (hrefPrefix, [anchorIndex = 1, ...submenuAnchorIndexes] = []) => ({
    hrefPrefix,
    entries: ((arr) => arr.with(anchorIndex, { ...arr.at(anchorIndex), anchor: true }))([
      { text: 'SORT BY' },
      { text: 'Added Date', href: '/added' },
      { text: 'Title', href: '/title' },
      { text: 'Release Date', href: '/released' },
      ...(/\/shows/.test(hrefPrefix) ? [
        { text: 'Episode Count', href: '/episodes' },
      ] : []),
      ...(!/\/episodes/.test(hrefPrefix) ? [
        { text: 'Runtime', href: '/runtime' },
        { text: 'Popularity', href: '/popularity' },
      ] : []),
      { text: 'Percentage', href: '/percentage' },
      { text: 'Votes', href: '/votes' },
    ]),
  }),
  ratingSelection: (hrefPrefix, [anchorIndex = 1, ...submenuAnchorIndexes] = []) => ({
    hrefPrefix,
    entries: ((arr) => arr.with(anchorIndex, { ...arr.at(anchorIndex), anchor: true }))([
      { text: 'RATING' },
      { text: 'All Ratings', href: '/all', submenu: menuTemplates.ratingsSorting(hrefPrefix + '/all', submenuAnchorIndexes) },
      { text: '10 - Totally Ninja!', href: '/10', submenu: menuTemplates.ratingsSorting(hrefPrefix + '/10', submenuAnchorIndexes) },
      { text: '9 - Superb', href: '/9', submenu: menuTemplates.ratingsSorting(hrefPrefix + '/9', submenuAnchorIndexes) },
      { text: '8 - Great', href: '/8', submenu: menuTemplates.ratingsSorting(hrefPrefix + '/8', submenuAnchorIndexes) },
      { text: '7 - Good', href: '/7', submenu: menuTemplates.ratingsSorting(hrefPrefix + '/7', submenuAnchorIndexes) },
      { text: '6 - Fair', href: '/6', submenu: menuTemplates.ratingsSorting(hrefPrefix + '/6', submenuAnchorIndexes) },
      { text: '5 - Meh', href: '/5', submenu: menuTemplates.ratingsSorting(hrefPrefix + '/5', submenuAnchorIndexes) },
      { text: '4 - Poor', href: '/4', submenu: menuTemplates.ratingsSorting(hrefPrefix + '/4', submenuAnchorIndexes) },
      { text: '3 - Bad', href: '/3', submenu: menuTemplates.ratingsSorting(hrefPrefix + '/3', submenuAnchorIndexes) },
      { text: '2 - Terrible', href: '/2', submenu: menuTemplates.ratingsSorting(hrefPrefix + '/2', submenuAnchorIndexes) },
      { text: '1 - Weak Sauce :(', href: '/1', submenu: menuTemplates.ratingsSorting(hrefPrefix + '/1', submenuAnchorIndexes) },
    ]),
  }),
  ratingsSorting: (hrefPrefix, [anchorIndex = 1, ...submenuAnchorIndexes] = []) => ({
    hrefPrefix,
    entries: ((arr) => arr.with(anchorIndex, { ...arr.at(anchorIndex), anchor: true }))([
      { text: 'SORT BY' },
      { text: 'Rated Date', href: '/added' },
      { text: 'Rating', href: '/rating' },
      ...(!/\/ratings\/all/.test(hrefPrefix) ? [
        { text: 'Title', href: '/title' },
        { text: 'Release Date', href: '/released' },
        ...(/\/(movies|shows)/.test(hrefPrefix) ? [
          { text: 'Runtime', href: '/runtime' },
          { text: 'Popularity', href: '/popularity' },
        ] : []),
        { text: 'Percentage', href: '/percentage' },
        { text: 'Votes', href: '/votes' },
      ] : []),
    ]),
  }),
  listsViewSorting: (hrefPrefix, [anchorIndex = 1, ...submenuAnchorIndexes] = []) => ({
    hrefPrefix,
    entries: ((arr) => arr.with(anchorIndex, { ...arr.at(anchorIndex), anchor: true }))([
      { text: 'SORT BY' },
      ...(/\/lists\?/.test(hrefPrefix) ? [
        { text: 'Rank', href: 'rank' },
      ] : []),
      ...(/\/liked/.test(hrefPrefix) ? [
        { text: 'Like Date', href: 'liked' },
      ] : []),
      { text: 'Updated Date', href: 'updated' },
      { text: 'Title', href: 'title' },
      { text: 'Likes', href: 'likes' },
      { text: 'Comments', href: 'comments' },
      { text: 'Items', href: 'items' },
      { text: 'Random', href: 'random' },
    ]),
  }),
  listSorting: (hrefPrefix, [anchorIndex = 1, ...submenuAnchorIndexes] = []) => ({
    hrefPrefix,
    entries: ((arr) => arr.with(anchorIndex, { ...arr.at(anchorIndex), anchor: true }))([
      { text: 'SORT BY' },
      { text: 'Rank', href: 'rank' },
      { text: 'Added Date', href: 'added' },
      { text: 'Title', href: 'title' },
      { text: 'Release Date', href: 'released' },
      { text: 'Runtime', href: 'runtime' },
      { text: 'Popularity', href: 'popularity' },
      { text: 'Random', href: 'random' },
      {},
      { text: 'Trakt Percentage', href: 'percentage' },
      { text: 'Trakt Votes', href: 'votes' },
      {},
      { text: 'My Rating', href: 'my_rating' },
      { text: 'Watched Date', href: 'watched' },
      { text: 'Collected Date', href: 'collected' },
    ]),
  }),
  commentType: (hrefPrefix, [anchorIndex = 1, ...submenuAnchorIndexes] = []) => ({
    hrefPrefix,
    entries: ((arr) => arr.with(anchorIndex, { ...arr.at(anchorIndex), anchor: true }))([
      { text: 'TYPE' },
      { text: 'All Types', href: '/all', submenu: menuTemplates.commentSorting(hrefPrefix + '/all', submenuAnchorIndexes) },
      { text: 'Movies', href: '/movies', submenu: menuTemplates.commentSorting(hrefPrefix + '/movies', submenuAnchorIndexes) },
      { text: 'Shows', href: '/shows', submenu: menuTemplates.commentSorting(hrefPrefix + '/shows', submenuAnchorIndexes) },
      { text: 'Seasons', href: '/seasons', submenu: menuTemplates.commentSorting(hrefPrefix + '/seasons', submenuAnchorIndexes) },
      { text: 'Episodes', href: '/episodes', submenu: menuTemplates.commentSorting(hrefPrefix + '/episodes', submenuAnchorIndexes) },
      { text: 'Lists', href: '/lists', submenu: menuTemplates.commentSorting(hrefPrefix + '/lists', submenuAnchorIndexes) },
    ]),
  }),
  commentSorting: (hrefPrefix, [anchorIndex = 1, ...submenuAnchorIndexes] = []) => ({
    hrefPrefix,
    entries: ((arr) => arr.with(anchorIndex, { ...arr.at(anchorIndex), anchor: true }))([
      { text: 'SORT BY' },
      { text: 'Added Date', href: '/added' },
      { text: 'Reactions <em>(30 Days)</em>', href: '/likes_30' }, // TODO change href once/if they switch to /reactions_30
      { text: 'Reactions <em>(All Time)</em>', href: '/likes' },
      { text: 'Replies <em>(30 Days)</em>', href: '/replies_30' },
      { text: 'Replies <em>(All Time)</em>', href: '/replies' },
      { text: 'Plays', href: '/plays' },
      { text: 'Rating', href: '/rating' },
    ]),
  }),
  hiddenItemsSorting: (hrefPrefix, [anchorIndex = 1, ...submenuAnchorIndexes] = []) => ({
    hrefPrefix,
    entries: ((arr) => arr.with(anchorIndex, { ...arr.at(anchorIndex), anchor: true }))([
      { text: 'SORT BY' },
      { text: 'Title', href: '/title' },
      { text: 'Date', href: '/data' },
    ]),
  }),
  showsMoviesCatTimePeriod: (hrefPrefix, [anchorIndex = -1, ...submenuAnchorIndexes] = []) => ({
    hrefPrefix,
    entries: ((arr) => arr.with(anchorIndex, { ...arr.at(anchorIndex), anchor: true }))([
      { text: 'PERIOD' },
      { text: 'Day', href: '/daily' },
      { text: 'Week', href: '/weekly' },
      { text: 'Month', href: '/monthly' },
      { text: 'All Time', href: '/all' },
    ]),
  }),
};

const menus = {
  '.btn-profile a[href$="/history"]': {
    hrefPrefix: '/users/me/history',
    entries: [
      { text: 'TYPE' },
      { text: 'All Types', href: '/all', anchor: true },
      { text: 'Movies', href: '/movies', submenu: menuTemplates.historySorting('/users/me/history/movies') },
      { text: 'Shows', href: '/shows', submenu: menuTemplates.historySorting('/users/me/history/shows') },
      { text: 'Episodes', href: '/episodes', submenu: menuTemplates.historySorting('/users/me/history/episodes') },
    ],
  },
  '.btn-profile a[href$="/library"]': {
    hrefPrefix: '/users/me/library',
    entries: [
      { text: 'TYPE' },
      { text: 'All Types', href: '/all', anchor: true },
      { text: 'Movies', href: '/movies', submenu: menuTemplates.librarySorting('/users/me/library/movies') },
      { text: 'Shows', href: '/shows', submenu: menuTemplates.librarySorting('/users/me/library/shows') },
      { text: 'Episodes', href: '/episodes', submenu: menuTemplates.librarySorting('/users/me/library/episodes') },
    ],
  },
  '.btn-profile a[href$="/progress"]': {
    hrefPrefix: '/users/me/progress',
    entries: [
      { text: 'SHOWS' },
      { text: 'Watched', href: '/watched', anchor: true, submenu: menuTemplates.progressSorting('/users/me/progress/watched') },
      { text: 'Dropped', href: '/dropped', submenu: menuTemplates.progressSorting('/users/me/progress/dropped') },
      { text: 'Library', href: '/library', submenu: menuTemplates.progressSorting('/users/me/progress/library') },
      ...(unsafeWindow.userscriptPlaybackProgressManager ? [
        {},
        { text: 'PLAYBACK' },
        { text: 'All Types', href: '/playback' },
        { text: 'Movies', href: '/playback/movies' },
        { text: 'Episodes', href: '/playback/episodes' },
      ] : []),
    ],
  },
  '.btn-profile a[href$="/ratings"]': {
    hrefPrefix: '/users/me/ratings',
    entries: [
      { text: 'TYPE' },
      { text: 'All Types', href: '/all', anchor: true, submenu: menuTemplates.ratingSelection('/users/me/ratings/all') },
      { text: 'Movies', href: '/movies', submenu: menuTemplates.ratingSelection('/users/me/ratings/movies', [ , 4]) },
      { text: 'Shows', href: '/shows', submenu: menuTemplates.ratingSelection('/users/me/ratings/shows', [ , 4]) },
      { text: 'Seasons', href: '/seasons', submenu: menuTemplates.ratingSelection('/users/me/ratings/seasons', [ , -1]) },
      { text: 'Episodes', href: '/episodes', submenu: menuTemplates.ratingSelection('/users/me/ratings/episodes', [ , -1]) },
    ],
  },
  '.btn-profile a[href$="/lists"]': {
    hrefPrefix: '/users/me/lists',
    entries: [
      { text: 'Watchlist', href: '/users/me/watchlist', useHrefPrefix: false, submenu: {
        hrefPrefix: '/users/me/watchlist?display=',
        entries: [
          { text: 'TYPE' },
          { text: 'All Types', href: '/users/me/watchlist', useHrefPrefix: false, anchor: true, submenu: menuTemplates.listSorting('/users/me/watchlist?sort=', [3]) },
          { text: 'Movies', href: 'movie', submenu: menuTemplates.listSorting('/users/me/watchlist?display=movie&sort=', [3]) },
          { text: 'Shows', href: 'show', submenu: menuTemplates.listSorting('/users/me/watchlist?display=show&sort=', [3]) },
          { text: 'Seasons', href: 'season', submenu: menuTemplates.listSorting('/users/me/watchlist?display=season&sort=', [3]) },
          { text: 'Episodes', href: 'episode', submenu: menuTemplates.listSorting('/users/me/watchlist?display=episode&sort=', [3]) },
        ],
      }},
      { text: 'Favorites', href: '/users/me/favorites', useHrefPrefix: false, submenu: {
        hrefPrefix: '/users/me/favorites?display=',
        entries: [
          { text: 'TYPE' },
          { text: 'All Types', href: '/users/me/favorites', useHrefPrefix: false, anchor: true, submenu: menuTemplates.listSorting('/users/me/favorites?sort=', [3]) },
          { text: 'Movies', href: 'movie', submenu: menuTemplates.listSorting('/users/me/favorites?display=movie&sort=', [3]) },
          { text: 'Shows', href: 'show', submenu: menuTemplates.listSorting('/users/me/favorites?display=show&sort=', [3]) },
        ],
      }},
      {},
      { text: 'YOUR LISTS' },
      { text: 'Personal Lists', href: '', submenu: menuTemplates.listsViewSorting('/users/me/lists?sort=') },
      { text: 'Collaborations', href: '/collaborations', submenu: menuTemplates.listsViewSorting('/users/me/lists/collaborations?sort=') },
      {},
      { text: 'LIKED LISTS' },
      { text: 'Personal Lists', href: '/liked', submenu: menuTemplates.listsViewSorting('/users/me/lists/liked?sort=') },
      { text: 'Official Lists', href: '/liked/official', submenu: menuTemplates.listsViewSorting('/users/me/lists/liked/official?sort=') },
    ],
  },
  '.btn-profile a[href$="/comments"]': {
    hrefPrefix: '/users/me/comments',
    entries: [
      { text: 'YOUR COMMENTS' },
      { text: 'All Comments', href: '/all', anchor: true, submenu: menuTemplates.commentType('/users/me/comments/all') },
      { text: 'Reviews', href: '/reviews', submenu: menuTemplates.commentType('/users/me/comments/reviews') },
      { text: 'Shouts', href: '/shouts', submenu: menuTemplates.commentType('/users/me/comments/shouts') },
      { text: 'Replies', href: '/replies', submenu: menuTemplates.commentType('/users/me/comments/replies') },
      {},
      { text: 'REACTIONS' },
      { text: 'All Comments', href: '/liked/all', submenu: menuTemplates.commentType('/users/me/comments/liked/all', [-1, -1]) },
      { text: 'Reviews', href: '/liked/reviews', submenu: menuTemplates.commentType('/users/me/comments/liked/reviews', [-1, -1]) },
      { text: 'Shouts', href: '/liked/shouts', submenu: menuTemplates.commentType('/users/me/comments/liked/shouts', [-1, -1]) },
      { text: 'Replies', href: '/liked/replies', submenu: menuTemplates.commentType('/users/me/comments/liked/replies', [-1, -1]) },
    ],
  },
  '.btn-profile a[href$="/notes"]': {
    hrefPrefix: '/users/me/notes',
    entries: [
      { text: 'All Types', href: '/all' },
      {},
      { text: 'MEDIA ITEMS' },
      { text: 'Movies', href: '/movies' },
      { text: 'Shows', href: '/shows' },
      { text: 'Seasons', href: '/seasons' },
      { text: 'Episodes', href: '/episodes' },
      { text: 'People', href: '/people' },
      {},
      { text: 'YOUR ACTIVITIES' },
      { text: 'History', href: '/history' },
      { text: 'Library', href: '/collection' }, // TODO switch to /library once /users/me/notes/library works
      { text: 'Ratings', href: '/ratings' },
    ],
  },
  '.btn-profile a[href$="/network"]': {
    hrefPrefix: '/users/me/network',
    entries: [
      { text: 'Following', href: '/following/added' },
      { text: 'Following <em>(Pending)</em>', href: '/following_pending/added' },
      { text: 'Followers', href: '/followers/added' },
    ],
  },
  '.btn-profile a[href="/widgets"]': {
    hrefPrefix: '/widgets',
    entries: [
      { text: 'Watched', href: '/watched' },
      { text: 'Library', href: '/library' },
      { text: 'Profile', href: '/profile' },
    ],
  },
  '.btn-profile a:contains("Quick Actions")': {
    entries: [
      { text: '<span class="toggle-dark-mode">Toggle Dark Mode<span class="right fa-solid fa-moon"></span></span>', onclick: 'toggleDarkMode(); return false;' },
      { text: 'Clear Search History', onclick: 'showLoading(); $.post(`/users/me/clear_search_history`).done(() => { toastr.success(`Your search history was cleared.`); cacheUserData(true); }).always(hideLoading); return false;' },
      { text: 'Re-cache Progress Data', onclick: 'showLoading(); $.post(`/users/me/reset_progress_cache`).done(() => { toastr.success(`Your progress cache will be updated in a few minutes.`); }).always(hideLoading); return false;' },
      { text: 'Re-cache Browser Data', onclick: 'window.reopenOverlays = [null]; window.afterLoadingBottomMessage = `Your browser data is reset!`; showLoading(`Please wait for the caching to fully complete.`); resetUserData(); return false;' },
    ],
  },
  '.btn-profile a[href="/settings"]': {
    hrefPrefix: '/settings',
    entries: [
      { text: 'Advanced', href: '/advanced' },
      { text: 'Your API Apps', href: '/oauth/applications', useHrefPrefix: false, submenu: {
        entries: [
          { text: '<span class="hidden-xs left fa fa-book"></span>API Docs', href: '/b/api-docs' },
          { text: '<span class="hidden-xs left fa fa-github"></span>Developer Forum', href: '/b/dev-forum' },
          { text: '<span class="hidden-xs left fa trakt-icon-trakt"></span>Branding', href: '/branding' },
          { text: '<span class="hidden-xs left fa fa-plus-circle"></span>New Application', href: '/oauth/applications/new' },
        ],
      }},
      { text: 'Connected Apps', href: '/oauth/authorized_applications', useHrefPrefix: false, submenu: {
        entries: [
          { text: 'Activate Device', href: '/activate' },
        ],
      }},
      { text: 'Reports', href: '/reports', submenu: {
        hrefPrefix: '/reports',
        entries: [
          { text: 'STATUS' },
          { text: 'All Reports', href: '/all', anchor: true },
          { text: 'Approved', href: '/approved' },
          { text: 'Paused', href: '/paused' },
          { text: 'Rejected', href: '/rejected' },
          { text: 'Pending', href: '/pending' },
        ],
      }},
      { text: 'Hidden Items', href: '/hidden', submenu: {
        hrefPrefix: '/settings/hidden',
        entries: [
          { text: 'Dropped Shows', href: '/dropped', submenu: menuTemplates.hiddenItemsSorting('/settings/hidden/dropped') },
          {},
          { text: 'Progress', href: '/watched', submenu: menuTemplates.hiddenItemsSorting('/settings/hidden/watched') },
          { text: 'Library', href: '/collected', submenu: menuTemplates.hiddenItemsSorting('/settings/hidden/collected') }, // TODO switch to library once /settings/hidden/library works
          { text: 'Calendar', href: '/calendars', submenu: menuTemplates.hiddenItemsSorting('/settings/hidden/calendars') },
          {},
          { text: 'Rewatching', href: '/rewatching', submenu: menuTemplates.hiddenItemsSorting('/settings/hidden/rewatching') },
          { text: 'Blocked Users', href: '/comments', submenu: menuTemplates.hiddenItemsSorting('/settings/hidden/comments') },
        ],
      }},
      { text: 'Plex Sync', href: '/plex' },
      { text: 'Streaming Sync', href: '/scrobblers' },
      { text: 'Notifications', href: '/notifications' },
      { text: 'Sharing', href: '/sharing' },
      { text: 'Data', href: '/data' },
      { text: 'General', href: '', anchor: true, submenu: {
        hrefPrefix: '/settings',
        entries: [
          { text: 'Change Password', href: '#password' },
          { text: 'Appearance', href: '#appearance' },
          { text: 'Search', href: '#search' },
          { text: 'Progress', href: '#progress' },
          { text: 'Profile', href: '#profile' },
          { text: 'Year in Review', href: '#yir' },
          { text: 'Calendars', href: '#calendars' },
          { text: 'Dashboard', href: '#dashboard' },
          { text: 'Spoilers', href: '#spoilers' },
          { text: 'Watch Now', href: '#watchnow' },
          { text: 'Rewatching', href: '#rewatching' },
          { text: 'Global', href: '#global' },
          { text: 'Date & Time', href: '#datetime' },
          { text: 'Account', href: '#account', anchor: true },
        ],
      }},
    ],
  },
  ':is(.btn-mobile-links, .links-wrapper) a[href^="/shows"]': {
    hrefPrefix: '/shows',
    entries: [
      { text: 'Trending', href: '/trending' },
      { text: 'Recommendations', href: '/recommendations' },
      { text: 'Streaming Charts', href: '/streaming' },
      { text: 'Anticipated', href: '/anticipated' },
      { text: 'Popular', href: '/popular' },
      { text: 'Favorited', href: '/favorited', submenu: menuTemplates.showsMoviesCatTimePeriod('/shows/favorited') },
      { text: 'Watched', href: '/watched', submenu: menuTemplates.showsMoviesCatTimePeriod('/shows/watched') },
      { text: 'Libraries', href: '/library', submenu: menuTemplates.showsMoviesCatTimePeriod('/shows/library') },
    ],
  },
  ':is(.btn-mobile-links, .links-wrapper) a[href^="/movies"]': {
    hrefPrefix: '/movies',
    entries: [
      { text: 'Trending', href: '/trending' },
      { text: 'Recommendations', href: '/recommendations' },
      { text: 'Streaming Charts', href: '/streaming' },
      { text: 'Anticipated', href: '/anticipated' },
      { text: 'Popular', href: '/popular' },
      { text: 'Favorited', href: '/favorited', submenu: menuTemplates.showsMoviesCatTimePeriod('/movies/favorited') },
      { text: 'Watched', href: '/watched', submenu: menuTemplates.showsMoviesCatTimePeriod('/movies/watched') },
      { text: 'Libraries', href: '/library', submenu: menuTemplates.showsMoviesCatTimePeriod('/movies/library') },
      { text: 'Box Office', href: '/boxoffice' },
    ],
  },
  ':is(.btn-mobile-links, .links-wrapper) a[href="/calendars"]': {
    hrefPrefix: '/calendars',
    entries: [
      { text: 'Personal', href: '/my/shows-movies', submenu: {
        hrefPrefix: '/calendars/my',
        entries: [
          { text: 'Shows & Movies', href: '/shows-movies' },
          { text: 'Shows', href: '/shows' },
          { text: 'Premieres', href: '/premieres' },
          { text: 'New Shows', href: '/new-shows' },
          { text: 'Finales', href: '/finales' },
          { text: 'Movies', href: '/movies' },
          { text: 'Streaming', href: '/streaming' },
          { text: 'DVD & Blu-ray', href: '/dvd' },
        ],
      }},
      { text: 'General', href: '/shows', submenu: {
        hrefPrefix: '/calendars',
        entries: [
          { text: 'Shows', href: '/shows' },
          { text: 'Premieres', href: '/premieres' },
          { text: 'New Shows', href: '/new-shows' },
          { text: 'Finales', href: '/finales' },
          { text: 'Movies', href: '/movies' },
          { text: 'Streaming', href: '/streaming' },
          { text: 'DVD & Blu-ray', href: '/dvd' },
        ],
      }},
    ],
  },
  ':is(.btn-mobile-links, .links-wrapper) a[href="/discover"]': {
    hrefPrefix: '/discover',
    entries: [
      { text: 'Trends', href: '#trends' },
      { text: 'Featured Lists', href: '#lists' },
      { text: 'Summer TV Shows', href: '#featured-shows' },
      { text: 'Comments', href: '#comments' },
    ],
  },
  ':is(.btn-mobile-links, .btn-tablet-links, .links-wrapper) a[href="/apps"]': {
    hrefPrefix: '/apps',
    entries: [
      { text: 'Android <em>(official)</em>', href: "/a/trakt-android", useHrefPrefix: false, anchor: true },
      { text: 'iOS <em>(official)</em>', href: "/a/trakt-ios", useHrefPrefix: false },
      { text: 'Android & iOS <em>(3rd Party)</em>', href: "#community-apps" },
      { text: 'Android TV <em>(official)</em>', href: "/a/trakt-android-tv", useHrefPrefix: false },
      { text: 'tvOS <em>(official)</em>', href: "/a/trakt-tvos", useHrefPrefix: false },
      {},
      { text: 'INTEGRATIONS' },
      { text: 'Media Centers', href: "#watching-wrapper" },
      { text: 'Plex Sync', href: "#plex-scrobblers-wrapper" },
      { text: 'Streaming Sync', href: "#streaming-scrobbler-wrapper" },
    ],
  },
  ':is(.btn-mobile-links, .btn-tablet-links, .links-wrapper) a[href="https://forums.trakt.tv"]': {
    hrefPrefix: 'https://forums.trakt.tv',
    entries: [
      { text: 'Categories', href: '/categories', submenu: {
        hrefPrefix: 'https://forums.trakt.tv',
        entries: [
          { text: 'Announcements', href: '/c/announcements' },
          { text: 'Discussions', href: '/c/discussions', submenu: {
            hrefPrefix: 'https://forums.trakt.tv/c/discussions',
            entries: [
              { text: 'General', href: '/general' },
              { text: 'TV Shows', href: '/tv-shows' },
              { text: 'Movies', href: '/movies' },
              { text: 'Off Topic', href: '/off-topic' },
            ],
          }},
          { text: 'Trakt', href: '/c/trakt', submenu: {
            hrefPrefix: 'https://forums.trakt.tv/c/trakt',
            entries: [
              { text: 'Questions & Help', href: '/questions' },
              { text: 'Feature Requests', href: '/feature-requests' },
              { text: 'Lite', href: '/trakt-lite' },
              { text: 'Release Notes', href: '/release-notes' },
              { text: 'VIP Beta Features', href: '/vip-beta-features' },
            ],
          }},
          { text: '3rd Party', href: '/c/3rd-party', submenu: {
            hrefPrefix: 'https://forums.trakt.tv/c/3rd-party',
            entries: [
              { text: 'Media Centers', href: '/media-centers' },
              { text: 'Mobile Apps', href: '/mobile-apps' },
              { text: 'Other', href: '/other' },
            ],
          }},
          { text: 'Support', href: '/c/support', submenu: {
            hrefPrefix: 'https://forums.trakt.tv/c/support',
            entries: [
              { text: 'Tutorials', href: '/tutorials' },
              { text: 'VIP Features', href: '/vip-features' },
              { text: 'Features', href: '/support-features' },
              { text: 'FAQ', href: '/faq' },
            ],
          }},
        ],
      }},
      { text: 'Latest', href: '/latest' },
      { text: 'New', href: '/new' },
      { text: 'Top', href: '/top', submenu: {
        hrefPrefix: 'https://forums.trakt.tv/top?period=',
        entries: [
          { text: 'PERIOD' },
          { text: 'Day', href: 'daily', anchor: true },
          { text: 'Week', href: 'weekly' },
          { text: 'Month', href: 'monthly' },
          { text: 'Quarter', href: 'quarterly' },
          { text: 'Year', href: 'yearly' },
          { text: 'All Time', href: 'all' },
        ],
      }},
      {},
      { text: 'EXTERNAL' },
      { text: '<span class="left fa fa-reddit-alien"></span>r/trakt', href: 'https://reddit.com/r/trakt', useHrefPrefix: false, submenu: {
        hrefPrefix: 'https://reddit.com/r/trakt',
        entries: [
          { text: 'SORT BY' },
          { text: 'Best', href: '/best' },
          { text: 'Hot', href: '/hot' },
          { text: 'New', href: '/new' },
          { text: 'Top', href: '/top', submenu: {
            hrefPrefix: 'https://reddit.com/r/trakt/top?t=',
            entries: [
              { text: 'PERIOD' },
              { text: 'Hour', href: 'hour' },
              { text: 'Day', href: 'day' },
              { text: 'Week', href: 'week' },
              { text: 'Month', href: 'month' },
              { text: 'Year', href: 'year' },
              { text: 'All Time', href: 'all', anchor: true },
            ],
          }},
          { text: 'Rising', href: '/rising', anchor: true },
        ],
      }},
      { text: '<span class="left fa-brands fa-twitter"></span>Twitter', href: 'https://twitter.com/trakt', useHrefPrefix: false },
      { text: '<span class="left fa-brands fa-mastodon"></span>Mastodon', href: 'https://ruby.social/@trakt', useHrefPrefix: false },
    ],
  },
};

///////////////////////////////////////////////////////////////////////////////////////////////

const buildMenuHtml = ({ hrefPrefix, entries }) =>
  entries.reduce((acc, { text, href, useHrefPrefix = true, onclick, submenu }, i) =>
    acc + (
      text !== undefined && (href !== undefined || onclick !== undefined) ?
        `<li${submenu ? ' class="with-ul-menu"' : ''}>` +
          `<a href="${useHrefPrefix && hrefPrefix ? hrefPrefix : ''}${href ?? '#'}"${onclick ? ` onclick="${onclick}"` : ''}>${text}</a>${submenu ? buildMenuHtml(submenu) : ''}` +
        `</li>` :
      text !== undefined ? `<li class="dropdown-header">${text}</li>` :
      '<li class="divider"></li>'
    ), `<ul class="menu" style="top: calc(-10px - ${Math.max(entries.findIndex((e) => e.anchor), 0) * 100}%)">`) + '</ul>';
const menuSelectorsAndHtml = Object.entries(menus).map(([targetSelector, menu]) => [targetSelector, buildMenuHtml(menu)]);


addStyles();

window.addEventListener('turbo:load', () => {
  const $ = unsafeWindow.jQuery;
  if (!$) return;


  const $topNav = $('#top-nav');

  $topNav.find('.links-wrapper > a').wrap('<div class="with-solid-bg"></div>');
  $topNav.find('.links-wrapper a[href="/apps"]')
    .next().remove()
    .end().parent().removeClass('with-top-arrow').addClass('with-solid-bg');
  $topNav.find('.btn-mobile-links li:has(> a[href="/apps"])')
    .next().remove()
    .end().unwrap();
  $topNav.find('li.dark-knight')
    .removeClass('dark-knight').html('<a href="#" onclick="return false;">Quick Actions</a>')
    .before('<li class="divider"></li>').next().remove();
  $topNav.find('.btn-profile li:has(> a.yir-loader)')
    .wrapAll('<li class="with-ul-menu"><ul class="menu" style="top: -10px;"></ul></li>')
    .parent().before('<a href="#" onclick="return false;">Stats</a>')
  $topNav.find('a[href="https://forums.trakt.tv"]').removeAttr('target');

  menuSelectorsAndHtml.forEach(([targetSelector, menuHtml]) => $topNav.find(targetSelector).closest('li, div').addClass('with-ul-menu').append(menuHtml));


  const $withUlMenu = $topNav.find(':is(.user-wrapper, .links-wrapper) .with-ul-menu');

  $withUlMenu.off('click mouseover mouseout').on('touchend', function(evt) { // TODO :hover state gets set on second touchend
    evt.stopPropagation();
    if ($(evt.originalEvent.target).closest($(this).children().first()).length) {
      if (!$(this).hasClass('selected')) {
        evt.preventDefault();
        $withUlMenu.not($(this).parents()).removeClass('selected');
        $(this).addClass('selected');
      } else {
        $(this).removeClass('selected');
      }
    }
  });
  $('body').on('touchend', () => $withUlMenu.removeClass('selected'));
});

///////////////////////////////////////////////////////////////////////////////////////////////

function addStyles() {
  GM_addStyle(`
    #top-nav :is(.user-wrapper, .links-wrapper) > .with-ul-menu {
      border-radius: 8px 8px 0 0 !important;
    }
    #top-nav :is(.user-wrapper, .links-wrapper) > .with-ul-menu > a {
      transition: color .2s !important;
    }
    #top-nav#top-nav :is(.user-wrapper, .links-wrapper) > .with-ul-menu > a:hover {
      color: var(--brand-primary-300) !important;
    }
    #top-nav :is(.user-wrapper, .links-wrapper) ul {
      height: max-content;
      width: max-content !important;
      overflow-y: revert !important;
    }
    #top-nav :is(.user-wrapper, .links-wrapper) > .with-ul-menu > ul {
      top: 100% !important;
      min-width: max(130px, 100%) !important;
    }
    #top-nav .links-wrapper > .with-ul-menu > ul {
      border-radius: 8px 0 8px 8px !important;
    }
    #top-nav :is(.user-wrapper, .links-wrapper) ul ul {
      min-width: 100px !important;
      border-radius: 8px !important;
      border-top: revert !important;
    }
    #top-nav :is(.user-wrapper, .links-wrapper) :is(ul a, .dropdown-header) {
      padding: 6px 16px !important;
      font-size: 14px !important;
      margin: revert !important;
      text-shadow: revert !important;
    }
    @media (width <= 767px) {
      #top-nav :is(.user-wrapper, .links-wrapper) :is(ul a, .dropdown-header) {
        padding: 6px 12px !important;
      }
    }
    #top-nav#top-nav :is(.user-wrapper, .links-wrapper) ul a,
    #top-nav .user-wrapper :is(.btn-mobile-links, .btn-tablet-links) > .icon {
      color: #fff !important; /* light mode override */
    }
    #top-nav#top-nav :is(.user-wrapper, .links-wrapper) ul a:hover {
      background-color: rgb(from var(--brand-primary) r g b / 92%) !important;
    }
    #top-nav :is(.user-wrapper, .links-wrapper) .dropdown-header {
      font-weight: bold;
      text-transform: uppercase;
    }
    #top-nav :is(.user-wrapper, .links-wrapper) span.left {
      width: 18px;
      margin-right: 8px;
      text-align: center;
    }
    #top-nav :is(.user-wrapper, .links-wrapper) span.right {
      margin-left: 8px;
    }
    body.dark-knight #top-nav#top-nav .btn-profile a:has(> span.toggle-dark-mode):not(:hover) {
      color: var(--brand-secondary) !important;
    }


    #top-nav :is(.user-wrapper, .links-wrapper) li > a:has(+ ul)::after {
      content: "\\25B6";
      display: inline-block;
      float: right;
      margin-left: 10px;
      transform: scale(0.75) rotate(0deg);
      transition: transform 0.2s;
    }
    #top-nav :is(.user-wrapper, .links-wrapper) :is(:hover, .selected) > a::after {
      transform: rotate(180deg) scale(1);
    }


    #top-nav :is(.user-wrapper, .links-wrapper) ul {
      display: none !important;
    }
    #top-nav :is(.user-wrapper, .links-wrapper) :is(:hover, .selected) > ul {
      display: block !important;
    }


    #top-nav :is(.user-wrapper, .links-wrapper) ul ul {
      --menu-columns: 5;
      --menu-overlap: min(97%, calc((100vw - 155px * var(--menu-columns)) / var(--menu-columns) + 100%));
      right: var(--menu-overlap) !important;
    }
    @media (767px < width <= 991px) {
      #top-nav .links-wrapper ul ul {
        --menu-columns: 3;
      }
      #top-nav .links-wrapper ul ul ul ul {
        left: var(--menu-overlap) !important;
        right: revert !important;
      }
      #top-nav .links-wrapper ul ul ul a::after {
        transform: scale(0.75) rotate(180deg);
      }
      #top-nav .links-wrapper ul ul ul :is(:hover, .selected) > a::after {
        transform: rotate(0deg) scale(1);
      }
    }
    @media (width <= 767px) {
      #top-nav :is(.user-wrapper, .links-wrapper) ul ul {
        --menu-columns: 3;
      }
      #top-nav :is(.user-wrapper, .links-wrapper) ul ul ul ul {
        left: var(--menu-overlap) !important;
        right: revert !important;
      }
      #top-nav :is(.user-wrapper, .links-wrapper) ul ul ul a::after {
        transform: scale(0.75) rotate(180deg);
      }
      #top-nav :is(.user-wrapper, .links-wrapper) ul ul ul :is(:hover, .selected) > a::after {
        transform: rotate(0deg) scale(1);
      }
    }


    #top-nav :is(.user-wrapper, .links-wrapper) ul,
    #top-nav :is(.user-wrapper, .links-wrapper) > .with-ul-menu:is(:hover, .selected) {
      --nesting-depth: 0;
      z-index: var(--nesting-depth);
      background-color: hsl(0deg 0% calc(20% + var(--nesting-depth) * 2.5%) / 92%) !important;
    }
    #top-nav :is(.user-wrapper, .links-wrapper) .divider {
      background-color: hsl(0deg 0% calc(27% + var(--nesting-depth) * 2.5%)) !important;
    }
    #top-nav :is(.user-wrapper, .links-wrapper) :is(.dropdown-header, em) {
      color: hsl(0deg 0% calc(57% + var(--nesting-depth) * 2.5%)) !important;
    }
    #top-nav :is(.user-wrapper, .links-wrapper) ul ul {
      --nesting-depth: 1;
    }
    #top-nav :is(.user-wrapper, .links-wrapper) ul ul ul {
      --nesting-depth: 2;
    }
    #top-nav :is(.user-wrapper, .links-wrapper) ul ul ul ul {
      --nesting-depth: 3;
    }
    #top-nav :is(.user-wrapper, .links-wrapper) ul ul ul ul ul {
      --nesting-depth: 4;
    }
  `);
}
})();


gmStorage['wkt34fcz'] && (async () => {
'use strict';

const DEFAULT_WNLINK_ADDITIONS = 1;
const DEFAULT_WNLINK_BGCOLOR = '#333';
const DEFAULT_WNLINK_TEXTCOLOR = '#fff';

const watchNowCategories = {
  regular: 'Regular',
  streamingSiteDirectLink: 'Streaming Direct',
  streamingSiteSearchLink: 'Streaming Search',
  torrentAggregator: 'Aggregator',
  torrentTracker: 'Tracker',
  usenetIndexer: 'Indexer',
};

const buildUrlTemplates = {
  torrentsDefault: (i) => `${encodeURIComponent(i.title)}${i.type === 'movies' && i.year ? ` ${i.year}` : ''}${i.season !== undefined ? ` s${String(i.season).padStart(2, '0')}${i.episode ? `e${String(i.episode).padStart(2, '0')}` : ''}` : ''}`,
  streamingDirectPathDefault: (i) => `/${i.type === 'movies' ? `movie/${i.ids.tmdb}` : `tv/${i.ids.tmdb}/${i.season !== undefined ? i.season : '1'}/${i.episode ? i.episode : '1'}`}`,
};

const customWatchNowLinks = [
  {
    name: 'EXT',
    buildUrl: (i) => `https://ext.to/browse/?q=${buildUrlTemplates.torrentsDefault(i)} 1080p 265&with_adult=1`,
    category: watchNowCategories.torrentAggregator,
    bgColor: '#262a33',
    logo: 'data:image/png;base64,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',
  },
  {
    name: 'Knaben Database',
    buildUrl: (i) => `https://knaben.org/search/${buildUrlTemplates.torrentsDefault(i)} 1080p 265/${i.type === 'movies' ? '3000000' : i.genres.includes('anime') ? '6000000' : '2000000'}/1/seeders`,
    category: watchNowCategories.torrentAggregator,
    bgColor: '#2c2f31',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATsAAAChCAMAAACPiOhkAAAACXBIWXMAABJ0AAASdAHeZh94AAAAPFBMVEVHcEz///////////////////////////////////////////////////////96enp6enr///+6urp6enrpNowFAAAAEXRSTlMA3WYR7swid0S7M4iZVaoPA4cPtgEAAAYzSURBVHja7ZzplqsoFIVxBBzS7b3v/65dEUSGfTRD9bKGfX4lZHuGTwTEFZWC9uddU7/XyI7syI7syI7svhC7v0/Yk5k9553syI7sfju7orVQwePIjuzIjuzIjuzIjuzIjuzIjuzIjvezP5sd9z7Jjuy+NLsnvfz9VHt6uCQ7siM7siM7siM7siM7siM7sruC3WenTHZkR3Zk9/vY/XwjO7L7Wez+x/Hps8dPsiM7siM7siM7siM7siM7siM7siM7siM7suPWGY322+0P7fUHZ6RDdmT3vdgRHtldwo7wyO4SdoRHdmT3zdgRHtldwo7wyO4SdoRHdmT3vdAR3hvoyO51dIT3Bjqyex0d4b2BjuxeR0d2r6MjvDfQkd3r6AjvDXRk9zo6wnsDHdm9jo7sXkdHeG+gI7t33pVLdGR3ATpFdIR3BTpFdF/lBTPfyb7c23l+FTpFdIR3yZu/iI7wLvnTLNGR3SV/1SY6srvkBQFER3aXvJaC6MjuipehEB3hXfIKHqIjvCvQKaIjvCvQKaIjuwvQ/WR4iuy+LrofC4/v7XvV/v2HDGg0Go1Go9FotE8xo+/Wuy/D+qUJzdpEoj4c07sf68zJZqbH7Xc7c50eVZsmSzcJXXivcXpifoJcqUbbdlkWO5qjUvRyNydpqvvncU1rbV4qd6DeNXcb3Y9taPDqYLbH7cty5ro4qktqSkMX3i1OT8xPkCvd7tJBLiVmt3rpmlhqUIFV8iNy3A6n7LBrcJSN+14SWmBXpCfmJ8inB0uJ2A3rx1RqQYH9dvQo5ra0/Sk7+yA7fzZBaMyuTE/M76Fq5FIidt39k86ON2WB4bdKzi258jE75Bp76xQOjdmV6Yn5QXnjLthO68l9ms7Z6ThNXaYTCuzC4UOidgLT7Zm4dm12O3Gt0qPGNis0De1cukrXjwNOT8wPyn34FaO7enuhlOB2SMaBHbPJC1w7ebtEnTTJTZnQw9J2de668NbYJWSPQ/veZ9PLOtNI+UH5Lfr5Y/bsdC+VEto6EG3LKilw/TItZS81cTGPsLOn7PzU7y4bGLpghzRSflBu47MV1jNH7DTIoN30SYGr776KIySOhz0RmR12DbzV8QIChC7YIY2UH5RbPwgoOam0bUAzk97SigtsXORxKWYW31Nc7PqYHXQN02z3sQiFztlBjZQflI/b3DHV/UPs3IjZNkmzsXGnjDuCVnOcsnPS2bst0UUWt39YfeIaphmVikLn7KBGyg/K53iGH3vgYivFdwCvTcc7P4fZpMCb7wauPzRwDdBquDbQJ64hu2jaQ6FzdlAj5YflXaK9NWIpaVubsvMn3UQFNtsEf4u6fua40uqUHXB9xg6GzthhjZQfljcdWJqfswsJ+ZJ874gKrLdx0Q3iN7z2rOZTdqXrM3YwdMYOa6T8BHkzlkvzQ3bpknErye6XtNnv9ebtlPmOGg8Gfjk7n7ErXWN2t3AoDJ2xwxopP8mlanSXdagjdpVfSdUpO7MkK1k/MKx7MG3OyFc7t2HakedZ5Bqzq8I3GDpjhzVSfpLLddFcT1W+DhVuHo3vtl22NWTTAue8909HV9khu9w1ZucWT/dRHIdO2QkaKT/JZdi0s9ldOGQ3hnvgbGvIpAVOxYZEmZs5PFmia8zuFgYiHDplJ2ik/AR5P28rE38xHrKLhsN8a8gmBbbFdsJQOK4fZJe5huzqfcTBoVN2gkbKD8n1/VKdkruU9pDdHG2+DGmBJi7Q4M2cxHF0C3rCzpyxa/Q+0xlpHyliZw73wor8oLyLh/0+9Hp9cpLHbAQzKu4dZlNsq6M5zMzOybQOurc2n5zCYvzDZNfFpWBtF3ceIXTCTtII+UG57+njR8ymrg5Lidn1S7pdZZKTabZJL9zltZsc7C1Wx3ufpeuDvc9ayaETdpJGyA/Lu+MdVeF5hR87p2xryC7JHt+++xOWXmBPe3iEXeT6gF0d5lsQOmYnanB+grzPRsG2eYhdHxYEutwsNFknV/uqply3nz3rKVyL7PyDKil0zE7U4PwkeW+Tu4r+oedkWz/QaMfu/q1KdrL9Yvyjm2fVTrNSj7HbXUN2rR2HeIkMQsfsRA3OT3ZZd8UjTlgKDVlvwFPwzP4Dc+XBZ7I6fcYAAAAASUVORK5CYII=',
  },
  {
    name: 'BTDigg',
    buildUrl: (i) => `https://btdig.com/search?q=${buildUrlTemplates.torrentsDefault(i)} 1080p x265`,
    category: watchNowCategories.torrentAggregator,
    bgColor: '#0e2130',
    logo: 'data:image/png;base64,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',
  },
  {
    name: 'Stremio',
    buildUrl: (i) => `https://web.stremio.com/#/detail/${i.type === 'movies' ? 'movie' : 'series'}/${i.ids.imdb}/${i.ids.imdb}${i.type === 'movies' ? '' : `%3A${i.season !== undefined ? i.season : '1'}%3A${i.episode ? i.episode : '1'}`}`,
    category: watchNowCategories.streamingSiteDirectLink,
    bgColor: '#19163a',
    logo: 'https://web.stremio.com/images/stremio_symbol.png',
  },
  {
    name: 'AnimeKAI',
    buildUrl: (i) => `https://animekai.to/browser?keyword=${i.title}`,
    includeIf: (i) => i.genres.includes('anime'),
    category: watchNowCategories.streamingSiteSearchLink,
    bgColor: '#0d1116',
    logo: 'https://animekai.to/assets/uploads/37585a39fe8c8d8fafaa2c7bfbf5374ecac859ea6a0886b7dc.png',
  },
  {
    name: 'P-Stream',
    buildUrl: (i) => `https://iframe.pstream.mov/embed/tmdb-${i.type === 'movies' ? `movie-${i.ids.tmdb}` : `tv-${i.ids.tmdb}/${i.season !== undefined ? i.season : '1'}/${i.episode ? i.episode : '1'}`}`,
    category: watchNowCategories.streamingSiteDirectLink,
    bgColor: '#080914',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAegAAABiCAMAAACs0rA0AAAACXBIWXMAABJ0AAASdAHeZh94AAAA9lBMVEVHcEyCiP7///+Zmf////+CiP6Ah/////////////////////////+AiP+DiP6Cif6Dif6EhP97hP+Cif7///+Chv/////+/v7+/v7////9/f37+/v+/v7+/v77+/v39/f////8/Pz8/Pz8/PyBhf/8/Pz+/v6Cif79/f34+Pj////////////+/v74+Pj8/Pz////8/Pz////o6Ojb29v5+fno6Oj6+vr6+vre3t7w8PDm5ub6+vrh4eHm5ub39/f4+Pj8/Pzb29v5+fnMzMzq6urx8fH9/f3v7+/39/f///+CiP7+/v77+/v5+fn6+vr8/Pz9/f1W9MBnAAAASnRSTlMA+voFH9skJNsF4D7BPsHg4B8fxjk5xvrBvPo5xuA+H0PG+sFD4Nu84CQa9afl4OUpVwr64NtD2+D6Q+Bd+j7G+l3G+gU++tvgXaskFRQAAAxZSURBVHja7Z1pY9y2EYYtenWQe8iSZa2s23J81XWSNmlz9MzZNl4nzf//M+GBY2YwIAEQjHa5wDdzIZDmgwEGMy/ABw+ilYdHe7AcPXyQypiK4jtf7MKymCfio2Ks+B7uvIdl5xAST7Q3GXLNmPA1S028op1gbyLmCnInY0y7hJ1YbxjnJwsPyAD24kkivVGcH/tjblg/TqQ3qBwvAjmXpBfH6f1tTNnbfR9cdvfS+9sGi06gN8wX2931croT6A2OlOzNQ1yyBHoDcc8fJdBprk6gt9ukE+gtMekEektMOoHeJIdb5Sb8TXqtQOeT/bJM8oTVZFynJlVuwt+k/UE3NLjSh1Dd6nR2UJbZNNFGlHX6WecmvE3aH/Tk6YGlVITCAOWTmnGR/VSWrGjaSqyFyABEwlRuwtuk/UHvH/xkKRWh2dSfT4W5YYzaCmlqXJgZkcGjeaBJxwTdAPLmk5+cUcyiqbOTfIuNec6JDLRJi9x0LRiCFcEF+Fts0DVqLz75yenS0tTylLQk/YOxm3ptzHzuQpl0ozbZeTzH0W9xofxt53ABfosPukR96kG65Jw5tyT9g6eTLTRmqiCoe0Pjh+sZW7hr1W+L+RH4bQjQPqRbOZctzSbcvQ/2t9GYiUnXXUKsrJUkQRv8kVx0N78NAtqddH5ymbW2hJGOHnSFuSPdzIqCTND0t16g64VQU4g7lV26kZ7Mlu09Bll0Pi1GDdoBM88SDN1GN4gxdBe3KlhSroMR6+XMZRpV5HC30S0V0xx1i2zEoN0wsyYN1lq0G0jvvBdo8L5LfxgvhjEiq0FnwMWe6l4jWrJM0WME7YqZY3n00SObsFcphGOBbuIewLHKXEwatHUOBnsVQSG9ZcSgfaT52KRpDynXVyr3Uf4mF14RQRMX2gEGGLmXlxc5DZa9LcgyarSgARA/k+aWYmL9vCeW0+8HAI3mXIexG4zcV9e5ERf9I4mx5dOrUYL2GLWpSR+/4pZiakMl+C0uaOSSd4/doPZLE13+h9zmoo8KdMCGKkXNXdIfGfTk7Nxj7FZNre6e3/jceUSgPUft4NRGZND59VUQ6E/+9OfYoOu4uCUo7qxwEMF1x9h6VZup2vYkgfsj/bOVkUF3/Bpu0dXLur0yF/Di/Sk1hP53neFmUmlVVa1waEGoK/LZcZJhEbckVVUj7M2CzDnMpNcDdEdl8Q6LpRlbEX65UkM0/85PRPyGptJkS1lX/hxV5LPj8p71HWrpRFUbVW0EFeJJzJuFmXOYSa8L6FYfvXylRdYaC1ct1e3AZR70CRWNrvy5U0V5z/IOWDqRFWf1WtEQVJAMu9d2Z+lJi57hbdLrAjo7bdErtORRKOjmrWvOcFLgFQ6mvoFTvDAV9ar+04vnuP7yWUk6p1dJuMCHs14bi7He26TvFfTN87sVeI1W1B6gywuTp+D9rl6oBbpV4UD0DTbFS4UJVpT3XL345tk5qXl+dpNfGFdlF/DnrKNd8s+USTuusGJ73VMfrzu/frEC78CqQvIB/Z9PYaIEPEVL5js7BWG5FsULTtUo0HfvTKLF9Zuzc66Jsgv4roxKcwbxa2HCyqQd24m+jl76xEBhUkPMg5wfTKq1gf7/f/+HecqnyC9aMt/ZM0265WbYlWhNzC//9feitQkPGeejj9ChQsKEpUk7NhQ5BHr9GnTd7qxGPi0Y8afBujHG1Qdp/qtfVlbQP36ScT2hHEiXNCMKBmhlZxi0US8DcywBXddVVVffvcuYy9o79DBokpYUoD1NOi7oGzBcGdFr3qSXjGjYYF0tlw6+/OyDqPLzVx+T5ZV+qA8rVrkAnqy5AcyGIlPVna8eYEg90H0RaFFXV13xl9WLcQ5e0gOFlAX7mXTc7BUw0MxNecBKicxlaxV3+PpvCvTnfyUBEzqMqoW2WEaDJyv9e/FXlXt+bj6u6Hx6PYXceP1/hvdcikVDPrkt0OQvL4MWmr7ibNE4+wxCLMikm9VXy6p8sHy0k/DA7iIx69s3X6ih+y9vWt01aYq6I+jxGMnZgGd8Bbzzs+It7mqgn1yp/5e+5+pOu+Mw2s+OE+K1eUc6xLEWIMSiTPrJQhz1aj9WMOD4KTeFiZtBtzm5xvq2bc7Aw6ixJgeLAdwBS9KZMSbXGVI8eeiOoh1vfc874MvBaD98CaADNE/vGelgDqrRa2mpBjX38LQIzXzCWXbNmHqf7J48FA22L1tP+QBFB2hGgqpdAaply68Lpk0jQwoMUtXT93x9nXeG+0AHaFrwjHRw/YIdjnlZeMCuWScVqH6f7J48pBxh4o0sMlfQzKSx/9Icef1UK0zmzJJMsz2mUd3RpBtbZLuFzUyZXEk/0PZVpJ6z2OrkpTYZBC7qCENRjqAZ/SkIzNj/MhZoEO5rB82yIyFtvceGC6PZJ16aLgk5IdIBNAwVuoC2s4bUHEFfmQYN3j2YbZqivOSrVu/RHbStV5nVTZMGIW0NythG52KnSBkaNEV3g8ZelCNoG2swDjuCbg/Ag9mGzDntSnR30N1DurxMTbrCrELaGJS7ll8V1I1CDrbo3E2JfV530IzvjhzXKKCdd/8QV/K2iA+aBE2gTtcxogJ33NHvaMBuFHS2b+tbq0Id1kVRN2gmR8gGKH4X0EBhAp3NiKCR0dEImFPoTFnq8Sv5HQ3FGjQQMnK3n3hgBqp9QdsDLwODJtu8kMKEffb+oNHYTWE4gabJSnjYvm4g7LBu+4THpp66l1ft4bKMCVAMAhoteq0rvqigoUkTGG5ztP4rQPUx2hcdbNCWgIlVK9kZMOnKajEvNhy04Ytxnc+iMBkANAfDDHW6jN3A/pv0NdA1BJ6+76UhCS3cTWKANlZXTOezh+qigwYmrULafmdyM6CbpTdYeIcZ9IaD7k615CeXSzMRNogzBk1ahbT99L8s6GqqPtzp+zmNjQbdnWvJLwDnRqM72PIKmnRDrJMzQgis1e66BX8gZwNB26KSrBQCKhS06n6IgIkpI+jmjAdlba520IEDd2TQpavGOmb6Jjp9GA66LdZtVTfijPhQoJVJ1yHteSdn7GbpsdsKOvw7SDFBVxIh7lQykD/WgoBw0B6TtE5oFrd8gC8yaGXSVUj70IEzWX53gO7xZbOIoGshESfdB1KyGJExKDDpmKQ96MUB7XPWIzcht4Pu8wW7iKAbnqZqCCq8YsS6YYOMSeeT1iF6YNDuul8mOtIButeXCuOBVuoOjBqFQKNkr6yaMRkemTHpc5x7nBZDgXY2aU3NFXS/L1JGA631WkjOh/JXmX8+mk+BIhXoJCc5FE2fxcHLQGOBdjVpHTtznKN7fnk0GugbtGeFO2UMD7RAWd/smQQee+dDgT+GOl7ZqxRpxm0jEdHooN1Meufw1TFTv2V51fcLs9FA779ceWWUiDa7yi7NTEO0PBQ5uk4q81WvkqRBbEWee0YC3/FBu5g03GbH5bxM0L2/JDyQRTscKUryZuXrV5qy7ofixg9mpwyyfFb3GB90t0nDbXbsMtoAjTfm3fcc/bzIfI6OZba/Sf1P90PhzVfWjZLGbjBZfv15NRhozqS1UqzKMYMz4nDwzAKaqFXu2+tGCoPuI4I5CGImdXio/OLy3EHPyG+mzIqP//HLYKA5maA4X52oRowgKZ+96m/O8SNjVqNetunw6Yjr8lD5hTX9CPSM7B6hcr7+57f/Hg60YdLqfHWsAzOD4TLpBQViQGO4LqDtOX72gxrmlrxMnCLp9FC2m5FlvEm66nPf//B6ONCGSVsyEQZn6XTrv4+FOXr2ilPtWD+RQ0YATcjxofjv8dCdmyfsETNyTB8ENDVpy2YbI+khO4QAjafzngWIwOJ82kKeCQbPhLKfBDedccc5OT8UOBBKfWFrklv7HrhLvUcbtq/viW9puW6rzpo0B5o7rIroUtB0HoFLjE/XmW06nfIGjoqD9TweCp8Tx9eXN0F3oacI6nuSSD1/3VadNWlymsUDy9lzVNcdj/KQxe/cxl6dzOHkx9/7O5nYpMlMa/twTrCoIJV7K9TPAqdu2/Y89xAVpHKPpI0lljx12ypISAa9kcX7A7LJoMcxePfaS5nKeEgng94S0smgt4N0MujtIN1bV5DKPZN220aZOG88aafPbCTOWzJ8J0dsO4bv5IiNZvhuRZ0G7lGhtkW44yjCUlkb1JZzTGIIPFNZP7PGdg2Pl0plVGbdSH5liaoVSmXtYKuSKKeSylqW3wBgM1UlGFtAjQAAAABJRU5ErkJggg==',
  },
  {
    name: 'Cineby',
    buildUrl: (i) => `https://www.cineby.ru${buildUrlTemplates.streamingDirectPathDefault(i)}?play=true`,
    category: watchNowCategories.streamingSiteDirectLink,
    bgColor: '#520000',
    logo: GM_getResourceURL('cineby'),
  },
  {
    name: 'Hexa Watch',
    buildUrl: (i) => `https://hexa.watch/watch${buildUrlTemplates.streamingDirectPathDefault(i)}`,
    category: watchNowCategories.streamingSiteDirectLink,
    bgColor: '#111317',
    logo: GM_getResourceURL('hexa'),
  },
  {
    name: 'Fmovies+',
    buildUrl: (i) => `https://www.fmovies.gd/watch${buildUrlTemplates.streamingDirectPathDefault(i)}`,
    category: watchNowCategories.streamingSiteDirectLink,
    bgColor: '#111a1e',
    textColor: '#0ea6c4',
  },
  {
    name: 'Bitcine',
    buildUrl: (i) => `https://www.bitcine.app${buildUrlTemplates.streamingDirectPathDefault(i)}?play=true`,
    category: watchNowCategories.streamingSiteDirectLink,
    bgColor: '#1f0a37',
    logo: GM_getResourceURL('bitcine'),
  },
  {
    name: 'SceneNZBs',
    buildUrl: (i) => `https://scenenzbs.com/search/${buildUrlTemplates.torrentsDefault(i)} 1080p 265`,
    category: watchNowCategories.usenetIndexer,
    bgColor: '#212529',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAACXCAMAAADUFsyUAAAACXBIWXMAAC4jAAAuIwF4pT92AAADAFBMVEVHcEzNJRfkMx/WHhbKHRPSKBjkMR/WQjndRjvbJRndLhziIhnkLB3////kMR/lNyDkKhz////lNB+QEAPlOSHkIRjlOCHfGRbhHBfkIRnlPyTlQiXlQSX////lPSOoDwjjFRW6DQzlPSPlOSLlPSPlNyC0DgrkHhj////lPiPlPCPkMh7lNyH////////lQSXlOSH////////lQyb////////////////lPCPlQSXkHBfkLh3lQiXkKRvlMh7////lOCHlPSP///+5DgvlRCanDwjfEBTkJRrkKBv////lQCW7DQzkHhjlMx+eDwa3Dgu2DguxDgqhDwflLh3lQCXlPyT///////////////+1DguzDgqjDwfgFxbkJhqbDwXhHBfhExWhEAfkFBXlQSXlMR7kLx3lLx7kJxr////kIRj///////+6DQy8DQyVEASvDgm0DgvgDRP///+jDwfjERXhCBPkLRziFBXjEBTkJxr///////////////+xDgq+DQ3BDA3kHBezDgrlMh7kIxnlQCTkHRf///////++DQzKCw/ADQ27DQzZCBGXEATMCw/jCRPDDQ3kGxfjDRS1DgueDwbbCBLhEhWoDwjlMh7lPST////DDA24DQupDwmeDwacEAXjCRPkMR7///+YEATRChDUCRCmDwjcDBPkGRbkJxr///////////+MEAKPEAPZCBHUCRDSChDkHxiKEAGMEALeBxL////lNSDjChTlPSTlNyDkHxjkJBnlQCTkMx/kOCHkMR7lPCPkExXkKxzkLh3bCBLiBhPYCRLjBhPQCxDjEBXTChHSChDfBxPIDA/kKRvkIRnFDA7lQiXCDQ7lOyK9Dg3jGRfVChHjFhXkGxfkJxvkJRrjBxPkHRflRSe/DQ3kLRzcBxLjDRS5DgzXCRGyDwq2DgvlOiKsDwmmDwjKDA/GDA7MCw/dBxLLCw/aCBLBDQ20DgupDwjJDA+8DgycEAWhEAfOCxDEDQ6vDwq6Dgy3DguVEASLEAIi4p0RAAAAuHRSTlMAAxANBwohAQIECRcbKRSaeO50/idKLC46aPT67PpTF9omPEFL+2LFDLM0+VsFQtr34fPnnsgROKu8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',
  },
];

const customExternalLinks = [
  {
    name: 'Reddit',
    buildUrl: (i) => `https://google.com/search?q=site:reddit.com discussion ${encodeURIComponent(i.title)}${i.type === 'movies' && i.year ? ` ${i.year}` : ''}${i.season !== undefined ? ` season ${i.season}${i.episode ? ` episode ${i.episode}` : ''}` : ''}`,
    includeIf: (i) => i.type !== 'people',
  },
  {
    name: 'LBXD',
    buildUrl: (i) => `https://letterboxd.com/search/films/tmdb:${i.ids.tmdb}/`,
    includeIf: (i) => i.type === 'movies',
  },
  {
    name: 'Fandom',
    buildUrl: (i) => `https://${i.title.toLowerCase().replaceAll(/[^a-z0-9]/g, '')}.fandom.com/wiki/`,
    includeIf: (i) => i.type !== 'people',
  },
  {
    name: 'Spotify',
    buildUrl: (i) => `https://open.spotify.com/search/${i.title} Soundtrack`,
    includeIf: (i) => i.type !== 'people',
  },
  {
    name: 'YouGlish',
    buildUrl: (i) => `https://youglish.com/pronounce/${i.name.replaceAll(' ', '_')}/english`,
    includeIf: (i) => i.type === 'people',
  },
  {
    name: 'Forvo',
    buildUrl: (i) => `https://forvo.com/search/${i.name}/`,
    includeIf: (i) => i.type === 'people',
  },
  {
    name: 'Bacon°',
    buildUrl: (i) => `https://oracleofbacon.org/graph.php?who=${i.name.replaceAll(' ', '+')}`,
    includeIf: (i) => i.type === 'people',
  },
  {
    name: 'AZN',
    buildUrl: (i) => `https://aznude.com/${i.title ? `search.html?q=${encodeURIComponent(i.title)}` : `view/celeb/${i.name.toLowerCase()[0]}/${i.name.toLowerCase().replaceAll(/[^a-z]/g, '')}.html`}`,
    includeIf: (i) => i.type !== 'people' || /female|non_binary/.test(i.gender) && i.birthday && Date.now() - new Date(i.birthday) > 18 * 365.25 * 24 * 60 * 60 * 1000,
  },
  {
    name: 'R34',
    buildUrl: (i) => `https://rule34.xxx/index.php?page=post&s=list&tags=sort:score ${(i.title ?? i.name).toLowerCase().replaceAll(/[^a-z0-9-:; ]/g, '').replaceAll(' ', '_')}`,
    includeIf: (i) => i.type !== 'people' || /female|non_binary/.test(i.gender) && i.birthday && Date.now() - new Date(i.birthday) > 18 * 365.25 * 24 * 60 * 60 * 1000,
  },
];

///////////////////////////////////////////////////////////////////////////////////////////////

let $, trakt;
const itemDataCache = unsafeWindow.userscriptItemDataCache = {};


addStyles();

document.addEventListener('turbo:load', async () => {
  $ ??= unsafeWindow.jQuery;
  trakt ??= unsafeWindow.userscriptTraktAPIModule?.isFulfilled ? await unsafeWindow.userscriptTraktAPIModule : null;
  if (!$) return;

  const itemUrl = $('.notable-summary').attr('data-url') || $('.sidebar').attr('data-url'),
        itemData = /^\/(movies|shows|seasons|episodes|people)/.test(itemUrl) ? await getItemData(itemUrl) : undefined;

  if (customExternalLinks && itemData) {
    addExternalLinksToSidebar(itemData);
    addExternalLinksToAdditionalStats(itemData);
  }

  if (customWatchNowLinks) {
    if (itemData && itemData.type !== 'people') {
      addWatchNowLinksToSidebar(itemData);
      addWatchNowLinksToActionButtons(itemData);
    }

    const $searchResults = $('#header-search-autocomplete-results');
    if ($searchResults.length) {
      $(document).off('ajaxSuccess.userscript83278').on('ajaxSuccess.userscript83278', (_evt, _xhr, opt) => {
        if (/^\/search\/autocomplete(?!\/(people|lists|users))/.test(opt.url)) addWatchNowLinksToSearchResults($searchResults);
      });
    }

    const $watchNowContent = $('#watch-now-content');
    if ($watchNowContent.length) {
      if ($watchNowContent.has('.streaming-links').length) addWatchNowLinksToModal($watchNowContent);

      $(document).off('ajaxSuccess.userscript79689').on('ajaxSuccess.userscript79689', (_evt, _xhr, opt) => {
        if (opt.url.includes('/streaming_links?country=')) addWatchNowLinksToModal($watchNowContent);
      });
    }
  }
}, { capture: true });

///////////////////////////////////////////////////////////////////////////////////////////////

const newExternalLinkElem = (l, itemData) =>
  `<a target="_blank" id="" href="${l.buildUrl ? l.buildUrl(itemData) : '#'}"` +
  `${l.evalOnClick ? ` onclick="${l.evalOnClick(itemData)}; return $(this).attr('href') !== '#';"` : ''} data-original-title="" title="">${l.name}</a>`;

function addExternalLinksToSidebar(itemData) {
  $('#info-wrapper .sidebar .external > li').prepend(
    customExternalLinks
      .filter((l) => l.includeIf ? l.includeIf(itemData) : true)
      .map((l) => newExternalLinkElem(l, itemData))
      .join('')
  );
}

function addExternalLinksToAdditionalStats(itemData) {
  $('.additional-stats.with-external-links label:contains("Links")').after(
    customExternalLinks
      .filter((l) => l.includeIf ? l.includeIf(itemData) : true)
      .map((l) => newExternalLinkElem(l, itemData) + ', ')
      .join('')
  );
}

///////////////////////////////////////////////////////////////////////////////////////////////

const newWatchNowLinkElem = (l, itemData) =>
  `<a class="${/ (4k|uhd)/i.test(l.buildUrl) ? 'has-uhd' : ''}" target="_blank" rel="nofollow" data-source="custom_links_userscript" data-country="" ` + // no link attr to prevent href override
  `href="${l.buildUrl ? l.buildUrl(itemData) : '#'}"${l.evalOnClick ? ` onclick="${l.evalOnClick(itemData)}; return $(this).attr('href') !== '#';"` : ''} data-original-title="" title="">` +
    `<div class="icon btn-custom" data-country="" style="${l.bgColor ? `--btn-custom-bg-color: ${l.bgColor};` : ''}">` +
      (l.logo ? `<img class="lazy" data-original="" src="${l.logo}" alt="${l.name}">` : `<div class="text" style="${l.textColor ? `--btn-custom-text-color: ${l.textColor};` : ''}">${l.name?.replace(' ', '<br>')}</div>`) +
    `</div>` +
  `</a>`;

function addWatchNowLinksToSidebar(itemData) {
  const $sidebar = $('#info-wrapper .sidebar');
  let linkAdditions = DEFAULT_WNLINK_ADDITIONS;

  if ($sidebar.has('.btn-watch-now').length && !$sidebar.has('.streaming-links').length) {
    $sidebar.find('.btn-watch-now').before(
      `<div class="streaming-links">` +
        `<div class="sources"></div>` +
      `</div>`
    );
    linkAdditions = 2;
  }

  $sidebar
    .find('.streaming-links .sources').prepend(
      customWatchNowLinks
        .filter((l) => l.includeIf ? l.includeIf(itemData) : true)
        .slice(0, linkAdditions)
        .map((l) => newWatchNowLinkElem(l, itemData))
        .join('')
    )
    .find('a').slice(2).remove();
}

function addWatchNowLinksToActionButtons(itemData) {
  const $actionButtons = $('#overview .action-buttons');
  let linkAdditions = DEFAULT_WNLINK_ADDITIONS;

  if ($actionButtons.length && !$actionButtons.has('.btn-watch-now').length) {
    const $sidebarBtnWatchNow = $('#info-wrapper .sidebar .btn-watch-now'),
          dataSourceCounts = $sidebarBtnWatchNow.attr('data-source-counts'),
          itemUrl = $sidebarBtnWatchNow.attr('data-url');
    if (!dataSourceCounts || !itemUrl) return;

    $actionButtons.prepend(
      `<div class="streaming-links">` +
        `<div class="sources"></div>` +
      `</div>` +
      `<a class="btn btn-block btn-summary btn-watch-now visible-xs selected" data-source-counts="${dataSourceCounts}" data-target="#watch-now-modal" data-toggle="modal" data-url="${itemUrl}" href="#">` +
        `<i class="fa fa-fw fa-solid fa-play"></i>` +
        `<div class="text">` +
          `<div class="main-info">Watch Now</div>` +
          `<div class="under-info">0 streaming services</div>` +
        `</div>` +
      `</a>`
    );
    linkAdditions = 2;
  }

  $actionButtons
    .find('.sources').prepend(
      customWatchNowLinks
        .filter((l) => l.includeIf ? l.includeIf(itemData) : true)
        .slice(0, linkAdditions)
        .map((l) => $(newWatchNowLinkElem(l, itemData)).removeAttr('rel link dataSource'))
    )
    .find('a').slice(2).remove();
}

async function addWatchNowLinksToSearchResults($searchResults) {
  $searchResults.find('> .search-result').each(async function() {
    const itemData = await getItemData($(this).attr('data-url'));
    let linkAdditions = DEFAULT_WNLINK_ADDITIONS;

    if (!$(this).has('.streaming-links').length) {
      $(this).append(
        `<div class="streaming-links">` +
          `<div class="sources"></div>` +
        `</div>`
      );
      linkAdditions = 2;
    }

    $(this)
      .find('.streaming-links .sources').prepend(
        customWatchNowLinks
          .filter((l) => l.includeIf ? l.includeIf(itemData) : true)
          .slice(0, linkAdditions)
          .map((l) => $(newWatchNowLinkElem(l, itemData))
            .removeAttr('data-original-title title')
            .on('click', (evt) => evt.stopPropagation()) // don't trigger default click handler on .search-result
          )
      )
      .find('a').slice(2).remove();
  });
}

async function addWatchNowLinksToModal($watchNowContent) {
  const itemData = await getItemData($watchNowContent.attr('data-url'));

  $watchNowContent
    .find('> .streaming-links').prepend(
      `<div class="title">Custom Links</div>` +
      `<div class="section"></div>` +
      ($watchNowContent.has('.no-links').length ? `<div class="title"></div>` : '')
    )
    .find('.section').first().append(
      customWatchNowLinks
        .filter((l) => l.includeIf ? l.includeIf(itemData) : true)
        .map((l) => $(newWatchNowLinkElem(l, itemData)).append(`<div class="price">${l.name}${l.category ? `<br><i>(${l.category})</i>` : ''}</div>`))
    );
}

///////////////////////////////////////////////////////////////////////////////////////////////

async function getItemData(itemUrl) {
  const fetchFromApi = async () => {
    let pathSplit = itemUrl.split('/').filter(Boolean),
        id = pathSplit[1]; // is trakt-id for seasons + eps and slug for shows + movs + people (can be numeric though e.g. /shows/1883 which gets interpreted as trakt-id by api)

    if (!isNaN(id)) {
      const resp = await fetch(itemUrl);
      if (!resp.ok) throw new Error(`getItemData: Fetching ${resp.url} failed with status: ${resp.status}`);

      const replaceWithShowSlug = /seasons|episodes/.test(pathSplit[0]); // use show data for seasons + eps
      if (replaceWithShowSlug) {
        pathSplit = new URL(resp.url).pathname.split('/').filter(Boolean);
        id = pathSplit[1];
      }

      const convertNumericSlugToTraktId = !isNaN(pathSplit[1]);
      if (convertNumericSlugToTraktId) {
        const itemDoc = new DOMParser().parseFromString(await resp.text(), 'text/html');
        id = $(itemDoc).find('.summary-user-rating').attr(`data-${pathSplit[0].slice(0, -1)}-id`);
      }
    }

    return {
      itemUrl,
      type: pathSplit[0],
      ...(await trakt[pathSplit[0]].summary({ id, extended: 'full' })),
      ...(pathSplit[3] && { season: +pathSplit[3] }),
      ...(pathSplit[5] && { episode: +pathSplit[5] }),
    }
  };


  const scrapeFromSummaryPage = async () => {
    let itemDoc, itemDoc2;

    const resp = await fetch(itemUrl);
    if (!resp.ok) throw new Error(`getItemData: Fetching ${resp.url} failed with status: ${resp.status}`);
    itemDoc = new DOMParser().parseFromString(await resp.text(), 'text/html');

    if (resp.url.includes('/seasons/')) {
      const resp2 = await fetch(resp.url.split('/seasons/')[0]);
      if (!resp2.ok) throw new Error(`getItemData: Fetching ${resp2.url} failed with status: ${resp2.status}`);
      itemDoc2 = new DOMParser().parseFromString(await resp2.text(), 'text/html');
    }

    const type = itemUrl.split('/').filter(Boolean)[0],
          $additionalStatsLi = $(itemDoc).find('.additional-stats > li'),
          $additionalStatsLi2 = itemDoc2 ? $(itemDoc2).find('.additional-stats > li') : undefined,
          $notableSummary = $(itemDoc).find('.notable-summary'),
          filterStatsElemsByLabel = (labelText, $statsElems = $additionalStatsLi) => $statsElems.filter((_, e) => $(e).find('label').text().toLowerCase() === labelText);

    const itemData = {
      itemUrl,
      type,
      ids: {
        trakt: +($notableSummary.attr('data-movie-id') ?? $notableSummary.attr('data-show-id') ?? $notableSummary.attr('data-person-id')),
        imdb: $(itemDoc2 ?? itemDoc).find('#external-link-imdb').attr('href')?.match(/(?:tt|nm)\d+/)?.[0], // tt = 'title type', nm = 'name'
        tmdb: +$(itemDoc).find('#external-link-tmdb').attr('href')?.match(/\d+/)?.[0] || undefined,
      },
      ...(type !== 'people' && { title: $(itemDoc).find(':is(body > [itemtype$="Movie"], body > [itemtype$="TVSeries"], body > [itemtype] > [itemtype$="TVSeries"]) > meta[itemprop="name"]')
                                                  .attr('content')?.match(/(.+?)(?: \(\d{4}\))?$/)?.[1] }),
      ...(type !== 'people' && { original_title: filterStatsElemsByLabel('original title', $additionalStatsLi2).contents().get(-1)?.textContent }),
      ...(type !== 'people' && { year: +$(itemDoc2 ?? itemDoc).find('#summary-wrapper .mobile-title .year').get(0)?.textContent || undefined }),
      ...(type !== 'people' && { genres: $additionalStatsLi.find('[itemprop="genre"]').map((_, e) => $(e).text().toLowerCase()).get() }),
      ...(/seasons|episodes/.test(type) && { season: +$notableSummary.attr('data-season-number') }),
      ...(type === 'episodes' && { episode: +$notableSummary.attr('data-episode-number') }),
      ...(type === 'people' && { name: $(itemDoc).find('body > [itemtype$="Person"] > meta[itemprop="name"]').attr('content') }),
      ...(type === 'people' && { gender: filterStatsElemsByLabel('gender').contents().get(-1)?.textContent.toLowerCase().replace('-', '_') }),
      ...(type === 'people' && { birthday: filterStatsElemsByLabel('birthday').children().last().attr('data-date') }),
    };
    if (Object.hasOwn(itemData, 'original_title')) itemData.original_title ??= itemData.title;

    return itemData;
  }


  if (!itemDataCache[itemUrl]) itemDataCache[itemUrl] = await (trakt ? fetchFromApi : scrapeFromSummaryPage)();
  return itemDataCache[itemUrl];
}

///////////////////////////////////////////////////////////////////////////////////////////////

async function addStyles() {
  const watchNowCountry = (await GM.cookie.list({ name: 'watchnow_country' }))[0]?.value ?? new Intl.Locale(navigator.language).region.toLowerCase();

  GM_addStyle(`
    .no-watchnow-sources:not([data-url^="/people"]) {
      display: block !important;
    }
    [data-source-counts] > .fa-play::before {
      color: #777 !important;
    }
    [data-source-counts="{}"] > .fa-play::before {
      color: #333 !important;
    }
    [data-source-counts*="${watchNowCountry}"] > .fa-play::before {
      color: #ccc !important;
    }
    [data-source-counts] > .fa-play:hover::before {
      color: #fff !important;
    }

    :root {
      --btn-custom-bg-color: ${DEFAULT_WNLINK_BGCOLOR};
      --btn-custom-text-color: ${DEFAULT_WNLINK_TEXTCOLOR};
    }
    .streaming-links a > .icon.btn-custom {
      display: flex !important;
      justify-content: center !important;
      border-width: 0px !important;
      padding: 4px 6px !important;
      background-color: var(--btn-custom-bg-color) !important;
    }
    .streaming-links a > .icon.btn-custom:hover {
      background-color: color-mix(in oklab, var(--btn-custom-bg-color), black 20%) !important;
    }
    .streaming-links a > .icon.btn-custom > img {
      object-fit: contain !important;
    }
    .streaming-links a > .icon.btn-custom > .text {
      color: var(--btn-custom-text-color) !important;
      font-weight: 1000 !important;
    }


    #watch-now-modal {
      top: 37.5px !important;
    }
    #watch-now-modal #watch-now-content .streaming-links {
      max-height: calc(100vh - 190px) !important;
      overflow: auto !important;
      scrollbar-width: none !important;
    }
  `);
}
})();


gmStorage['x70tru7b'] && (async () => {
'use strict';

let $, compressedCache;
// const token = atob(GM_info.script.icon.split(',')[1]).match(/<!-- (.*?) -->/)[1];


addStyles();

document.addEventListener('turbo:load', () => {
  $ ??= unsafeWindow.jQuery;
  compressedCache ??= unsafeWindow.compressedCache;
  if (!$ || !compressedCache) return; // || !token) return;

  patchUserSettings();

  $(document).off('ajaxSuccess.userscript38793').on('ajaxSuccess.userscript38793', (_evt, _xhr, opt) => {
    if (opt.url.endsWith('/settings.json')) patchUserSettings();

    // if (/\/dashboard\/(on_deck|recently_watched)$/.test(opt.url)) {
    //   $('.feed-icon.csv[href="/vip/csv"]').attr('href', function() {
    //     return $(this).prev().attr('data-path') + '.csv?' + ['slurm=' + token, $(this).prev().attr('data-query')].join('&');
    //   });
    // }
  });

  // $('body:not(.dashboard) .feed-icon.csv').attr('href', location.pathname + '.csv?slurm=' + token + location.search.replace('?', '&'));

  $('body').removeAttr('data-turbo');

  $('.frame-wrapper .sidenav.advanced-filters .buttons')
    .addClass('vip')
    .find('.btn.vip')
    .text('').removeClass('vip').removeAttr('href')
    .addClass('disabled disabled-init').attr('id', 'filter-apply').attr('data-apply-text', 'Apply Filters')
    .before('<a class="btn btn-close-2024" id="filter-close" style="display: inline-block !important; visibility: visible !important;">Close</a>')
    .append('<span class="text">Configure Filters</span><span class="icon fa-solid fa-check"></span>');
}, { capture: true });


function patchUserSettings() {
  const userSettings = compressedCache.get('settings');

  if (userSettings && (!userSettings.user.vip)) { // || userSettings.account.token !== token)) {
    userSettings.user.vip = true;
    // userSettings.account.token = token;
    compressedCache.set('settings', userSettings);
    if (unsafeWindow.userSettings) unsafeWindow.userSettings = userSettings;
  }
}


function addStyles() {
  GM_addStyle(`
    #top-nav .btn-vip,
    .dropdown-menu.for-sortable > li > a.vip-only,
    .alert-vip-required {
      display: none !important;
    }
  `);
}
})();


gmStorage['yl9xlca7'] && (async () => {
'use strict';

let $;
const numFormatCompact = new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 });
numFormatCompact.formatTLC = (n) => numFormatCompact.format(n).toLowerCase();


addStyles();

document.addEventListener('turbo:load', () => {
  if (!location.pathname.startsWith('/shows/') || location.pathname.includes('/episodes/')) return;

  $ ??= unsafeWindow.jQuery;
  if (!$) return;

  const $grid = $('#seasons-episodes-sortable'),
        $summaryUserRating = $('#summary-ratings-wrapper .summary-user-rating'),
        $traktRating = $('#summary-ratings-wrapper .trakt-rating');
  if (!$grid.length || !$summaryUserRating.length || !$traktRating.length) return;
  const avgRatings = unsafeWindow.userscriptAvgSeasonEpisodeRatings = {};
  let items;

  $summaryUserRating[0].mutObs = new MutationObserver(() => { // .summary-user-rating mutations occur frequently and are caused by all sorts of things
    if (!$summaryUserRating.hasClass('popover-on')) {
      updatePersRatingElem($summaryUserRating, avgRatings.personal);
    }
  });

  updatePersRatingElem($summaryUserRating);
  updateGenRatingElem($traktRating);

  const filterSpecials = !location.pathname.endsWith('/seasons/0');
  $grid.on('arrangeComplete', () => {
    if ($grid.data('isotope')) {
      items = $grid.data('isotope').filteredItems.filter((i) => filterSpecials ? i.element.dataset.seasonNumber !== '0' : true);
      avgRatings.personal = calcAvgPersRating(items);
      avgRatings.general = calcAvgGenRating(items);
      updatePersRatingElem($summaryUserRating, avgRatings.personal);
      updateGenRatingElem($traktRating, avgRatings.general);
    }
  });

  $(document).off('ajaxSuccess.userscript32985').on('ajaxSuccess.userscript32985', (_evt, _xhr, opt) => {
    if (items && /\/ratings\/(seasons|episodes)\.json$|\/rate/.test(opt.url)) { // title was (un)rated OR cached personal ratings (and .corner-ratings) were updated
      avgRatings.personal = calcAvgPersRating(items);
      updatePersRatingElem($summaryUserRating, avgRatings.personal);
    }
  });
}, { capture: true });


function calcAvgPersRating(items) {
  const persRatings = items.map((i) => +$(i.element).find('.corner-rating > .text').text()).filter(Boolean);
  return {
    average: persRatings.length ? persRatings.reduce((acc, persRating) => acc + persRating, 0) / persRatings.length : undefined,
    votes: persRatings.length,
  };
}

function calcAvgGenRating(items) {
  const genRatingsVotesSum = items.reduce((acc, i) => acc + i.sortData.votes, 0);
  return {
    average: genRatingsVotesSum ? items.reduce((acc, i) => acc + (i.sortData.percentage * (i.sortData.votes / genRatingsVotesSum)), 0) : undefined,
    votes: genRatingsVotesSum,
  };
}

function updatePersRatingElem($summaryUserRating, avgPersRating) {
  $summaryUserRating[0].mutObs.disconnect();
  $summaryUserRating
    .find('.rating')
    .each(function() {
      const rating = $(this).parent().prev().attr('class').match(/rating-(\d+)/)?.[1];
      if (rating) $(this).html(`${rating}<div class="votes">${unsafeWindow.ratingsText?.[rating] ?? ''}</div>`);
    });
  $summaryUserRating
    .find('.number > .votes')
    .removeClass('alt')
    .text(`avg: ${avgPersRating?.average ? `${avgPersRating.average.toFixed(1)}` : '--'} ` +
          `(${avgPersRating?.votes !== undefined ? numFormatCompact.formatTLC(avgPersRating.votes) : '--'} v.)`);
  $summaryUserRating[0].mutObs.observe($summaryUserRating[0], { subtree: true, childList: true });
}

function updateGenRatingElem($traktRating, avgGenRating) {
  if (!$traktRating.has('.rating .votes').length) {
    $traktRating
      .find('.votes')
      .clone()
      .appendTo($traktRating.find('.rating'))
      .text((_i, text) => `(${text.match(/^.*? v/)?.[0] ?? '0 v'}.)`);
  }
  $traktRating
    .find('.number > .votes')
    .text(`avg: ${avgGenRating?.average ? `${Math.round(avgGenRating.average)}` : '--'}% ` +
          `(${avgGenRating?.votes !== undefined ? numFormatCompact.formatTLC(avgGenRating.votes) : '--'} v.)`);
}


function addStyles() {
  GM_addStyle(`
    #summary-ratings-wrapper .ratings .rating {
      display: flex !important;
      justify-content: space-between;
      align-items: center;
    }
    #summary-ratings-wrapper .ratings .rating .votes {
      margin-left: 7px !important;
      color: #fff !important;
    }
  `);
}
})();