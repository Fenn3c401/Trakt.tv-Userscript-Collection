// ==UserScript==
// @name         Trakt.tv | Average Season And Episode Ratings
// @description  Shows the average general and personal rating of the seasons of a show and the episodes of a season. You can see the averages for all episodes of a show on its /seasons/all page. See README for details.
// @version      1.0.2
// @namespace    https://github.com/Fenn3c401
// @author       Fenn3c401
// @license      GPL-3.0-or-later
// @homepageURL  https://github.com/Fenn3c401/Trakt.tv-Userscript-Collection#readme
// @supportURL   https://github.com/Fenn3c401/Trakt.tv-Userscript-Collection/issues
// @updateURL    https://raw.githubusercontent.com/Fenn3c401/Trakt.tv-Userscript-Collection/main/userscripts/meta/yl9xlca7.meta.js
// @downloadURL  https://raw.githubusercontent.com/Fenn3c401/Trakt.tv-Userscript-Collection/main/userscripts/dist/yl9xlca7.user.js
// @icon         data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDQ4IDQ4Ij4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiB1cmwoI3JhZGlhbC1ncmFkaWVudCk7CiAgICAgIH0KCiAgICAgIC5jbHMtMiB7CiAgICAgICAgZmlsbDogI2ZmZjsKICAgICAgfQogICAgPC9zdHlsZT4KICAgIDxyYWRpYWxHcmFkaWVudCBpZD0icmFkaWFsLWdyYWRpZW50IiBjeD0iNDguNDYiIGN5PSItLjk1IiBmeD0iNDguNDYiIGZ5PSItLjk1IiByPSI2NC44NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM5ZjQyYzYiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuMjciIHN0b3AtY29sb3I9IiNhMDQxYzMiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuNDIiIHN0b3AtY29sb3I9IiNhNDNlYmIiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuNTMiIHN0b3AtY29sb3I9IiNhYTM5YWQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuNjQiIHN0b3AtY29sb3I9IiNiNDMzOWEiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuNzMiIHN0b3AtY29sb3I9IiNjMDJiODEiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuODIiIHN0b3AtY29sb3I9IiNjZjIwNjEiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuOSIgc3RvcC1jb2xvcj0iI2UxMTQzYyIvPgogICAgICA8c3RvcCBvZmZzZXQ9Ii45NyIgc3RvcC1jb2xvcj0iI2Y1MDYxMyIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9InJlZCIvPgogICAgPC9yYWRpYWxHcmFkaWVudD4KICA8L2RlZnM+CiAgPGcgaWQ9Il94MkRfLXByb2R1Y3Rpb24iPgogICAgPGcgaWQ9ImxvZ29tYXJrLnNxdWFyZS5ncmFkaWVudCI+CiAgICAgIDxwYXRoIGlkPSJiYWNrZ3JvdW5kIiBjbGFzcz0iY2xzLTEiIGQ9Ik00OCwxMS4yNnYyNS40N2MwLDYuMjItNS4wNSwxMS4yNy0xMS4yNywxMS4yN0gxMS4yNmMtNi4yMiwwLTExLjI2LTUuMDUtMTEuMjYtMTEuMjdWMTEuMjZDMCw1LjA0LDUuMDQsMCwxMS4yNiwwaDI1LjQ3YzMuMzIsMCw2LjMsMS40Myw4LjM3LDMuNzIuNDcuNTIuODksMS4wOCwxLjI1LDEuNjguMTguMjkuMzQuNTkuNS44OS4zMy42OC42LDEuMzkuNzksMi4xNC4xLjM3LjE4Ljc2LjIzLDEuMTUuMDkuNTQuMTMsMS4xMS4xMywxLjY4WiIvPgogICAgICA8ZyBpZD0iY2hlY2tib3giPgogICAgICAgIDxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTEzLjYyLDE3Ljk3bDcuOTIsNy45MiwxLjQ3LTEuNDctNy45Mi03LjkyLTEuNDcsMS40N1pNMjguMDEsMzIuMzdsMS40Ny0xLjQ2LTIuMTYtMi4xNiwyMC4zMi0yMC4zMmMtLjE5LS43NS0uNDYtMS40Ni0uNzktMi4xNGwtMjIuNDYsMjIuNDYsMy42MiwzLjYyWk0xMi45MiwxOC42N2wtMS40NiwxLjQ2LDE0LjQsMTQuNCwxLjQ2LTEuNDctNC4zMi00LjMxTDQ2LjM1LDUuNGMtLjM2LS42LS43OC0xLjE2LTEuMjUtMS42OGwtMjMuNTYsMjMuNTYtOC42Mi04LjYxWk00Ny44Nyw5LjU4bC0xOS4xNywxOS4xNywxLjQ3LDEuNDYsMTcuODMtMTcuODN2LTEuMTJjMC0uNTctLjA0LTEuMTQtLjEzLTEuNjhaTTI1LjE2LDIyLjI3bC03LjkyLTcuOTItMS40NywxLjQ3LDcuOTIsNy45MiwxLjQ3LTEuNDdaTTQxLjMyLDM1LjEyYzAsMy40Mi0yLjc4LDYuMi02LjIsNi4ySDEyLjg4Yy0zLjQyLDAtNi4yLTIuNzgtNi4yLTYuMlYxMi44OGMwLTMuNDIsMi43OC02LjIxLDYuMi02LjIxaDIwLjc4di0yLjA3SDEyLjg4Yy00LjU2LDAtOC4yOCwzLjcxLTguMjgsOC4yOHYyMi4yNGMwLDQuNTYsMy43MSw4LjI4LDguMjgsOC4yOGgyMi4yNGM0LjU2LDAsOC4yOC0zLjcxLDguMjgtOC4yOHYtMy41MWgtMi4wN3YzLjUxWiIvPjwhLS0gNDVkMjM4NWQzYWFjYmI1OTMyNmEzODYxNDljNWE4NzggLS0+CiAgICAgIDwvZz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPg==
// @match        https://trakt.tv/*
// @run-at       document-start
// @grant        unsafeWindow
// @grant        GM_addStyle
// ==/UserScript==

/* README
> Inspired by Tusky's [Trakt Average Season Rating](https://greasyfork.org/scripts/30728) userscript.

### General
- The general ratings average is weighted by votes, to account for the inaccurate ratings of unreleased seasons/episodes.
- Specials are always excluded, except on the specials season page.
- Only visible (i.e. not hidden by a filter) items are used for the calculation of the averages and changes to those filters trigger a recalculation.
*/


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