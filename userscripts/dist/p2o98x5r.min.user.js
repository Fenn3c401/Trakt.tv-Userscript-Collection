// ==UserScript==
// @name         Trakt.tv | All-in-One Lists View
// @description  Adds a button for appending your lists from the /collaborations, /liked and /liked/official pages on the main "Personal Lists" page for easier access and management of all your lists in one place. Essentially an alternative to the lists category dropdown menu. See README for details.
// @version      1.0.8
// @namespace    https://github.com/Fenn3c401
// @author       Fenn3c401
// @license      GPL-3.0-or-later
// @homepageURL  https://github.com/Fenn3c401/Trakt.tv-Userscript-Collection#readme
// @supportURL   https://github.com/Fenn3c401/Trakt.tv-Userscript-Collection/issues
// @updateURL    https://update.greasyfork.org/scripts/550073.meta.js
// @downloadURL  https://raw.githubusercontent.com/Fenn3c401/Trakt.tv-Userscript-Collection/main/userscripts/dist/p2o98x5r.min.user.js
// @icon         https://trakt.tv/assets/logos/logomark.square.gradient-b644b16c38ff775861b4b1f58c1230f6a097a2466ab33ae00445a505c33fcb91.svg
// @match        https://trakt.tv/*
// @match        https://classic.trakt.tv/*
// @run-at       document-start
// @grant        unsafeWindow
// @grant        GM_addStyle
// ==/UserScript==

/* README
### General
- Sorting, filtering and list actions (unlike, delete etc.) should work as usual. Also works on /lists pages of other users.
- The [Trakt.tv | Bug Fixes and Optimizations](brzmp0a9.md) userscript contains an improved/fixed `renderReadmore()` function (for "Read more/less..." buttons of long list descriptions),
    which greatly speeds up the rendering of the appended lists.
*/


"use strict";addStyles(),document.addEventListener("turbo:load",()=>{if(!/^\/users\/[^\/]+\/lists$/.test(location.pathname))return;const i=unsafeWindow.jQuery;if(!i)return;const s=i("#sortable-grid"),r=s.children().length?i('<hr id="all-in-one-lists-view-spacer">').insertAfter(s):void 0,a=i('<button id="all-in-one-lists-view-btn" type="button">All-in-One Lists View</button>').insertAfter(r??s);a.on("click",async()=>{a.text("Loading...").prop("disabled",!0);const l=async n=>fetch(location.pathname+n).then(t=>t.text()).then(t=>i(new DOMParser().parseFromString(t,"text/html")).find(".personal-list"));let e=i((await Promise.all(["/collaborations","/liked","/liked/official"].map(l))).flatMap(n=>n.get()));const d=i(".personal-list"),c=d.map((n,t)=>i(t).attr("data-list-id")).get();if(e=e.filter((n,t)=>!c.includes(i(t).attr("data-list-id"))),!e.length){a.text("No other lists found.");return}const f=+d.last().attr("data-rank");e.each((n,t)=>i(t).attr("data-rank",f+n+1)),e.find(".btn-list-progress").click(function(){unsafeWindow.showLoading();const n=i(this).attr("data-list-id");n&&unsafeWindow.userSettings?.user.vip?unsafeWindow.redirect(unsafeWindow.userURL("progress?list="+n)):unsafeWindow.redirect("/vip/list-progress")}).end().find(".btn-list-subscribe").click(function(){unsafeWindow.showLoading();const n=i(this).attr("data-list-id");n&&unsafeWindow.userSettings?.user.vip?i.post(`/lists/${n}/subscribe`,function(t){unsafeWindow.redirect(t.url)}).fail(function(){unsafeWindow.hideLoading(),unsafeWindow.toastr.error("Doh! We ran into some sort of error.")}):unsafeWindow.redirect("/vip/calendars")}).end().find(".collaborations-deny").on("ajax:success",function(n,t){i("#collaborations-deny-"+t.id).children().addClass("trakt-icon-delete-thick"),i("#collaborations-approve-"+t.id).addClass("off"),i("#collaborations-block-"+t.id).addClass("off")});const o=i("#btn-list-edit-lists");o.hasClass("active")&&o.trigger("click"),o.hide(),s.append(e),r?.remove(),a.remove(),unsafeWindow.genericTooltips(),unsafeWindow.vipTooltips(),unsafeWindow.shareIcons(),unsafeWindow.convertEmojis(),unsafeWindow.userscriptAddLinksToListPreviewPosters?.(),unsafeWindow.addOverlays(),unsafeWindow.$grid?.isotope("insert",e),unsafeWindow.updateListsCount(),unsafeWindow.lazyLoadImages(),unsafeWindow.renderReadmore()})},{capture:!0});function addStyles(){GM_addStyle(`
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
  `)}