// ==UserScript==
// @name         Trakt.tv | Partial VIP Unlock
// @description  Unlocks some vip features: advanced filters, filter-by-terms, "more" buttons on dashboard, rewatching, bulk list management, faster page navigation and more. Also hides some vip buttons/banners. See README for details.
// @version      1.1.3
// @namespace    https://github.com/Fenn3c401
// @author       Fenn3c401
// @license      GPL-3.0-or-later
// @homepageURL  https://github.com/Fenn3c401/Trakt.tv-Userscript-Collection#readme
// @supportURL   https://github.com/Fenn3c401/Trakt.tv-Userscript-Collection/issues
// @updateURL    https://raw.githubusercontent.com/Fenn3c401/Trakt.tv-Userscript-Collection/main/userscripts/meta/x70tru7b.meta.js
// @downloadURL  https://raw.githubusercontent.com/Fenn3c401/Trakt.tv-Userscript-Collection/main/userscripts/dist/x70tru7b.min.user.js
// @icon         https://trakt.tv/assets/logos/logomark.square.gradient-b644b16c38ff775861b4b1f58c1230f6a097a2466ab33ae00445a505c33fcb91.svg
// @match        https://trakt.tv/*
// @match        https://classic.trakt.tv/*
// @run-at       document-start
// @grant        unsafeWindow
// @grant        GM_info
// @grant        GM_addStyle
// ==/UserScript==

/* README
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


"use strict";let $,compressedCache;addStyles(),document.addEventListener("turbo:load",()=>{$??=unsafeWindow.jQuery,compressedCache??=unsafeWindow.compressedCache,!(!$||!compressedCache)&&(patchUserSettings(),$(document).off("ajaxSuccess.userscript38793").on("ajaxSuccess.userscript38793",(e,s,t)=>{t.url.endsWith("/settings.json")&&patchUserSettings()}),$("body").removeAttr("data-turbo"),$(".frame-wrapper .sidenav.advanced-filters .buttons").addClass("vip").find(".btn.vip").text("").removeClass("vip").removeAttr("href").addClass("disabled disabled-init").attr("id","filter-apply").attr("data-apply-text","Apply Filters").before('<a class="btn btn-close-2024" id="filter-close" style="display: inline-block !important; visibility: visible !important;">Close</a>').append('<span class="text">Configure Filters</span><span class="icon fa-solid fa-check"></span>'))},{capture:!0});function patchUserSettings(){const e=compressedCache.get("settings");e&&!e.user.vip&&(e.user.vip=!0,compressedCache.set("settings",e),unsafeWindow.userSettings&&(unsafeWindow.userSettings=e))}function addStyles(){GM_addStyle(`
#top-nav .btn-vip,
.dropdown-menu.for-sortable > li > a.vip-only,
.alert-vip-required {
  display: none !important;
}
  `)}