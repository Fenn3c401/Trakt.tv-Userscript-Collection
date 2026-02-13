// ==UserScript==
// @name         Trakt.tv | Megascript
// @description  My 15 trakt.tv userscripts merged into one for convenience: Actor Pronunciation Helper, All-In-One Lists View, Average Season And Episode Ratings, Bug Fixes And Optimizations, Charts - Ratings Distribution, Charts - Seasons, Custom Links (Watch-Now + External), Custom Profile Header Image, Enhanced List Preview Posters, Enhanced Title Metadata, Nested Header Navigation Menus, Partial VIP Unlock, Playback Progress Manager, Scheduled E-Mail Data Exports, Trakt API Wrapper. See README for details.
// @version      2026-02-13_09-30
// @namespace    https://github.com/Fenn3c401
// @author       Fenn3c401
// @license      GPL-3.0-or-later
// @homepageURL  https://github.com/Fenn3c401/Trakt.tv-Userscript-Collection#readme
// @supportURL   https://github.com/Fenn3c401/Trakt.tv-Userscript-Collection/issues
// @updateURL    https://update.greasyfork.org/scripts/557305.meta.js
// @downloadURL  https://raw.githubusercontent.com/Fenn3c401/Trakt.tv-Userscript-Collection/main/userscripts/dist/zzzzzzzz.min.user.js
// @icon         https://trakt.tv/assets/logos/logomark.square.gradient-b644b16c38ff775861b4b1f58c1230f6a097a2466ab33ae00445a505c33fcb91.svg
// @match        https://trakt.tv/*
// @match        https://classic.trakt.tv/*
// @run-at       document-start
// @resource     anidap         https://anidap.se/logo.png
// @resource     animetsu       https://db.onlinewebfonts.com/t/65e1ae41ad95e8bed2ac45adc765795a.woff2
// @resource     cineby         https://www.cineby.gd/logo.png
// @resource     dmm            https://raw.githubusercontent.com/debridmediamanager/debrid-media-manager/main/dmm-logo.svg
// @resource     hexa           https://hexa.su/hexa-logo.png
// @resource     knaben         data:image/svg+xml,%3Csvg%20onmouseenter%3D%22this.querySelectorAll('%3Anth-child(-n%2B9)').forEach((c%2Ci)%3D%26gt%3B%7Bc.style.transition%3D'none'%3Bc.style.transform%3D'translate(0%2C-70%25)'%3BsetTimeout(()%3D%26gt%3B%7Bc.style.transition%3D'transform%201s%20cubic-bezier(.5%2C.25%2C.27%2C.1)'%3Bc.style.transform%3D'translate(0%2C0)'%7D%2C50*(i%253%2B~~(i%2F3)))%7D)%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201862%20804%22%3E%3Cpath%20fill%3D%22%237a7a7a%22%20d%3D%22M1470.91%20273.76h280.14v100.1h-280.14z%22%2F%3E%3Cpath%20fill%3D%22%23bababa%22%20d%3D%22M955.67%20273.76h499.85v100.1H955.67z%22%2F%3E%3Cpath%20fill%3D%22%237a7a7a%22%20d%3D%22M653.56%20273.76h285.63v100.1H653.56z%22%2F%3E%3Cpath%20fill%3D%22%23bababa%22%20d%3D%22M1470.91%20160.32h280.14v96.76h-280.14z%22%2F%3E%3Cpath%20fill%3D%22%237a7a7a%22%20d%3D%22M955.67%20160.32h499.85v96.76H955.67z%22%2F%3E%3Cpath%20fill%3D%22%23bababa%22%20d%3D%22M653.56%20160.32h285.63v96.76H653.56z%22%2F%3E%3Cpath%20fill%3D%22%237a7a7a%22%20d%3D%22M1362.54%2040.2h281.94v101.77h-281.94z%22%2F%3E%3Cpath%20fill%3D%22%23bababa%22%20d%3D%22M1062.98%2040.2h281.94v101.77h-281.94z%22%2F%3E%3Cpath%20fill%3D%22%237a7a7a%22%20d%3D%22M763.42%2040.2h281.94v101.77H763.42z%22%2F%3E%3Cpath%20fill%3D%22%23bababa%22%20d%3D%22M74.48%200h413.36v62.95H74.48zm0%2062.95h60.35v72.75H74.48zm136.41%200h37.2v72.75h-37.2zm107.47%200h37.2v72.75h-37.2zm111.61%200h57.87v72.75h-57.87zM74.48%20135.47h413.36v97.93H74.48z%22%2F%3E%3Cpath%20fill%3D%22%237a7a7a%22%20d%3D%22M74.48%20233.16h502.74v140.7H74.48z%22%2F%3E%3Cpath%20fill%3D%22%23bababa%22%20d%3D%22M0%20391.991v.078L106.988%20644.12H1713.04v-2.908L1862%20492.251V391.95H.097Z%22%2F%3E%3Cpath%20fill%3D%22%237a7a7a%22%20d%3D%22M1713.489%20642.07H105.417l67.882%20159.92h1380.269Z%22%2F%3E%3C%2Fsvg%3E
// @resource     kuroiru        https://kuroiru.co/logo/stuff/letter-small.png
// @resource     miruro         https://www.miruro.to/assets/miruro-text-transparent-white-DRs0RmF1.png
// @resource     oracleofbacon  https://oracleofbacon.org/center_list.php
// @resource     pstream        data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMC4wMDggMTcuNDA1Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDE4LjY3NDgpIHNjYWxlKDAuMDAzMzMzIC0wLjAwMzMzMykiIGZpbGw9IiM4NTg5ZmYiPjxwYXRoIGQ9Ik0zOTEwIDU1MjcgYy0zMyAtNCAtMTQ1IC0xNyAtMjUwIC0yOCAtNjQ1IC03MyAtOTAwIC0xODcgLTkwMCAtNDA1IGwwIC04OSAxNTQgLTIgYzIwOSAtMiAyMjUgLTE3IDM4MSAtMzU0IDE4NiAtMzk5IDMzNyAtNDkxIDU1NyAtMzQxIDEwMyA3MCAxNzYgNjcgMjUyIC05IDE0MyAtMTQyIC0xNSAtMzQyIC0zMjAgLTQwNCBsLTEyMyAtMjUgMTg1IC0zOTMgYzEwMSAtMjE3IDE4OSAtMzk2IDE5NCAtMzk4IDYgLTMgODcgNiAxODIgMjAgNDk5IDcxIDExNjAgLTI5NiA5NzIgLTU0MSAtNzcgLTEwMSAtMTgzIC0xMDAgLTMwNyAyIC0xODYgMTU0IC00MDcgMjIzIC02MTAgMTg4IC0xMjMgLTIxIC0xMTkgLTkgLTgwIC0yNzQgNDAgLTI3MyAxOCAtNzAxIC00OCAtOTE2IC0yNSAtODIgMjUyIC05OSA0NjMgLTI4IDY1NSAyMjAgMTE0NiA3NDggMTMzMCAxNDMwIDQ0IDE2NSA0NiAyMDEgNTMgMTIwNiBsOCAxMDM1IC02NyA2NiBjLTE4NSAxODMgLTEzNzYgMzM2IC0yMDI2IDI2MHogbTEwNzggLTEyMTkgYzExOCAtODEgMjA0IC04NCAzMTIgLTEwIDIzOSAxNjMgNDUzIC03MyAyNDAgLTI2NSAtMjQxIC0yMTggLTcwMyAtMTc4IC04MzIgNzEgLTkzIDE3OSAxMDUgMzIzIDI4MCAyMDR6Ii8+PHBhdGggZD0iTTI0MTAgNDU5MSBjLTk1MCAtMjAxIC0yNDA0IC0xMDE1IC0yNDA5IC0xMzQ4IC0xIC02OSA3NzEgLTE3MDcgODg1IC0xODc4IDQyMiAtNjMzIDExODUgLTk4NCAxOTI0IC04ODYgMjIxIDI5IDI5MyA2OCA0ODIgMjY0IDU3NSA1OTQgNzI3IDE0NjYgMzkwIDIyMzIgLTIzMSA1MjUgLTc0OSAxNjAwIC03ODUgMTYzMCAtNTcgNDggLTIxNCA0NCAtNDg3IC0xNHogbTU3OSAtMTEyMiBjMTE0IC01NCAxNDUgLTE4OCA2NCAtMjgxIC00OCAtNTYgLTYwIC01OCAtMjY1IC00NyAtMTAyIDYgLTE3NyAtNDIgLTIyOSAtMTQzIC05NSAtMTg3IC0zMzkgLTE0NSAtMzM5IDU3IDAgMjkxIDQ4MiA1NTAgNzY5IDQxNHogbS0xMzE5IC02MzAgYzIxNSAtMTA2IDg1IC0zNTAgLTE3MyAtMzI2IC0xNDQgMTMgLTIwOSAtMjEgLTI3MCAtMTQwIC0xMDIgLTE5NyAtMzgxIC0xMTkgLTMzOSA5NCA1OSAyOTUgNTA2IDUwOCA3ODIgMzcyeiBtMTQ3MiAtNTc3IGMyMTYgLTIxNyAtMjg3IC03ODkgLTc4NiAtODk1IC00NzMgLTEwMCAtOTA5IDEyNyAtNjU0IDM0MSA3MSA2MCA5MyA2MiAyMjYgMjIgMzQ4IC0xMDYgNzM5IDc3IDkwMyA0MjMgODMgMTc3IDIwMSAyMTggMzExIDEwOXoiLz48L2c+PC9zdmc+
// @resource     scenenzbs      https://img.house-of-usenet.com/fd4bd542330506d41778e81860f29435c7f8795a7bbefbd9d297b7d79d5a067b.webp
// @resource     stremio        https://web.stremio.com/images/stremio_symbol.png
// @require      https://cdn.jsdelivr.net/gh/stdlib-js/string-base-distances-levenshtein@v0.2.2-umd/browser.js#sha256-0SIsWI8h2EJjO46eyuxL1XnuGNhycW/o0yxyw/U+jrU=
// @require      https://cdn.jsdelivr.net/npm/chart.js@4.4.9/dist/chart.umd.min.js
// @require      https://cdn.jsdelivr.net/npm/chartjs-plugin-zoom@2.2.0/dist/chartjs-plugin-zoom.min.js
// @require      https://cdn.jsdelivr.net/npm/croner@9.0.0/dist/croner.umd.min.js
// @grant        unsafeWindow
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @grant        GM_getResourceURL
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_openInTab
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_unregisterMenuCommand
// @grant        GM.xmlHttpRequest
// @connect      celeb.gate.cc
// @connect      fanart.tv
// @connect      forvo.com
// @connect      kuroiru.co
// @connect      moviemaps.org
// @connect      trakt.tv
// @connect      walter-r2.trakt.tv
// ==/UserScript==

/* README
### General
- You can disable individual modules by setting the corresponding id to `false` in the userscript storage tab *(note: only displayed after first run)*.
- Each enabled module will conflict with the corresponding standalone userscript. Either uninstall the standalone version (suggested) or disable the respective module.
- As VIP user you should disable: `2dz6ub1t`, `fyk2l3vj`, `x70tru7b`, `2hc6zfyy`
- This userscript is automatically generated. YMMV.

| *NAME* | *ID* |
| :----- | :---------- |
| [Trakt.tv \| Actor Pronunciation Helper](71cd9s61.md#StickyHeader "Adds a button on /people pages for fetching an audio recording of that person's name with the correct pronunciation from https://forvo.com") | `71cd9s61` |
| [Trakt.tv \| All-In-One Lists View](p2o98x5r.md#StickyHeader "Adds a button for appending your lists from the /collaborations, /liked and /liked/official pages on the main \"Personal Lists\" page for easier access and management of all your lists in one place. Essentially an alternative to the lists category dropdown menu.") | `p2o98x5r` |
| [Trakt.tv \| Average Season And Episode Ratings](yl9xlca7.md#StickyHeader "Shows the average general and personal rating of the seasons of a show and the episodes of a season. You can see the averages for all episodes of a show on its /seasons/all page.") | `yl9xlca7` |
| [Trakt.tv \| Bug Fixes And Optimizations](brzmp0a9.md#StickyHeader "A large collection of bug fixes and optimizations for trakt.tv, organized into ~35 independent sections, each with a comment detailing which specific issues are being addressed. Also contains some minor feature patches.") | `brzmp0a9` |
| [Trakt.tv \| Charts - Ratings Distribution](pmdf6nr9.md#StickyHeader "Adds a ratings distribution (number of users who rated a title 1/10, 2/10 etc.) chart to title summary pages. Also allows for rating the title by clicking on the bars of the chart.") | `pmdf6nr9` |
| [Trakt.tv \| Charts - Seasons](cs1u5z40.md#StickyHeader "Adds a line chart to /seasons pages which shows the ratings (personal + general) and the number of watchers and comments for each individual episode.") | `cs1u5z40` |
| [Trakt.tv \| Custom Links (Watch-Now + External)](wkt34fcz.md#StickyHeader "Adds custom links to all the \"Watch-Now\" and \"External\" sections (for titles and people). The ~35 defaults include Letterboxd, Stremio, streaming sites (e.g. P-Stream, Hexa), torrent aggregators (e.g. EXT, Knaben), various anime sites (both for streaming and tracking) and much more. Easily customizable.") | `wkt34fcz` |
| [Trakt.tv \| Custom Profile Header Image](2dz6ub1t.md#StickyHeader "A custom profile image for free users. Like the vip feature, except this one only works locally. Uses the native set/reset buttons and changes the dashboard + settings background as well.") | `2dz6ub1t` |
| [Trakt.tv \| Enhanced List Preview Posters](kji85iek.md#StickyHeader "Makes the posters of list preview stacks/shelves link to the respective title summary pages instead of the list page and adds corner rating indicators for rated titles.") | `kji85iek` |
| [Trakt.tv \| Enhanced Title Metadata](fyk2l3vj.md#StickyHeader "Adds links of filtered search results to the metadata section (languages, genres, networks, studios, writers, certification, year) on title summary pages, similar to the vip feature. Also adds a country flag and allows for \"combined\" searches by clicking on the labels.") | `fyk2l3vj` |
| [Trakt.tv \| Nested Header Navigation Menus](txw82860.md#StickyHeader "Adds 150+ dropdown menus with a total of 1000+ entries to the header navigation bar for one-click access to just about any page on the entire website.") | `txw82860` |
| [Trakt.tv \| Partial VIP Unlock](x70tru7b.md#StickyHeader "Unlocks some vip features: advanced filters, \"more\" buttons on dashboard, faster page navigation, bulk list management, rewatching, custom calendars, advanced list progress and more. Also hides some vip advertisements.") | `x70tru7b` |
| [Trakt.tv \| Playback Progress Manager](swtn5c9q.md#StickyHeader "Adds playback progress badges to in-progress movies/episodes and allows for setting and removing playback progress states. Also adds playback progress overview pages to the \"Progress\" tab and allows for bulk deletion and renewal. DOES NOT WORK WITHOUT THE \"TRAKT API WRAPPER\" USERSCRIPT!") | `swtn5c9q` |
| [Trakt.tv \| Scheduled E-Mail Data Exports](2hc6zfyy.md#StickyHeader "Automatic trakt.tv backups for free users. On every trakt.tv visit a background e-mail data export is triggered, if one is overdue based on the specified cron expression (defaults to weekly).") | `2hc6zfyy` |
| [Trakt.tv \| Trakt API Wrapper](f785bub0.md#StickyHeader "Exposes an authenticated Trakt API Wrapper. Intended to run alongside other userscripts which require (authenticated) access to the Trakt API.") | `f785bub0` |
*/


"use strict";const gmStorage={"2dz6ub1t":!0,"2hc6zfyy":!0,"71cd9s61":!0,brzmp0a9:!0,cs1u5z40:!0,f785bub0:!0,fyk2l3vj:!0,kji85iek:!0,p2o98x5r:!0,pmdf6nr9:!0,swtn5c9q:!0,txw82860:!0,wkt34fcz:!0,x70tru7b:!0,yl9xlca7:!0,...GM_getValue("megascript")};GM_setValue("megascript",gmStorage),gmStorage["2dz6ub1t"]&&(async C=>{"use strict";let t;const r={_defaults:{title:(typeof C<"u"?C:GM_info.script.name).replace("Trakt.tv","Userscript"),toast:!0,toastrOpt:{positionClass:"toast-top-right",timeOut:1e4,progressBar:!0},toastrStyles:"#toast-container#toast-container a { color: #fff !important; border-bottom: dotted 1px #fff; }"},_print(n,d,s="",g={}){const{title:l=this._defaults.title,toast:y=this._defaults.toast,toastrOpt:x,toastrStyles:_="",consoleStyles:v="",data:k}=g,c=`${s}${k!==void 0?" See console for details.":""}<style>${this._defaults.toastrStyles+_}</style>`;console[n](`%c${l}: ${s}`,v,...k!==void 0?[k]:[]),y&&unsafeWindow.toastr?.[d](c,l,{...this._defaults.toastrOpt,...x})},info(n,d){this._print("info","info",n,d)},success(n,d){this._print("info","success",n,{consoleStyles:"color:#00c853;",...d})},warning(n,d){this._print("warn","warning",n,d)},error(n,d){this._print("error","error",n,d)}},f={...GM_getValue("customProfileImage")};GM_setValue("customProfileImage",f);let w=o();window.addEventListener("turbo:load",()=>{if(!/^\/(shows|movies|users|dashboard|settings|oauth\/(authorized_)?applications)/.test(location.pathname)||(t??=unsafeWindow.jQuery,!t))return;const n=t("body.is-self #cover-wrapper"),d=t("body.is-self #btn-set-profile-image"),s=t("body:is(.shows, .movies) #summary-wrapper > .full-screenshot");f.imgUrl&&n.length&&d.length&&p(n,d),s.length&&(s.attr("style")?m(s):new MutationObserver((g,l)=>{l.disconnect(),m(s)}).observe(s[0],{attributeFilter:["style"]}))});function p(n,d){n.has('a.selected:contains("Profile")').length?(n.removeClass("slim").find("> .poster-bg-wrapper").removeClass("poster-bg-wrapper").addClass("shade"),n.find("> #watching-now-wrapper").length||n.find("> .container").before(`<div class="hidden-xs" id="fanart-info"><a href="${f.info.url}">${f.info.title} <span class="year">${f.info.year}</span></a></div>`)):n.find("> .poster-bg-wrapper").removeClass("poster-bg-wrapper").addClass("shadow-full-width"),d.popover("destroy").popover({trigger:"manual",container:"body",placement:"bottom",html:!0,template:'<div class="popover remove reset-profile-image" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',title:"Reset Profile Image?",content:`<button class="btn btn-primary less-rounded">Yes</button><button class="btn btn-cancel less-rounded" onclick="$(this).closest('.popover').popover('hide');">No</button>`}).on("click",function(){t(this).popover("show")}).find(".btn-text").text("Reset Profile Image"),t("body").on("click",".reset-profile-image .btn-primary",()=>{["imgUrl","info"].forEach(s=>delete f[s]),GM_setValue("customProfileImage",f),w?.remove(),r.success("Custom profile image has been reset."),d.popover("destroy").popover({trigger:"hover",container:"body",placement:"bottom",html:!0,template:'<div class="popover set-profile-image" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',content:"Showcase your favorite movie, show, season or episode and make it your profile header image! Here's how:<br><br><ol><li>Go to any <b>movie</b>, <b>show</b>, <b>season</b>, or <b>episode</b> page.</li><li>Click <b>Set Profile Image</b> in the sidebar.</li></ol>"}).off("click").find(".btn-text").text("Set Profile Image"),n.addClass("slim").find("> :is(.shade, .shadow-full-width)").removeClass("shade shadow-full-width").addClass("poster-bg-wrapper").end().find("> #fanart-info").remove()})}function m(n){const d=n.css("background-image").match(/url\("?(?!.+?placeholders)(.+?)"?\)/)?.[1],s=t('[href="/vip/cover"]'),g=l=>{s.has(".fa").parent().addClass("locked").find(".text").unwrap().append(`<div class="under-action">${["No fanart available","Already set"][l]}</div>`),s.not(":has(.fa)").off("click").on("click",y=>y.preventDefault()).css({color:"#bbb"}).find(".text").wrap("<s></s>")};d?d===f.imgUrl?g(1):s.on("click",l=>{l.preventDefault(),g(1),f.imgUrl=d,f.info={url:location.pathname,title:t("head title").text().match(/(.+?)(?: \([0-9]{4}\))? - Trakt/)[1],year:t("#summary-wrapper .year").text()},GM_setValue("customProfileImage",f),w?.remove(),w=o(),r.success("Fanart is now set as custom profile image. Click here to see how it looks.",{toastrOpt:{onclick(){location.href="/users/me"}}})}):g(0)}function o(){if(f.imgUrl)return GM_addStyle(`
body.users.is-self #cover-wrapper:not(:has(> #watching-now-wrapper)) > .full-bg {
  background-image: url("${f.imgUrl}") !important;
}
@media (width <= 767px) and (orientation: portrait) {
  body.users.is-self #cover-wrapper:not(:has(> #watching-now-wrapper)) > .container {
    background-color: revert !important;
  }
}

body:is(.dashboard, .settings, .authorized_applications, .applications) #results-top-wrapper .poster-bg {
  background-image: url("${f.imgUrl}") !important;
  background-size: cover !important;
  background-position: 50% 20% !important;
  opacity: 0.7 !important;
  filter: revert !important;
}
  `)}})("Trakt.tv | Custom Profile Header Image"),gmStorage["2hc6zfyy"]&&(async C=>{"use strict";let t,r;const f={_defaults:{title:(typeof C<"u"?C:GM_info.script.name).replace("Trakt.tv","Userscript"),toast:!0,toastrOpt:{positionClass:"toast-top-right",timeOut:1e4,progressBar:!0},toastrStyles:"#toast-container#toast-container a { color: #fff !important; border-bottom: dotted 1px #fff; }"},_print(m,o,n="",d={}){const{title:s=this._defaults.title,toast:g=this._defaults.toast,toastrOpt:l,toastrStyles:y="",consoleStyles:x="",data:_}=d,v=`${n}${_!==void 0?" See console for details.":""}<style>${this._defaults.toastrStyles+y}</style>`;console[m](`%c${s}: ${n}`,x,..._!==void 0?[_]:[]),g&&unsafeWindow.toastr?.[o](v,s,{...this._defaults.toastrOpt,...l})},info(m,o){this._print("info","info",m,o)},success(m,o){this._print("info","success",m,{consoleStyles:"color:#00c853;",...o})},warning(m,o){this._print("warn","warning",m,o)},error(m,o){this._print("error","error",m,o)}},w={cronExpr:"@weekly",toastOnSuccess:!0,lastRun:{},...GM_getValue("scheduledEmailDataExports")};GM_setValue("scheduledEmailDataExports",w);let p;try{p=new Cron(w.cronExpr,{timezone:Intl.DateTimeFormat().resolvedOptions().timeZone})}catch(m){f.error("Invalid cron expression. Exiting..",{data:m})}p&&window.addEventListener("turbo:load",async()=>{if(t??=unsafeWindow.jQuery,r??=unsafeWindow.Cookies?.get("trakt_userslug"),!t||!r)return;const m=new Date;if(!w.lastRun[r]||p.nextRun(w.lastRun[r])<=m){const o=await fetch("/settings/data").then(n=>n.text()).then(n=>t(new DOMParser().parseFromString(n,"text/html")).find("#exporters .alert-success .format-date").attr("data-date"));if(o&&p.nextRun(o)>m){w.lastRun[r]=o,GM_setValue("scheduledEmailDataExports",w);return}t.post("/settings/export_data").done(()=>{w.lastRun[r]=m.toISOString(),GM_setValue("scheduledEmailDataExports",w),f.success("Success. Your data export is processing. You will receive an e-mail when it is ready.",{toast:w.toastOnSuccess})}).fail(n=>{n.status===409?(w.lastRun[r]=m.toISOString(),GM_setValue("scheduledEmailDataExports",w),f.warning(`Failed. Cooldown from previous export is still active. Will retry on next scheduled data export at: ${p.nextRun(w.lastRun[r]).toISOString()}`)):f.error(`Failed with status: ${n.status}. Reload page to try again.`,{data:n})})}})})("Trakt.tv | Scheduled E-Mail Data Exports"),gmStorage["71cd9s61"]&&(async C=>{"use strict";let t;const r={_defaults:{title:(typeof C<"u"?C:GM_info.script.name).replace("Trakt.tv","Userscript"),toast:!0,toastrOpt:{positionClass:"toast-top-right",timeOut:1e4,progressBar:!0},toastrStyles:"#toast-container#toast-container a { color: #fff !important; border-bottom: dotted 1px #fff; }"},_print(m,o,n="",d={}){const{title:s=this._defaults.title,toast:g=this._defaults.toast,toastrOpt:l,toastrStyles:y="",consoleStyles:x="",data:_}=d,v=`${n}${_!==void 0?" See console for details.":""}<style>${this._defaults.toastrStyles+y}</style>`;console[m](`%c${s}: ${n}`,x,..._!==void 0?[_]:[]),g&&unsafeWindow.toastr?.[o](v,s,{...this._defaults.toastrOpt,...l})},info(m,o){this._print("info","info",m,o)},success(m,o){this._print("info","success",m,{consoleStyles:"color:#00c853;",...o})},warning(m,o){this._print("warn","warning",m,o)},error(m,o){this._print("error","error",m,o)}};p(),document.addEventListener("turbo:load",()=>{/^\/people\/[^\/]+(\/lists.*)?$/.test(location.pathname)&&(t??=unsafeWindow.jQuery,t&&t('<button id="btn-pronounce-name"><div class="audio-animation fade"><div class="bar-1"></div><div class="bar-2"></div><div class="bar-3"></div></div><div class="fa fa-volume fade in"></div></button>').appendTo(t("#summary-wrapper .mobile-title h1")).tooltip({title:"Pronounce Name",container:"body",placement:"top",html:!0}).one("click",async function(){t(this).tooltip("hide");const m=t(this),o=t('body > [itemtype$="Person"] > meta[itemprop="name"]').attr("content")??t("#summary-wrapper .mobile-title > :last-child").text();unsafeWindow.showLoading?.();const n=await f(o),d=n?[n]:await Promise.all(o.split(/\s+/).map(s=>/^\w\.?$/.test(s)?new SpeechSynthesisUtterance(s):f(s).then(g=>g??new SpeechSynthesisUtterance(s))));unsafeWindow.hideLoading?.(),d.some(s=>s instanceof SpeechSynthesisUtterance)&&(d.forEach(s=>{s instanceof SpeechSynthesisUtterance&&(s.lang="en-US")}),r.warning(`Could not find a full pronunciation for "${o}" on <a href="https://forvo.com/search/${encodeURIComponent(o)}" target="_blank"><strong>forvo.com</strong></a>. Falling back to TTS..`)),["ended","end"].forEach(s=>{d.slice(1).forEach((g,l)=>{d[l]?.addEventListener(s,()=>g.play?g.play():speechSynthesis.speak(g))}),d.at(-1).addEventListener(s,()=>{m.find(".audio-animation").removeClass("in"),setTimeout(()=>m.find(".fa").addClass("in"),150)})}),w(d,m),m.on("click",()=>w(d,m))}))},{capture:!0});async function f(m){const o=await GM.xmlHttpRequest({url:`https://forvo.com/search/${encodeURIComponent(m)}`}),n=new DOMParser().parseFromString(o.responseText,"text/html"),d=t(n).find("body > script").text().match(/_AUDIO_HTTP_HOST='(.+?)'/)?.[1],s=t(n).find('[onclick^="Play"]').attr("onclick")?.match(/Play\([0-9]+,'(.*?)','(.*?)',(?:true|false),'(.*?)','(.*?)'/)?.slice(1),g=s?.map((l,y)=>l&&["/mp3/","/ogg/","/audios/mp3/","/audios/ogg/"][y]+atob(l)).filter(Boolean).reverse();return g?.length?t("<audio>"+g.map(l=>`<source src="https://${d}${l}" type="${l.endsWith("mp3")?"audio/mpeg":"audio/ogg; codecs=vorbis"}" />`).join("")+"</audio>")[0]:null}function w(m,o){o.find(".fa").removeClass("in"),setTimeout(()=>{o.find(".audio-animation").addClass("in"),m.forEach(n=>n.load?.()),speechSynthesis.cancel(),m[0].play?m[0].play():speechSynthesis.speak(m[0])},150)}function p(){GM_addStyle(`
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
  background: linear-gradient(180deg, rgb(255 0 0), rgb(155 66 200));
  transform: scaleY(0.2);
}

#btn-pronounce-name .in .bar-1 { animation: lineWave-1 .4s .3s infinite alternate; }
#btn-pronounce-name .in .bar-2 { animation: lineWave-2 .3s .2s infinite alternate; }
#btn-pronounce-name .in .bar-3 { animation: lineWave-3 .35s .25s infinite alternate; }

@keyframes lineWave-1 { from { transform: scaleY(0.24); } to { transform: scaleY(0.85); } }
@keyframes lineWave-2 { from { transform: scaleY(0.27); } to { transform: scaleY(0.98); } }
@keyframes lineWave-3 { from { transform: scaleY(0.24); } to { transform: scaleY(0.80); } }
  `)}})("Trakt.tv | Actor Pronunciation Helper"),gmStorage.brzmp0a9&&(async C=>{"use strict";GM_addStyle(`
#header-search-autocomplete {
  scrollbar-color: #666 transparent;
}

#header-search-autocomplete .search-term {
  overflow: clip;
  text-overflow: ellipsis;
}
#header-search-autocomplete .search-term > .in-type {
  display: inline-block;
}

@media (width <= 767px) {
  #top-nav .search-wrapper.focused {
    z-index: 1;
  }

  #top-nav {
    container-type: inline-size;
  }
  #top-nav .search-wrapper.focused #header-search#header-search {
    width: 100cqi !important;
    margin-left: -47px !important;
  }
}
`),GM_addStyle(`
.frame-wrapper :is(.sidenav, .sidenav-inner) {
  height: revert !important;
  min-height: revert !important;
}
.frame-wrapper .sidenav .sidenav-inner {
  position: revert !important;
}
.frame-wrapper #filter-fade-hide .dropdown-menu {
  overflow-y: auto;
  max-height: calc(100dvh - var(--header-height) - 55px);
  scrollbar-width: thin;
  scrollbar-color: #666 #333;
}
@media (width <= 1024px) {
  .frame-wrapper .sidenav.advanced-filters {
    padding: 10px 10px 75px !important;
    top: 110px !important;
    scrollbar-width: none;
  }
  .frame-wrapper .sidenav.advanced-filters .sidenav-inner {
    max-height: revert !important;
  }
  .frame-wrapper .sidenav:not(.advanced-filters) nav .link:not([style="display: none;"]) {
    display: inline !important;
  }
}
@media (1024px < width) {
  .frame-wrapper:has(> .sidenav.advanced-filters.open) {
    background: linear-gradient(to right, #1d1d1d 300px, #222 300px 600px, #1d1d1d 600px) !important;
  }
  .frame-wrapper .frame {
    display: flow-root;
    margin-right: 0 !important;
    min-height: calc(100dvh - var(--header-height));
  }
  .frame-wrapper .frame .no-results {
    transform: revert !important;
  }
  .frame-wrapper .frame .personal-list .posters {
    min-width: max-content;
  }
  .frame-wrapper .sidenav {
    position: sticky !important;
    top: 0;
  }
  .frame-wrapper .sidenav .sidenav-inner {
    max-height: 100dvh;
  }
  .frame-wrapper .sidenav:not(.advanced-filters) {
    z-index: 26;
  }
  .frame-wrapper .sidenav:not(.advanced-filters) .sidenav-inner {
    display: flex;
    flex-direction: column;
  }
  .frame-wrapper .sidenav:not(.advanced-filters) nav {
    margin-top: 0 !important;
    overflow-y: auto;
    scrollbar-width: none;
    mask: linear-gradient(to top, transparent, white 8px);
  }
  .frame-wrapper .sidenav:not(.advanced-filters) nav h3 {
    position: sticky !important;
    top: 0;
    z-index: 1;
    margin-bottom: 0 !important;
    padding: 15px 0 10px !important;
    background-color: #1d1d1d;
    mask: linear-gradient(to top, transparent, white 8px);
  }
  .frame-wrapper .sidenav:not(.advanced-filters) nav .link:not([style*="display: none;"]) {
    display: block !important;
  }
  .frame-wrapper .sidenav:not(.advanced-filters) .sidenav-inner > span {
    display: none;
  }
}
@media (991px < width <= 1024px) {
  .frame-wrapper #filter-fade-hide .dropdown-menu {
    right: 0;
    left: revert !important;
  }
}
`),document.addEventListener("turbo:load",()=>{/^\/(movies|shows)/.test(location.pathname)&&unsafeWindow.jQuery?.("#summary-ratings-wrapper .stats .imdb > a").attr("href",(r,f)=>f.match(/.+(?=\/ratings)/)?.[0]??f)}),(r=>document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r())(()=>{if(!unsafeWindow.jQuery)return;const r=Object.getOwnPropertyDescriptors(unsafeWindow.jQuery.fn.swipe),f=Object.getOwnPropertyDescriptor(unsafeWindow.jQuery.fn,"swipe"),w=f.value;f.value=function(...p){return this.attr("id")==="summary-wrapper"&&(p[0].excludedElements="#summary-ratings-wrapper .stats"),w.apply(this,p)},Object.defineProperty(unsafeWindow.jQuery.fn,"swipe",f),Object.entries(r).forEach(([p,m])=>!["length","name","prototype"].includes(p)&&Object.defineProperty(unsafeWindow.jQuery.fn.swipe,p,m))}),GM_addStyle(`
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
`),(r=>document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r())(()=>{if(!unsafeWindow.jQuery)return;const r=Object.getOwnPropertyDescriptors(unsafeWindow.jQuery.fn.tooltip),f=Object.getOwnPropertyDescriptor(unsafeWindow.jQuery.fn,"tooltip"),w=f.value;f.value=function(...p){return p[0]?.container&&this.closest(".popover, #ondeck-wrapper, #progress-grid-wrapper").length&&delete p[0].container,w.apply(this,p)},Object.defineProperty(unsafeWindow.jQuery.fn,"tooltip",f),Object.entries(r).forEach(([p,m])=>!["length","name","prototype"].includes(p)&&Object.defineProperty(unsafeWindow.jQuery.fn.tooltip,p,m))}),GM_addStyle(`
@media (width <= 767px) {
  #info-wrapper .sticky-wrapper {
    display: block !important;
  }
  #info-wrapper .sidebar {
    position: fixed;
    top: 0 !important;
    left: 0;
    z-index: 30;
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
`),window.addEventListener("turbo:load",()=>{const r=unsafeWindow.jQuery("body.touch-device #info-wrapper:has(.sidebar)");r.swipe({excludedElements:"#summary-ratings-wrapper .stats, #info-wrapper .season-links .links, #actors .posters",swipeRight:(f,w,p,m,o,n)=>n[0].start.x<50&&r.addClass("with-mobile-sidebar"),swipeLeft:(f,w,p,m,o,n)=>r.removeClass("with-mobile-sidebar")})}),window.addEventListener("turbo:load",()=>{document.querySelectorAll("#header-search-type .dropdown-menu li:has(~ .divider) a").forEach((r,f)=>{unsafeWindow.Mousetrap.bind(`alt+${f+1}`,()=>r.click()),unsafeWindow.Mousetrap(document.getElementById("header-search-query")).bind(`alt+${f+1}`,()=>r.click())})}),(r=>document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r())(()=>{const r=unsafeWindow.jQuery;r&&(r(document).on("auxclick",".btn-watch .view-all",function(f){f.preventDefault(),GM_openInTab(location.origin+r(this).attr("data-url"),{setParent:!0})}),r(document).on("mousedown mouseup","#header-search-autocomplete-results .selected",function(f){f.which===2&&!r(f.target).closest("a").length&&(f.type==="mousedown"?f.preventDefault():(unsafeWindow.searchModifierKey=!0,r(this).trigger("click")))}))}),document.addEventListener("keydown",r=>{r.ctrlKey&&r.key==="Enter"&&r.target.closest?.("#header-search-query")&&(r.preventDefault(),r.stopPropagation(),r.target.dispatchEvent(new KeyboardEvent("keydown",{key:"Enter",keyCode:13,metaKey:!0,bubbles:!0,cancelable:!0})))},{capture:!0}),(r=>document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r())(()=>{const r=unsafeWindow.jQuery;r&&r(document).on("ajaxSuccess",(f,w,p)=>{if(p.url.endsWith("/rate")){const m=new URLSearchParams(p.data),[o,n,d]=["type","trakt_id","stars"].map(s=>m.get(s));unsafeWindow[o+"s"].ratings[n]=d,unsafeWindow.compressedCache.set(`ratings_${o}s`,unsafeWindow[o+"s"].ratings),unsafeWindow.addOverlays()}else if(p.url.endsWith("/rate/remove")){const m=new URLSearchParams(p.data),o=m.get("type");unsafeWindow.compressedCache.set(`ratings_${o}s`,unsafeWindow[o+"s"].ratings),unsafeWindow.addOverlays()}})}),GM_addStyle(`
.personal-list .list-description {
  overflow-wrap: anywhere;
}
`),(r=>document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r())(()=>{if(!unsafeWindow.jQuery)return;const r=Object.getOwnPropertyDescriptors(unsafeWindow.jQuery.fn.chosen),f=Object.getOwnPropertyDescriptor(unsafeWindow.jQuery.fn,"chosen"),w=f.value;f.value=function(...p){if(this.attr("id")==="filter-network_ids"&&(p[0].max_shown_results=200),/iP(od|hone)|IEMobile|Windows Phone|BlackBerry|BB10|Android.*Mobile/i.test(unsafeWindow.navigator.userAgent)){Object.defineProperty(unsafeWindow.navigator,"userAgent",{get:()=>"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36",configurable:!0});try{return w.apply(this,p)}finally{delete unsafeWindow.navigator.userAgent}}else return w.apply(this,p)},Object.defineProperty(unsafeWindow.jQuery.fn,"chosen",f),Object.entries(r).forEach(([p,m])=>!["length","name","prototype"].includes(p)&&Object.defineProperty(unsafeWindow.jQuery.fn.chosen,p,m))}),(r=>document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r())(()=>{const r=unsafeWindow.jQuery;r&&r(document).on("ajaxSend",(f,w,p)=>{if(/\/lists\/[\d]+\/like/.test(p.url)){const m=new URLSearchParams(p.data).get("trakt_id"),o=r(`[data-list-id="${m}"] > .like .count-number`),n=o.text(),d=p.url.includes("/remove");r(document).one("ajaxSuccess",(s,g,l)=>{p.url===l.url&&o.text(unsafeWindow.numeral(n)[d?"subtract":"add"](1).format("0,0"))})}})}),GM_addStyle(`
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
`);const t=()=>{unsafeWindow.jQuery('.readmore:not([id^="rmjs-"])').filter((f,w)=>unsafeWindow.jQuery(w).height()>350).readmore({embedCSS:!1,collapsedHeight:300,speed:200,moreLink:'<a href="#">Read more...</a>',lessLink:'<a href="#">Read less...</a>',afterToggle:(f,w,p)=>w.closest("#sortable-grid").length&&unsafeWindow.$grid?.isotope()}),requestAnimationFrame(()=>unsafeWindow.$grid?.isotope())};Object.defineProperty(unsafeWindow,"renderReadmore",{get:()=>t,set:()=>{},configurable:!0}),GM_addStyle(`
#info-wrapper .season-links .links {
  overflow-x: auto !important;
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
`),(r=>document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r())(()=>{unsafeWindow.jQuery&&(unsafeWindow.jQuery.fn.mCustomScrollbar=function(){return this})}),document.addEventListener("turbo:load",()=>{document.querySelector("#info-wrapper .season-links .links .selected")?.scrollIntoView({block:"nearest",inline:"start"})},{capture:!0}),document.addEventListener("turbo:load",()=>{/^\/people\/[^\/]+$/.test(location.pathname)&&unsafeWindow.jQuery?.("#filter-fade-hide .dropdown-menu li.typer:is(.season, .episode, .person) a.selected").removeClass("selected")},{capture:!0}),window.addEventListener("turbo:load",()=>unsafeWindow.jQuery?.(".feed-icon.csv").off("click")),GM_addStyle(`
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
`),(r=>document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r())(()=>{unsafeWindow.jQuery?.(document).on("ajaxSuccess",(r,f,w)=>{w.url.endsWith("/dashboard/schedule")&&unsafeWindow.jQuery("#schedule-wrapper .btn-watch-now:not([data-source-counts])").attr("data-source-counts","{}"),/\/(dashboard\/on_deck|progress_item\/watched)\/\d+$/.test(w.url)&&unsafeWindow.posterGridTooltips?.()})}),GM_addStyle(`
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
`),document.addEventListener("click",r=>{r.target.closest(".toggle-feeds")?(r.stopPropagation(),document.querySelector(".toggle-feeds-wrapper")?.classList.toggle("open")):r.target.closest(".toggle-subnav-options")&&(r.stopPropagation(),document.querySelector(".toggle-subnav-wrapper")?.classList.toggle("open"))},{capture:!0}),(r=>document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r())(()=>{["remove","intersection","move","uniq"].forEach(r=>{const f=Object.getOwnPropertyDescriptor(Array.prototype,r);f&&(f.enumerable=!1,Object.defineProperty(Array.prototype,r,f))})}),GM_addStyle(`
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
`)})("Trakt.tv | Bug Fixes And Optimizations"),gmStorage.cs1u5z40&&(async C=>{"use strict";let t,r,f,w,p,m,o,n,d;Chart.defaults.borderColor="rgb(44 44 44 / 0.5)";const s=new Intl.NumberFormat("en",{notation:"compact",maximumFractionDigits:1});s.formatTLC=c=>s.format(c).toLowerCase(),k(),document.addEventListener("turbo:load",async()=>{/^\/shows\/[^/]+\/seasons\/[^/]+$/.test(location.pathname)&&(t??=unsafeWindow.jQuery,r??=unsafeWindow.userscriptTraktApiWrapper,t&&(f=t("#seasons-episodes-sortable"),f.length&&(w=location.pathname.includes("/seasons/"),p=!location.pathname.includes("/seasons/0"),m=w?c=>`${c.seasonNum}x${String(c.episodeNum).padStart(2,"0")} ${c.watched?"\u2714":"\u2718"}`:c=>`S. ${c.seasonNum} ${c.watched?c.watched==100?"\u2714":`(${c.watched}%)`:"\u2718"}`,o=null,n=[],d=!0,!(!w&&+t(".season-count").text().split(" ")[0]<4||location.pathname.includes("/alternate/")&&location.pathname.split("/").filter(Boolean).length<6)&&(f.on("arrangeComplete",()=>{f.data("isotope")&&(o?l():g())}),t(document).off("ajaxSuccess.userscript48372").on("ajaxSuccess.userscript48372",(c,b,e)=>{e.url.includes("/rate")&&o&&l()})))))},{capture:!0});function g(){const c=t('<div id="seasons-episodes-chart-wrapper"><canvas></canvas></div>').insertBefore(f).children()[0];o=new Chart(c.getContext("2d"),{type:"line",data:_(),options:v()});const b=new IntersectionObserver(e=>{e.forEach(a=>{a.isIntersecting&&(b.disconnect(),document.hidden?t(document).one("visibilitychange",l):l())})},{threshold:1});b.observe(c),c.addEventListener("click",e=>{const a=o.getElementsAtEventForMode(e,"nearest",{axis:"x",intersect:!1},!0);if(!a.length)return;const i=a.sort((u,h)=>Math.abs(u.element.y-e.layerY)-Math.abs(h.element.y-e.layerY))[0];if(Math.abs(i.element.y-e.layerY)<10){const u=`${n[i.index].urlFull}${i.datasetIndex===3?"/comments":""}`;GM_openInTab(u,{active:!0})}else o.isZoomedOrPanned()&&o.resetZoom("active")})}async function l(){const c=await y();JSON.stringify(n)!==JSON.stringify(c)&&(n=c,o.data=_(),o.options=v(),o.update(),d&&(d=!1))}function y(){const c=f.data("isotope").filteredItems.filter(b=>p?b.element.dataset.seasonNumber!=="0":!0).map(async b=>{const e={generalRating:b.sortData.percentage,votes:b.sortData.votes,watchers:b.sortData.watchers,episodeNum:b.element.dataset.number||null,seasonNum:b.element.dataset.seasonNumber,urlFull:t(b.element).find('meta[itemprop="url"]').attr("content"),personalRating:t(b.element).find(".corner-rating > .text").text()||null,watched:t(b.element).find("a.watch.selected").attr("data-percentage")??0,releaseDate:t(b.element).find(".percentage").attr("data-earliest-release-date")};if(w)e.mainTitle=t(b.element).find(".under-info .main-title").text(),e.comments=t(b.element).find('.episode-stats > a[data-original-title="Comments"]').text()||0;else if(e.mainTitle=t(b.element).find('div[data-type="season"] .titles-link h3').text(),r)e.comments=(await r.seasons.comments({id:b.element.dataset.showId,season:e.seasonNum,limit:1})).item_count;else{const a=await fetch(b.element.dataset.url+".json");if(!a.ok)throw new Error(`XHR for: ${a.url} failed with status: ${a.status}`);e.comments=(await a.json()).stats.comment_count}return e});return Promise.all(w?c:c.reverse())}function x(c,b,e,...a){if(!c)return a.pop().color;const{ctx:i,chartArea:u,scales:h}=c.chart;if(u){if(i[b]??={},!i[b].gradient||i[b].height!==u.height||i[b].yAxisMin!==h[e].min||i[b].yAxisMax!==h[e].max){i[b].height=u.height,i[b].yAxisMin=h[e].min,i[b].yAxisMax=h[e].max;let $=h[e].max-h[e].min;$=$?h[e].max/$:1,$=u.bottom*$,i[b].gradient=i.createLinearGradient(0,$,0,u.top),a.forEach(S=>i[b].gradient.addColorStop(S.offset,S.color))}return i[b].gradient}}function _(){return{labels:n.map(m),datasets:[{label:"Personal Rating",data:n.map(c=>c.personalRating?c.personalRating*10:null),yAxisID:"yAxisRating",borderColor:c=>x(c,"_ratingPersonal","yAxisRating",{offset:0,color:"rgb(97 97 97 / 0.6)"},{offset:.1,color:"rgb(97 97 97 / 0.6)"},{offset:1,color:"rgb(175 2 0)"}),backgroundColor:c=>x(c,"_ratingPersonal","yAxisRating",{offset:0,color:"rgb(97 97 97 / 0.6)"},{offset:.1,color:"rgb(97 97 97 / 0.6)"},{offset:1,color:"rgb(175 2 0)"})},{label:"General Rating",data:n.map(c=>c.generalRating),yAxisID:"yAxisRating",fill:{target:"-1",above:`rgb(255 0 0 / ${t("body").hasClass("dark-knight")?.15:.3})`,below:`rgb(0 255 0 / ${t("body").hasClass("dark-knight")?.15:.3})`},borderColor:c=>x(c,"_ratingGeneral","yAxisRating",{offset:0,color:"rgb(97 97 97 / 0.6)"},{offset:.1,color:"rgb(97 97 97 / 0.6)"},{offset:1,color:"rgb(225 31 117)"}),backgroundColor:c=>x(c,"_ratingGeneral","yAxisRating",{offset:0,color:"rgb(97 97 97 / 0.6)"},{offset:.1,color:"rgb(97 97 97 / 0.6)"},{offset:1,color:"rgb(225 31 117)"})},{label:"Watchers",data:n.map(c=>c.watchers),yAxisID:"yAxisWatchers",borderColor:c=>x(c,"_watchers","yAxisWatchers",{offset:0,color:"rgb(154 67 201 / 0.2)"},{offset:1,color:"rgb(154 67 201)"}),backgroundColor:c=>x(c,"_watchers","yAxisWatchers",{offset:0,color:"rgb(154 67 201 / 0.2)"},{offset:1,color:"rgb(154 67 201)"})},{label:"Comments",data:n.map(c=>c.comments),yAxisID:"yAxisComments",borderColor:c=>x(c,"_comments","yAxisComments",{offset:0,color:"rgb(54 157 226 / 0.2)"},{offset:1,color:"rgb(54 157 226)"}),backgroundColor:c=>x(c,"_comments","yAxisComments",{offset:0,color:"rgb(54 157 226 / 0.2)"},{offset:1,color:"rgb(54 157 226)"})}]}}function v(){return{responsive:!0,maintainAspectRatio:!1,interaction:{mode:"nearest",axis:"x",intersect:!1},animation:{delay:c=>c.type==="data"&&c.mode==="default"?(d?500:0)+c.dataIndex*(750/Math.max(n.length-1,1))+c.datasetIndex*100:0},scales:{x:{offset:!0},yAxisRating:{type:"linear",position:"left",offset:!0,suggestedMin:60,max:100,title:{display:!0,text:"Rating"},grid:{color:c=>c.tick.value%10?Chart.defaults.borderColor:"rgb(55 55 55)"},ticks:{callback:c=>`${c}%`}},yAxisWatchers:{type:"linear",position:"right",offset:!0,min:0,suggestedMax:10,title:{display:!0,text:"Watchers"},grid:{drawOnChartArea:!1},ticks:{callback:c=>s.formatTLC(c)}},yAxisComments:{type:"linear",position:"right",offset:!0,min:0,suggestedMax:10,title:{display:!0,text:"Comments"},grid:{drawOnChartArea:!1}}},plugins:{tooltip:{usePointStyle:!0,boxPadding:5,backgroundColor:"rgb(0 0 0 / 0.5)",caretSize:10,padding:{x:18,y:6},titleFont:{size:13,weight:"bold"},callbacks:{title:c=>{let b=n[c[0].parsed.x].mainTitle;return b=b.length>20?b.slice(0,20).trim()+"...":b,`${c[0].label}${b?`
${b}`:""}`},label:c=>{const b=c.parsed.x,e=c.parsed.y,a=unsafeWindow.userscriptAvgSeasonEpisodeRatings;return c.datasetIndex===0?`${e/10}${a?.personal?.average?`  (avg: ${a.personal.average.toFixed(1)})`:""}`:c.datasetIndex===1?`${e}%  (${s.formatTLC(n[b].votes)} v.)${a?.general?`  (avg: ${a.general.average?Math.round(a.general.average):"--"}%)`:""}`:c.datasetIndex===2?`${s.formatTLC(e)}${n[0].watchers?`  (${Math.round(e*100/n[0].watchers)}%)`:""}`:`${e}`},labelColor:c=>({borderColor:c.dataset.borderColor(),backgroundColor:c.dataset.backgroundColor()}),footer:c=>{const b=n[c[0].parsed.x].releaseDate;return b?unsafeWindow.formatDate?.(b)||b:void 0}}},legend:{labels:{usePointStyle:!0,filter:(c,b)=>b.datasets[c.datasetIndex].data.some(e=>e!==null)}},filler:{propagate:!1},zoom:{zoom:{mode:"x",drag:{enabled:!0,threshold:0}},limits:{x:{minRange:8}}}}}}function k(){GM_addStyle(`
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
  `)}})("Trakt.tv | Charts - Seasons"),gmStorage.f785bub0&&(async C=>{"use strict";const t={_defaults:{title:(typeof C<"u"?C:GM_info.script.name).replace("Trakt.tv","Userscript"),toast:!0,toastrOpt:{positionClass:"toast-top-right",timeOut:1e4,progressBar:!0},toastrStyles:"#toast-container#toast-container a { color: #fff !important; border-bottom: dotted 1px #fff; }"},_print(_,v,k="",c={}){const{title:b=this._defaults.title,toast:e=this._defaults.toast,toastrOpt:a,toastrStyles:i="",consoleStyles:u="",data:h}=c,$=`${k}${h!==void 0?" See console for details.":""}<style>${this._defaults.toastrStyles+i}</style>`;console[_](`%c${b}: ${k}`,u,...h!==void 0?[h]:[]),e&&unsafeWindow.toastr?.[v]($,b,{...this._defaults.toastrOpt,...a})},info(_,v){this._print("info","info",_,v)},success(_,v){this._print("info","success",_,{consoleStyles:"color:#00c853;",...v})},warning(_,v){this._print("warn","warning",_,v)},error(_,v){this._print("error","error",_,v)}},r={logApiRequests:!1,apiUrl:"https://api.trakt.tv",app:{},auth:{},...GM_getValue("traktApiWrapper")};GM_setValue("traktApiWrapper",r);const f=document.cookie.match(/(?:^|; )trakt_userslug=([^;]*)/)?.[1];let w=Promise.resolve(),p=Promise.resolve(),m=Promise.resolve(),o;f&&(unsafeWindow.userscriptTraktApiWrapper=o=y(x()));async function n(_){const v=Object.groupBy(Object.entries(_),([e])=>e.startsWith("_")?"opts":"params"),k=Object.fromEntries(v.opts??[]),c=Object.fromEntries(v.params??[]);Object.assign(r,GM_getValue("traktApiWrapper"));const b={method:k._method,...k._revalidate!=null&&{revalidate:!!k._revalidate},responseType:"json",headers:{"content-type":"application/json","user-agent":"TraktApiWrapper/v1","trakt-api-version":"2"}};return b.url=r.apiUrl+k._path.replaceAll(/:(\?)?(\w+)/g,(e,a,i)=>{if(c[i]!=null)return delete c[i],_[i];if(a)return"";throw new Error(`Missing mandatory path parameter: ${i}`)}),/GET|DELETE/.test(k._method)?b.url=b.url+(Object.keys(c).length?`?${new URLSearchParams(c)}`:""):/POST|PUT/.test(k._method)&&(b.data=JSON.stringify(c)),await p,(!r.app.clientId||!r.app.clientSecret||!r.app.redirectUri)&&(p=g(),await p),b.headers["trakt-api-key"]=r.app.clientId,k._auth&&(await m,(!r.auth.accessToken||!r.auth.expiresAt||r.auth.expiresAt<Date.now()+300*1e3||r.auth.userslug!==f)&&(m=l(),await m),b.headers.authorization=`Bearer ${r.auth.accessToken}`),k._auth&&k._method!=="GET"?new Promise(a=>{w=w.then(()=>{const i=d(b,{_retry:{limit:5,req_delay:1100,resp_delay:1100},...k});return a(i),new Promise(u=>{setTimeout(()=>i.finally(u),1100)})})}):d(b,k)}function d(_,v){return GM.xmlHttpRequest(_).then(k=>{if(r.logApiRequests&&t.info(`${_.method}: ${_.url}`,{toast:!1,data:{req:_,resp:k}}),k.parsedTraktHeaders=s(k.responseHeaders),k.status>=200&&k.status<300)return v._meta?{data:k.response,meta:k.parsedTraktHeaders}:k.response;if(k.status===429&&v._retry?.limit){const c={...v,_retry:{limit:v._retry.limit-1,req_delay:v._retry.req_delay*2}};return new Promise(b=>setTimeout(()=>b(d(_,c)),v._retry.req_delay)).then(b=>new Promise(e=>setTimeout(()=>e(b),v._retry.resp_delay)))}throw k.status===401&&!k.parsedTraktHeaders.private_user&&(t.warning("Auth tokens might be invalid and have been cleared.",{data:r.auth}),r.auth={},GM_setValue("traktApiWrapper",r)),k.status===403&&(t.warning("Client credentials might be invalid and have been cleared.",{data:r}),r.app={id:r.app.id},r.auth={},GM_setValue("traktApiWrapper",r)),k})}function s(_){const v=_.split(/\r?\n/).map(c=>c.split(":")).map(([c,b])=>[c.trim().toLowerCase(),b?.trim()]),k=v.find(([c])=>c==="access-control-expose-headers")[1].toLowerCase().split(",");return Object.fromEntries(v.filter(([c])=>k.includes(c)).map(([c,b])=>[(c.startsWith("x-")?c.slice(2):c).replaceAll("-","_"),b==="true"?!0:b==="false"?!1:/^-?\d*\.?\d+$/.test(b)?+b:b]))}async function g(){try{t.info("No valid client credentials found. Checking for matching application..");const _="Trakt API Wrapper for Userscripts";let v;const k=await fetch("/oauth/applications").then(b=>b.text()).then(b=>new DOMParser().parseFromString(b,"text/html")),c=[...k.querySelectorAll('#authorized-applications > .row:has(.label-success) h4 a[href^="/oauth/applications/"]')].find(b=>{const e=r.app.id?b.getAttribute("href").endsWith(r.app.id):!1,a=b.textContent.trim().toLowerCase()===_.toLowerCase();return e||a});if(c&&(v=await fetch(c.getAttribute("href")).then(b=>b.text()).then(b=>new DOMParser().parseFromString(b,"text/html"))),!v){const b=new FormData;[["authenticity_token",k.querySelector('head meta[name="csrf-token"]').content],["doorkeeper_application[name]",_],["doorkeeper_application[description]","A userscript which provides authenticated Trakt API access to other userscripts. https://github.com/Fenn3c401/Trakt.tv-Userscript-Collection"],["doorkeeper_application[redirect_uri]","https://trakt.tv/dashboard"],["doorkeeper_application[origins]","https://trakt.tv"],["doorkeeper_application[icon]",new Blob([],{type:"application/octet-stream"}),""],["doorkeeper_application[checkin]","0"],["doorkeeper_application[checkin]","1"],["doorkeeper_application[scrobble]","0"],["doorkeeper_application[scrobble]","1"],["commit","Save App"]].forEach(a=>b.append(...a));const e=await GM.xmlHttpRequest({url:"/oauth/applications",method:"POST",data:b,headers:{referer:"https://trakt.tv/oauth/applications/new"}});e.status>=200&&e.status<300&&(v=new DOMParser().parseFromString(e.responseText,"text/html"),t.info(`No matching application found. New Trakt API application has been created. <a href="${e.finalUrl}" target="_blank">${e.finalUrl}</a>`))}GM_setValue("traktApiWrapper",Object.assign(r,{app:{clientId:v.querySelector("#authorized-applications .credentials:nth-child(1 of .credentials) code").textContent,clientSecret:v.querySelector("#authorized-applications .credentials:nth-child(2 of .credentials) code").textContent,redirectUri:v.querySelector(".redirect-uris code").textContent,id:+v.querySelector('.btn.update[href$="edit"]').getAttribute("href").match(/\d+/)[0]}})),t.success("Successfully fetched client credentials!",{data:r.app})}catch(_){throw t.error("Failed to fetch client credentials!"),_}}async function l(){try{const _=!r.auth.refreshToken||r.auth.userslug!==f;let v;if(_){t.info("No valid refresh token found. Authorizing application..");const c=new URLSearchParams({response_type:"code",client_id:r.app.clientId,redirect_uri:r.app.redirectUri}),b=`${r.apiUrl.replace(/api[.-]/,"")}/oauth/authorize?${c}`,e=await fetch(b).then(i=>i.text()).then(i=>new DOMParser().parseFromString(i,"text/html")),a=await GM.xmlHttpRequest({method:"POST",url:"/oauth/authorize",headers:{referer:b},data:new URLSearchParams([["authenticity_token",e.querySelector('head meta[name="csrf-token"]').content],["client_id",r.app.clientId],["redirect_uri",r.app.redirectUri],["state",""],["response_type","code"],["response_mode","query"],["scope","public"],["nonce",""],["code_challenge",""],["code_challenge_method",""],["commit","Yes"]])});a.status>=200&&a.status<300?(v=new URL(a.finalUrl).searchParams.get("code"),t.success("Application successfully authorized!",{data:{code:v}})):(r.app={id:r.app.id},GM_setValue("traktApiWrapper",r),t.warning("Client credentials might be invalid and have been cleared."))}const k=await o.oauth.get({client_id:r.app.clientId,client_secret:r.app.clientSecret,redirect_uri:r.app.redirectUri,grant_type:_?"authorization_code":"refresh_token",..._?{code:v}:{refresh_token:r.auth.refreshToken}});GM_setValue("traktApiWrapper",Object.assign(r,{auth:{accessToken:k.access_token,expiresAt:(k.created_at+k.expires_in)*1e3,refreshToken:k.refresh_token,userslug:f}}))}catch(_){throw t.error("Failed to fetch authentication tokens!"),_}}function y(_,v){if(_._path=(v??"")+(_._path??""),_._method)return k=>n({..._,...k});for(const k in _)k.startsWith("_")||(_[k]=y(_[k],_._path));return delete _._path,_}function x(){return{oauth:{_path:"/oauth",get:{_method:"POST",_path:"/token"},revoke:{_method:"POST",_path:"/revoke"}},calendars:{_path:"/calendars",my:{_path:"/my",shows:{_method:"GET",_path:"/shows/:?start_date/:?days",_auth:!0},new_shows:{_method:"GET",_path:"/shows/new/:?start_date/:?days",_auth:!0},season_premieres:{_method:"GET",_path:"/shows/premieres/:?start_date/:?days",_auth:!0},finales:{_method:"GET",_path:"/shows/finales/:?start_date/:?days",_auth:!0},movies:{_method:"GET",_path:"/movies/:?start_date/:?days",_auth:!0},streaming:{_method:"GET",_path:"/streaming/:?start_date/:?days",_auth:!0},dvd:{_method:"GET",_path:"/dvd/:?start_date/:?days",_auth:!0}},all:{_path:"/all",shows:{_method:"GET",_path:"/shows/:?start_date/:?days"},new_shows:{_method:"GET",_path:"/shows/new/:?start_date/:?days"},season_premieres:{_method:"GET",_path:"/shows/premieres/:?start_date/:?days"},finales:{_method:"GET",_path:"/shows/finales/:?start_date/:?days"},movies:{_method:"GET",_path:"/movies/:?start_date/:?days"},streaming:{_method:"GET",_path:"/streaming/:?start_date/:?days"},dvd:{_method:"GET",_path:"/dvd/:?start_date/:?days"}}},checkin:{_path:"/checkin",add:{_method:"POST",_auth:!0},remove:{_method:"DELETE",_auth:!0}},certifications:{_method:"GET",_path:"/certifications/:type"},comments:{_path:"/comments",comment:{add:{_method:"POST",_auth:!0},get:{_method:"GET",_path:"/:id"},update:{_method:"PUT",_path:"/:id",_auth:!0},remove:{_method:"DELETE",_path:"/:id",_auth:!0}},replies:{_path:"/:id/replies",get:{_method:"GET"},add:{_method:"POST",_auth:!0}},item:{_method:"GET",_path:"/:id/item"},likes:{_path:"/:id",get:{_method:"GET",_path:"/likes"},add:{_method:"POST",_path:"/like",_auth:!0},remove:{_method:"DELETE",_path:"/like",_auth:!0}},trending:{_method:"GET",_path:"/trending/:?comment_type/:?type"},recent:{_method:"GET",_path:"/recent/:?comment_type/:?type"},updates:{_method:"GET",_path:"/updates/:?comment_type/:?type"}},countries:{_method:"GET",_path:"/countries/:type"},genres:{_method:"GET",_path:"/genres/:type"},languages:{_method:"GET",_path:"/languages/:type"},lists:{_path:"/lists",trending:{_method:"GET",_path:"/trending/:?type"},popular:{_method:"GET",_path:"/popular/:?type"},list:{_path:"/:id",get:{_method:"GET"},items:{_method:"GET",_path:"/items/:?type/:?sort_by/:?sort_how"},comments:{_method:"GET",_path:"/comments/:?sort"},likes:{get:{_method:"GET",_path:"/likes"},add:{_method:"POST",_path:"/like",_auth:!0},remove:{_method:"DELETE",_path:"/like",_auth:!0}}}},movies:{_path:"/movies",trending:{_method:"GET",_path:"/trending"},popular:{_method:"GET",_path:"/popular"},favorited:{_method:"GET",_path:"/favorited/:?period"},played:{_method:"GET",_path:"/played/:?period"},watched:{_method:"GET",_path:"/watched/:?period"},collected:{_method:"GET",_path:"/collected/:?period"},anticipated:{_method:"GET",_path:"/anticipated"},boxoffice:{_method:"GET",_path:"/boxoffice"},updates:{_method:"GET",_path:"/updates/:?start_date"},updated_ids:{_method:"GET",_path:"/updates/id/:?start_date"},summary:{_method:"GET",_path:"/:id"},aliases:{_method:"GET",_path:"/:id/aliases"},releases:{_method:"GET",_path:"/:id/releases/:?country"},translations:{_method:"GET",_path:"/:id/translations/:?language"},comments:{_method:"GET",_path:"/:id/comments/:?sort"},lists:{_method:"GET",_path:"/:id/lists/:?type/:?sort"},people:{_method:"GET",_path:"/:id/people"},ratings:{_method:"GET",_path:"/:id/ratings"},related:{_method:"GET",_path:"/:id/related"},stats:{_method:"GET",_path:"/:id/stats"},studios:{_method:"GET",_path:"/:id/studios"},watching:{_method:"GET",_path:"/:id/watching"},videos:{_method:"GET",_path:"/:id/videos"},refresh:{_method:"POST",_path:"/:id/refresh",_auth:!0}},networks:{_method:"GET",_path:"/networks"},notes:{_path:"/notes",add:{_method:"POST",_auth:!0},get:{_method:"GET",_path:"/:id",_auth:!0},update:{_method:"PUT",_path:"/:id",_auth:!0},remove:{_method:"DELETE",_path:"/:id",_auth:!0},item:{_method:"GET",_path:"/:id/item"}},people:{_path:"/people",updates:{_method:"GET",_path:"/updates/:?start_date"},updated_ids:{_method:"GET",_path:"/updates/id/:?start_date"},summary:{_method:"GET",_path:"/:id"},movies:{_method:"GET",_path:"/:id/movies"},shows:{_method:"GET",_path:"/:id/shows"},lists:{_method:"GET",_path:"/:id/lists/:?type/:?sort"},refresh:{_method:"POST",_path:"/:id/refresh",_auth:!0}},recommendations:{_path:"/recommendations",movies:{_path:"/movies",get:{_method:"GET",_auth:!0},hide:{_method:"DELETE",_path:"/:id",_auth:!0}},shows:{_path:"/shows",get:{_method:"GET",_auth:!0},hide:{_method:"DELETE",_path:"/:id",_auth:!0}}},scrobble:{_path:"/scrobble",start:{_method:"POST",_path:"/start",_auth:!0},stop:{_method:"POST",_path:"/stop",_auth:!0}},search:{_path:"/search",text:{_method:"GET",_path:"/:type"},id:{_method:"GET",_path:"/:id_type/:id"}},shows:{_path:"/shows",trending:{_method:"GET",_path:"/trending"},popular:{_method:"GET",_path:"/popular"},favorited:{_method:"GET",_path:"/favorited/:?period"},played:{_method:"GET",_path:"/played/:?period"},watched:{_method:"GET",_path:"/watched/:?period"},collected:{_method:"GET",_path:"/collected/:?period"},anticipated:{_method:"GET",_path:"/anticipated"},updates:{_method:"GET",_path:"/updates/:?start_date"},updated_ids:{_method:"GET",_path:"/updates/id/:?start_date"},summary:{_method:"GET",_path:"/:id"},aliases:{_method:"GET",_path:"/:id/aliases"},certifications:{_method:"GET",_path:"/:id/certifications"},translations:{_method:"GET",_path:"/:id/translations/:?language"},comments:{_method:"GET",_path:"/:id/comments/:?sort"},lists:{_method:"GET",_path:"/:id/lists/:?type/:?sort"},progress:{_path:"/:id/progress",collection:{_method:"GET",_path:"/collection",_auth:!0},watched:{_method:"GET",_path:"/watched",_auth:!0},reset:{_method:"POST",_path:"/watched/reset",_auth:!0},undo_reset:{_method:"DELETE",_path:"/watched/reset",_auth:!0}},people:{_method:"GET",_path:"/:id/people"},ratings:{_method:"GET",_path:"/:id/ratings"},related:{_method:"GET",_path:"/:id/related"},stats:{_method:"GET",_path:"/:id/stats"},studios:{_method:"GET",_path:"/:id/studios"},watching:{_method:"GET",_path:"/:id/watching"},next_episode:{_method:"GET",_path:"/:id/next_episode"},last_episode:{_method:"GET",_path:"/:id/last_episode"},videos:{_method:"GET",_path:"/:id/videos"},refresh:{_method:"POST",_path:"/:id/refresh",_auth:!0}},seasons:{_path:"/shows/:id/seasons",summary:{_method:"GET"},season:{_method:"GET",_path:"/:season/info"},episodes:{_method:"GET",_path:"/:season"},translations:{_method:"GET",_path:"/:season/translations/:?language"},comments:{_method:"GET",_path:"/:season/comments/:?sort"},lists:{_method:"GET",_path:"/:season/lists/:?type/:?sort"},people:{_method:"GET",_path:"/:season/people"},ratings:{_method:"GET",_path:"/:season/ratings"},stats:{_method:"GET",_path:"/:season/stats"},watching:{_method:"GET",_path:"/:season/watching"},videos:{_method:"GET",_path:"/:season/videos"}},episodes:{_path:"/shows/:id/seasons/:season/episodes/:episode",summary:{_method:"GET"},translations:{_method:"GET",_path:"/translations/:?language"},comments:{_method:"GET",_path:"/comments/:?sort"},lists:{_method:"GET",_path:"/lists/:?type/:?sort"},people:{_method:"GET",_path:"/people"},ratings:{_method:"GET",_path:"/ratings"},stats:{_method:"GET",_path:"/stats"},watching:{_method:"GET",_path:"/watching"},videos:{_method:"GET",_path:"/videos"}},sync:{_path:"/sync",last_activities:{_method:"GET",_path:"/last_activities",_auth:!0},playback:{_path:"/playback",get:{_method:"GET",_path:"/:?type",_auth:!0},remove:{_method:"DELETE",_path:"/:id",_auth:!0}},collection:{_path:"/collection",get:{_method:"GET",_path:"/:type",_auth:!0},add:{_method:"POST",_auth:!0},remove:{_method:"POST",_path:"/remove",_auth:!0}},watched:{_method:"GET",_path:"/watched/:type",_auth:!0},history:{_path:"/history",get:{_method:"GET",_path:"/:?type/:?id",_auth:!0},add:{_method:"POST",_auth:!0},remove:{_method:"POST",_path:"/remove",_auth:!0}},ratings:{_path:"/ratings",get:{_method:"GET",_path:"/:?type/:?rating",_auth:!0},add:{_method:"POST",_auth:!0},remove:{_method:"POST",_path:"/remove",_auth:!0}},watchlist:{_path:"/watchlist",get:{_method:"GET",_path:"/:?type/:?sort_by/:?sort_how",_auth:!0},update:{_method:"PUT",_auth:!0},add:{_method:"POST",_auth:!0},remove:{_method:"POST",_path:"/remove",_auth:!0},reorder:{_method:"POST",_path:"/reorder",_auth:!0},update_item:{_method:"PUT",_path:"/:list_item_id",_auth:!0}},favorites:{_path:"/favorites",get:{_method:"GET",_path:"/:?type/:?sort_by/:?sort_how",_auth:!0},update:{_method:"PUT",_auth:!0},add:{_method:"POST",_auth:!0},remove:{_method:"POST",_path:"/remove",_auth:!0},reorder:{_method:"POST",_path:"/reorder",_auth:!0},update_item:{_method:"PUT",_path:"/:list_item_id",_auth:!0}}},users:{_path:"/users",settings:{_method:"GET",_path:"/settings",_auth:!0},requests:{_path:"/requests",following:{_method:"GET",_path:"/following",_auth:!0},get:{_method:"GET",_auth:!0},approve:{_method:"POST",_path:"/:id",_auth:!0},deny:{_method:"DELETE",_path:"/:id",_auth:!0}},saved_filters:{_method:"GET",_path:"/saved_filters/:?section",_auth:!0},hidden:{_path:"/hidden",get:{_method:"GET",_path:"/:section",_auth:!0},add:{_method:"POST",_path:"/:section",_auth:!0},remove:{_method:"POST",_path:"/:section/remove",_auth:!0}},profile:{_method:"GET",_path:"/:id"},likes:{_method:"GET",_path:"/:id/likes/:?type"},collection:{_method:"GET",_path:"/:id/collection/:type"},comments:{_method:"GET",_path:"/:id/comments/:?comment_type/:?type"},notes:{_method:"GET",_path:"/:id/notes/:?type"},lists:{_path:"/:id/lists",get:{_method:"GET"},create:{_method:"POST",_auth:!0},reorder:{_method:"POST",_path:"/reorder",_auth:!0},collaborations:{_method:"GET",_path:"/collaborations"}},list:{_path:"/:id/lists/:list_id",get:{_method:"GET"},update:{_method:"PUT",_auth:!0},delete:{_method:"DELETE",_auth:!0},likes:{get:{_method:"GET",_path:"/likes"},add:{_method:"POST",_path:"/like",_auth:!0},remove:{_method:"DELETE",_path:"/like",_auth:!0}},items:{_path:"/items",get:{_method:"GET",_path:"/:?type/:?sort_by/:?sort_how"},add:{_method:"POST",_auth:!0},remove:{_method:"POST",_path:"/remove",_auth:!0},reorder:{_method:"POST",_path:"/reorder",_auth:!0},update:{_method:"PUT",_path:"/:list_item_id",_auth:!0}},comments:{_method:"GET",_path:"/comments/:?sort"}},follow:{_path:"/:id/follow",add:{_method:"POST",_auth:!0},remove:{_method:"DELETE",_auth:!0}},followers:{_method:"GET",_path:"/:id/followers"},following:{_method:"GET",_path:"/:id/following"},friends:{_method:"GET",_path:"/:id/friends"},history:{_method:"GET",_path:"/:id/history/:?type/:?item_id"},ratings:{_method:"GET",_path:"/:id/ratings/:?type/:?rating"},watchlist:{_method:"GET",_path:"/:id/watchlist/:?type/:?sort_by/:?sort_how"},watchlist_comments:{_method:"GET",_path:"/:id/watchlist/comments/:?sort"},favorites:{_method:"GET",_path:"/:id/favorites/:?type/:?sort_by/:?sort_how",_auth:!0},favorites_comments:{_method:"GET",_path:"/:id/favorites/comments/:?sort"},watching:{_method:"GET",_path:"/:id/watching"},watched:{_method:"GET",_path:"/:id/watched/:type"},stats:{_method:"GET",_path:"/:id/stats"}}}}})("Trakt.tv | Trakt API Wrapper"),gmStorage.fyk2l3vj&&(async C=>{"use strict";let t,r;const f={_defaults:{title:(typeof C<"u"?C:GM_info.script.name).replace("Trakt.tv","Userscript"),toast:!0,toastrOpt:{positionClass:"toast-top-right",timeOut:1e4,progressBar:!0},toastrStyles:"#toast-container#toast-container a { color: #fff !important; border-bottom: dotted 1px #fff; }"},_print(d,s,g="",l={}){const{title:y=this._defaults.title,toast:x=this._defaults.toast,toastrOpt:_,toastrStyles:v="",consoleStyles:k="",data:c}=l,b=`${g}${c!==void 0?" See console for details.":""}<style>${this._defaults.toastrStyles+v}</style>`;console[d](`%c${y}: ${g}`,k,...c!==void 0?[c]:[]),x&&unsafeWindow.toastr?.[s](b,y,{...this._defaults.toastrOpt,..._})},info(d,s){this._print("info","info",d,s)},success(d,s){this._print("info","success",d,{consoleStyles:"color:#00c853;",...s})},warning(d,s){this._print("warn","warning",d,s)},error(d,s){this._print("error","error",d,s)}},w={...GM_getValue("enhancedTitleMetadata")};GM_setValue("enhancedTitleMetadata",w),n(),document.addEventListener("turbo:load",async()=>{if(!/^\/(shows|movies)\//.test(location.pathname)||(t??=unsafeWindow.jQuery,r??=unsafeWindow.userscriptTraktApiWrapper,!t))return;const d=t("#overview .additional-stats > li"),s=location.pathname.split("/").filter(Boolean);if(!d.length)return;const g=t("#summary-wrapper .year");g.parent().is("a")&&g.insertAfter(g.parent()),g.wrapAll(`<a href="/search/${s[0]}?years=${g.text().slice(0,4)}-${g.text().slice(-4)}"></a>`),t("#summary-wrapper div.certification").wrap(`<a href="${t("#external-link-imdb").attr("href").split("/episodes")[0]}/parentalguide"></a>`);const y=d.filter((u,h)=>t(h).find("label").text().toLowerCase()==="writers");y.find("label").wrap(`<a href="/search/${s[0]}?query=%22${y.find("a:not(.writers-expand)").get().map(u=>u.textContent).join("%22+%22")}%22&fields=people"></a>`);const x=d.filter(':has([itemprop="genre"])'),_=[];x.find('[itemprop="genre"]').each((u,h)=>{_[u]=t(h).text().toLowerCase().replaceAll(" ","-"),t(h).wrap(`<a href="/search/${s[0]}?genres=${_[u]}"></a>`)}),_.length>1&&x.find("label").wrap(`<a href="/search/${s[0]}?genres=+${_.join(",+")}"></a>`);const v=d.filter((u,h)=>t(h).find("label").text().toLowerCase()==="country");let k;if(v.length){const u=await p(),h=v.contents().get(-1)?.textContent;if(k=u[h],k){const $=unsafeWindow.watchnowAllCountries?.[k]?.image;$&&v.children().last().after(`<img class="country-flag" src="${$}">`),v.contents().filter((S,T)=>!t(T).is("meta, label")).wrapAll(`<a href="/search/${s[0]}?countries=${k}"></a>`)}else w.allCountriesMap=null,GM_setValue("enhancedTitleMetadata",w),f.error("Failed to match title country. Cached countries have been cleared. Reload page to try again.")}const c=d.filter((u,h)=>t(h).find("label").text().toLowerCase().startsWith("language")),b={};if(c.length){const u=await m(),h=Object.fromEntries(u);let $=c.contents().get(-1).textContent;if(u.forEach(([S,T],E)=>{const P=new RegExp(`${RegExp.escape(T)}(, |$)`);P.test($)&&(b[$.indexOf(T)]=S,$=$.replace(P,M=>" ".repeat(M.length)))}),$.trim())w.allLanguagesArrSorted=null,GM_setValue("enhancedTitleMetadata",w),f.error(`Failed to match all title languages (ORIGINAL: ${c.contents().get(-1).textContent} REMAINDER: ${$.trim()}). Cached languages have been cleared. Reload page to try again.`);else{const S=Object.values(b);c.contents().last().replaceWith(S.map(T=>`<a href="/search/${s[0]}?languages=${T}">${h[T]}</a>`).join(", ")),S.length>1&&c.find("label").wrap(`<a href="/search/${s[0]}?languages=+${S.join(",+")}"></a>`)}}const e=d.filter((u,h)=>t(h).find("label").text().toLowerCase().startsWith("network")),a=d.filter((u,h)=>/airs|aired|premiered/i.test(t(h).find("label").text())).first();if(e.length&&s[3]!=="all"){const u={},h=await o(),$=Object.fromEntries(h);let S=e.contents().get(-1).textContent;if(h.forEach(([T,{name:E,countryId:P}],M)=>{const G=new RegExp(`${RegExp.escape(E)}(, |$)`);G.test(S)&&(P===k||Object.hasOwn(b,P)||E!==h[M+1]?.[1].name)&&(u[S.indexOf(E)]=T,S=S.replace(G,W=>" ".repeat(W.length)))}),S.trim())w.allNetworksArrSorted=null,GM_setValue("enhancedTitleMetadata",w),f.error(`Failed to match all title networks (ORIGINAL: ${e.contents().get(-1).textContent} REMAINDER: ${S.trim()}). Cached networks have been cleared. Reload page to try again.`);else{const T=Object.values(u);e.contents().last().replaceWith(T.map(E=>`<a href="/search/shows?network_ids=${E}">${$[E].name}${$[E].countryId?` (${$[E].countryId.toUpperCase()})`:""}</a>`).join("")),T.length>1&&(e.find("label").wrap(`<a href="/search/shows?network_ids=${T.join(",")}"></a>`),t(`<a href onclick="$(this).hide(); $(this).next().show(); return false;"> + ${T.length-1} more</a>`).insertAfter(e.children().eq(1)).nextAll().wrapAll('<span style="display: none;"></span>')),e.find("a:not(:has(label), [onclick])").slice(1).before(", ")}}else if(a.text().includes(" on ")&&s[3]!=="all"){const u=await o(),h=a.contents().last().text().split(" on ")[1],$=h?u.find(([S,{name:T,countryId:E}],P)=>new RegExp(`${RegExp.escape(T)}(, |$)`).test(h)&&(E===k||Object.hasOwn(b,E)||T!==u[P+1]?.[1].name)):null;$?(a.contents().last().remove(),a.append(` on <a href="/search/shows?network_ids=${$[0]}">${$[1].name}${$[1].countryId?` (${$[1].countryId.toUpperCase()})`:""}</a>`)):(w.allNetworksArrSorted=null,GM_setValue("enhancedTitleMetadata",w),f.error(`Failed to match title network (${h}). Cached networks have been cleared. Reload page to try again.`))}const i=d.filter((u,h)=>t(h).find("label").text().toLowerCase().startsWith("studio"));if(i.length)if(r){let u=!1;const h=async function($){if(u)return;u=!0,$?.preventDefault(),unsafeWindow.showLoading?.();const S=await r[s[0]].studios({id:t(".summary-user-rating").attr(`data-${s[0].slice(0,-1)}-id`)}),T=S.map(E=>E.ids.trakt).join();if(unsafeWindow.hideLoading?.(),$){const E=`/search/${s[0]}?studio_ids=${t(this).find("label").length?T:S[0].ids.trakt}`;$.type==="click"?location.href=E:$.originalEvent.button===1&&GM_openInTab(location.origin+E,{setParent:!0})}i.children().eq(0).attr("href",`/search/${s[0]}?studio_ids=${T}`),i.children().eq(1).attr("href",`/search/${s[0]}?studio_ids=${S[0].ids.trakt}`),i.find(".studios-more").html(S.slice(1).map(E=>`, <a href="/search/${s[0]}?studio_ids=${E.ids.trakt}">${E.name}</a>`))};i.find("label").wrap(t('<a href="#"></a>').one("click auxclick",h)),i.contents().eq(1).wrap(t('<a href="#"></a>').one("click auxclick",h)),i.find(".studios-expand").one("click",()=>h())}else{const u=new Set,h=i.find(".studios-more"),$=i.find(".studios-expand"),S=h.text().split(", ").slice(1),T=+$.text().match(/\d+/)?.[0]||null,E=G=>fetch("/autocomplete/studios?query="+encodeURIComponent(G)).then(W=>W.json()).then(W=>Object.fromEntries(W.map(({label:L,value:A,tag:O})=>[L,+A,O?.toLowerCase()??null]).sort(([L,A,O],[H,R,I])=>L===H?(O&&(O===k||Object.hasOwn(b,O)))-(I&&(I===k||Object.hasOwn(b,I)))||R-A:0))),P=async function(G){G?.preventDefault(),t(this).off(),unsafeWindow.showLoading?.();const W=t(this).text(),L=await E(W),A=L[W];if(unsafeWindow.hideLoading?.(),A){u.add(A);const O=`/search/${s[0]}?studio_ids=${A}`;G&&(G.type==="click"?location.href=O:G.originalEvent.button===1&&GM_openInTab(location.origin+O,{setParent:!0})),t(this).attr("href",O)}else f.error("Failed to match title studio: "+W,{data:L})},M=async()=>{if(u.size>1)return;unsafeWindow.showLoading?.();const G=await Promise.all(S.map(L=>E(L).then(A=>[L,A])));let W=-1;unsafeWindow.hideLoading?.(),h.html(G.map(([L,A],O)=>{if(O<=W)return null;let H;for(let R=O;R<G.length;R++)R!==O&&(L+=", "+G[R][0]),A[L]&&(W=R,H=[L,A[L]]);if(H)return u.add(H[1]),`, <a href="/search/${s[0]}?studio_ids=${H[1]}">${H[0]}</a>`;throw f.error("Failed to match all title studios. Could not match: "+G[O][0],{data:A}),new Error("Failed to match all title studios.")}).join(""))};i.contents().eq(1).wrap(t('<a href="#"></a>').on("click auxclick",P)),T&&(T===1?h.text(", ").append(t(`<a href="#">${S.join(", ")}</a>`).on("click auxclick",P)):T===S.length?(h.empty(),S.forEach(G=>h.append(", ",t(`<a href="#">${G}</a>`).on("click auxclick",P)))):$.one("click",M),i.find("label").wrap('<a href="#"></a>').parent().on("click auxclick",async function(G){G.preventDefault(),t(this).off(),await Promise.all([...i.find('a[href="#"]:not(:has(label), .studios-expand)').get().map(L=>P.call(L)),M()]);const W=`/search/${s[0]}?studio_ids=${Array.from(u).join(",")}`;G.type==="click"?location.href=W:G.originalEvent.button===1&&GM_openInTab(location.origin+W,{setParent:!0}),t(this).attr("href",W)}))}},{capture:!0});async function p(){if(!w.allCountriesMap){const d=await fetch("/search/movies").then(s=>s.text()).then(s=>new DOMParser().parseFromString(s,"text/html"));w.allCountriesMap=JSON.stringify(Object.fromEntries(t(d).find("#filter-countries").children().get().map(s=>[t(s).text(),t(s).attr("value").toLowerCase()]))),GM_setValue("enhancedTitleMetadata",w)}return JSON.parse(w.allCountriesMap)}async function m(){if(!w.allLanguagesArrSorted){const d=await fetch("/search/movies").then(s=>s.text()).then(s=>new DOMParser().parseFromString(s,"text/html"));w.allLanguagesArrSorted=JSON.stringify(t(d).find("#filter-languages").children().get().map(s=>[t(s).attr("value"),t(s).text()]).sort(([,s],[,g])=>g.length-s.length)),GM_setValue("enhancedTitleMetadata",w)}return JSON.parse(w.allLanguagesArrSorted)}async function o(){if(!w.allNetworksArrSorted){const d=await fetch("/search/shows").then(g=>g.text()).then(g=>new DOMParser().parseFromString(g,"text/html")),s=new Intl.Collator;w.allNetworksArrSorted=JSON.stringify(t(d).find("#filter-network_ids").children().get().map(g=>t(g).text()?[+t(g).attr("value"),{name:t(g).text(),countryId:t(g).attr("data-tag")?.toLowerCase()}]:null).filter(Boolean).sort(([g,{name:l,countryId:y}],[x,{name:_,countryId:v}])=>_.length-l.length||s.compare(l,_)||(v&&1)-(y&&1)||x-g)),GM_setValue("enhancedTitleMetadata",w)}return JSON.parse(w.allNetworksArrSorted)}function n(){GM_addStyle(`
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
  `)}})("Trakt.tv | Enhanced Title Metadata"),gmStorage.kji85iek&&(async C=>{"use strict";let t;w(),document.addEventListener("turbo:load",()=>{t??=unsafeWindow.jQuery,t&&(unsafeWindow.ratingOverlay=r,f(),t(document).off("ajaxSuccess.userscript12944").on("ajaxSuccess.userscript12944",(p,m,o)=>{o.url.endsWith("/popular_lists")&&(f(),unsafeWindow.addOverlays())}))},{capture:!0});function r(p,m){if(!p.length){const o=p.end();o.closest(".personal-list").length&&o.hasClass("poster")&&(p=o)}p.find(".corner-rating").length||p.prepend(`<div class="corner-rating corner-rating-${m}"><div class="text">${m}</div></div>`)}function f(){t(".personal-list .poster[data-url]:not(:has(> a))").each(function(){t(this).children().wrapAll(`<a href="${t(this).attr("data-url")}"></a>`)})}unsafeWindow.userscriptAddLinksToListPreviewPosters=f;function w(){GM_addStyle(`
@media not (767px < width <= 991px) {
  .personal-list .poster .corner-rating {
    border-width: 0 24px 24px 0 !important;
  }
  .personal-list .poster .corner-rating > .text {
    height: 24px !important;
    width: 12px !important;
    right: -18px !important;
    font-size: 11px !important;
    line-height: 11px !important;
  }
}

.personal-list .poster.dropped-show .dropped-badge-wrapper {
  top: 50% !important; /* otherwise covers up summary page anchor tag */
  height: auto !important;
}
  `)}})("Trakt.tv | Enhanced List Preview Posters"),gmStorage.p2o98x5r&&(async C=>{"use strict";t(),document.addEventListener("turbo:load",()=>{if(!/^\/users\/[^\/]+\/lists$/.test(location.pathname))return;const r=unsafeWindow.jQuery;if(!r)return;const f=r("#sortable-grid"),w=f.children().length?r('<hr id="all-in-one-lists-view-spacer">').insertAfter(f):void 0,p=r('<button id="all-in-one-lists-view-btn" type="button">All-In-One Lists View</button>').insertAfter(w??f);p.on("click",async()=>{p.text("Loading...").prop("disabled",!0);const m=async l=>fetch(location.pathname+l).then(y=>y.text()).then(y=>r(new DOMParser().parseFromString(y,"text/html")).find(".personal-list"));let o=r((await Promise.all(["/collaborations","/liked","/liked/official"].map(m))).flatMap(l=>l.get()));const n=r(".personal-list"),d=n.map((l,y)=>r(y).attr("data-list-id")).get();if(o=o.filter((l,y)=>!d.includes(r(y).attr("data-list-id"))),!o.length){p.text("No other lists found.");return}const s=+n.last().attr("data-rank");o.each((l,y)=>r(y).attr("data-rank",s+l+1)),o.find(".btn-list-progress").click(function(){unsafeWindow.showLoading();const l=r(this).attr("data-list-id");l&&unsafeWindow.userSettings?.user.vip?unsafeWindow.redirect(unsafeWindow.userURL("progress?list="+l)):unsafeWindow.redirect("/vip/list-progress")}).end().find(".btn-list-subscribe").click(function(){unsafeWindow.showLoading();const l=r(this).attr("data-list-id");l&&unsafeWindow.userSettings?.user.vip?r.post(`/lists/${l}/subscribe`,function(y){unsafeWindow.redirect(y.url)}).fail(function(){unsafeWindow.hideLoading(),unsafeWindow.toastr.error("Doh! We ran into some sort of error.")}):unsafeWindow.redirect("/vip/calendars")}).end().find(".collaborations-deny").on("ajax:success",function(l,y){r("#collaborations-deny-"+y.id).children().addClass("trakt-icon-delete-thick"),r("#collaborations-approve-"+y.id).addClass("off"),r("#collaborations-block-"+y.id).addClass("off")});const g=r("#btn-list-edit-lists");g.hasClass("active")&&g.trigger("click"),g.hide(),f.append(o),w?.remove(),p.remove(),unsafeWindow.genericTooltips(),unsafeWindow.vipTooltips(),unsafeWindow.shareIcons(),unsafeWindow.convertEmojis(),unsafeWindow.userscriptAddLinksToListPreviewPosters?.(),unsafeWindow.addOverlays(),unsafeWindow.$grid?.isotope("insert",o),unsafeWindow.updateListsCount(),unsafeWindow.lazyLoadImages(),unsafeWindow.renderReadmore()})},{capture:!0});function t(){GM_addStyle(`
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
  `)}})("Trakt.tv | All-In-One Lists View"),gmStorage.pmdf6nr9&&(async C=>{"use strict";let t,r;const f=new Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:1});f.formatTLC=s=>f.format(s).toLowerCase(),d(),document.addEventListener("turbo:load",async()=>{if(!/^\/(shows|movies)\//.test(location.pathname)||(t??=unsafeWindow.jQuery,r??=unsafeWindow.userscriptTraktApiWrapper,!t))return;const s=t("#summary-wrapper"),g=s.find("#summary-ratings-wrapper"),l=g.find(".trakt-rating > a").attr("href");if(!l)return;const y=t('<div id="ratings-distribution-chart-wrapper"><canvas></canvas></div>').appendTo(s.find(".shadow-base")).find("canvas"),[x,_]=await Promise.all([w(l),p(s)]),v=()=>{new Chart(y[0].getContext("2d"),{type:"bar",data:o(x,_),options:n(x,g)})};document.hidden?t(document).one("visibilitychange",v):v()},{capture:!0});async function w(s){let g;if(r){const l=s.split("/").slice(1,-1),y=isNaN(l[1])?l[1]:t(".summary-user-rating").attr(`data-${l[0].slice(0,-1)}-id`),x=await r[l[4]??l[2]??l[0]].ratings({id:y,season:l[3],episode:l[5]});g={distribution:Object.values(x.distribution),votes:x.votes}}else{const l=await fetch(s),y=new DOMParser().parseFromString(await l.text(),"text/html");g={distribution:JSON.parse(t(y).find("#charts-wrapper script").text().match(/ratingsDistribution = (\[.*\])/)[1]),votes:t("#summary-ratings-wrapper").data("vote-count")}}return g.distribution.length===11&&(console.warn(GM_info.script.name.replace("Trakt.tv","Userscript")+": Malformed ratings distribution data.",g.distribution.toString()),g.distribution.shift()),g}function p(s){const g=s.find("> .full-screenshot"),l=async()=>{const y=g.css("background-image").match(/https.*webp/)?.[0];if(!y)return .5;const x=await GM.xmlHttpRequest({url:y,responseType:"blob",fetch:!0});if(x.status!==200)throw new Error(`XHR for: ${x.finalUrl} failed with status: ${x.status}`);const _=URL.createObjectURL(x.response),v=new Image;v.src=_,await v.decode(),URL.revokeObjectURL(_);const k=document.createElement("canvas");k.width=v.naturalWidth,k.height=v.naturalHeight;const c=k.getContext("2d");c.drawImage(v,0,0);const b=v.naturalWidth/4,e=v.naturalHeight/4,a=c.getImageData(3*b,2*e,b,e).data;let i=0,u=a.length/16;for(let h=0;h<a.length;h+=16)i+=(.299*a[h]+.587*a[h+1]+.114*a[h+2])/255;return i/u};return g.attr("style")?l():new Promise(y=>{new MutationObserver((x,_)=>{_.disconnect(),y(l())}).observe(g[0],{attributeFilter:["style"]})})}function m(s,g,l,...y){if(!s)return y.pop().color;const{ctx:x,chartArea:_,scales:v}=s.chart;if(_){if(x[g]??={},!x[g].gradient||x[g].height!==_.height||x[g].yAxisMin!==v[l].min||x[g].yAxisMax!==v[l].max){let k=v[l].max-v[l].min;k=k?v[l].max/k:1,k=_.bottom*k,x[g].gradient=x.createLinearGradient(0,k,0,_.top),y.forEach(c=>x[g].gradient.addColorStop(c.offset,c.color)),x[g].height=_.height,x[g].yAxisMin=v[l].min,x[g].yAxisMax=v[l].max}return x[g].gradient}}function o(s,g){return{labels:[...Array(10)].map((l,y)=>String(y+1)),datasets:[{label:"Votes",data:s.distribution,categoryPercentage:1,barPercentage:.97,backgroundColor:`rgba(${Array(3).fill(Math.min(g+.35,1)*255).join(", ")}, ${Math.min(g+.3,.7)})`,hoverBackgroundColor:l=>m(l,"_votes","y",{offset:0,color:`rgba(155, 66, 200, ${Math.min(g+.3,.7)})`},{offset:.9,color:`rgba(255, 0, 0, ${Math.min(g+.3,.7)})`})}]}}function n(s,g){return{responsive:!0,maintainAspectRatio:!1,minBarLength:2,interaction:{mode:"index",intersect:!1},animation:{delay:l=>l.type==="data"&&l.mode==="default"?250+l.dataIndex*(750/(s.distribution.length-1)):0},scales:{x:{display:!1},y:{display:!1,suggestedMax:10}},plugins:{tooltip:{displayColors:!1,backgroundColor:"rgba(0, 0, 0, 0.7)",caretSize:10,padding:{x:12,y:5},titleAlign:"center",titleMarginBottom:2,titleFont:{weight:"bold"},bodyAlign:"center",bodyColor:"rgb(170, 170, 170)",bodyFont:{size:11},footerAlign:"center",footerColor:l=>`hsl(0, ${l.tooltip.dataPoints[0].parsed.x*11}%, 35%)`,footerMarginTop:2,footerFont:{size:18},callbacks:{title:l=>{const y=l[0].label;return`${y} - ${unsafeWindow.ratingsText?.[y]}`},label:l=>{const y=l.parsed.y;return`${s.votes>0?(y*100/s.votes).toFixed(1):"--"}% (${f.formatTLC(y)} v.)`},footer:l=>{const y=g.find('.summary-user-rating > :not([style="display: none;"]) > [class*="rating-"]').first().attr("class")?.match(/rating-(\d+)/)?.[1];return l[0].parsed.x===y-1?"\u2764":""}}},legend:{display:!1}},onClick:(l,y)=>{if(!y.length)return;const x=y[0].index+1;g.find(".summary-user-rating:not(.popover-on)").trigger("click"),setTimeout(()=>t(`.needsclick.rating-${x}`).trigger("mouseover").trigger("click"),500)}}}function d(){GM_addStyle(`
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
  `)}})("Trakt.tv | Charts - Ratings Distribution"),gmStorage.swtn5c9q&&(async C=>{"use strict";let t,r,f;const w={_defaults:{title:(typeof C<"u"?C:GM_info.script.name).replace("Trakt.tv","Userscript"),toast:!0,toastrOpt:{positionClass:"toast-top-right",timeOut:1e4,progressBar:!0},toastrStyles:"#toast-container#toast-container a { color: #fff !important; border-bottom: dotted 1px #fff; }"},_print(e,a,i="",u={}){const{title:h=this._defaults.title,toast:$=this._defaults.toast,toastrOpt:S,toastrStyles:T="",consoleStyles:E="",data:P}=u,M=`${i}${P!==void 0?" See console for details.":""}<style>${this._defaults.toastrStyles+T}</style>`;console[e](`%c${h}: ${i}`,E,...P!==void 0?[P]:[]),$&&unsafeWindow.toastr?.[a](M,h,{...this._defaults.toastrOpt,...S})},info(e,a){this._print("info","info",e,a)},success(e,a){this._print("info","success",e,{consoleStyles:"color:#00c853;",...a})},warning(e,a){this._print("warn","warning",e,a)},error(e,a){this._print("error","error",e,a)}},p=(e,a)=>{const i=~~(e.progress/100*a/60),u=Math.round(e.progress/100*a%60),h=~~((1-e.progress/100)*a/60),$=Math.round((1-e.progress/100)*a%60);return`${e.progress.toFixed(1)}% (${i?`${i}h`:""}${u}m | -${h?`${h}h`:""}${$}m)`},m={},o={set:null,removeAll:null,renewAll:null};let n;location.pathname.includes("/progress/playback")&&document.body?.classList.add("playback"),b(),document.addEventListener("turbo:load",()=>{if(t??=unsafeWindow.jQuery,r??=unsafeWindow.Cookies,f??=unsafeWindow.userscriptTraktApiWrapper,!t||!r)return;if(!f){w.error('"Trakt API Wrapper" is not available. Please make sure you have it installed and/or enabled. Aborting..',{toast:!1});return}unsafeWindow.userscriptPbProgMan={set:d,remove:s,getAll:g,removeAll:l,renewAll:y,items:m},Object.entries(o).forEach(([a,i])=>{i!==null&&(GM_unregisterMenuCommand(i),o[a]=null)});const e=t(':is(.sidebar, .sidebar .btn-item-report):is([data-type="movie"], [data-type="episode"])').attr("data-url");e&&(o.set=GM_registerMenuCommand("PPM: Set New",()=>d(e))),location.pathname.includes("/progress/playback")&&t("body").addClass("playback"),new RegExp(`/users/(me|${r.get("trakt_userslug")})/progress`).test(location.pathname)&&v(),t(document).off("ajaxSuccess.userscript09213").on("ajaxSuccess.userscript09213",async(a,i,u,h)=>{if(u.url.includes("/me/last_activities")&&(!n||n!==h.movies.paused_at+h.episodes.paused_at?(g(),n=h.movies.paused_at+h.episodes.paused_at):t("#playback-progress-wrapper").length||(t("body").is(".show_progress.is-self.playback")&&await k(),_())),[/\/movies\/.*\/related_items$/,/\/shows\/.*\/recent_episodes$/,/\/dashboard\/(recently_watched|on_deck|recommendations\/movies|network_activies|list)$/,/\/users\/.*\/profile\/(recently_watched|most_watched\/movies|comments)$/].some($=>$.test(u.url))&&_(),u.url.endsWith("/watch")){const $=u.url.match(/(.+)\/watch/)[1];m[$]&&s($)}})},{capture:!0});async function d(e,a,i=!0){if(a??=prompt(`Please enter your playback progress.
https://trakt.tv${e}

It's not possible to set a playback progress of < 1% or >= 80%.
The input parsing is very lenient, valid formats include:
13 | 13.37 | 13,37% | 0:42 | 0:42:59 | : 42 | 2h42m | 42 M 59s 2 H`),a===null)return;const u=await x(a,e);if(!u){w.error("Invalid playback progress input.");return}m[e]&&await s(e,!1);try{const h=e.split("/").filter(Boolean),$=h[0].slice(0,-1);m[e]={...await f.scrobble.stop({[$]:{ids:{[$==="movie"?"slug":"trakt"]:h[1]}},progress:u}),paused_at:new Date().toISOString(),type:$},w.success(`Playback progress for "${m[e].show?`${m[e].show.title} - `:""}${m[e][m[e].type].title}" has been set to ${m[e].progress.toFixed(1)}%.`,{toast:i,data:m[e]})}catch(h){throw w.error("Failed to set playback progress!",{toast:i,data:h}),h}t("body").is(".show_progress.is-self.playback")&&await k(),_()}async function s(e,a=!0){try{await f.sync.playback.remove({id:m[e].id}),w.success(`Playback progress for "${m[e].show?`${m[e].show.title} - `:""}${m[e][m[e].type].title}" has been removed.`,{toast:a,data:m[e]}),delete m[e]}catch(i){if(i.status===404)w.warning("Playback progress has already been removed.",{toast:a,data:i}),delete m[e];else throw w.error("Failed to remove playback progress!",{toast:a,data:i}),i}t("body").is(".show_progress.is-self.playback")?(t(`.grid-item[data-url="${e}"]`).remove(),t("body > .tooltip").tooltip("destroy")):t(`.pb-prog-badge[data-url="${e}"]`).remove()}async function g(){const e=await f.sync.playback.get();return Object.keys(m).forEach(a=>delete m[a]),Object.assign(m,Object.fromEntries(e.map(a=>[`/${a.type}s/${a[a.type].ids[a.type==="movie"?"slug":"trakt"]}`,a]))),t("body").is(".show_progress.is-self.playback")&&await k(),t(".pb-prog-badge").remove(),_(),m}async function l(e=!0){await Promise.all(Object.entries(m).sort((a,i)=>new Date(a[1].paused_at)-new Date(i[1].paused_at)).map(([a])=>s(a,!1))),w.success("All playback progress items have been removed.",{toast:e})}async function y(e=!0){const a=Object.entries(m).filter(([,{progress:i}])=>i<80).sort((i,u)=>new Date(i[1].paused_at)-new Date(u[1].paused_at));for(const[i,{progress:u}]of a)await d(i,u,!1);a.length?w.success(`All (${a.length}) renewable playback progress items have been renewed.`,{toast:e}):w.warning("No renewable playback progress items found.",{toast:e})}async function x(e,a){e=`${e}`.trim();let i;if(/^[\d.,%]+$/.test(e))i=parseFloat(e.replace(",","."));else if(a){const u=a.split("/").filter(Boolean),h=u[0]==="movies"?(await f.movies.summary({id:u[1],extended:"full"})).runtime:(await f.search.id({id_type:"trakt",id:u[1],type:"episode",extended:"full"}))[0].episode.runtime;if(h){if(e.includes(":"))i=e.split(":").slice(0,3).reduce(($,S,T)=>$+S*(3600/60**T),0)/(h*60)*100;else if(/[hms]/i.test(e)){const[$,S,T]=["h","m","s"].map(E=>+e.match(new RegExp(`(\\d+)s*${E}`,"i"))?.[1]||0);i=($*3600+S*60+T)/(h*60)*100}}}if(!isNaN(i)&&i>=1&&i<80)return i}function _(){Object.keys(m).length&&t('.grid-item:is([data-type="movie"], [data-type="episode"]):has(.poster, .fanart):not(:has(.pb-prog-badge)), .sidebar:is([data-type="movie"], [data-type="episode"], :has(.btn-item-report:is([data-type="movie"], [data-type="episode"]))):not(:has(.pb-prog-badge)), #summary-ratings-wrapper:has(.summary-user-rating:is([data-type="movie"], [data-type="episode"])) ~ .summary .mobile-poster:not(:has(.pb-prog-badge))').each((e,a)=>{const i=t(a).attr("data-url")??t(".notable-summary").attr("data-url"),u=t(a).attr("data-runtime")??t(".notable-summary").attr("data-runtime");m[i]&&t(`<div class="pb-prog-badge" data-url="${i}" style="--pb-prog-percent: ${m[i].progress}%; display: none;"><div class="icon fa-solid fa-pause"></div></div>`).appendTo(t(a).is(".grid-item")?t(a):t(a).find(".poster")).tooltip({title:()=>`<span style="white-space: nowrap;">Playback Progress<br>${p(m[i],u)}<br>${unsafeWindow.formatDate(m[i].paused_at)}<br><em>Click for options</em></span>`,placement:"right",container:"body",html:!0}).popover({template:'<div class="popover remove" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',title:"Playback Progress Options",content:`<button class="btn btn-primary less-rounded" onclick="$(this).closest('.popover').popover('hide'); userscriptPbProgMan.set('${i}');">Set New</button><button class="btn btn-primary less-rounded" onclick="$(this).closest('.popover').popover('destroy'); userscriptPbProgMan.remove('${i}');">Remove</button><button class="btn btn-cancel less-rounded" onclick="$(this).closest('.popover').popover('hide');">Cancel</button>`,trigger:"manual",placement:"bottom",container:"body",html:!0}).on("click",function(h){h.preventDefault(),t(this).tooltip("hide").popover("show")}).fadeIn()})}function v(){const e=t(".subnav-wrapper .left .dropdown-menu");e.append('<li class="divider fader" role="presentation"></li><li class="dropdown-header" role="presentation">PLAYBACK</li><li><a href="/users/me/progress/playback">All Types</a></li><li><a href="/users/me/progress/playback/movies">Movies</a></li><li><a href="/users/me/progress/playback/episodes">Episodes</a></li>'),t("body").is(".playback")&&(e.find(".selected").removeClass("selected").end().find(`[href$="${location.pathname.split("/").pop()}"]`).addClass("selected").end().prev().contents()[0].textContent=`Playback - ${e.find(".selected").text()} `)}async function k(){const e=location.pathname.split("/playback").pop(),a=await Promise.all(Object.entries(m).filter(([,{type:i}])=>!e||e.includes(i)).sort((i,u)=>new Date(u[1].paused_at)-new Date(i[1].paused_at)).map(async([i,u])=>{const[h,$]=await Promise.all([f[u.movie?"movies":"shows"].summary({id:u[u.movie?"movie":"show"].ids.trakt,extended:"full,images"}),u.episode?f.episodes.summary({id:u.show.ids.trakt,season:u.episode.season,episode:u.episode.number,extended:"full,images"}):null]);return c(i,u,h,$)}));if(t(":is(#progress-wrapper, #playback-progress-wrapper)").attr("id","playback-progress-wrapper").children().html('<div class="row"></div>'),t("body > .tooltip").tooltip("destroy"),a.length){if(t("#playback-progress-wrapper .row").addClass("posters").append(a),unsafeWindow.isProgress=!1,unsafeWindow.addOverlays(),unsafeWindow.posterGridTooltips(),unsafeWindow.formatDates(),unsafeWindow.hideUnreleasedRatings(),unsafeWindow.lazyLoadImages(),!e){const i=`Remove all (${a.length}) playback progress items?
This will take about ${a.length*1}s and cannot be undone!`,u=`Renew all (${a.length}) playback progress items?
This will take about ${a.length*2}s and cannot be undone!

Playback progress states are automatically removed by Trakt after 6 months. Renewing them postpones the auto-removal by first removing and then setting the playback progress states again, while preserving the current order. Due to trakt api changes playback progress items with a progress of >= 80% cannot be renewed and will be excluded.`;[["removeAll","Remove All",i,l],["renewAll","Renew All",u,y]].forEach(([h,$,S,T])=>{o[h]??=GM_registerMenuCommand(`PPM: ${$}`,()=>confirm(S)&&T())})}}else t("#playback-progress-wrapper .row").html('<div class="col-md-12"><br><div class="alert alert-no-data">Nothing to see here. Move along, move along.</div></div>')}function c(e,a,i,u){const h=u?.first_aired??i.first_aired??i.released+"T00:00:00Z",$=Math.floor((u??i).rating*10),S=(u??i).runtime,T=a.movie?e:`/shows/${a.show.ids.slug}/seasons/${a.episode.season}/episodes/${a.episode.number}`,E=a.movie?`${a.movie.title} (${a.movie.year})`:`${a.show.title}&lt;br&gt;${a.episode.season}x${String(a.episode.number).padStart(2,"0")} &quot;${a.episode.title}&quot;`,P=a.episode?`&lt;span class='main-title-sxe'&gt;${a.episode.season}x${String(a.episode.number).padStart(2,"0")}&lt;/span&gt; &lt;span class='main-title' data-spoiler-episode-id='${a.episode.ids.trakt}' data-spoiler-show-id='${a.show.ids.trakt}'&gt;${a.episode.title}&lt;/span&gt;`:null,M=u?u.episode_type.replace("_","-"):null,G=u&&u.episode_type!=="standard"?u.episode_type.replace("_"," ").toUpperCase():null;return t(`<div class="grid-item col-xs-6 col-md-2 col-sm-3" data-${a.type}-id="${a[a.type].ids.trakt}" data-runtime="${S}" data-total-runtime="${S}" data-type="${a.type}" data-url="${e}" itemscope="" itemtype="http://schema.org/${a.movie?"Movie":"TVEpisode"}" data-paused-at="${a.paused_at}" data-progress="${a.progress}" data-percentage="${$}" data-released="${h}" data-title="${E}" data-votes="${u?.votes??i.votes}"`+(a.episode?` data-episode-number="${a.episode.number}" ${a.episode.number===1?`data-episode-type-class="${M}" data-episode-type-label="${G}" `:""}data-season-id="" data-season-number="${a.episode.season}" data-show-id="${a.show.ids.trakt}" itemprop="episode"`:"")+`><meta content="https://trakt.tv${T}" itemprop="url"><a href="${T}"><div class="poster" title="${E}"><img class="base" src="/assets/placeholders/thumb/poster-7d5f5ef772b207dc5e74b5d7b0f1b5be444ea217fe09dbbe5995ffec2fefcd98.png"><img class="real" data-original="https://${i.images.poster[0]}" src="/assets/placeholders/thumb/poster-7d5f5ef772b207dc5e74b5d7b0f1b5be444ea217fe09dbbe5995ffec2fefcd98.png"><div class="loading"><div class="icon"><div class="fa fa-refresh fa-spin"></div></div></div></div></a><div class="quick-icons smaller"><div class="actions"><a class="watch" data-${a.type}-id="${a[a.type].ids.trakt}" data-fanart="https://${i.images.fanart[0]}" data-first-aired="${h}" data-full-title="${E.split("&lt;br&gt;").join("  ")}" data-logo="https://${i.images.logo[0]}" data-runtime="${S}" data-top-title="${a[a.type].title+(a.movie?` (${a.movie.year})`:"")}" data-total-runtime="${S}" data-type="${a.type}" data-url="${e}"`+(a.episode?` data-episode-number="${a.episode.number}" data-episode-title="${P}" ${a.episode.number===1?`data-episode-type-class="${M}" data-episode-type-label="${G}" `:""}data-screenshot="${u.images.screenshot[0]}" data-season-id="" data-season-number="${a.episode.season}" data-show-id="${a.show.ids.trakt}"`:"")+`><div class="base"></div><div class="icon trakt-icon-check-thick"></div></a><a class="collect" data-original-title="" title=""><div class="base"></div><div class="icon trakt-icon-collection-thick"></div></a><a class="list" data-original-title="" title=""><div class="base"></div><div class="icon trakt-icon-list-thick"></div></a><a class="watch-now" data-source-counts="{'us':1}" data-source-slugs="{}" data-target="#watch-now-modal" data-toggle="modal" data-url="${e}" data-original-title="" title=""><div class="base"></div><div class="fa-solid fa-play"></div></a></div><div class="metadata"><div class="percentage" data-earliest-release-date="${h}" data-original-title="" title=""><div class="fa fa-heart rating-${Math.floor((u??i).rating)}"></div>${$}%</div></div></div><div class="titles"><a class="titles-link" href="${T.split("/episodes/")[0]}"><h3 class="ellipsify">`+(a.episode?`<span class='main-title-sxe'>${a.episode.season}x${String(a.episode.number).padStart(2,"0")}</span> <span class='main-title' data-spoiler-episode-id='${a.episode.ids.trakt}' data-spoiler-show-id='${a.show.ids.trakt}'>${a.episode.title}</span>`:a.movie.title)+`</h3></a><a class="titles-link" href="${T.split("/seasons/")[0]}"><h4 class="ellipsify">${p(a,S)}</h4></a><div class="titles-link"><h4 class="ellipsify"><span class="format-date relative-date-swap" data-date="${a.paused_at}">${a.paused_at}</span></h4></div></div>`+(a.episode?`<span class="hidden" itemprop="partOfSeries" itemscope="" itemtype="http://schema.org/TVSeries"><meta content="${a.show.title}" itemprop="name"><meta content="https://trakt.tv/shows/${a.show.ids.slug}" itemprop="sameAs"></span><meta content="${a.episode.number}" itemprop="episodeNumber">`:"")+`<meta content="${a[a.type].title+(a.movie?` (${a.movie.year})`:"")}" itemprop="name"><meta content="${h}" itemprop="datePublished"></div>`)}function b(){GM_addStyle(`
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
:is(.sidebar, .frame) :is(.pb-prog-badge, .notable-badge, .rewatching-badge) {
  top: 1.5% !important;
  margin-left: 1.5% !important;
}
#user-profile-comments-wrapper .grid-item :is(.pb-prog-badge, .notable-badge, .rewatching-badge) {
  top: 10px !important;
}
body.calendars .grid-item .notable-badge {
  left: revert !important;
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
  `)}})("Trakt.tv | Playback Progress Manager"),gmStorage.txw82860&&(async C=>{"use strict";const t=document.cookie.match(/(?:^|; )trakt_userslug=([^;]*)/)?.[1],r={historySorting:(o,[n=1,...d]=[])=>({hrefPrefix:o,entries:(s=>s.with(n,{...s.at(n),anchor:!0}))([{text:"SORT BY"},{text:"Watched Date",href:"/added"},{text:"Plays",href:"/plays"},{text:"Time Spent",href:"/time"},{text:"Title",href:"/title"},{text:"Release Date",href:"/released"},{text:"Runtime",href:"/runtime"},{text:"Popularity",href:"/popularity"},{text:"Percentage",href:"/percentage"},{text:"Votes",href:"/votes"}])}),progressSorting:(o,[n=1,...d]=[])=>({hrefPrefix:o,entries:(s=>s.with(n,{...s.at(n),anchor:!0}))([{text:"SORT BY"},{text:"Watched Date",href:"/added"},{text:"Completion %",href:"/completed"},{text:"Episodes Left",href:"/episodes"},{text:"Time Left",href:"/time"},{text:"Plays",href:"/plays"},{text:"Release Date",href:"/released"},{text:"Premiere Date",href:"/premiered"},{text:"Title",href:"/title"},{text:"Popularity",href:"/popularity"},{text:"Episode Runtime",href:"/runtime"},{text:"Total Runtime",href:"/total-runtime"},{text:"Random",href:"/random"}])}),librarySorting:(o,[n=1,...d]=[])=>({hrefPrefix:o,entries:(s=>s.with(n,{...s.at(n),anchor:!0}))([{text:"SORT BY"},{text:"Added Date",href:"/added"},{text:"Title",href:"/title"},{text:"Release Date",href:"/released"},.../\/shows/.test(o)?[{text:"Episode Count",href:"/episodes"}]:[],.../\/episodes/.test(o)?[]:[{text:"Runtime",href:"/runtime"},{text:"Popularity",href:"/popularity"}],{text:"Percentage",href:"/percentage"},{text:"Votes",href:"/votes"}])}),ratingSelection:(o,[n=1,...d]=[])=>({hrefPrefix:o,entries:(s=>s.with(n,{...s.at(n),anchor:!0}))([{text:"RATING"},{text:"All Ratings",href:"/all",submenu:r.ratingsSorting(o+"/all",d)},{text:"10 - Totally Ninja!",href:"/10",submenu:r.ratingsSorting(o+"/10",d)},{text:"9 - Superb",href:"/9",submenu:r.ratingsSorting(o+"/9",d)},{text:"8 - Great",href:"/8",submenu:r.ratingsSorting(o+"/8",d)},{text:"7 - Good",href:"/7",submenu:r.ratingsSorting(o+"/7",d)},{text:"6 - Fair",href:"/6",submenu:r.ratingsSorting(o+"/6",d)},{text:"5 - Meh",href:"/5",submenu:r.ratingsSorting(o+"/5",d)},{text:"4 - Poor",href:"/4",submenu:r.ratingsSorting(o+"/4",d)},{text:"3 - Bad",href:"/3",submenu:r.ratingsSorting(o+"/3",d)},{text:"2 - Terrible",href:"/2",submenu:r.ratingsSorting(o+"/2",d)},{text:"1 - Weak Sauce :(",href:"/1",submenu:r.ratingsSorting(o+"/1",d)}])}),ratingsSorting:(o,[n=1,...d]=[])=>({hrefPrefix:o,entries:(s=>s.with(n,{...s.at(n),anchor:!0}))([{text:"SORT BY"},{text:"Rated Date",href:"/added"},{text:"Rating",href:"/rating"},.../\/ratings\/all/.test(o)?[]:[{text:"Title",href:"/title"},{text:"Release Date",href:"/released"},.../\/(movies|shows)/.test(o)?[{text:"Runtime",href:"/runtime"},{text:"Popularity",href:"/popularity"}]:[],{text:"Percentage",href:"/percentage"},{text:"Votes",href:"/votes"}]])}),listsViewSorting:(o,[n=1,...d]=[])=>({hrefPrefix:o,entries:(s=>s.with(n,{...s.at(n),anchor:!0}))([{text:"SORT BY"},.../\/lists\?/.test(o)?[{text:"Rank",href:"rank"}]:[],.../\/liked/.test(o)?[{text:"Like Date",href:"liked"}]:[],{text:"Updated Date",href:"updated"},{text:"Title",href:"title"},{text:"Likes",href:"likes"},{text:"Comments",href:"comments"},{text:"Items",href:"items"},{text:"Random",href:"random"}])}),listSorting:(o,[n=1,...d]=[])=>({hrefPrefix:o,entries:(s=>s.with(n,{...s.at(n),anchor:!0}))([{text:"SORT BY"},{text:"Rank",href:"rank"},{text:"Added Date",href:"added"},{text:"Title",href:"title"},{text:"Release Date",href:"released"},{text:"Runtime",href:"runtime"},{text:"Popularity",href:"popularity"},{text:"Random",href:"random"},{},{text:"Trakt Percentage",href:"percentage"},{text:"Trakt Votes",href:"votes"},.../\/watchlist\?sort=/.test(o)&&t?[{text:"Rotten Tomatoes <em>(mdb)</em>",href:`https://mdblist.com/watchlist/${t}?sort=rtomatoes&sortorder=asc`,useHrefPrefix:!1},{text:"Metacritic <em>(mdb)</em>",href:`https://mdblist.com/watchlist/${t}?sort=metacritic&sortorder=asc`,useHrefPrefix:!1},{text:"MyAnimeList <em>(mdb)</em>",href:`https://mdblist.com/watchlist/${t}?sort=myanimelist&sortorder=asc`,useHrefPrefix:!1}]:[],{},{text:"My Rating",href:"my_rating"},{text:"Watched Date",href:"watched"},{text:"Collected Date",href:"collected"}])}),commentType:(o,[n=1,...d]=[])=>({hrefPrefix:o,entries:(s=>s.with(n,{...s.at(n),anchor:!0}))([{text:"TYPE"},{text:"All Types",href:"/all",submenu:r.commentSorting(o+"/all",d)},{text:"Movies",href:"/movies",submenu:r.commentSorting(o+"/movies",d)},{text:"Shows",href:"/shows",submenu:r.commentSorting(o+"/shows",d)},{text:"Seasons",href:"/seasons",submenu:r.commentSorting(o+"/seasons",d)},{text:"Episodes",href:"/episodes",submenu:r.commentSorting(o+"/episodes",d)},{text:"Lists",href:"/lists",submenu:r.commentSorting(o+"/lists",d)}])}),commentSorting:(o,[n=1,...d]=[])=>({hrefPrefix:o,entries:(s=>s.with(n,{...s.at(n),anchor:!0}))([{text:"SORT BY"},{text:"Added Date",href:"/added"},{text:"Reactions <em>(30 Days)</em>",href:"/likes_30"},{text:"Reactions <em>(All Time)</em>",href:"/likes"},{text:"Replies <em>(30 Days)</em>",href:"/replies_30"},{text:"Replies <em>(All Time)</em>",href:"/replies"},{text:"Plays",href:"/plays"},{text:"Rating",href:"/rating"}])}),hiddenItemsSorting:(o,[n=1,...d]=[])=>({hrefPrefix:o,entries:(s=>s.with(n,{...s.at(n),anchor:!0}))([{text:"SORT BY"},{text:"Title",href:"/title"},{text:"Date",href:"/data"}])}),showsMoviesCatTimePeriod:(o,[n=-1,...d]=[])=>({hrefPrefix:o,entries:(s=>s.with(n,{...s.at(n),anchor:!0}))([{text:"PERIOD"},{text:"Day",href:"/daily"},{text:"Week",href:"/weekly"},{text:"Month",href:"/monthly"},.../\/streaming/.test(o)?[]:[{text:"All Time",href:"/all"}]])})},f={'.btn-profile a[href$="/history"]':{hrefPrefix:"/users/me/history",entries:[{text:"TYPE"},{text:"All Types",href:"/all",anchor:!0},{text:"Movies",href:"/movies",submenu:r.historySorting("/users/me/history/movies")},{text:"Shows",href:"/shows",submenu:r.historySorting("/users/me/history/shows")},{text:"Episodes",href:"/episodes",submenu:r.historySorting("/users/me/history/episodes")}]},'.btn-profile a[href$="/library"]':{hrefPrefix:"/users/me/library",entries:[{text:"TYPE"},{text:"All Types",href:"/all",anchor:!0},{text:"Movies",href:"/movies",submenu:r.librarySorting("/users/me/library/movies")},{text:"Shows",href:"/shows",submenu:r.librarySorting("/users/me/library/shows")},{text:"Episodes",href:"/episodes",submenu:r.librarySorting("/users/me/library/episodes")}]},'.btn-profile a[href$="/progress"]':{hrefPrefix:"/users/me/progress",entries:[{text:"SHOWS"},{text:"Watched",href:"/watched",anchor:!0,submenu:r.progressSorting("/users/me/progress/watched")},{text:"Dropped",href:"/dropped",submenu:r.progressSorting("/users/me/progress/dropped")},{text:"Library",href:"/library",submenu:r.progressSorting("/users/me/progress/library")},{},{text:"PLAYBACK"},{text:"All Types",href:"/playback"},{text:"Movies",href:"/playback/movies"},{text:"Episodes",href:"/playback/episodes"}]},'.btn-profile a[href$="/ratings"]':{hrefPrefix:"/users/me/ratings",entries:[{text:"TYPE"},{text:"All Types",href:"/all",anchor:!0,submenu:r.ratingSelection("/users/me/ratings/all")},{text:"Movies",href:"/movies",submenu:r.ratingSelection("/users/me/ratings/movies",[,4])},{text:"Shows",href:"/shows",submenu:r.ratingSelection("/users/me/ratings/shows",[,4])},{text:"Seasons",href:"/seasons",submenu:r.ratingSelection("/users/me/ratings/seasons",[,-1])},{text:"Episodes",href:"/episodes",submenu:r.ratingSelection("/users/me/ratings/episodes",[,-1])}]},'.btn-profile a[href$="/lists"]':{hrefPrefix:"/users/me/lists",entries:[{text:"Watchlist",href:"/users/me/watchlist",useHrefPrefix:!1,submenu:{hrefPrefix:"/users/me/watchlist?display=",entries:[{text:"TYPE"},{text:"All Types",href:"/users/me/watchlist",useHrefPrefix:!1,anchor:!0,submenu:r.listSorting("/users/me/watchlist?sort=",[3])},{text:"Movies",href:"movie",submenu:r.listSorting("/users/me/watchlist?display=movie&sort=",[3])},{text:"Shows",href:"show",submenu:r.listSorting("/users/me/watchlist?display=show&sort=",[3])},{text:"Seasons",href:"season",submenu:r.listSorting("/users/me/watchlist?display=season&sort=",[3])},{text:"Episodes",href:"episode",submenu:r.listSorting("/users/me/watchlist?display=episode&sort=",[3])}]}},{text:"Favorites",href:"/users/me/favorites",useHrefPrefix:!1,submenu:{hrefPrefix:"/users/me/favorites?display=",entries:[{text:"TYPE"},{text:"All Types",href:"/users/me/favorites",useHrefPrefix:!1,anchor:!0,submenu:r.listSorting("/users/me/favorites?sort=",[3])},{text:"Movies",href:"movie",submenu:r.listSorting("/users/me/favorites?display=movie&sort=",[3])},{text:"Shows",href:"show",submenu:r.listSorting("/users/me/favorites?display=show&sort=",[3])}]}},{},{text:"YOUR LISTS"},{text:"Personal Lists",href:"",submenu:r.listsViewSorting("/users/me/lists?sort=")},{text:"Collaborations",href:"/collaborations",submenu:r.listsViewSorting("/users/me/lists/collaborations?sort=")},{},{text:"LIKED LISTS"},{text:"Personal Lists",href:"/liked",submenu:r.listsViewSorting("/users/me/lists/liked?sort=")},{text:"Official Lists",href:"/liked/official",submenu:r.listsViewSorting("/users/me/lists/liked/official?sort=")}]},'.btn-profile a[href$="/comments"]':{hrefPrefix:"/users/me/comments",entries:[{text:"YOUR COMMENTS"},{text:"All Comments",href:"/all",anchor:!0,submenu:r.commentType("/users/me/comments/all")},{text:"Reviews",href:"/reviews",submenu:r.commentType("/users/me/comments/reviews")},{text:"Shouts",href:"/shouts",submenu:r.commentType("/users/me/comments/shouts")},{text:"Replies",href:"/replies",submenu:r.commentType("/users/me/comments/replies")},{},{text:"REACTIONS"},{text:"All Comments",href:"/liked/all",submenu:r.commentType("/users/me/comments/liked/all",[-1,-1])},{text:"Reviews",href:"/liked/reviews",submenu:r.commentType("/users/me/comments/liked/reviews",[-1,-1])},{text:"Shouts",href:"/liked/shouts",submenu:r.commentType("/users/me/comments/liked/shouts",[-1,-1])},{text:"Replies",href:"/liked/replies",submenu:r.commentType("/users/me/comments/liked/replies",[-1,-1])}]},'.btn-profile a[href$="/notes"]':{hrefPrefix:"/users/me/notes",entries:[{text:"All Types",href:"/all"},{},{text:"MEDIA ITEMS"},{text:"Movies",href:"/movies"},{text:"Shows",href:"/shows"},{text:"Seasons",href:"/seasons"},{text:"Episodes",href:"/episodes"},{text:"People",href:"/people"},{},{text:"YOUR ACTIVITIES"},{text:"History",href:"/history"},{text:"Library",href:"/collection"},{text:"Ratings",href:"/ratings"}]},'.btn-profile a[href$="/network"]':{hrefPrefix:"/users/me/network",entries:[{text:"Following",href:"/following/added"},{text:"Following <em>(Pending)</em>",href:"/following_pending/added"},{text:"Followers",href:"/followers/added"}]},'.btn-profile a[href="/widgets"]':{hrefPrefix:"/widgets",entries:[{text:"Watched",href:"/watched"},{text:"Library",href:"/library"},{text:"Profile",href:"/profile"}]},'.btn-profile a:contains("Quick Actions")':{entries:[{text:'<span class="toggle-dark-mode">Toggle Dark Mode<span class="right fa-solid fa-moon"></span></span>',onclick:"toggleDarkMode(); return false;"},{text:"Clear Search History",onclick:"showLoading(); $.post(`/users/me/clear_search_history`).done(() => { toastr.success(`Your search history was cleared.`); cacheUserData(true); }).always(hideLoading); return false;"},{text:"Re-cache Progress Data",onclick:"showLoading(); $.post(`/users/me/reset_progress_cache`).done(() => { toastr.success(`Your progress cache will be updated in a few minutes.`); }).always(hideLoading); return false;"},{text:"Re-cache Browser Data",onclick:"window.reopenOverlays = [null]; window.afterLoadingBottomMessage = `Your browser data is reset!`; showLoading(`Please wait for the caching to fully complete.`); resetUserData(); return false;"}]},'.btn-profile a[href="/settings"]':{hrefPrefix:"/settings",entries:[{text:"Advanced",href:"/advanced"},{text:"Your API Apps",href:"/oauth/applications",useHrefPrefix:!1,submenu:{entries:[{text:'<span class="hidden-xs left fa fa-book"></span>API Docs',href:"/b/api-docs"},{text:'<span class="hidden-xs left fa fa-github"></span>Developer Forum',href:"/b/dev-forum"},{text:'<span class="hidden-xs left fa trakt-icon-trakt"></span>Branding',href:"/branding"},{text:'<span class="hidden-xs left fa fa-plus-circle"></span>New Application',href:"/oauth/applications/new"}]}},{text:"Connected Apps",href:"/oauth/authorized_applications",useHrefPrefix:!1,submenu:{entries:[{text:"Activate Device",href:"/activate"}]}},{text:"Reports",href:"/reports",submenu:{hrefPrefix:"/reports",entries:[{text:"STATUS"},{text:"All Reports",href:"/all",anchor:!0},{text:"Approved",href:"/approved"},{text:"Paused",href:"/paused"},{text:"Rejected",href:"/rejected"},{text:"Pending",href:"/pending"}]}},{text:"Hidden Items",href:"/hidden",submenu:{hrefPrefix:"/settings/hidden",entries:[{text:"Dropped Shows",href:"/dropped",submenu:r.hiddenItemsSorting("/settings/hidden/dropped")},{},{text:"Progress",href:"/watched",submenu:r.hiddenItemsSorting("/settings/hidden/watched")},{text:"Library",href:"/collected",submenu:r.hiddenItemsSorting("/settings/hidden/collected")},{text:"Calendar",href:"/calendars",submenu:r.hiddenItemsSorting("/settings/hidden/calendars")},{},{text:"Rewatching",href:"/rewatching",submenu:r.hiddenItemsSorting("/settings/hidden/rewatching")},{text:"Blocked Users",href:"/comments",submenu:r.hiddenItemsSorting("/settings/hidden/comments")}]}},{text:"Plex Sync",href:"/plex"},{text:"Streaming Sync",href:"/scrobblers"},{text:"Notifications",href:"/notifications"},{text:"Sharing",href:"/sharing"},{text:"Data",href:"/data"},{text:"General",href:"",anchor:!0,submenu:{hrefPrefix:"/settings",entries:[{text:"Change Password",href:"#password"},{text:"Appearance",href:"#appearance"},{text:"Search",href:"#search"},{text:"Progress",href:"#progress"},{text:"Profile",href:"#profile"},{text:"Year in Review",href:"#yir"},{text:"Calendars",href:"#calendars"},{text:"Dashboard",href:"#dashboard"},{text:"Spoilers",href:"#spoilers"},{text:"Watch Now",href:"#watchnow"},{text:"Rewatching",href:"#rewatching"},{text:"Global",href:"#global"},{text:"Date & Time",href:"#datetime"},{text:"Account",href:"#account",anchor:!0}]}}]},':is(.btn-mobile-links, .links-wrapper) a[href^="/shows"]':{hrefPrefix:"/shows",entries:[{text:"Trending",href:"/trending"},{text:"Recommendations",href:"/recommendations"},{text:"Streaming Charts",href:"/streaming",submenu:r.showsMoviesCatTimePeriod("/shows/streaming",[1])},{text:"Anticipated",href:"/anticipated"},{text:"Popular",href:"/popular"},{text:"Favorited",href:"/favorited",submenu:r.showsMoviesCatTimePeriod("/shows/favorited")},{text:"Watched",href:"/watched",submenu:r.showsMoviesCatTimePeriod("/shows/watched")},{text:"Libraries",href:"/library",submenu:r.showsMoviesCatTimePeriod("/shows/library")}]},':is(.btn-mobile-links, .links-wrapper) a[href^="/movies"]':{hrefPrefix:"/movies",entries:[{text:"Trending",href:"/trending"},{text:"Recommendations",href:"/recommendations"},{text:"Streaming Charts",href:"/streaming",submenu:r.showsMoviesCatTimePeriod("/movies/streaming",[1])},{text:"Anticipated",href:"/anticipated"},{text:"Popular",href:"/popular"},{text:"Favorited",href:"/favorited",submenu:r.showsMoviesCatTimePeriod("/movies/favorited")},{text:"Watched",href:"/watched",submenu:r.showsMoviesCatTimePeriod("/movies/watched")},{text:"Libraries",href:"/library",submenu:r.showsMoviesCatTimePeriod("/movies/library")},{text:"Box Office",href:"/boxoffice"}]},':is(.btn-mobile-links, .links-wrapper) a[href="/calendars"]':{hrefPrefix:"/calendars",entries:[{text:"Personal",href:"/my/shows-movies",submenu:{hrefPrefix:"/calendars/my",entries:[{text:"Shows & Movies",href:"/shows-movies"},{text:"Shows",href:"/shows"},{text:"Premieres",href:"/premieres"},{text:"New Shows",href:"/new-shows"},{text:"Finales",href:"/finales"},{text:"Movies",href:"/movies"},{text:"Streaming",href:"/streaming"},{text:"DVD & Blu-ray",href:"/dvd"}]}},{text:"General",href:"/shows",submenu:{hrefPrefix:"/calendars",entries:[{text:"Shows",href:"/shows"},{text:"Premieres",href:"/premieres"},{text:"New Shows",href:"/new-shows"},{text:"Finales",href:"/finales"},{text:"Movies",href:"/movies"},{text:"Streaming",href:"/streaming"},{text:"DVD & Blu-ray",href:"/dvd"}]}}]},':is(.btn-mobile-links, .links-wrapper) a[href="/discover"]':{hrefPrefix:"/discover",entries:[{text:"Trends",href:"#trends"},{text:"Featured Lists",href:"#lists"},{text:"Summer TV Shows",href:"#featured-shows"},{text:"Comments",href:"#comments"}]},':is(.btn-mobile-links, .btn-tablet-links, .links-wrapper) a[href="/apps"]':{hrefPrefix:"/apps",entries:[{text:"Android <em>(official)</em>",href:"/a/trakt-android",useHrefPrefix:!1,anchor:!0},{text:"iOS <em>(official)</em>",href:"/a/trakt-ios",useHrefPrefix:!1},{text:"Android & iOS <em>(3rd Party)</em>",href:"#community-apps"},{text:"Android TV <em>(official)</em>",href:"/a/trakt-android-tv",useHrefPrefix:!1},{text:"tvOS <em>(official)</em>",href:"/a/trakt-tvos",useHrefPrefix:!1},{},{text:"INTEGRATIONS"},{text:"Media Centers",href:"#watching-wrapper"},{text:"Plex Sync",href:"#plex-scrobblers-wrapper"},{text:"Streaming Sync",href:"#streaming-scrobbler-wrapper"}]},':is(.btn-mobile-links, .btn-tablet-links, .links-wrapper) a[href="https://forums.trakt.tv"]':{hrefPrefix:"https://forums.trakt.tv",entries:[{text:"Latest",href:"/latest"},{text:"Top",href:"/top",submenu:{hrefPrefix:"https://forums.trakt.tv/top?period=",entries:[{text:"PERIOD"},{text:"Day",href:"daily",anchor:!0},{text:"Week",href:"weekly"},{text:"Month",href:"monthly"},{text:"Quarter",href:"quarterly"},{text:"Year",href:"yearly"},{text:"All Time",href:"all"}]}},{text:"Categories",href:"/categories",submenu:{hrefPrefix:"https://forums.trakt.tv",entries:[{text:"Announcements",href:"/c/announcements"},{text:"Discussions",href:"/c/discussions",submenu:{hrefPrefix:"https://forums.trakt.tv/c/discussions",entries:[{text:"General",href:"/general"},{text:"TV Shows",href:"/tv-shows"},{text:"Movies",href:"/movies"},{text:"Off Topic",href:"/off-topic"}]}},{text:"Trakt",href:"/c/trakt",submenu:{hrefPrefix:"https://forums.trakt.tv/c/trakt",entries:[{text:"Product Updates",href:"/product-updates"},{text:"Questions & Help",href:"/questions"},{text:"Feature Requests",href:"/feature-requests"},{text:"Lite",href:"/trakt-lite",anchor:!0},{text:"Release Notes",href:"/release-notes"},{text:"VIP Beta Features",href:"/vip-beta-features"},{text:"How To",href:"/how-to"}]}},{text:"3rd Party",href:"/c/3rd-party",submenu:{hrefPrefix:"https://forums.trakt.tv/c/3rd-party",entries:[{text:"Media Centers",href:"/media-centers"},{text:"Mobile Apps",href:"/mobile-apps"},{text:"Other",href:"/other",anchor:!0}]}},{text:"Support",href:"/c/support",submenu:{hrefPrefix:"https://forums.trakt.tv/c/support",entries:[{text:"Tutorials",href:"/tutorials"},{text:"VIP Features",href:"/vip-features"},{text:"Features",href:"/support-features"},{text:"FAQ",href:"/faq",anchor:!0}]}}]}},{},{text:"EXTERNAL"},{text:'<span class="left fa fa-reddit-alien"></span>r/trakt',href:"https://reddit.com/r/trakt",useHrefPrefix:!1,submenu:{hrefPrefix:"https://reddit.com/r/trakt",entries:[{text:"SORT BY"},{text:"Best",href:"/best"},{text:"Hot",href:"/hot"},{text:"New",href:"/new"},{text:"Top",href:"/top",submenu:{hrefPrefix:"https://reddit.com/r/trakt/top?t=",entries:[{text:"PERIOD"},{text:"Hour",href:"hour"},{text:"Day",href:"day"},{text:"Week",href:"week",anchor:!0},{text:"Month",href:"month"},{text:"Year",href:"year"},{text:"All Time",href:"all"}]}},{text:"Rising",href:"/rising",anchor:!0}]}},{text:'<span class="left fa-brands fa-twitter"></span>Twitter',href:"https://twitter.com/trakt",useHrefPrefix:!1},{text:'<span class="left fa-brands fa-mastodon"></span>Mastodon',href:"https://ruby.social/@trakt",useHrefPrefix:!1}]}},w=({hrefPrefix:o,entries:n})=>n.reduce((d,{text:s,href:g,useHrefPrefix:l=!0,onclick:y,submenu:x},_)=>d+(s!==void 0&&(g!==void 0||y!==void 0)?`<li${x?' class="with-ul-menu"':""}><a href="${l&&o?o:""}${g??"#"}"${y?` onclick="${y}"`:""}>${s}</a>${x?w(x):""}</li>`:s!==void 0?`<li class="dropdown-header">${s}</li>`:'<li class="divider"></li>'),`<ul class="menu" style="top: calc(-10px - ${Math.max(n.findIndex(d=>d.anchor),0)*100}%)">`)+"</ul>",p=Object.entries(f).map(([o,n])=>[o,w(n)]);m(),window.addEventListener("turbo:load",()=>{const o=unsafeWindow.jQuery;if(!o)return;const n=o("#top-nav");n.find(".links-wrapper > a").wrap('<div class="with-solid-bg"></div>'),n.find('.links-wrapper a[href="/apps"]').next().remove().end().parent().removeClass("with-top-arrow").addClass("with-solid-bg"),n.find('.btn-mobile-links li:has(> a[href="/apps"])').next().remove().end().unwrap(),n.find("li.dark-knight").removeClass("dark-knight").html('<a href="#" onclick="return false;">Quick Actions</a>').before('<li class="divider"></li>').next().remove(),n.find(".btn-profile li:has(> a.yir-loader)").wrapAll('<li class="with-ul-menu"><ul class="menu" style="top: -10px;"></ul></li>').parent().before('<a href="#" onclick="return false;">Stats</a>'),n.find('a[href="https://forums.trakt.tv"]').removeAttr("target"),p.forEach(([s,g])=>n.find(s).closest("li, div").addClass("with-ul-menu").append(g));const d=n.find(":is(.user-wrapper, .links-wrapper) .with-ul-menu");d.off("click mouseover mouseout").on("touchend",function(s){s.stopPropagation(),o(s.originalEvent.target).closest(o(this).children().first()).length&&(o(this).hasClass("selected")?o(this).removeClass("selected"):(s.preventDefault(),d.not(o(this).parents()).removeClass("selected"),o(this).addClass("selected")))}),o("body").on("touchend",()=>d.removeClass("selected"))});function m(){GM_addStyle(`
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
#top-nav .user-wrapper .btn > .menu {
  cursor: initial; /* .btns set cursor: pointer; which is inheritable => applies to .dividers */
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
  `)}})("Trakt.tv | Nested Header Navigation Menus"),gmStorage.wkt34fcz&&(async C=>{"use strict";const t={encodeRfc3986:e=>encodeURIComponent(e).replace(/[!'()*]/g,a=>"%"+a.charCodeAt(0).toString(16).toUpperCase()),getDefaultTorrentQuery:e=>`${t.encodeRfc3986(e.title)}${e.type==="movies"?` ${e.year}`:""}${e.season!==void 0?` s${String(e.season).padStart(2,"0")}${e.episode?`e${String(e.episode).padStart(2,"0")}`:""}`:""}`,getDefaultDirectStreamingPath:e=>`/${e.type==="movies"?`movie/${e.ids.tmdb}`:`tv/${e.ids.tmdb}/${e.season!==void 0?e.season:"1"}/${e.episode?e.episode:"1"}`}`,getWnInnerHtml:({btnStyle:e="",img:a,imgStyle:i="",text:u,textStyle:h=""})=>`<div class="icon btn-custom" style="${e}">`+(a?`<img class="lazy" src="${GM_getResourceURL(a)}" style="${u?"max-width: 35%; ":""}${i}">`:"")+(u?`<div class="text" style="${a?"max-width: 65%; ":""}${h}">${u}</div>`:"")+"</div>",getWnCategoryHtml:e=>`[${r[e]}]`,getDdgFaviconHtml:(e,a="")=>`<img src="https://icons.duckduckgo.com/ip3/${e}.ico" style="${a}">`,getFaBrandsHtml:(e,a="")=>`<i class="fa-brands fa-${e}" style="${a}"></i>`,isAdultFemale:e=>/female|non_binary/.test(e.gender)&&e.birthday&&Date.now()-new Date(e.birthday)>5680368e5,fetchAnimeId:(e,a)=>`fetch('https://arm.haglund.dev/api/v2/themoviedb?id=${e.ids.tmdb}').then((r) => r.json()).then((arr) => arr.map((e) => (e.levDist = userscriptLevDist('${e.ids.slug}${e.season>1?`-${e.season_title.toLowerCase().replaceAll(/[ '"]/g,"-")}`:""}', e['anime-planet'] ?? ''), e)).sort((a, b) => a.levDist - b.levDist).find((e) => e['${a}'])?.['${a}'])`,fetchWikidataClaim:(e,a)=>`fetch('https://query.wikidata.org/sparql?format=json&query=${t.encodeRfc3986(`SELECT ?value WHERE { ?item wdt:${e.type==="movies"?"P4947":"P4983"} "${e.ids.tmdb}" . ?item wdt:P31/wdt:P279* wd:${e.type==="movies"?"Q11424":"Q5398426"} . ?item wdt:${a} ?value . } LIMIT 1`)}').then((r) => r.json()).then((r) => r.results.bindings[0]?.value?.value)`,hideNativeExternalLink:e=>`#external-link-${e} { display: none !important; }`,getDdgTopResultRedirectUrl:(e,a)=>`https://duckduckgo.com/?q=%5Csite%3A${e} ${t.encodeRfc3986(a)}`},r={animeAggregator:"Anime Aggregator",animeStreaming:"Anime Streaming",debrid:"Debrid",streaming:"Streaming",torrentAggregator:"Torrent Aggregator",usenetIndexer:"Usenet Indexer"},f=[{buildHref:e=>`https://ext.to/browse/?q=${t.getDefaultTorrentQuery(e)} ${t.encodeRfc3986(o.torrentResolution)} 265${/shows|seasons/.test(e.type)?"&sort=size&order=desc":"&sort=seeds&order=desc"}&with_adult=1`,innerHtml:t.getWnInnerHtml({btnStyle:"background: #242730;",text:"EXT",textStyle:"background-image: linear-gradient(90deg, #3990f6 48.2%, #2c67a6 48.2% 66.2%, #3990f6 66.2%); background-clip: text; color: transparent; font-size: 50cqi; font-weight: 850; letter-spacing: -0.5px; padding-right: 3%;"}),tooltipHtml:t.getWnCategoryHtml("torrentAggregator")},{buildHref:e=>`https://web.stremio.com/#/detail/${e.type==="movies"?`movie/${e.ids.imdb}/${e.ids.imdb}`:`series/${e.ids.imdb}${e.type==="seasons"?`?season=${e.season}`:e.type==="episodes"?t.encodeRfc3986(`/${e.ids.imdb}:${e.season}:${e.episode}`):""}`}`,innerHtml:t.getWnInnerHtml({btnStyle:"background: #19163a;",img:"stremio",text:"Stremio"}),tooltipHtml:t.getWnCategoryHtml("debrid")},{buildHref:e=>`${t.fetchAnimeId(e,"myanimelist")}.then((id) => id ?? userscriptGmXhrCustomLinks({ url: 'https://kuroiru.co/backend/search', method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, data: 'q=${t.encodeRfc3986(e.title)}', responseType: 'json' }).then((r) => r.response[0]?.id)).then((id) => 'https://kuroiru.co/anime/' + id + '/ep${e.episode??"1"}')`,innerHtml:t.getWnInnerHtml({btnStyle:"background: #191919;",img:"kuroiru"}),tooltipHtml:t.getWnCategoryHtml("animeAggregator"),includeIf:e=>e.genres.includes("anime")},{buildHref:e=>`${t.fetchAnimeId(e,"anilist")}.then((id) => 'https://animetsu.cc' + (id ? '/watch/' + id + '?ep=${e.episode??"1"}&subType=dub&server=' : '/search?query=${t.encodeRfc3986(e.title)}'))`,innerHtml:t.getWnInnerHtml({btnStyle:"background: #111;",text:"Animetsu",textStyle:"font-family: GangOfThree; font-size: 18cqi;"}),tooltipHtml:t.getWnCategoryHtml("animeStreaming"),includeIf:e=>e.genres.includes("anime"),addStyles:`@font-face { font-family: "GangOfThree"; src: url("${GM_getResourceURL("animetsu")}") format("woff2"); font-display: block; }`},{buildHref:e=>`${t.fetchAnimeId(e,"anilist")}.then((id) => 'https://anidap.se' + (id ? '/watch?ep=${e.episode??"1"}&type=dub&provider=&id=' + id : '/search?q=${t.encodeRfc3986(e.title)}'))`,innerHtml:t.getWnInnerHtml({btnStyle:"background: #1f2728;",img:"anidap",imgStyle:"transform: scale(2.2);"}),tooltipHtml:t.getWnCategoryHtml("animeStreaming"),includeIf:e=>e.genres.includes("anime")},{buildHref:e=>`${t.fetchAnimeId(e,"anilist")}.then((id) => 'https://www.miruro.to' + (id ? '/watch/' + id + '/episode-${e.episode??"1"}' : '/search?query=${t.encodeRfc3986(e.title)}'))`,innerHtml:t.getWnInnerHtml({btnStyle:"background: #0e0e0e;",img:"miruro"}),tooltipHtml:t.getWnCategoryHtml("animeStreaming"),includeIf:e=>e.genres.includes("anime")},{buildHref:e=>`https://knaben.org/search/${t.getDefaultTorrentQuery(e)} ${t.encodeRfc3986(o.torrentResolution)} (265|av1)/${e.type==="movies"?"3000000":e.genres.includes("anime")?"6000000":"2000000"}/1/${/shows|seasons/.test(e.type)?"bytes":"seeders"}`,innerHtml:`<div class="icon btn-custom" style="background: #323537; flex-direction: column;">${GM_getResourceText("knaben").replace("<svg",'<svg style="max-height: 79%;"')}<div class="text" style="font-family: system-ui; font-size: 10cqi; letter-spacing: 0.3px;">KNABEN DATABASE</div></div>`,tooltipHtml:t.getWnCategoryHtml("torrentAggregator")},{buildHref:e=>`https://iframe.pstream.mov/embed/tmdb-${e.type==="movies"?`movie-${e.ids.tmdb}`:`tv-${e.ids.tmdb}/${e.season!==void 0?e.season:"1"}/${e.episode?e.episode:"1"}`}`,innerHtml:t.getWnInnerHtml({btnStyle:"background: #110d1b;",img:"pstream",text:"P-Stream",textStyle:"font-size: 11cqi;"}),tooltipHtml:t.getWnCategoryHtml("streaming")},{buildHref:e=>`https://www.cineby.gd${t.getDefaultDirectStreamingPath(e)}?play=true`,innerHtml:t.getWnInnerHtml({btnStyle:"background: #440000;",img:"cineby",text:"Cineby",textStyle:"font-family: system-ui; font-size: 17cqi;"}),tooltipHtml:t.getWnCategoryHtml("streaming")},{buildHref:e=>`https://hexa.su/watch${t.getDefaultDirectStreamingPath(e)}`,innerHtml:t.getWnInnerHtml({btnStyle:"background: #111317;",img:"hexa"}),tooltipHtml:t.getWnCategoryHtml("streaming")},{buildHref:e=>`https://www.fmovies.gd/watch${t.getDefaultDirectStreamingPath(e)}`,innerHtml:t.getWnInnerHtml({btnStyle:"background: #18252b;",text:"FMOVIES+",textStyle:"background-image: linear-gradient(to right, rgb(13 202 240), rgb(13 202 240 / 35%)); background-clip: text; color: transparent; font-family: system-ui; font-size: 15cqi; font-weight: 800; letter-spacing: 0.3px; border: 2px solid rgb(13 202 240 / 25%); border-radius: 5px; padding: 5%;"}),tooltipHtml:t.getWnCategoryHtml("streaming")},{buildHref:e=>`https://scenenzbs.com/search/${t.getDefaultTorrentQuery(e)} ${t.encodeRfc3986(o.torrentResolution)} (265|av1)`,innerHtml:t.getWnInnerHtml({btnStyle:"background: #212529;",img:"scenenzbs",imgStyle:"transform: scale(1.8) translateY(-1px);"}),tooltipHtml:t.getWnCategoryHtml("usenetIndexer")},{buildHref:e=>`https://x.debridmediamanager.com/${e.ids.imdb}`,innerHtml:t.getWnInnerHtml({btnStyle:"background: #2e3e51;",img:"dmm",imgStyle:"transform: scale(1.7);",text:"Debrid<br>Media<br>Manager",textStyle:"font-size: 12cqi;"}),tooltipHtml:t.getWnCategoryHtml("debrid")}],w=[{buildHref:e=>`/${/seasons|episodes/.test(e.type)?"shows":e.type}/${e.ids.slug}${e.season!==void 0?`/seasons/${e.season}${e.episode?`/episodes/${e.episode}`:""}`:""}/wikipedia`,innerHtml:t.getFaBrandsHtml("wikipedia-w"),tooltipHtml:"Wikipedia",addStyles:t.hideNativeExternalLink("wikipedia")},{buildHref:e=>`https://duckduckgo.com/?q=site%3Areddit.com Discussion ${t.encodeRfc3986(e.title)}${e.type==="movies"?` ${e.year}`:""}${e.season!==void 0?` Season ${e.season}${e.episode?` Episode ${e.episode}`:""}`:""}`,innerHtml:t.getFaBrandsHtml("reddit"),tooltipHtml:"Reddit",includeIf:e=>e.type!=="people"},{buildHref:e=>`https://letterboxd.com/tmdb/${e.ids.tmdb}`,innerHtml:t.getFaBrandsHtml("letterboxd"),tooltipHtml:"Letterboxd",includeIf:e=>e.type==="movies"},{buildHref:e=>`https://reversetv.enzon19.com/${/seasons|episodes/.test(e.type)?"shows":e.type}/${e.ids.slug}${e.season!==void 0?`/seasons/${e.season_old??e.season}${e.episode?`/episodes/${e.episode_old??e.episode}`:""}`:""}`,innerHtml:t.getDdgFaviconHtml("reversetv.enzon19.com","--extra-filters: invert(1);"),tooltipHtml:"ReverseTV",includeIf:e=>e.type!=="people"},{buildHref:e=>`userscriptGmXhrCustomLinks({ url: 'https://moviemaps.org/ajax/search?token=${t.encodeRfc3986(e.title)}&max_matches=1&use_similar=1', responseType: 'json' }).then((r) => 'https://moviemaps.org' + (r.response[0]?.url ?? '/search?q=${t.encodeRfc3986(e.title)}'))`,innerHtml:'<i class="fa-regular fa-map"></i>',tooltipHtml:"MovieMaps",includeIf:e=>e.type!=="people"&&!["animation","anime"].some(a=>e.genres.includes(a))},{buildHref:e=>t.getDdgTopResultRedirectUrl("fandom.com",e.title),innerHtml:t.getDdgFaviconHtml("fandom.com","--extra-filters: invert(1);"),tooltipHtml:"Fandom",includeIf:e=>e.type!=="people"},{buildHref:e=>`https://aznude.com/search.html?q=${t.encodeRfc3986(e.name??e.title)}`,innerHtml:t.getDdgFaviconHtml("aznude.com","transform: scale(1.1);"),tooltipHtml:"AZNude",includeIf:e=>o.includeNsfwLinks&&(e.type==="people"&&t.isAdultFemale(e)||e.type!=="people"&&!["animation","anime"].some(a=>e.genres.includes(a)))},{buildHref:e=>`userscriptGmXhrCustomLinks({ url: 'https://celeb.gate.cc/search.json?q=${t.encodeRfc3986(e.name)}', responseType: 'json' }).then((r) => 'https://celeb.gate.cc/' + (r.response[0] ? r.response[0].url + '?s=i.clicks.total&cdir=desc#images' : 'search?q=${t.encodeRfc3986(e.title)}'))`,innerHtml:'<img src="https://celeb.gate.cc/assets/logo.png" style="--extra-filters: brightness(1.1);">',tooltipHtml:"CelebGate",includeIf:e=>o.includeNsfwLinks&&e.type==="people"&&t.isAdultFemale(e)},{buildHref:e=>`https://rule34.xxx/index.php?page=post&s=list&tags=sort:score ${e.title.toLowerCase().replaceAll(/[^a-z0-9-:; ]/g,"").replaceAll(" ","_")}`,innerHtml:t.getDdgFaviconHtml("rule34.xxx"),tooltipHtml:"Rule 34",includeIf:e=>o.includeNsfwLinks&&e.type!=="people"},{buildHref:e=>`${t.fetchAnimeId(e,"myanimelist")}.then((id) => 'https://myanimelist.net' + (id ? '/anime/' + id${e.episode?` + '/x/episode/${e.episode}'`:""} : '/search/all?q=${t.encodeRfc3986(e.title)}'))`,innerHtml:t.getDdgFaviconHtml("myanimelist.net"),tooltipHtml:"MyAnimeList",includeIf:e=>e.genres?.includes("anime")},{buildHref:e=>`${t.fetchAnimeId(e,"anilist")}.then((id) => 'https://anilist.co' + (id ? '/anime/' + id : '/search/anime?search=${t.encodeRfc3986(e.title)}'))`,innerHtml:t.getDdgFaviconHtml("anilist.co"),tooltipHtml:"AniList",includeIf:e=>e.genres?.includes("anime")},{buildHref:e=>`${t.fetchAnimeId(e,"anidb")}.then((id) => 'https://anidb.net/anime/' + (id ?? '?adb.search=${t.encodeRfc3986(e.title)}'))`,innerHtml:t.getDdgFaviconHtml("anidb.net"),tooltipHtml:"AniDB",includeIf:e=>e.genres?.includes("anime")},{buildHref:e=>`${t.fetchAnimeId(e,"livechart")}.then((id) => 'https://livechart.me' + (id ? '/anime/' + id : '/search?q=${t.encodeRfc3986(e.title)}'))`,innerHtml:t.getDdgFaviconHtml("livechart.me"),tooltipHtml:"LiveChart",includeIf:e=>e.genres?.includes("anime")},{buildHref:e=>`https://www.themoviedb.org/${e.type==="people"?"person":e.type==="movies"?"movie":"tv"}/${e.ids.tmdb}${e.season!==void 0?`/season/${e.season}${e.episode?`/episode/${e.episode}`:""}`:""}`,innerHtml:'<img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg">',tooltipHtml:"TMDB",addStyles:t.hideNativeExternalLink("tmdb")},{buildHref:e=>`https://www.imdb.com/${e.type==="people"?"name":"title"}/${e.episode_ids?.imdb??e.ids.imdb}${e.season&&!e.episode?`/episodes/?season=${e.season}`:""}`,innerHtml:t.getFaBrandsHtml("imdb","font-size: 24px;"),tooltipHtml:"IMDb",addStyles:t.hideNativeExternalLink("imdb")},{buildHref:e=>`${t.fetchWikidataClaim(e,e.type==="movies"?"P12196":"P4835")}.then((id) => id ? 'https://www.thetvdb.com/dereferrer/${e.type==="movies"?"movie":"series"}/' + id : '${t.getDdgTopResultRedirectUrl("thetvdb.com",e.title)}')`,innerHtml:t.getDdgFaviconHtml("thetvdb.com"),tooltipHtml:"TheTVDB",includeIf:e=>e.type!=="people"},{buildHref:e=>e.type==="people"?`fetch('https://api.tvmaze.com/search/people?q=${t.encodeRfc3986(e.name)}').then((r) => r.json()).then((r) => r[0]?.person.url ?? 'https://www.tvmaze.com/search?q=${t.encodeRfc3986(e.name)}')`:`fetch('https://api.tvmaze.com/lookup/shows?imdb=${e.ids.imdb}').then((r) => ${e.season?`fetch(r.url + '${e.episode?`/episodebynumber?season=${e.season}&number=${e.episode}`:"/seasons"}').then((r2) => r2.json()).then((r2) => r2${e.episode?"":`[${e.season-1}]`}.url)`:"r.url.replace('api.', '')"})`,innerHtml:t.getDdgFaviconHtml("tvmaze.com"),tooltipHtml:"TVmaze",includeIf:e=>/shows|seasons|episodes|people/.test(e.type)},{buildHref:e=>e.season_trailer??(e.type!=="episodes"?e.trailer:null)??t.getDdgTopResultRedirectUrl("youtube.com",`${e.title}${e.type==="movies"?` ${e.year}`:""}${e.season?` Season ${e.season}`:""} Official Trailer`),innerHtml:t.getFaBrandsHtml("youtube"),tooltipHtml:"YouTube Trailer",includeIf:e=>e.type!=="people"},{buildHref:e=>`https://www.youtube.com/results?search_query=${t.encodeRfc3986(e.name)} Interview`,innerHtml:t.getFaBrandsHtml("youtube"),tooltipHtml:"YouTube Interviews",includeIf:e=>e.type==="people"},{buildHref:e=>`${t.fetchWikidataClaim(e,"P1258")}.then((id) => id ? 'https://www.rottentomatoes.com/' + id${e.season?` + '/s${String(e.season).padStart(2,"0")}${e.episode?`/e${String(e.episode).padStart(2,"0")}`:""}'`:""} : '${t.getDdgTopResultRedirectUrl("rottentomatoes.com",e.title+(e.season?` Season ${e.season}${e.episode?` Episode ${e.episode}`:""}`:""))}')`,innerHtml:t.getDdgFaviconHtml("rottentomatoes.com","--extra-filters: brightness(1.15) contrast(1.3);"),tooltipHtml:"Rotten Tomatoes",includeIf:e=>e.type!=="people"},{buildHref:e=>`${t.fetchWikidataClaim(e,"P1712")}.then((id) => id ? 'https://www.metacritic.com/' + id${e.season?` + '/season-${e.season}${e.episode?`/episode-${e.episode}-${e.episode_title.toLowerCase().replaceAll(/[^a-z0-9- ]/g,"").replaceAll(" ","-")}`:""}'`:""} : '${t.getDdgTopResultRedirectUrl("metacritic.com",e.title+(e.season?` Season ${e.season}${e.episode?` Episode ${e.episode}`:""}`:""))}')`,innerHtml:t.getDdgFaviconHtml("metacritic.com"),tooltipHtml:"Metacritic",includeIf:e=>e.type!=="people"},{buildHref:e=>p(`.btn-watch-now[data-url="${e.item_url}"] ~ .external #external-link-justwatch`).attr("href")??p("#powered_by_url").attr("value"),innerHtml:'<i class="fa-kit fa-justwatch"></i>',tooltipHtml:"JustWatch",includeIf:e=>e.type!=="people"&&p(`.btn-watch-now[data-url="${e.item_url}"] ~ .external #external-link-justwatch, #watch-now-content[data-url="${e.item_url}"] > #powered_by_url`).length,addStyles:t.hideNativeExternalLink("justwatch")},{buildHref:e=>`https://open.spotify.com/search/${t.encodeRfc3986(e.title)} Soundtrack`,innerHtml:t.getFaBrandsHtml("spotify"),tooltipHtml:"Spotify",includeIf:e=>e.type!=="people"},{buildHref:e=>e.type==="movies"?`https://fanart.tv/movie/${e.ids.tmdb}`:`fetch('https://api.tvmaze.com/lookup/shows?imdb=${e.ids.imdb}').then((r) => r.ok ? r.json().then((r) => 'https://fanart.tv/series/' + r.externals.thetvdb) : userscriptGmXhrCustomLinks({ url: 'https://fanart.tv/api/search.php?section=tv&s=${t.encodeRfc3986(e.title)}', responseType: 'json' }).then((r) => r.response[0]?.link))`,innerHtml:t.getDdgFaviconHtml("fanart.tv"),tooltipHtml:"Fanart.tv",includeIf:e=>e.type!=="people",addStyles:t.hideNativeExternalLink("fanart")},{buildHref:e=>`https://mediux.pro/${e.type==="movies"?"movies":"shows"}/${e.ids.tmdb}`,innerHtml:t.getDdgFaviconHtml("mediux.pro"),tooltipHtml:"MediUX",includeIf:e=>e.type!=="people"},{buildHref:e=>`https://youglish.com/pronounce/${t.encodeRfc3986(e.name)}/english`,innerHtml:t.getDdgFaviconHtml("youglish.com"),tooltipHtml:"YouGlish",includeIf:e=>e.type==="people"},{buildHref:e=>[...new DOMParser().parseFromString(GM_getResourceText("oracleofbacon"),"text/html").querySelectorAll("#main .top-1000 li")].some(a=>a.textContent.split("(")[0].trim()===e.name)?"https://oracleofbacon.org/graph.php?who="+t.encodeRfc3986(e.name):`https://oracleofbacon.org/movielinks.php?a=Kevin+Bacon&b=${t.encodeRfc3986(e.name)}&use_using=1&u0=on&u1=on&use_role_types=1&rt0=on&rt1=on&rt3=on&company=&use_genres=1&g0=on&g4=on&g8=on&g12=on&g20=on&g24=on&g1=on&g5=on&g9=on&g13=on&g21=on&g25=on&g2=on&g10=on&g14=on&g18=on&g22=on&g26=on&g3=on&g7=on&g11=on&g15=on&g19=on&g27=on`,innerHtml:'<i class="fa-regular fa-chart-network"></i>',tooltipHtml:"Oracle of Bacon",includeIf:e=>e.type==="people"},{buildHref:e=>e.homepage,innerHtml:'<i class="fa-light fa-clapperboard-play"></i>',tooltipHtml:"Official Site",includeIf:e=>e.homepage,addStyles:t.hideNativeExternalLink("official")},{buildHref:e=>p("#external-link-instagram").attr("href"),innerHtml:t.getFaBrandsHtml("instagram"),tooltipHtml:"Instagram",includeIf:e=>p(`:is(.btn-watch-now, .poster[data-person-id])[data-url="${e.item_url}"] ~ .external #external-link-instagram`).length,addStyles:t.hideNativeExternalLink("instagram")},{buildHref:e=>p("#external-link-twitter").attr("href"),innerHtml:t.getFaBrandsHtml("x-twitter"),includeIf:e=>p(`:is(.btn-watch-now, .poster[data-person-id])[data-url="${e.item_url}"] ~ .external #external-link-twitter`).length,addStyles:t.hideNativeExternalLink("twitter")},{buildHref:e=>p("#external-link-facebook").attr("href"),innerHtml:t.getFaBrandsHtml("facebook"),tooltipHtml:"Facebook",includeIf:e=>p(`:is(.btn-watch-now, .poster[data-person-id])[data-url="${e.item_url}"] ~ .external #external-link-facebook`).length,addStyles:t.hideNativeExternalLink("facebook")}];let p,m;unsafeWindow.userscriptLevDist=levenshteinDistance,unsafeWindow.userscriptGmOpenInTab=GM_openInTab,unsafeWindow.userscriptGmXhrCustomLinks=GM.xmlHttpRequest,unsafeWindow.userscriptItemDataCache={};const o={maxSidebarWnLinks:4,torrentResolution:"1080p",includeNsfwLinks:!1,...GM_getValue("customLinks")};GM_setValue("customLinks",o),b(),document.addEventListener("turbo:load",async()=>{if(p??=unsafeWindow.jQuery,m??=unsafeWindow.userscriptTraktApiWrapper,!p)return;const e=p("#watch-now-content"),a=p("#header-search-autocomplete-results"),i=p(".notable-summary").attr("data-url")||p(".sidebar").attr("data-url");if(p(document).off("ajaxSuccess.userscript83278").on("ajaxSuccess.userscript83278",(u,h,$)=>{e.length&&$.url.includes("/streaming_links?country=")&&x(e),a.length&&/^\/search\/autocomplete(?!\/(people|lists|users))/.test($.url)&&y(a)}),/^\/(movies|shows|seasons|episodes|people)\/[^\/]+$/.test(i)){const u=location.pathname,h=await _(i);u===location.pathname&&(d(h),s(h),h.type!=="people"&&(g(h),l(h)))}},{capture:!0});const n=(e,a,i)=>{const u=e.buildHref(a);return`<a ${/\)\.then\(/.test(u)?`href="javascript:void(0);" onclick="event.preventDefault(); $(this).removeAttr('onclick onauxclick'); ${u}.then((href) => { $(this).attr('href', href); userscriptGmOpenInTab(href, { active: true, setParent: true }); });" onauxclick="event.preventDefault(); $(this).removeAttr('onclick onauxclick'); ${u}.then((href) => { $(this).attr('href', href); if (event.button === 1) userscriptGmOpenInTab(href, { setParent: true }); });"`:`href="${u}"`} target="_blank" rel="noreferrer" data-original-title="${e.tooltipHtml??""}">${i??e.innerHtml}</a>`};function d(e){p(w.filter(a=>a.includeIf?a.includeIf(e):!0).map(a=>n(a,e)).join("")).prependTo("#info-wrapper .sidebar .external > li").tooltip({container:"body",placement:"bottom",html:!0})}function s(e){p(w.filter(a=>a.includeIf?a.includeIf(e):!0).map(a=>n(a,e,p(a.innerHtml).attr("alt")??a.tooltipHtml)+", ").join("")).insertAfter('.additional-stats.with-external-links label:contains("Links")')}function g(e){const a=p("#info-wrapper .sidebar");a.has(".btn-watch-now").length&&!a.has(".streaming-links").length&&a.find(".btn-watch-now").before('<div class="streaming-links"><div class="sources"></div></div>'),p(f.filter(i=>i.includeIf?i.includeIf(e):!0).map(i=>n(i,e)).join("")).prependTo(a.find(".streaming-links .sources")).attr("data-container","body").attr("data-html","true").tooltip()}function l(e){const a=p("#overview .action-buttons");if(a.length&&!a.has(".btn-watch-now").length){const i=p("#info-wrapper .sidebar .btn-watch-now"),u=i.attr("data-source-counts"),h=i.attr("data-url");if(!u||!h)return;a.prepend(`<div class="streaming-links"><div class="sources"></div></div><a class="btn btn-block btn-summary btn-watch-now visible-xs selected" data-source-counts="${u}" data-target="#watch-now-modal" data-toggle="modal" data-url="${h}" href="#"><i class="fa fa-fw fa-solid fa-play"></i><div class="text"><div class="main-info">Watch Now</div><div class="under-info">0 streaming services</div></div></a>`)}p(f.filter(i=>i.includeIf?i.includeIf(e):!0).map(i=>n(i,e)).join("")).prependTo(a.find(".sources")).attr("data-html","true").tooltip()}async function y(e){e.find('> .search-result:not([data-type="people"])').each(async function(){const a=await _(p(this).attr("data-url"));p(this).has(".streaming-links").length||p(this).append('<div class="streaming-links"><div class="sources"></div></div>'),p(f.filter(i=>i.includeIf?i.includeIf(a):!0).map(i=>n(i,a)).join("")).prependTo(p(this).find(".streaming-links .sources")).tooltip({placement:"bottom",html:!0}).on("click",i=>i.stopPropagation())})}async function x(e){const a=await _(e.attr("data-url"));e.find("> .streaming-links").prepend('<div class="title">Custom Links</div><div class="section external"></div><div class="section"></div>'+(e.has(".no-links").length?'<div class="title"></div>':"")).end().find("> .title-wrapper .titles").append(`<div class="overview">${a.episode_overview??a.season_overview??a.overview??"No overview available."}</div>`),p(w.filter(i=>i.includeIf?i.includeIf(a):!0).map(i=>n(i,a)).join("")).appendTo(e.find(".section.external")).tooltip({placement:"bottom",html:!0}),p(f.filter(i=>i.includeIf?i.includeIf(a):!0).map(i=>n(i,a,i.innerHtml+(i.tooltipHtml?`<div class="price">${i.tooltipHtml}</div>`:""))).join("")).appendTo(e.find(".section.external + .section"))}async function _(e){return unsafeWindow.userscriptItemDataCache[e]??=await(m?v:k)(e).then(a=>a.type==="episodes"&&a.genres.includes("anime")?c(a):a)}async function v(e){const a=e.split("/").filter(Boolean),i=a[0];let u,h,$,S,T;if(i==="seasons"||i==="shows"&&!isNaN(a[1])){const P=await fetch(e);if(!P.ok)throw new Error(`getItemData: Fetching ${P.url} failed with status: ${P.status}`);u=new DOMParser().parseFromString(await P.text(),"text/html"),h=p(u).find(".notable-summary")}return i==="episodes"&&([{show:$,episode:T}]=await m.search.id({id_type:"trakt",id:a[1],type:"episode",extended:"full"}),S=await m.seasons.season({id:$.ids.trakt,season:T.season,extended:"full"})),{item_url:e,type:i,...i!=="episodes"&&{...await m[i==="seasons"?"shows":i].summary({id:h?.attr("data-show-id")??a[1],extended:"full"})},...i==="seasons"&&{season:+h.attr("data-season-number"),season_title:p(u).find('#level-up-link[href*="/seasons/"]').text()||p(u).find("#summary-wrapper .mobile-title h1").contents()[0]?.textContent.trim(),season_overview:p(u).find("#overview #overview").text()||null,season_trailer:p(u).find("#overview .affiliate-links .trailer").attr("href")||null},...i==="episodes"&&{...$,season:S.number,season_title:S.title,season_original_title:S.original_title,season_ids:S.ids,season_first_aired:S.first_aired,season_overview:S.overview,season_episode_count:S.episode_count,episode:T.number,episode_title:T.title,episode_original_title:T.original_title,episode_ids:T.ids,episode_first_aired:T.first_aired,episode_overview:T.overview,episode_type:T.episode_type}}}async function k(e){let a,i;const u=await fetch(e);if(!u.ok)throw new Error(`getItemData: Fetching ${u.url} failed with status: ${u.status}`);if(a=new DOMParser().parseFromString(await u.text(),"text/html"),u.url.includes("/seasons/")){const M=await fetch(u.url.split("/seasons/")[0]);if(!M.ok)throw new Error(`getItemData: Fetching ${M.url} failed with status: ${M.status}`);i=new DOMParser().parseFromString(await M.text(),"text/html")}const h=e.split("/").filter(Boolean)[0],$=p(a).find(".notable-summary"),S=p(a).find(".additional-stats > li"),T=i?p(i).find(".additional-stats > li"):void 0,E=(M,G=S)=>G.filter((W,L)=>p(L).find("label").text().toLowerCase()===M),P={item_url:e,type:h,ids:{trakt:+($.attr("data-movie-id")??$.attr("data-show-id")??$.attr("data-person-id")),imdb:p(i??a).find("#external-link-imdb").attr("href")?.match(/(?:tt|nm)\d+/)?.[0],tmdb:+p(a).find("#external-link-tmdb").attr("href")?.match(/\d+/)?.[0]||null,slug:u.url.split("/")[4]},homepage:p(i??a).find("#external-link-official").attr("href")??null,...h!=="people"&&{title:p(a).find(':is(body > [itemtype$="Movie"], body > [itemtype$="TVSeries"], body > [itemtype] > [itemtype$="TVSeries"]) > meta[itemprop="name"]').attr("content")?.match(/(.+?)(?: \(\d{4}\))?$/)?.[1],original_title:E("original title",T).contents().get(-1)?.textContent,year:+p(i??a).find("#summary-wrapper .mobile-title .year")[0]?.textContent||null,genres:S.find('[itemprop="genre"]').map((M,G)=>p(G).text().toLowerCase()).get(),overview:p(i??a).find("#overview #overview").text()||null,trailer:p(i??a).find("#overview .affiliate-links .trailer").attr("href")||null},.../seasons|episodes/.test(h)&&{season:+$.attr("data-season-number"),season_title:p(a).find('#level-up-link[href*="/seasons/"]').text()||p(a).find("#summary-wrapper .mobile-title h1").contents()[0]?.textContent.trim()},...h==="seasons"&&{season_overview:p(a).find("#overview #overview").text()||null,season_trailer:p(a).find("#overview .affiliate-links .trailer").attr("href")||null},...h==="episodes"&&{episode:+$.attr("data-episode-number"),episode_title:p(a).find('body > [itemtype$="TVEpisode"] > meta[itemprop="name"]').attr("content"),episode_overview:p(a).find("#overview #overview").text()||null,episode_ids:{imdb:p(a).find("#external-link-imdb").attr("href")?.match(/tt\d+/)?.[0]}},...h==="people"&&{name:p(a).find('body > [itemtype$="Person"] > meta[itemprop="name"]').attr("content"),gender:E("gender").contents().get(-1)?.textContent.toLowerCase().replace("-","_"),birthday:E("birthday").children().last().attr("data-date")}};return Object.hasOwn(P,"original_title")&&(P.original_title??=P.title),P}async function c(e){const a=h=>h.trim().toLowerCase().replaceAll(/[.,]/g,"").replace(/\((\d)\)$/,($,S)=>"i".repeat(+S)),i=await fetch(`https://api.tvmaze.com/lookup/shows?imdb=${e.ids.imdb}`).then(h=>h.ok?fetch(h.url+"?embed[]=seasons&embed[]=episodes"):null).then(h=>h?.ok?h.json():null),u=i?._embedded.episodes.find(h=>a(h.name)===a(e.episode_title));return u&&(e.season!==u.season||e.episode!==u.number)&&(e.season_old=e.season,e.episode_old=e.episode,e.season=u.season,e.episode=u.number,e.season_title=i._embedded.seasons.find(h=>h.number==u.season).name||`Season ${u.season}`,["season_original_title","season_ids","season_first_aired","season_episode_count"].forEach(h=>delete e[h])),e}function b(){GM_addStyle(`
#info-wrapper .additional-stats.with-external-links .visible-xs {
  font-size: 0;
  user-select: none;
}
#info-wrapper .additional-stats.with-external-links .visible-xs > :is(label, a) {
  font-size: 14px;
  user-select: text;
}
#info-wrapper .additional-stats.with-external-links .visible-xs > a:has(+ a)::after {
  content: ", ";
}


.no-watchnow-sources:not([data-url^="/people"], [data-url^="/lists"]) {
  display: block !important;
}
[data-source-counts] > .fa-play::before {
  transition: color 0.3s;
}
[data-source-counts] > .fa-play::before {
  color: #777 !important;
}
[data-source-counts*="'${document.cookie.match(/(?:^|; )watchnow_country=([^;]*)/)?.[1]??new Intl.Locale(navigator.language).region}'" i] > .fa-play::before {
  color: #ccc !important;
}
:is([data-source-counts="{}"], [data-source-counts="{'none':1}"]) > .fa-play::before {
  color: #333 !important;
}
[data-source-counts] > .fa-play:hover::before {
  color: #fff !important;
}


#info-wrapper :is(.sidebar, .action-buttons) .streaming-links a:is(:nth-child(3n), :nth-child(4n)) {
  display: inline-block !important;
}
#info-wrapper .sidebar .streaming-links a:nth-child(n+${o.maxSidebarWnLinks+1} of a),
#info-wrapper .action-buttons .streaming-links a:nth-child(n+3 of a),
#header-search-autocomplete-results .streaming-links a:nth-child(n+3 of a) {
  display: none !important;
}


.streaming-links a > .icon.btn-custom {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 3%;
  padding: 4% 6% !important;
  border-width: 0px !important;
  overflow: hidden;
  container-type: inline-size;
}
.streaming-links a:hover > .icon.btn-custom {
  filter: contrast(1.2);
}
.streaming-links .icon.btn-custom > img {
  max-height: 100%;
  object-fit: contain;
}
.streaming-links .icon.btn-custom > .text {
  position: revert;
  transform: revert;
  -webkit-transform: revert;
  max-height: revert;
  padding: revert;
  overflow: revert;
  text-transform: revert;
  white-space: pre;
  font-size: 14cqi;
}


:is(#info-wrapper .sidebar, #watch-now-content) .external a {
  height: 27px;
  padding: 3px 5px !important;
  line-height: 18px !important;
  font-size: 14px !important;
  vertical-align: middle;
  color: #ccc !important;
  background-color: #333 !important;
  border: solid 1px #333 !important;
  border-radius: 3px !important;
  width: revert !important;
}
:is(#info-wrapper .sidebar, #watch-now-content) .external a:has(> *) {
  padding: 1.5px !important;
}
:is(#info-wrapper .sidebar, #watch-now-content) .external a > :is(div, i) {
  padding: 0 2px !important;
  font-size: 19px;
  vertical-align: -5px;
}
:is(#info-wrapper .sidebar, #watch-now-content) .external a > img {
  height: 100%;
  border-radius: inherit;
  filter: grayscale(1) var(--extra-filters, grayscale(1));
}
:is(#info-wrapper .sidebar, #watch-now-content) .external a:hover {
  color: #fff !important;
  background-color: #555 !important;
}
:is(#info-wrapper .sidebar, #watch-now-content) .external a:hover > img {
  filter: grayscale(1) var(--extra-filters, grayscale(1)) brightness(1.3);
}


#watch-now-content .title-wrapper {
  margin-bottom: revert !important;
}
#watch-now-content .title-wrapper .titles {
  padding-bottom: revert !important;
}
#watch-now-content .title-wrapper .titles .overview {
  height: 60px;
  margin-top: 5px;
  padding: 5px 0 10px;
  mask: linear-gradient(to bottom, transparent, white 5px 45px, transparent);
  overflow-y: auto;
  scrollbar-width: none;
  color: #ccc;
}


#watch-now-modal {
  top: 35px !important;
  max-height: calc(100% - 70px);
  flex-direction: column;
}
#watch-now-modal[style*="display: block;"] {
  display: flex !important;
}
#watch-now-content {
  display: contents;
}
#watch-now-content .streaming-links {
  margin: 10px 0 !important;
  mask: linear-gradient(to bottom, transparent, white 10px calc(100% - 10px), transparent);
  overflow: auto;
  scrollbar-width: none;
}
#watch-now-content .title {
  margin: 10px 0 15px !important;
}
#watch-now-content .section.external {
  margin: 0 30px 15px !important;
  display: flex;
  gap: 5px;
  overflow-x: auto;
  scrollbar-width: none;
}
#watch-now-content .section:not(.external) a {
  padding-bottom: 10px !important;
}
@media (width <= 767px) {
  #watch-now-content .section.external {
    margin: 0 15px 15px !important;
  }
}


@media (767px < width) {
  #info-wrapper .sidebar:has(> .external) {
    height: calc(100vh - 25px - var(--header-height));
    overflow: auto;
    scrollbar-width: none;
  }
}


${f.concat(w).map(e=>e.addStyles).filter(Boolean).join(`
`)}
  `)}})("Trakt.tv | Custom Links (Watch-Now + External)"),gmStorage.x70tru7b&&(async C=>{"use strict";let t,r,f;const w={_defaults:{title:(typeof C<"u"?C:GM_info.script.name).replace("Trakt.tv","Userscript"),toast:!0,toastrOpt:{positionClass:"toast-top-right",timeOut:1e4,progressBar:!0},toastrStyles:"#toast-container#toast-container a { color: #fff !important; border-bottom: dotted 1px #fff; }"},_print(l,y,x="",_={}){const{title:v=this._defaults.title,toast:k=this._defaults.toast,toastrOpt:c,toastrStyles:b="",consoleStyles:e="",data:a}=_,i=`${x}${a!==void 0?" See console for details.":""}<style>${this._defaults.toastrStyles+b}</style>`;console[l](`%c${v}: ${x}`,e,...a!==void 0?[a]:[]),k&&unsafeWindow.toastr?.[y](i,v,{...this._defaults.toastrOpt,...c})},info(l,y){this._print("info","info",l,y)},success(l,y){this._print("info","success",l,{consoleStyles:"color:#00c853;",...y})},warning(l,y){this._print("warn","warning",l,y)},error(l,y){this._print("error","error",l,y)}},p={...GM_getValue("vipUnlock")};GM_setValue("vipUnlock",p);const m=null;g(),document.addEventListener("turbo:load",async()=>{if(t??=unsafeWindow.jQuery,r??=unsafeWindow.compressedCache,f??=unsafeWindow.Cookies,!(!t||!r||!f)&&(t("body").removeAttr("data-turbo"),o(),m&&t("body:not(.dashboard) .feed-icon.csv").attr("href",location.pathname+".csv?slurm="+m+location.search.replace("?","&")),t(document).off("ajaxSuccess.userscript38793").on("ajaxSuccess.userscript38793",(l,y,x)=>{x.url.endsWith("/settings.json")&&o(),m&&/\/dashboard\/(on_deck|recently_watched)$/.test(x.url)&&t('.feed-icon.csv[href="/vip/csv"]').attr("href",function(){return t(this).prev().attr("data-path")+".csv?"+["slurm="+m,t(this).prev().attr("data-query")].join("&")})}),t(".frame-wrapper .sidenav.advanced-filters .buttons").addClass("vip").find(".btn.vip").text("").removeClass("vip").removeAttr("href").addClass("disabled disabled-init").attr("id","filter-apply").attr("data-apply-text","Apply Filters").before('<a class="btn btn-close-2024" id="filter-close" style="display: inline-block !important; visibility: visible !important;">Close</a>').append('<span class="text">Configure Filters</span><span class="icon fa-solid fa-check"></span>'),/^\/users\/[^\/]+\/progress(?!\/playback)/.test(location.pathname)&&/list=\d+/.test(location.search)&&!location.search.includes("terms="))){unsafeWindow.showLoading?.();const l=new URLSearchParams(location.search),y=l.get("list"),x=await fetch("/lists/"+y).then(v=>fetch(v.url+"?display=show&hide=unwatched&limit=10000")).then(v=>v.text()).then(v=>new DOMParser().parseFromString(v,"text/html")),_=[...x.querySelectorAll(".grid-item")].map(v=>v.querySelector(".titles-link")?.textContent).filter(Boolean);l.set("terms",`^${_.join("$|^")}$`),["airing","completed","ended","not-completed","rewatching"].forEach(v=>{f.remove("filter-hide-progress-"+v,{path:"/"}),f.remove("filter-hide-progress-"+v,{path:"/users/"+f.get("trakt_userslug")})}),location.search=l.toString()}},{capture:!0});function o(){const l=r.get("settings");l&&(!l.user.vip||m&&l.account.token!==m)&&(l.user.vip=!0,m&&(l.account.token=m),r.set("settings",l),unsafeWindow.userSettings&&(unsafeWindow.userSettings=l))}async function n(){if(unsafeWindow.listPopupPressed){unsafeWindow.listPopupPressed=!1;return}const l=t(this).hasClass("side-btn")||t(this).parent().hasClass("side-btn"),y=t(this).hasClass("btn-list"),x=l?t(this).closest(".btn-summary"):y?t(this):t(this).closest(".grid-item"),_=x.attr("data-url"),v=x.attr("data-type"),k=+x.attr(`data-${v}-id`),c=Object.values(r.get("lists")??{}).some(e=>e.type==="list"),b=unsafeWindow.isPersonPage&&y||x.attr("data-type")==="person"?"list":unsafeWindow.userSettings.browsing.list_popup_action;if(unsafeWindow.isPersonPage&&y||c&&(b!=="watchlist"||t(this).hasClass("selected"))||l)unsafeWindow.actionListPopup(l?x:t(this));else{x.find(".loading").show();const e=t(this).hasClass("selected"),a=Object.values(r.get("lists")).find(h=>h.name==="Watchlist"),i=t(`<li class="${a.item_count>=unsafeWindow.userSettings.limits.watchlist.item_count?"maxed-out":""} ${e?"selected":""}" data-list-id="${a.ids.trakt}" data-list-type="watchlist" data-item-count="${a.item_count}"></li>`);await d(x,i,e)&&(t(`[data-${v}-id="${k}"]:is(.btn-summary.btn-list, [data-type="${v}"]) .list`)[e?"removeClass":"addClass"]("selected"),unsafeWindow.cacheUserData()),x.find(".loading").hide()}}async function d(l,y,x){y.addClass("spinner").find(".icon").addClass("fa-spin");const _=l.attr("data-url"),v=l.attr("data-type"),k=+l.attr(`data-${v}-id`),c=+y.attr("data-list-id")||Object.values(r.get("lists")).find(a=>a.name==="Watchlist").ids.trakt,b=y.attr("data-list-type"),e=+y.attr("data-item-count");try{if(y.hasClass("maxed-out")&&!x){const a=.045*e;w.info(`Target list is maxed-out, attempting bypass.. This will take about <strong>${~~(a/60)}m${~~(a%60)}s</strong>.`,{toastrOpt:{timeOut:a*1e3}});const i=await s(),u=r.get("lists");if(u[i]&&u[i].item_count>0){w.error("Temp list is not empty. Aborting..",{data:u[i]});return}const h=await fetch(_+"/list",{method:"POST",headers:{"X-CSRF-Token":unsafeWindow.csrfToken},body:new URLSearchParams({type:v,trakt_id:k,list_id:i})});if(!h.ok){w.error(`Failed to add item to temp list: id=${i}.`,{data:h});return}w.info("Added item to temp list.");for(const[$,S]of[[c,i],[i,c]]){const T=await fetch("/lists/"+$).then(P=>P.text()).then(P=>new DOMParser().parseFromString(P,"text/html").querySelector("#listable-all-item-ids").value.split(",").map(Number));if(!T||!T.length){w.error(`Failed to fetch all list item ids for list: id=${$}.`);return}const E=await fetch(`/lists/${$}/move_items/${S}`,{method:"POST",headers:{"X-CSRF-Token":unsafeWindow.csrfToken},body:new URLSearchParams([["sort_by","rank"],["sort_how","asc"],...T.map(P=>["order[]",P])])});if(!E.ok){w.error(`Failed to move all items from ${$===c?"target to temp":"temp to target"} list.`,{data:E});return}w.info(`Moved all items from ${$===c?"target to temp":"temp to target"} list.`)}w.success(`Success. Item was added to <a href="/lists/${c}"><strong>target list</strong></a>.`)}else{const a=await fetch(`${_}/${/(watchlist|favorites|recommendations)/.test(b)?b:"list"}${x?"/remove":""}`,{method:"POST",headers:{"X-CSRF-Token":unsafeWindow.csrfToken},body:new URLSearchParams({type:v,trakt_id:k,list_id:c})});if(!a.ok){await a.json().then(i=>w.error("Failed to add item to list."+(i.message?" Response: "+i.message:""),{data:a}));return}w.success("Success. "+(await a.json()).message)}return y.toggleClass("selected"),!0}finally{y.removeClass("spinner").find(".icon").removeClass("fa-spin")}}async function s(){if(!p.tempList1Id||!r.get("lists")[p.tempList1Id]){const l=Object.values(r.get("lists")).find(v=>v.name==="Favorites").ids.trakt,y=await fetch(`/lists/${l}/copy_items/0`,{method:"POST",headers:{"X-CSRF-Token":unsafeWindow.csrfToken},body:new URLSearchParams({"order[]":"",sort_by:"rank",sort_how:"asc"})});if(!y.ok){w.error("Failed to create temp list.",{data:y});return}const x=(await y.json()).id;w.info(`Created temp list: id=${x}.`,{data:y});const _=await fetch("/lists/"+x,{method:"POST",headers:{"X-CSRF-Token":unsafeWindow.csrfToken},body:new URLSearchParams({authenticity_token:unsafeWindow.csrfToken,_method:"put",name:`temp1_${x}`,description:'Needed for the list limits bypass of the "Partial VIP Unlock" userscript. Keep it empty. You can edit the list title and description if you want. If you delete it another one will be created on the next attempted list limits bypass.',privacy_hidden:"private",privacy:"private",existing_collaborator_ids:"",allow_comments_hidden:1,allow_comments:1,display_numbers_hidden:1,display_numbers:1,default_sort_by:"rank",default_sort_how:"asc"})});if(!_.ok){w.error("Failed to update temp list metadata.",{data:_});return}w.info("Updated temp list metadata.",{data:_}),p.tempList1Id=x,GM_setValue("vipUnlock",p)}return p.tempList1Id}function g(){GM_addStyle(`
#top-nav .btn-vip,
.dropdown-menu.for-sortable > li > a.vip-only,
.alert-vip-required {
  display: none !important;
}
  `);const l=document.cookie.match(/(?:^|; )trakt_userslug=([^;]*)/)?.[1];l&&GM_addStyle(`
:is(#avatar-wrapper h1, .comment-wrapper .user-name) [href="/users/${l}"]::after,
#results-top-wrapper [href="/users/${l}"] + h1::after {
  content: "DIRECTOR" !important; /* competes with " (@userslug)" suffix from other script */
  font-weight: var(--headings-font-weight);
  font-family: var(--headings-font-family);
  background-color: var(--brand-vip);
  display: inline-block;
  text-shadow: none;
  line-height: 1;
  vertical-align: middle;
  color: #fff;
}
#avatar-wrapper h1 [href="/users/${l}"]::after,
#results-top-wrapper [href="/users/${l}"] + h1::after {
  margin: 0px 0px 5px 10px;
  padding: 5px 6px 5px 28px;
  font-size: 16px;
  letter-spacing: 1px;
  border-radius: 20px 0px 0px 20px;
  background-image: url("/assets/logos/logomark.circle.white-8541834d655f22f06c0e1707bf263e8d5be59657dba152298297dffffb1f0a11.svg");
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: 3px center;
}
.comment-wrapper .user-name [href="/users/${l}"]::after {
  margin: -3px 0 0 5px;
  padding: 2px 4px;
  font-size: 11px;
  letter-spacing: 0;
  border-radius: 2px;
}
@media (width <= 767px) and (orientation: portrait) {
  #avatar-wrapper h1 [href="/users/${l}"]::after,
  #results-top-wrapper [href="/users/${l}"] + h1::after {
    margin: 0px 0px 3px 7px;
    padding: 3px 5px 3px 23px;
    font-size: 14px;
    background-size: 14px;
  }
}

.personal-list .comment-wrapper .user-name [href="/users/${l}"] {
  white-space: nowrap;
}
    `)}})("Trakt.tv | Partial VIP Unlock"),gmStorage.yl9xlca7&&(async C=>{"use strict";let t;const r=new Intl.NumberFormat("en",{notation:"compact",maximumFractionDigits:1});r.formatTLC=n=>r.format(n).toLowerCase(),o(),document.addEventListener("turbo:load",()=>{if(!location.pathname.startsWith("/shows/")||location.pathname.includes("/episodes/")||(t??=unsafeWindow.jQuery,!t))return;const n=t("#seasons-episodes-sortable"),d=t("#summary-ratings-wrapper .summary-user-rating"),s=t("#summary-ratings-wrapper .trakt-rating");if(!n.length||!d.length||!s.length)return;const g=unsafeWindow.userscriptAvgSeasonEpisodeRatings={};let l;d[0].mutObs=new MutationObserver(()=>{d.hasClass("popover-on")||p(d,g.personal)}),p(d),m(s);const y=!location.pathname.endsWith("/seasons/0");n.on("arrangeComplete",()=>{n.data("isotope")&&(l=n.data("isotope").filteredItems.filter(x=>y?x.element.dataset.seasonNumber!=="0":!0),g.personal=f(l),g.general=w(l),p(d,g.personal),m(s,g.general))}),t(document).off("ajaxSuccess.userscript32985").on("ajaxSuccess.userscript32985",(x,_,v)=>{l&&/\/ratings\/(seasons|episodes)\.json$|\/rate/.test(v.url)&&(g.personal=f(l),p(d,g.personal))})},{capture:!0});function f(n){const d=n.map(s=>+t(s.element).find(".corner-rating > .text").text()).filter(Boolean);return{average:d.length?d.reduce((s,g)=>s+g,0)/d.length:void 0,votes:d.length}}function w(n){const d=n.reduce((s,g)=>s+g.sortData.votes,0);return{average:d?n.reduce((s,g)=>s+g.sortData.percentage*(g.sortData.votes/d),0):void 0,votes:d}}function p(n,d){n[0].mutObs.disconnect(),n.find(".rating").each(function(){const s=t(this).parent().prev().attr("class").match(/rating-(\d+)/)?.[1];s&&t(this).html(`${s}<div class="votes">${unsafeWindow.ratingsText?.[s]??""}</div>`)}),n.find(".number > .votes").removeClass("alt").text(`avg: ${d?.average?`${d.average.toFixed(1)}`:"--"} (${d?.votes!==void 0?r.formatTLC(d.votes):"--"} v.)`),n[0].mutObs.observe(n[0],{subtree:!0,childList:!0})}function m(n,d){n.has(".rating .votes").length||n.find(".votes").clone().appendTo(n.find(".rating")).text((s,g)=>`(${g.match(/^.*? v/)?.[0]??"0 v"}.)`),n.find(".number > .votes").text(`avg: ${d?.average?`${Math.round(d.average)}`:"--"}% (${d?.votes!==void 0?r.formatTLC(d.votes):"--"} v.)`)}function o(){GM_addStyle(`
#summary-ratings-wrapper .ratings .rating {
  display: flex !important;
  justify-content: space-between;
  align-items: center;
}
#summary-ratings-wrapper .ratings .rating .votes {
  margin-left: 7px !important;
  color: #fff !important;
}
  `)}})("Trakt.tv | Average Season And Episode Ratings");