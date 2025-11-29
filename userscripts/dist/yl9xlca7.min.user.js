// ==UserScript==
// @name         Trakt.tv | Average Season And Episode Ratings
// @description  Shows the average general and personal rating of the seasons of a show and the episodes of a season. You can see the averages for all episodes of a show on its /seasons/all page. See README for details.
// @version      1.0.3
// @namespace    https://github.com/Fenn3c401
// @author       Fenn3c401
// @license      GPL-3.0-or-later
// @homepageURL  https://github.com/Fenn3c401/Trakt.tv-Userscript-Collection#readme
// @supportURL   https://github.com/Fenn3c401/Trakt.tv-Userscript-Collection/issues
// @updateURL    https://raw.githubusercontent.com/Fenn3c401/Trakt.tv-Userscript-Collection/main/userscripts/meta/yl9xlca7.meta.js
// @downloadURL  https://raw.githubusercontent.com/Fenn3c401/Trakt.tv-Userscript-Collection/main/userscripts/dist/yl9xlca7.min.user.js
// @icon         https://trakt.tv/assets/logos/logomark.square.gradient-b644b16c38ff775861b4b1f58c1230f6a097a2466ab33ae00445a505c33fcb91.svg
// @match        https://trakt.tv/*
// @match        https://classic.trakt.tv/*
// @run-at       document-start
// @grant        unsafeWindow
// @grant        GM_addStyle
// ==/UserScript==

/* README
> Based on Tusky's [Trakt Average Season Rating](https://greasyfork.org/scripts/30728) userscript.

### General
- The general ratings average is weighted by votes, to account for the inaccurate ratings of unreleased seasons/episodes.
- Specials are always excluded, except on the specials season page.
- Only visible (i.e. not hidden by a filter) items are used for the calculation of the averages and changes to those filters trigger a recalculation.
*/


"use strict";let $;const numFormatCompact=new Intl.NumberFormat("en",{notation:"compact",maximumFractionDigits:1});numFormatCompact.formatTLC=t=>numFormatCompact.format(t).toLowerCase(),addStyles(),document.addEventListener("turbo:load",()=>{if(!location.pathname.startsWith("/shows/")||location.pathname.includes("/episodes/")||($??=unsafeWindow.jQuery,!$))return;const t=$("#seasons-episodes-sortable"),e=$("#summary-ratings-wrapper .summary-user-rating"),n=$("#summary-ratings-wrapper .trakt-rating");if(!t.length||!e.length||!n.length)return;const a=unsafeWindow.userscriptAvgSeasonEpisodeRatings={};let s;e[0].mutObs=new MutationObserver(()=>{e.hasClass("popover-on")||updatePersRatingElem(e,a.personal)}),updatePersRatingElem(e),updateGenRatingElem(n);const o=!location.pathname.endsWith("/seasons/0");t.on("arrangeComplete",()=>{t.data("isotope")&&(s=t.data("isotope").filteredItems.filter(r=>o?r.element.dataset.seasonNumber!=="0":!0),a.personal=calcAvgPersRating(s),a.general=calcAvgGenRating(s),updatePersRatingElem(e,a.personal),updateGenRatingElem(n,a.general))}),$(document).off("ajaxSuccess.userscript32985").on("ajaxSuccess.userscript32985",(r,u,i)=>{s&&/\/ratings\/(seasons|episodes)\.json$|\/rate/.test(i.url)&&(a.personal=calcAvgPersRating(s),updatePersRatingElem(e,a.personal))})},{capture:!0});function calcAvgPersRating(t){const e=t.map(n=>+$(n.element).find(".corner-rating > .text").text()).filter(Boolean);return{average:e.length?e.reduce((n,a)=>n+a,0)/e.length:void 0,votes:e.length}}function calcAvgGenRating(t){const e=t.reduce((n,a)=>n+a.sortData.votes,0);return{average:e?t.reduce((n,a)=>n+a.sortData.percentage*(a.sortData.votes/e),0):void 0,votes:e}}function updatePersRatingElem(t,e){t[0].mutObs.disconnect(),t.find(".rating").each(function(){const n=$(this).parent().prev().attr("class").match(/rating-(\d+)/)?.[1];n&&$(this).html(`${n}<div class="votes">${unsafeWindow.ratingsText?.[n]??""}</div>`)}),t.find(".number > .votes").removeClass("alt").text(`avg: ${e?.average?`${e.average.toFixed(1)}`:"--"} (${e?.votes!==void 0?numFormatCompact.formatTLC(e.votes):"--"} v.)`),t[0].mutObs.observe(t[0],{subtree:!0,childList:!0})}function updateGenRatingElem(t,e){t.has(".rating .votes").length||t.find(".votes").clone().appendTo(t.find(".rating")).text((n,a)=>`(${a.match(/^.*? v/)?.[0]??"0 v"}.)`),t.find(".number > .votes").text(`avg: ${e?.average?`${Math.round(e.average)}`:"--"}% (${e?.votes!==void 0?numFormatCompact.formatTLC(e.votes):"--"} v.)`)}function addStyles(){GM_addStyle(`
#summary-ratings-wrapper .ratings .rating {
  display: flex !important;
  justify-content: space-between;
  align-items: center;
}
#summary-ratings-wrapper .ratings .rating .votes {
  margin-left: 7px !important;
  color: #fff !important;
}
  `)}