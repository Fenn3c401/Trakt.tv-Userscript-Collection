// ==UserScript==
// @name         Trakt.tv | Bug Fixes and Optimizations
// @description  A large collection of bug fixes and optimizations for trakt.tv, organized into ~30 independent sections, each with a comment detailing which specific issues are being addressed. Also contains some minor feature patches. See README for details.
// @version      0.7.8
// @namespace    https://github.com/Fenn3c401
// @author       Fenn3c401
// @license      GPL-3.0-or-later
// @homepageURL  https://github.com/Fenn3c401/Trakt.tv-Userscript-Collection#readme
// @supportURL   https://github.com/Fenn3c401/Trakt.tv-Userscript-Collection/issues
// @updateURL    https://update.greasyfork.org/scripts/557302.meta.js
// @downloadURL  https://raw.githubusercontent.com/Fenn3c401/Trakt.tv-Userscript-Collection/main/userscripts/dist/brzmp0a9.min.user.js
// @icon         https://trakt.tv/assets/logos/logomark.square.gradient-b644b16c38ff775861b4b1f58c1230f6a097a2466ab33ae00445a505c33fcb91.svg
// @match        https://trakt.tv/*
// @match        https://classic.trakt.tv/*
// @run-at       document-start
// @grant        unsafeWindow
// @grant        GM_addStyle
// @grant        GM_openInTab
// ==/UserScript==

/* README
### General
- Please take a look at [the code](../dist/brzmp0a9.user.js) and glimpse over the comments for each section to get an idea as to what exactly you can expect from this script.
- Notably there are also a handful of feature patches included, all of them too minor to warrant a separate userscript:
  - make the "add to list" buttons on grid pages (e.g. /trending) color-coded:<br>
      [![light blue](https://img.shields.io/badge/%20-%20-008ada?style=flat-square&labelColor=008ada)](#) = is on watchlist,
      [![dark blue](https://img.shields.io/badge/%20-%20-0066a0?style=flat-square&labelColor=0066a0)](#) = is on personal list,
      [![50/50](https://img.shields.io/badge/%20-%20-0066a0?style=flat-square&labelColor=008ada)](#) = is on both
  - change the default sorting on /people pages from "released" to "popularity"
  - grey out usernames of deleted profiles in the comments
  - append `(@<userslug>)` to usernames in comments (Trakt allows users to set a "Display Name", separate from the username/slug. This becomes a problem in comment replies
      which always reference the person/comment they are replying to with an `@<userslug>` prefix, which sometimes turns long reply chains into a game of matching pairs..), currently not supported in FF
  - some custom hotkeys and gestures as displayed below

### Hotkeys/Gestures (Custom and Native)
- ***[CUSTOM]*** `alt + 1/2/3/4/5/6/7`: change header-search-category, 1 for "Shows & Movies", 2 for "Shows", ..., 7 for "Users", also expands header-search if collapsed
- ***[CUSTOM]*** `swipe in from left edge`: display title sidebar on mobile devices
- `meta(win)/ctrl + left click`: open in new tab instead of redirect (applies to header search results + "view watched history" button on title summary pages)
- `/`: expand header-search
- `w`: show filter-by-streaming-services modal
- `t`: show filter-by-terms modal
- `a`: toggle advanced-filters
- `m`: toggle manage-list mode (with item move, delete etc.)
- `r`: toggle reorder-lists mode (change list-rank on /lists page)
- `esc`: collapse header-search, hide popover, hide modal (check-in, watch-now, filter-by-terms)
- `enter`: redirect to selected header-search result, submit (advanced filters selection, date-time-picker input etc.)
- `ctrl + enter`: save note, submit comment
- `arrow-left/right OR p/n OR swipe right/left on fanart`: page navigation (e.g. prev/next episode, prev/next results page)
- `arrow-up/down`: header-search results navigation
*/


"use strict";(e=>document.readyState==="loading"?document.addEventListener("DOMContentLoaded",e):e())(()=>{if(!unsafeWindow.jQuery)return;const e=Object.getOwnPropertyDescriptors(unsafeWindow.jQuery.fn.swipe),t=Object.getOwnPropertyDescriptor(unsafeWindow.jQuery.fn,"swipe"),a=t.value;t.value=function(...r){return this.attr("id")==="summary-wrapper"&&(r[0].excludedElements="#summary-ratings-wrapper .stats"),a.apply(this,r)},Object.defineProperty(unsafeWindow.jQuery.fn,"swipe",t),Object.entries(e).forEach(([r,o])=>!["length","name","prototype"].includes(r)&&Object.defineProperty(unsafeWindow.jQuery.fn.swipe,r,o))}),GM_addStyle(`
.popover .rating-hearts {
  min-width: max-content;
}
`),GM_addStyle(`
.grid-item .actions .list.selected.watchlist .base {
  background: #008ada !important;
}
.grid-item .actions .list.selected.personal .base {
  background: #0066a0 !important;
}
.grid-item .actions .list.selected.watchlist.personal .base {
  background: linear-gradient(90deg, #008ada 50%, #0066a0 50%) !important;
}
`),document.addEventListener("turbo:load",()=>{/^\/people\/[^\/]+$/.test(location.pathname)&&!location.search&&history.replaceState({},document.title,location.pathname+"?sort=popularity,asc")},{capture:!0}),GM_addStyle(`
@supports (color: attr(data-color type(<color>))) {
  .comment-wrapper[data-user-slug] {
    --userslug: attr(data-user-slug);
  }
  .comment-wrapper[data-user-slug] .user-name :is(.username, .type + strong)::after {
    content: " (@" var(--userslug) ")";
  }
  .comment-wrapper[data-user-slug] .user-name {
    max-width: calc(100% - 40px) !important;
  }
  .comment-wrapper[data-user-slug] .user-name > h4 {
    white-space: nowrap;
    overflow-x: clip;
    text-overflow: ellipsis;
  }
}

.comment-wrapper[data-user-slug] .user-name .type + strong {
  color: #aaa !important;
}
`),(e=>document.readyState==="loading"?document.addEventListener("DOMContentLoaded",e):e())(()=>{if(!unsafeWindow.jQuery)return;const e=Object.getOwnPropertyDescriptors(unsafeWindow.jQuery.fn.tooltip),t=Object.getOwnPropertyDescriptor(unsafeWindow.jQuery.fn,"tooltip"),a=t.value;t.value=function(...r){return r[0]?.container&&this.closest(".popover, #ondeck-wrapper, #progress-grid-wrapper").length&&delete r[0].container,a.apply(this,r)},Object.defineProperty(unsafeWindow.jQuery.fn,"tooltip",t),Object.entries(e).forEach(([r,o])=>!["length","name","prototype"].includes(r)&&Object.defineProperty(unsafeWindow.jQuery.fn.tooltip,r,o))}),GM_addStyle(`
@media (width <= 767px) {
  #info-wrapper .sticky-wrapper {
    display: block !important;
  }
  #info-wrapper .sidebar {
    position: fixed;
    top: 0 !important;
    left: 0;
    z-index: 20;
    width: 40%;
    padding: calc(10px + var(--header-height)) 10px 0;
    height: 100%;
    background-color: rgb(29 29 29 / 96%);
    overflow-y: auto;
    transform: translateX(-100%);
    transition: transform 0.3s;
    margin: revert !important;
  }
  #info-wrapper.with-mobile-sidebar .sidebar {
    transform: translateX(0);
  }
}
`),window.addEventListener("turbo:load",()=>{const e=unsafeWindow.jQuery("body.touch-device #info-wrapper:has(.sidebar)");e.swipe({excludedElements:"#summary-ratings-wrapper .stats, #info-wrapper .season-links .links, #actors .posters",swipeRight:(t,a,r,o,n,i)=>i[0].start.x<50&&e.addClass("with-mobile-sidebar"),swipeLeft:(t,a,r,o,n,i)=>e.removeClass("with-mobile-sidebar")})}),window.addEventListener("turbo:load",()=>{document.querySelectorAll("#header-search-type .dropdown-menu li:has(~ .divider) a").forEach((e,t)=>{unsafeWindow.Mousetrap.bind(`alt+${t+1}`,()=>e.click()),unsafeWindow.Mousetrap(document.getElementById("header-search-query")).bind(`alt+${t+1}`,()=>e.click())})}),(e=>document.readyState==="loading"?document.addEventListener("DOMContentLoaded",e):e())(()=>{const e=unsafeWindow.jQuery;e&&(e(document).on("auxclick",".btn-watch .view-all",function(t){t.preventDefault(),GM_openInTab(location.origin+e(this).attr("data-url"),{setParent:!0})}),e(document).on("mousedown mouseup","#header-search-autocomplete-results .selected",function(t){t.which===2&&!e(t.target).closest("a").length&&(t.type==="mousedown"?t.preventDefault():(unsafeWindow.searchModifierKey=!0,e(this).trigger("click")))}))}),document.addEventListener("keydown",e=>{e.ctrlKey&&e.key==="Enter"&&e.target.closest?.("#header-search-query")&&(e.preventDefault(),e.stopPropagation(),e.target.dispatchEvent(new KeyboardEvent("keydown",{key:"Enter",keyCode:13,metaKey:!0,bubbles:!0,cancelable:!0})))},{capture:!0}),(e=>document.readyState==="loading"?document.addEventListener("DOMContentLoaded",e):e())(()=>{const e=unsafeWindow.jQuery;e&&e(document).on("ajaxSuccess",(t,a,r)=>{if(r.url.endsWith("/rate")){const o=new URLSearchParams(r.data),[n,i,s]=["type","trakt_id","stars"].map(d=>o.get(d));unsafeWindow[n+"s"].ratings[i]=s,unsafeWindow.compressedCache.set(`ratings_${n}s`,unsafeWindow[n+"s"].ratings),unsafeWindow.addOverlays()}else if(r.url.endsWith("/rate/remove")){const o=new URLSearchParams(r.data),n=o.get("type");unsafeWindow.compressedCache.set(`ratings_${n}s`,unsafeWindow[n+"s"].ratings),unsafeWindow.addOverlays()}})}),GM_addStyle(`
.personal-list .list-description {
  overflow-wrap: anywhere;
}
`),(e=>document.readyState==="loading"?document.addEventListener("DOMContentLoaded",e):e())(()=>{if(!unsafeWindow.jQuery)return;const e=Object.getOwnPropertyDescriptors(unsafeWindow.jQuery.fn.chosen),t=Object.getOwnPropertyDescriptor(unsafeWindow.jQuery.fn,"chosen"),a=t.value;t.value=function(...r){if(this.attr("id")==="filter-network_ids"&&(r[0].max_shown_results=200),/iP(od|hone)|IEMobile|Windows Phone|BlackBerry|BB10|Android.*Mobile/i.test(unsafeWindow.navigator.userAgent)){Object.defineProperty(unsafeWindow.navigator,"userAgent",{get:()=>"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36",configurable:!0});try{return a.apply(this,r)}finally{delete unsafeWindow.navigator.userAgent}}else return a.apply(this,r)},Object.defineProperty(unsafeWindow.jQuery.fn,"chosen",t),Object.entries(e).forEach(([r,o])=>!["length","name","prototype"].includes(r)&&Object.defineProperty(unsafeWindow.jQuery.fn.chosen,r,o))}),(e=>document.readyState==="loading"?document.addEventListener("DOMContentLoaded",e):e())(()=>{const e=unsafeWindow.jQuery;e&&e(document).on("ajaxSend",(t,a,r)=>{if(/\/lists\/[\d]+\/like/.test(r.url)){const o=new URLSearchParams(r.data).get("trakt_id"),n=e(`[data-list-id="${o}"] > .like .count-number`),i=n.text(),s=r.url.includes("/remove");e(document).one("ajaxSuccess",(d,l,p)=>{r.url===p.url&&n.text(unsafeWindow.numeral(i)[s?"subtract":"add"](1).format("0,0"))})}})}),GM_addStyle(`
#activity .users-wrapper {
  width: 100%;
  padding-bottom: 15px !important;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 10px;
  counter-reset: plusMoreCounter attr(data-count type(<number>));
}
#activity .users-wrapper .plus-more {
  grid-area: 1 / -2 / 2 / -1;
  display: grid;
  place-content: center;
  position: revert !important;
  height: revert !important;
  width: revert !important;
}
#activity .users-wrapper .plus-more .text {
  position: relative !important;
}
@supports (color: attr(data-color type(<color>))) {
  #activity .users-wrapper .plus-more .text {
    display: none;
  }
  #activity .users-wrapper .plus-more::after {
    content: "+" counter(plusMoreCounter) "\\Amore";
    white-space: pre;
    line-height: 1;
    font-weight: var(--headings-font-weight);
    font-family: var(--headings-font-family);
    font-size: 16px;
  }
}
#activity .users-wrapper .row {
  grid-area: 1 / 1 / 2 / -1;
  display: grid;
  grid-template-columns: subgrid;
  row-gap: 10px;
  max-height: revert !important;
  margin: revert !important;
}
#activity .users-wrapper .row::before,
#activity .users-wrapper .row::after {
  content: revert !important;
}
#activity .users-wrapper .row > div {
  counter-increment: plusMoreCounter -1;
  width: revert !important;
  padding: revert !important;
}
#activity .users-wrapper .row > div img {
  aspect-ratio: 1; /* for bg while img is loading */
  margin-bottom: revert !important;
}
@media (width <= 767px) {
  #activity .users-wrapper {
    padding-bottom: 10px !important;
  }
}
@media (width <= 991px) {
  #activity .users-wrapper .row > :nth-child(n + 6) {
    display: none;
  }
}
@media (991px < width <= 1200px) {
  #activity .users-wrapper {
    grid-template-columns: repeat(9, 1fr);
  }
  #activity .users-wrapper .row > :nth-child(n + 9),
  #activity .users-wrapper:not(:has(> .row > :nth-child(9))) .plus-more {
    display: none;
  }
}
@media (width > 1200px) {
  #activity .users-wrapper {
    grid-template-columns: repeat(12, 1fr);
  }
  #activity .users-wrapper .row > :nth-child(n + 12),
  #activity .users-wrapper:not(:has(> .row > :nth-child(12))) .plus-more {
    display: none;
  }
}
#activity .users-wrapper .row:has(+ .plus-more[style*="display: none;"]) > div,
#activity .users-wrapper .row:not(:has(+ .plus-more)) > :nth-child(-n + 12) { /* downsizing with 7-12 items (no btn in that case) */
  display: block;
}


#actors .posters {
  container-type: inline-size;
}
#actors .posters ul {
  width: max-content !important;
  display: flex;
  --gap: 10px;
  gap: var(--gap);
}
#actors .posters ul li {
  width: calc((100cqi - ((var(--visible-items) - 1) * var(--gap))) / var(--visible-items)) !important;
}
#actors .posters ul li :is(.poster, .titles) {
  margin-right: revert !important;
}
@media (width <= 767px) {
  #actors .posters ul {
    --gap: 0px;
    --visible-items: 4;
  }
}
@media (767px < width <= 991px) {
  #actors .posters ul {
    --visible-items: 6;
  }
}
@media (991px < width <= 1200px) {
  #actors .posters ul {
    --visible-items: 8;
  }
}
@media (1200px < width) {
  #actors .posters ul {
    --visible-items: 10;
  }
}
.actor-tooltip {
  margin-top: 5px;
  margin-left: revert !important;
}
`);const optimizedRenderReadmore=()=>{unsafeWindow.jQuery('.readmore:not([id^="rmjs-"])').filter((t,a)=>unsafeWindow.jQuery(a).height()>350).readmore({embedCSS:!1,collapsedHeight:300,speed:200,moreLink:'<a href="#">Read more...</a>',lessLink:'<a href="#">Read less...</a>',afterToggle:(t,a,r)=>a.closest("#sortable-grid").length&&unsafeWindow.$grid?.isotope()}),requestAnimationFrame(()=>unsafeWindow.$grid?.isotope())};Object.defineProperty(unsafeWindow,"renderReadmore",{get:()=>optimizedRenderReadmore,set:()=>{},configurable:!0}),GM_addStyle(`
#info-wrapper .season-links .links {
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  transition: scrollbar-color 0.2s;
  width: revert !important;
}
#info-wrapper .season-links .links:hover {
  scrollbar-color: rgb(102 102 102 / 0.4) transparent;
}
#info-wrapper .season-links .links > ul {
  width: max-content !important;
}
`),(e=>document.readyState==="loading"?document.addEventListener("DOMContentLoaded",e):e())(()=>{unsafeWindow.jQuery&&(unsafeWindow.jQuery.fn.mCustomScrollbar=function(){return this})}),document.addEventListener("turbo:load",()=>{document.querySelector("#info-wrapper .season-links .links .selected")?.scrollIntoView({block:"nearest",inline:"start"})},{capture:!0}),document.addEventListener("turbo:load",()=>{/^\/people\/[^\/]+$/.test(location.pathname)&&unsafeWindow.jQuery?.("#filter-fade-hide .dropdown-menu li.typer:is(.season, .episode, .person) a.selected").removeClass("selected")},{capture:!0}),window.addEventListener("turbo:load",()=>unsafeWindow.jQuery?.(".feed-icon.csv").off("click")),GM_addStyle(`
@media (767px < width) {
  body.comments:has(#read) {
    overflow-x: clip !important;
  }
  body.comments #read > .comment-wrapper > .above-comment::before,
  body.comments #read > .comment-wrapper > .above-comment::after {
    content: "";
    position: absolute;
    top: 0;
    height: 100%;
    background-color: inherit;
    width: 100vw;
  }
  body.comments #read > .comment-wrapper > .above-comment::before {
    right: 100%;
  }
  body.comments #read > .comment-wrapper > .above-comment::after {
    left: 100%;
  }
}
`),GM_addStyle(`
@media (width <= 767px) {
  body.discover .comment-wrapper .comment {
    padding-bottom: 30px !important;
  }
}
`),GM_addStyle(`
#links-wrapper {
  height: 40px !important;
}
#links-wrapper .container {
  height: 100% !important;
  display: flex !important;
  align-items: center;
}
#links-wrapper .container a {
  line-height: inherit !important;
}
`),(e=>document.readyState==="loading"?document.addEventListener("DOMContentLoaded",e):e())(()=>{unsafeWindow.jQuery?.(document).on("ajaxSuccess",(e,t,a)=>{a.url.endsWith("/dashboard/schedule")&&unsafeWindow.jQuery("#schedule-wrapper .btn-watch-now:not([data-source-counts])").attr("data-source-counts","{}"),/\/(dashboard\/on_deck|progress_item\/watched)\/\d+$/.test(a.url)&&unsafeWindow.posterGridTooltips?.()})}),GM_addStyle(`
body {
  overflow-x: clip !important;
}
`),GM_addStyle(`
@media (767px < width < 992px) {
  .comment-wrapper.list.keep-inline .interactions {
    margin-left: revert !important;
  }
}

@media (width <= 767px) {
  body.watchlist_comments .comment-wrapper.lists {
    padding-left: 10px;
  }
  body.watchlist_comments .comment-wrapper.lists .count-text {
    display: none;
  }
}
`),GM_addStyle(`
  .dark-knight .dropdown-menu a:focus {
    background-color: #222 !important;
  }
`),GM_addStyle(`
#summary-ratings-wrapper > .container {
  padding-top: revert !important;
}
@media (width <= 767px) {
  #summary-ratings-wrapper {
    border-top: revert !important;
  }
  #summary-ratings-wrapper .ul-wrapper {
    padding: revert !important;
    margin-bottom: revert !important;
  }
  #summary-ratings-wrapper .ul-wrapper ul {
    height: 50px;
    line-height: 39px;
    overflow-x: auto;
    scrollbar-width: none;
    scrollbar-color: transparent transparent;
    transition: scrollbar-color 0.2s;
  }
  #summary-ratings-wrapper .ul-wrapper ul:hover {
    scrollbar-width: thin;
    scrollbar-color: rgb(102 102 102 / 0.4) transparent;
  }
  #summary-ratings-wrapper .ul-wrapper ul.ratings {
    padding: 0 10px !important;
    border-block: solid 1px #333;
  }
  #summary-ratings-wrapper .ul-wrapper ul.stats {
    margin: 0 10px !important;
    padding: 0 !important;
    border-top: revert !important;
  }
  #summary-ratings-wrapper .ul-wrapper ul li {
    vertical-align: -37%;
  }
}
@media (767px < width) {
  #summary-ratings-wrapper .ul-wrapper {
    height: 60px;
    line-height: 49px;
    scrollbar-width: none;
    scrollbar-color: transparent transparent;
    transition: scrollbar-color 0.2s;
    padding-bottom: revert !important;
    margin-bottom: revert !important;
  }
  #summary-ratings-wrapper .ul-wrapper:hover {
    scrollbar-width: thin;
    scrollbar-color: rgb(102 102 102 / 0.4) transparent;
  }
  #summary-ratings-wrapper .ul-wrapper li {
    vertical-align: -33%;
  }
}
`),document.addEventListener("click",e=>{e.target.closest(".toggle-feeds")?(e.stopPropagation(),document.querySelector(".toggle-feeds-wrapper")?.classList.toggle("open")):e.target.closest(".toggle-subnav-options")&&(e.stopPropagation(),document.querySelector(".toggle-subnav-wrapper")?.classList.toggle("open"))},{capture:!0}),(e=>document.readyState==="loading"?document.addEventListener("DOMContentLoaded",e):e())(()=>{["remove","intersection","move","uniq"].forEach(e=>{const t=Object.getOwnPropertyDescriptor(Array.prototype,e);t&&(t.enumerable=!1,Object.defineProperty(Array.prototype,e,t))})}),GM_addStyle(`
body.releases .panel-body {
  overflow-x: auto !important;
  scrollbar-width: thin;
  scrollbar-color: #666 #333;
}
body.releases .panel-body tr :is(th, td):last-of-type {
  min-width: revert !important;
}
`),GM_addStyle(`
body.shows :is(#comments, .sidebar .streaming-links) img {
  filter: none !important;
}
body.shows #summary-wrapper:has(> .summary .poster.dropped-show) :is(.full-screenshot, .delta, img) {
  filter: grayscale(100%) !important;
}
`),GM_addStyle(`
@media (width <= 767px) {
  body.season #episodes {
    margin-top: 35px !important;
  }
}
`);