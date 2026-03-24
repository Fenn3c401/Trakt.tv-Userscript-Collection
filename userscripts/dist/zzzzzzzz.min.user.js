// ==UserScript==
// @name         Trakt.tv | Megascript
// @description  My 15 trakt.tv userscripts merged into one for convenience: Actor Pronunciation Helper, All-In-One Lists View, Average Season And Episode Ratings, Bug Fixes And Optimizations, Charts - Ratings Distribution, Charts - Seasons, Custom Links (Watch-Now + External), Custom Profile Header Image, Enhanced List Preview Posters, Enhanced Title Metadata, Nested Header Navigation Menus, Partial VIP Unlock, Playback Progress Manager, Scheduled E-Mail Data Exports, Trakt API Wrapper. See README for details.
// @version      2026-03-24_14-07
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
// @resource     hexa           https://hexa.su/hexa-logo.png
// @resource     knaben         data:image/svg+xml,%3Csvg%20onmouseenter%3D%22this.querySelectorAll('%3Anth-child(-n%2B9)').forEach((c%2Ci)%3D%26gt%3B%7Bc.style.transition%3D'none'%3Bc.style.transform%3D'translate(0%2C-70%25)'%3BsetTimeout(()%3D%26gt%3B%7Bc.style.transition%3D'transform%201s%20cubic-bezier(.5%2C.25%2C.27%2C.1)'%3Bc.style.transform%3D'translate(0%2C0)'%7D%2C50*(i%253%2B~~(i%2F3)))%7D)%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201862%20804%22%3E%3Cpath%20fill%3D%22%237a7a7a%22%20d%3D%22M1470.91%20273.76h280.14v100.1h-280.14z%22%2F%3E%3Cpath%20fill%3D%22%23bababa%22%20d%3D%22M955.67%20273.76h499.85v100.1H955.67z%22%2F%3E%3Cpath%20fill%3D%22%237a7a7a%22%20d%3D%22M653.56%20273.76h285.63v100.1H653.56z%22%2F%3E%3Cpath%20fill%3D%22%23bababa%22%20d%3D%22M1470.91%20160.32h280.14v96.76h-280.14z%22%2F%3E%3Cpath%20fill%3D%22%237a7a7a%22%20d%3D%22M955.67%20160.32h499.85v96.76H955.67z%22%2F%3E%3Cpath%20fill%3D%22%23bababa%22%20d%3D%22M653.56%20160.32h285.63v96.76H653.56z%22%2F%3E%3Cpath%20fill%3D%22%237a7a7a%22%20d%3D%22M1362.54%2040.2h281.94v101.77h-281.94z%22%2F%3E%3Cpath%20fill%3D%22%23bababa%22%20d%3D%22M1062.98%2040.2h281.94v101.77h-281.94z%22%2F%3E%3Cpath%20fill%3D%22%237a7a7a%22%20d%3D%22M763.42%2040.2h281.94v101.77H763.42z%22%2F%3E%3Cpath%20fill%3D%22%23bababa%22%20d%3D%22M74.48%200h413.36v62.95H74.48zm0%2062.95h60.35v72.75H74.48zm136.41%200h37.2v72.75h-37.2zm107.47%200h37.2v72.75h-37.2zm111.61%200h57.87v72.75h-57.87zM74.48%20135.47h413.36v97.93H74.48z%22%2F%3E%3Cpath%20fill%3D%22%237a7a7a%22%20d%3D%22M74.48%20233.16h502.74v140.7H74.48z%22%2F%3E%3Cpath%20fill%3D%22%23bababa%22%20d%3D%22M0%20391.991v.078L106.988%20644.12H1713.04v-2.908L1862%20492.251V391.95H.097Z%22%2F%3E%3Cpath%20fill%3D%22%237a7a7a%22%20d%3D%22M1713.489%20642.07H105.417l67.882%20159.92h1380.269Z%22%2F%3E%3C%2Fsvg%3E
// @resource     kuroiru        https://kuroiru.co/logo/stuff/letter-small.png
// @resource     miruro         https://www.miruro.to/assets/miruro-text-transparent-white-DRs0RmF1.png
// @resource     oracleofbacon  https://oracleofbacon.org/center_list.php
// @resource     scenenzbs      https://img.house-of-usenet.com/fd4bd542330506d41778e81860f29435c7f8795a7bbefbd9d297b7d79d5a067b.webp
// @resource     stremio        https://web.stremio.com/images/stremio_symbol.png
// @resource     vidora         data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agc3RvcC1jb2xvcj0iIzAwZmY5ZCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzYwYTVmYSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgcng9IjgiIGZpbGw9InVybCgjYSkiLz48cGF0aCBkPSJtOCA4IDggMTYgOC0xNiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMy41Ii8+PC9zdmc+
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
| [Trakt.tv \| Partial VIP Unlock](x70tru7b.md#StickyHeader "Unlocks some vip features: advanced filters, creation of new lists, \"more\" buttons on dashboard, faster page navigation, bulk list management, rewatching, custom calendars, advanced list progress and more. Also hides some vip advertisements.") | `x70tru7b` |
| [Trakt.tv \| Playback Progress Manager](swtn5c9q.md#StickyHeader "Adds playback progress badges to in-progress movies/episodes and allows for setting and removing playback progress states. Also adds playback progress overview pages to the \"Progress\" tab and allows for bulk deletion and renewal. DOES NOT WORK WITHOUT THE \"TRAKT API WRAPPER\" USERSCRIPT!") | `swtn5c9q` |
| [Trakt.tv \| Scheduled E-Mail Data Exports](2hc6zfyy.md#StickyHeader "OUT OF ORDER (for the time being). Automatic trakt.tv backups for free users. On every trakt.tv visit a background e-mail data export is triggered, if one is overdue based on the specified cron expression (defaults to weekly).") | `2hc6zfyy` |
| [Trakt.tv \| Trakt API Wrapper](f785bub0.md#StickyHeader "Exposes an authenticated Trakt API Wrapper. Intended to run alongside other userscripts which require (authenticated) access to the Trakt API.") | `f785bub0` |
*/


"use strict";const gmStorage={"2dz6ub1t":!0,"2hc6zfyy":!0,"71cd9s61":!0,brzmp0a9:!0,cs1u5z40:!0,f785bub0:!0,fyk2l3vj:!0,kji85iek:!0,p2o98x5r:!0,pmdf6nr9:!0,swtn5c9q:!0,txw82860:!0,wkt34fcz:!0,x70tru7b:!0,yl9xlca7:!0,...GM_getValue("megascript")};GM_setValue("megascript",gmStorage),gmStorage["2dz6ub1t"]&&(async C=>{"use strict";let t;const a={_defaults:{title:(typeof C<"u"?C:GM_info.script.name).replace("Trakt.tv","Userscript"),toast:!0,toastrOpt:{positionClass:"toast-top-right",timeOut:1e4,progressBar:!0},toastrStyles:"#toast-container#toast-container a { color: #fff !important; border-bottom: dotted 1px #fff; }"},_print(l,n,s="",w={}){const{title:y=this._defaults.title,toast:m=this._defaults.toast,toastrOpt:$,toastrStyles:b="",consoleStyles:k="",data:v}=w,u=`${s}${v!==void 0?" See console for details.":""}<style>${this._defaults.toastrStyles+b}</style>`;console[l](`%c${y}: ${s}`,k,...v!==void 0?[v]:[]),m&&unsafeWindow.toastr?.[n](u,y,{...this._defaults.toastrOpt,...$})},info(l,n){this._print("info","info",l,n)},success(l,n){this._print("info","success",l,{consoleStyles:"color:#00c853;",...n})},warning(l,n){this._print("warn","warning",l,n)},error(l,n){this._print("error","error",l,n)}},g={...GM_getValue("customProfileImage")};GM_setValue("customProfileImage",g);let x=o();window.addEventListener("turbo:load",()=>{if(!/^\/(shows|movies|users|dashboard|settings|oauth\/(authorized_)?applications)/.test(location.pathname)||(t??=unsafeWindow.jQuery,!t))return;const l=t("body.is-self #cover-wrapper"),n=t("body.is-self #btn-set-profile-image"),s=t("body:is(.shows, .movies) #summary-wrapper > .full-screenshot");g.imgUrl&&l.length&&n.length&&p(l,n),s.length&&(s.attr("style")?h(s):new MutationObserver((w,y)=>{y.disconnect(),h(s)}).observe(s[0],{attributeFilter:["style"]}))});function p(l,n){l.has('a.selected:contains("Profile")').length?(l.removeClass("slim").find("> .poster-bg-wrapper").removeClass("poster-bg-wrapper").addClass("shade"),l.find("> #watching-now-wrapper").length||l.find("> .container").before(`<div class="hidden-xs" id="fanart-info"><a href="${g.info.url}">${g.info.title} <span class="year">${g.info.year}</span></a></div>`)):l.find("> .poster-bg-wrapper").removeClass("poster-bg-wrapper").addClass("shadow-full-width"),n.popover("destroy").popover({trigger:"manual",container:"body",placement:"bottom",html:!0,template:'<div class="popover remove reset-profile-image" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',title:"Reset Profile Image?",content:`<button class="btn btn-primary less-rounded">Yes</button><button class="btn btn-cancel less-rounded" onclick="$(this).closest('.popover').popover('hide');">No</button>`}).on("click",function(){t(this).popover("show")}).find(".btn-text").text("Reset Profile Image"),t("body").on("click",".reset-profile-image .btn-primary",()=>{["imgUrl","info"].forEach(s=>delete g[s]),GM_setValue("customProfileImage",g),x?.remove(),a.success("Custom profile image has been reset."),n.popover("destroy").popover({trigger:"hover",container:"body",placement:"bottom",html:!0,template:'<div class="popover set-profile-image" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',content:"Showcase your favorite movie, show, season or episode and make it your profile header image! Here's how:<br><br><ol><li>Go to any <b>movie</b>, <b>show</b>, <b>season</b>, or <b>episode</b> page.</li><li>Click <b>Set Profile Image</b> in the sidebar.</li></ol>"}).off("click").find(".btn-text").text("Set Profile Image"),l.addClass("slim").find("> :is(.shade, .shadow-full-width)").removeClass("shade shadow-full-width").addClass("poster-bg-wrapper").end().find("> #fanart-info").remove()})}function h(l){const n=l.css("background-image").match(/url\("?(?!.+?placeholders)(.+?)"?\)/)?.[1],s=t('[href="/vip/cover"]'),w=y=>{s.has(".fa").parent().addClass("locked").find(".text").unwrap().append(`<div class="under-action">${["No fanart available","Already set"][y]}</div>`),s.not(":has(.fa)").off("click").on("click",m=>m.preventDefault()).css({color:"#bbb"}).find(".text").wrap("<s></s>")};n?n===g.imgUrl?w(1):s.on("click",y=>{y.preventDefault(),w(1),g.imgUrl=n,g.info={url:location.pathname,title:t("head title").text().match(/(.+?)(?: \([0-9]{4}\))? - Trakt/)[1],year:t("#summary-wrapper .year").text()},GM_setValue("customProfileImage",g),x?.remove(),x=o(),a.success("Fanart is now set as custom profile image. Click here to see how it looks.",{toastrOpt:{onclick(){location.href="/users/me"}}})}):w(0)}function o(){if(g.imgUrl)return GM_addStyle(`
body.users.is-self #cover-wrapper:not(:has(> #watching-now-wrapper)) > .full-bg {
  background-image: url("${g.imgUrl}") !important;
}
@media (width <= 767px) and (orientation: portrait) {
  body.users.is-self #cover-wrapper:not(:has(> #watching-now-wrapper)) > .container {
    background-color: revert !important;
  }
}

body:is(.dashboard, .settings, .authorized_applications, .applications) #results-top-wrapper .poster-bg {
  background-image: url("${g.imgUrl}") !important;
  background-size: cover !important;
  background-position: 50% 20% !important;
  opacity: 0.7 !important;
  filter: revert !important;
}
  `)}})("Trakt.tv | Custom Profile Header Image"),gmStorage["2hc6zfyy"]&&(async C=>{"use strict";let t,a;const g={_defaults:{title:(typeof C<"u"?C:GM_info.script.name).replace("Trakt.tv","Userscript"),toast:!0,toastrOpt:{positionClass:"toast-top-right",timeOut:1e4,progressBar:!0},toastrStyles:"#toast-container#toast-container a { color: #fff !important; border-bottom: dotted 1px #fff; }"},_print(h,o,l="",n={}){const{title:s=this._defaults.title,toast:w=this._defaults.toast,toastrOpt:y,toastrStyles:m="",consoleStyles:$="",data:b}=n,k=`${l}${b!==void 0?" See console for details.":""}<style>${this._defaults.toastrStyles+m}</style>`;console[h](`%c${s}: ${l}`,$,...b!==void 0?[b]:[]),w&&unsafeWindow.toastr?.[o](k,s,{...this._defaults.toastrOpt,...y})},info(h,o){this._print("info","info",h,o)},success(h,o){this._print("info","success",h,{consoleStyles:"color:#00c853;",...o})},warning(h,o){this._print("warn","warning",h,o)},error(h,o){this._print("error","error",h,o)}},x={cronExpr:"@weekly",toastOnSuccess:!0,lastRun:{},...GM_getValue("scheduledEmailDataExports")};GM_setValue("scheduledEmailDataExports",x);let p;try{p=new Cron(x.cronExpr,{timezone:Intl.DateTimeFormat().resolvedOptions().timeZone})}catch(h){g.error("Invalid cron expression. Exiting..",{data:h})}})("Trakt.tv | Scheduled E-Mail Data Exports"),gmStorage["71cd9s61"]&&(async C=>{"use strict";let t;const a={_defaults:{title:(typeof C<"u"?C:GM_info.script.name).replace("Trakt.tv","Userscript"),toast:!0,toastrOpt:{positionClass:"toast-top-right",timeOut:1e4,progressBar:!0},toastrStyles:"#toast-container#toast-container a { color: #fff !important; border-bottom: dotted 1px #fff; }"},_print(h,o,l="",n={}){const{title:s=this._defaults.title,toast:w=this._defaults.toast,toastrOpt:y,toastrStyles:m="",consoleStyles:$="",data:b}=n,k=`${l}${b!==void 0?" See console for details.":""}<style>${this._defaults.toastrStyles+m}</style>`;console[h](`%c${s}: ${l}`,$,...b!==void 0?[b]:[]),w&&unsafeWindow.toastr?.[o](k,s,{...this._defaults.toastrOpt,...y})},info(h,o){this._print("info","info",h,o)},success(h,o){this._print("info","success",h,{consoleStyles:"color:#00c853;",...o})},warning(h,o){this._print("warn","warning",h,o)},error(h,o){this._print("error","error",h,o)}};p(),document.addEventListener("turbo:load",()=>{/^\/people\/[^\/]+(\/lists.*)?$/.test(location.pathname)&&(t??=unsafeWindow.jQuery,t&&t('<button id="btn-pronounce-name"><div class="audio-animation fade"><div class="bar-1"></div><div class="bar-2"></div><div class="bar-3"></div></div><div class="fa fa-volume fade in"></div></button>').appendTo(t("#summary-wrapper .mobile-title h1")).tooltip({title:"Pronounce Name",container:"body",placement:"top",html:!0}).one("click",async function(){t(this).tooltip("hide");const h=t(this),o=t('body > [itemtype$="Person"] > meta[itemprop="name"]').attr("content")??t("#summary-wrapper .mobile-title > :last-child").text();unsafeWindow.showLoading?.();const l=await g(o),n=l?[l]:await Promise.all(o.split(/\s+/).map(s=>/^\w\.?$/.test(s)?new SpeechSynthesisUtterance(s):g(s).then(w=>w??new SpeechSynthesisUtterance(s))));unsafeWindow.hideLoading?.(),n.some(s=>s instanceof SpeechSynthesisUtterance)&&(n.forEach(s=>{s instanceof SpeechSynthesisUtterance&&(s.lang="en-US")}),a.warning(`Could not find a full pronunciation for "${o}" on <a href="https://forvo.com/search/${encodeURIComponent(o)}" target="_blank"><strong>forvo.com</strong></a>. Falling back to TTS..`)),["ended","end"].forEach(s=>{n.slice(1).forEach((w,y)=>{n[y]?.addEventListener(s,()=>w.play?w.play():speechSynthesis.speak(w))}),n.at(-1).addEventListener(s,()=>{h.find(".audio-animation").removeClass("in"),setTimeout(()=>h.find(".fa").addClass("in"),150)})}),x(n,h),h.on("click",()=>x(n,h))}))},{capture:!0});async function g(h){const o=await GM.xmlHttpRequest({url:`https://forvo.com/search/${encodeURIComponent(h)}`}),l=new DOMParser().parseFromString(o.responseText,"text/html"),n=t(l).find("body > script").text().match(/_AUDIO_HTTP_HOST='(.+?)'/)?.[1],s=t(l).find('[onclick^="Play"]').attr("onclick")?.match(/Play\([0-9]+,'(.*?)','(.*?)',(?:true|false),'(.*?)','(.*?)'/)?.slice(1),w=s?.map((y,m)=>y&&["/mp3/","/ogg/","/audios/mp3/","/audios/ogg/"][m]+atob(y)).filter(Boolean).reverse();return w?.length?t("<audio>"+w.map(y=>`<source src="https://${n}${y}" type="${y.endsWith("mp3")?"audio/mpeg":"audio/ogg; codecs=vorbis"}" />`).join("")+"</audio>")[0]:null}function x(h,o){o.find(".fa").removeClass("in"),setTimeout(()=>{o.find(".audio-animation").addClass("in"),h.forEach(l=>l.load?.()),speechSynthesis.cancel(),h[0].play?h[0].play():speechSynthesis.speak(h[0])},150)}function p(){GM_addStyle(`
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
  .frame-wrapper .sidenav:not(.advanced-filters) nav .link.saved-filter {
    margin-bottom: 10px !important;
    padding-left: 7px;
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
`),document.addEventListener("turbo:load",()=>{/^\/(movies|shows)/.test(location.pathname)&&unsafeWindow.jQuery?.("#summary-ratings-wrapper .stats .imdb > a").attr("href",(a,g)=>g.match(/.+(?=\/ratings)/)?.[0]??g)}),(a=>document.readyState==="loading"?document.addEventListener("DOMContentLoaded",a):a())(()=>{if(!unsafeWindow.jQuery)return;const a=Object.getOwnPropertyDescriptors(unsafeWindow.jQuery.fn.swipe),g=Object.getOwnPropertyDescriptor(unsafeWindow.jQuery.fn,"swipe"),x=g.value;g.value=function(...p){return this.attr("id")==="summary-wrapper"&&(p[0].excludedElements="#summary-ratings-wrapper .stats"),x.apply(this,p)},Object.defineProperty(unsafeWindow.jQuery.fn,"swipe",g),Object.entries(a).forEach(([p,h])=>!["length","name","prototype"].includes(p)&&Object.defineProperty(unsafeWindow.jQuery.fn.swipe,p,h))}),GM_addStyle(`
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
`),(a=>document.readyState==="loading"?document.addEventListener("DOMContentLoaded",a):a())(()=>{if(!unsafeWindow.jQuery)return;const a=Object.getOwnPropertyDescriptors(unsafeWindow.jQuery.fn.tooltip),g=Object.getOwnPropertyDescriptor(unsafeWindow.jQuery.fn,"tooltip"),x=g.value;g.value=function(...p){return p[0]?.container&&this.closest(".popover, #ondeck-wrapper, #progress-grid-wrapper").length&&delete p[0].container,x.apply(this,p)},Object.defineProperty(unsafeWindow.jQuery.fn,"tooltip",g),Object.entries(a).forEach(([p,h])=>!["length","name","prototype"].includes(p)&&Object.defineProperty(unsafeWindow.jQuery.fn.tooltip,p,h))}),GM_addStyle(`
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
`),window.addEventListener("turbo:load",()=>{const a=unsafeWindow.jQuery("body.touch-device #info-wrapper:has(.sidebar)");a.swipe({excludedElements:"#summary-ratings-wrapper .stats, #info-wrapper .season-links .links, #actors .posters",swipeRight:(g,x,p,h,o,l)=>l[0].start.x<50&&a.addClass("with-mobile-sidebar"),swipeLeft:(g,x,p,h,o,l)=>a.removeClass("with-mobile-sidebar")})}),window.addEventListener("turbo:load",()=>{document.querySelectorAll("#header-search-type .dropdown-menu li:has(~ .divider) a").forEach((a,g)=>{unsafeWindow.Mousetrap.bind(`alt+${g+1}`,()=>a.click()),unsafeWindow.Mousetrap(document.getElementById("header-search-query")).bind(`alt+${g+1}`,()=>a.click())})}),(a=>document.readyState==="loading"?document.addEventListener("DOMContentLoaded",a):a())(()=>{const a=unsafeWindow.jQuery;a&&(a(document).on("auxclick",".btn-watch .view-all",function(g){g.preventDefault(),GM_openInTab(location.origin+a(this).attr("data-url"),{setParent:!0})}),a(document).on("mousedown mouseup","#header-search-autocomplete-results .selected",function(g){g.which===2&&!a(g.target).closest("a").length&&(g.type==="mousedown"?g.preventDefault():(unsafeWindow.searchModifierKey=!0,a(this).trigger("click")))}))}),document.addEventListener("keydown",a=>{a.ctrlKey&&a.key==="Enter"&&a.target.closest?.("#header-search-query")&&(a.preventDefault(),a.stopPropagation(),a.target.dispatchEvent(new KeyboardEvent("keydown",{key:"Enter",keyCode:13,metaKey:!0,bubbles:!0,cancelable:!0})))},{capture:!0}),(a=>document.readyState==="loading"?document.addEventListener("DOMContentLoaded",a):a())(()=>{const a=unsafeWindow.jQuery;a&&a(document).on("ajaxSuccess",(g,x,p)=>{if(p.url.endsWith("/rate")){const h=new URLSearchParams(p.data),[o,l,n]=["type","trakt_id","stars"].map(s=>h.get(s));unsafeWindow[o+"s"].ratings[l]=n,unsafeWindow.compressedCache.set(`ratings_${o}s`,unsafeWindow[o+"s"].ratings),unsafeWindow.addOverlays()}else if(p.url.endsWith("/rate/remove")){const h=new URLSearchParams(p.data),o=h.get("type");unsafeWindow.compressedCache.set(`ratings_${o}s`,unsafeWindow[o+"s"].ratings),unsafeWindow.addOverlays()}})}),GM_addStyle(`
.personal-list .list-description {
  overflow-wrap: anywhere;
}
`),(a=>document.readyState==="loading"?document.addEventListener("DOMContentLoaded",a):a())(()=>{if(!unsafeWindow.jQuery)return;const a=Object.getOwnPropertyDescriptors(unsafeWindow.jQuery.fn.chosen),g=Object.getOwnPropertyDescriptor(unsafeWindow.jQuery.fn,"chosen"),x=g.value;g.value=function(...p){if(this.attr("id")==="filter-network_ids"&&(p[0].max_shown_results=200),/iP(od|hone)|IEMobile|Windows Phone|BlackBerry|BB10|Android.*Mobile/i.test(unsafeWindow.navigator.userAgent)){Object.defineProperty(unsafeWindow.navigator,"userAgent",{get:()=>"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36",configurable:!0});try{return x.apply(this,p)}finally{delete unsafeWindow.navigator.userAgent}}else return x.apply(this,p)},Object.defineProperty(unsafeWindow.jQuery.fn,"chosen",g),Object.entries(a).forEach(([p,h])=>!["length","name","prototype"].includes(p)&&Object.defineProperty(unsafeWindow.jQuery.fn.chosen,p,h))}),(a=>document.readyState==="loading"?document.addEventListener("DOMContentLoaded",a):a())(()=>{const a=unsafeWindow.jQuery;a&&a(document).on("ajaxSend",(g,x,p)=>{if(/\/lists\/[\d]+\/like/.test(p.url)){const h=new URLSearchParams(p.data).get("trakt_id"),o=a(`[data-list-id="${h}"] > .like .count-number`),l=o.text(),n=p.url.includes("/remove");a(document).one("ajaxSuccess",(s,w,y)=>{p.url===y.url&&o.text(unsafeWindow.numeral(l)[n?"subtract":"add"](1).format("0,0"))})}})}),GM_addStyle(`
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
`);const t=()=>{unsafeWindow.jQuery('.readmore:not([id^="rmjs-"])').filter((g,x)=>unsafeWindow.jQuery(x).height()>350).readmore({embedCSS:!1,collapsedHeight:300,speed:200,moreLink:'<a href="#">Read more...</a>',lessLink:'<a href="#">Read less...</a>',afterToggle:(g,x,p)=>x.closest("#sortable-grid").length&&unsafeWindow.$grid?.isotope()}),requestAnimationFrame(()=>unsafeWindow.$grid?.isotope())};Object.defineProperty(unsafeWindow,"renderReadmore",{get:()=>t,set:()=>{},configurable:!0}),GM_addStyle(`
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
`),(a=>document.readyState==="loading"?document.addEventListener("DOMContentLoaded",a):a())(()=>{unsafeWindow.jQuery&&(unsafeWindow.jQuery.fn.mCustomScrollbar=function(){return this})}),document.addEventListener("turbo:load",()=>{document.querySelector("#info-wrapper .season-links .links .selected")?.scrollIntoView({block:"nearest",inline:"start"})},{capture:!0}),document.addEventListener("turbo:load",()=>{/^\/people\/[^\/]+$/.test(location.pathname)&&unsafeWindow.jQuery?.("#filter-fade-hide .dropdown-menu li.typer:is(.season, .episode, .person) a.selected").removeClass("selected")},{capture:!0}),window.addEventListener("turbo:load",()=>unsafeWindow.jQuery?.(".feed-icon.csv").off("click")),GM_addStyle(`
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
`),(a=>document.readyState==="loading"?document.addEventListener("DOMContentLoaded",a):a())(()=>{unsafeWindow.jQuery?.(document).on("ajaxSuccess",(a,g,x)=>{x.url.endsWith("/dashboard/schedule")&&unsafeWindow.jQuery("#schedule-wrapper .btn-watch-now:not([data-source-counts])").attr("data-source-counts","{}"),/\/(dashboard\/on_deck|progress_item\/watched)\/\d+$/.test(x.url)&&unsafeWindow.posterGridTooltips?.()})}),GM_addStyle(`
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
`),document.addEventListener("click",a=>{a.target.closest(".toggle-feeds")?(a.stopPropagation(),document.querySelector(".toggle-feeds-wrapper")?.classList.toggle("open")):a.target.closest(".toggle-subnav-options")&&(a.stopPropagation(),document.querySelector(".toggle-subnav-wrapper")?.classList.toggle("open"))},{capture:!0}),(a=>document.readyState==="loading"?document.addEventListener("DOMContentLoaded",a):a())(()=>{["remove","intersection","move","uniq"].forEach(a=>{const g=Object.getOwnPropertyDescriptor(Array.prototype,a);g&&(g.enumerable=!1,Object.defineProperty(Array.prototype,a,g))})}),GM_addStyle(`
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
`)})("Trakt.tv | Bug Fixes And Optimizations"),gmStorage.cs1u5z40&&(async C=>{"use strict";let t,a,g,x,p,h,o,l,n;Chart.defaults.borderColor="rgb(44 44 44 / 0.5)";const s=new Intl.NumberFormat("en",{notation:"compact",maximumFractionDigits:1});s.formatTLC=u=>s.format(u).toLowerCase(),v(),document.addEventListener("turbo:load",async()=>{/^\/shows\/[^/]+\/seasons\/[^/]+$/.test(location.pathname)&&(t??=unsafeWindow.jQuery,a??=unsafeWindow.userscriptTraktApiWrapper,t&&(g=t("#seasons-episodes-sortable"),g.length&&(x=location.pathname.includes("/seasons/"),p=!location.pathname.includes("/seasons/0"),h=x?u=>`${u.seasonNum}x${String(u.episodeNum).padStart(2,"0")} ${u.watched?"\u2714":"\u2718"}`:u=>`S. ${u.seasonNum} ${u.watched?u.watched==100?"\u2714":`(${u.watched}%)`:"\u2718"}`,o=null,l=[],n=!0,!(!x&&+t(".season-count").text().split(" ")[0]<4||location.pathname.includes("/alternate/")&&location.pathname.split("/").filter(Boolean).length<6)&&(g.on("arrangeComplete",()=>{g.data("isotope")&&(o?y():w())}),t(document).off("ajaxSuccess.userscript48372").on("ajaxSuccess.userscript48372",(u,f,d)=>{d.url.includes("/rate")&&o&&y()})))))},{capture:!0});function w(){const u=t('<div id="seasons-episodes-chart-wrapper"><canvas></canvas></div>').insertBefore(g).children()[0];o=new Chart(u.getContext("2d"),{type:"line",data:b(),options:k()});const f=new IntersectionObserver(d=>{d.forEach(e=>{e.isIntersecting&&(f.disconnect(),document.hidden?t(document).one("visibilitychange",y):y())})},{threshold:1});f.observe(u),u.addEventListener("click",d=>{const e=o.getElementsAtEventForMode(d,"nearest",{axis:"x",intersect:!1},!0);if(!e.length)return;const r=e.sort((i,c)=>Math.abs(i.element.y-d.layerY)-Math.abs(c.element.y-d.layerY))[0];if(Math.abs(r.element.y-d.layerY)<10){const i=`${l[r.index].urlFull}${r.datasetIndex===3?"/comments":""}`;GM_openInTab(i,{active:!0})}else o.isZoomedOrPanned()&&o.resetZoom("active")})}async function y(){const u=await m();JSON.stringify(l)!==JSON.stringify(u)&&(l=u,o.data=b(),o.options=k(),o.update(),n&&(n=!1))}function m(){const u=g.data("isotope").filteredItems.filter(f=>p?f.element.dataset.seasonNumber!=="0":!0).map(async f=>{const d={generalRating:f.sortData.percentage,votes:f.sortData.votes,watchers:f.sortData.watchers,episodeNum:f.element.dataset.number||null,seasonNum:f.element.dataset.seasonNumber,urlFull:t(f.element).find('meta[itemprop="url"]').attr("content"),personalRating:t(f.element).find(".corner-rating > .text").text()||null,watched:t(f.element).find("a.watch.selected").attr("data-percentage")??0,releaseDate:t(f.element).find(".percentage").attr("data-earliest-release-date")};if(x)d.mainTitle=t(f.element).find(".under-info .main-title").text(),d.comments=t(f.element).find('.episode-stats > a[data-original-title="Comments"]').text()||0;else if(d.mainTitle=t(f.element).find('div[data-type="season"] .titles-link h3').text(),a)d.comments=(await a.seasons.comments({id:f.element.dataset.showId,season:d.seasonNum,limit:1})).item_count;else{const e=await fetch(f.element.dataset.url+".json");if(!e.ok)throw new Error(`XHR for: ${e.url} failed with status: ${e.status}`);d.comments=(await e.json()).stats.comment_count}return d});return Promise.all(x?u:u.reverse())}function $(u,f,d,...e){if(!u)return e.pop().color;const{ctx:r,chartArea:i,scales:c}=u.chart;if(i){if(r[f]??={},!r[f].gradient||r[f].height!==i.height||r[f].yAxisMin!==c[d].min||r[f].yAxisMax!==c[d].max){r[f].height=i.height,r[f].yAxisMin=c[d].min,r[f].yAxisMax=c[d].max;let _=c[d].max-c[d].min;_=_?c[d].max/_:1,_=i.bottom*_,r[f].gradient=r.createLinearGradient(0,_,0,i.top),e.forEach(S=>r[f].gradient.addColorStop(S.offset,S.color))}return r[f].gradient}}function b(){return{labels:l.map(h),datasets:[{label:"Personal Rating",data:l.map(u=>u.personalRating?u.personalRating*10:null),yAxisID:"yAxisRating",borderColor:u=>$(u,"_ratingPersonal","yAxisRating",{offset:0,color:"rgb(97 97 97 / 0.6)"},{offset:.1,color:"rgb(97 97 97 / 0.6)"},{offset:1,color:"rgb(175 2 0)"}),backgroundColor:u=>$(u,"_ratingPersonal","yAxisRating",{offset:0,color:"rgb(97 97 97 / 0.6)"},{offset:.1,color:"rgb(97 97 97 / 0.6)"},{offset:1,color:"rgb(175 2 0)"})},{label:"General Rating",data:l.map(u=>u.generalRating),yAxisID:"yAxisRating",fill:{target:"-1",above:`rgb(255 0 0 / ${t("body").hasClass("dark-knight")?.15:.3})`,below:`rgb(0 255 0 / ${t("body").hasClass("dark-knight")?.15:.3})`},borderColor:u=>$(u,"_ratingGeneral","yAxisRating",{offset:0,color:"rgb(97 97 97 / 0.6)"},{offset:.1,color:"rgb(97 97 97 / 0.6)"},{offset:1,color:"rgb(225 31 117)"}),backgroundColor:u=>$(u,"_ratingGeneral","yAxisRating",{offset:0,color:"rgb(97 97 97 / 0.6)"},{offset:.1,color:"rgb(97 97 97 / 0.6)"},{offset:1,color:"rgb(225 31 117)"})},{label:"Watchers",data:l.map(u=>u.watchers),yAxisID:"yAxisWatchers",borderColor:u=>$(u,"_watchers","yAxisWatchers",{offset:0,color:"rgb(154 67 201 / 0.2)"},{offset:1,color:"rgb(154 67 201)"}),backgroundColor:u=>$(u,"_watchers","yAxisWatchers",{offset:0,color:"rgb(154 67 201 / 0.2)"},{offset:1,color:"rgb(154 67 201)"})},{label:"Comments",data:l.map(u=>u.comments),yAxisID:"yAxisComments",borderColor:u=>$(u,"_comments","yAxisComments",{offset:0,color:"rgb(54 157 226 / 0.2)"},{offset:1,color:"rgb(54 157 226)"}),backgroundColor:u=>$(u,"_comments","yAxisComments",{offset:0,color:"rgb(54 157 226 / 0.2)"},{offset:1,color:"rgb(54 157 226)"})}]}}function k(){return{responsive:!0,maintainAspectRatio:!1,interaction:{mode:"nearest",axis:"x",intersect:!1},animation:{delay:u=>u.type==="data"&&u.mode==="default"?(n?500:0)+u.dataIndex*(750/Math.max(l.length-1,1))+u.datasetIndex*100:0},scales:{x:{offset:!0},yAxisRating:{type:"linear",position:"left",offset:!0,suggestedMin:60,max:100,title:{display:!0,text:"Rating"},grid:{color:u=>u.tick.value%10?Chart.defaults.borderColor:"rgb(55 55 55)"},ticks:{callback:u=>`${u}%`}},yAxisWatchers:{type:"linear",position:"right",offset:!0,min:0,suggestedMax:10,title:{display:!0,text:"Watchers"},grid:{drawOnChartArea:!1},ticks:{callback:u=>s.formatTLC(u)}},yAxisComments:{type:"linear",position:"right",offset:!0,min:0,suggestedMax:10,title:{display:!0,text:"Comments"},grid:{drawOnChartArea:!1}}},plugins:{tooltip:{usePointStyle:!0,boxPadding:5,backgroundColor:"rgb(0 0 0 / 0.5)",caretSize:10,padding:{x:18,y:6},titleFont:{size:13,weight:"bold"},callbacks:{title:u=>{let f=l[u[0].parsed.x].mainTitle;return f=f.length>20?f.slice(0,20).trim()+"...":f,`${u[0].label}${f?`
${f}`:""}`},label:u=>{const f=u.parsed.x,d=u.parsed.y,e=unsafeWindow.userscriptAvgSeasonEpisodeRatings;return u.datasetIndex===0?`${d/10}${e?.personal?.average?`  (avg: ${e.personal.average.toFixed(1)})`:""}`:u.datasetIndex===1?`${d}%  (${s.formatTLC(l[f].votes)} v.)${e?.general?`  (avg: ${e.general.average?Math.round(e.general.average):"--"}%)`:""}`:u.datasetIndex===2?`${s.formatTLC(d)}${l[0].watchers?`  (${Math.round(d*100/l[0].watchers)}%)`:""}`:`${d}`},labelColor:u=>({borderColor:u.dataset.borderColor(),backgroundColor:u.dataset.backgroundColor()}),footer:u=>{const f=l[u[0].parsed.x].releaseDate;return f?unsafeWindow.formatDate?.(f)||f:void 0}}},legend:{labels:{usePointStyle:!0,filter:(u,f)=>f.datasets[u.datasetIndex].data.some(d=>d!==null)}},filler:{propagate:!1},zoom:{zoom:{mode:"x",drag:{enabled:!0,threshold:0}},limits:{x:{minRange:8}}}}}}function v(){GM_addStyle(`
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
  `)}})("Trakt.tv | Charts - Seasons"),gmStorage.f785bub0&&(async C=>{"use strict";const t={_defaults:{title:(typeof C<"u"?C:GM_info.script.name).replace("Trakt.tv","Userscript"),toast:!0,toastrOpt:{positionClass:"toast-top-right",timeOut:1e4,progressBar:!0},toastrStyles:"#toast-container#toast-container a { color: #fff !important; border-bottom: dotted 1px #fff; }"},_print(b,k,v="",u={}){const{title:f=this._defaults.title,toast:d=this._defaults.toast,toastrOpt:e,toastrStyles:r="",consoleStyles:i="",data:c}=u,_=`${v}${c!==void 0?" See console for details.":""}<style>${this._defaults.toastrStyles+r}</style>`;console[b](`%c${f}: ${v}`,i,...c!==void 0?[c]:[]),d&&unsafeWindow.toastr?.[k](_,f,{...this._defaults.toastrOpt,...e})},info(b,k){this._print("info","info",b,k)},success(b,k){this._print("info","success",b,{consoleStyles:"color:#00c853;",...k})},warning(b,k){this._print("warn","warning",b,k)},error(b,k){this._print("error","error",b,k)}},a={logApiRequests:!1,apiUrl:"https://api.trakt.tv",app:{},auth:{},...GM_getValue("traktApiWrapper")};GM_setValue("traktApiWrapper",a);const g=document.cookie.match(/(?:^|; )trakt_userslug=([^;]*)/)?.[1];let x=Promise.resolve(),p=Promise.resolve(),h=Promise.resolve(),o;g&&(unsafeWindow.userscriptTraktApiWrapper=o=m($()));async function l(b){const k=Object.groupBy(Object.entries(b),([d])=>d.startsWith("_")?"opts":"params"),v=Object.fromEntries(k.opts??[]),u=Object.fromEntries(k.params??[]);Object.assign(a,GM_getValue("traktApiWrapper"));const f={method:v._method,...v._revalidate!=null&&{revalidate:!!v._revalidate},responseType:"json",headers:{"content-type":"application/json","user-agent":"TraktApiWrapper/v1","trakt-api-version":"2"}};return f.url=a.apiUrl+v._path.replaceAll(/:(\?)?(\w+)/g,(d,e,r)=>{if(u[r]!=null)return delete u[r],b[r];if(e)return"";throw new Error(`Missing mandatory path parameter: ${r}`)}),/GET|DELETE/.test(v._method)?f.url=f.url+(Object.keys(u).length?`?${new URLSearchParams(u)}`:""):/POST|PUT/.test(v._method)&&(f.data=JSON.stringify(u)),await p,(!a.app.clientId||!a.app.clientSecret||!a.app.redirectUri)&&(p=w(),await p),f.headers["trakt-api-key"]=a.app.clientId,v._auth&&(await h,(!a.auth.accessToken||!a.auth.expiresAt||a.auth.expiresAt<Date.now()+300*1e3||a.auth.userslug!==g)&&(h=y(),await h),f.headers.authorization=`Bearer ${a.auth.accessToken}`),v._auth&&v._method!=="GET"?new Promise(e=>{x=x.then(()=>{const r=n(f,{_retry:{limit:5,req_delay:1100,resp_delay:1100},...v});return e(r),new Promise(i=>{setTimeout(()=>r.finally(i),1100)})})}):n(f,v)}function n(b,k){return GM.xmlHttpRequest(b).then(v=>{if(a.logApiRequests&&t.info(`${b.method}: ${b.url}`,{toast:!1,data:{req:b,resp:v}}),v.parsedTraktHeaders=s(v.responseHeaders),v.status>=200&&v.status<300)return k._meta?{data:v.response,meta:v.parsedTraktHeaders}:v.response;if(v.status===429&&k._retry?.limit){const u={...k,_retry:{limit:k._retry.limit-1,req_delay:k._retry.req_delay*2}};return new Promise(f=>setTimeout(()=>f(n(b,u)),k._retry.req_delay)).then(f=>new Promise(d=>setTimeout(()=>d(f),k._retry.resp_delay)))}throw v.status===401&&!v.parsedTraktHeaders.private_user&&(t.warning("Auth tokens might be invalid and have been cleared.",{data:a.auth}),a.auth={},GM_setValue("traktApiWrapper",a)),v.status===403&&(t.warning("Client credentials might be invalid and have been cleared.",{data:a}),a.app={id:a.app.id},a.auth={},GM_setValue("traktApiWrapper",a)),v})}function s(b){const k=b.split(/\r?\n/).map(u=>u.split(/(?<=^[^:]+):/)).map(([u,f])=>[u.trim().toLowerCase(),f?.trim()]),v=k.find(([u])=>u==="access-control-expose-headers")?.[1].toLowerCase().split(",")??[];return Object.fromEntries(k.filter(([u])=>v.includes(u)).map(([u,f])=>[(u.startsWith("x-")?u.slice(2):u).replaceAll("-","_"),f==="true"?!0:f==="false"?!1:/^-?\d*\.?\d+$/.test(f)?+f:f]))}async function w(){try{t.info("No valid client credentials found. Checking for matching application..");const b="Trakt API Wrapper for Userscripts";let k;const v=await fetch("/oauth/applications").then(f=>f.text()).then(f=>new DOMParser().parseFromString(f,"text/html")),u=[...v.querySelectorAll('#authorized-applications > .row:has(.label-success) h4 a[href^="/oauth/applications/"]')].find(f=>{const d=a.app.id?f.getAttribute("href").endsWith(a.app.id):!1,e=f.textContent.trim().toLowerCase()===b.toLowerCase();return d||e});if(u&&(k=await fetch(u.getAttribute("href")).then(f=>f.text()).then(f=>new DOMParser().parseFromString(f,"text/html"))),!k){const f=new FormData;[["authenticity_token",v.querySelector('head meta[name="csrf-token"]').content],["doorkeeper_application[name]",b],["doorkeeper_application[description]","A userscript which provides authenticated Trakt API access to other userscripts. https://github.com/Fenn3c401/Trakt.tv-Userscript-Collection"],["doorkeeper_application[redirect_uri]","https://trakt.tv/dashboard"],["doorkeeper_application[origins]","https://trakt.tv"],["doorkeeper_application[icon]",new Blob([],{type:"application/octet-stream"}),""],["doorkeeper_application[checkin]","0"],["doorkeeper_application[checkin]","1"],["doorkeeper_application[scrobble]","0"],["doorkeeper_application[scrobble]","1"],["commit","Save App"]].forEach(e=>f.append(...e));const d=await GM.xmlHttpRequest({url:"/oauth/applications",method:"POST",data:f,headers:{referer:"https://trakt.tv/oauth/applications/new"}});d.status>=200&&d.status<300&&(k=new DOMParser().parseFromString(d.responseText,"text/html"),t.info(`No matching application found. New Trakt API application has been created. <a href="${d.finalUrl}" target="_blank">${d.finalUrl}</a>`))}GM_setValue("traktApiWrapper",Object.assign(a,{app:{clientId:k.querySelector("#authorized-applications .credentials:nth-child(1 of .credentials) code").textContent,clientSecret:k.querySelector("#authorized-applications .credentials:nth-child(2 of .credentials) code").textContent,redirectUri:k.querySelector(".redirect-uris code").textContent,id:+k.querySelector('.btn.update[href$="edit"]').getAttribute("href").match(/\d+/)[0]}})),t.success("Successfully fetched client credentials!",{data:a.app})}catch(b){throw t.error("Failed to fetch client credentials!"),b}}async function y(){try{const b=!a.auth.refreshToken||a.auth.userslug!==g;let k;if(b){t.info("No valid refresh token found. Authorizing application..");const u=new URLSearchParams({response_type:"code",client_id:a.app.clientId,redirect_uri:a.app.redirectUri}),f=`${a.apiUrl.replace(/api[.-]/,"")}/oauth/authorize?${u}`,d=await fetch(f).then(r=>r.text()).then(r=>new DOMParser().parseFromString(r,"text/html")),e=await GM.xmlHttpRequest({method:"POST",url:"/oauth/authorize",headers:{referer:f},data:new URLSearchParams([["authenticity_token",d.querySelector('head meta[name="csrf-token"]').content],["client_id",a.app.clientId],["redirect_uri",a.app.redirectUri],["state",""],["response_type","code"],["response_mode","query"],["scope","public"],["nonce",""],["code_challenge",""],["code_challenge_method",""],["commit","Yes"]])});k=new URL(e.finalUrl).searchParams.get("code"),k?t.success("Application successfully authorized!",{data:{code:k}}):(a.app={id:a.app.id},GM_setValue("traktApiWrapper",a),t.warning("Client credentials might be invalid and have been cleared."))}const v=await o.oauth.get({client_id:a.app.clientId,client_secret:a.app.clientSecret,redirect_uri:a.app.redirectUri,grant_type:b?"authorization_code":"refresh_token",...b?{code:k}:{refresh_token:a.auth.refreshToken}});GM_setValue("traktApiWrapper",Object.assign(a,{auth:{accessToken:v.access_token,expiresAt:(v.created_at+v.expires_in)*1e3,refreshToken:v.refresh_token,userslug:g}}))}catch(b){throw t.error("Failed to fetch authentication tokens!"),b}}function m(b,k){if(b._path=(k??"")+(b._path??""),b._method)return v=>l({...b,...v});for(const v in b)v.startsWith("_")||(b[v]=m(b[v],b._path));return delete b._path,b}function $(){return{oauth:{_path:"/oauth",get:{_method:"POST",_path:"/token"},revoke:{_method:"POST",_path:"/revoke"}},calendars:{_path:"/calendars",my:{_path:"/my",shows:{_method:"GET",_path:"/shows/:?start_date/:?days",_auth:!0},new_shows:{_method:"GET",_path:"/shows/new/:?start_date/:?days",_auth:!0},season_premieres:{_method:"GET",_path:"/shows/premieres/:?start_date/:?days",_auth:!0},finales:{_method:"GET",_path:"/shows/finales/:?start_date/:?days",_auth:!0},movies:{_method:"GET",_path:"/movies/:?start_date/:?days",_auth:!0},streaming:{_method:"GET",_path:"/streaming/:?start_date/:?days",_auth:!0},dvd:{_method:"GET",_path:"/dvd/:?start_date/:?days",_auth:!0}},all:{_path:"/all",shows:{_method:"GET",_path:"/shows/:?start_date/:?days"},new_shows:{_method:"GET",_path:"/shows/new/:?start_date/:?days"},season_premieres:{_method:"GET",_path:"/shows/premieres/:?start_date/:?days"},finales:{_method:"GET",_path:"/shows/finales/:?start_date/:?days"},movies:{_method:"GET",_path:"/movies/:?start_date/:?days"},streaming:{_method:"GET",_path:"/streaming/:?start_date/:?days"},dvd:{_method:"GET",_path:"/dvd/:?start_date/:?days"}}},checkin:{_path:"/checkin",add:{_method:"POST",_auth:!0},remove:{_method:"DELETE",_auth:!0}},certifications:{_method:"GET",_path:"/certifications/:type"},comments:{_path:"/comments",comment:{add:{_method:"POST",_auth:!0},get:{_method:"GET",_path:"/:id"},update:{_method:"PUT",_path:"/:id",_auth:!0},remove:{_method:"DELETE",_path:"/:id",_auth:!0}},replies:{_path:"/:id/replies",get:{_method:"GET"},add:{_method:"POST",_auth:!0}},item:{_method:"GET",_path:"/:id/item"},likes:{_path:"/:id",get:{_method:"GET",_path:"/likes"},add:{_method:"POST",_path:"/like",_auth:!0},remove:{_method:"DELETE",_path:"/like",_auth:!0}},trending:{_method:"GET",_path:"/trending/:?comment_type/:?type"},recent:{_method:"GET",_path:"/recent/:?comment_type/:?type"},updates:{_method:"GET",_path:"/updates/:?comment_type/:?type"}},countries:{_method:"GET",_path:"/countries/:type"},genres:{_method:"GET",_path:"/genres/:type"},languages:{_method:"GET",_path:"/languages/:type"},lists:{_path:"/lists",trending:{_method:"GET",_path:"/trending/:?type"},popular:{_method:"GET",_path:"/popular/:?type"},list:{_path:"/:id",get:{_method:"GET"},items:{_method:"GET",_path:"/items/:?type/:?sort_by/:?sort_how"},comments:{_method:"GET",_path:"/comments/:?sort"},likes:{get:{_method:"GET",_path:"/likes"},add:{_method:"POST",_path:"/like",_auth:!0},remove:{_method:"DELETE",_path:"/like",_auth:!0}}}},movies:{_path:"/movies",trending:{_method:"GET",_path:"/trending"},popular:{_method:"GET",_path:"/popular"},favorited:{_method:"GET",_path:"/favorited/:?period"},played:{_method:"GET",_path:"/played/:?period"},watched:{_method:"GET",_path:"/watched/:?period"},collected:{_method:"GET",_path:"/collected/:?period"},anticipated:{_method:"GET",_path:"/anticipated"},boxoffice:{_method:"GET",_path:"/boxoffice"},updates:{_method:"GET",_path:"/updates/:?start_date"},updated_ids:{_method:"GET",_path:"/updates/id/:?start_date"},summary:{_method:"GET",_path:"/:id"},aliases:{_method:"GET",_path:"/:id/aliases"},releases:{_method:"GET",_path:"/:id/releases/:?country"},translations:{_method:"GET",_path:"/:id/translations/:?language"},comments:{_method:"GET",_path:"/:id/comments/:?sort"},lists:{_method:"GET",_path:"/:id/lists/:?type/:?sort"},people:{_method:"GET",_path:"/:id/people"},ratings:{_method:"GET",_path:"/:id/ratings"},related:{_method:"GET",_path:"/:id/related"},stats:{_method:"GET",_path:"/:id/stats"},studios:{_method:"GET",_path:"/:id/studios"},watching:{_method:"GET",_path:"/:id/watching"},videos:{_method:"GET",_path:"/:id/videos"},refresh:{_method:"POST",_path:"/:id/refresh",_auth:!0}},networks:{_method:"GET",_path:"/networks"},notes:{_path:"/notes",add:{_method:"POST",_auth:!0},get:{_method:"GET",_path:"/:id",_auth:!0},update:{_method:"PUT",_path:"/:id",_auth:!0},remove:{_method:"DELETE",_path:"/:id",_auth:!0},item:{_method:"GET",_path:"/:id/item"}},people:{_path:"/people",updates:{_method:"GET",_path:"/updates/:?start_date"},updated_ids:{_method:"GET",_path:"/updates/id/:?start_date"},summary:{_method:"GET",_path:"/:id"},movies:{_method:"GET",_path:"/:id/movies"},shows:{_method:"GET",_path:"/:id/shows"},lists:{_method:"GET",_path:"/:id/lists/:?type/:?sort"},refresh:{_method:"POST",_path:"/:id/refresh",_auth:!0}},recommendations:{_path:"/recommendations",movies:{_path:"/movies",get:{_method:"GET",_auth:!0},hide:{_method:"DELETE",_path:"/:id",_auth:!0}},shows:{_path:"/shows",get:{_method:"GET",_auth:!0},hide:{_method:"DELETE",_path:"/:id",_auth:!0}}},scrobble:{_path:"/scrobble",start:{_method:"POST",_path:"/start",_auth:!0},stop:{_method:"POST",_path:"/stop",_auth:!0}},search:{_path:"/search",text:{_method:"GET",_path:"/:type"},id:{_method:"GET",_path:"/:id_type/:id"}},shows:{_path:"/shows",trending:{_method:"GET",_path:"/trending"},popular:{_method:"GET",_path:"/popular"},favorited:{_method:"GET",_path:"/favorited/:?period"},played:{_method:"GET",_path:"/played/:?period"},watched:{_method:"GET",_path:"/watched/:?period"},collected:{_method:"GET",_path:"/collected/:?period"},anticipated:{_method:"GET",_path:"/anticipated"},updates:{_method:"GET",_path:"/updates/:?start_date"},updated_ids:{_method:"GET",_path:"/updates/id/:?start_date"},summary:{_method:"GET",_path:"/:id"},aliases:{_method:"GET",_path:"/:id/aliases"},certifications:{_method:"GET",_path:"/:id/certifications"},translations:{_method:"GET",_path:"/:id/translations/:?language"},comments:{_method:"GET",_path:"/:id/comments/:?sort"},lists:{_method:"GET",_path:"/:id/lists/:?type/:?sort"},progress:{_path:"/:id/progress",collection:{_method:"GET",_path:"/collection",_auth:!0},watched:{_method:"GET",_path:"/watched",_auth:!0},reset:{_method:"POST",_path:"/watched/reset",_auth:!0},undo_reset:{_method:"DELETE",_path:"/watched/reset",_auth:!0}},people:{_method:"GET",_path:"/:id/people"},ratings:{_method:"GET",_path:"/:id/ratings"},related:{_method:"GET",_path:"/:id/related"},stats:{_method:"GET",_path:"/:id/stats"},studios:{_method:"GET",_path:"/:id/studios"},watching:{_method:"GET",_path:"/:id/watching"},next_episode:{_method:"GET",_path:"/:id/next_episode"},last_episode:{_method:"GET",_path:"/:id/last_episode"},videos:{_method:"GET",_path:"/:id/videos"},refresh:{_method:"POST",_path:"/:id/refresh",_auth:!0}},seasons:{_path:"/shows/:id/seasons",summary:{_method:"GET"},season:{_method:"GET",_path:"/:season/info"},episodes:{_method:"GET",_path:"/:season"},translations:{_method:"GET",_path:"/:season/translations/:?language"},comments:{_method:"GET",_path:"/:season/comments/:?sort"},lists:{_method:"GET",_path:"/:season/lists/:?type/:?sort"},people:{_method:"GET",_path:"/:season/people"},ratings:{_method:"GET",_path:"/:season/ratings"},stats:{_method:"GET",_path:"/:season/stats"},watching:{_method:"GET",_path:"/:season/watching"},videos:{_method:"GET",_path:"/:season/videos"}},episodes:{_path:"/shows/:id/seasons/:season/episodes/:episode",summary:{_method:"GET"},translations:{_method:"GET",_path:"/translations/:?language"},comments:{_method:"GET",_path:"/comments/:?sort"},lists:{_method:"GET",_path:"/lists/:?type/:?sort"},people:{_method:"GET",_path:"/people"},ratings:{_method:"GET",_path:"/ratings"},stats:{_method:"GET",_path:"/stats"},watching:{_method:"GET",_path:"/watching"},videos:{_method:"GET",_path:"/videos"}},sync:{_path:"/sync",last_activities:{_method:"GET",_path:"/last_activities",_auth:!0},playback:{_path:"/playback",get:{_method:"GET",_path:"/:?type",_auth:!0},remove:{_method:"DELETE",_path:"/:id",_auth:!0}},collection:{_path:"/collection",get:{_method:"GET",_path:"/:type",_auth:!0},add:{_method:"POST",_auth:!0},remove:{_method:"POST",_path:"/remove",_auth:!0}},watched:{_method:"GET",_path:"/watched/:type",_auth:!0},history:{_path:"/history",get:{_method:"GET",_path:"/:?type/:?id",_auth:!0},add:{_method:"POST",_auth:!0},remove:{_method:"POST",_path:"/remove",_auth:!0}},ratings:{_path:"/ratings",get:{_method:"GET",_path:"/:?type/:?rating",_auth:!0},add:{_method:"POST",_auth:!0},remove:{_method:"POST",_path:"/remove",_auth:!0}},watchlist:{_path:"/watchlist",get:{_method:"GET",_path:"/:?type/:?sort_by/:?sort_how",_auth:!0},update:{_method:"PUT",_auth:!0},add:{_method:"POST",_auth:!0},remove:{_method:"POST",_path:"/remove",_auth:!0},reorder:{_method:"POST",_path:"/reorder",_auth:!0},update_item:{_method:"PUT",_path:"/:list_item_id",_auth:!0}},favorites:{_path:"/favorites",get:{_method:"GET",_path:"/:?type/:?sort_by/:?sort_how",_auth:!0},update:{_method:"PUT",_auth:!0},add:{_method:"POST",_auth:!0},remove:{_method:"POST",_path:"/remove",_auth:!0},reorder:{_method:"POST",_path:"/reorder",_auth:!0},update_item:{_method:"PUT",_path:"/:list_item_id",_auth:!0}}},users:{_path:"/users",settings:{_method:"GET",_path:"/settings",_auth:!0},requests:{_path:"/requests",following:{_method:"GET",_path:"/following",_auth:!0},get:{_method:"GET",_auth:!0},approve:{_method:"POST",_path:"/:id",_auth:!0},deny:{_method:"DELETE",_path:"/:id",_auth:!0}},saved_filters:{_method:"GET",_path:"/saved_filters/:?section",_auth:!0},hidden:{_path:"/hidden",get:{_method:"GET",_path:"/:section",_auth:!0},add:{_method:"POST",_path:"/:section",_auth:!0},remove:{_method:"POST",_path:"/:section/remove",_auth:!0}},profile:{_method:"GET",_path:"/:id"},likes:{_method:"GET",_path:"/:id/likes/:?type"},collection:{_method:"GET",_path:"/:id/collection/:type"},comments:{_method:"GET",_path:"/:id/comments/:?comment_type/:?type"},notes:{_method:"GET",_path:"/:id/notes/:?type"},lists:{_path:"/:id/lists",get:{_method:"GET"},create:{_method:"POST",_auth:!0},reorder:{_method:"POST",_path:"/reorder",_auth:!0},collaborations:{_method:"GET",_path:"/collaborations"}},list:{_path:"/:id/lists/:list_id",get:{_method:"GET"},update:{_method:"PUT",_auth:!0},delete:{_method:"DELETE",_auth:!0},likes:{get:{_method:"GET",_path:"/likes"},add:{_method:"POST",_path:"/like",_auth:!0},remove:{_method:"DELETE",_path:"/like",_auth:!0}},items:{_path:"/items",get:{_method:"GET",_path:"/:?type/:?sort_by/:?sort_how"},add:{_method:"POST",_auth:!0},remove:{_method:"POST",_path:"/remove",_auth:!0},reorder:{_method:"POST",_path:"/reorder",_auth:!0},update:{_method:"PUT",_path:"/:list_item_id",_auth:!0}},comments:{_method:"GET",_path:"/comments/:?sort"}},follow:{_path:"/:id/follow",add:{_method:"POST",_auth:!0},remove:{_method:"DELETE",_auth:!0}},followers:{_method:"GET",_path:"/:id/followers"},following:{_method:"GET",_path:"/:id/following"},friends:{_method:"GET",_path:"/:id/friends"},history:{_method:"GET",_path:"/:id/history/:?type/:?item_id"},ratings:{_method:"GET",_path:"/:id/ratings/:?type/:?rating"},watchlist:{_method:"GET",_path:"/:id/watchlist/:?type/:?sort_by/:?sort_how"},watchlist_comments:{_method:"GET",_path:"/:id/watchlist/comments/:?sort"},favorites:{_method:"GET",_path:"/:id/favorites/:?type/:?sort_by/:?sort_how",_auth:!0},favorites_comments:{_method:"GET",_path:"/:id/favorites/comments/:?sort"},watching:{_method:"GET",_path:"/:id/watching"},watched:{_method:"GET",_path:"/:id/watched/:type"},stats:{_method:"GET",_path:"/:id/stats"}}}}})("Trakt.tv | Trakt API Wrapper"),gmStorage.fyk2l3vj&&(async C=>{"use strict";let t,a;const g={_defaults:{title:(typeof C<"u"?C:GM_info.script.name).replace("Trakt.tv","Userscript"),toast:!0,toastrOpt:{positionClass:"toast-top-right",timeOut:1e4,progressBar:!0},toastrStyles:"#toast-container#toast-container a { color: #fff !important; border-bottom: dotted 1px #fff; }"},_print(n,s,w="",y={}){const{title:m=this._defaults.title,toast:$=this._defaults.toast,toastrOpt:b,toastrStyles:k="",consoleStyles:v="",data:u}=y,f=`${w}${u!==void 0?" See console for details.":""}<style>${this._defaults.toastrStyles+k}</style>`;console[n](`%c${m}: ${w}`,v,...u!==void 0?[u]:[]),$&&unsafeWindow.toastr?.[s](f,m,{...this._defaults.toastrOpt,...b})},info(n,s){this._print("info","info",n,s)},success(n,s){this._print("info","success",n,{consoleStyles:"color:#00c853;",...s})},warning(n,s){this._print("warn","warning",n,s)},error(n,s){this._print("error","error",n,s)}},x={...GM_getValue("enhancedTitleMetadata")};GM_setValue("enhancedTitleMetadata",x),l(),document.addEventListener("turbo:load",async()=>{if(!/^\/(shows|movies)\//.test(location.pathname)||(t??=unsafeWindow.jQuery,a??=unsafeWindow.userscriptTraktApiWrapper,!t))return;const n=t("#overview .additional-stats > li"),s=location.pathname.split("/").filter(Boolean);if(!n.length)return;const w=t("#summary-wrapper .year");w.parent().is("a")&&w.insertAfter(w.parent()),w.wrapAll(`<a href="/search/${s[0]}?years=${w.text().slice(0,4)}-${w.text().slice(-4)}"></a>`),t("#summary-wrapper div.certification").wrap(`<a href="${t("#external-link-imdb").attr("href").split("/episodes")[0]}/parentalguide"></a>`);const m=n.filter((i,c)=>t(c).find("label").text().toLowerCase()==="writers");m.find("label").wrap(`<a href="/search/${s[0]}?query=%22${m.find("a:not(.writers-expand)").get().map(i=>i.textContent).join("%22+%22")}%22&fields=people"></a>`);const $=n.filter(':has([itemprop="genre"])'),b=[];$.find('[itemprop="genre"]').each((i,c)=>{b[i]=t(c).text().toLowerCase().replaceAll(" ","-"),t(c).wrap(`<a href="/search/${s[0]}?genres=${b[i]}"></a>`)}),b.length>1&&$.find("label").wrap(`<a href="/search/${s[0]}?genres=+${b.join(",+")}"></a>`);const k=n.filter((i,c)=>t(c).find("label").text().toLowerCase()==="country");let v;if(k.length){const i=await p(),c=k.contents().get(-1)?.textContent;if(v=i[c],v){const _=unsafeWindow.watchnowAllCountries?.[v]?.image;_&&k.children().last().after(`<img class="country-flag" src="${_}">`),k.contents().filter((S,T)=>!t(T).is("meta, label")).wrapAll(`<a href="/search/${s[0]}?countries=${v}"></a>`)}else x.allCountriesMap=null,GM_setValue("enhancedTitleMetadata",x),g.error("Failed to match title country. Cached countries have been cleared. Reload page to try again.")}const u=n.filter((i,c)=>t(c).find("label").text().toLowerCase().startsWith("language")),f={};if(u.length){const i=await h(),c=Object.fromEntries(i);let _=u.contents().get(-1).textContent;if(i.forEach(([S,T],E)=>{const G=new RegExp(`${RegExp.escape(T)}(, |$)`);G.test(_)&&(f[_.indexOf(T)]=S,_=_.replace(G,M=>" ".repeat(M.length)))}),_.trim())x.allLanguagesArrSorted=null,GM_setValue("enhancedTitleMetadata",x),g.error(`Failed to match all title languages (ORIGINAL: ${u.contents().get(-1).textContent} REMAINDER: ${_.trim()}). Cached languages have been cleared. Reload page to try again.`);else{const S=Object.values(f);u.contents().last().replaceWith(S.map(T=>`<a href="/search/${s[0]}?languages=${T}">${c[T]}</a>`).join(", ")),S.length>1&&u.find("label").wrap(`<a href="/search/${s[0]}?languages=+${S.join(",+")}"></a>`)}}const d=n.filter((i,c)=>t(c).find("label").text().toLowerCase().startsWith("network")),e=n.filter((i,c)=>/airs|aired|premiered/i.test(t(c).find("label").text())).first();if(d.length&&s[3]!=="all"){const i={},c=await o(),_=Object.fromEntries(c);let S=d.contents().get(-1).textContent;if(c.forEach(([T,{name:E,countryId:G}],M)=>{const P=new RegExp(`${RegExp.escape(E)}(, |$)`);P.test(S)&&(G===v||Object.hasOwn(f,G)||E!==c[M+1]?.[1].name)&&(i[S.indexOf(E)]=T,S=S.replace(P,L=>" ".repeat(L.length)))}),S.trim())x.allNetworksArrSorted=null,GM_setValue("enhancedTitleMetadata",x),g.error(`Failed to match all title networks (ORIGINAL: ${d.contents().get(-1).textContent} REMAINDER: ${S.trim()}). Cached networks have been cleared. Reload page to try again.`);else{const T=Object.values(i);d.contents().last().replaceWith(T.map(E=>`<a href="/search/shows?network_ids=${E}">${_[E].name}${_[E].countryId?` (${_[E].countryId.toUpperCase()})`:""}</a>`).join("")),T.length>1&&(d.find("label").wrap(`<a href="/search/shows?network_ids=${T.join(",")}"></a>`),t(`<a href onclick="$(this).hide(); $(this).next().show(); return false;"> + ${T.length-1} more</a>`).insertAfter(d.children().eq(1)).nextAll().wrapAll('<span style="display: none;"></span>')),d.find("a:not(:has(label), [onclick])").slice(1).before(", ")}}else if(e.text().includes(" on ")&&s[3]!=="all"){const i=await o(),c=e.contents().last().text().split(" on ")[1],_=c?i.find(([S,{name:T,countryId:E}],G)=>new RegExp(`${RegExp.escape(T)}(, |$)`).test(c)&&(E===v||Object.hasOwn(f,E)||T!==i[G+1]?.[1].name)):null;_?(e.contents().last().remove(),e.append(` on <a href="/search/shows?network_ids=${_[0]}">${_[1].name}${_[1].countryId?` (${_[1].countryId.toUpperCase()})`:""}</a>`)):(x.allNetworksArrSorted=null,GM_setValue("enhancedTitleMetadata",x),g.error(`Failed to match title network (${c}). Cached networks have been cleared. Reload page to try again.`))}const r=n.filter((i,c)=>t(c).find("label").text().toLowerCase().startsWith("studio"));if(r.length)if(a){let i=!1;const c=async function(_){if(i)return;i=!0,_?.preventDefault(),unsafeWindow.showLoading?.();const S=await a[s[0]].studios({id:t(".summary-user-rating").attr(`data-${s[0].slice(0,-1)}-id`)}),T=S.map(E=>E.ids.trakt).join();if(unsafeWindow.hideLoading?.(),_){const E=`/search/${s[0]}?studio_ids=${t(this).find("label").length?T:S[0].ids.trakt}`;_.type==="click"?location.href=E:_.originalEvent.button===1&&GM_openInTab(location.origin+E,{setParent:!0})}r.children().eq(0).attr("href",`/search/${s[0]}?studio_ids=${T}`),r.children().eq(1).attr("href",`/search/${s[0]}?studio_ids=${S[0].ids.trakt}`),r.find(".studios-more").html(S.slice(1).map(E=>`, <a href="/search/${s[0]}?studio_ids=${E.ids.trakt}">${E.name}</a>`))};r.find("label").wrap(t('<a href="#"></a>').one("click auxclick",c)),r.contents().eq(1).wrap(t('<a href="#"></a>').one("click auxclick",c)),r.find(".studios-expand").one("click",()=>c())}else{const i=new Set,c=r.find(".studios-more"),_=r.find(".studios-expand"),S=c.text().split(", ").slice(1),T=+_.text().match(/\d+/)?.[0]||null,E=P=>fetch("/autocomplete/studios?query="+encodeURIComponent(P)).then(L=>L.json()).then(L=>Object.fromEntries(L.map(({label:W,value:O,tag:A})=>[W,+O,A?.toLowerCase()??null]).sort(([W,O,A],[H,R,I])=>W===H?(A&&(A===v||Object.hasOwn(f,A)))-(I&&(I===v||Object.hasOwn(f,I)))||R-O:0))),G=async function(P){P?.preventDefault(),t(this).off(),unsafeWindow.showLoading?.();const L=t(this).text(),W=await E(L),O=W[L];if(unsafeWindow.hideLoading?.(),O){i.add(O);const A=`/search/${s[0]}?studio_ids=${O}`;P&&(P.type==="click"?location.href=A:P.originalEvent.button===1&&GM_openInTab(location.origin+A,{setParent:!0})),t(this).attr("href",A)}else g.error("Failed to match title studio: "+L,{data:W})},M=async()=>{if(i.size>1)return;unsafeWindow.showLoading?.();const P=await Promise.all(S.map(W=>E(W).then(O=>[W,O])));let L=-1;unsafeWindow.hideLoading?.(),c.html(P.map(([W,O],A)=>{if(A<=L)return null;let H;for(let R=A;R<P.length;R++)R!==A&&(W+=", "+P[R][0]),O[W]&&(L=R,H=[W,O[W]]);if(H)return i.add(H[1]),`, <a href="/search/${s[0]}?studio_ids=${H[1]}">${H[0]}</a>`;throw g.error("Failed to match all title studios. Could not match: "+P[A][0],{data:O}),new Error("Failed to match all title studios.")}).join(""))};r.contents().eq(1).wrap(t('<a href="#"></a>').on("click auxclick",G)),T&&(T===1?c.text(", ").append(t(`<a href="#">${S.join(", ")}</a>`).on("click auxclick",G)):T===S.length?(c.empty(),S.forEach(P=>c.append(", ",t(`<a href="#">${P}</a>`).on("click auxclick",G)))):_.one("click",M),r.find("label").wrap('<a href="#"></a>').parent().on("click auxclick",async function(P){P.preventDefault(),t(this).off(),await Promise.all([...r.find('a[href="#"]:not(:has(label), .studios-expand)').get().map(W=>G.call(W)),M()]);const L=`/search/${s[0]}?studio_ids=${Array.from(i).join(",")}`;P.type==="click"?location.href=L:P.originalEvent.button===1&&GM_openInTab(location.origin+L,{setParent:!0}),t(this).attr("href",L)}))}},{capture:!0});async function p(){if(!x.allCountriesMap){const n=await fetch("/search/movies").then(s=>s.text()).then(s=>new DOMParser().parseFromString(s,"text/html"));x.allCountriesMap=JSON.stringify(Object.fromEntries(t(n).find("#filter-countries").children().get().map(s=>[t(s).text(),t(s).attr("value").toLowerCase()]))),GM_setValue("enhancedTitleMetadata",x)}return JSON.parse(x.allCountriesMap)}async function h(){if(!x.allLanguagesArrSorted){const n=await fetch("/search/movies").then(s=>s.text()).then(s=>new DOMParser().parseFromString(s,"text/html"));x.allLanguagesArrSorted=JSON.stringify(t(n).find("#filter-languages").children().get().map(s=>[t(s).attr("value"),t(s).text()]).sort(([,s],[,w])=>w.length-s.length)),GM_setValue("enhancedTitleMetadata",x)}return JSON.parse(x.allLanguagesArrSorted)}async function o(){if(!x.allNetworksArrSorted){const n=await fetch("/search/shows").then(w=>w.text()).then(w=>new DOMParser().parseFromString(w,"text/html")),s=new Intl.Collator;x.allNetworksArrSorted=JSON.stringify(t(n).find("#filter-network_ids").children().get().map(w=>t(w).text()?[+t(w).attr("value"),{name:t(w).text(),countryId:t(w).attr("data-tag")?.toLowerCase()}]:null).filter(Boolean).sort(([w,{name:y,countryId:m}],[$,{name:b,countryId:k}])=>b.length-y.length||s.compare(y,b)||(k&&1)-(m&&1)||$-w)),GM_setValue("enhancedTitleMetadata",x)}return JSON.parse(x.allNetworksArrSorted)}function l(){GM_addStyle(`
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
  `)}})("Trakt.tv | Enhanced Title Metadata"),gmStorage.kji85iek&&(async C=>{"use strict";let t;x(),document.addEventListener("turbo:load",()=>{t??=unsafeWindow.jQuery,t&&(unsafeWindow.ratingOverlay=a,g(),t(document).off("ajaxSuccess.userscript12944").on("ajaxSuccess.userscript12944",(p,h,o)=>{o.url.endsWith("/popular_lists")&&(g(),unsafeWindow.addOverlays())}))},{capture:!0});function a(p,h){if(!p.length){const o=p.end();o.closest(".personal-list").length&&o.hasClass("poster")&&(p=o)}p.find(".corner-rating").length||p.prepend(`<div class="corner-rating corner-rating-${h}"><div class="text">${h}</div></div>`)}function g(){t(".personal-list .poster[data-url]:not(:has(> a))").each(function(){t(this).children().wrapAll(`<a href="${t(this).attr("data-url")}"></a>`)})}unsafeWindow.userscriptAddLinksToListPreviewPosters=g;function x(){GM_addStyle(`
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
  `)}})("Trakt.tv | Enhanced List Preview Posters"),gmStorage.p2o98x5r&&(async C=>{"use strict";t(),document.addEventListener("turbo:load",()=>{if(!/^\/users\/[^\/]+\/lists$/.test(location.pathname))return;const a=unsafeWindow.jQuery;if(!a)return;const g=a("#sortable-grid"),x=g.children().length?a('<hr id="all-in-one-lists-view-spacer">').insertAfter(g):void 0,p=a('<button id="all-in-one-lists-view-btn" type="button">All-In-One Lists View</button>').insertAfter(x??g);p.on("click",async()=>{p.text("Loading...").prop("disabled",!0);const h=async y=>fetch(location.pathname+y).then(m=>m.text()).then(m=>a(new DOMParser().parseFromString(m,"text/html")).find(".personal-list"));let o=a((await Promise.all(["/collaborations","/liked","/liked/official"].map(h))).flatMap(y=>y.get()));const l=a(".personal-list"),n=l.map((y,m)=>a(m).attr("data-list-id")).get();if(o=o.filter((y,m)=>!n.includes(a(m).attr("data-list-id"))),!o.length){p.text("No other lists found.");return}const s=+l.last().attr("data-rank");o.each((y,m)=>a(m).attr("data-rank",s+y+1)),o.find(".btn-list-progress").click(function(){unsafeWindow.showLoading();const y=a(this).attr("data-list-id");y&&unsafeWindow.userSettings?.user.vip?unsafeWindow.redirect(unsafeWindow.userURL("progress?list="+y)):unsafeWindow.redirect("/vip/list-progress")}).end().find(".btn-list-subscribe").click(function(){unsafeWindow.showLoading();const y=a(this).attr("data-list-id");y&&unsafeWindow.userSettings?.user.vip?a.post(`/lists/${y}/subscribe`,function(m){unsafeWindow.redirect(m.url)}).fail(function(){unsafeWindow.hideLoading(),unsafeWindow.toastr.error("Doh! We ran into some sort of error.")}):unsafeWindow.redirect("/vip/calendars")}).end().find(".collaborations-deny").on("ajax:success",function(y,m){a("#collaborations-deny-"+m.id).children().addClass("trakt-icon-delete-thick"),a("#collaborations-approve-"+m.id).addClass("off"),a("#collaborations-block-"+m.id).addClass("off")});const w=a("#btn-list-edit-lists");w.hasClass("active")&&w.trigger("click"),w.hide(),g.append(o),x?.remove(),p.remove(),unsafeWindow.genericTooltips(),unsafeWindow.vipTooltips(),unsafeWindow.shareIcons(),unsafeWindow.convertEmojis(),unsafeWindow.userscriptAddLinksToListPreviewPosters?.(),unsafeWindow.addOverlays(),unsafeWindow.$grid?.isotope("insert",o),unsafeWindow.updateListsCount(),unsafeWindow.lazyLoadImages(),unsafeWindow.renderReadmore()})},{capture:!0});function t(){GM_addStyle(`
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
  `)}})("Trakt.tv | All-In-One Lists View"),gmStorage.pmdf6nr9&&(async C=>{"use strict";let t,a;const g=new Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:1});g.formatTLC=s=>g.format(s).toLowerCase(),n(),document.addEventListener("turbo:load",async()=>{if(!/^\/(shows|movies)\//.test(location.pathname)||(t??=unsafeWindow.jQuery,a??=unsafeWindow.userscriptTraktApiWrapper,!t))return;const s=t("#summary-wrapper"),w=s.find("#summary-ratings-wrapper"),y=w.find(".trakt-rating > a").attr("href");if(!y)return;const m=t('<div id="ratings-distribution-chart-wrapper"><canvas></canvas></div>').appendTo(s.find(".shadow-base")).find("canvas"),[$,b]=await Promise.all([x(y),p(s)]),k=()=>{new Chart(m[0].getContext("2d"),{type:"bar",data:o($,b),options:l($,w)})};document.hidden?t(document).one("visibilitychange",k):k()},{capture:!0});async function x(s){let w;if(a){const y=s.split("/").slice(1,-1),m=isNaN(y[1])?y[1]:t(".summary-user-rating").attr(`data-${y[0].slice(0,-1)}-id`),$=await a[y[4]??y[2]??y[0]].ratings({id:m,season:y[3],episode:y[5]});w={distribution:Object.values($.distribution),votes:$.votes}}else{const y=await fetch(s),m=new DOMParser().parseFromString(await y.text(),"text/html");w={distribution:JSON.parse(t(m).find("#charts-wrapper script").text().match(/ratingsDistribution = (\[.*\])/)[1]),votes:t("#summary-ratings-wrapper").data("vote-count")}}return w.distribution.length===11&&(console.warn(GM_info.script.name.replace("Trakt.tv","Userscript")+": Malformed ratings distribution data.",w.distribution.toString()),w.distribution.shift()),w}function p(s){const w=s.find("> .full-screenshot"),y=async()=>{const m=w.css("background-image").match(/https.*webp/)?.[0];if(!m)return .5;const $=await GM.xmlHttpRequest({url:m,responseType:"blob",fetch:!0});if($.status!==200)throw new Error(`XHR for: ${$.finalUrl} failed with status: ${$.status}`);const b=URL.createObjectURL($.response),k=new Image;k.src=b,await k.decode(),URL.revokeObjectURL(b);const v=document.createElement("canvas");v.width=k.naturalWidth,v.height=k.naturalHeight;const u=v.getContext("2d");u.drawImage(k,0,0);const f=k.naturalWidth/4,d=k.naturalHeight/4,e=u.getImageData(3*f,2*d,f,d).data;let r=0,i=e.length/16;for(let c=0;c<e.length;c+=16)r+=(.299*e[c]+.587*e[c+1]+.114*e[c+2])/255;return r/i};return w.attr("style")?y():new Promise(m=>{new MutationObserver(($,b)=>{b.disconnect(),m(y())}).observe(w[0],{attributeFilter:["style"]})})}function h(s,w,y,...m){if(!s)return m.pop().color;const{ctx:$,chartArea:b,scales:k}=s.chart;if(b){if($[w]??={},!$[w].gradient||$[w].height!==b.height||$[w].yAxisMin!==k[y].min||$[w].yAxisMax!==k[y].max){let v=k[y].max-k[y].min;v=v?k[y].max/v:1,v=b.bottom*v,$[w].gradient=$.createLinearGradient(0,v,0,b.top),m.forEach(u=>$[w].gradient.addColorStop(u.offset,u.color)),$[w].height=b.height,$[w].yAxisMin=k[y].min,$[w].yAxisMax=k[y].max}return $[w].gradient}}function o(s,w){return{labels:[...Array(10)].map((y,m)=>String(m+1)),datasets:[{label:"Votes",data:s.distribution,categoryPercentage:1,barPercentage:.97,backgroundColor:`rgba(${Array(3).fill(Math.min(w+.35,1)*255).join(", ")}, ${Math.min(w+.3,.7)})`,hoverBackgroundColor:y=>h(y,"_votes","y",{offset:0,color:`rgba(155, 66, 200, ${Math.min(w+.3,.7)})`},{offset:.9,color:`rgba(255, 0, 0, ${Math.min(w+.3,.7)})`})}]}}function l(s,w){return{responsive:!0,maintainAspectRatio:!1,minBarLength:2,interaction:{mode:"index",intersect:!1},animation:{delay:y=>y.type==="data"&&y.mode==="default"?250+y.dataIndex*(750/(s.distribution.length-1)):0},scales:{x:{display:!1},y:{display:!1,suggestedMax:10}},plugins:{tooltip:{displayColors:!1,backgroundColor:"rgba(0, 0, 0, 0.7)",caretSize:10,padding:{x:12,y:5},titleAlign:"center",titleMarginBottom:2,titleFont:{weight:"bold"},bodyAlign:"center",bodyColor:"rgb(170, 170, 170)",bodyFont:{size:11},footerAlign:"center",footerColor:y=>`hsl(0, ${y.tooltip.dataPoints[0].parsed.x*11}%, 35%)`,footerMarginTop:2,footerFont:{size:18},callbacks:{title:y=>{const m=y[0].label;return`${m} - ${unsafeWindow.ratingsText?.[m]}`},label:y=>{const m=y.parsed.y;return`${s.votes>0?(m*100/s.votes).toFixed(1):"--"}% (${g.formatTLC(m)} v.)`},footer:y=>{const m=w.find('.summary-user-rating > :not([style="display: none;"]) > [class*="rating-"]').first().attr("class")?.match(/rating-(\d+)/)?.[1];return y[0].parsed.x===m-1?"\u2764":""}}},legend:{display:!1}},onClick:(y,m)=>{if(!m.length)return;const $=m[0].index+1;w.find(".summary-user-rating:not(.popover-on)").trigger("click"),setTimeout(()=>t(`.needsclick.rating-${$}`).trigger("mouseover").trigger("click"),500)}}}function n(){GM_addStyle(`
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
  `)}})("Trakt.tv | Charts - Ratings Distribution"),gmStorage.swtn5c9q&&(async C=>{"use strict";let t,a,g;const x={_defaults:{title:(typeof C<"u"?C:GM_info.script.name).replace("Trakt.tv","Userscript"),toast:!0,toastrOpt:{positionClass:"toast-top-right",timeOut:1e4,progressBar:!0},toastrStyles:"#toast-container#toast-container a { color: #fff !important; border-bottom: dotted 1px #fff; }"},_print(d,e,r="",i={}){const{title:c=this._defaults.title,toast:_=this._defaults.toast,toastrOpt:S,toastrStyles:T="",consoleStyles:E="",data:G}=i,M=`${r}${G!==void 0?" See console for details.":""}<style>${this._defaults.toastrStyles+T}</style>`;console[d](`%c${c}: ${r}`,E,...G!==void 0?[G]:[]),_&&unsafeWindow.toastr?.[e](M,c,{...this._defaults.toastrOpt,...S})},info(d,e){this._print("info","info",d,e)},success(d,e){this._print("info","success",d,{consoleStyles:"color:#00c853;",...e})},warning(d,e){this._print("warn","warning",d,e)},error(d,e){this._print("error","error",d,e)}},p=(d,e)=>{const r=~~(d.progress/100*e/60),i=Math.round(d.progress/100*e%60),c=~~((1-d.progress/100)*e/60),_=Math.round((1-d.progress/100)*e%60);return`${d.progress.toFixed(1)}% (${r?`${r}h`:""}${i}m | -${c?`${c}h`:""}${_}m)`},h={},o={set:null,removeAll:null,renewAll:null};let l;location.pathname.includes("/progress/playback")&&document.body?.classList.add("playback"),f(),document.addEventListener("turbo:load",()=>{if(t??=unsafeWindow.jQuery,a??=unsafeWindow.Cookies,g??=unsafeWindow.userscriptTraktApiWrapper,!t||!a)return;if(!g){x.error('"Trakt API Wrapper" is not available. Please make sure you have it installed and/or enabled. Aborting..',{toast:!1});return}unsafeWindow.userscriptPbProgMan={set:n,remove:s,getAll:w,removeAll:y,renewAll:m,items:h},Object.entries(o).forEach(([e,r])=>{r!==null&&(GM_unregisterMenuCommand(r),o[e]=null)});const d=t(':is(.sidebar, .sidebar .btn-item-report):is([data-type="movie"], [data-type="episode"])').attr("data-url");d&&(o.set=GM_registerMenuCommand("PPM: Set New",()=>n(d))),location.pathname.includes("/progress/playback")&&t("body").addClass("playback"),new RegExp(`/users/(me|${a.get("trakt_userslug")})/progress`).test(location.pathname)&&k(),t(document).off("ajaxSuccess.userscript09213").on("ajaxSuccess.userscript09213",async(e,r,i,c)=>{if(i.url.includes("/me/last_activities")&&(!l||l!==c.movies.paused_at+c.episodes.paused_at?(w(),l=c.movies.paused_at+c.episodes.paused_at):t("#playback-progress-wrapper").length||(t("body").is(".show_progress.is-self.playback")&&await v(),b())),[/\/movies\/.*\/related_items$/,/\/shows\/.*\/recent_episodes$/,/\/dashboard\/(recently_watched|on_deck|recommendations\/movies|network_activies|list)$/,/\/users\/.*\/profile\/(recently_watched|most_watched\/movies|comments)$/].some(_=>_.test(i.url))&&b(),i.url.endsWith("/watch")){const _=i.url.match(/(.+)\/watch/)[1];h[_]&&s(_)}})},{capture:!0});async function n(d,e,r=!0){if(e??=prompt(`Please enter your playback progress.
https://trakt.tv${d}

It's not possible to set a playback progress of < 1% or >= 80%.
The input parsing is very lenient, valid formats include:
13 | 13.37 | 13,37% | 0:42 | 0:42:59 | : 42 | 2h42m | 42 M 59s 2 H`),e===null)return;const i=await $(e,d);if(!i){x.error("Invalid playback progress input.");return}h[d]&&await s(d,!1);try{const c=d.split("/").filter(Boolean),_=c[0].slice(0,-1);h[d]={...await g.scrobble.stop({[_]:{ids:{[_==="movie"?"slug":"trakt"]:c[1]}},progress:i}),paused_at:new Date().toISOString(),type:_},x.success(`Playback progress for "${h[d].show?`${h[d].show.title} - `:""}${h[d][h[d].type].title}" has been set to ${h[d].progress.toFixed(1)}%.`,{toast:r,data:h[d]})}catch(c){throw x.error("Failed to set playback progress!",{toast:r,data:c}),c}t("body").is(".show_progress.is-self.playback")&&await v(),b()}async function s(d,e=!0){try{await g.sync.playback.remove({id:h[d].id}),x.success(`Playback progress for "${h[d].show?`${h[d].show.title} - `:""}${h[d][h[d].type].title}" has been removed.`,{toast:e,data:h[d]}),delete h[d]}catch(r){if(r.status===404)x.warning("Playback progress has already been removed.",{toast:e,data:r}),delete h[d];else throw x.error("Failed to remove playback progress!",{toast:e,data:r}),r}t("body").is(".show_progress.is-self.playback")?(t(`.grid-item[data-url="${d}"]`).remove(),t("body > .tooltip").tooltip("destroy")):t(`.pb-prog-badge[data-url="${d}"]`).remove()}async function w(){const d=await g.sync.playback.get();return Object.keys(h).forEach(e=>delete h[e]),Object.assign(h,Object.fromEntries(d.map(e=>[`/${e.type}s/${e[e.type].ids[e.type==="movie"?"slug":"trakt"]}`,e]))),t("body").is(".show_progress.is-self.playback")&&await v(),t(".pb-prog-badge").remove(),b(),h}async function y(d=!0){await Promise.all(Object.entries(h).sort((e,r)=>new Date(e[1].paused_at)-new Date(r[1].paused_at)).map(([e])=>s(e,!1))),x.success("All playback progress items have been removed.",{toast:d})}async function m(d=!0){const e=Object.entries(h).filter(([,{progress:r}])=>r<80).sort((r,i)=>new Date(r[1].paused_at)-new Date(i[1].paused_at));for(const[r,{progress:i}]of e)await n(r,i,!1);e.length?x.success(`All (${e.length}) renewable playback progress items have been renewed.`,{toast:d}):x.warning("No renewable playback progress items found.",{toast:d})}async function $(d,e){d=`${d}`.trim();let r;if(/^[\d.,%]+$/.test(d))r=parseFloat(d.replace(",","."));else if(e){const i=e.split("/").filter(Boolean),c=i[0]==="movies"?(await g.movies.summary({id:i[1],extended:"full"})).runtime:(await g.search.id({id_type:"trakt",id:i[1],type:"episode",extended:"full"}))[0].episode.runtime;if(c){if(d.includes(":"))r=d.split(":").slice(0,3).reduce((_,S,T)=>_+S*(3600/60**T),0)/(c*60)*100;else if(/[hms]/i.test(d)){const[_,S,T]=["h","m","s"].map(E=>+d.match(new RegExp(`(\\d+)s*${E}`,"i"))?.[1]||0);r=(_*3600+S*60+T)/(c*60)*100}}}if(!isNaN(r)&&r>=1&&r<80)return r}function b(){Object.keys(h).length&&t('.grid-item:is([data-type="movie"], [data-type="episode"]):has(.poster, .fanart):not(:has(.pb-prog-badge)), .sidebar:is([data-type="movie"], [data-type="episode"], :has(.btn-item-report:is([data-type="movie"], [data-type="episode"]))):not(:has(.pb-prog-badge)), #summary-ratings-wrapper:has(.summary-user-rating:is([data-type="movie"], [data-type="episode"])) ~ .summary .mobile-poster:not(:has(.pb-prog-badge))').each((d,e)=>{const r=t(e).attr("data-url")??t(".notable-summary").attr("data-url"),i=t(e).attr("data-runtime")??t(".notable-summary").attr("data-runtime");h[r]&&t(`<div class="pb-prog-badge" data-url="${r}" style="--pb-prog-percent: ${h[r].progress}%; display: none;"><div class="icon fa-solid fa-pause"></div></div>`).appendTo(t(e).is(".grid-item")?t(e):t(e).find(".poster")).tooltip({title:()=>`<span style="white-space: nowrap;">Playback Progress<br>${p(h[r],i)}<br>${unsafeWindow.formatDate(h[r].paused_at)}<br><em>Click for options</em></span>`,placement:"right",container:"body",html:!0}).popover({template:'<div class="popover remove" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',title:"Playback Progress Options",content:`<button class="btn btn-primary less-rounded" onclick="$(this).closest('.popover').popover('hide'); userscriptPbProgMan.set('${r}');">Set New</button><button class="btn btn-primary less-rounded" onclick="$(this).closest('.popover').popover('destroy'); userscriptPbProgMan.remove('${r}');">Remove</button><button class="btn btn-cancel less-rounded" onclick="$(this).closest('.popover').popover('hide');">Cancel</button>`,trigger:"manual",placement:"bottom",container:"body",html:!0}).on("click",function(c){c.preventDefault(),t(this).tooltip("hide").popover("show")}).fadeIn()})}function k(){const d=t(".subnav-wrapper .left .dropdown-menu");d.append('<li class="divider fader" role="presentation"></li><li class="dropdown-header" role="presentation">PLAYBACK</li><li><a href="/users/me/progress/playback">All Types</a></li><li><a href="/users/me/progress/playback/movies">Movies</a></li><li><a href="/users/me/progress/playback/episodes">Episodes</a></li>'),t("body").is(".playback")&&(d.find(".selected").removeClass("selected").end().find(`[href$="${location.pathname.split("/").pop()}"]`).addClass("selected").end().prev().contents()[0].textContent=`Playback - ${d.find(".selected").text()} `)}async function v(){const d=location.pathname.split("/playback").pop(),e=await Promise.all(Object.entries(h).filter(([,{type:r}])=>!d||d.includes(r)).sort((r,i)=>new Date(i[1].paused_at)-new Date(r[1].paused_at)).map(async([r,i])=>{const[c,_]=await Promise.all([g[i.movie?"movies":"shows"].summary({id:i[i.movie?"movie":"show"].ids.trakt,extended:"full,images"}),i.episode?g.episodes.summary({id:i.show.ids.trakt,season:i.episode.season,episode:i.episode.number,extended:"full,images"}):null]);return u(r,i,c,_)}));if(t(":is(#progress-wrapper, #playback-progress-wrapper)").attr("id","playback-progress-wrapper").children().html('<div class="row"></div>'),t("body > .tooltip").tooltip("destroy"),e.length){if(t("#playback-progress-wrapper .row").addClass("posters").append(e),unsafeWindow.isProgress=!1,unsafeWindow.addOverlays(),unsafeWindow.posterGridTooltips(),unsafeWindow.formatDates(),unsafeWindow.hideUnreleasedRatings(),unsafeWindow.lazyLoadImages(),!d){const r=`Remove all (${e.length}) playback progress items?
This will take about ${e.length*1}s and cannot be undone!`,i=`Renew all (${e.length}) playback progress items?
This will take about ${e.length*2}s and cannot be undone!

Playback progress states are automatically removed by Trakt after 6 months. Renewing them postpones the auto-removal by first removing and then setting the playback progress states again, while preserving the current order. Due to trakt api changes playback progress items with a progress of >= 80% cannot be renewed and will be excluded.`;[["removeAll","Remove All",r,y],["renewAll","Renew All",i,m]].forEach(([c,_,S,T])=>{o[c]??=GM_registerMenuCommand(`PPM: ${_}`,()=>confirm(S)&&T())})}}else t("#playback-progress-wrapper .row").html('<div class="col-md-12"><br><div class="alert alert-no-data">Nothing to see here. Move along, move along.</div></div>')}function u(d,e,r,i){const c=i?.first_aired??r.first_aired??r.released+"T00:00:00Z",_=Math.floor((i??r).rating*10),S=(i??r).runtime,T=e.movie?d:`/shows/${e.show.ids.slug}/seasons/${e.episode.season}/episodes/${e.episode.number}`,E=e.movie?`${e.movie.title} (${e.movie.year})`:`${e.show.title}&lt;br&gt;${e.episode.season}x${String(e.episode.number).padStart(2,"0")} &quot;${e.episode.title}&quot;`,G=e.episode?`&lt;span class='main-title-sxe'&gt;${e.episode.season}x${String(e.episode.number).padStart(2,"0")}&lt;/span&gt; &lt;span class='main-title' data-spoiler-episode-id='${e.episode.ids.trakt}' data-spoiler-show-id='${e.show.ids.trakt}'&gt;${e.episode.title}&lt;/span&gt;`:null,M=i?i.episode_type.replace("_","-"):null,P=i&&i.episode_type!=="standard"?i.episode_type.replace("_"," ").toUpperCase():null;return t(`<div class="grid-item col-xs-6 col-md-2 col-sm-3" data-${e.type}-id="${e[e.type].ids.trakt}" data-runtime="${S}" data-total-runtime="${S}" data-type="${e.type}" data-url="${d}" itemscope="" itemtype="http://schema.org/${e.movie?"Movie":"TVEpisode"}" data-paused-at="${e.paused_at}" data-progress="${e.progress}" data-percentage="${_}" data-released="${c}" data-title="${E}" data-votes="${i?.votes??r.votes}"`+(e.episode?` data-episode-number="${e.episode.number}" ${e.episode.number===1?`data-episode-type-class="${M}" data-episode-type-label="${P}" `:""}data-season-id="" data-season-number="${e.episode.season}" data-show-id="${e.show.ids.trakt}" itemprop="episode"`:"")+`><meta content="https://trakt.tv${T}" itemprop="url"><a href="${T}"><div class="poster" title="${E}"><img class="base" src="/assets/placeholders/thumb/poster-7d5f5ef772b207dc5e74b5d7b0f1b5be444ea217fe09dbbe5995ffec2fefcd98.png"><img class="real" data-original="https://${r.images.poster[0]}" src="/assets/placeholders/thumb/poster-7d5f5ef772b207dc5e74b5d7b0f1b5be444ea217fe09dbbe5995ffec2fefcd98.png"><div class="loading"><div class="icon"><div class="fa fa-refresh fa-spin"></div></div></div></div></a><div class="quick-icons smaller"><div class="actions"><a class="watch" data-${e.type}-id="${e[e.type].ids.trakt}" data-fanart="https://${r.images.fanart[0]}" data-first-aired="${c}" data-full-title="${E.split("&lt;br&gt;").join("  ")}" data-logo="https://${r.images.logo[0]}" data-runtime="${S}" data-top-title="${e[e.type].title+(e.movie?` (${e.movie.year})`:"")}" data-total-runtime="${S}" data-type="${e.type}" data-url="${d}"`+(e.episode?` data-episode-number="${e.episode.number}" data-episode-title="${G}" ${e.episode.number===1?`data-episode-type-class="${M}" data-episode-type-label="${P}" `:""}data-screenshot="${i.images.screenshot[0]}" data-season-id="" data-season-number="${e.episode.season}" data-show-id="${e.show.ids.trakt}"`:"")+`><div class="base"></div><div class="icon trakt-icon-check-thick"></div></a><a class="collect" data-original-title="" title=""><div class="base"></div><div class="icon trakt-icon-collection-thick"></div></a><a class="list" data-original-title="" title=""><div class="base"></div><div class="icon trakt-icon-list-thick"></div></a><a class="watch-now" data-source-counts="{'us':1}" data-source-slugs="{}" data-target="#watch-now-modal" data-toggle="modal" data-url="${d}" data-original-title="" title=""><div class="base"></div><div class="fa-solid fa-play"></div></a></div><div class="metadata"><div class="percentage" data-earliest-release-date="${c}" data-original-title="" title=""><div class="fa fa-heart rating-${Math.floor((i??r).rating)}"></div>${_}%</div></div></div><div class="titles"><a class="titles-link" href="${T.split("/episodes/")[0]}"><h3 class="ellipsify">`+(e.episode?`<span class='main-title-sxe'>${e.episode.season}x${String(e.episode.number).padStart(2,"0")}</span> <span class='main-title' data-spoiler-episode-id='${e.episode.ids.trakt}' data-spoiler-show-id='${e.show.ids.trakt}'>${e.episode.title}</span>`:e.movie.title)+`</h3></a><a class="titles-link" href="${T.split("/seasons/")[0]}"><h4 class="ellipsify">${p(e,S)}</h4></a><div class="titles-link"><h4 class="ellipsify"><span class="format-date relative-date-swap" data-date="${e.paused_at}">${e.paused_at}</span></h4></div></div>`+(e.episode?`<span class="hidden" itemprop="partOfSeries" itemscope="" itemtype="http://schema.org/TVSeries"><meta content="${e.show.title}" itemprop="name"><meta content="https://trakt.tv/shows/${e.show.ids.slug}" itemprop="sameAs"></span><meta content="${e.episode.number}" itemprop="episodeNumber">`:"")+`<meta content="${e[e.type].title+(e.movie?` (${e.movie.year})`:"")}" itemprop="name"><meta content="${c}" itemprop="datePublished"></div>`)}function f(){GM_addStyle(`
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
  `)}})("Trakt.tv | Playback Progress Manager"),gmStorage.txw82860&&(async C=>{"use strict";const t=document.cookie.match(/(?:^|; )trakt_userslug=([^;]*)/)?.[1],a={historySorting:(o,[l=1,...n]=[])=>({hrefPrefix:o,entries:(s=>s.with(l,{...s.at(l),anchor:!0}))([{text:"SORT BY"},{text:"Watched Date",href:"/added"},{text:"Plays",href:"/plays"},{text:"Time Spent",href:"/time"},{text:"Title",href:"/title"},{text:"Release Date",href:"/released"},{text:"Runtime",href:"/runtime"},{text:"Popularity",href:"/popularity"},{text:"Percentage",href:"/percentage"},{text:"Votes",href:"/votes"}])}),progressSorting:(o,[l=1,...n]=[])=>({hrefPrefix:o,entries:(s=>s.with(l,{...s.at(l),anchor:!0}))([{text:"SORT BY"},{text:"Watched Date",href:"/added"},{text:"Completion %",href:"/completed"},{text:"Episodes Left",href:"/episodes"},{text:"Time Left",href:"/time"},{text:"Plays",href:"/plays"},{text:"Release Date",href:"/released"},{text:"Premiere Date",href:"/premiered"},{text:"Title",href:"/title"},{text:"Popularity",href:"/popularity"},{text:"Episode Runtime",href:"/runtime"},{text:"Total Runtime",href:"/total-runtime"},{text:"Random",href:"/random"}])}),librarySorting:(o,[l=1,...n]=[])=>({hrefPrefix:o,entries:(s=>s.with(l,{...s.at(l),anchor:!0}))([{text:"SORT BY"},{text:"Added Date",href:"/added"},{text:"Title",href:"/title"},{text:"Release Date",href:"/released"},.../\/shows/.test(o)?[{text:"Episode Count",href:"/episodes"}]:[],.../\/episodes/.test(o)?[]:[{text:"Runtime",href:"/runtime"},{text:"Popularity",href:"/popularity"}],{text:"Percentage",href:"/percentage"},{text:"Votes",href:"/votes"}])}),ratingSelection:(o,[l=1,...n]=[])=>({hrefPrefix:o,entries:(s=>s.with(l,{...s.at(l),anchor:!0}))([{text:"RATING"},{text:"All Ratings",href:"/all",submenu:a.ratingsSorting(o+"/all",n)},{text:"10 - Totally Ninja!",href:"/10",submenu:a.ratingsSorting(o+"/10",n)},{text:"9 - Superb",href:"/9",submenu:a.ratingsSorting(o+"/9",n)},{text:"8 - Great",href:"/8",submenu:a.ratingsSorting(o+"/8",n)},{text:"7 - Good",href:"/7",submenu:a.ratingsSorting(o+"/7",n)},{text:"6 - Fair",href:"/6",submenu:a.ratingsSorting(o+"/6",n)},{text:"5 - Meh",href:"/5",submenu:a.ratingsSorting(o+"/5",n)},{text:"4 - Poor",href:"/4",submenu:a.ratingsSorting(o+"/4",n)},{text:"3 - Bad",href:"/3",submenu:a.ratingsSorting(o+"/3",n)},{text:"2 - Terrible",href:"/2",submenu:a.ratingsSorting(o+"/2",n)},{text:"1 - Weak Sauce :(",href:"/1",submenu:a.ratingsSorting(o+"/1",n)}])}),ratingsSorting:(o,[l=1,...n]=[])=>({hrefPrefix:o,entries:(s=>s.with(l,{...s.at(l),anchor:!0}))([{text:"SORT BY"},{text:"Rated Date",href:"/added"},{text:"Rating",href:"/rating"},.../\/ratings\/all/.test(o)?[]:[{text:"Title",href:"/title"},{text:"Release Date",href:"/released"},.../\/(movies|shows)/.test(o)?[{text:"Runtime",href:"/runtime"},{text:"Popularity",href:"/popularity"}]:[],{text:"Percentage",href:"/percentage"},{text:"Votes",href:"/votes"}]])}),listsViewSorting:(o,[l=1,...n]=[])=>({hrefPrefix:o,entries:(s=>s.with(l,{...s.at(l),anchor:!0}))([{text:"SORT BY"},.../\/lists\?/.test(o)?[{text:"Rank",href:"rank"}]:[],.../\/liked/.test(o)?[{text:"Like Date",href:"liked"}]:[],{text:"Updated Date",href:"updated"},{text:"Title",href:"title"},{text:"Likes",href:"likes"},{text:"Comments",href:"comments"},{text:"Items",href:"items"},{text:"Random",href:"random"}])}),listSorting:(o,[l=1,...n]=[])=>({hrefPrefix:o,entries:(s=>s.with(l,{...s.at(l),anchor:!0}))([{text:"SORT BY"},{text:"Rank",href:"rank"},{text:"Added Date",href:"added"},{text:"Title",href:"title"},{text:"Release Date",href:"released"},{text:"Runtime",href:"runtime"},{text:"Popularity",href:"popularity"},{text:"Random",href:"random"},{},{text:"Trakt Percentage",href:"percentage"},{text:"Trakt Votes",href:"votes"},.../\/watchlist\?sort=/.test(o)&&t?[{text:"Rotten Tomatoes <em>(mdb)</em>",href:`https://mdblist.com/watchlist/${t}?sort=rtomatoes&sortorder=asc`,useHrefPrefix:!1},{text:"Metacritic <em>(mdb)</em>",href:`https://mdblist.com/watchlist/${t}?sort=metacritic&sortorder=asc`,useHrefPrefix:!1},{text:"MyAnimeList <em>(mdb)</em>",href:`https://mdblist.com/watchlist/${t}?sort=myanimelist&sortorder=asc`,useHrefPrefix:!1}]:[],{},{text:"My Rating",href:"my_rating"},{text:"Watched Date",href:"watched"},{text:"Collected Date",href:"collected"}])}),commentType:(o,[l=1,...n]=[])=>({hrefPrefix:o,entries:(s=>s.with(l,{...s.at(l),anchor:!0}))([{text:"TYPE"},{text:"All Types",href:"/all",submenu:a.commentSorting(o+"/all",n)},{text:"Movies",href:"/movies",submenu:a.commentSorting(o+"/movies",n)},{text:"Shows",href:"/shows",submenu:a.commentSorting(o+"/shows",n)},{text:"Seasons",href:"/seasons",submenu:a.commentSorting(o+"/seasons",n)},{text:"Episodes",href:"/episodes",submenu:a.commentSorting(o+"/episodes",n)},{text:"Lists",href:"/lists",submenu:a.commentSorting(o+"/lists",n)}])}),commentSorting:(o,[l=1,...n]=[])=>({hrefPrefix:o,entries:(s=>s.with(l,{...s.at(l),anchor:!0}))([{text:"SORT BY"},{text:"Added Date",href:"/added"},{text:"Reactions <em>(30 Days)</em>",href:"/likes_30"},{text:"Reactions <em>(All Time)</em>",href:"/likes"},{text:"Replies <em>(30 Days)</em>",href:"/replies_30"},{text:"Replies <em>(All Time)</em>",href:"/replies"},{text:"Plays",href:"/plays"},{text:"Rating",href:"/rating"}])}),hiddenItemsSorting:(o,[l=1,...n]=[])=>({hrefPrefix:o,entries:(s=>s.with(l,{...s.at(l),anchor:!0}))([{text:"SORT BY"},{text:"Title",href:"/title"},{text:"Date",href:"/data"}])}),showsMoviesCatTimePeriod:(o,[l=-1,...n]=[])=>({hrefPrefix:o,entries:(s=>s.with(l,{...s.at(l),anchor:!0}))([{text:"PERIOD"},{text:"Day",href:"/daily"},{text:"Week",href:"/weekly"},{text:"Month",href:"/monthly"},.../\/streaming/.test(o)?[]:[{text:"All Time",href:"/all"}]])})},g={'.btn-profile a[href$="/history"]':{hrefPrefix:"/users/me/history",entries:[{text:"TYPE"},{text:"All Types",href:"/all",anchor:!0},{text:"Movies",href:"/movies",submenu:a.historySorting("/users/me/history/movies")},{text:"Shows",href:"/shows",submenu:a.historySorting("/users/me/history/shows")},{text:"Episodes",href:"/episodes",submenu:a.historySorting("/users/me/history/episodes")}]},'.btn-profile a[href$="/library"]':{hrefPrefix:"/users/me/library",entries:[{text:"TYPE"},{text:"All Types",href:"/all",anchor:!0},{text:"Movies",href:"/movies",submenu:a.librarySorting("/users/me/library/movies")},{text:"Shows",href:"/shows",submenu:a.librarySorting("/users/me/library/shows")},{text:"Episodes",href:"/episodes",submenu:a.librarySorting("/users/me/library/episodes")}]},'.btn-profile a[href$="/progress"]':{hrefPrefix:"/users/me/progress",entries:[{text:"SHOWS"},{text:"Watched",href:"/watched",anchor:!0,submenu:a.progressSorting("/users/me/progress/watched")},{text:"Dropped",href:"/dropped",submenu:a.progressSorting("/users/me/progress/dropped")},{text:"Library",href:"/library",submenu:a.progressSorting("/users/me/progress/library")},{},{text:"PLAYBACK"},{text:"All Types",href:"/playback"},{text:"Movies",href:"/playback/movies"},{text:"Episodes",href:"/playback/episodes"}]},'.btn-profile a[href$="/ratings"]':{hrefPrefix:"/users/me/ratings",entries:[{text:"TYPE"},{text:"All Types",href:"/all",anchor:!0,submenu:a.ratingSelection("/users/me/ratings/all")},{text:"Movies",href:"/movies",submenu:a.ratingSelection("/users/me/ratings/movies",[,4])},{text:"Shows",href:"/shows",submenu:a.ratingSelection("/users/me/ratings/shows",[,4])},{text:"Seasons",href:"/seasons",submenu:a.ratingSelection("/users/me/ratings/seasons",[,-1])},{text:"Episodes",href:"/episodes",submenu:a.ratingSelection("/users/me/ratings/episodes",[,-1])}]},'.btn-profile a[href$="/lists"]':{hrefPrefix:"/users/me/lists",entries:[{text:"Watchlist",href:"/users/me/watchlist",useHrefPrefix:!1,submenu:{hrefPrefix:"/users/me/watchlist?display=",entries:[{text:"TYPE"},{text:"All Types",href:"/users/me/watchlist",useHrefPrefix:!1,anchor:!0,submenu:a.listSorting("/users/me/watchlist?sort=",[3])},{text:"Movies",href:"movie",submenu:a.listSorting("/users/me/watchlist?display=movie&sort=",[3])},{text:"Shows",href:"show",submenu:a.listSorting("/users/me/watchlist?display=show&sort=",[3])},{text:"Seasons",href:"season",submenu:a.listSorting("/users/me/watchlist?display=season&sort=",[3])},{text:"Episodes",href:"episode",submenu:a.listSorting("/users/me/watchlist?display=episode&sort=",[3])}]}},{text:"Favorites",href:"/users/me/favorites",useHrefPrefix:!1,submenu:{hrefPrefix:"/users/me/favorites?display=",entries:[{text:"TYPE"},{text:"All Types",href:"/users/me/favorites",useHrefPrefix:!1,anchor:!0,submenu:a.listSorting("/users/me/favorites?sort=",[3])},{text:"Movies",href:"movie",submenu:a.listSorting("/users/me/favorites?display=movie&sort=",[3])},{text:"Shows",href:"show",submenu:a.listSorting("/users/me/favorites?display=show&sort=",[3])}]}},{},{text:"YOUR LISTS"},{text:"Personal Lists",href:"",submenu:a.listsViewSorting("/users/me/lists?sort=")},{text:"Collaborations",href:"/collaborations",submenu:a.listsViewSorting("/users/me/lists/collaborations?sort=")},{},{text:"LIKED LISTS"},{text:"Personal Lists",href:"/liked",submenu:a.listsViewSorting("/users/me/lists/liked?sort=")},{text:"Official Lists",href:"/liked/official",submenu:a.listsViewSorting("/users/me/lists/liked/official?sort=")}]},'.btn-profile a[href$="/comments"]':{hrefPrefix:"/users/me/comments",entries:[{text:"YOUR COMMENTS"},{text:"All Comments",href:"/all",anchor:!0,submenu:a.commentType("/users/me/comments/all")},{text:"Reviews",href:"/reviews",submenu:a.commentType("/users/me/comments/reviews")},{text:"Shouts",href:"/shouts",submenu:a.commentType("/users/me/comments/shouts")},{text:"Replies",href:"/replies",submenu:a.commentType("/users/me/comments/replies")},{},{text:"REACTIONS"},{text:"All Comments",href:"/liked/all",submenu:a.commentType("/users/me/comments/liked/all",[-1,-1])},{text:"Reviews",href:"/liked/reviews",submenu:a.commentType("/users/me/comments/liked/reviews",[-1,-1])},{text:"Shouts",href:"/liked/shouts",submenu:a.commentType("/users/me/comments/liked/shouts",[-1,-1])},{text:"Replies",href:"/liked/replies",submenu:a.commentType("/users/me/comments/liked/replies",[-1,-1])}]},'.btn-profile a[href$="/notes"]':{hrefPrefix:"/users/me/notes",entries:[{text:"All Types",href:"/all"},{},{text:"MEDIA ITEMS"},{text:"Movies",href:"/movies"},{text:"Shows",href:"/shows"},{text:"Seasons",href:"/seasons"},{text:"Episodes",href:"/episodes"},{text:"People",href:"/people"},{},{text:"YOUR ACTIVITIES"},{text:"History",href:"/history"},{text:"Library",href:"/collection"},{text:"Ratings",href:"/ratings"}]},'.btn-profile a[href$="/network"]':{hrefPrefix:"/users/me/network",entries:[{text:"Following",href:"/following/added"},{text:"Following <em>(Pending)</em>",href:"/following_pending/added"},{text:"Followers",href:"/followers/added"}]},'.btn-profile a[href="/widgets"]':{hrefPrefix:"/widgets",entries:[{text:"Watched",href:"/watched"},{text:"Library",href:"/library"},{text:"Profile",href:"/profile"}]},'.btn-profile a:contains("Quick Actions")':{entries:[{text:'<span class="toggle-dark-mode">Toggle Dark Mode<span class="right fa-solid fa-moon"></span></span>',onclick:"toggleDarkMode(); return false;"},{text:"Clear Search History",onclick:"showLoading(); $.post(`/users/me/clear_search_history`).done(() => { toastr.success(`Your search history was cleared.`); cacheUserData(true); }).always(hideLoading); return false;"},{text:"Re-cache Progress Data",onclick:"showLoading(); $.post(`/users/me/reset_progress_cache`).done(() => { toastr.success(`Your progress cache will be updated in a few minutes.`); }).always(hideLoading); return false;"},{text:"Re-cache Browser Data",onclick:"window.reopenOverlays = [null]; window.afterLoadingBottomMessage = `Your browser data is reset!`; showLoading(`Please wait for the caching to fully complete.`); resetUserData(); return false;"}]},'.btn-profile a[href="/settings"]':{hrefPrefix:"/settings",entries:[{text:"Advanced",href:"/advanced"},{text:"Your API Apps",href:"/oauth/applications",useHrefPrefix:!1,submenu:{entries:[{text:'<span class="hidden-xs left fa fa-book"></span>API Docs',href:"/b/api-docs"},{text:'<span class="hidden-xs left fa fa-github"></span>Developer Forum',href:"/b/dev-forum"},{text:'<span class="hidden-xs left fa trakt-icon-trakt"></span>Branding',href:"/branding"},{text:'<span class="hidden-xs left fa fa-plus-circle"></span>New Application',href:"/oauth/applications/new"}]}},{text:"Connected Apps",href:"/oauth/authorized_applications",useHrefPrefix:!1,submenu:{entries:[{text:"Activate Device",href:"/activate"}]}},{text:"Reports",href:"/reports",submenu:{hrefPrefix:"/reports",entries:[{text:"STATUS"},{text:"All Reports",href:"/all",anchor:!0},{text:"Approved",href:"/approved"},{text:"Paused",href:"/paused"},{text:"Rejected",href:"/rejected"},{text:"Pending",href:"/pending"}]}},{text:"Hidden Items",href:"/hidden",submenu:{hrefPrefix:"/settings/hidden",entries:[{text:"Dropped Shows",href:"/dropped",submenu:a.hiddenItemsSorting("/settings/hidden/dropped")},{},{text:"Progress",href:"/watched",submenu:a.hiddenItemsSorting("/settings/hidden/watched")},{text:"Library",href:"/collected",submenu:a.hiddenItemsSorting("/settings/hidden/collected")},{text:"Calendar",href:"/calendars",submenu:a.hiddenItemsSorting("/settings/hidden/calendars")},{},{text:"Rewatching",href:"/rewatching",submenu:a.hiddenItemsSorting("/settings/hidden/rewatching")},{text:"Blocked Users",href:"/comments",submenu:a.hiddenItemsSorting("/settings/hidden/comments")}]}},{text:"Plex Sync",href:"/plex"},{text:"Streaming Sync",href:"/scrobblers"},{text:"Notifications",href:"/notifications"},{text:"Sharing",href:"/sharing"},{text:"Data",href:"/data"},{text:"General",href:"",anchor:!0,submenu:{hrefPrefix:"/settings",entries:[{text:"Change Password",href:"#password"},{text:"Appearance",href:"#appearance"},{text:"Search",href:"#search"},{text:"Progress",href:"#progress"},{text:"Profile",href:"#profile"},{text:"Year in Review",href:"#yir"},{text:"Calendars",href:"#calendars"},{text:"Dashboard",href:"#dashboard"},{text:"Spoilers",href:"#spoilers"},{text:"Watch Now",href:"#watchnow"},{text:"Rewatching",href:"#rewatching"},{text:"Global",href:"#global"},{text:"Date & Time",href:"#datetime"},{text:"Account",href:"#account",anchor:!0}]}}]},':is(.btn-mobile-links, .links-wrapper) a[href^="/shows"]':{hrefPrefix:"/shows",entries:[{text:"Trending",href:"/trending"},{text:"Recommendations",href:"/recommendations"},{text:"Streaming Charts",href:"/streaming",submenu:a.showsMoviesCatTimePeriod("/shows/streaming",[1])},{text:"Anticipated",href:"/anticipated"},{text:"Popular",href:"/popular"},{text:"Favorited",href:"/favorited",submenu:a.showsMoviesCatTimePeriod("/shows/favorited")},{text:"Watched",href:"/watched",submenu:a.showsMoviesCatTimePeriod("/shows/watched")},{text:"Libraries",href:"/library",submenu:a.showsMoviesCatTimePeriod("/shows/library")}]},':is(.btn-mobile-links, .links-wrapper) a[href^="/movies"]':{hrefPrefix:"/movies",entries:[{text:"Trending",href:"/trending"},{text:"Recommendations",href:"/recommendations"},{text:"Streaming Charts",href:"/streaming",submenu:a.showsMoviesCatTimePeriod("/movies/streaming",[1])},{text:"Anticipated",href:"/anticipated"},{text:"Popular",href:"/popular"},{text:"Favorited",href:"/favorited",submenu:a.showsMoviesCatTimePeriod("/movies/favorited")},{text:"Watched",href:"/watched",submenu:a.showsMoviesCatTimePeriod("/movies/watched")},{text:"Libraries",href:"/library",submenu:a.showsMoviesCatTimePeriod("/movies/library")},{text:"Box Office",href:"/boxoffice"}]},':is(.btn-mobile-links, .links-wrapper) a[href="/calendars"]':{hrefPrefix:"/calendars",entries:[{text:"Personal",href:"/my/shows-movies",submenu:{hrefPrefix:"/calendars/my",entries:[{text:"Shows & Movies",href:"/shows-movies"},{text:"Shows",href:"/shows"},{text:"Premieres",href:"/premieres"},{text:"New Shows",href:"/new-shows"},{text:"Finales",href:"/finales"},{text:"Movies",href:"/movies"},{text:"Streaming",href:"/streaming"},{text:"DVD & Blu-ray",href:"/dvd"}]}},{text:"General",href:"/shows",submenu:{hrefPrefix:"/calendars",entries:[{text:"Shows",href:"/shows"},{text:"Premieres",href:"/premieres"},{text:"New Shows",href:"/new-shows"},{text:"Finales",href:"/finales"},{text:"Movies",href:"/movies"},{text:"Streaming",href:"/streaming"},{text:"DVD & Blu-ray",href:"/dvd"}]}}]},':is(.btn-mobile-links, .links-wrapper) a[href="/discover"]':{hrefPrefix:"/discover",entries:[{text:"Trends",href:"#trends"},{text:"Featured Lists",href:"#lists"},{text:"Summer TV Shows",href:"#featured-shows"},{text:"Comments",href:"#comments"}]},':is(.btn-mobile-links, .btn-tablet-links, .links-wrapper) a[href="/apps"]':{hrefPrefix:"/apps",entries:[{text:"Android <em>(official)</em>",href:"/a/trakt-android",useHrefPrefix:!1,anchor:!0},{text:"iOS <em>(official)</em>",href:"/a/trakt-ios",useHrefPrefix:!1},{text:"Android & iOS <em>(3rd Party)</em>",href:"#community-apps"},{text:"Android TV <em>(official)</em>",href:"/a/trakt-android-tv",useHrefPrefix:!1},{text:"tvOS <em>(official)</em>",href:"/a/trakt-tvos",useHrefPrefix:!1},{},{text:"INTEGRATIONS"},{text:"Media Centers",href:"#watching-wrapper"},{text:"Plex Sync",href:"#plex-scrobblers-wrapper"},{text:"Streaming Sync",href:"#streaming-scrobbler-wrapper"}]},':is(.btn-mobile-links, .btn-tablet-links, .links-wrapper) a[href="https://forums.trakt.tv"]':{hrefPrefix:"https://forums.trakt.tv",entries:[{text:"Latest",href:"/latest"},{text:"Top",href:"/top",submenu:{hrefPrefix:"https://forums.trakt.tv/top?period=",entries:[{text:"PERIOD"},{text:"Day",href:"daily",anchor:!0},{text:"Week",href:"weekly"},{text:"Month",href:"monthly"},{text:"Quarter",href:"quarterly"},{text:"Year",href:"yearly"},{text:"All Time",href:"all"}]}},{text:"Categories",href:"/categories",submenu:{hrefPrefix:"https://forums.trakt.tv",entries:[{text:"Announcements",href:"/c/announcements"},{text:"Discussions",href:"/c/discussions",submenu:{hrefPrefix:"https://forums.trakt.tv/c/discussions",entries:[{text:"General",href:"/general"},{text:"TV Shows",href:"/tv-shows"},{text:"Movies",href:"/movies"},{text:"Off Topic",href:"/off-topic"}]}},{text:"Trakt",href:"/c/trakt",submenu:{hrefPrefix:"https://forums.trakt.tv/c/trakt",entries:[{text:"Product Updates",href:"/product-updates"},{text:"Questions & Help",href:"/questions"},{text:"Feature Requests",href:"/feature-requests"},{text:"Lite",href:"/trakt-lite",anchor:!0},{text:"Release Notes",href:"/release-notes"},{text:"VIP Beta Features",href:"/vip-beta-features"},{text:"How To",href:"/how-to"}]}},{text:"3rd Party",href:"/c/3rd-party",submenu:{hrefPrefix:"https://forums.trakt.tv/c/3rd-party",entries:[{text:"Media Centers",href:"/media-centers"},{text:"Mobile Apps",href:"/mobile-apps"},{text:"Other",href:"/other",anchor:!0}]}},{text:"Support",href:"/c/support",submenu:{hrefPrefix:"https://forums.trakt.tv/c/support",entries:[{text:"Tutorials",href:"/tutorials"},{text:"VIP Features",href:"/vip-features"},{text:"Features",href:"/support-features"},{text:"FAQ",href:"/faq",anchor:!0}]}}]}},{},{text:"EXTERNAL"},{text:'<span class="left fa fa-reddit-alien"></span>r/trakt',href:"https://reddit.com/r/trakt",useHrefPrefix:!1,submenu:{hrefPrefix:"https://reddit.com/r/trakt",entries:[{text:"SORT BY"},{text:"Best",href:"/best"},{text:"Hot",href:"/hot"},{text:"New",href:"/new"},{text:"Top",href:"/top",submenu:{hrefPrefix:"https://reddit.com/r/trakt/top?t=",entries:[{text:"PERIOD"},{text:"Hour",href:"hour"},{text:"Day",href:"day"},{text:"Week",href:"week",anchor:!0},{text:"Month",href:"month"},{text:"Year",href:"year"},{text:"All Time",href:"all"}]}},{text:"Rising",href:"/rising",anchor:!0}]}},{text:'<span class="left fa-brands fa-twitter"></span>Twitter',href:"https://twitter.com/trakt",useHrefPrefix:!1},{text:'<span class="left fa-brands fa-mastodon"></span>Mastodon',href:"https://ruby.social/@trakt",useHrefPrefix:!1}]}},x=({hrefPrefix:o,entries:l})=>l.reduce((n,{text:s,href:w,useHrefPrefix:y=!0,onclick:m,submenu:$},b)=>n+(s!==void 0&&(w!==void 0||m!==void 0)?`<li${$?' class="with-ul-menu"':""}><a href="${y&&o?o:""}${w??"#"}"${m?` onclick="${m}"`:""}>${s}</a>${$?x($):""}</li>`:s!==void 0?`<li class="dropdown-header">${s}</li>`:'<li class="divider"></li>'),`<ul class="menu" style="top: calc(-10px - ${Math.max(l.findIndex(n=>n.anchor),0)*100}%)">`)+"</ul>",p=Object.entries(g).map(([o,l])=>[o,x(l)]);h(),window.addEventListener("turbo:load",()=>{const o=unsafeWindow.jQuery;if(!o)return;const l=o("#top-nav");l.find(".links-wrapper > a").wrap('<div class="with-solid-bg"></div>'),l.find('.links-wrapper a[href="/apps"]').next().remove().end().parent().removeClass("with-top-arrow").addClass("with-solid-bg"),l.find('.btn-mobile-links li:has(> a[href="/apps"])').next().remove().end().unwrap(),l.find("li.dark-knight").removeClass("dark-knight").html('<a href="#" onclick="return false;">Quick Actions</a>').before('<li class="divider"></li>').next().remove(),l.find(".btn-profile li:has(> a.yir-loader)").wrapAll('<li class="with-ul-menu"><ul class="menu" style="top: -10px;"></ul></li>').parent().before('<a href="#" onclick="return false;">Stats</a>'),l.find('a[href="https://forums.trakt.tv"]').removeAttr("target"),p.forEach(([s,w])=>l.find(s).closest("li, div").addClass("with-ul-menu").append(w));const n=l.find(":is(.user-wrapper, .links-wrapper) .with-ul-menu");n.off("click mouseover mouseout").on("touchend",function(s){s.stopPropagation(),o(s.originalEvent.target).closest(o(this).children().first()).length&&(o(this).hasClass("selected")?o(this).removeClass("selected"):(s.preventDefault(),n.not(o(this).parents()).removeClass("selected"),o(this).addClass("selected")))}),o("body").on("touchend",()=>n.removeClass("selected"))});function h(){GM_addStyle(`
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
  `)}})("Trakt.tv | Nested Header Navigation Menus"),gmStorage.wkt34fcz&&(async C=>{"use strict";const t={encodeRfc3986:e=>encodeURIComponent(e).replace(/[!'()*]/g,r=>"%"+r.charCodeAt(0).toString(16).toUpperCase()),getDefaultTorrentQuery:e=>`${t.encodeRfc3986(e.title)}${e.type==="movies"?` ${e.year}`:""}${e.season!==void 0?` s${String(e.season).padStart(2,"0")}${e.episode?`e${String(e.episode).padStart(2,"0")}`:""}`:""}`,getDefaultDirectStreamingPath:e=>`/${e.type==="movies"?`movie/${e.ids.tmdb}`:`tv/${e.ids.tmdb}/${e.season!==void 0?e.season:"1"}/${e.episode?e.episode:"1"}`}`,getWnInnerHtml:({btnStyle:e="",img:r,imgStyle:i="",text:c,textStyle:_=""})=>`<div class="icon btn-custom" style="${e}">`+(r?`<img class="lazy" src="${GM_getResourceURL(r)}" style="${c?"max-width: 35%; ":""}${i}">`:"")+(c?`<div class="text" style="${r?"max-width: 65%; ":""}${_}">${c}</div>`:"")+"</div>",getWnCategoryHtml:e=>`[${a[e]}]`,getDdgFaviconHtml:(e,r="")=>`<img src="https://icons.duckduckgo.com/ip3/${e}.ico" style="${r}">`,getFaBrandsHtml:(e,r="")=>`<i class="fa-brands fa-${e}" style="${r}"></i>`,isAdultFemale:e=>/female|non_binary/.test(e.gender)&&e.birthday&&Date.now()-new Date(e.birthday)>5680368e5,fetchAnimeId:(e,r)=>`fetch('https://arm.haglund.dev/api/v2/themoviedb?id=${e.ids.tmdb}').then((r) => r.json()).then((arr) => arr.map((e) => (e.levDist = userscriptLevDist('${e.ids.slug}${e.season>1?`-${e.season_title.toLowerCase().replaceAll(/[ '"]/g,"-")}`:""}', e['anime-planet'] ?? ''), e)).sort((a, b) => a.levDist - b.levDist).find((e) => e['${r}'])?.['${r}'])`,fetchWikidataClaim:(e,r)=>`fetch('https://query.wikidata.org/sparql?format=json&query=${t.encodeRfc3986(`SELECT ?value WHERE { ?item wdt:${e.type==="movies"?"P4947":"P4983"} "${e.ids.tmdb}" . ?item wdt:P31/wdt:P279* wd:${e.type==="movies"?"Q11424":"Q5398426"} . ?item wdt:${r} ?value . } LIMIT 1`)}').then((r) => r.json()).then((r) => r.results.bindings[0]?.value?.value)`,hideNativeExternalLink:e=>`#external-link-${e} { display: none !important; }`,getDdgTopResultRedirectUrl:(e,r)=>`https://duckduckgo.com/?q=%5Csite%3A${e} ${t.encodeRfc3986(r)}`},a={animeAggregator:"Anime Aggregator",animeStreaming:"Anime Streaming",debrid:"Debrid",streaming:"Streaming",torrentAggregator:"Torrent Aggregator",torrentTracker:"Torrent Tracker",usenetIndexer:"Usenet Indexer"},g=[{buildHref:e=>`https://ext.to/browse/?q=${t.getDefaultTorrentQuery(e)} ${t.encodeRfc3986(o.torrentResolution)} 265${/shows|seasons/.test(e.type)?"&sort=size&order=desc":"&sort=seeds&order=desc"}&with_adult=1`,innerHtml:t.getWnInnerHtml({btnStyle:"background: #242730;",text:"EXT",textStyle:"background-image: linear-gradient(90deg, #3990f6 48.2%, #2c67a6 48.2% 66.2%, #3990f6 66.2%); background-clip: text; color: transparent; font-size: 50cqi; font-weight: 850; letter-spacing: -0.5px; padding-right: 3%;"}),tooltipHtml:t.getWnCategoryHtml("torrentAggregator")},{buildHref:e=>`https://web.stremio.com/#/detail/${e.type==="movies"?`movie/${e.ids.imdb}/${e.ids.imdb}`:`series/${e.ids.imdb}${e.type==="seasons"?`?season=${e.season}`:e.type==="episodes"?`/${e.ids.imdb}:${e.season}:${e.episode}`:""}`}`,innerHtml:t.getWnInnerHtml({btnStyle:"background: #19163a;",img:"stremio",text:"Stremio"}),tooltipHtml:t.getWnCategoryHtml("debrid")},{buildHref:e=>`https://knaben.org/search/${t.getDefaultTorrentQuery(e)} ${t.encodeRfc3986(o.torrentResolution)} (265|av1)/${e.type==="movies"?"3000000":e.genres.includes("anime")?"6000000":"2000000"}/1/${/shows|seasons/.test(e.type)?"bytes":"seeders"}`,innerHtml:`<div class="icon btn-custom" style="background: #323537; flex-direction: column;">${GM_getResourceText("knaben").replace("<svg",'<svg style="max-height: 79%;"')}<div class="text" style="font-family: system-ui; font-size: 10cqi; letter-spacing: 0.3px;">KNABEN DATABASE</div></div>`,tooltipHtml:t.getWnCategoryHtml("torrentAggregator")},{buildHref:e=>`${t.fetchAnimeId(e,"myanimelist")}.then((id) => id ?? userscriptGmXhrCustomLinks({ url: 'https://kuroiru.co/backend/search', method: 'POST', data: new URLSearchParams('q=${t.encodeRfc3986(e.title)}'), responseType: 'json' }).then((r) => r.response[0]?.id)).then((id) => 'https://kuroiru.co/anime/' + id + '/ep${e.episode??"1"}')`,innerHtml:t.getWnInnerHtml({btnStyle:"background: #191919;",img:"kuroiru"}),tooltipHtml:t.getWnCategoryHtml("animeAggregator"),includeIf:e=>e.genres.includes("anime")},{buildHref:e=>`${t.fetchAnimeId(e,"anilist")}.then((id) => 'https://anidap.se' + (id ? '/watch?ep=${e.episode??"1"}&type=dub&provider=&id=' + id : '/search?q=${t.encodeRfc3986(e.title)}'))`,innerHtml:t.getWnInnerHtml({btnStyle:"background: #1f2728;",img:"anidap",imgStyle:"transform: scale(2.2);"}),tooltipHtml:t.getWnCategoryHtml("animeStreaming"),includeIf:e=>e.genres.includes("anime")},{buildHref:e=>`${t.fetchAnimeId(e,"anilist")}.then((id) => 'https://www.miruro.to' + (id ? '/watch/' + id + '/episode-${e.episode??"1"}' : '/search?query=${t.encodeRfc3986(e.title)}'))`,innerHtml:t.getWnInnerHtml({btnStyle:"background: #0e0e0e;",img:"miruro"}),tooltipHtml:t.getWnCategoryHtml("animeStreaming"),includeIf:e=>e.genres.includes("anime")},{buildHref:e=>`https://www.fmovies.gd/watch${t.getDefaultDirectStreamingPath(e)}`,innerHtml:t.getWnInnerHtml({btnStyle:"background: #18252b;",text:"FMOVIES+",textStyle:"background-image: linear-gradient(to right, rgb(13 202 240), rgb(13 202 240 / 35%)); background-clip: text; color: transparent; font-family: system-ui; font-size: 15cqi; font-weight: 800; letter-spacing: 0.3px; border: 2px solid rgb(13 202 240 / 25%); border-radius: 5px; padding: 5%;"}),tooltipHtml:t.getWnCategoryHtml("streaming")},{buildHref:e=>`https://www.cineby.gd${t.getDefaultDirectStreamingPath(e)}?play=true`,innerHtml:t.getWnInnerHtml({btnStyle:"background: #440000;",img:"cineby",text:"Cineby",textStyle:"font-family: system-ui; font-size: 17cqi;"}),tooltipHtml:t.getWnCategoryHtml("streaming")},{buildHref:e=>`https://hexa.su/watch${t.getDefaultDirectStreamingPath(e)}`,innerHtml:t.getWnInnerHtml({btnStyle:"background: #111317;",img:"hexa"}),tooltipHtml:t.getWnCategoryHtml("streaming")},{buildHref:e=>`https://scenenzbs.com/search/${t.getDefaultTorrentQuery(e)} ${t.encodeRfc3986(o.torrentResolution)} (265|av1)`,innerHtml:t.getWnInnerHtml({btnStyle:"background: #212529;",img:"scenenzbs",imgStyle:"transform: scale(1.8) translateY(-1px);"}),tooltipHtml:t.getWnCategoryHtml("usenetIndexer")},{buildHref:e=>`https://x.debridmediamanager.com/${e.ids.imdb}`,innerHtml:t.getWnInnerHtml({btnStyle:"background: #2e3e51;",img:"dmm",imgStyle:"transform: scale(1.7);",text:"Debrid<br>Media<br>Manager",textStyle:"font-size: 12cqi;"}),tooltipHtml:t.getWnCategoryHtml("debrid")}],x=[{buildHref:e=>`/${/seasons|episodes/.test(e.type)?"shows":e.type}/${e.ids.slug}${e.season!==void 0?`/seasons/${e.season}${e.episode?`/episodes/${e.episode}`:""}`:""}/wikipedia`,innerHtml:t.getFaBrandsHtml("wikipedia-w"),tooltipHtml:"Wikipedia",addStyles:t.hideNativeExternalLink("wikipedia")},{buildHref:e=>`https://duckduckgo.com/?q=site%3Areddit.com Discussion ${t.encodeRfc3986(e.title)}${e.type==="movies"?` ${e.year}`:""}${e.season!==void 0?` Season ${e.season}${e.episode?` Episode ${e.episode}`:""}`:""}`,innerHtml:t.getFaBrandsHtml("reddit"),tooltipHtml:"Reddit",includeIf:e=>e.type!=="people"},{buildHref:e=>`https://letterboxd.com/tmdb/${e.ids.tmdb}`,innerHtml:t.getFaBrandsHtml("letterboxd"),tooltipHtml:"Letterboxd",includeIf:e=>e.type==="movies"},{buildHref:e=>`https://reversetv.enzon19.com/${/seasons|episodes/.test(e.type)?"shows":e.type}/${e.ids.slug}${e.season!==void 0?`/seasons/${e.season_old??e.season}${e.episode?`/episodes/${e.episode_old??e.episode}`:""}`:""}`,innerHtml:t.getDdgFaviconHtml("reversetv.enzon19.com","--extra-filters: invert(1);"),tooltipHtml:"ReverseTV",includeIf:e=>e.type!=="people"},{buildHref:e=>`userscriptGmXhrCustomLinks({ url: 'https://moviemaps.org/ajax/search?token=${t.encodeRfc3986(e.title)}&max_matches=1&use_similar=1', responseType: 'json' }).then((r) => 'https://moviemaps.org' + (r.response[0]?.url ?? '/search?q=${t.encodeRfc3986(e.title)}'))`,innerHtml:'<i class="fa-regular fa-map"></i>',tooltipHtml:"MovieMaps",includeIf:e=>e.type!=="people"&&!["animation","anime"].some(r=>e.genres.includes(r))},{buildHref:e=>t.getDdgTopResultRedirectUrl("fandom.com",e.title),innerHtml:t.getDdgFaviconHtml("fandom.com","--extra-filters: invert(1);"),tooltipHtml:"Fandom",includeIf:e=>e.type!=="people"},{buildHref:e=>`https://aznude.com/search.html?q=${t.encodeRfc3986(e.name??e.title)}`,innerHtml:t.getDdgFaviconHtml("aznude.com","transform: scale(1.1);"),tooltipHtml:"AZNude",includeIf:e=>o.includeNsfwLinks&&(e.type==="people"&&t.isAdultFemale(e)||e.type!=="people"&&!["animation","anime"].some(r=>e.genres.includes(r)))},{buildHref:e=>`userscriptGmXhrCustomLinks({ url: 'https://celeb.gate.cc/search.json?q=${t.encodeRfc3986(e.name)}', responseType: 'json' }).then((r) => 'https://celeb.gate.cc/' + (r.response[0] ? r.response[0].url + '?s=i.clicks.total&cdir=desc#images' : 'search?q=${t.encodeRfc3986(e.title)}'))`,innerHtml:'<img src="https://celeb.gate.cc/assets/logo.png" style="--extra-filters: brightness(1.1);">',tooltipHtml:"CelebGate",includeIf:e=>o.includeNsfwLinks&&e.type==="people"&&t.isAdultFemale(e)},{buildHref:e=>`https://rule34.xxx/index.php?page=post&s=list&tags=sort:score ${e.title.toLowerCase().replaceAll(/[^a-z0-9-:; ]/g,"").replaceAll(" ","_")}`,innerHtml:t.getDdgFaviconHtml("rule34.xxx"),tooltipHtml:"Rule 34",includeIf:e=>o.includeNsfwLinks&&e.type!=="people"},{buildHref:e=>`${t.fetchAnimeId(e,"myanimelist")}.then((id) => 'https://myanimelist.net' + (id ? '/anime/' + id${e.episode?` + '/x/episode/${e.episode}'`:""} : '/search/all?q=${t.encodeRfc3986(e.title)}'))`,innerHtml:t.getDdgFaviconHtml("myanimelist.net"),tooltipHtml:"MyAnimeList",includeIf:e=>e.genres?.includes("anime")},{buildHref:e=>`${t.fetchAnimeId(e,"anilist")}.then((id) => 'https://anilist.co' + (id ? '/anime/' + id : '/search/anime?search=${t.encodeRfc3986(e.title)}'))`,innerHtml:t.getDdgFaviconHtml("anilist.co"),tooltipHtml:"AniList",includeIf:e=>e.genres?.includes("anime")},{buildHref:e=>`${t.fetchAnimeId(e,"anidb")}.then((id) => 'https://anidb.net/anime/' + (id ?? '?adb.search=${t.encodeRfc3986(e.title)}'))`,innerHtml:t.getDdgFaviconHtml("anidb.net"),tooltipHtml:"AniDB",includeIf:e=>e.genres?.includes("anime")},{buildHref:e=>`${t.fetchAnimeId(e,"livechart")}.then((id) => 'https://livechart.me' + (id ? '/anime/' + id : '/search?q=${t.encodeRfc3986(e.title)}'))`,innerHtml:t.getDdgFaviconHtml("livechart.me"),tooltipHtml:"LiveChart",includeIf:e=>e.genres?.includes("anime")},{buildHref:e=>`https://www.themoviedb.org/${e.type==="people"?"person":e.type==="movies"?"movie":"tv"}/${e.ids.tmdb}${e.season!==void 0?`/season/${e.season}${e.episode?`/episode/${e.episode}`:""}`:""}`,innerHtml:'<img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg">',tooltipHtml:"TMDB",addStyles:t.hideNativeExternalLink("tmdb")},{buildHref:e=>`https://www.imdb.com/${e.type==="people"?"name":"title"}/${e.episode_ids?.imdb??e.ids.imdb}${e.season&&!e.episode?`/episodes/?season=${e.season}`:""}`,innerHtml:t.getFaBrandsHtml("imdb","font-size: 24px;"),tooltipHtml:"IMDb",addStyles:t.hideNativeExternalLink("imdb")},{buildHref:e=>`${t.fetchWikidataClaim(e,e.type==="movies"?"P12196":"P4835")}.then((id) => id ? 'https://www.thetvdb.com/dereferrer/${e.type==="movies"?"movie":"series"}/' + id : '${t.getDdgTopResultRedirectUrl("thetvdb.com",e.title)}')`,innerHtml:t.getDdgFaviconHtml("thetvdb.com"),tooltipHtml:"TheTVDB",includeIf:e=>e.type!=="people"},{buildHref:e=>e.type==="people"?`fetch('https://api.tvmaze.com/search/people?q=${t.encodeRfc3986(e.name)}').then((r) => r.json()).then((r) => r[0]?.person.url ?? 'https://www.tvmaze.com/search?q=${t.encodeRfc3986(e.name)}')`:`fetch('https://api.tvmaze.com/lookup/shows?imdb=${e.ids.imdb}').then((r) => ${e.season?`fetch(r.url + '${e.episode?`/episodebynumber?season=${e.season}&number=${e.episode}`:"/seasons"}').then((r2) => r2.json()).then((r2) => r2${e.episode?"":`[${e.season-1}]`}.url)`:"r.url.replace('api.', '')"})`,innerHtml:t.getDdgFaviconHtml("tvmaze.com"),tooltipHtml:"TVmaze",includeIf:e=>/shows|seasons|episodes|people/.test(e.type)},{buildHref:e=>e.season_trailer??(e.type!=="episodes"?e.trailer:null)??t.getDdgTopResultRedirectUrl("youtube.com",`${e.title}${e.type==="movies"?` ${e.year}`:""}${e.season?` Season ${e.season}`:""} Official Trailer`),innerHtml:t.getFaBrandsHtml("youtube"),tooltipHtml:"YouTube Trailer",includeIf:e=>e.type!=="people"},{buildHref:e=>`https://www.youtube.com/results?search_query=${t.encodeRfc3986(e.name)} Interview`,innerHtml:t.getFaBrandsHtml("youtube"),tooltipHtml:"YouTube Interviews",includeIf:e=>e.type==="people"},{buildHref:e=>`${t.fetchWikidataClaim(e,"P1258")}.then((id) => id ? 'https://www.rottentomatoes.com/' + id${e.season?` + '/s${String(e.season).padStart(2,"0")}${e.episode?`/e${String(e.episode).padStart(2,"0")}`:""}'`:""} : '${t.getDdgTopResultRedirectUrl("rottentomatoes.com",e.title+(e.season?` Season ${e.season}${e.episode?` Episode ${e.episode}`:""}`:""))}')`,innerHtml:t.getDdgFaviconHtml("rottentomatoes.com","--extra-filters: brightness(1.15) contrast(1.3);"),tooltipHtml:"Rotten Tomatoes",includeIf:e=>e.type!=="people"},{buildHref:e=>`${t.fetchWikidataClaim(e,"P1712")}.then((id) => id ? 'https://www.metacritic.com/' + id${e.season?` + '/season-${e.season}${e.episode?`/episode-${e.episode}-${e.episode_title.toLowerCase().replaceAll(/[^a-z0-9- ]/g,"").replaceAll(" ","-")}`:""}'`:""} : '${t.getDdgTopResultRedirectUrl("metacritic.com",e.title+(e.season?` Season ${e.season}${e.episode?` Episode ${e.episode}`:""}`:""))}')`,innerHtml:t.getDdgFaviconHtml("metacritic.com"),tooltipHtml:"Metacritic",includeIf:e=>e.type!=="people"},{buildHref:e=>p(`.btn-watch-now[data-url="${e.item_url}"] ~ .external #external-link-justwatch`).attr("href")??p("#powered_by_url").attr("value"),innerHtml:'<i class="fa-kit fa-justwatch"></i>',tooltipHtml:"JustWatch",includeIf:e=>e.type!=="people"&&p(`.btn-watch-now[data-url="${e.item_url}"] ~ .external #external-link-justwatch, #watch-now-content[data-url="${e.item_url}"] > #powered_by_url`).length,addStyles:t.hideNativeExternalLink("justwatch")},{buildHref:e=>`https://open.spotify.com/search/${t.encodeRfc3986(e.title)} Soundtrack`,innerHtml:t.getFaBrandsHtml("spotify"),tooltipHtml:"Spotify",includeIf:e=>e.type!=="people"},{buildHref:e=>e.type==="movies"?`https://fanart.tv/movie/${e.ids.tmdb}`:`fetch('https://api.tvmaze.com/lookup/shows?imdb=${e.ids.imdb}').then((r) => r.ok ? r.json().then((r) => 'https://fanart.tv/series/' + r.externals.thetvdb) : userscriptGmXhrCustomLinks({ url: 'https://fanart.tv/api/search.php?section=tv&s=${t.encodeRfc3986(e.title)}', responseType: 'json' }).then((r) => r.response[0]?.link))`,innerHtml:t.getDdgFaviconHtml("fanart.tv"),tooltipHtml:"Fanart.tv",includeIf:e=>e.type!=="people",addStyles:t.hideNativeExternalLink("fanart")},{buildHref:e=>`https://mediux.pro/${e.type==="movies"?"movies":"shows"}/${e.ids.tmdb}`,innerHtml:t.getDdgFaviconHtml("mediux.pro"),tooltipHtml:"MediUX",includeIf:e=>e.type!=="people"},{buildHref:e=>`https://youglish.com/pronounce/${t.encodeRfc3986(e.name)}/english`,innerHtml:t.getDdgFaviconHtml("youglish.com"),tooltipHtml:"YouGlish",includeIf:e=>e.type==="people"},{buildHref:e=>[...new DOMParser().parseFromString(GM_getResourceText("oracleofbacon"),"text/html").querySelectorAll("#main .top-1000 li")].some(r=>r.textContent.split("(")[0].trim()===e.name)?"https://oracleofbacon.org/graph.php?who="+t.encodeRfc3986(e.name):`https://oracleofbacon.org/movielinks.php?a=Kevin+Bacon&b=${t.encodeRfc3986(e.name)}&use_using=1&u0=on&u1=on&use_role_types=1&rt0=on&rt1=on&rt3=on&company=&use_genres=1&g0=on&g4=on&g8=on&g12=on&g20=on&g24=on&g1=on&g5=on&g9=on&g13=on&g21=on&g25=on&g2=on&g10=on&g14=on&g18=on&g22=on&g26=on&g3=on&g7=on&g11=on&g15=on&g19=on&g27=on`,innerHtml:'<i class="fa-regular fa-chart-network"></i>',tooltipHtml:"Oracle of Bacon",includeIf:e=>e.type==="people"},{buildHref:e=>e.homepage,innerHtml:'<i class="fa-light fa-clapperboard-play"></i>',tooltipHtml:"Official Site",includeIf:e=>e.homepage,addStyles:t.hideNativeExternalLink("official")},{buildHref:e=>p("#external-link-instagram").attr("href"),innerHtml:t.getFaBrandsHtml("instagram"),tooltipHtml:"Instagram",includeIf:e=>p(`:is(.btn-watch-now, .poster[data-person-id])[data-url="${e.item_url}"] ~ .external #external-link-instagram`).length,addStyles:t.hideNativeExternalLink("instagram")},{buildHref:e=>p("#external-link-twitter").attr("href"),innerHtml:t.getFaBrandsHtml("x-twitter"),includeIf:e=>p(`:is(.btn-watch-now, .poster[data-person-id])[data-url="${e.item_url}"] ~ .external #external-link-twitter`).length,addStyles:t.hideNativeExternalLink("twitter")},{buildHref:e=>p("#external-link-facebook").attr("href"),innerHtml:t.getFaBrandsHtml("facebook"),tooltipHtml:"Facebook",includeIf:e=>p(`:is(.btn-watch-now, .poster[data-person-id])[data-url="${e.item_url}"] ~ .external #external-link-facebook`).length,addStyles:t.hideNativeExternalLink("facebook")}];let p,h;unsafeWindow.userscriptLevDist=levenshteinDistance,unsafeWindow.userscriptGmOpenInTab=GM_openInTab,unsafeWindow.userscriptGmXhrCustomLinks=GM.xmlHttpRequest;const o={maxSidebarWnLinks:4,torrentResolution:"1080p",includeNsfwLinks:!1,...GM_getValue("customLinks")};GM_setValue("customLinks",o);const l={};d(),document.addEventListener("turbo:load",async()=>{if(p??=unsafeWindow.jQuery,h??=unsafeWindow.userscriptTraktApiWrapper,!p)return;const e=p("#watch-now-content"),r=p("#header-search-autocomplete-results"),i=p(".notable-summary").attr("data-url")||p(".sidebar").attr("data-url");if(p(document).off("ajaxSuccess.userscript83278").on("ajaxSuccess.userscript83278",(c,_,S)=>{e.length&&S.url.includes("/streaming_links?country=")&&b(e),r.length&&/^\/search\/autocomplete(?!\/(people|lists|users))/.test(S.url)&&$(r)}),/^\/(movies|shows|seasons|episodes|people)\/[^\/]+$/.test(i)){const c=location.pathname,_=await k(i);c===location.pathname&&(s(_),w(_),_.type!=="people"&&(y(_),m(_)))}},{capture:!0});const n=(e,r,i)=>{const c=e.buildHref(r);return e.openInFrame?`<a href="javascript:void(0);" onclick="$('#custom-links-frame').attr('src') !== '${c}' ? $('#custom-links-frame').attr('src', '${c}').show() : $('#custom-links-frame').removeAttr('src').hide();" data-original-title="${e.tooltipHtml??""}">${i??e.innerHtml}</a>`:`<a ${/\)\.then\(/.test(c)?`href="javascript:void(0);" onclick="event.preventDefault(); $(this).removeAttr('onclick onauxclick'); ${c}.then((href) => { $(this).attr('href', href); userscriptGmOpenInTab(href, { active: true, setParent: true }); });" onauxclick="event.preventDefault(); $(this).removeAttr('onclick onauxclick'); ${c}.then((href) => { $(this).attr('href', href); if (event.button === 1) userscriptGmOpenInTab(href, { setParent: true }); });"`:`href="${c}"`} target="_blank" rel="noreferrer" data-original-title="${e.tooltipHtml??""}">${i??e.innerHtml}</a>`};function s(e){p(x.filter(r=>r.includeIf?r.includeIf(e):!0).map(r=>n(r,e)).join("")).prependTo("#info-wrapper .sidebar .external > li").tooltip({container:"body",placement:"bottom",html:!0})}function w(e){p(x.filter(r=>r.includeIf?r.includeIf(e):!0).map(r=>n(r,e,p(r.innerHtml).attr("alt")??r.tooltipHtml)+", ").join("")).insertAfter('.additional-stats.with-external-links label:contains("Links")')}function y(e){const r=p("#info-wrapper .sidebar");r.has(".btn-watch-now").length&&!r.has(".streaming-links").length&&r.find(".btn-watch-now").before('<div class="streaming-links"><div class="sources"></div></div>'),p(g.filter(i=>i.includeIf?i.includeIf(e):!0).map(i=>n(i,e)).join("")).prependTo(r.find(".streaming-links .sources")).attr("data-container","body").attr("data-html","true").tooltip()}function m(e){const r=p("#overview .action-buttons");if(r.length&&!r.has(".btn-watch-now").length){const i=p("#info-wrapper .sidebar .btn-watch-now"),c=i.attr("data-source-counts"),_=i.attr("data-url");if(!c||!_)return;r.prepend(`<div class="streaming-links"><div class="sources"></div></div><a class="btn btn-block btn-summary btn-watch-now visible-xs selected" data-source-counts="${c}" data-target="#watch-now-modal" data-toggle="modal" data-url="${_}" href="#"><i class="fa fa-fw fa-solid fa-play"></i><div class="text"><div class="main-info">Watch Now</div><div class="under-info">0 streaming services</div></div></a>`)}p(g.filter(i=>i.includeIf?i.includeIf(e):!0).map(i=>n(i,e)).join("")).prependTo(r.find(".sources")).attr("data-html","true").tooltip()}async function $(e){e.find('> .search-result:not([data-type="people"])').each(async function(){const r=await k(p(this).attr("data-url"));p(this).has(".streaming-links").length||p(this).append('<div class="streaming-links"><div class="sources"></div></div>'),p(g.filter(i=>i.includeIf?i.includeIf(r):!0).map(i=>n(i,r)).join("")).prependTo(p(this).find(".streaming-links .sources")).tooltip({placement:"bottom",html:!0}).on("click",i=>i.stopPropagation())})}async function b(e){const r=await k(e.attr("data-url"));e.find("> .streaming-links").prepend('<div class="title">Custom Links</div><div class="section external"></div><div class="section"></div>'+(e.has(".no-links").length?'<div class="title"></div>':"")).end().find("> .title-wrapper .titles").append(`<div class="overview">${r.episode_overview??r.season_overview??r.overview??"No overview available."}</div>`),p(x.filter(i=>i.includeIf?i.includeIf(r):!0).map(i=>n(i,r)).join("")).appendTo(e.find(".section.external")).tooltip({placement:"bottom",html:!0}),p(g.filter(i=>i.includeIf?i.includeIf(r):!0).map(i=>n(i,r,i.innerHtml+(i.tooltipHtml?`<div class="price">${i.tooltipHtml}</div>`:""))).join("")).appendTo(e.find(".section.external + .section"))}async function k(e){return l[e]??=await(h?v:u)(e).then(r=>r.type==="episodes"&&r.genres.includes("anime")?f(r):r)}async function v(e){const r=e.split("/").filter(Boolean),i=r[0];let c,_,S,T,E;if(i==="seasons"||i==="shows"&&!isNaN(r[1])){const M=await fetch(e);if(!M.ok)throw new Error(`getItemData: Fetching ${M.url} failed with status: ${M.status}`);c=new DOMParser().parseFromString(await M.text(),"text/html"),_=p(c).find(".notable-summary")}return i==="episodes"&&([{show:S,episode:E}]=await h.search.id({id_type:"trakt",id:r[1],type:"episode",extended:"full"}),T=await h.seasons.season({id:S.ids.trakt,season:E.season,extended:"full"})),{item_url:e,type:i,...i!=="episodes"&&{...await h[i==="seasons"?"shows":i].summary({id:_?.attr("data-show-id")??r[1],extended:"full"})},...i==="seasons"&&{season:+_.attr("data-season-number"),season_title:p(c).find('#level-up-link[href*="/seasons/"]').text()||p(c).find("#summary-wrapper .mobile-title h1").contents()[0]?.textContent.trim(),season_overview:p(c).find("#overview #overview").text()||null,season_trailer:p(c).find("#overview .affiliate-links .trailer").attr("href")||null},...i==="episodes"&&{...S,season:T.number,season_title:T.title,season_original_title:T.original_title,season_ids:T.ids,season_first_aired:T.first_aired,season_overview:T.overview,season_episode_count:T.episode_count,episode:E.number,episode_title:E.title,episode_original_title:E.original_title,episode_ids:E.ids,episode_first_aired:E.first_aired,episode_overview:E.overview,episode_type:E.episode_type}}}async function u(e){let r,i;const c=await fetch(e);if(!c.ok)throw new Error(`getItemData: Fetching ${c.url} failed with status: ${c.status}`);if(r=new DOMParser().parseFromString(await c.text(),"text/html"),c.url.includes("/seasons/")){const P=await fetch(c.url.split("/seasons/")[0]);if(!P.ok)throw new Error(`getItemData: Fetching ${P.url} failed with status: ${P.status}`);i=new DOMParser().parseFromString(await P.text(),"text/html")}const _=e.split("/").filter(Boolean)[0],S=p(r).find(".notable-summary"),T=p(r).find(".additional-stats > li"),E=i?p(i).find(".additional-stats > li"):void 0,G=(P,L=T)=>L.filter((W,O)=>p(O).find("label").text().toLowerCase()===P),M={item_url:e,type:_,ids:{trakt:+(S.attr("data-movie-id")??S.attr("data-show-id")??S.attr("data-person-id")),imdb:p(i??r).find("#external-link-imdb").attr("href")?.match(/(?:tt|nm)\d+/)?.[0],tmdb:+p(r).find("#external-link-tmdb").attr("href")?.match(/\d+/)?.[0]||null,slug:c.url.split("/")[4]},homepage:p(i??r).find("#external-link-official").attr("href")??null,..._!=="people"&&{title:p(r).find(':is(body > [itemtype$="Movie"], body > [itemtype$="TVSeries"], body > [itemtype] > [itemtype$="TVSeries"]) > meta[itemprop="name"]').attr("content")?.match(/(.+?)(?: \(\d{4}\))?$/)?.[1],original_title:G("original title",E).contents().get(-1)?.textContent,year:+p(i??r).find("#summary-wrapper .mobile-title .year")[0]?.textContent||null,genres:T.find('[itemprop="genre"]').map((P,L)=>p(L).text().toLowerCase()).get(),overview:p(i??r).find("#overview #overview").text()||null,trailer:p(i??r).find("#overview .affiliate-links .trailer").attr("href")||null},.../seasons|episodes/.test(_)&&{season:+S.attr("data-season-number"),season_title:p(r).find('#level-up-link[href*="/seasons/"]').text()||p(r).find("#summary-wrapper .mobile-title h1").contents()[0]?.textContent.trim()},..._==="seasons"&&{season_overview:p(r).find("#overview #overview").text()||null,season_trailer:p(r).find("#overview .affiliate-links .trailer").attr("href")||null},..._==="episodes"&&{episode:+S.attr("data-episode-number"),episode_title:p(r).find('body > [itemtype$="TVEpisode"] > meta[itemprop="name"]').attr("content"),episode_overview:p(r).find("#overview #overview").text()||null,episode_ids:{imdb:p(r).find("#external-link-imdb").attr("href")?.match(/tt\d+/)?.[0]}},..._==="people"&&{name:p(r).find('body > [itemtype$="Person"] > meta[itemprop="name"]').attr("content"),gender:G("gender").contents().get(-1)?.textContent.toLowerCase().replace("-","_"),birthday:G("birthday").children().last().attr("data-date")}};return Object.hasOwn(M,"original_title")&&(M.original_title??=M.title),M}async function f(e){const r=_=>_.trim().toLowerCase().replaceAll(/[.,]/g,"").replace(/\((\d)\)$/,(S,T)=>"i".repeat(+T)),i=await fetch(`https://api.tvmaze.com/lookup/shows?imdb=${e.ids.imdb}`).then(_=>_.ok?fetch(_.url+"?embed[]=seasons&embed[]=episodes"):null).then(_=>_?.ok?_.json():null),c=i?._embedded.episodes.find(_=>r(_.name)===r(e.episode_title));return c&&(e.season!==c.season||e.episode!==c.number)&&(e.season_old=e.season,e.episode_old=e.episode,e.season=c.season,e.episode=c.number,e.season_title=i._embedded.seasons.find(_=>_.number==c.season).name||`Season ${c.season}`,["season_original_title","season_ids","season_first_aired","season_episode_count"].forEach(_=>delete e[_])),e}function d(){GM_addStyle(`
#custom-links-frame {
  position: fixed;
  right: 16px;
  bottom: 16px;
  z-index: 999999;
  width: max(35vw, 300px);
  aspect-ratio: 16 / 9;
  display: none;
}


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


${g.concat(x).map(e=>e.addStyles).filter(Boolean).join(`
`)}
  `)}})("Trakt.tv | Custom Links (Watch-Now + External)"),gmStorage.x70tru7b&&(async C=>{"use strict";let t,a,g;const x={_defaults:{title:(typeof C<"u"?C:GM_info.script.name).replace("Trakt.tv","Userscript"),toast:!0,toastrOpt:{positionClass:"toast-top-right",timeOut:1e4,progressBar:!0},toastrStyles:"#toast-container#toast-container a { color: #fff !important; border-bottom: dotted 1px #fff; }"},_print(m,$,b="",k={}){const{title:v=this._defaults.title,toast:u=this._defaults.toast,toastrOpt:f,toastrStyles:d="",consoleStyles:e="",data:r}=k,i=`${b}${r!==void 0?" See console for details.":""}<style>${this._defaults.toastrStyles+d}</style>`;console[m](`%c${v}: ${b}`,e,...r!==void 0?[r]:[]),u&&unsafeWindow.toastr?.[$](i,v,{...this._defaults.toastrOpt,...f})},info(m,$){this._print("info","info",m,$)},success(m,$){this._print("info","success",m,{consoleStyles:"color:#00c853;",...$})},warning(m,$){this._print("warn","warning",m,$)},error(m,$){this._print("error","error",m,$)}},p={...GM_getValue("vipUnlock")};GM_setValue("vipUnlock",p);const h=null;let o=null;y(),document.addEventListener("turbo:load",async()=>{if(t??=unsafeWindow.jQuery,a??=unsafeWindow.compressedCache,g??=unsafeWindow.Cookies,!(!t||!a||!g)){if(location.pathname!=="/auth/signin"&&t("body").attr("data-turbo",!0).data("turbo",!0),l(),h&&t("body:not(.dashboard) .feed-icon.csv").attr("href",location.pathname+".csv?slurm="+h+location.search.replace("?","&")),t(document).off("ajaxSuccess.userscript38793").on("ajaxSuccess.userscript38793",(m,$,b)=>{b.url.endsWith("/settings.json")&&l(),h&&/\/dashboard\/(on_deck|recently_watched)$/.test(b.url)&&t('.feed-icon.csv[href="/vip/csv"]').attr("href",function(){return t(this).prev().attr("data-path")+".csv?"+["slurm="+h,t(this).prev().attr("data-query")].join("&")})}),t(".frame-wrapper .sidenav.advanced-filters .buttons").addClass("vip").find(".btn.vip").text("").removeClass("vip").removeAttr("href").addClass("disabled disabled-init").attr("id","filter-apply").attr("data-apply-text","Apply Filters").before('<a class="btn btn-close-2024" id="filter-close" style="display: inline-block !important; visibility: visible !important;">Close</a>').append('<span class="text">Configure Filters</span><span class="icon fa-solid fa-check"></span>'),/^\/users\/[^\/]+\/progress(?!\/playback)/.test(location.pathname)&&/list=\d+/.test(location.search)&&!location.search.includes("terms=")){unsafeWindow.showLoading?.();const m=new URLSearchParams(location.search),$=m.get("list"),b=await fetch("/lists/"+$).then(v=>fetch(v.url+"?display=show&hide=unwatched&limit=10000")).then(v=>v.text()).then(v=>new DOMParser().parseFromString(v,"text/html")),k=[...b.querySelectorAll(".grid-item")].map(v=>v.querySelector(".titles-link")?.textContent).filter(Boolean);m.set("terms",`^${k.join("$|^")}$`),["airing","completed","ended","not-completed","rewatching"].forEach(v=>{g.remove("filter-hide-progress-"+v,{path:"/"}),g.remove("filter-hide-progress-"+v,{path:"/users/"+g.get("trakt_userslug")})}),location.search=m.toString()}o!==null&&(GM_unregisterMenuCommand(o),o=null),unsafeWindow.advancedFiltersOn&&(o=GM_registerMenuCommand("VIP Unlock: Save Filters",()=>t("#saved-filters-modal").modal("show")))}},{capture:!0});function l(){const m=a.get("settings");m&&(!m.user.vip||h&&m.account.token!==h)&&(m.user.vip=!0,h&&(m.account.token=h),a.set("settings",m),unsafeWindow.userSettings&&(unsafeWindow.userSettings=m))}async function n(){if(unsafeWindow.listPopupPressed){unsafeWindow.listPopupPressed=!1;return}const m=t(this).hasClass("side-btn")||t(this).parent().hasClass("side-btn"),$=t(this).hasClass("btn-list"),b=m?t(this).closest(".btn-summary"):$?t(this):t(this).closest(".grid-item"),k=b.attr("data-url"),v=b.attr("data-type"),u=+b.attr(`data-${v}-id`),f=Object.values(a.get("lists")??{}).some(e=>e.type==="list"),d=unsafeWindow.isPersonPage&&$||b.attr("data-type")==="person"?"list":unsafeWindow.userSettings.browsing.list_popup_action;if(unsafeWindow.isPersonPage&&$||f&&(d!=="watchlist"||t(this).hasClass("selected"))||m)unsafeWindow.actionListPopup(m?b:t(this));else{b.find(".loading").show();const e=t(this).hasClass("selected"),r=Object.values(a.get("lists")).find(_=>_.name==="Watchlist"),i=t(`<li class="${r.item_count>=unsafeWindow.userSettings.limits.watchlist.item_count?"maxed-out":""} ${e?"selected":""}" data-list-id="${r.ids.trakt}" data-list-type="watchlist" data-item-count="${r.item_count}"></li>`);await s(b,i,e)&&(t(`[data-${v}-id="${u}"]:is(.btn-summary.btn-list, [data-type="${v}"]) .list`)[e?"removeClass":"addClass"]("selected"),unsafeWindow.cacheUserData()),b.find(".loading").hide()}}async function s(m,$,b){$.addClass("spinner").find(".icon").addClass("fa-spin");const k=m.attr("data-url"),v=m.attr("data-type"),u=+m.attr(`data-${v}-id`),f=+$.attr("data-list-id")||Object.values(a.get("lists")).find(r=>r.name==="Watchlist").ids.trakt,d=$.attr("data-list-type"),e=+$.attr("data-item-count");try{if($.hasClass("maxed-out")&&!b){const r=.045*e;x.info(`Target list is maxed-out, attempting bypass.. This will take about <strong>${~~(r/60)}m${~~(r%60)}s</strong>.`,{toastrOpt:{timeOut:r*1e3}});const i=await w(),c=a.get("lists");if(c[i]&&c[i].item_count>0){x.error("Temp list is not empty. Aborting..",{data:c[i]});return}const _=await fetch(k+"/list",{method:"POST",headers:{"X-CSRF-Token":unsafeWindow.csrfToken},body:new URLSearchParams({type:v,trakt_id:u,list_id:i})});if(!_.ok){x.error(`Failed to add item to temp list: id=${i}.`,{data:_});return}x.info("Added item to temp list.");for(const[S,T]of[[f,i],[i,f]]){const E=await fetch("/lists/"+S).then(M=>M.text()).then(M=>new DOMParser().parseFromString(M,"text/html").querySelector("#listable-all-item-ids").value.split(",").map(Number));if(!E||!E.length){x.error(`Failed to fetch all list item ids for list: id=${S}.`);return}const G=await fetch(`/lists/${S}/move_items/${T}`,{method:"POST",headers:{"X-CSRF-Token":unsafeWindow.csrfToken},body:new URLSearchParams([["sort_by","rank"],["sort_how","asc"],...E.map(M=>["order[]",M])])});if(!G.ok){x.error(`Failed to move all items from ${S===f?"target to temp":"temp to target"} list.`,{data:G});return}x.info(`Moved all items from ${S===f?"target to temp":"temp to target"} list.`)}x.success(`Success. Item was added to <a href="/lists/${f}"><strong>target list</strong></a>.`)}else{const r=await fetch(`${k}/${/(watchlist|favorites|recommendations)/.test(d)?d:"list"}${b?"/remove":""}`,{method:"POST",headers:{"X-CSRF-Token":unsafeWindow.csrfToken},body:new URLSearchParams({type:v,trakt_id:u,list_id:f})});if(!r.ok){await r.json().then(i=>x.error("Failed to add item to list."+(i.message?" Response: "+i.message:""),{data:r}));return}x.success("Success. "+(await r.json()).message)}return $.toggleClass("selected"),!0}finally{$.removeClass("spinner").find(".icon").removeClass("fa-spin")}}async function w(){if(!p.tempList1Id||!a.get("lists")[p.tempList1Id]){const m=Object.values(a.get("lists")).find(v=>v.name==="Favorites").ids.trakt,$=await fetch(`/lists/${m}/copy_items/0`,{method:"POST",headers:{"X-CSRF-Token":unsafeWindow.csrfToken},body:new URLSearchParams({"order[]":"",sort_by:"rank",sort_how:"asc"})});if(!$.ok){x.error("Failed to create temp list.",{data:$});return}const b=(await $.json()).id;x.info(`Created temp list: id=${b}.`,{data:$});const k=await fetch("/lists/"+b,{method:"POST",headers:{"X-CSRF-Token":unsafeWindow.csrfToken},body:new URLSearchParams({authenticity_token:unsafeWindow.csrfToken,_method:"put",name:`temp1_${b}`,description:'Needed for the list limits bypass of the "Partial VIP Unlock" userscript. Keep it empty. You can edit the list title and description if you want. If you delete it another one will be created on the next attempted list limits bypass.',privacy_hidden:"private",privacy:"private",existing_collaborator_ids:"",allow_comments_hidden:1,allow_comments:1,display_numbers_hidden:1,display_numbers:1,default_sort_by:"rank",default_sort_how:"asc"})});if(!k.ok){x.error("Failed to update temp list metadata.",{data:k});return}x.info("Updated temp list metadata.",{data:k}),p.tempList1Id=b,GM_setValue("vipUnlock",p)}return p.tempList1Id}function y(){GM_addStyle(`
#top-nav .btn-vip,
.dropdown-menu.for-sortable > li > a.vip-only,
.alert-vip-required,
.list-manage-wrapper .btn-list-move-items {
  display: none !important;
}
  `);const m=document.cookie.match(/(?:^|; )trakt_userslug=([^;]*)/)?.[1];m&&GM_addStyle(`
:is(#avatar-wrapper h1, .comment-wrapper .user-name) [href="/users/${m}"]::after,
#results-top-wrapper [href="/users/${m}"] + h1::after {
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
#avatar-wrapper h1 [href="/users/${m}"]::after,
#results-top-wrapper [href="/users/${m}"] + h1::after {
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
.comment-wrapper .user-name [href="/users/${m}"]::after {
  margin: -3px 0 0 5px;
  padding: 2px 4px;
  font-size: 11px;
  letter-spacing: 0;
  border-radius: 2px;
}
@media (width <= 767px) and (orientation: portrait) {
  #avatar-wrapper h1 [href="/users/${m}"]::after,
  #results-top-wrapper [href="/users/${m}"] + h1::after {
    margin: 0px 0px 3px 7px;
    padding: 3px 5px 3px 23px;
    font-size: 14px;
    background-size: 14px;
  }
}

.personal-list .comment-wrapper .user-name [href="/users/${m}"] {
  white-space: nowrap;
}
    `)}})("Trakt.tv | Partial VIP Unlock"),gmStorage.yl9xlca7&&(async C=>{"use strict";let t;const a=new Intl.NumberFormat("en",{notation:"compact",maximumFractionDigits:1});a.formatTLC=l=>a.format(l).toLowerCase(),o(),document.addEventListener("turbo:load",()=>{if(!location.pathname.startsWith("/shows/")||location.pathname.includes("/episodes/")||(t??=unsafeWindow.jQuery,!t))return;const l=t("#seasons-episodes-sortable"),n=t("#summary-ratings-wrapper .summary-user-rating"),s=t("#summary-ratings-wrapper .trakt-rating");if(!l.length||!n.length||!s.length)return;const w=unsafeWindow.userscriptAvgSeasonEpisodeRatings={};let y;n[0].mutObs=new MutationObserver(()=>{n.hasClass("popover-on")||p(n,w.personal)}),p(n),h(s);const m=!location.pathname.endsWith("/seasons/0");l.on("arrangeComplete",()=>{l.data("isotope")&&(y=l.data("isotope").filteredItems.filter($=>m?$.element.dataset.seasonNumber!=="0":!0),w.personal=g(y),w.general=x(y),p(n,w.personal),h(s,w.general))}),t(document).off("ajaxSuccess.userscript32985").on("ajaxSuccess.userscript32985",($,b,k)=>{y&&/\/ratings\/(seasons|episodes)\.json$|\/rate/.test(k.url)&&(w.personal=g(y),p(n,w.personal))})},{capture:!0});function g(l){const n=l.map(s=>+t(s.element).find(".corner-rating > .text").text()).filter(Boolean);return{average:n.length?n.reduce((s,w)=>s+w,0)/n.length:void 0,votes:n.length}}function x(l){const n=l.reduce((s,w)=>s+w.sortData.votes,0);return{average:n?l.reduce((s,w)=>s+w.sortData.percentage*(w.sortData.votes/n),0):void 0,votes:n}}function p(l,n){l[0].mutObs.disconnect(),l.find(".rating").each(function(){const s=t(this).parent().prev().attr("class").match(/rating-(\d+)/)?.[1];s&&t(this).html(`${s}<div class="votes">${unsafeWindow.ratingsText?.[s]??""}</div>`)}),l.find(".number > .votes").removeClass("alt").text(`avg: ${n?.average?`${n.average.toFixed(1)}`:"--"} (${n?.votes!==void 0?a.formatTLC(n.votes):"--"} v.)`),l[0].mutObs.observe(l[0],{subtree:!0,childList:!0})}function h(l,n){l.has(".rating .votes").length||l.find(".votes").clone().appendTo(l.find(".rating")).text((s,w)=>`(${w.match(/^.*? v/)?.[0]??"0 v"}.)`),l.find(".number > .votes").text(`avg: ${n?.average?`${Math.round(n.average)}`:"--"}% (${n?.votes!==void 0?a.formatTLC(n.votes):"--"} v.)`)}function o(){GM_addStyle(`
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