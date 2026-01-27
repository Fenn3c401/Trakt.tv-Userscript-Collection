// ==UserScript==
// @name         Trakt.tv | Megascript
// @description  My 13 trakt.tv userscripts merged into one for convenience. Namely: Actor Pronunciation Helper, All-in-One Lists View, Average Season And Episode Ratings, Bug Fixes and Optimizations, Charts - Ratings Distribution, Charts - Seasons, Custom Links (Watch-Now + External), Custom Profile Image, Enhanced List Preview Posters, Enhanced Title Metadata, Nested Header Navigation Menus, Partial VIP Unlock, Scheduled E-Mail Data Exports. See README for details.
// @version      2026-01-27_17-27
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
// @resource     cineby         https://www.cineby.gd/logo.png
// @resource     dmm            https://raw.githubusercontent.com/debridmediamanager/debrid-media-manager/main/dmm-logo.svg
// @resource     gojolive       https://db.onlinewebfonts.com/t/65e1ae41ad95e8bed2ac45adc765795a.woff2
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
// @grant        GM_setValue
// @grant        GM.xmlHttpRequest
// @connect      celeb.gate.cc
// @connect      fanart.tv
// @connect      forvo.com
// @connect      kuroiru.co
// @connect      moviemaps.org
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
| [Trakt.tv \| All-in-One Lists View](p2o98x5r.md#StickyHeader "Adds a button for appending your lists from the /collaborations, /liked and /liked/official pages on the main \"Personal Lists\" page for easier access and management of all your lists in one place. Essentially an alternative to the lists category dropdown menu.") | `p2o98x5r` |
| [Trakt.tv \| Average Season And Episode Ratings](yl9xlca7.md#StickyHeader "Shows the average general and personal rating of the seasons of a show and the episodes of a season. You can see the averages for all episodes of a show on its /seasons/all page.") | `yl9xlca7` |
| [Trakt.tv \| Bug Fixes and Optimizations](brzmp0a9.md#StickyHeader "A large collection of bug fixes and optimizations for trakt.tv, organized into ~30 independent sections, each with a comment detailing which specific issues are being addressed. Also contains some minor feature patches.") | `brzmp0a9` |
| [Trakt.tv \| Charts - Ratings Distribution](pmdf6nr9.md#StickyHeader "Adds a ratings distribution (number of users who rated a title 1/10, 2/10 etc.) chart to title summary pages. Also allows for rating the title by clicking on the bars of the chart.") | `pmdf6nr9` |
| [Trakt.tv \| Charts - Seasons](cs1u5z40.md#StickyHeader "Adds a line chart to /seasons pages which shows the ratings (personal + general) and the number of watchers and comments for each individual episode.") | `cs1u5z40` |
| [Trakt.tv \| Custom Links (Watch-Now + External)](wkt34fcz.md#StickyHeader "Adds custom links to all the \"Watch-Now\" and \"External\" sections (for titles and people). The ~35 defaults include Letterboxd, Stremio, streaming sites (e.g. P-Stream, Hexa), torrent aggregators (e.g. EXT, Knaben), various anime sites (both for streaming and tracking) and much more. Easily customizable.") | `wkt34fcz` |
| [Trakt.tv \| Custom Profile Image](2dz6ub1t.md#StickyHeader "A custom profile image for free users. Like the vip feature, except this one only works locally. Uses the native set/reset buttons and changes the dashboard + settings background as well.") | `2dz6ub1t` |
| [Trakt.tv \| Enhanced List Preview Posters](kji85iek.md#StickyHeader "Makes the posters of list preview stacks/shelves link to the respective title summary pages instead of the list page and adds corner rating indicators for rated titles.") | `kji85iek` |
| [Trakt.tv \| Enhanced Title Metadata](fyk2l3vj.md#StickyHeader "Adds links of filtered search results to the metadata section (languages, genres, networks, studios, writers, certification, year) on title summary pages, similar to the vip feature. Also adds a country flag and allows for \"combined\" searches by clicking on the labels.") | `fyk2l3vj` |
| [Trakt.tv \| Nested Header Navigation Menus](txw82860.md#StickyHeader "Adds 150+ dropdown menus with a total of 1000+ entries to the header navigation bar for one-click access to just about any page on the entire website.") | `txw82860` |
| [Trakt.tv \| Partial VIP Unlock](x70tru7b.md#StickyHeader "Unlocks some vip features: adding titles to maxed-out lists, advanced filters, \"more\" buttons on dashboard, faster page navigation, bulk list management, rewatching, custom calendars, advanced list progress and more. Also hides some vip advertisements.") | `x70tru7b` |
| [Trakt.tv \| Scheduled E-Mail Data Exports](2hc6zfyy.md#StickyHeader "Automatic trakt.tv backups for free users. On every trakt.tv visit a background e-mail data export is triggered, if one is overdue based on the specified cron expression (defaults to weekly).") | `2hc6zfyy` |
*/


"use strict";const gmStorage={"2dz6ub1t":!0,"2hc6zfyy":!0,"71cd9s61":!0,brzmp0a9:!0,cs1u5z40:!0,fyk2l3vj:!0,kji85iek:!0,p2o98x5r:!0,pmdf6nr9:!0,txw82860:!0,wkt34fcz:!0,x70tru7b:!0,yl9xlca7:!0,...GM_getValue("megascript")};GM_setValue("megascript",gmStorage),gmStorage["2dz6ub1t"]&&(async D=>{"use strict";let t,r;const f={_defaults:{title:GM_info.script.name.replace("Trakt.tv","Userscript"),toast:!0,toastrOpt:{positionClass:"toast-top-right",timeOut:1e4,progressBar:!0},toastrStyles:"#toast-container#toast-container a { color: #fff !important; border-bottom: dotted 1px #fff; }"},_print(d,i,o="",c={}){const{title:b=this._defaults.title,toast:u=this._defaults.toast,toastrOpt:v,toastrStyles:y="",consoleStyles:S="",data:p}=c,x=`${o}${p!==void 0?" See console for details.":""}<style>${this._defaults.toastrStyles+y}</style>`;console[d](`%c${b}: ${o}`,S,...p!==void 0?[p]:[]),u&&r[i](x,b,{...this._defaults.toastrOpt,...v})},info(d,i){this._print("info","info",d,i)},success(d,i){this._print("info","success",d,{consoleStyles:"color:#00c853;",...i})},warning(d,i){this._print("warn","warning",d,i)},error(d,i){this._print("error","error",d,i)}},w={...GM_getValue("customProfileImage")};GM_setValue("customProfileImage",w);let n=s();window.addEventListener("turbo:load",()=>{if(!/^\/(shows|movies|users|dashboard|settings|oauth\/(authorized_)?applications)/.test(location.pathname)||(t??=unsafeWindow.jQuery,r??=unsafeWindow.toastr,!t||!r))return;const d=t("body.is-self #cover-wrapper"),i=t("body.is-self #btn-set-profile-image"),o=t("body:is(.shows, .movies) #summary-wrapper > .full-screenshot");w.imgUrl&&d.length&&i.length&&$(d,i),o.length&&(o.attr("style")?a(o):new MutationObserver((c,b)=>{b.disconnect(),a(o)}).observe(o[0],{attributeFilter:["style"]}))});function $(d,i){d.has('a.selected:contains("Profile")').length?(d.removeClass("slim").find("> .poster-bg-wrapper").removeClass("poster-bg-wrapper").addClass("shade"),d.find("> #watching-now-wrapper").length||d.find("> .container").before(`<div class="hidden-xs" id="fanart-info"><a href="${w.info.url}">${w.info.title} <span class="year">${w.info.year}</span></a></div>`)):d.find("> .poster-bg-wrapper").removeClass("poster-bg-wrapper").addClass("shadow-full-width"),i.popover("destroy").popover({trigger:"manual",container:"body",placement:"bottom",html:!0,template:'<div class="popover remove reset-profile-image" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',title:"Reset Profile Image?",content:`<button class="btn btn-primary less-rounded">Yes</button><button class="btn btn-cancel less-rounded" onclick="$(this).closest('.popover').popover('hide');">No</button>`}).on("click",function(){t(this).popover("show")}).find(".btn-text").text("Reset Profile Image"),t("body").on("click",".reset-profile-image .btn-primary",()=>{["imgUrl","info"].forEach(o=>delete w[o]),GM_setValue("customProfileImage",w),n?.remove(),f.success("Custom profile image has been reset."),i.popover("destroy").popover({trigger:"hover",container:"body",placement:"bottom",html:!0,template:'<div class="popover set-profile-image" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',content:"Showcase your favorite movie, show, season or episode and make it your profile header image! Here's how:<br><br><ol><li>Go to any <b>movie</b>, <b>show</b>, <b>season</b>, or <b>episode</b> page.</li><li>Click <b>Set Profile Image</b> in the sidebar.</li></ol>"}).off("click").find(".btn-text").text("Set Profile Image"),d.addClass("slim").find("> :is(.shade, .shadow-full-width)").removeClass("shade shadow-full-width").addClass("poster-bg-wrapper").end().find("> #fanart-info").remove()})}function a(d){const i=d.css("background-image").match(/url\("?(?!.+?placeholders)(.+?)"?\)/)?.[1],o=t('[href="/vip/cover"]'),c=b=>{o.has(".fa").parent().addClass("locked").find(".text").unwrap().append(`<div class="under-action">${["No fanart available","Already set"][b]}</div>`),o.not(":has(.fa)").off("click").on("click",u=>u.preventDefault()).css({color:"#bbb"}).find(".text").wrap("<s></s>")};i?i===w.imgUrl?c(1):o.on("click",b=>{b.preventDefault(),c(1),w.imgUrl=i,w.info={url:location.pathname,title:t("head title").text().match(/(.+?)(?: \([0-9]{4}\))? - Trakt/)[1],year:t("#summary-wrapper .year").text()},GM_setValue("customProfileImage",w),n?.remove(),n=s(),f.success("Fanart is now set as custom profile image. Click here to see how it looks.",{toastrOpt:{onclick(){location.href="/users/me"}}})}):c(0)}function s(){if(w.imgUrl)return GM_addStyle(`
body.users.is-self #cover-wrapper:not(:has(> #watching-now-wrapper)) > .full-bg {
  background-image: url("${w.imgUrl}") !important;
}
@media (width <= 767px) and (orientation: portrait) {
  body.users.is-self #cover-wrapper:not(:has(> #watching-now-wrapper)) > .container {
    background-color: revert !important;
  }
}

body:is(.dashboard, .settings, .authorized_applications, .applications) #results-top-wrapper .poster-bg {
  background-image: url("${w.imgUrl}") !important;
  background-size: cover !important;
  background-position: 50% 20% !important;
  opacity: 0.7 !important;
  filter: revert !important;
}
  `)}})("Trakt.tv | Custom Profile Image"),gmStorage["2hc6zfyy"]&&(async D=>{"use strict";let t,r,f;const w={toastOnSuccess:!0,cronExpr:"@weekly",lastRun:{},...GM_getValue("scheduledEmailDataExports")};GM_setValue("scheduledEmailDataExports",w);const n={_defaults:{title:GM_info.script.name.replace("Trakt.tv","Userscript"),toast:!0,toastrOpt:{positionClass:"toast-top-right",timeOut:1e4,progressBar:!0},toastrStyles:"#toast-container#toast-container a { color: #fff !important; border-bottom: dotted 1px #fff; }"},_print(a,s,d="",i={}){const{title:o=this._defaults.title,toast:c=this._defaults.toast,toastrOpt:b,toastrStyles:u="",consoleStyles:v="",data:y}=i,S=`${d}${y!==void 0?" See console for details.":""}<style>${this._defaults.toastrStyles+u}</style>`;console[a](`%c${o}: ${d}`,v,...y!==void 0?[y]:[]),c&&r[s](S,o,{...this._defaults.toastrOpt,...b})},info(a,s){this._print("info","info",a,s)},success(a,s){this._print("info","success",a,{consoleStyles:"color:#00c853;",toast:w.toastOnSuccess,...s})},warning(a,s){this._print("warn","warning",a,s)},error(a,s){this._print("error","error",a,s)}};let $;try{$=new Cron(w.cronExpr,{timezone:Intl.DateTimeFormat().resolvedOptions().timeZone})}catch(a){n.error("Invalid cron expression. Exiting..",{data:a})}$&&window.addEventListener("turbo:load",async()=>{if(t??=unsafeWindow.jQuery,r??=unsafeWindow.toastr,f??=unsafeWindow.Cookies?.get("trakt_userslug"),!t||!r||!f)return;const a=new Date;if(!w.lastRun[f]||$.nextRun(w.lastRun[f])<=a){const s=await fetch("/settings/data").then(d=>d.text()).then(d=>t(new DOMParser().parseFromString(d,"text/html")).find("#exporters .alert-success .format-date").attr("data-date"));if(s&&$.nextRun(s)>a){w.lastRun[f]=s,GM_setValue("scheduledEmailDataExports",w);return}t.post("/settings/export_data").done(()=>{w.lastRun[f]=a.toISOString(),GM_setValue("scheduledEmailDataExports",w),n.success("Success. Your data export is processing. You will receive an e-mail when it is ready.")}).fail(d=>{d.status===409?(w.lastRun[f]=a.toISOString(),GM_setValue("scheduledEmailDataExports",w),n.warning(`Failed. Cooldown from previous export is still active. Will retry on next scheduled data export at: ${$.nextRun(w.lastRun[f]).toISOString()}`)):n.error(`Failed with status: ${d.status}. Reload page to try again.`,{data:d})})}})})("Trakt.tv | Scheduled E-Mail Data Exports"),gmStorage["71cd9s61"]&&(async D=>{"use strict";let t,r;const f={_defaults:{title:GM_info.script.name.replace("Trakt.tv","Userscript"),toast:!0,toastrOpt:{positionClass:"toast-top-right",timeOut:1e4,progressBar:!0},toastrStyles:"#toast-container#toast-container a { color: #fff !important; border-bottom: dotted 1px #fff; }"},_print(a,s,d="",i={}){const{title:o=this._defaults.title,toast:c=this._defaults.toast,toastrOpt:b,toastrStyles:u="",consoleStyles:v="",data:y}=i,S=`${d}${y!==void 0?" See console for details.":""}<style>${this._defaults.toastrStyles+u}</style>`;console[a](`%c${o}: ${d}`,v,...y!==void 0?[y]:[]),c&&r[s](S,o,{...this._defaults.toastrOpt,...b})},info(a,s){this._print("info","info",a,s)},success(a,s){this._print("info","success",a,{consoleStyles:"color:#00c853;",...s})},warning(a,s){this._print("warn","warning",a,s)},error(a,s){this._print("error","error",a,s)}};$(),document.addEventListener("turbo:load",()=>{/^\/people\/[^\/]+(\/lists.*)?$/.test(location.pathname)&&(t??=unsafeWindow.jQuery,r??=unsafeWindow.toastr,!(!t||!r)&&t('<button id="btn-pronounce-name"><div class="audio-animation fade"><div class="bar-1"></div><div class="bar-2"></div><div class="bar-3"></div></div><div class="fa fa-volume fade in"></div></button>').appendTo(t("#summary-wrapper .mobile-title h1")).tooltip({title:"Pronounce Name",container:"body",placement:"top",html:!0}).one("click",async function(){t(this).tooltip("hide");const a=t(this),s=t('body > [itemtype$="Person"] > meta[itemprop="name"]').attr("content")??t("#summary-wrapper .mobile-title > :last-child").text();unsafeWindow.showLoading?.();const d=await w(s),i=d?[d]:await Promise.all(s.split(/\s+/).map(o=>/^\w\.?$/.test(o)?new SpeechSynthesisUtterance(o):w(o).then(c=>c??new SpeechSynthesisUtterance(o))));unsafeWindow.hideLoading?.(),i.some(o=>o instanceof SpeechSynthesisUtterance)&&(i.forEach(o=>{o instanceof SpeechSynthesisUtterance&&(o.lang="en-US")}),f.warning(`Could not find a full pronunciation for "${s}" on <a href="https://forvo.com/search/${encodeURIComponent(s)}" target="_blank"><strong>forvo.com</strong></a>. Falling back to TTS..`)),["ended","end"].forEach(o=>{i.slice(1).forEach((c,b)=>{i[b]?.addEventListener(o,()=>c.play?c.play():speechSynthesis.speak(c))}),i.at(-1).addEventListener(o,()=>{a.find(".audio-animation").removeClass("in"),setTimeout(()=>a.find(".fa").addClass("in"),150)})}),n(i,a),a.on("click",()=>n(i,a))}))},{capture:!0});async function w(a){const s=await GM.xmlHttpRequest({url:`https://forvo.com/search/${encodeURIComponent(a)}`}),d=new DOMParser().parseFromString(s.responseText,"text/html"),i=t(d).find("body > script").text().match(/_AUDIO_HTTP_HOST='(.+?)'/)?.[1],o=t(d).find('[onclick^="Play"]').attr("onclick")?.match(/Play\([0-9]+,'(.*?)','(.*?)',(?:true|false),'(.*?)','(.*?)'/)?.slice(1),c=o?.map((b,u)=>b&&["/mp3/","/ogg/","/audios/mp3/","/audios/ogg/"][u]+atob(b)).filter(Boolean).reverse();return c?.length?t("<audio>"+c.map(b=>`<source src="https://${i}${b}" type="${b.endsWith("mp3")?"audio/mpeg":"audio/ogg; codecs=vorbis"}" />`).join("")+"</audio>")[0]:null}function n(a,s){s.find(".fa").removeClass("in"),setTimeout(()=>{s.find(".audio-animation").addClass("in"),a.forEach(d=>d.load?.()),speechSynthesis.cancel(),a[0].play?a[0].play():speechSynthesis.speak(a[0])},150)}function $(){GM_addStyle(`
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
  `)}})("Trakt.tv | Actor Pronunciation Helper"),gmStorage.brzmp0a9&&(async D=>{"use strict";(r=>document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r())(()=>{if(!unsafeWindow.jQuery)return;const r=Object.getOwnPropertyDescriptors(unsafeWindow.jQuery.fn.swipe),f=Object.getOwnPropertyDescriptor(unsafeWindow.jQuery.fn,"swipe"),w=f.value;f.value=function(...n){return this.attr("id")==="summary-wrapper"&&(n[0].excludedElements="#summary-ratings-wrapper .stats"),w.apply(this,n)},Object.defineProperty(unsafeWindow.jQuery.fn,"swipe",f),Object.entries(r).forEach(([n,$])=>!["length","name","prototype"].includes(n)&&Object.defineProperty(unsafeWindow.jQuery.fn.swipe,n,$))}),GM_addStyle(`
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
`),(r=>document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r())(()=>{if(!unsafeWindow.jQuery)return;const r=Object.getOwnPropertyDescriptors(unsafeWindow.jQuery.fn.tooltip),f=Object.getOwnPropertyDescriptor(unsafeWindow.jQuery.fn,"tooltip"),w=f.value;f.value=function(...n){return n[0]?.container&&this.closest(".popover, #ondeck-wrapper, #progress-grid-wrapper").length&&delete n[0].container,w.apply(this,n)},Object.defineProperty(unsafeWindow.jQuery.fn,"tooltip",f),Object.entries(r).forEach(([n,$])=>!["length","name","prototype"].includes(n)&&Object.defineProperty(unsafeWindow.jQuery.fn.tooltip,n,$))}),GM_addStyle(`
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
`),window.addEventListener("turbo:load",()=>{const r=unsafeWindow.jQuery("body.touch-device #info-wrapper:has(.sidebar)");r.swipe({excludedElements:"#summary-ratings-wrapper .stats, #info-wrapper .season-links .links, #actors .posters",swipeRight:(f,w,n,$,a,s)=>s[0].start.x<50&&r.addClass("with-mobile-sidebar"),swipeLeft:(f,w,n,$,a,s)=>r.removeClass("with-mobile-sidebar")})}),window.addEventListener("turbo:load",()=>{document.querySelectorAll("#header-search-type .dropdown-menu li:has(~ .divider) a").forEach((r,f)=>{unsafeWindow.Mousetrap.bind(`alt+${f+1}`,()=>r.click()),unsafeWindow.Mousetrap(document.getElementById("header-search-query")).bind(`alt+${f+1}`,()=>r.click())})}),(r=>document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r())(()=>{const r=unsafeWindow.jQuery;r&&(r(document).on("auxclick",".btn-watch .view-all",function(f){f.preventDefault(),GM_openInTab(location.origin+r(this).attr("data-url"),{setParent:!0})}),r(document).on("mousedown mouseup","#header-search-autocomplete-results .selected",function(f){f.which===2&&!r(f.target).closest("a").length&&(f.type==="mousedown"?f.preventDefault():(unsafeWindow.searchModifierKey=!0,r(this).trigger("click")))}))}),document.addEventListener("keydown",r=>{r.ctrlKey&&r.key==="Enter"&&r.target.closest?.("#header-search-query")&&(r.preventDefault(),r.stopPropagation(),r.target.dispatchEvent(new KeyboardEvent("keydown",{key:"Enter",keyCode:13,metaKey:!0,bubbles:!0,cancelable:!0})))},{capture:!0}),(r=>document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r())(()=>{const r=unsafeWindow.jQuery;r&&r(document).on("ajaxSuccess",(f,w,n)=>{if(n.url.endsWith("/rate")){const $=new URLSearchParams(n.data),[a,s,d]=["type","trakt_id","stars"].map(i=>$.get(i));unsafeWindow[a+"s"].ratings[s]=d,unsafeWindow.compressedCache.set(`ratings_${a}s`,unsafeWindow[a+"s"].ratings),unsafeWindow.addOverlays()}else if(n.url.endsWith("/rate/remove")){const $=new URLSearchParams(n.data),a=$.get("type");unsafeWindow.compressedCache.set(`ratings_${a}s`,unsafeWindow[a+"s"].ratings),unsafeWindow.addOverlays()}})}),GM_addStyle(`
.personal-list .list-description {
  overflow-wrap: anywhere;
}
`),(r=>document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r())(()=>{if(!unsafeWindow.jQuery)return;const r=Object.getOwnPropertyDescriptors(unsafeWindow.jQuery.fn.chosen),f=Object.getOwnPropertyDescriptor(unsafeWindow.jQuery.fn,"chosen"),w=f.value;f.value=function(...n){if(this.attr("id")==="filter-network_ids"&&(n[0].max_shown_results=200),/iP(od|hone)|IEMobile|Windows Phone|BlackBerry|BB10|Android.*Mobile/i.test(unsafeWindow.navigator.userAgent)){Object.defineProperty(unsafeWindow.navigator,"userAgent",{get:()=>"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36",configurable:!0});try{return w.apply(this,n)}finally{delete unsafeWindow.navigator.userAgent}}else return w.apply(this,n)},Object.defineProperty(unsafeWindow.jQuery.fn,"chosen",f),Object.entries(r).forEach(([n,$])=>!["length","name","prototype"].includes(n)&&Object.defineProperty(unsafeWindow.jQuery.fn.chosen,n,$))}),(r=>document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r())(()=>{const r=unsafeWindow.jQuery;r&&r(document).on("ajaxSend",(f,w,n)=>{if(/\/lists\/[\d]+\/like/.test(n.url)){const $=new URLSearchParams(n.data).get("trakt_id"),a=r(`[data-list-id="${$}"] > .like .count-number`),s=a.text(),d=n.url.includes("/remove");r(document).one("ajaxSuccess",(i,o,c)=>{n.url===c.url&&a.text(unsafeWindow.numeral(s)[d?"subtract":"add"](1).format("0,0"))})}})}),GM_addStyle(`
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
`);const t=()=>{unsafeWindow.jQuery('.readmore:not([id^="rmjs-"])').filter((f,w)=>unsafeWindow.jQuery(w).height()>350).readmore({embedCSS:!1,collapsedHeight:300,speed:200,moreLink:'<a href="#">Read more...</a>',lessLink:'<a href="#">Read less...</a>',afterToggle:(f,w,n)=>w.closest("#sortable-grid").length&&unsafeWindow.$grid?.isotope()}),requestAnimationFrame(()=>unsafeWindow.$grid?.isotope())};Object.defineProperty(unsafeWindow,"renderReadmore",{get:()=>t,set:()=>{},configurable:!0}),GM_addStyle(`
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
`)})("Trakt.tv | Bug Fixes and Optimizations"),gmStorage.cs1u5z40&&(async D=>{"use strict";let t,r,f,w,n,$,a,s,d;Chart.defaults.borderColor="rgb(44 44 44 / 0.5)";const i=new Intl.NumberFormat("en",{notation:"compact",maximumFractionDigits:1});i.formatTLC=p=>i.format(p).toLowerCase(),S(),document.addEventListener("turbo:load",async()=>{/^\/shows\/[^/]+\/seasons\/[^/]+$/.test(location.pathname)&&(t??=unsafeWindow.jQuery,r??=unsafeWindow.userscriptTraktApiModule?.isFulfilled?await unsafeWindow.userscriptTraktApiModule:null,t&&(f=t("#seasons-episodes-sortable"),f.length&&(w=location.pathname.includes("/seasons/"),n=!location.pathname.includes("/seasons/0"),$=w?p=>`${p.seasonNum}x${String(p.episodeNum).padStart(2,"0")} ${p.watched?"\u2714":"\u2718"}`:p=>`S. ${p.seasonNum} ${p.watched?p.watched==100?"\u2714":`(${p.watched}%)`:"\u2718"}`,a=null,s=[],d=!0,!(!w&&+t(".season-count").text().split(" ")[0]<4||location.pathname.includes("/alternate/")&&location.pathname.split("/").filter(Boolean).length<6)&&(f.on("arrangeComplete",()=>{f.data("isotope")&&(a?c():o())}),t(document).off("ajaxSuccess.userscript48372").on("ajaxSuccess.userscript48372",(p,x,e)=>{e.url.includes("/rate")&&a&&c()})))))},{capture:!0});function o(){const p=t('<div id="seasons-episodes-chart-wrapper"><canvas></canvas></div>').insertBefore(f).children()[0];a=new Chart(p.getContext("2d"),{type:"line",data:v(),options:y()});const x=new IntersectionObserver(e=>{e.forEach(l=>{l.isIntersecting&&(x.disconnect(),document.hidden?t(document).one("visibilitychange",c):c())})},{threshold:1});x.observe(p),p.addEventListener("click",e=>{const l=a.getElementsAtEventForMode(e,"nearest",{axis:"x",intersect:!1},!0);if(!l.length)return;const m=l.sort((h,g)=>Math.abs(h.element.y-e.layerY)-Math.abs(g.element.y-e.layerY))[0];if(Math.abs(m.element.y-e.layerY)<10){const h=`${s[m.index].urlFull}${m.datasetIndex===3?"/comments":""}`;GM_openInTab(h,{active:!0})}else a.isZoomedOrPanned()&&a.resetZoom("active")})}async function c(){const p=await b();JSON.stringify(s)!==JSON.stringify(p)&&(s=p,a.data=v(),a.options=y(),a.update(),d&&(d=!1))}function b(){const p=f.data("isotope").filteredItems.filter(x=>n?x.element.dataset.seasonNumber!=="0":!0).map(async x=>{const e={generalRating:x.sortData.percentage,votes:x.sortData.votes,watchers:x.sortData.watchers,episodeNum:x.element.dataset.number||null,seasonNum:x.element.dataset.seasonNumber,urlFull:t(x.element).find('meta[itemprop="url"]').attr("content"),personalRating:t(x.element).find(".corner-rating > .text").text()||null,watched:t(x.element).find("a.watch.selected").attr("data-percentage")??0,releaseDate:t(x.element).find(".percentage").attr("data-earliest-release-date")};if(w)e.mainTitle=t(x.element).find(".under-info .main-title").text(),e.comments=t(x.element).find('.episode-stats > a[data-original-title="Comments"]').text()||0;else if(e.mainTitle=t(x.element).find('div[data-type="season"] .titles-link h3').text(),r){const l=await r.seasons.comments({id:x.element.dataset.showId,season:e.seasonNum,pagination:!0,limit:1});e.comments=l.pagination.item_count}else{const l=await fetch(x.element.dataset.url+".json");if(!l.ok)throw new Error(`XHR for: ${l.url} failed with status: ${l.status}`);e.comments=(await l.json()).stats.comment_count}return e});return Promise.all(w?p:p.reverse())}function u(p,x,e,...l){if(!p)return l.pop().color;const{ctx:m,chartArea:h,scales:g}=p.chart;if(h){if(m[x]??={},!m[x].gradient||m[x].height!==h.height||m[x].yAxisMin!==g[e].min||m[x].yAxisMax!==g[e].max){m[x].height=h.height,m[x].yAxisMin=g[e].min,m[x].yAxisMax=g[e].max;let k=g[e].max-g[e].min;k=k?g[e].max/k:1,k=h.bottom*k,m[x].gradient=m.createLinearGradient(0,k,0,h.top),l.forEach(_=>m[x].gradient.addColorStop(_.offset,_.color))}return m[x].gradient}}function v(){return{labels:s.map($),datasets:[{label:"Personal Rating",data:s.map(p=>p.personalRating?p.personalRating*10:null),yAxisID:"yAxisRating",borderColor:p=>u(p,"_ratingPersonal","yAxisRating",{offset:0,color:"rgb(97 97 97 / 0.6)"},{offset:.1,color:"rgb(97 97 97 / 0.6)"},{offset:1,color:"rgb(175 2 0)"}),backgroundColor:p=>u(p,"_ratingPersonal","yAxisRating",{offset:0,color:"rgb(97 97 97 / 0.6)"},{offset:.1,color:"rgb(97 97 97 / 0.6)"},{offset:1,color:"rgb(175 2 0)"})},{label:"General Rating",data:s.map(p=>p.generalRating),yAxisID:"yAxisRating",fill:{target:"-1",above:`rgb(255 0 0 / ${t("body").hasClass("dark-knight")?.15:.3})`,below:`rgb(0 255 0 / ${t("body").hasClass("dark-knight")?.15:.3})`},borderColor:p=>u(p,"_ratingGeneral","yAxisRating",{offset:0,color:"rgb(97 97 97 / 0.6)"},{offset:.1,color:"rgb(97 97 97 / 0.6)"},{offset:1,color:"rgb(225 31 117)"}),backgroundColor:p=>u(p,"_ratingGeneral","yAxisRating",{offset:0,color:"rgb(97 97 97 / 0.6)"},{offset:.1,color:"rgb(97 97 97 / 0.6)"},{offset:1,color:"rgb(225 31 117)"})},{label:"Watchers",data:s.map(p=>p.watchers),yAxisID:"yAxisWatchers",borderColor:p=>u(p,"_watchers","yAxisWatchers",{offset:0,color:"rgb(154 67 201 / 0.2)"},{offset:1,color:"rgb(154 67 201)"}),backgroundColor:p=>u(p,"_watchers","yAxisWatchers",{offset:0,color:"rgb(154 67 201 / 0.2)"},{offset:1,color:"rgb(154 67 201)"})},{label:"Comments",data:s.map(p=>p.comments),yAxisID:"yAxisComments",borderColor:p=>u(p,"_comments","yAxisComments",{offset:0,color:"rgb(54 157 226 / 0.2)"},{offset:1,color:"rgb(54 157 226)"}),backgroundColor:p=>u(p,"_comments","yAxisComments",{offset:0,color:"rgb(54 157 226 / 0.2)"},{offset:1,color:"rgb(54 157 226)"})}]}}function y(){return{responsive:!0,maintainAspectRatio:!1,interaction:{mode:"nearest",axis:"x",intersect:!1},animation:{delay:p=>p.type==="data"&&p.mode==="default"?(d?500:0)+p.dataIndex*(750/Math.max(s.length-1,1))+p.datasetIndex*100:0},scales:{x:{offset:!0},yAxisRating:{type:"linear",position:"left",offset:!0,suggestedMin:60,max:100,title:{display:!0,text:"Rating"},grid:{color:p=>p.tick.value%10?Chart.defaults.borderColor:"rgb(55 55 55)"},ticks:{callback:p=>`${p}%`}},yAxisWatchers:{type:"linear",position:"right",offset:!0,min:0,suggestedMax:10,title:{display:!0,text:"Watchers"},grid:{drawOnChartArea:!1},ticks:{callback:p=>i.formatTLC(p)}},yAxisComments:{type:"linear",position:"right",offset:!0,min:0,suggestedMax:10,title:{display:!0,text:"Comments"},grid:{drawOnChartArea:!1}}},plugins:{tooltip:{usePointStyle:!0,boxPadding:5,backgroundColor:"rgb(0 0 0 / 0.5)",caretSize:10,padding:{x:18,y:6},titleFont:{size:13,weight:"bold"},callbacks:{title:p=>{let x=s[p[0].parsed.x].mainTitle;return x=x.length>20?x.slice(0,20).trim()+"...":x,`${p[0].label}${x?`
${x}`:""}`},label:p=>{const x=p.parsed.x,e=p.parsed.y,l=unsafeWindow.userscriptAvgSeasonEpisodeRatings;return p.datasetIndex===0?`${e/10}${l?.personal?.average?`  (avg: ${l.personal.average.toFixed(1)})`:""}`:p.datasetIndex===1?`${e}%  (${i.formatTLC(s[x].votes)} v.)${l?.general?`  (avg: ${l.general.average?Math.round(l.general.average):"--"}%)`:""}`:p.datasetIndex===2?`${i.formatTLC(e)}${s[0].watchers?`  (${Math.round(e*100/s[0].watchers)}%)`:""}`:`${e}`},labelColor:p=>({borderColor:p.dataset.borderColor(),backgroundColor:p.dataset.backgroundColor()}),footer:p=>{const x=s[p[0].parsed.x].releaseDate;return x?unsafeWindow.formatDate?.(x)||x:void 0}}},legend:{labels:{usePointStyle:!0,filter:(p,x)=>x.datasets[p.datasetIndex].data.some(e=>e!==null)}},filler:{propagate:!1},zoom:{zoom:{mode:"x",drag:{enabled:!0,threshold:0}},limits:{x:{minRange:8}}}}}}function S(){GM_addStyle(`
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
  `)}})("Trakt.tv | Charts - Seasons"),gmStorage.fyk2l3vj&&(async D=>{"use strict";let t,r,f;const w={_defaults:{title:GM_info.script.name.replace("Trakt.tv","Userscript"),toast:!0,toastrOpt:{positionClass:"toast-top-right",timeOut:1e4,progressBar:!0},toastrStyles:"#toast-container#toast-container a { color: #fff !important; border-bottom: dotted 1px #fff; }"},_print(i,o,c="",b={}){const{title:u=this._defaults.title,toast:v=this._defaults.toast,toastrOpt:y,toastrStyles:S="",consoleStyles:p="",data:x}=b,e=`${c}${x!==void 0?" See console for details.":""}<style>${this._defaults.toastrStyles+S}</style>`;console[i](`%c${u}: ${c}`,p,...x!==void 0?[x]:[]),v&&r[o](e,u,{...this._defaults.toastrOpt,...y})},info(i,o){this._print("info","info",i,o)},success(i,o){this._print("info","success",i,{consoleStyles:"color:#00c853;",...o})},warning(i,o){this._print("warn","warning",i,o)},error(i,o){this._print("error","error",i,o)}},n={...GM_getValue("enhancedTitleMetadata")};GM_setValue("enhancedTitleMetadata",n),d(),document.addEventListener("turbo:load",async()=>{if(!/^\/(shows|movies)\//.test(location.pathname)||(t??=unsafeWindow.jQuery,r??=unsafeWindow.toastr,f??=unsafeWindow.userscriptTraktApiModule?.isFulfilled?await unsafeWindow.userscriptTraktApiModule:null,!t||!r))return;const i=t("#overview .additional-stats > li"),o=location.pathname.split("/").filter(Boolean);if(!i.length)return;const c=t("#summary-wrapper .year");c.parent().is("a")&&c.insertAfter(c.parent()),c.wrapAll(`<a href="/search/${o[0]}?years=${c.text().slice(0,4)}-${c.text().slice(-4)}"></a>`),t("#summary-wrapper div.certification").wrap(`<a href="${t("#external-link-imdb").attr("href").split("/episodes")[0]}/parentalguide"></a>`);const u=i.filter((g,k)=>t(k).find("label").text().toLowerCase()==="writers");u.find("label").wrap(`<a href="/search/${o[0]}?query=%22${u.find("a:not(.writers-expand)").get().map(g=>g.textContent).join("%22+%22")}%22&fields=people"></a>`);const v=i.filter(':has([itemprop="genre"])'),y=[];v.find('[itemprop="genre"]').each((g,k)=>{y[g]=t(k).text().toLowerCase().replaceAll(" ","-"),t(k).wrap(`<a href="/search/${o[0]}?genres=${y[g]}"></a>`)}),y.length>1&&v.find("label").wrap(`<a href="/search/${o[0]}?genres=+${y.join(",+")}"></a>`);const S=i.filter((g,k)=>t(k).find("label").text().toLowerCase()==="country");let p;if(S.length){const g=await $(),k=S.contents().get(-1)?.textContent;if(p=g[k],p){const _=unsafeWindow.watchnowAllCountries?.[p]?.image;_&&S.children().last().after(`<img class="country-flag" src="${_}">`),S.contents().filter((C,H)=>!t(H).is("meta, label")).wrapAll(`<a href="/search/${o[0]}?countries=${p}"></a>`)}else n.allCountriesMap=null,GM_setValue("enhancedTitleMetadata",n),w.error("Failed to match title country. Cached countries have been cleared. Reload page to try again.")}const x=i.filter((g,k)=>t(k).find("label").text().toLowerCase().startsWith("language")),e={};if(x.length){const g=await a(),k=Object.fromEntries(g);let _=x.contents().get(-1).textContent;if(g.forEach(([C,H],T)=>{const L=new RegExp(`${RegExp.escape(H)}(, |$)`);L.test(_)&&(e[_.indexOf(H)]=C,_=_.replace(L,P=>" ".repeat(P.length)))}),_.trim())n.allLanguagesArrSorted=null,GM_setValue("enhancedTitleMetadata",n),w.error(`Failed to match all title languages (ORIGINAL: ${x.contents().get(-1).textContent} REMAINDER: ${_.trim()}). Cached languages have been cleared. Reload page to try again.`);else{const C=Object.values(e);x.contents().last().replaceWith(C.map(H=>`<a href="/search/${o[0]}?languages=${H}">${k[H]}</a>`).join(", ")),C.length>1&&x.find("label").wrap(`<a href="/search/${o[0]}?languages=+${C.join(",+")}"></a>`)}}const l=i.filter((g,k)=>t(k).find("label").text().toLowerCase().startsWith("network")),m=i.filter((g,k)=>/airs|aired|premiered/i.test(t(k).find("label").text())).first();if(l.length&&o[3]!=="all"){const g={},k=await s(),_=Object.fromEntries(k);let C=l.contents().get(-1).textContent;if(k.forEach(([H,{name:T,countryId:L}],P)=>{const M=new RegExp(`${RegExp.escape(T)}(, |$)`);M.test(C)&&(L===p||Object.hasOwn(e,L)||T!==k[P+1]?.[1].name)&&(g[C.indexOf(T)]=H,C=C.replace(M,W=>" ".repeat(W.length)))}),C.trim())n.allNetworksArrSorted=null,GM_setValue("enhancedTitleMetadata",n),w.error(`Failed to match all title networks (ORIGINAL: ${l.contents().get(-1).textContent} REMAINDER: ${C.trim()}). Cached networks have been cleared. Reload page to try again.`);else{const H=Object.values(g);l.contents().last().replaceWith(H.map(T=>`<a href="/search/shows?network_ids=${T}">${_[T].name}${_[T].countryId?` (${_[T].countryId.toUpperCase()})`:""}</a>`).join("")),H.length>1&&(l.find("label").wrap(`<a href="/search/shows?network_ids=${H.join(",")}"></a>`),t(`<a href onclick="$(this).hide(); $(this).next().show(); return false;"> + ${H.length-1} more</a>`).insertAfter(l.children().eq(1)).nextAll().wrapAll('<span style="display: none;"></span>')),l.find("a:not(:has(label), [onclick])").slice(1).before(", ")}}else if(m.text().includes(" on ")&&o[3]!=="all"){const g=await s(),k=m.contents().last().text().split(" on ")[1],_=k?g.find(([C,{name:H,countryId:T}],L)=>new RegExp(`${RegExp.escape(H)}(, |$)`).test(k)&&(T===p||Object.hasOwn(e,T)||H!==g[L+1]?.[1].name)):null;_?(m.contents().last().remove(),m.append(` on <a href="/search/shows?network_ids=${_[0]}">${_[1].name}${_[1].countryId?` (${_[1].countryId.toUpperCase()})`:""}</a>`)):(n.allNetworksArrSorted=null,GM_setValue("enhancedTitleMetadata",n),w.error(`Failed to match title network (${k}). Cached networks have been cleared. Reload page to try again.`))}const h=i.filter((g,k)=>t(k).find("label").text().toLowerCase().startsWith("studio"));if(h.length)if(f){let g=!1;const k=async function(_){if(g)return;g=!0,_?.preventDefault(),unsafeWindow.showLoading?.();const C=await f[o[0]].studios({id:t(".summary-user-rating").attr(`data-${o[0].slice(0,-1)}-id`)}),H=C.map(T=>T.ids.trakt).join();if(unsafeWindow.hideLoading?.(),_){const T=`/search/${o[0]}?studio_ids=${t(this).find("label").length?H:C[0].ids.trakt}`;_.type==="click"?location.href=T:_.originalEvent.button===1&&GM_openInTab(location.origin+T,{setParent:!0})}h.children().eq(0).attr("href",`/search/${o[0]}?studio_ids=${H}`),h.children().eq(1).attr("href",`/search/${o[0]}?studio_ids=${C[0].ids.trakt}`),h.find(".studios-more").html(C.slice(1).map(T=>`, <a href="${T.ids.trakt}">${T.name}</a>`))};h.find("label").wrap(t('<a href="#"></a>').one("click auxclick",k)),h.contents().eq(1).wrap(t('<a href="#"></a>').one("click auxclick",k)),h.find(".studios-expand").one("click",()=>k())}else{const g=new Set,k=h.find(".studios-more"),_=h.find(".studios-expand"),C=k.text().split(", ").slice(1),H=+_.text().match(/\d+/)?.[0]||null,T=M=>fetch("/autocomplete/studios?query="+encodeURIComponent(M)).then(W=>W.json()).then(W=>Object.fromEntries(W.map(({label:R,value:O,tag:A})=>[R,+O,A?.toLowerCase()??null]).sort(([R,O,A],[E,I,j])=>R===E?(A&&(A===p||Object.hasOwn(e,A)))-(j&&(j===p||Object.hasOwn(e,j)))||I-O:0))),L=async function(M){M?.preventDefault(),t(this).off(),unsafeWindow.showLoading?.();const W=t(this).text(),R=await T(W),O=R[W];if(unsafeWindow.hideLoading?.(),O){g.add(O);const A=`/search/${o[0]}?studio_ids=${O}`;M&&(M.type==="click"?location.href=A:M.originalEvent.button===1&&GM_openInTab(location.origin+A,{setParent:!0})),t(this).attr("href",A)}else w.error("Failed to match title studio: "+W,{data:R})},P=async()=>{if(g.size>1)return;unsafeWindow.showLoading?.();const M=await Promise.all(C.map(R=>T(R).then(O=>[R,O])));let W=-1;unsafeWindow.hideLoading?.(),k.html(M.map(([R,O],A)=>{if(A<=W)return null;let E;for(let I=A;I<M.length;I++)I!==A&&(R+=", "+M[I][0]),O[R]&&(W=I,E=[R,O[R]]);if(E)return g.add(E[1]),`, <a href="/search/${o[0]}?studio_ids=${E[1]}">${E[0]}</a>`;throw w.error("Failed to match all title studios. Could not match: "+M[A][0],{data:O}),new Error("Failed to match all title studios.")}).join(""))};h.contents().eq(1).wrap(t('<a href="#"></a>').on("click auxclick",L)),H&&(H===1?k.text(", ").append(t(`<a href="#">${C.join(", ")}</a>`).on("click auxclick",L)):H===C.length?(k.empty(),C.forEach(M=>k.append(", ",t(`<a href="#">${M}</a>`).on("click auxclick",L)))):_.one("click",P),h.find("label").wrap('<a href="#"></a>').parent().on("click auxclick",async function(M){M.preventDefault(),t(this).off(),await Promise.all([...h.find('a[href="#"]:not(:has(label), .studios-expand)').get().map(R=>L.call(R)),P()]);const W=`/search/${o[0]}?studio_ids=${Array.from(g).join(",")}`;M.type==="click"?location.href=W:M.originalEvent.button===1&&GM_openInTab(location.origin+W,{setParent:!0}),t(this).attr("href",W)}))}},{capture:!0});async function $(){if(!n.allCountriesMap){const i=await fetch("/search/movies").then(o=>o.text()).then(o=>new DOMParser().parseFromString(o,"text/html"));n.allCountriesMap=JSON.stringify(Object.fromEntries(t(i).find("#filter-countries").children().get().map(o=>[t(o).text(),t(o).attr("value").toLowerCase()]))),GM_setValue("enhancedTitleMetadata",n)}return JSON.parse(n.allCountriesMap)}async function a(){if(!n.allLanguagesArrSorted){const i=await fetch("/search/movies").then(o=>o.text()).then(o=>new DOMParser().parseFromString(o,"text/html"));n.allLanguagesArrSorted=JSON.stringify(t(i).find("#filter-languages").children().get().map(o=>[t(o).attr("value"),t(o).text()]).sort(([,o],[,c])=>c.length-o.length)),GM_setValue("enhancedTitleMetadata",n)}return JSON.parse(n.allLanguagesArrSorted)}async function s(){if(!n.allNetworksArrSorted){const i=await fetch("/search/shows").then(c=>c.text()).then(c=>new DOMParser().parseFromString(c,"text/html")),o=new Intl.Collator;n.allNetworksArrSorted=JSON.stringify(t(i).find("#filter-network_ids").children().get().map(c=>t(c).text()?[+t(c).attr("value"),{name:t(c).text(),countryId:t(c).attr("data-tag")?.toLowerCase()}]:null).filter(Boolean).sort(([c,{name:b,countryId:u}],[v,{name:y,countryId:S}])=>y.length-b.length||o.compare(b,y)||(S&&1)-(u&&1)||v-c)),GM_setValue("enhancedTitleMetadata",n)}return JSON.parse(n.allNetworksArrSorted)}function d(){GM_addStyle(`
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
  `)}})("Trakt.tv | Enhanced Title Metadata"),gmStorage.kji85iek&&(async D=>{"use strict";let t;w(),document.addEventListener("turbo:load",()=>{t??=unsafeWindow.jQuery,t&&(unsafeWindow.ratingOverlay=r,f(),t(document).off("ajaxSuccess.userscript12944").on("ajaxSuccess.userscript12944",(n,$,a)=>{a.url.endsWith("/popular_lists")&&(f(),unsafeWindow.addOverlays())}))},{capture:!0});function r(n,$){if(!n.length){const a=n.end();a.closest(".personal-list").length&&a.hasClass("poster")&&(n=a)}n.find(".corner-rating").length||n.prepend(`<div class="corner-rating corner-rating-${$}"><div class="text">${$}</div></div>`)}function f(){t(".personal-list .poster[data-url]:not(:has(> a))").each(function(){t(this).children().wrapAll(`<a href="${t(this).attr("data-url")}"></a>`)})}unsafeWindow.userscriptAddLinksToListPreviewPosters=f;function w(){GM_addStyle(`
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
  `)}})("Trakt.tv | Enhanced List Preview Posters"),gmStorage.p2o98x5r&&(async D=>{"use strict";t(),document.addEventListener("turbo:load",()=>{if(!/^\/users\/[^\/]+\/lists$/.test(location.pathname))return;const r=unsafeWindow.jQuery;if(!r)return;const f=r("#sortable-grid"),w=f.children().length?r('<hr id="all-in-one-lists-view-spacer">').insertAfter(f):void 0,n=r('<button id="all-in-one-lists-view-btn" type="button">All-in-One Lists View</button>').insertAfter(w??f);n.on("click",async()=>{n.text("Loading...").prop("disabled",!0);const $=async c=>fetch(location.pathname+c).then(b=>b.text()).then(b=>r(new DOMParser().parseFromString(b,"text/html")).find(".personal-list"));let a=r((await Promise.all(["/collaborations","/liked","/liked/official"].map($))).flatMap(c=>c.get()));const s=r(".personal-list"),d=s.map((c,b)=>r(b).attr("data-list-id")).get();if(a=a.filter((c,b)=>!d.includes(r(b).attr("data-list-id"))),!a.length){n.text("No other lists found.");return}const i=+s.last().attr("data-rank");a.each((c,b)=>r(b).attr("data-rank",i+c+1)),a.find(".btn-list-progress").click(function(){unsafeWindow.showLoading();const c=r(this).attr("data-list-id");c&&unsafeWindow.userSettings?.user.vip?unsafeWindow.redirect(unsafeWindow.userURL("progress?list="+c)):unsafeWindow.redirect("/vip/list-progress")}).end().find(".btn-list-subscribe").click(function(){unsafeWindow.showLoading();const c=r(this).attr("data-list-id");c&&unsafeWindow.userSettings?.user.vip?r.post(`/lists/${c}/subscribe`,function(b){unsafeWindow.redirect(b.url)}).fail(function(){unsafeWindow.hideLoading(),unsafeWindow.toastr.error("Doh! We ran into some sort of error.")}):unsafeWindow.redirect("/vip/calendars")}).end().find(".collaborations-deny").on("ajax:success",function(c,b){r("#collaborations-deny-"+b.id).children().addClass("trakt-icon-delete-thick"),r("#collaborations-approve-"+b.id).addClass("off"),r("#collaborations-block-"+b.id).addClass("off")});const o=r("#btn-list-edit-lists");o.hasClass("active")&&o.trigger("click"),o.hide(),f.append(a),w?.remove(),n.remove(),unsafeWindow.genericTooltips(),unsafeWindow.vipTooltips(),unsafeWindow.shareIcons(),unsafeWindow.convertEmojis(),unsafeWindow.userscriptAddLinksToListPreviewPosters?.(),unsafeWindow.addOverlays(),unsafeWindow.$grid?.isotope("insert",a),unsafeWindow.updateListsCount(),unsafeWindow.lazyLoadImages(),unsafeWindow.renderReadmore()})},{capture:!0});function t(){GM_addStyle(`
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
  `)}})("Trakt.tv | All-in-One Lists View"),gmStorage.pmdf6nr9&&(async D=>{"use strict";let t,r;const f=new Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:1});f.formatTLC=i=>f.format(i).toLowerCase(),d(),document.addEventListener("turbo:load",async()=>{if(!/^\/(shows|movies)\//.test(location.pathname)||(t??=unsafeWindow.jQuery,r??=unsafeWindow.userscriptTraktApiModule?.isFulfilled?await unsafeWindow.userscriptTraktApiModule:null,!t))return;const i=t("#summary-wrapper"),o=i.find("#summary-ratings-wrapper"),c=o.find(".trakt-rating > a").attr("href");if(!c)return;const b=t('<div id="ratings-distribution-chart-wrapper"><canvas></canvas></div>').appendTo(i.find(".shadow-base")).find("canvas"),[u,v]=await Promise.all([w(c),n(i)]),y=()=>{new Chart(b[0].getContext("2d"),{type:"bar",data:a(u,v),options:s(u,o)})};document.hidden?t(document).one("visibilitychange",y):y()},{capture:!0});async function w(i){let o;if(r){const c=i.split("/").slice(1,-1),b=isNaN(c[1])?c[1]:t(".summary-user-rating").attr(`data-${c[0].slice(0,-1)}-id`),u=await r[c[4]??c[2]??c[0]].ratings({id:b,season:c[3],episode:c[5]});o={distribution:Object.values(u.distribution),votes:u.votes}}else{const c=await fetch(i),b=new DOMParser().parseFromString(await c.text(),"text/html");o={distribution:JSON.parse(t(b).find("#charts-wrapper script").text().match(/ratingsDistribution = (\[.*\])/)[1]),votes:t("#summary-ratings-wrapper").data("vote-count")}}return o.distribution.length===11&&(console.warn(GM_info.script.name.replace("Trakt.tv","Userscript")+": Malformed ratings distribution data.",o.distribution.toString()),o.distribution.shift()),o}function n(i){const o=i.find("> .full-screenshot"),c=async()=>{const b=o.css("background-image").match(/https.*webp/)?.[0];if(!b)return .5;const u=await GM.xmlHttpRequest({url:b,responseType:"blob",fetch:!0});if(u.status!==200)throw new Error(`XHR for: ${u.finalUrl} failed with status: ${u.status}`);const v=URL.createObjectURL(u.response),y=new Image;y.src=v,await y.decode(),URL.revokeObjectURL(v);const S=document.createElement("canvas");S.width=y.naturalWidth,S.height=y.naturalHeight;const p=S.getContext("2d");p.drawImage(y,0,0);const x=y.naturalWidth/4,e=y.naturalHeight/4,l=p.getImageData(3*x,2*e,x,e).data;let m=0,h=l.length/16;for(let g=0;g<l.length;g+=16)m+=(.299*l[g]+.587*l[g+1]+.114*l[g+2])/255;return m/h};return o.attr("style")?c():new Promise(b=>{new MutationObserver((u,v)=>{v.disconnect(),b(c())}).observe(o[0],{attributeFilter:["style"]})})}function $(i,o,c,...b){if(!i)return b.pop().color;const{ctx:u,chartArea:v,scales:y}=i.chart;if(v){if(u[o]??={},!u[o].gradient||u[o].height!==v.height||u[o].yAxisMin!==y[c].min||u[o].yAxisMax!==y[c].max){let S=y[c].max-y[c].min;S=S?y[c].max/S:1,S=v.bottom*S,u[o].gradient=u.createLinearGradient(0,S,0,v.top),b.forEach(p=>u[o].gradient.addColorStop(p.offset,p.color)),u[o].height=v.height,u[o].yAxisMin=y[c].min,u[o].yAxisMax=y[c].max}return u[o].gradient}}function a(i,o){return{labels:[...Array(10)].map((c,b)=>String(b+1)),datasets:[{label:"Votes",data:i.distribution,categoryPercentage:1,barPercentage:.97,backgroundColor:`rgba(${Array(3).fill(Math.min(o+.35,1)*255).join(", ")}, ${Math.min(o+.3,.7)})`,hoverBackgroundColor:c=>$(c,"_votes","y",{offset:0,color:`rgba(155, 66, 200, ${Math.min(o+.3,.7)})`},{offset:.9,color:`rgba(255, 0, 0, ${Math.min(o+.3,.7)})`})}]}}function s(i,o){return{responsive:!0,maintainAspectRatio:!1,minBarLength:2,interaction:{mode:"index",intersect:!1},animation:{delay:c=>c.type==="data"&&c.mode==="default"?250+c.dataIndex*(750/(i.distribution.length-1)):0},scales:{x:{display:!1},y:{display:!1,suggestedMax:10}},plugins:{tooltip:{displayColors:!1,backgroundColor:"rgba(0, 0, 0, 0.7)",caretSize:10,padding:{x:12,y:5},titleAlign:"center",titleMarginBottom:2,titleFont:{weight:"bold"},bodyAlign:"center",bodyColor:"rgb(170, 170, 170)",bodyFont:{size:11},footerAlign:"center",footerColor:c=>`hsl(0, ${c.tooltip.dataPoints[0].parsed.x*11}%, 35%)`,footerMarginTop:2,footerFont:{size:18},callbacks:{title:c=>{const b=c[0].label;return`${b} - ${unsafeWindow.ratingsText?.[b]}`},label:c=>{const b=c.parsed.y;return`${i.votes>0?(b*100/i.votes).toFixed(1):"--"}% (${f.formatTLC(b)} v.)`},footer:c=>{const b=o.find('.summary-user-rating > :not([style="display: none;"]) > [class*="rating-"]').first().attr("class")?.match(/rating-(\d+)/)?.[1];return c[0].parsed.x===b-1?"\u2764":""}}},legend:{display:!1}},onClick:(c,b)=>{if(!b.length)return;const u=b[0].index+1;o.find(".summary-user-rating:not(.popover-on)").trigger("click"),setTimeout(()=>t(`.needsclick.rating-${u}`).trigger("mouseover").trigger("click"),500)}}}function d(){GM_addStyle(`
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
  `)}})("Trakt.tv | Charts - Ratings Distribution"),gmStorage.txw82860&&(async D=>{"use strict";const t=document.cookie.match(/(?:^|; )trakt_userslug=([^;]*)/)?.[1],r={historySorting:(a,[s=1,...d]=[])=>({hrefPrefix:a,entries:(i=>i.with(s,{...i.at(s),anchor:!0}))([{text:"SORT BY"},{text:"Watched Date",href:"/added"},{text:"Plays",href:"/plays"},{text:"Time Spent",href:"/time"},{text:"Title",href:"/title"},{text:"Release Date",href:"/released"},{text:"Runtime",href:"/runtime"},{text:"Popularity",href:"/popularity"},{text:"Percentage",href:"/percentage"},{text:"Votes",href:"/votes"}])}),progressSorting:(a,[s=1,...d]=[])=>({hrefPrefix:a,entries:(i=>i.with(s,{...i.at(s),anchor:!0}))([{text:"SORT BY"},{text:"Watched Date",href:"/added"},{text:"Completion %",href:"/completed"},{text:"Episodes Left",href:"/episodes"},{text:"Time Left",href:"/time"},{text:"Plays",href:"/plays"},{text:"Release Date",href:"/released"},{text:"Premiere Date",href:"/premiered"},{text:"Title",href:"/title"},{text:"Popularity",href:"/popularity"},{text:"Episode Runtime",href:"/runtime"},{text:"Total Runtime",href:"/total-runtime"},{text:"Random",href:"/random"}])}),librarySorting:(a,[s=1,...d]=[])=>({hrefPrefix:a,entries:(i=>i.with(s,{...i.at(s),anchor:!0}))([{text:"SORT BY"},{text:"Added Date",href:"/added"},{text:"Title",href:"/title"},{text:"Release Date",href:"/released"},.../\/shows/.test(a)?[{text:"Episode Count",href:"/episodes"}]:[],.../\/episodes/.test(a)?[]:[{text:"Runtime",href:"/runtime"},{text:"Popularity",href:"/popularity"}],{text:"Percentage",href:"/percentage"},{text:"Votes",href:"/votes"}])}),ratingSelection:(a,[s=1,...d]=[])=>({hrefPrefix:a,entries:(i=>i.with(s,{...i.at(s),anchor:!0}))([{text:"RATING"},{text:"All Ratings",href:"/all",submenu:r.ratingsSorting(a+"/all",d)},{text:"10 - Totally Ninja!",href:"/10",submenu:r.ratingsSorting(a+"/10",d)},{text:"9 - Superb",href:"/9",submenu:r.ratingsSorting(a+"/9",d)},{text:"8 - Great",href:"/8",submenu:r.ratingsSorting(a+"/8",d)},{text:"7 - Good",href:"/7",submenu:r.ratingsSorting(a+"/7",d)},{text:"6 - Fair",href:"/6",submenu:r.ratingsSorting(a+"/6",d)},{text:"5 - Meh",href:"/5",submenu:r.ratingsSorting(a+"/5",d)},{text:"4 - Poor",href:"/4",submenu:r.ratingsSorting(a+"/4",d)},{text:"3 - Bad",href:"/3",submenu:r.ratingsSorting(a+"/3",d)},{text:"2 - Terrible",href:"/2",submenu:r.ratingsSorting(a+"/2",d)},{text:"1 - Weak Sauce :(",href:"/1",submenu:r.ratingsSorting(a+"/1",d)}])}),ratingsSorting:(a,[s=1,...d]=[])=>({hrefPrefix:a,entries:(i=>i.with(s,{...i.at(s),anchor:!0}))([{text:"SORT BY"},{text:"Rated Date",href:"/added"},{text:"Rating",href:"/rating"},.../\/ratings\/all/.test(a)?[]:[{text:"Title",href:"/title"},{text:"Release Date",href:"/released"},.../\/(movies|shows)/.test(a)?[{text:"Runtime",href:"/runtime"},{text:"Popularity",href:"/popularity"}]:[],{text:"Percentage",href:"/percentage"},{text:"Votes",href:"/votes"}]])}),listsViewSorting:(a,[s=1,...d]=[])=>({hrefPrefix:a,entries:(i=>i.with(s,{...i.at(s),anchor:!0}))([{text:"SORT BY"},.../\/lists\?/.test(a)?[{text:"Rank",href:"rank"}]:[],.../\/liked/.test(a)?[{text:"Like Date",href:"liked"}]:[],{text:"Updated Date",href:"updated"},{text:"Title",href:"title"},{text:"Likes",href:"likes"},{text:"Comments",href:"comments"},{text:"Items",href:"items"},{text:"Random",href:"random"}])}),listSorting:(a,[s=1,...d]=[])=>({hrefPrefix:a,entries:(i=>i.with(s,{...i.at(s),anchor:!0}))([{text:"SORT BY"},{text:"Rank",href:"rank"},{text:"Added Date",href:"added"},{text:"Title",href:"title"},{text:"Release Date",href:"released"},{text:"Runtime",href:"runtime"},{text:"Popularity",href:"popularity"},{text:"Random",href:"random"},{},{text:"Trakt Percentage",href:"percentage"},{text:"Trakt Votes",href:"votes"},.../\/watchlist\?sort=/.test(a)&&t?[{text:"Rotten Tomatoes <em>(mdb)</em>",href:`https://mdblist.com/watchlist/${t}?sort=rtomatoes&sortorder=asc`,useHrefPrefix:!1},{text:"Metacritic <em>(mdb)</em>",href:`https://mdblist.com/watchlist/${t}?sort=metacritic&sortorder=asc`,useHrefPrefix:!1},{text:"MyAnimeList <em>(mdb)</em>",href:`https://mdblist.com/watchlist/${t}?sort=myanimelist&sortorder=asc`,useHrefPrefix:!1}]:[],{},{text:"My Rating",href:"my_rating"},{text:"Watched Date",href:"watched"},{text:"Collected Date",href:"collected"}])}),commentType:(a,[s=1,...d]=[])=>({hrefPrefix:a,entries:(i=>i.with(s,{...i.at(s),anchor:!0}))([{text:"TYPE"},{text:"All Types",href:"/all",submenu:r.commentSorting(a+"/all",d)},{text:"Movies",href:"/movies",submenu:r.commentSorting(a+"/movies",d)},{text:"Shows",href:"/shows",submenu:r.commentSorting(a+"/shows",d)},{text:"Seasons",href:"/seasons",submenu:r.commentSorting(a+"/seasons",d)},{text:"Episodes",href:"/episodes",submenu:r.commentSorting(a+"/episodes",d)},{text:"Lists",href:"/lists",submenu:r.commentSorting(a+"/lists",d)}])}),commentSorting:(a,[s=1,...d]=[])=>({hrefPrefix:a,entries:(i=>i.with(s,{...i.at(s),anchor:!0}))([{text:"SORT BY"},{text:"Added Date",href:"/added"},{text:"Reactions <em>(30 Days)</em>",href:"/likes_30"},{text:"Reactions <em>(All Time)</em>",href:"/likes"},{text:"Replies <em>(30 Days)</em>",href:"/replies_30"},{text:"Replies <em>(All Time)</em>",href:"/replies"},{text:"Plays",href:"/plays"},{text:"Rating",href:"/rating"}])}),hiddenItemsSorting:(a,[s=1,...d]=[])=>({hrefPrefix:a,entries:(i=>i.with(s,{...i.at(s),anchor:!0}))([{text:"SORT BY"},{text:"Title",href:"/title"},{text:"Date",href:"/data"}])}),showsMoviesCatTimePeriod:(a,[s=-1,...d]=[])=>({hrefPrefix:a,entries:(i=>i.with(s,{...i.at(s),anchor:!0}))([{text:"PERIOD"},{text:"Day",href:"/daily"},{text:"Week",href:"/weekly"},{text:"Month",href:"/monthly"},.../\/streaming/.test(a)?[]:[{text:"All Time",href:"/all"}]])})},f={'.btn-profile a[href$="/history"]':{hrefPrefix:"/users/me/history",entries:[{text:"TYPE"},{text:"All Types",href:"/all",anchor:!0},{text:"Movies",href:"/movies",submenu:r.historySorting("/users/me/history/movies")},{text:"Shows",href:"/shows",submenu:r.historySorting("/users/me/history/shows")},{text:"Episodes",href:"/episodes",submenu:r.historySorting("/users/me/history/episodes")}]},'.btn-profile a[href$="/library"]':{hrefPrefix:"/users/me/library",entries:[{text:"TYPE"},{text:"All Types",href:"/all",anchor:!0},{text:"Movies",href:"/movies",submenu:r.librarySorting("/users/me/library/movies")},{text:"Shows",href:"/shows",submenu:r.librarySorting("/users/me/library/shows")},{text:"Episodes",href:"/episodes",submenu:r.librarySorting("/users/me/library/episodes")}]},'.btn-profile a[href$="/progress"]':{hrefPrefix:"/users/me/progress",entries:[{text:"SHOWS"},{text:"Watched",href:"/watched",anchor:!0,submenu:r.progressSorting("/users/me/progress/watched")},{text:"Dropped",href:"/dropped",submenu:r.progressSorting("/users/me/progress/dropped")},{text:"Library",href:"/library",submenu:r.progressSorting("/users/me/progress/library")},...unsafeWindow.userscriptPlaybackProgressManager?[{},{text:"PLAYBACK"},{text:"All Types",href:"/playback"},{text:"Movies",href:"/playback/movies"},{text:"Episodes",href:"/playback/episodes"}]:[]]},'.btn-profile a[href$="/ratings"]':{hrefPrefix:"/users/me/ratings",entries:[{text:"TYPE"},{text:"All Types",href:"/all",anchor:!0,submenu:r.ratingSelection("/users/me/ratings/all")},{text:"Movies",href:"/movies",submenu:r.ratingSelection("/users/me/ratings/movies",[,4])},{text:"Shows",href:"/shows",submenu:r.ratingSelection("/users/me/ratings/shows",[,4])},{text:"Seasons",href:"/seasons",submenu:r.ratingSelection("/users/me/ratings/seasons",[,-1])},{text:"Episodes",href:"/episodes",submenu:r.ratingSelection("/users/me/ratings/episodes",[,-1])}]},'.btn-profile a[href$="/lists"]':{hrefPrefix:"/users/me/lists",entries:[{text:"Watchlist",href:"/users/me/watchlist",useHrefPrefix:!1,submenu:{hrefPrefix:"/users/me/watchlist?display=",entries:[{text:"TYPE"},{text:"All Types",href:"/users/me/watchlist",useHrefPrefix:!1,anchor:!0,submenu:r.listSorting("/users/me/watchlist?sort=",[3])},{text:"Movies",href:"movie",submenu:r.listSorting("/users/me/watchlist?display=movie&sort=",[3])},{text:"Shows",href:"show",submenu:r.listSorting("/users/me/watchlist?display=show&sort=",[3])},{text:"Seasons",href:"season",submenu:r.listSorting("/users/me/watchlist?display=season&sort=",[3])},{text:"Episodes",href:"episode",submenu:r.listSorting("/users/me/watchlist?display=episode&sort=",[3])}]}},{text:"Favorites",href:"/users/me/favorites",useHrefPrefix:!1,submenu:{hrefPrefix:"/users/me/favorites?display=",entries:[{text:"TYPE"},{text:"All Types",href:"/users/me/favorites",useHrefPrefix:!1,anchor:!0,submenu:r.listSorting("/users/me/favorites?sort=",[3])},{text:"Movies",href:"movie",submenu:r.listSorting("/users/me/favorites?display=movie&sort=",[3])},{text:"Shows",href:"show",submenu:r.listSorting("/users/me/favorites?display=show&sort=",[3])}]}},{},{text:"YOUR LISTS"},{text:"Personal Lists",href:"",submenu:r.listsViewSorting("/users/me/lists?sort=")},{text:"Collaborations",href:"/collaborations",submenu:r.listsViewSorting("/users/me/lists/collaborations?sort=")},{},{text:"LIKED LISTS"},{text:"Personal Lists",href:"/liked",submenu:r.listsViewSorting("/users/me/lists/liked?sort=")},{text:"Official Lists",href:"/liked/official",submenu:r.listsViewSorting("/users/me/lists/liked/official?sort=")}]},'.btn-profile a[href$="/comments"]':{hrefPrefix:"/users/me/comments",entries:[{text:"YOUR COMMENTS"},{text:"All Comments",href:"/all",anchor:!0,submenu:r.commentType("/users/me/comments/all")},{text:"Reviews",href:"/reviews",submenu:r.commentType("/users/me/comments/reviews")},{text:"Shouts",href:"/shouts",submenu:r.commentType("/users/me/comments/shouts")},{text:"Replies",href:"/replies",submenu:r.commentType("/users/me/comments/replies")},{},{text:"REACTIONS"},{text:"All Comments",href:"/liked/all",submenu:r.commentType("/users/me/comments/liked/all",[-1,-1])},{text:"Reviews",href:"/liked/reviews",submenu:r.commentType("/users/me/comments/liked/reviews",[-1,-1])},{text:"Shouts",href:"/liked/shouts",submenu:r.commentType("/users/me/comments/liked/shouts",[-1,-1])},{text:"Replies",href:"/liked/replies",submenu:r.commentType("/users/me/comments/liked/replies",[-1,-1])}]},'.btn-profile a[href$="/notes"]':{hrefPrefix:"/users/me/notes",entries:[{text:"All Types",href:"/all"},{},{text:"MEDIA ITEMS"},{text:"Movies",href:"/movies"},{text:"Shows",href:"/shows"},{text:"Seasons",href:"/seasons"},{text:"Episodes",href:"/episodes"},{text:"People",href:"/people"},{},{text:"YOUR ACTIVITIES"},{text:"History",href:"/history"},{text:"Library",href:"/collection"},{text:"Ratings",href:"/ratings"}]},'.btn-profile a[href$="/network"]':{hrefPrefix:"/users/me/network",entries:[{text:"Following",href:"/following/added"},{text:"Following <em>(Pending)</em>",href:"/following_pending/added"},{text:"Followers",href:"/followers/added"}]},'.btn-profile a[href="/widgets"]':{hrefPrefix:"/widgets",entries:[{text:"Watched",href:"/watched"},{text:"Library",href:"/library"},{text:"Profile",href:"/profile"}]},'.btn-profile a:contains("Quick Actions")':{entries:[{text:'<span class="toggle-dark-mode">Toggle Dark Mode<span class="right fa-solid fa-moon"></span></span>',onclick:"toggleDarkMode(); return false;"},{text:"Clear Search History",onclick:"showLoading(); $.post(`/users/me/clear_search_history`).done(() => { toastr.success(`Your search history was cleared.`); cacheUserData(true); }).always(hideLoading); return false;"},{text:"Re-cache Progress Data",onclick:"showLoading(); $.post(`/users/me/reset_progress_cache`).done(() => { toastr.success(`Your progress cache will be updated in a few minutes.`); }).always(hideLoading); return false;"},{text:"Re-cache Browser Data",onclick:"window.reopenOverlays = [null]; window.afterLoadingBottomMessage = `Your browser data is reset!`; showLoading(`Please wait for the caching to fully complete.`); resetUserData(); return false;"}]},'.btn-profile a[href="/settings"]':{hrefPrefix:"/settings",entries:[{text:"Advanced",href:"/advanced"},{text:"Your API Apps",href:"/oauth/applications",useHrefPrefix:!1,submenu:{entries:[{text:'<span class="hidden-xs left fa fa-book"></span>API Docs',href:"/b/api-docs"},{text:'<span class="hidden-xs left fa fa-github"></span>Developer Forum',href:"/b/dev-forum"},{text:'<span class="hidden-xs left fa trakt-icon-trakt"></span>Branding',href:"/branding"},{text:'<span class="hidden-xs left fa fa-plus-circle"></span>New Application',href:"/oauth/applications/new"}]}},{text:"Connected Apps",href:"/oauth/authorized_applications",useHrefPrefix:!1,submenu:{entries:[{text:"Activate Device",href:"/activate"}]}},{text:"Reports",href:"/reports",submenu:{hrefPrefix:"/reports",entries:[{text:"STATUS"},{text:"All Reports",href:"/all",anchor:!0},{text:"Approved",href:"/approved"},{text:"Paused",href:"/paused"},{text:"Rejected",href:"/rejected"},{text:"Pending",href:"/pending"}]}},{text:"Hidden Items",href:"/hidden",submenu:{hrefPrefix:"/settings/hidden",entries:[{text:"Dropped Shows",href:"/dropped",submenu:r.hiddenItemsSorting("/settings/hidden/dropped")},{},{text:"Progress",href:"/watched",submenu:r.hiddenItemsSorting("/settings/hidden/watched")},{text:"Library",href:"/collected",submenu:r.hiddenItemsSorting("/settings/hidden/collected")},{text:"Calendar",href:"/calendars",submenu:r.hiddenItemsSorting("/settings/hidden/calendars")},{},{text:"Rewatching",href:"/rewatching",submenu:r.hiddenItemsSorting("/settings/hidden/rewatching")},{text:"Blocked Users",href:"/comments",submenu:r.hiddenItemsSorting("/settings/hidden/comments")}]}},{text:"Plex Sync",href:"/plex"},{text:"Streaming Sync",href:"/scrobblers"},{text:"Notifications",href:"/notifications"},{text:"Sharing",href:"/sharing"},{text:"Data",href:"/data"},{text:"General",href:"",anchor:!0,submenu:{hrefPrefix:"/settings",entries:[{text:"Change Password",href:"#password"},{text:"Appearance",href:"#appearance"},{text:"Search",href:"#search"},{text:"Progress",href:"#progress"},{text:"Profile",href:"#profile"},{text:"Year in Review",href:"#yir"},{text:"Calendars",href:"#calendars"},{text:"Dashboard",href:"#dashboard"},{text:"Spoilers",href:"#spoilers"},{text:"Watch Now",href:"#watchnow"},{text:"Rewatching",href:"#rewatching"},{text:"Global",href:"#global"},{text:"Date & Time",href:"#datetime"},{text:"Account",href:"#account",anchor:!0}]}}]},':is(.btn-mobile-links, .links-wrapper) a[href^="/shows"]':{hrefPrefix:"/shows",entries:[{text:"Trending",href:"/trending"},{text:"Recommendations",href:"/recommendations"},{text:"Streaming Charts",href:"/streaming",submenu:r.showsMoviesCatTimePeriod("/shows/streaming",[1])},{text:"Anticipated",href:"/anticipated"},{text:"Popular",href:"/popular"},{text:"Favorited",href:"/favorited",submenu:r.showsMoviesCatTimePeriod("/shows/favorited")},{text:"Watched",href:"/watched",submenu:r.showsMoviesCatTimePeriod("/shows/watched")},{text:"Libraries",href:"/library",submenu:r.showsMoviesCatTimePeriod("/shows/library")}]},':is(.btn-mobile-links, .links-wrapper) a[href^="/movies"]':{hrefPrefix:"/movies",entries:[{text:"Trending",href:"/trending"},{text:"Recommendations",href:"/recommendations"},{text:"Streaming Charts",href:"/streaming",submenu:r.showsMoviesCatTimePeriod("/movies/streaming",[1])},{text:"Anticipated",href:"/anticipated"},{text:"Popular",href:"/popular"},{text:"Favorited",href:"/favorited",submenu:r.showsMoviesCatTimePeriod("/movies/favorited")},{text:"Watched",href:"/watched",submenu:r.showsMoviesCatTimePeriod("/movies/watched")},{text:"Libraries",href:"/library",submenu:r.showsMoviesCatTimePeriod("/movies/library")},{text:"Box Office",href:"/boxoffice"}]},':is(.btn-mobile-links, .links-wrapper) a[href="/calendars"]':{hrefPrefix:"/calendars",entries:[{text:"Personal",href:"/my/shows-movies",submenu:{hrefPrefix:"/calendars/my",entries:[{text:"Shows & Movies",href:"/shows-movies"},{text:"Shows",href:"/shows"},{text:"Premieres",href:"/premieres"},{text:"New Shows",href:"/new-shows"},{text:"Finales",href:"/finales"},{text:"Movies",href:"/movies"},{text:"Streaming",href:"/streaming"},{text:"DVD & Blu-ray",href:"/dvd"}]}},{text:"General",href:"/shows",submenu:{hrefPrefix:"/calendars",entries:[{text:"Shows",href:"/shows"},{text:"Premieres",href:"/premieres"},{text:"New Shows",href:"/new-shows"},{text:"Finales",href:"/finales"},{text:"Movies",href:"/movies"},{text:"Streaming",href:"/streaming"},{text:"DVD & Blu-ray",href:"/dvd"}]}}]},':is(.btn-mobile-links, .links-wrapper) a[href="/discover"]':{hrefPrefix:"/discover",entries:[{text:"Trends",href:"#trends"},{text:"Featured Lists",href:"#lists"},{text:"Summer TV Shows",href:"#featured-shows"},{text:"Comments",href:"#comments"}]},':is(.btn-mobile-links, .btn-tablet-links, .links-wrapper) a[href="/apps"]':{hrefPrefix:"/apps",entries:[{text:"Android <em>(official)</em>",href:"/a/trakt-android",useHrefPrefix:!1,anchor:!0},{text:"iOS <em>(official)</em>",href:"/a/trakt-ios",useHrefPrefix:!1},{text:"Android & iOS <em>(3rd Party)</em>",href:"#community-apps"},{text:"Android TV <em>(official)</em>",href:"/a/trakt-android-tv",useHrefPrefix:!1},{text:"tvOS <em>(official)</em>",href:"/a/trakt-tvos",useHrefPrefix:!1},{},{text:"INTEGRATIONS"},{text:"Media Centers",href:"#watching-wrapper"},{text:"Plex Sync",href:"#plex-scrobblers-wrapper"},{text:"Streaming Sync",href:"#streaming-scrobbler-wrapper"}]},':is(.btn-mobile-links, .btn-tablet-links, .links-wrapper) a[href="https://forums.trakt.tv"]':{hrefPrefix:"https://forums.trakt.tv",entries:[{text:"Latest",href:"/latest"},{text:"Top",href:"/top",submenu:{hrefPrefix:"https://forums.trakt.tv/top?period=",entries:[{text:"PERIOD"},{text:"Day",href:"daily",anchor:!0},{text:"Week",href:"weekly"},{text:"Month",href:"monthly"},{text:"Quarter",href:"quarterly"},{text:"Year",href:"yearly"},{text:"All Time",href:"all"}]}},{text:"Categories",href:"/categories",submenu:{hrefPrefix:"https://forums.trakt.tv",entries:[{text:"Announcements",href:"/c/announcements"},{text:"Discussions",href:"/c/discussions",submenu:{hrefPrefix:"https://forums.trakt.tv/c/discussions",entries:[{text:"General",href:"/general"},{text:"TV Shows",href:"/tv-shows"},{text:"Movies",href:"/movies"},{text:"Off Topic",href:"/off-topic"}]}},{text:"Trakt",href:"/c/trakt",submenu:{hrefPrefix:"https://forums.trakt.tv/c/trakt",entries:[{text:"Product Updates",href:"/product-updates"},{text:"Questions & Help",href:"/questions"},{text:"Feature Requests",href:"/feature-requests"},{text:"Lite",href:"/trakt-lite",anchor:!0},{text:"Release Notes",href:"/release-notes"},{text:"VIP Beta Features",href:"/vip-beta-features"},{text:"How To",href:"/how-to"}]}},{text:"3rd Party",href:"/c/3rd-party",submenu:{hrefPrefix:"https://forums.trakt.tv/c/3rd-party",entries:[{text:"Media Centers",href:"/media-centers"},{text:"Mobile Apps",href:"/mobile-apps"},{text:"Other",href:"/other",anchor:!0}]}},{text:"Support",href:"/c/support",submenu:{hrefPrefix:"https://forums.trakt.tv/c/support",entries:[{text:"Tutorials",href:"/tutorials"},{text:"VIP Features",href:"/vip-features"},{text:"Features",href:"/support-features"},{text:"FAQ",href:"/faq",anchor:!0}]}}]}},{},{text:"EXTERNAL"},{text:'<span class="left fa fa-reddit-alien"></span>r/trakt',href:"https://reddit.com/r/trakt",useHrefPrefix:!1,submenu:{hrefPrefix:"https://reddit.com/r/trakt",entries:[{text:"SORT BY"},{text:"Best",href:"/best"},{text:"Hot",href:"/hot"},{text:"New",href:"/new"},{text:"Top",href:"/top",submenu:{hrefPrefix:"https://reddit.com/r/trakt/top?t=",entries:[{text:"PERIOD"},{text:"Hour",href:"hour"},{text:"Day",href:"day"},{text:"Week",href:"week",anchor:!0},{text:"Month",href:"month"},{text:"Year",href:"year"},{text:"All Time",href:"all"}]}},{text:"Rising",href:"/rising",anchor:!0}]}},{text:'<span class="left fa-brands fa-twitter"></span>Twitter',href:"https://twitter.com/trakt",useHrefPrefix:!1},{text:'<span class="left fa-brands fa-mastodon"></span>Mastodon',href:"https://ruby.social/@trakt",useHrefPrefix:!1}]}},w=({hrefPrefix:a,entries:s})=>s.reduce((d,{text:i,href:o,useHrefPrefix:c=!0,onclick:b,submenu:u},v)=>d+(i!==void 0&&(o!==void 0||b!==void 0)?`<li${u?' class="with-ul-menu"':""}><a href="${c&&a?a:""}${o??"#"}"${b?` onclick="${b}"`:""}>${i}</a>${u?w(u):""}</li>`:i!==void 0?`<li class="dropdown-header">${i}</li>`:'<li class="divider"></li>'),`<ul class="menu" style="top: calc(-10px - ${Math.max(s.findIndex(d=>d.anchor),0)*100}%)">`)+"</ul>",n=Object.entries(f).map(([a,s])=>[a,w(s)]);$(),window.addEventListener("turbo:load",()=>{const a=unsafeWindow.jQuery;if(!a)return;const s=a("#top-nav");s.find(".links-wrapper > a").wrap('<div class="with-solid-bg"></div>'),s.find('.links-wrapper a[href="/apps"]').next().remove().end().parent().removeClass("with-top-arrow").addClass("with-solid-bg"),s.find('.btn-mobile-links li:has(> a[href="/apps"])').next().remove().end().unwrap(),s.find("li.dark-knight").removeClass("dark-knight").html('<a href="#" onclick="return false;">Quick Actions</a>').before('<li class="divider"></li>').next().remove(),s.find(".btn-profile li:has(> a.yir-loader)").wrapAll('<li class="with-ul-menu"><ul class="menu" style="top: -10px;"></ul></li>').parent().before('<a href="#" onclick="return false;">Stats</a>'),s.find('a[href="https://forums.trakt.tv"]').removeAttr("target"),n.forEach(([i,o])=>s.find(i).closest("li, div").addClass("with-ul-menu").append(o));const d=s.find(":is(.user-wrapper, .links-wrapper) .with-ul-menu");d.off("click mouseover mouseout").on("touchend",function(i){i.stopPropagation(),a(i.originalEvent.target).closest(a(this).children().first()).length&&(a(this).hasClass("selected")?a(this).removeClass("selected"):(i.preventDefault(),d.not(a(this).parents()).removeClass("selected"),a(this).addClass("selected")))}),a("body").on("touchend",()=>d.removeClass("selected"))});function $(){GM_addStyle(`
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
  `)}})("Trakt.tv | Nested Header Navigation Menus"),gmStorage.wkt34fcz&&(async D=>{"use strict";const t={encodeRfc3986:e=>encodeURIComponent(e).replace(/[!'()*]/g,l=>"%"+l.charCodeAt(0).toString(16).toUpperCase()),getDefaultTorrentQuery:e=>`${t.encodeRfc3986(e.title)}${e.type==="movies"?` ${e.year}`:""}${e.season!==void 0?` s${String(e.season).padStart(2,"0")}${e.episode?`e${String(e.episode).padStart(2,"0")}`:""}`:""}`,getDefaultDirectStreamingPath:e=>`/${e.type==="movies"?`movie/${e.ids.tmdb}`:`tv/${e.ids.tmdb}/${e.season!==void 0?e.season:"1"}/${e.episode?e.episode:"1"}`}`,getWnInnerHtml:({btnStyle:e="",img:l,imgStyle:m="",text:h,textStyle:g=""})=>`<div class="icon btn-custom" style="${e}">`+(l?`<img class="lazy" src="${GM_getResourceURL(l)}" style="${h?"max-width: 35%; ":""}${m}">`:"")+(h?`<div class="text" style="${l?"max-width: 65%; ":""}${g}">${h}</div>`:"")+"</div>",getWnCategoryHtml:e=>`[${r[e]}]`,getDdgFaviconHtml:(e,l="")=>`<img src="https://icons.duckduckgo.com/ip3/${e}.ico" style="${l}">`,getFaBrandsHtml:(e,l="")=>`<i class="fa-brands fa-${e}" style="${l}"></i>`,isAdultFemale:e=>/female|non_binary/.test(e.gender)&&e.birthday&&Date.now()-new Date(e.birthday)>5680368e5,fetchAnimeId:(e,l)=>`fetch('https://arm.haglund.dev/api/v2/themoviedb?id=${e.ids.tmdb}').then((r) => r.json()).then((arr) => arr.map((e) => (e.levDist = userscriptLevDist('${e.ids.slug}${e.season>1?`-${e.season_title.toLowerCase().replaceAll(/[ '"]/g,"-")}`:""}', e['anime-planet'] ?? ''), e)).sort((a, b) => a.levDist - b.levDist).find((e) => e['${l}'])?.['${l}'])`,fetchWikidataClaim:(e,l)=>`fetch('https://query.wikidata.org/sparql?format=json&query=${t.encodeRfc3986(`SELECT ?value WHERE { ?item wdt:${e.type==="movies"?"P4947":"P4983"} "${e.ids.tmdb}" . ?item wdt:P31/wdt:P279* wd:${e.type==="movies"?"Q11424":"Q5398426"} . ?item wdt:${l} ?value . } LIMIT 1`)}').then((r) => r.json()).then((r) => r.results.bindings[0]?.value?.value)`,hideNativeExternalLink:e=>`#external-link-${e} { display: none !important; }`,getDdgTopResultRedirectUrl:(e,l)=>`https://duckduckgo.com/?q=%5Csite%3A${e} ${t.encodeRfc3986(l)}`},r={animeAggregator:"Anime Aggregator",animeStreaming:"Anime Streaming",debrid:"Debrid",streaming:"Streaming",torrentAggregator:"Torrent Aggregator",usenetIndexer:"Usenet Indexer"},f=[{buildHref:e=>`https://ext.to/browse/?q=${t.getDefaultTorrentQuery(e)} ${t.encodeRfc3986(a.torrentResolution)} 265${/shows|seasons/.test(e.type)?"&sort=size&order=desc":"&sort=seeds&order=desc"}&with_adult=1`,innerHtml:t.getWnInnerHtml({btnStyle:"background: #242730;",text:"EXT",textStyle:"background-image: linear-gradient(90deg, #3990f6 48.2%, #2c67a6 48.2% 66.2%, #3990f6 66.2%); background-clip: text; color: transparent; font-size: 50cqi; font-weight: 850; letter-spacing: -0.5px; padding-right: 3%;"}),tooltipHtml:t.getWnCategoryHtml("torrentAggregator")},{buildHref:e=>`https://web.stremio.com/#/detail/${e.type==="movies"?`movie/${e.ids.imdb}/${e.ids.imdb}`:`series/${e.ids.imdb}${e.type==="seasons"?`?season=${e.season}`:e.type==="episodes"?t.encodeRfc3986(`/${e.ids.imdb}:${e.season}:${e.episode}`):""}`}`,innerHtml:t.getWnInnerHtml({btnStyle:"background: #19163a;",img:"stremio",text:"Stremio"}),tooltipHtml:t.getWnCategoryHtml("debrid")},{buildHref:e=>`${t.fetchAnimeId(e,"myanimelist")}.then((id) => id ?? userscriptGmXhrCustomLinks({ url: 'https://kuroiru.co/backend/search', method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, data: 'q=${t.encodeRfc3986(e.title)}', responseType: 'json' }).then((r) => r.response[0]?.id)).then((id) => 'https://kuroiru.co/anime/' + id + '/ep${e.episode??"1"}')`,innerHtml:t.getWnInnerHtml({btnStyle:"background: #191919;",img:"kuroiru"}),tooltipHtml:t.getWnCategoryHtml("animeAggregator"),includeIf:e=>e.genres.includes("anime")},{buildHref:e=>`${t.fetchAnimeId(e,"anilist")}.then((id) => 'https://animetsu.cc' + (id ? '/watch/' + id + '?ep=${e.episode??"1"}&subType=dub&server=' : '/search?query=${t.encodeRfc3986(e.title)}'))`,innerHtml:t.getWnInnerHtml({btnStyle:"background: #111;",text:"GOJO.LIVE",textStyle:"font-family: GangOfThree; font-size: 18cqi;"}),tooltipHtml:t.getWnCategoryHtml("animeStreaming"),includeIf:e=>e.genres.includes("anime"),addStyles:`@font-face { font-family: "GangOfThree"; src: url("${GM_getResourceURL("gojolive")}") format("woff2"); font-display: block; }`},{buildHref:e=>`${t.fetchAnimeId(e,"anilist")}.then((id) => 'https://anidap.se' + (id ? '/watch?ep=${e.episode??"1"}&type=dub&provider=&id=' + id : '/search?q=${t.encodeRfc3986(e.title)}'))`,innerHtml:t.getWnInnerHtml({btnStyle:"background: #1f2728;",img:"anidap",imgStyle:"transform: scale(2.2);"}),tooltipHtml:t.getWnCategoryHtml("animeStreaming"),includeIf:e=>e.genres.includes("anime")},{buildHref:e=>`${t.fetchAnimeId(e,"anilist")}.then((id) => 'https://www.miruro.to' + (id ? '/watch/' + id + '/episode-${e.episode??"1"}' : '/search?query=${t.encodeRfc3986(e.title)}'))`,innerHtml:t.getWnInnerHtml({btnStyle:"background: #0e0e0e;",img:"miruro"}),tooltipHtml:t.getWnCategoryHtml("animeStreaming"),includeIf:e=>e.genres.includes("anime")},{buildHref:e=>`https://knaben.org/search/${t.getDefaultTorrentQuery(e)} ${t.encodeRfc3986(a.torrentResolution)} (265|av1)/${e.type==="movies"?"3000000":e.genres.includes("anime")?"6000000":"2000000"}/1/seeders`,innerHtml:`<div class="icon btn-custom" style="background: #323537; flex-direction: column;">${GM_getResourceText("knaben").replace("<svg",'<svg style="max-height: 79%;"')}<div class="text" style="font-family: system-ui; font-size: 10cqi; letter-spacing: 0.3px;">KNABEN DATABASE</div></div>`,tooltipHtml:t.getWnCategoryHtml("torrentAggregator")},{buildHref:e=>`https://iframe.pstream.mov/embed/tmdb-${e.type==="movies"?`movie-${e.ids.tmdb}`:`tv-${e.ids.tmdb}/${e.season!==void 0?e.season:"1"}/${e.episode?e.episode:"1"}`}`,innerHtml:t.getWnInnerHtml({btnStyle:"background: #110d1b;",img:"pstream",text:"P-Stream",textStyle:"font-size: 11cqi;"}),tooltipHtml:t.getWnCategoryHtml("streaming")},{buildHref:e=>`https://www.cineby.gd${t.getDefaultDirectStreamingPath(e)}?play=true`,innerHtml:t.getWnInnerHtml({btnStyle:"background: #440000;",img:"cineby",text:"Cineby",textStyle:"font-family: system-ui; font-size: 17cqi;"}),tooltipHtml:t.getWnCategoryHtml("streaming")},{buildHref:e=>`https://hexa.su/watch${t.getDefaultDirectStreamingPath(e)}`,innerHtml:t.getWnInnerHtml({btnStyle:"background: #111317;",img:"hexa"}),tooltipHtml:t.getWnCategoryHtml("streaming")},{buildHref:e=>`https://www.fmovies.gd/watch${t.getDefaultDirectStreamingPath(e)}`,innerHtml:t.getWnInnerHtml({btnStyle:"background: #18252b;",text:"FMOVIES+",textStyle:"background-image: linear-gradient(to right, rgb(13 202 240), rgb(13 202 240 / 35%)); background-clip: text; color: transparent; font-family: system-ui; font-size: 15cqi; font-weight: 800; letter-spacing: 0.3px; border: 2px solid rgb(13 202 240 / 25%); border-radius: 5px; padding: 5%;"}),tooltipHtml:t.getWnCategoryHtml("streaming")},{buildHref:e=>`https://scenenzbs.com/search/${t.getDefaultTorrentQuery(e)} ${t.encodeRfc3986(a.torrentResolution)} (265|av1)`,innerHtml:t.getWnInnerHtml({btnStyle:"background: #212529;",img:"scenenzbs",imgStyle:"transform: scale(1.8) translateY(-1px);"}),tooltipHtml:t.getWnCategoryHtml("usenetIndexer")},{buildHref:e=>`https://x.debridmediamanager.com/${e.ids.imdb}`,innerHtml:t.getWnInnerHtml({btnStyle:"background: #2e3e51;",img:"dmm",imgStyle:"transform: scale(1.7);",text:"Debrid<br>Media<br>Manager",textStyle:"font-size: 12cqi;"}),tooltipHtml:t.getWnCategoryHtml("debrid")}],w=[{buildHref:e=>`/${/seasons|episodes/.test(e.type)?"shows":e.type}/${e.ids.slug}${e.season!==void 0?`/seasons/${e.season}${e.episode?`/episodes/${e.episode}`:""}`:""}/wikipedia`,innerHtml:t.getFaBrandsHtml("wikipedia-w"),tooltipHtml:"Wikipedia",addStyles:t.hideNativeExternalLink("wikipedia")},{buildHref:e=>`https://duckduckgo.com/?q=site%3Areddit.com Discussion ${t.encodeRfc3986(e.title)}${e.type==="movies"?` ${e.year}`:""}${e.season!==void 0?` Season ${e.season}${e.episode?` Episode ${e.episode}`:""}`:""}`,innerHtml:t.getFaBrandsHtml("reddit"),tooltipHtml:"Reddit",includeIf:e=>e.type!=="people"},{buildHref:e=>`https://letterboxd.com/tmdb/${e.ids.tmdb}`,innerHtml:t.getFaBrandsHtml("letterboxd"),tooltipHtml:"Letterboxd",includeIf:e=>e.type==="movies"},{buildHref:e=>`https://reversetv.enzon19.com/${/seasons|episodes/.test(e.type)?"shows":e.type}/${e.ids.slug}${e.season!==void 0?`/seasons/${e.season_old??e.season}${e.episode?`/episodes/${e.episode_old??e.episode}`:""}`:""}`,innerHtml:t.getDdgFaviconHtml("reversetv.enzon19.com","--extra-filters: invert(1);"),tooltipHtml:"ReverseTV",includeIf:e=>e.type!=="people"},{buildHref:e=>`userscriptGmXhrCustomLinks({ url: 'https://moviemaps.org/ajax/search?token=${t.encodeRfc3986(e.title)}&max_matches=1&use_similar=1', responseType: 'json' }).then((r) => 'https://moviemaps.org' + (r.response[0]?.url ?? '/search?q=${t.encodeRfc3986(e.title)}'))`,innerHtml:'<i class="fa-regular fa-map"></i>',tooltipHtml:"MovieMaps",includeIf:e=>e.type!=="people"&&!["animation","anime"].some(l=>e.genres.includes(l))},{buildHref:e=>t.getDdgTopResultRedirectUrl("fandom.com",e.title),innerHtml:t.getDdgFaviconHtml("fandom.com","--extra-filters: invert(1);"),tooltipHtml:"Fandom",includeIf:e=>e.type!=="people"},{buildHref:e=>`https://aznude.com/search.html?q=${t.encodeRfc3986(e.name??e.title)}`,innerHtml:t.getDdgFaviconHtml("aznude.com","transform: scale(1.1);"),tooltipHtml:"AZNude",includeIf:e=>a.includeNsfwLinks&&(e.type==="people"&&t.isAdultFemale(e)||e.type!=="people"&&!["animation","anime"].some(l=>e.genres.includes(l)))},{buildHref:e=>`userscriptGmXhrCustomLinks({ url: 'https://celeb.gate.cc/search.json?q=${t.encodeRfc3986(e.name)}', responseType: 'json' }).then((r) => 'https://celeb.gate.cc/' + (r.response[0] ? r.response[0].url + '?s=i.clicks.total&cdir=desc#images' : 'search?q=${t.encodeRfc3986(e.title)}'))`,innerHtml:'<img src="https://celeb.gate.cc/assets/logo.png" style="--extra-filters: brightness(1.1);">',tooltipHtml:"CelebGate",includeIf:e=>a.includeNsfwLinks&&e.type==="people"&&t.isAdultFemale(e)},{buildHref:e=>`https://rule34.xxx/index.php?page=post&s=list&tags=sort:score ${e.title.toLowerCase().replaceAll(/[^a-z0-9-:; ]/g,"").replaceAll(" ","_")}`,innerHtml:t.getDdgFaviconHtml("rule34.xxx"),tooltipHtml:"Rule 34",includeIf:e=>a.includeNsfwLinks&&e.type!=="people"},{buildHref:e=>`${t.fetchAnimeId(e,"myanimelist")}.then((id) => 'https://myanimelist.net' + (id ? '/anime/' + id ${e.episode?`+ '/x/episode/${e.episode}'`:""}: '/search/all?q=${t.encodeRfc3986(e.title)}'))`,innerHtml:t.getDdgFaviconHtml("myanimelist.net"),tooltipHtml:"MyAnimeList",includeIf:e=>e.genres?.includes("anime")},{buildHref:e=>`${t.fetchAnimeId(e,"anilist")}.then((id) => 'https://anilist.co' + (id ? '/anime/' + id : '/search/anime?search=${t.encodeRfc3986(e.title)}'))`,innerHtml:t.getDdgFaviconHtml("anilist.co"),tooltipHtml:"AniList",includeIf:e=>e.genres?.includes("anime")},{buildHref:e=>`${t.fetchAnimeId(e,"anidb")}.then((id) => 'https://anidb.net/anime/' + (id ?? '?adb.search=${t.encodeRfc3986(e.title)}'))`,innerHtml:t.getDdgFaviconHtml("anidb.net"),tooltipHtml:"AniDB",includeIf:e=>e.genres?.includes("anime")},{buildHref:e=>`${t.fetchAnimeId(e,"livechart")}.then((id) => 'https://livechart.me' + (id ? '/anime/' + id : '/search?q=${t.encodeRfc3986(e.title)}'))`,innerHtml:t.getDdgFaviconHtml("livechart.me"),tooltipHtml:"LiveChart",includeIf:e=>e.genres?.includes("anime")},{buildHref:e=>`https://www.themoviedb.org/${e.type==="people"?"person":e.type==="movies"?"movie":"tv"}/${e.ids.tmdb}${e.season!==void 0?`/season/${e.season}${e.episode?`/episode/${e.episode}`:""}`:""}`,innerHtml:'<img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg">',tooltipHtml:"TMDB",addStyles:t.hideNativeExternalLink("tmdb")},{buildHref:e=>`https://www.imdb.com/${e.type==="people"?"name":"title"}/${e.episode_ids?.imdb??e.ids.imdb}${e.season&&!e.episode?`/episodes/?season=${e.season}`:""}`,innerHtml:t.getFaBrandsHtml("imdb","font-size: 24px;"),tooltipHtml:"IMDb",addStyles:t.hideNativeExternalLink("imdb")},{buildHref:e=>`${t.fetchWikidataClaim(e,e.type==="movies"?"P12196":"P4835")}.then((id) => id ? 'https://www.thetvdb.com/dereferrer/${e.type==="movies"?"movie":"series"}/' + id : '${t.getDdgTopResultRedirectUrl("thetvdb.com",e.title)}')`,innerHtml:t.getDdgFaviconHtml("thetvdb.com"),tooltipHtml:"TheTVDB",includeIf:e=>e.type!=="people"},{buildHref:e=>e.type==="people"?`fetch('https://api.tvmaze.com/search/people?q=${t.encodeRfc3986(e.name)}').then((r) => r.json()).then((r) => r[0]?.person.url ?? 'https://www.tvmaze.com/search?q=${t.encodeRfc3986(e.name)}')`:`fetch('https://api.tvmaze.com/lookup/shows?imdb=${e.ids.imdb}').then((r) => ${e.season?`fetch(r.url + '${e.episode?`/episodebynumber?season=${e.season}&number=${e.episode}`:"/seasons"}').then((r2) => r2.json()).then((r2) => r2${e.episode?"":`[${e.season-1}]`}.url)`:"r.url.replace('api.', '')"})`,innerHtml:t.getDdgFaviconHtml("tvmaze.com"),tooltipHtml:"TVmaze",includeIf:e=>/shows|seasons|episodes|people/.test(e.type)},{buildHref:e=>e.season_trailer??(e.type!=="episodes"?e.trailer:null)??t.getDdgTopResultRedirectUrl("youtube.com",`${e.title}${e.type==="movies"?` ${e.year}`:""}${e.season?` Season ${e.season}`:""} Official Trailer`),innerHtml:t.getFaBrandsHtml("youtube"),tooltipHtml:"YouTube Trailer",includeIf:e=>e.type!=="people"},{buildHref:e=>`https://www.youtube.com/results?search_query=${t.encodeRfc3986(e.name)} Interview`,innerHtml:t.getFaBrandsHtml("youtube"),tooltipHtml:"YouTube Interviews",includeIf:e=>e.type==="people"},{buildHref:e=>`${t.fetchWikidataClaim(e,"P1258")}.then((id) => id ? 'https://www.rottentomatoes.com/' + id ${e.season?`+ '/s${String(e.season).padStart(2,"0")}${e.episode?`/e${String(e.episode).padStart(2,"0")}`:""}'`:""}: '${t.getDdgTopResultRedirectUrl("rottentomatoes.com",e.title+(e.season?` Season ${e.season}${e.episode?` Episode ${e.episode}`:""}`:""))}')`,innerHtml:t.getDdgFaviconHtml("rottentomatoes.com","--extra-filters: brightness(1.15) contrast(1.3);"),tooltipHtml:"Rotten Tomatoes",includeIf:e=>e.type!=="people"},{buildHref:e=>`${t.fetchWikidataClaim(e,"P1712")}.then((id) => id ? 'https://www.metacritic.com/' + id ${e.season?`+ '/season-${e.season}${e.episode?`/episode-${e.episode}-${e.episode_title.toLowerCase().replaceAll(/[^a-z0-9- ]/g,"").replaceAll(" ","-")}`:""}'`:""}: '${t.getDdgTopResultRedirectUrl("metacritic.com",e.title+(e.season?` Season ${e.season}${e.episode?` Episode ${e.episode}`:""}`:""))}')`,innerHtml:t.getDdgFaviconHtml("metacritic.com"),tooltipHtml:"Metacritic",includeIf:e=>e.type!=="people"},{buildHref:e=>n(`.btn-watch-now[data-url="${e.item_url}"] ~ .external #external-link-justwatch`).attr("href")??n("#powered_by_url").attr("value"),innerHtml:'<i class="fa-kit fa-justwatch"></i>',tooltipHtml:"JustWatch",includeIf:e=>e.type!=="people"&&n(`.btn-watch-now[data-url="${e.item_url}"] ~ .external #external-link-justwatch, #watch-now-content[data-url="${e.item_url}"] > #powered_by_url`).length,addStyles:t.hideNativeExternalLink("justwatch")},{buildHref:e=>`https://open.spotify.com/search/${t.encodeRfc3986(e.title)} Soundtrack`,innerHtml:t.getFaBrandsHtml("spotify"),tooltipHtml:"Spotify",includeIf:e=>e.type!=="people"},{buildHref:e=>e.type==="movies"?`https://fanart.tv/movie/${e.ids.tmdb}`:`fetch('https://api.tvmaze.com/lookup/shows?imdb=${e.ids.imdb}').then((r) => r.ok ? r.json().then((r) => 'https://fanart.tv/series/' + r.externals.thetvdb) : userscriptGmXhrCustomLinks({ url: 'https://fanart.tv/api/search.php?section=tv&s=${t.encodeRfc3986(e.title)}', responseType: 'json' }).then((r) => r.response[0]?.link))`,innerHtml:t.getDdgFaviconHtml("fanart.tv"),tooltipHtml:"Fanart.tv",includeIf:e=>e.type!=="people",addStyles:t.hideNativeExternalLink("fanart")},{buildHref:e=>`https://mediux.pro/${e.type==="movies"?"movies":"shows"}/${e.ids.tmdb}`,innerHtml:t.getDdgFaviconHtml("mediux.pro"),tooltipHtml:"MediUX",includeIf:e=>e.type!=="people"},{buildHref:e=>`https://youglish.com/pronounce/${t.encodeRfc3986(e.name)}/english`,innerHtml:t.getDdgFaviconHtml("youglish.com"),tooltipHtml:"YouGlish",includeIf:e=>e.type==="people"},{buildHref:e=>[...new DOMParser().parseFromString(GM_getResourceText("oracleofbacon"),"text/html").querySelectorAll("#main .top-1000 li")].some(l=>l.textContent.split("(")[0].trim()===e.name)?"https://oracleofbacon.org/graph.php?who="+t.encodeRfc3986(e.name):`https://oracleofbacon.org/movielinks.php?a=Kevin+Bacon&b=${t.encodeRfc3986(e.name)}&use_using=1&u0=on&u1=on&use_role_types=1&rt0=on&rt1=on&rt3=on&company=&use_genres=1&g0=on&g4=on&g8=on&g12=on&g20=on&g24=on&g1=on&g5=on&g9=on&g13=on&g21=on&g25=on&g2=on&g10=on&g14=on&g18=on&g22=on&g26=on&g3=on&g7=on&g11=on&g15=on&g19=on&g27=on`,innerHtml:'<i class="fa-regular fa-chart-network"></i>',tooltipHtml:"Oracle of Bacon",includeIf:e=>e.type==="people"},{buildHref:e=>e.homepage,innerHtml:'<i class="fa-light fa-clapperboard-play"></i>',tooltipHtml:"Official Site",includeIf:e=>e.homepage,addStyles:t.hideNativeExternalLink("official")},{buildHref:e=>n("#external-link-instagram").attr("href"),innerHtml:t.getFaBrandsHtml("instagram"),tooltipHtml:"Instagram",includeIf:e=>n(`:is(.btn-watch-now, .poster[data-person-id])[data-url="${e.item_url}"] ~ .external #external-link-instagram`).length,addStyles:t.hideNativeExternalLink("instagram")},{buildHref:e=>n("#external-link-twitter").attr("href"),innerHtml:t.getFaBrandsHtml("x-twitter"),includeIf:e=>n(`:is(.btn-watch-now, .poster[data-person-id])[data-url="${e.item_url}"] ~ .external #external-link-twitter`).length,addStyles:t.hideNativeExternalLink("twitter")},{buildHref:e=>n("#external-link-facebook").attr("href"),innerHtml:t.getFaBrandsHtml("facebook"),tooltipHtml:"Facebook",includeIf:e=>n(`:is(.btn-watch-now, .poster[data-person-id])[data-url="${e.item_url}"] ~ .external #external-link-facebook`).length,addStyles:t.hideNativeExternalLink("facebook")}];let n,$;unsafeWindow.userscriptLevDist=levenshteinDistance,unsafeWindow.userscriptGmOpenInTab=GM_openInTab,unsafeWindow.userscriptGmXhrCustomLinks=GM.xmlHttpRequest,unsafeWindow.userscriptItemDataCache={};const a={maxSidebarWnLinks:4,torrentResolution:"1080p",includeNsfwLinks:!1,...GM_getValue("customLinks")};GM_setValue("customLinks",a),x(),document.addEventListener("turbo:load",async()=>{if(n??=unsafeWindow.jQuery,$??=unsafeWindow.userscriptTraktApiModule?.isFulfilled?await unsafeWindow.userscriptTraktApiModule:null,!n)return;const e=n("#watch-now-content"),l=n("#header-search-autocomplete-results"),m=n(".notable-summary").attr("data-url")||n(".sidebar").attr("data-url");if(n(document).off("ajaxSuccess.userscript83278").on("ajaxSuccess.userscript83278",(h,g,k)=>{e.length&&k.url.includes("/streaming_links?country=")&&u(e),l.length&&/^\/search\/autocomplete(?!\/(people|lists|users))/.test(k.url)&&b(l)}),/^\/(movies|shows|seasons|episodes|people)\/[^\/]+$/.test(m)){const h=location.pathname,g=await p(m);h===location.pathname&&(d(g),i(g),g.type!=="people"&&(o(g),c(g)))}},{capture:!0});const s=(e,l,m)=>{const h=e.buildHref(l);return`<a ${/\)\.then\(/.test(h)?`href="javascript:void(0);" onclick="event.preventDefault(); $(this).removeAttr('onclick onauxclick'); ${h}.then((href) => { $(this).attr('href', href); userscriptGmOpenInTab(href, { active: true, setParent: true }); });" onauxclick="event.preventDefault(); $(this).removeAttr('onclick onauxclick'); ${h}.then((href) => { $(this).attr('href', href); if (event.button === 1) userscriptGmOpenInTab(href, { setParent: true }); });"`:`href="${h}"`} target="_blank" rel="noreferrer" data-original-title="${e.tooltipHtml??""}">${m??e.innerHtml}</a>`};function d(e){n(w.filter(l=>l.includeIf?l.includeIf(e):!0).map(l=>s(l,e)).join("")).prependTo("#info-wrapper .sidebar .external > li").tooltip({container:"body",placement:"bottom",html:!0})}function i(e){n(w.filter(l=>l.includeIf?l.includeIf(e):!0).map(l=>s(l,e,n(l.innerHtml).attr("alt")??l.tooltipHtml)+", ").join("")).insertAfter('.additional-stats.with-external-links label:contains("Links")')}function o(e){const l=n("#info-wrapper .sidebar");l.has(".btn-watch-now").length&&!l.has(".streaming-links").length&&l.find(".btn-watch-now").before('<div class="streaming-links"><div class="sources"></div></div>'),n(f.filter(m=>m.includeIf?m.includeIf(e):!0).map(m=>s(m,e)).join("")).prependTo(l.find(".streaming-links .sources")).attr("data-container","body").attr("data-html","true").tooltip()}function c(e){const l=n("#overview .action-buttons");if(l.length&&!l.has(".btn-watch-now").length){const m=n("#info-wrapper .sidebar .btn-watch-now"),h=m.attr("data-source-counts"),g=m.attr("data-url");if(!h||!g)return;l.prepend(`<div class="streaming-links"><div class="sources"></div></div><a class="btn btn-block btn-summary btn-watch-now visible-xs selected" data-source-counts="${h}" data-target="#watch-now-modal" data-toggle="modal" data-url="${g}" href="#"><i class="fa fa-fw fa-solid fa-play"></i><div class="text"><div class="main-info">Watch Now</div><div class="under-info">0 streaming services</div></div></a>`)}n(f.filter(m=>m.includeIf?m.includeIf(e):!0).map(m=>s(m,e)).join("")).prependTo(l.find(".sources")).attr("data-html","true").tooltip()}async function b(e){e.find('> .search-result:not([data-type="people"])').each(async function(){const l=await p(n(this).attr("data-url"));n(this).has(".streaming-links").length||n(this).append('<div class="streaming-links"><div class="sources"></div></div>'),n(f.filter(m=>m.includeIf?m.includeIf(l):!0).map(m=>s(m,l)).join("")).prependTo(n(this).find(".streaming-links .sources")).tooltip({placement:"bottom",html:!0}).on("click",m=>m.stopPropagation())})}async function u(e){const l=await p(e.attr("data-url"));e.find("> .streaming-links").prepend('<div class="title">Custom Links</div><div class="section external"></div><div class="section"></div>'+(e.has(".no-links").length?'<div class="title"></div>':"")).end().find("> .title-wrapper .titles").append(`<div class="overview">${l.episode_overview??l.season_overview??l.overview??"No overview available."}</div>`),n(w.filter(m=>m.includeIf?m.includeIf(l):!0).map(m=>s(m,l)).join("")).appendTo(e.find(".section.external")).tooltip({placement:"bottom",html:!0}),n(f.filter(m=>m.includeIf?m.includeIf(l):!0).map(m=>s(m,l,m.innerHtml+(m.tooltipHtml?`<div class="price">${m.tooltipHtml}</div>`:""))).join("")).appendTo(e.find(".section.external + .section"))}const v=async e=>{const l=e.split("/").filter(Boolean),m=l[0];let h,g,k,_,C;if(m==="seasons"||m==="shows"&&!isNaN(l[1])){const T=await fetch(e);if(!T.ok)throw new Error(`getItemData: Fetching ${T.url} failed with status: ${T.status}`);h=new DOMParser().parseFromString(await T.text(),"text/html"),g=n(h).find(".notable-summary")}return m==="episodes"&&([{show:k,episode:C}]=await $.search.id({id_type:"trakt",id:l[1],type:"episode",extended:"full"}),_=await $.seasons.season.info({id:k.ids.trakt,season:C.season,extended:"full"})),{item_url:e,type:m,...m!=="episodes"&&{...await $[m==="seasons"?"shows":m].summary({id:g?.attr("data-show-id")??l[1],extended:"full"})},...m==="seasons"&&{season:+g.attr("data-season-number"),season_title:n(h).find('#level-up-link[href*="/seasons/"]').text()||n(h).find("#summary-wrapper .mobile-title h1").contents()[0]?.textContent.trim(),season_overview:n(h).find("#overview #overview").text()||null,season_trailer:n(h).find("#overview .affiliate-links .trailer").attr("href")||null},...m==="episodes"&&{...k,season:_.number,season_title:_.title,season_original_title:_.original_title,season_ids:_.ids,season_first_aired:_.first_aired,season_overview:_.overview,season_episode_count:_.episode_count,episode:C.number,episode_title:C.title,episode_original_title:C.original_title,episode_ids:C.ids,episode_first_aired:C.first_aired,episode_overview:C.overview,episode_type:C.episode_type}}},y=async e=>{let l,m;const h=await fetch(e);if(!h.ok)throw new Error(`getItemData: Fetching ${h.url} failed with status: ${h.status}`);if(l=new DOMParser().parseFromString(await h.text(),"text/html"),h.url.includes("/seasons/")){const L=await fetch(h.url.split("/seasons/")[0]);if(!L.ok)throw new Error(`getItemData: Fetching ${L.url} failed with status: ${L.status}`);m=new DOMParser().parseFromString(await L.text(),"text/html")}const g=e.split("/").filter(Boolean)[0],k=n(l).find(".notable-summary"),_=n(l).find(".additional-stats > li"),C=m?n(m).find(".additional-stats > li"):void 0,H=(L,P=_)=>P.filter((M,W)=>n(W).find("label").text().toLowerCase()===L),T={item_url:e,type:g,ids:{trakt:+(k.attr("data-movie-id")??k.attr("data-show-id")??k.attr("data-person-id")),imdb:n(m??l).find("#external-link-imdb").attr("href")?.match(/(?:tt|nm)\d+/)?.[0],tmdb:+n(l).find("#external-link-tmdb").attr("href")?.match(/\d+/)?.[0]||null,slug:h.url.split("/")[4]},homepage:n(m??l).find("#external-link-official").attr("href")??null,...g!=="people"&&{title:n(l).find(':is(body > [itemtype$="Movie"], body > [itemtype$="TVSeries"], body > [itemtype] > [itemtype$="TVSeries"]) > meta[itemprop="name"]').attr("content")?.match(/(.+?)(?: \(\d{4}\))?$/)?.[1],original_title:H("original title",C).contents().get(-1)?.textContent,year:+n(m??l).find("#summary-wrapper .mobile-title .year")[0]?.textContent||null,genres:_.find('[itemprop="genre"]').map((L,P)=>n(P).text().toLowerCase()).get(),overview:n(m??l).find("#overview #overview").text()||null,trailer:n(m??l).find("#overview .affiliate-links .trailer").attr("href")||null},.../seasons|episodes/.test(g)&&{season:+k.attr("data-season-number"),season_title:n(l).find('#level-up-link[href*="/seasons/"]').text()||n(l).find("#summary-wrapper .mobile-title h1").contents()[0]?.textContent.trim()},...g==="seasons"&&{season_overview:n(l).find("#overview #overview").text()||null,season_trailer:n(l).find("#overview .affiliate-links .trailer").attr("href")||null},...g==="episodes"&&{episode:+k.attr("data-episode-number"),episode_title:n(l).find('body > [itemtype$="TVEpisode"] > meta[itemprop="name"]').attr("content"),episode_overview:n(l).find("#overview #overview").text()||null,episode_ids:{imdb:n(l).find("#external-link-imdb").attr("href")?.match(/tt\d+/)?.[0]}},...g==="people"&&{name:n(l).find('body > [itemtype$="Person"] > meta[itemprop="name"]').attr("content"),gender:H("gender").contents().get(-1)?.textContent.toLowerCase().replace("-","_"),birthday:H("birthday").children().last().attr("data-date")}};return Object.hasOwn(T,"original_title")&&(T.original_title??=T.title),T},S=async e=>{const l=await fetch(`https://api.tvmaze.com/lookup/shows?imdb=${e.ids.imdb}`).then(h=>h.ok?fetch(h.url+"?embed[]=episodes&embed[]=seasons"):null).then(h=>h?.ok?h.json():null),m=l?._embedded.episodes.find(h=>h.name.trim().toLowerCase()===e.episode_title.trim().toLowerCase());return m&&(e.season!==m.season||e.episode!==m.number)&&(e.season_old=e.season,e.episode_old=e.episode,e.season=m.season,e.episode=m.number,e.season_title=l._embedded.seasons.find(h=>h.number==m.season).name||`Season ${m.season}`,["season_original_title","season_ids","season_first_aired","season_episode_count"].forEach(h=>delete e[h])),e};async function p(e){return unsafeWindow.userscriptItemDataCache[e]??=await($?v:y)(e).then(l=>l.type==="episodes"&&l.genres.includes("anime")?S(l):l)}function x(){GM_addStyle(`
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
#info-wrapper .sidebar .streaming-links a:nth-child(n+${a.maxSidebarWnLinks+1} of a),
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
  `)}})("Trakt.tv | Custom Links (Watch-Now + External)"),gmStorage.x70tru7b&&(async D=>{"use strict";let t,r,f,w;const n=document.cookie.match(/(?:^|; )trakt_userslug=([^;]*)/)?.[1],$=null,a={...GM_getValue("vipUnlock")};GM_setValue("vipUnlock",a);const s={_defaults:{title:GM_info.script.name.replace("Trakt.tv","Userscript"),toast:!0,toastrOpt:{positionClass:"toast-top-right",timeOut:1e4,progressBar:!0},toastrStyles:"#toast-container#toast-container a { color: #fff !important; border-bottom: dotted 1px #fff; }"},_print(u,v,y="",S={}){const{title:p=this._defaults.title,toast:x=this._defaults.toast,toastrOpt:e,toastrStyles:l="",consoleStyles:m="",data:h}=S,g=`${y}${h!==void 0?" See console for details.":""}<style>${this._defaults.toastrStyles+l}</style>`;console[u](`%c${p}: ${y}`,m,...h!==void 0?[h]:[]),x&&w[v](g,p,{...this._defaults.toastrOpt,...e})},info(u,v){this._print("info","info",u,v)},success(u,v){this._print("info","success",u,{consoleStyles:"color:#00c853;",...v})},warning(u,v){this._print("warn","warning",u,v)},error(u,v){this._print("error","error",u,v)}};b(),document.addEventListener("turbo:load",async()=>{if(t??=unsafeWindow.jQuery,r??=unsafeWindow.compressedCache,f??=unsafeWindow.Cookies,w??=unsafeWindow.toastr,!(!t||!r||!f||!w)&&(t("body").removeAttr("data-turbo"),unsafeWindow.actionList=o,document.querySelectorAll(".quick-icons .list, .btn-summary.btn-list, .btn-summary.btn-list .side-btn .icon-add").forEach(u=>u.addEventListener("click",c)),d(),$&&t("body:not(.dashboard) .feed-icon.csv").attr("href",location.pathname+".csv?slurm="+$+location.search.replace("?","&")),t(document).off("ajaxSuccess.userscript38793").on("ajaxSuccess.userscript38793",(u,v,y)=>{y.url.endsWith("/settings.json")&&d(),$&&/\/dashboard\/(on_deck|recently_watched)$/.test(y.url)&&t('.feed-icon.csv[href="/vip/csv"]').attr("href",function(){return t(this).prev().attr("data-path")+".csv?"+["slurm="+$,t(this).prev().attr("data-query")].join("&")})}),t(".frame-wrapper .sidenav.advanced-filters .buttons").addClass("vip").find(".btn.vip").text("").removeClass("vip").removeAttr("href").addClass("disabled disabled-init").attr("id","filter-apply").attr("data-apply-text","Apply Filters").before('<a class="btn btn-close-2024" id="filter-close" style="display: inline-block !important; visibility: visible !important;">Close</a>').append('<span class="text">Configure Filters</span><span class="icon fa-solid fa-check"></span>'),/^\/users\/[^\/]+\/progress(?!\/playback)/.test(location.pathname)&&/list=\d+/.test(location.search)&&!location.search.includes("terms="))){unsafeWindow.showLoading?.();const u=new URLSearchParams(location.search),v=u.get("list"),y=await fetch("/lists/"+v).then(p=>fetch(p.url+"?display=show&hide=unwatched&limit=10000")).then(p=>p.text()).then(p=>new DOMParser().parseFromString(p,"text/html")),S=[...y.querySelectorAll(".grid-item")].map(p=>p.querySelector(".titles-link")?.textContent).filter(Boolean);u.append("terms",`^${S.join("$|^")}$`),["airing","completed","ended","not-completed","rewatching"].forEach(p=>{f.remove("filter-hide-progress-"+p,{path:"/"}),f.remove("filter-hide-progress-"+p,{path:"/users/"+f.get("trakt_userslug")})}),location.search=u.toString()}},{capture:!0});function d(){const u=r.get("settings");u&&(!u.user.vip||$&&u.account.token!==$)&&(u.user.vip=!0,$&&(u.account.token=$),r.set("settings",u),unsafeWindow.userSettings&&(unsafeWindow.userSettings=u))}const i=async()=>{if(!a.tempList1Id||!r.get("lists")[a.tempList1Id]){const u=Object.values(r.get("lists")).find(p=>p.name==="Favorites").ids.trakt,v=await fetch(`/lists/${u}/copy_items/0`,{method:"POST",headers:{"X-CSRF-Token":unsafeWindow.csrfToken},body:new URLSearchParams({"order[]":"",sort_by:"rank",sort_how:"asc"})});if(!v.ok){s.error("Failed to create temp list.",{data:v});return}const y=(await v.json()).id;s.info(`Created temp list: id=${y}.`,{data:v});const S=await fetch("/lists/"+y,{method:"POST",headers:{"X-CSRF-Token":unsafeWindow.csrfToken},body:new URLSearchParams({authenticity_token:unsafeWindow.csrfToken,_method:"put",name:`temp1_${y}`,description:'Needed for the list limits bypass of the "Partial VIP Unlock" userscript. Keep it empty. You can edit the list title and description if you want. If you delete it another one will be created on the next attempted list limits bypass.',privacy_hidden:"private",privacy:"private",existing_collaborator_ids:"",allow_comments_hidden:1,allow_comments:1,display_numbers_hidden:1,display_numbers:1,default_sort_by:"rank",default_sort_how:"asc"})});if(!S.ok){s.error("Failed to update temp list metadata.",{data:S});return}s.info("Updated temp list metadata.",{data:S}),a.tempList1Id=y,GM_setValue("vipUnlock",a)}return a.tempList1Id};async function o(u,v,y){v.addClass("spinner").find(".icon").addClass("fa-spin");const S=u.attr("data-url"),p=u.attr("data-type"),x=+u.attr(`data-${p}-id`),e=+v.attr("data-list-id")||Object.values(r.get("lists")).find(h=>h.name==="Watchlist").ids.trakt,l=v.attr("data-list-type"),m=+v.attr("data-item-count");try{if(v.hasClass("maxed-out")&&!y){const h=.045*m;s.info(`Target list is maxed-out, attempting bypass.. This will take about <strong>${~~(h/60)}m${~~(h%60)}s</strong>.`,{toastrOpt:{timeOut:h*1e3}});const g=await i(),k=r.get("lists");if(k[g]&&k[g].item_count>0){s.error("Temp list is not empty. Aborting..",{data:k[g]});return}const _=await fetch(S+"/list",{method:"POST",headers:{"X-CSRF-Token":unsafeWindow.csrfToken},body:new URLSearchParams({type:p,trakt_id:x,list_id:g})});if(!_.ok){s.error(`Failed to add item to temp list: id=${g}.`,{data:_});return}s.info("Added item to temp list.");for(const[C,H]of[[e,g],[g,e]]){const T=await fetch("/lists/"+C).then(P=>P.text()).then(P=>new DOMParser().parseFromString(P,"text/html").querySelector("#listable-all-item-ids").value.split(",").map(Number));if(!T||!T.length){s.error(`Failed to fetch all list item ids for list: id=${C}.`);return}const L=await fetch(`/lists/${C}/move_items/${H}`,{method:"POST",headers:{"X-CSRF-Token":unsafeWindow.csrfToken},body:(P=>(T.forEach(M=>P.append("order[]",M)),P))(new URLSearchParams({sort_by:"rank",sort_how:"asc"}))});if(!L.ok){s.error(`Failed to move all items from ${C===e?"target to temp":"temp to target"} list.`,{data:L});return}s.info(`Moved all items from ${C===e?"target to temp":"temp to target"} list.`)}s.success(`Success. Item was added to <a href="/lists/${e}"><strong>target list</strong></a>.`)}else{const h=await fetch(`${S}/${/(watchlist|favorites|recommendations)/.test(l)?l:"list"}${y?"/remove":""}`,{method:"POST",headers:{"X-CSRF-Token":unsafeWindow.csrfToken},body:new URLSearchParams({type:p,trakt_id:x,list_id:e})});if(!h.ok){await h.json().then(g=>s.error("Failed to add item to list."+(g.message?" Response: "+g.message:""),{data:h}));return}s.success("Success. "+(await h.json()).message)}return v.toggleClass("selected"),!0}finally{v.removeClass("spinner").find(".icon").removeClass("fa-spin")}}async function c(u){if(u.stopImmediatePropagation(),u.preventDefault(),unsafeWindow.listPopupPressed){unsafeWindow.listPopupPressed=!1;return}const v=t(this).hasClass("side-btn")||t(this).parent().hasClass("side-btn"),y=t(this).hasClass("btn-list"),S=v?t(this).closest(".btn-summary"):y?t(this):t(this).closest(".grid-item"),p=S.attr("data-url"),x=S.attr("data-type"),e=+S.attr(`data-${x}-id`),l=Object.values(r.get("lists")??{}).some(h=>h.type==="list"),m=unsafeWindow.isPersonPage&&y||S.attr("data-type")==="person"?"list":unsafeWindow.userSettings.browsing.list_popup_action;if(unsafeWindow.isPersonPage&&y||l&&(m!=="watchlist"||t(this).hasClass("selected"))||v)unsafeWindow.actionListPopup(v?S:t(this));else{S.find(".loading").show();const h=t(this).hasClass("selected"),g=Object.values(r.get("lists")).find(C=>C.name==="Watchlist"),k=t(`<li class="${g.item_count>=unsafeWindow.userSettings.limits.watchlist.item_count?"maxed-out":""} ${h?"selected":""}" data-list-id="${g.ids.trakt}" data-list-type="watchlist" data-item-count="${g.item_count}"></li>`);await o(S,k,h)&&(t(`[data-${x}-id="${e}"]:is(.btn-summary.btn-list, [data-type="${x}"]) .list`)[h?"removeClass":"addClass"]("selected"),unsafeWindow.cacheUserData()),S.find(".loading").hide()}}function b(){GM_addStyle(`
#top-nav .btn-vip,
.dropdown-menu.for-sortable > li > a.vip-only,
.alert-vip-required {
  display: none !important;
}

.popover:not(.copy-list) ul.lists li.maxed-out:not(.selected) {
  text-decoration: line-through dashed 2px;
}
  `),n&&GM_addStyle(`
:is(#avatar-wrapper h1, .comment-wrapper .user-name) [href="/users/${n}"]::after,
#results-top-wrapper [href="/users/${n}"] + h1::after {
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
#avatar-wrapper h1 [href="/users/${n}"]::after,
#results-top-wrapper [href="/users/${n}"] + h1::after {
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
.comment-wrapper .user-name [href="/users/${n}"]::after {
  margin: -3px 0 0 5px;
  padding: 2px 4px;
  font-size: 11px;
  letter-spacing: 0;
  border-radius: 2px;
}
@media (width <= 767px) and (orientation: portrait) {
  #avatar-wrapper h1 [href="/users/${n}"]::after,
  #results-top-wrapper [href="/users/${n}"] + h1::after {
    margin: 0px 0px 3px 7px;
    padding: 3px 5px 3px 23px;
    font-size: 14px;
    background-size: 14px;
  }
}

.personal-list .comment-wrapper .user-name [href="/users/${n}"] {
  white-space: nowrap;
}
    `)}})("Trakt.tv | Partial VIP Unlock"),gmStorage.yl9xlca7&&(async D=>{"use strict";let t;const r=new Intl.NumberFormat("en",{notation:"compact",maximumFractionDigits:1});r.formatTLC=s=>r.format(s).toLowerCase(),a(),document.addEventListener("turbo:load",()=>{if(!location.pathname.startsWith("/shows/")||location.pathname.includes("/episodes/")||(t??=unsafeWindow.jQuery,!t))return;const s=t("#seasons-episodes-sortable"),d=t("#summary-ratings-wrapper .summary-user-rating"),i=t("#summary-ratings-wrapper .trakt-rating");if(!s.length||!d.length||!i.length)return;const o=unsafeWindow.userscriptAvgSeasonEpisodeRatings={};let c;d[0].mutObs=new MutationObserver(()=>{d.hasClass("popover-on")||n(d,o.personal)}),n(d),$(i);const b=!location.pathname.endsWith("/seasons/0");s.on("arrangeComplete",()=>{s.data("isotope")&&(c=s.data("isotope").filteredItems.filter(u=>b?u.element.dataset.seasonNumber!=="0":!0),o.personal=f(c),o.general=w(c),n(d,o.personal),$(i,o.general))}),t(document).off("ajaxSuccess.userscript32985").on("ajaxSuccess.userscript32985",(u,v,y)=>{c&&/\/ratings\/(seasons|episodes)\.json$|\/rate/.test(y.url)&&(o.personal=f(c),n(d,o.personal))})},{capture:!0});function f(s){const d=s.map(i=>+t(i.element).find(".corner-rating > .text").text()).filter(Boolean);return{average:d.length?d.reduce((i,o)=>i+o,0)/d.length:void 0,votes:d.length}}function w(s){const d=s.reduce((i,o)=>i+o.sortData.votes,0);return{average:d?s.reduce((i,o)=>i+o.sortData.percentage*(o.sortData.votes/d),0):void 0,votes:d}}function n(s,d){s[0].mutObs.disconnect(),s.find(".rating").each(function(){const i=t(this).parent().prev().attr("class").match(/rating-(\d+)/)?.[1];i&&t(this).html(`${i}<div class="votes">${unsafeWindow.ratingsText?.[i]??""}</div>`)}),s.find(".number > .votes").removeClass("alt").text(`avg: ${d?.average?`${d.average.toFixed(1)}`:"--"} (${d?.votes!==void 0?r.formatTLC(d.votes):"--"} v.)`),s[0].mutObs.observe(s[0],{subtree:!0,childList:!0})}function $(s,d){s.has(".rating .votes").length||s.find(".votes").clone().appendTo(s.find(".rating")).text((i,o)=>`(${o.match(/^.*? v/)?.[0]??"0 v"}.)`),s.find(".number > .votes").text(`avg: ${d?.average?`${Math.round(d.average)}`:"--"}% (${d?.votes!==void 0?r.formatTLC(d.votes):"--"} v.)`)}function a(){GM_addStyle(`
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