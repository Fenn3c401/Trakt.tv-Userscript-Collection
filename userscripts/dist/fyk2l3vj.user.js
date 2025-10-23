// ==UserScript==
// @name         Trakt.tv | Enhanced Title Metadata
// @description  Adds links of filtered search results to the metadata section (studios, networks, genres etc.) on title summary pages. Like the vip feature, only better. Also adds a country flag.
// @version      0.8.3
// @namespace    fyk2l3vj
// @icon         data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDQ4IDQ4Ij4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiB1cmwoI3JhZGlhbC1ncmFkaWVudCk7CiAgICAgIH0KCiAgICAgIC5jbHMtMiB7CiAgICAgICAgZmlsbDogI2ZmZjsKICAgICAgfQogICAgPC9zdHlsZT4KICAgIDxyYWRpYWxHcmFkaWVudCBpZD0icmFkaWFsLWdyYWRpZW50IiBjeD0iNDguNDYiIGN5PSItLjk1IiBmeD0iNDguNDYiIGZ5PSItLjk1IiByPSI2NC44NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM5ZjQyYzYiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuMjciIHN0b3AtY29sb3I9IiNhMDQxYzMiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuNDIiIHN0b3AtY29sb3I9IiNhNDNlYmIiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuNTMiIHN0b3AtY29sb3I9IiNhYTM5YWQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuNjQiIHN0b3AtY29sb3I9IiNiNDMzOWEiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuNzMiIHN0b3AtY29sb3I9IiNjMDJiODEiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuODIiIHN0b3AtY29sb3I9IiNjZjIwNjEiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuOSIgc3RvcC1jb2xvcj0iI2UxMTQzYyIvPgogICAgICA8c3RvcCBvZmZzZXQ9Ii45NyIgc3RvcC1jb2xvcj0iI2Y1MDYxMyIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9InJlZCIvPgogICAgPC9yYWRpYWxHcmFkaWVudD4KICA8L2RlZnM+CiAgPGcgaWQ9Il94MkRfLXByb2R1Y3Rpb24iPgogICAgPGcgaWQ9ImxvZ29tYXJrLnNxdWFyZS5ncmFkaWVudCI+CiAgICAgIDxwYXRoIGlkPSJiYWNrZ3JvdW5kIiBjbGFzcz0iY2xzLTEiIGQ9Ik00OCwxMS4yNnYyNS40N2MwLDYuMjItNS4wNSwxMS4yNy0xMS4yNywxMS4yN0gxMS4yNmMtNi4yMiwwLTExLjI2LTUuMDUtMTEuMjYtMTEuMjdWMTEuMjZDMCw1LjA0LDUuMDQsMCwxMS4yNiwwaDI1LjQ3YzMuMzIsMCw2LjMsMS40Myw4LjM3LDMuNzIuNDcuNTIuODksMS4wOCwxLjI1LDEuNjguMTguMjkuMzQuNTkuNS44OS4zMy42OC42LDEuMzkuNzksMi4xNC4xLjM3LjE4Ljc2LjIzLDEuMTUuMDkuNTQuMTMsMS4xMS4xMywxLjY4WiIvPgogICAgICA8ZyBpZD0iY2hlY2tib3giPgogICAgICAgIDxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTEzLjYyLDE3Ljk3bDcuOTIsNy45MiwxLjQ3LTEuNDctNy45Mi03LjkyLTEuNDcsMS40N1pNMjguMDEsMzIuMzdsMS40Ny0xLjQ2LTIuMTYtMi4xNiwyMC4zMi0yMC4zMmMtLjE5LS43NS0uNDYtMS40Ni0uNzktMi4xNGwtMjIuNDYsMjIuNDYsMy42MiwzLjYyWk0xMi45MiwxOC42N2wtMS40NiwxLjQ2LDE0LjQsMTQuNCwxLjQ2LTEuNDctNC4zMi00LjMxTDQ2LjM1LDUuNGMtLjM2LS42LS43OC0xLjE2LTEuMjUtMS42OGwtMjMuNTYsMjMuNTYtOC42Mi04LjYxWk00Ny44Nyw5LjU4bC0xOS4xNywxOS4xNywxLjQ3LDEuNDYsMTcuODMtMTcuODN2LTEuMTJjMC0uNTctLjA0LTEuMTQtLjEzLTEuNjhaTTI1LjE2LDIyLjI3bC03LjkyLTcuOTItMS40NywxLjQ3LDcuOTIsNy45MiwxLjQ3LTEuNDdaTTQxLjMyLDM1LjEyYzAsMy40Mi0yLjc4LDYuMi02LjIsNi4ySDEyLjg4Yy0zLjQyLDAtNi4yLTIuNzgtNi4yLTYuMlYxMi44OGMwLTMuNDIsMi43OC02LjIxLDYuMi02LjIxaDIwLjc4di0yLjA3SDEyLjg4Yy00LjU2LDAtOC4yOCwzLjcxLTguMjgsOC4yOHYyMi4yNGMwLDQuNTYsMy43MSw4LjI4LDguMjgsOC4yOGgyMi4yNGM0LjU2LDAsOC4yOC0zLjcxLDguMjgtOC4yOHYtMy41MWgtMi4wN3YzLjUxWiIvPjwhLS0gNDVkMjM4NWQzYWFjYmI1OTMyNmEzODYxNDljNWE4NzggLS0+CiAgICAgIDwvZz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPg==
// @match        https://trakt.tv/*
// @run-at       document-start
// @grant        unsafeWindow
// @grant        GM_info
// @grant        GM_addStyle
// @grant        GM_openInTab
// @grant        GM.getValue
// @grant        GM.setValue
// ==/UserScript==

/* README
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
