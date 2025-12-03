// ==UserScript==
// @name         Trakt.tv | Megascript
// @description  All 14 userscripts from my "Trakt.tv Userscript Collection" repo merged into one for convenience. See README for details.
// @version      2025-12-03_11-59
// @namespace    https://github.com/Fenn3c401
// @author       Fenn3c401
// @license      GPL-3.0-or-later
// @homepageURL  https://github.com/Fenn3c401/Trakt.tv-Userscript-Collection#readme
// @supportURL   https://github.com/Fenn3c401/Trakt.tv-Userscript-Collection/issues
// @updateURL    https://raw.githubusercontent.com/Fenn3c401/Trakt.tv-Userscript-Collection/main/userscripts/meta/zzzzzzzz.meta.js
// @downloadURL  https://raw.githubusercontent.com/Fenn3c401/Trakt.tv-Userscript-Collection/main/userscripts/dist/zzzzzzzz.min.user.js
// @icon         https://trakt.tv/assets/logos/logomark.square.gradient-b644b16c38ff775861b4b1f58c1230f6a097a2466ab33ae00445a505c33fcb91.svg
// @match        https://trakt.tv/*
// @match        https://classic.trakt.tv/*
// @run-at       document-start
// @resource     anidap     https://anidap.se/logo.png
// @resource     cineby     https://www.cineby.gd/logo.png
// @resource     dmm        https://raw.githubusercontent.com/debridmediamanager/debrid-media-manager/main/dmm-logo.svg
// @resource     gojolive   https://db.onlinewebfonts.com/t/65e1ae41ad95e8bed2ac45adc765795a.woff2
// @resource     hexa       https://hexa.su/hexa-logo.png
// @resource     knaben     data:image/svg+xml;base64,PHN2ZyBvbm1vdXNlZW50ZXI9InRoaXMucXVlcnlTZWxlY3RvckFsbCgnLmJveCcpLmZvckVhY2goKGIsaSk9Jmd0O3sgYi5zdHlsZS50cmFuc2l0aW9uPSdub25lJzsgYi5zdHlsZS5vcGFjaXR5PTA7IGIuc3R5bGUudHJhbnNmb3JtPSd0cmFuc2xhdGUoMCwtNzAlKSc7IHNldFRpbWVvdXQoKCk9Jmd0O3sgYi5zdHlsZS50cmFuc2l0aW9uPSdvcGFjaXR5IC4zcywgdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLjUsMC4yNSwwLjI3LDAuMSknOyBiLnN0eWxlLm9wYWNpdHk9MTsgYi5zdHlsZS50cmFuc2Zvcm09J3RyYW5zbGF0ZSgwLDApJzsgfSwgNTAqKChpJTMtMykqKH5+KGkvMyktMykpKTsgfSk7IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxODYyIDgwNCI+PHBhdGggZmlsbD0iI2JhYmFiYSIgZD0iTTc0LjQ4IDBoNDEzLjM2djYyLjk1SDc0LjQ4em0wIDYyLjk1aDYwLjM1djcyLjc1SDc0LjQ4em0xMzYuNDEgMGgzNy4ydjcyLjc1aC0zNy4yem0xMDcuNDcgMGgzNy4ydjcyLjc1aC0zNy4yem0xMTEuNjEgMGg1Ny44N3Y3Mi43NWgtNTcuODd6TTc0LjQ4IDEzNS40N2g0MTMuMzZ2OTcuOTNINzQuNDh6Ii8+PHBhdGggZmlsbD0iIzdhN2E3YSIgZD0iTTc0LjQ4IDIzMy4xNmg1MDIuNzR2MTQwLjdINzQuNDh6Ii8+PHBhdGggZmlsbD0iI2JhYmFiYSIgZD0iTTAgMzkxLjk5MXYuMDc4TDEwNi45ODggNjQ0LjEySDE3MTMuMDR2LTIuOTA4TDE4NjIgNDkyLjI1MVYzOTEuOTVILjA5N1oiLz48cGF0aCBmaWxsPSIjN2E3YTdhIiBkPSJNMTcxMy40ODkgNjQyLjA3SDEwNS40MTdsNjcuODgyIDE1OS45MmgxMzgwLjI2OVoiLz48cGF0aCBjbGFzcz0iYm94IiBmaWxsPSIjN2E3YTdhIiBkPSJNNzYzLjQyIDQwLjJoMjgxLjk0djEwMS43N0g3NjMuNDJ6Ii8+PHBhdGggY2xhc3M9ImJveCIgZmlsbD0iI2JhYmFiYSIgZD0iTTEwNjIuOTggNDAuMmgyODEuOTR2MTAxLjc3aC0yODEuOTR6Ii8+PHBhdGggY2xhc3M9ImJveCIgZmlsbD0iIzdhN2E3YSIgZD0iTTEzNjIuNTQgNDAuMmgyODEuOTR2MTAxLjc3aC0yODEuOTR6Ii8+PHBhdGggY2xhc3M9ImJveCIgZmlsbD0iI2JhYmFiYSIgZD0iTTY1My41NiAxNjAuMzJoMjg1LjYzdjk2Ljc2SDY1My41NnoiLz48cGF0aCBjbGFzcz0iYm94IiBmaWxsPSIjN2E3YTdhIiBkPSJNOTU1LjY3IDE2MC4zMmg0OTkuODV2OTYuNzZIOTU1LjY3eiIvPjxwYXRoIGNsYXNzPSJib3giIGZpbGw9IiNiYWJhYmEiIGQ9Ik0xNDcwLjkxIDE2MC4zMmgyODAuMTR2OTYuNzZoLTI4MC4xNHoiLz48cGF0aCBjbGFzcz0iYm94IiBmaWxsPSIjN2E3YTdhIiBkPSJNNjUzLjU2IDI3My43NmgyODUuNjN2MTAwLjFINjUzLjU2eiIvPjxwYXRoIGNsYXNzPSJib3giIGZpbGw9IiNiYWJhYmEiIGQ9Ik05NTUuNjcgMjczLjc2aDQ5OS44NXYxMDAuMUg5NTUuNjd6Ii8+PHBhdGggY2xhc3M9ImJveCIgZmlsbD0iIzdhN2E3YSIgZD0iTTE0NzAuOTEgMjczLjc2aDI4MC4xNHYxMDAuMWgtMjgwLjE0eiIvPjwvc3ZnPg==
// @resource     kuroiru    https://kuroiru.co/logo/stuff/letter-small.png
// @resource     miruro     https://www.miruro.to/assets/miruro-text-transparent-white-DRs0RmF1.png
// @resource     pstream    data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMC4wMDggMTcuNDA1Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDE4LjY3NDgpIHNjYWxlKDAuMDAzMzMzIC0wLjAwMzMzMykiIGZpbGw9IiM4NTg5ZmYiPjxwYXRoIGQ9Ik0zOTEwIDU1MjcgYy0zMyAtNCAtMTQ1IC0xNyAtMjUwIC0yOCAtNjQ1IC03MyAtOTAwIC0xODcgLTkwMCAtNDA1IGwwIC04OSAxNTQgLTIgYzIwOSAtMiAyMjUgLTE3IDM4MSAtMzU0IDE4NiAtMzk5IDMzNyAtNDkxIDU1NyAtMzQxIDEwMyA3MCAxNzYgNjcgMjUyIC05IDE0MyAtMTQyIC0xNSAtMzQyIC0zMjAgLTQwNCBsLTEyMyAtMjUgMTg1IC0zOTMgYzEwMSAtMjE3IDE4OSAtMzk2IDE5NCAtMzk4IDYgLTMgODcgNiAxODIgMjAgNDk5IDcxIDExNjAgLTI5NiA5NzIgLTU0MSAtNzcgLTEwMSAtMTgzIC0xMDAgLTMwNyAyIC0xODYgMTU0IC00MDcgMjIzIC02MTAgMTg4IC0xMjMgLTIxIC0xMTkgLTkgLTgwIC0yNzQgNDAgLTI3MyAxOCAtNzAxIC00OCAtOTE2IC0yNSAtODIgMjUyIC05OSA0NjMgLTI4IDY1NSAyMjAgMTE0NiA3NDggMTMzMCAxNDMwIDQ0IDE2NSA0NiAyMDEgNTMgMTIwNiBsOCAxMDM1IC02NyA2NiBjLTE4NSAxODMgLTEzNzYgMzM2IC0yMDI2IDI2MHogbTEwNzggLTEyMTkgYzExOCAtODEgMjA0IC04NCAzMTIgLTEwIDIzOSAxNjMgNDUzIC03MyAyNDAgLTI2NSAtMjQxIC0yMTggLTcwMyAtMTc4IC04MzIgNzEgLTkzIDE3OSAxMDUgMzIzIDI4MCAyMDR6Ii8+PHBhdGggZD0iTTI0MTAgNDU5MSBjLTk1MCAtMjAxIC0yNDA0IC0xMDE1IC0yNDA5IC0xMzQ4IC0xIC02OSA3NzEgLTE3MDcgODg1IC0xODc4IDQyMiAtNjMzIDExODUgLTk4NCAxOTI0IC04ODYgMjIxIDI5IDI5MyA2OCA0ODIgMjY0IDU3NSA1OTQgNzI3IDE0NjYgMzkwIDIyMzIgLTIzMSA1MjUgLTc0OSAxNjAwIC03ODUgMTYzMCAtNTcgNDggLTIxNCA0NCAtNDg3IC0xNHogbTU3OSAtMTEyMiBjMTE0IC01NCAxNDUgLTE4OCA2NCAtMjgxIC00OCAtNTYgLTYwIC01OCAtMjY1IC00NyAtMTAyIDYgLTE3NyAtNDIgLTIyOSAtMTQzIC05NSAtMTg3IC0zMzkgLTE0NSAtMzM5IDU3IDAgMjkxIDQ4MiA1NTAgNzY5IDQxNHogbS0xMzE5IC02MzAgYzIxNSAtMTA2IDg1IC0zNTAgLTE3MyAtMzI2IC0xNDQgMTMgLTIwOSAtMjEgLTI3MCAtMTQwIC0xMDIgLTE5NyAtMzgxIC0xMTkgLTMzOSA5NCA1OSAyOTUgNTA2IDUwOCA3ODIgMzcyeiBtMTQ3MiAtNTc3IGMyMTYgLTIxNyAtMjg3IC03ODkgLTc4NiAtODk1IC00NzMgLTEwMCAtOTA5IDEyNyAtNjU0IDM0MSA3MSA2MCA5MyA2MiAyMjYgMjIgMzQ4IC0xMDYgNzM5IDc3IDkwMyA0MjMgODMgMTc3IDIwMSAyMTggMzExIDEwOXoiLz48L2c+PC9zdmc+
// @resource     scenenzbs  https://img.house-of-usenet.com/fd4bd542330506d41778e81860f29435c7f8795a7bbefbd9d297b7d79d5a067b.webp
// @resource     stremio    https://web.stremio.com/images/stremio_symbol.png
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
// @grant        GM_xmlhttpRequest
// @grant        GM.xmlHttpRequest
// @connect      forvo.com
// @connect      moviemaps.org
// @connect      walter-r2.trakt.tv
// ==/UserScript==

/* README
### General
- You can turn off individual modules by setting the corresponding script-id to `false` in the userscript storage tab *(note: only displayed after first run)*.
- This userscript is automatically generated. YMMV.

| *NAME* | *SCRIPT_ID* |
| :----- | :---------- |
| [Trakt.tv \| Actor Pronunciation Helper](71cd9s61.md) | `71cd9s61` |
| [Trakt.tv \| All-in-One Lists View](p2o98x5r.md) | `p2o98x5r` |
| [Trakt.tv \| Average Season And Episode Ratings](yl9xlca7.md) | `yl9xlca7` |
| [Trakt.tv \| Bug Fixes and Optimizations](brzmp0a9.md) | `brzmp0a9` |
| [Trakt.tv \| Charts - Ratings Distribution](pmdf6nr9.md) | `pmdf6nr9` |
| [Trakt.tv \| Charts - Seasons](cs1u5z40.md) | `cs1u5z40` |
| [Trakt.tv \| Custom Links (Watch-Now + External)](wkt34fcz.md) | `wkt34fcz` |
| [Trakt.tv \| Custom Profile Image](2dz6ub1t.md) | `2dz6ub1t` |
| [Trakt.tv \| Director Badge](h8vh5z16.md) | `h8vh5z16` |
| [Trakt.tv \| Enhanced List Preview Posters](kji85iek.md) | `kji85iek` |
| [Trakt.tv \| Enhanced Title Metadata](fyk2l3vj.md) | `fyk2l3vj` |
| [Trakt.tv \| Nested Header Navigation Menus](txw82860.md) | `txw82860` |
| [Trakt.tv \| Partial VIP Unlock](x70tru7b.md) | `x70tru7b` |
| [Trakt.tv \| Scheduled E-Mail Data Exports](2hc6zfyy.md) | `2hc6zfyy` |
*/


"use strict";const gmStorage={"2dz6ub1t":!0,"2hc6zfyy":!0,"71cd9s61":!0,brzmp0a9:!0,cs1u5z40:!0,fyk2l3vj:!0,h8vh5z16:!0,kji85iek:!0,p2o98x5r:!0,pmdf6nr9:!0,txw82860:!0,wkt34fcz:!0,x70tru7b:!0,yl9xlca7:!0,...GM_getValue("megascript")};GM_setValue("megascript",gmStorage),gmStorage["2dz6ub1t"]&&(async()=>{"use strict";let t,r;const u=Object.freeze({_DEFAULT_PREFIX:GM_info.script.name.replace("Trakt.tv","Userscript")+": ",_DEFAULT_TOAST:!0,_printMsg(d,s,n,{data:p,prefix:f=u._DEFAULT_PREFIX,toast:b=u._DEFAULT_TOAST}={}){n=f+n,console[d](n,p||""),b&&r[s](n+(p?" See console for details.":""))},info:(d,s)=>u._printMsg("info","info",d,s),success:(d,s)=>u._printMsg("info","success",d,s),warning:(d,s)=>u._printMsg("warn","warning",d,s),error:(d,s)=>u._printMsg("error","error",d,s)}),m={...GM_getValue("customProfileImage")};GM_setValue("customProfileImage",m);let l=o();window.addEventListener("turbo:load",()=>{if(!/^\/(shows|movies|users|dashboard|settings|oauth\/(authorized_)?applications)/.test(location.pathname)||(t??=unsafeWindow.jQuery,r??=unsafeWindow.toastr,!t||!r))return;const d=t("body.is-self #cover-wrapper"),s=t("body.is-self #btn-set-profile-image"),n=t("body:is(.shows, .movies) #summary-wrapper > .full-screenshot");m.imgUrl&&d.length&&s.length&&v(d,s),n.length&&(n.attr("style")?i(n):new MutationObserver((p,f)=>{f.disconnect(),i(n)}).observe(n[0],{attributeFilter:["style"]}))});function v(d,s){d.has('a.selected:contains("Profile")').length?(d.removeClass("slim").find("> .poster-bg-wrapper").removeClass("poster-bg-wrapper").addClass("shade"),d.find("> #watching-now-wrapper").length||d.find("> .container").before(`<div class="hidden-xs" id="fanart-info"><a href="${m.info.url}">${m.info.title} <span class="year">${m.info.year}</span></a></div>`)):d.find("> .poster-bg-wrapper").removeClass("poster-bg-wrapper").addClass("shadow-full-width"),s.popover("destroy").popover({trigger:"manual",container:"body",placement:"bottom",html:!0,template:'<div class="popover remove reset-profile-image" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',title:"Reset Profile Image?",content:`<button class="btn btn-primary less-rounded">Yes</button><button class="btn btn-cancel less-rounded" onclick="$(this).closest('.popover').popover('hide');">No</button>`}).on("click",function(){t(this).popover("show")}).find(".btn-text").text("Reset Profile Image"),t("body").on("click",".reset-profile-image .btn-primary",()=>{["imgUrl","info"].forEach(n=>delete m[n]),GM_setValue("customProfileImage",m),l?.remove(),u.success("Custom profile image has been reset."),s.popover("destroy").popover({trigger:"hover",container:"body",placement:"bottom",html:!0,template:'<div class="popover set-profile-image" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',content:"Showcase your favorite movie, show, season or episode and make it your profile header image! Here's how:<br><br><ol><li>Go to any <b>movie</b>, <b>show</b>, <b>season</b>, or <b>episode</b> page.</li><li>Click <b>Set Profile Image</b> in the sidebar.</li></ol>"}).off("click").find(".btn-text").text("Set Profile Image"),d.addClass("slim").find("> :is(.shade, .shadow-full-width)").removeClass("shade shadow-full-width").addClass("poster-bg-wrapper").end().find("> #fanart-info").remove()})}function i(d){const s=d.css("background-image").match(/url\("?(?!.+?placeholders)(.+?)"?\)/)?.[1],n=t('[href="/vip/cover"]'),p=f=>{n.has(".fa").parent().addClass("locked").find(".text").unwrap().append(`<div class="under-action">${["No fanart available","Already set"][f]}</div>`),n.not(":has(.fa)").off("click").on("click",b=>b.preventDefault()).css({color:"#bbb"}).find(".text").wrap("<s></s>")};s?s===m.imgUrl?p(1):n.on("click",f=>{f.preventDefault(),p(1),m.imgUrl=s,m.info={url:location.pathname,title:t("head title").text().match(/(.+?)(?: \([0-9]{4}\))? - Trakt/)[1],year:t("#summary-wrapper .year").text()},GM_setValue("customProfileImage",m),l?.remove(),l=o(),u.success("Fanart is now set as custom profile image.")}):p(0)}function o(){if(m.imgUrl)return GM_addStyle(`
body.users.is-self #cover-wrapper:not(:has(> #watching-now-wrapper)) > .full-bg {
  background-image: url("${m.imgUrl}") !important;
}
@media (width <= 767px) and (orientation: portrait) {
  body.users.is-self #cover-wrapper:not(:has(> #watching-now-wrapper)) > .container {
    background-color: revert !important;
  }
}

body:is(.dashboard, .settings, .authorized_applications, .applications) #results-top-wrapper .poster-bg {
  background-image: url("${m.imgUrl}") !important;
  background-size: cover !important;
  background-position: 50% 20% !important;
  opacity: 0.7 !important;
  filter: revert !important;
}
  `)}})(),gmStorage["2hc6zfyy"]&&(async()=>{"use strict";let t,r,u,m;const l={toastOnSuccess:!0,cronExpr:"@weekly",lastRun:{},...GM_getValue("scheduledEmailDataExports")};GM_setValue("scheduledEmailDataExports",l);const v=Object.freeze({_DEFAULT_PREFIX:GM_info.script.name.replace("Trakt.tv","Userscript")+": ",_DEFAULT_TOAST:!0,_printMsg(i,o,d,{data:s,prefix:n=v._DEFAULT_PREFIX,toast:p=v._DEFAULT_TOAST}={}){d=n+d,console[i](d,s||""),p&&r[o](d+(s?" See console for details.":""))},info:(i,o)=>v._printMsg("info","info",i,o),success:(i,o)=>v._printMsg("info","success",i,{...o,toast:l.toastOnSuccess}),warning:(i,o)=>v._printMsg("warn","warning",i,o),error:(i,o)=>v._printMsg("error","error",i,o)});window.addEventListener("turbo:load",()=>{if(t??=unsafeWindow.jQuery,r??=unsafeWindow.toastr,u??=unsafeWindow.Cookies?.get("trakt_userslug"),!t||!r||!u)return;try{m??=new Cron(l.cronExpr,{timezone:Intl.DateTimeFormat().resolvedOptions().timeZone})}catch(o){v.error("Invalid cron expression. Aborting..",{data:o});return}const i=new Date;(!l.lastRun[u]||m.nextRun(l.lastRun[u])<=i)&&t.post("/settings/export_data").done(()=>{l.lastRun[u]=i.toISOString(),GM_setValue("scheduledEmailDataExports",l),v.success("Success. Your data export is processing. You will receive an e-mail when it is ready.")}).fail(o=>{o.status===409?(l.lastRun[u]=i.toISOString(),GM_setValue("scheduledEmailDataExports",l),v.warning("Failed. Cooldown from previous export is still active. Will retry on next scheduled data export.")):v.error(`Failed with status: ${o.status}. Reload page to try again.`,{data:o})})})})(),gmStorage["71cd9s61"]&&(async()=>{"use strict";let t,r;u(),document.addEventListener("turbo:load",()=>{if(!/^\/people\/[^\/]+$/.test(location.pathname)||(t??=unsafeWindow.jQuery,r??=unsafeWindow.toastr,!t||!r))return;let m;t('<button id="btn-pronounce-name"><div class="audio-animation fade"><div class="bar-1"></div><div class="bar-2"></div><div class="bar-3"></div></div><div class="fa fa-volume fade in"></div></button>').appendTo(t("#summary-wrapper .mobile-title h1")).tooltip({title:"Pronounce Name",container:"body",placement:"top",html:!0}).on("click",async function(){if(t(this).tooltip("hide"),!m){unsafeWindow.showLoading?.();const l=t('body > [itemtype$="Person"] > meta[itemprop="name"]').attr("content"),v=await GM.xmlHttpRequest({url:`https://forvo.com/search/${encodeURIComponent(l)}`}),i=new DOMParser().parseFromString(v.responseText,"text/html"),o=t(i).find("body > script").text().match(/_AUDIO_HTTP_HOST='(.+?)'/)?.[1],d=t(i).find('[onclick^="Play"]').attr("onclick")?.match(/Play\([0-9]+,'(.*?)','(.*?)',(?:true|false),'(.*?)','(.*?)'/)?.slice(1).map(atob);if(unsafeWindow.hideLoading?.(),!d?.length){r.error(`Userscript | Actor Pronunciation Helper: Could not find a pronunciation for ${l} on forvo.com`);return}const s=d[0]?`/mp3/${d[0]}`:null,n=d[1]?`/ogg/${d[1]}`:null,p=d[2]?`/audios/mp3/${d[2]}`:null,f=d[3]?`/audios/ogg/${d[3]}`:null;m??=new Audio("https://"+o+(f??p??n??s)),t(m).off("ended").on("ended",()=>{setTimeout(()=>{t(this).find(".audio-animation").removeClass("in"),setTimeout(()=>t(this).find(".fa").addClass("in"),100)},100)})}t(this).find(".fa").removeClass("in"),setTimeout(()=>{t(this).find(".audio-animation").addClass("in"),m.load(),m.play()},200)})},{capture:!0});function u(){GM_addStyle(`
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
  /* transition: color 0.2s; */
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
  /* transition: transform 0.3s ease-out; */
}

#btn-pronounce-name .in .bar-1 { animation: lineWave-1 .4s .3s infinite alternate; }
#btn-pronounce-name .in .bar-2 { animation: lineWave-2 .3s .2s infinite alternate; }
#btn-pronounce-name .in .bar-3 { animation: lineWave-3 .35s .25s infinite alternate; }

@keyframes lineWave-1 { from { transform: scaleY(0.24); } to { transform: scaleY(0.85); } }
@keyframes lineWave-2 { from { transform: scaleY(0.27); } to { transform: scaleY(0.98); } }
@keyframes lineWave-3 { from { transform: scaleY(0.24); } to { transform: scaleY(0.80); } }
  `)}})(),gmStorage.brzmp0a9&&(async()=>{"use strict";GM_addStyle(`
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
`),(r=>document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r())(()=>{const r=Object.getOwnPropertyDescriptor(unsafeWindow.jQuery.fn,"mCustomScrollbar");r.value=function(u){return this},Object.defineProperty(unsafeWindow.jQuery.fn,"mCustomScrollbar",r)}),document.addEventListener("turbo:load",()=>{document.querySelector("#info-wrapper .season-links .links .selected")?.scrollIntoView({block:"nearest",inline:"start"})},{capture:!0}),(r=>document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r())(()=>{const r=Object.getOwnPropertyDescriptor(unsafeWindow.jQuery.fn,"tooltip"),u=r.value;r.value=function(m){return m?.container&&this.closest(".popover, #ondeck-wrapper, #progress-grid-wrapper").length&&delete m.container,u.apply(this,arguments)},Object.defineProperty(unsafeWindow.jQuery.fn,"tooltip",r)}),GM_addStyle(`
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
`),window.addEventListener("turbo:load",()=>{const r=unsafeWindow.jQuery("body.touch-device #info-wrapper:has(.sidebar)");r.swipe({excludedElements:"#summary-ratings-wrapper .stats, #info-wrapper .season-links .links, #actors .posters",swipeRight:(u,m,l,v,i,o)=>o[0].start.x<50&&r.addClass("with-mobile-sidebar"),swipeLeft:(u,m,l,v,i,o)=>r.removeClass("with-mobile-sidebar")})}),window.addEventListener("turbo:load",()=>{document.querySelectorAll("#header-search-type .dropdown-menu li:has(~ .divider) a").forEach((r,u)=>{unsafeWindow.Mousetrap.bind(`alt+${u+1}`,()=>r.click()),unsafeWindow.Mousetrap(document.getElementById("header-search-query")).bind(`alt+${u+1}`,()=>r.click())})});const t=()=>{unsafeWindow.jQuery('.readmore:not([id^="rmjs-"])').filter((u,m)=>unsafeWindow.jQuery(m).height()>350).readmore({embedCSS:!1,collapsedHeight:300,speed:200,moreLink:'<a href="#">Read more...</a>',lessLink:'<a href="#">Read less...</a>',afterToggle:(u,m,l)=>m.closest("#sortable-grid").length&&unsafeWindow.$grid?.isotope()}),requestAnimationFrame(()=>unsafeWindow.$grid?.isotope())};Object.defineProperty(unsafeWindow,"renderReadmore",{get:()=>t,set:()=>{},configurable:!0}),GM_addStyle(`
.personal-list .list-description {
  overflow-wrap: anywhere;
}
`),(r=>document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r())(()=>{const r=Object.getOwnPropertyDescriptor(unsafeWindow.jQuery.fn,"chosen"),u=r.value;r.value=function(m){return this.attr("id")==="filter-network_ids"&&(m.max_shown_results=200),u.apply(this,arguments)},Object.defineProperty(unsafeWindow.jQuery.fn,"chosen",r)}),(r=>document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r())(()=>{const r=unsafeWindow.jQuery;r&&r(document).on("ajaxSend",(u,m,l)=>{if(/\/lists\/[\d]+\/like/.test(l.url)){const v=new URLSearchParams(l.data).get("trakt_id"),i=r(`[data-list-id="${v}"] > .like .count-number`),o=i.text(),d=l.url.includes("/remove");r(document).one("ajaxSuccess",(s,n,p)=>{l.url===p.url&&i.text(unsafeWindow.numeral(o)[d?"subtract":"add"](1).format("0,0"))})}})}),(r=>document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r())(()=>{const r=unsafeWindow.jQuery;r&&(r(document).on("auxclick",".btn-watch .view-all",function(u){u.preventDefault(),GM_openInTab(location.origin+r(this).attr("data-url"),{insert:!0,setParent:!0})}),r(document).on("mousedown mouseup","#header-search-autocomplete-results .selected",function(u){u.which===2&&!r(u.target).closest("a").length&&(u.type==="mousedown"?u.preventDefault():(unsafeWindow.searchModifierKey=!0,r(this).trigger("click")))}))}),document.addEventListener("keydown",r=>{r.ctrlKey&&r.key==="Enter"&&r.target.closest?.("#header-search-query")&&(r.preventDefault(),r.stopPropagation(),r.target.dispatchEvent(new KeyboardEvent("keydown",{key:"Enter",keyCode:13,metaKey:!0,bubbles:!0,cancelable:!0})))},{capture:!0}),GM_addStyle(`
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
`),document.addEventListener("turbo:load",()=>{/^\/people\/[^\/]+$/.test(location.pathname)&&unsafeWindow.jQuery?.("#filter-fade-hide .dropdown-menu li.typer:is(.season, .episode, .person) a.selected").removeClass("selected")},{capture:!0}),window.addEventListener("turbo:load",()=>unsafeWindow.jQuery?.(".feed-icon.csv").off("click")),GM_addStyle(`
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
`),(r=>document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r())(()=>{unsafeWindow.jQuery?.(document).on("ajaxSuccess",(r,u,m)=>{m.url.endsWith("/dashboard/schedule")&&unsafeWindow.jQuery("#schedule-wrapper .btn-watch-now:not([data-source-counts])").attr("data-source-counts","{}"),/\/(dashboard\/on_deck|progress_item\/watched)\/\d+$/.test(m.url)&&unsafeWindow.posterGridTooltips?.()})}),GM_addStyle(`
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
`),GM_addStyle(`
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
`),(r=>document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r())(()=>{const r=unsafeWindow.jQuery;r&&r(document).on("ajaxSuccess",(u,m,l)=>{if(l.url.endsWith("/rate")){const v=new URLSearchParams(l.data),[i,o,d]=["type","trakt_id","stars"].map(s=>v.get(s));unsafeWindow[i+"s"].ratings[o]=d,unsafeWindow.compressedCache.set(`ratings_${i}s`,unsafeWindow[i+"s"].ratings),unsafeWindow.addOverlays()}else if(l.url.endsWith("/rate/remove")){const v=new URLSearchParams(l.data),i=v.get("type");unsafeWindow.compressedCache.set(`ratings_${i}s`,unsafeWindow[i+"s"].ratings),unsafeWindow.addOverlays()}})}),document.addEventListener("click",r=>{r.target.closest(".toggle-feeds")?(r.stopPropagation(),document.querySelector(".toggle-feeds-wrapper")?.classList.toggle("open")):r.target.closest(".toggle-subnav-options")&&(r.stopPropagation(),document.querySelector(".toggle-subnav-wrapper")?.classList.toggle("open"))},!0),(r=>document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r())(()=>{["remove","intersection","move","uniq"].forEach(r=>{const u=Object.getOwnPropertyDescriptor(Array.prototype,r);u&&(u.enumerable=!1,Object.defineProperty(Array.prototype,r,u))})}),GM_addStyle(`
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
`)})(),gmStorage.cs1u5z40&&(async()=>{"use strict";let t,r,u,m,l,v,i,o,d;Chart.defaults.borderColor="rgb(44 44 44 / 0.5)";const s=new Intl.NumberFormat("en",{notation:"compact",maximumFractionDigits:1});s.formatTLC=a=>s.format(a).toLowerCase(),e(),document.addEventListener("turbo:load",async()=>{/^\/shows\/[^/]+\/seasons\/[^/]+$/.test(location.pathname)&&(t??=unsafeWindow.jQuery,r??=unsafeWindow.userscriptTraktAPIModule?.isFulfilled?await unsafeWindow.userscriptTraktAPIModule:null,t&&(u=t("#seasons-episodes-sortable"),u.length&&(m=location.pathname.includes("/seasons/"),l=!location.pathname.includes("/seasons/0"),v=m?a=>`${a.seasonNum}x${String(a.episodeNum).padStart(2,"0")} ${a.watched?"\u2714":"\u2718"}`:a=>`S. ${a.seasonNum} ${a.watched?a.watched==100?"\u2714":`(${a.watched}%)`:"\u2718"}`,i=null,o=[],d=!0,!(!m&&+t(".season-count").text().split(" ")[0]<4||location.pathname.includes("/alternate/")&&location.pathname.split("/").filter(Boolean).length<6)&&(u.on("arrangeComplete",()=>{u.data("isotope")&&(i?p():n())}),t(document).off("ajaxSuccess.userscript48372").on("ajaxSuccess.userscript48372",(a,c,w)=>{w.url.includes("/rate")&&i&&p()})))))},{capture:!0});function n(){const a=t('<div id="seasons-episodes-chart-wrapper"><canvas></canvas></div>').insertBefore(u).children()[0];i=new Chart(a.getContext("2d"),{type:"line",data:T(),options:C()});const c=new IntersectionObserver(w=>{w.forEach(h=>{h.isIntersecting&&(c.disconnect(),document.hidden?t(document).one("visibilitychange",p):p())})},{threshold:1});c.observe(a),a.addEventListener("click",w=>{const h=i.getElementsAtEventForMode(w,"nearest",{axis:"x",intersect:!1},!0);if(!h.length)return;const y=h.sort((k,g)=>Math.abs(k.element.y-w.layerY)-Math.abs(g.element.y-w.layerY))[0];if(Math.abs(y.element.y-w.layerY)<10){const k=`${o[y.index].urlFull}${y.datasetIndex===3?"/comments":""}`;GM_openInTab(k,{active:!0,insert:!0})}else i.isZoomedOrPanned()&&i.resetZoom("active")})}async function p(){const a=await f();JSON.stringify(o)!==JSON.stringify(a)&&(o=a,i.data=T(),i.options=C(),i.update(),d&&(d=!1))}function f(){const a=u.data("isotope").filteredItems.filter(c=>l?c.element.dataset.seasonNumber!=="0":!0).map(async c=>{const w={generalRating:c.sortData.percentage,votes:c.sortData.votes,watchers:c.sortData.watchers,episodeNum:c.element.dataset.number||null,seasonNum:c.element.dataset.seasonNumber,urlFull:t(c.element).find('meta[itemprop="url"]').attr("content"),personalRating:t(c.element).find(".corner-rating > .text").text()||null,watched:t(c.element).find("a.watch.selected").attr("data-percentage")??0,releaseDate:t(c.element).find(".percentage").attr("data-earliest-release-date")};if(m)w.mainTitle=t(c.element).find(".under-info .main-title").text(),w.comments=t(c.element).find('.episode-stats > a[data-original-title="Comments"]').text()||0;else if(w.mainTitle=t(c.element).find('div[data-type="season"] .titles-link h3').text(),r){const h=await r.seasons.comments({id:c.element.dataset.showId,season:w.seasonNum,pagination:!0,limit:1});w.comments=h.pagination.item_count}else{const h=await fetch(c.element.dataset.url+".json");if(!h.ok)throw new Error(`XHR for: ${h.url} failed with status: ${h.status}`);w.comments=(await h.json()).stats.comment_count}return w});return Promise.all(m?a:a.reverse())}function b(a,c,w,...h){if(!a)return h.pop().color;const{ctx:y,chartArea:k,scales:g}=a.chart;if(k){if(y[c]??={},!y[c].gradient||y[c].height!==k.height||y[c].yAxisMin!==g[w].min||y[c].yAxisMax!==g[w].max){y[c].height=k.height,y[c].yAxisMin=g[w].min,y[c].yAxisMax=g[w].max;let x=g[w].max-g[w].min;x=x?g[w].max/x:1,x=k.bottom*x,y[c].gradient=y.createLinearGradient(0,x,0,k.top),h.forEach($=>y[c].gradient.addColorStop($.offset,$.color))}return y[c].gradient}}function T(){return{labels:o.map(v),datasets:[{label:"Personal Rating",data:o.map(a=>a.personalRating?a.personalRating*10:null),yAxisID:"yAxisRating",borderColor:a=>b(a,"_ratingPersonal","yAxisRating",{offset:0,color:"rgb(97 97 97 / 0.6)"},{offset:.1,color:"rgb(97 97 97 / 0.6)"},{offset:1,color:"rgb(175 2 0)"}),backgroundColor:a=>b(a,"_ratingPersonal","yAxisRating",{offset:0,color:"rgb(97 97 97 / 0.6)"},{offset:.1,color:"rgb(97 97 97 / 0.6)"},{offset:1,color:"rgb(175 2 0)"})},{label:"General Rating",data:o.map(a=>a.generalRating),yAxisID:"yAxisRating",fill:{target:"-1",above:`rgb(255 0 0 / ${t("body").hasClass("dark-knight")?.15:.3})`,below:`rgb(0 255 0 / ${t("body").hasClass("dark-knight")?.15:.3})`},borderColor:a=>b(a,"_ratingGeneral","yAxisRating",{offset:0,color:"rgb(97 97 97 / 0.6)"},{offset:.1,color:"rgb(97 97 97 / 0.6)"},{offset:1,color:"rgb(225 31 117)"}),backgroundColor:a=>b(a,"_ratingGeneral","yAxisRating",{offset:0,color:"rgb(97 97 97 / 0.6)"},{offset:.1,color:"rgb(97 97 97 / 0.6)"},{offset:1,color:"rgb(225 31 117)"})},{label:"Watchers",data:o.map(a=>a.watchers),yAxisID:"yAxisWatchers",borderColor:a=>b(a,"_watchers","yAxisWatchers",{offset:0,color:"rgb(154 67 201 / 0.2)"},{offset:1,color:"rgb(154 67 201)"}),backgroundColor:a=>b(a,"_watchers","yAxisWatchers",{offset:0,color:"rgb(154 67 201 / 0.2)"},{offset:1,color:"rgb(154 67 201)"})},{label:"Comments",data:o.map(a=>a.comments),yAxisID:"yAxisComments",borderColor:a=>b(a,"_comments","yAxisComments",{offset:0,color:"rgb(54 157 226 / 0.2)"},{offset:1,color:"rgb(54 157 226)"}),backgroundColor:a=>b(a,"_comments","yAxisComments",{offset:0,color:"rgb(54 157 226 / 0.2)"},{offset:1,color:"rgb(54 157 226)"})}]}}function C(){return{responsive:!0,maintainAspectRatio:!1,interaction:{mode:"nearest",axis:"x",intersect:!1},animation:{delay:a=>a.type==="data"&&a.mode==="default"?(d?500:0)+a.dataIndex*(750/Math.max(o.length-1,1))+a.datasetIndex*100:0},scales:{x:{offset:!0},yAxisRating:{type:"linear",position:"left",offset:!0,suggestedMin:60,max:100,title:{display:!0,text:"Rating"},grid:{color:a=>a.tick.value%10?Chart.defaults.borderColor:"rgb(55 55 55)"},ticks:{callback:a=>`${a}%`}},yAxisWatchers:{type:"linear",position:"right",offset:!0,min:0,suggestedMax:10,title:{display:!0,text:"Watchers"},grid:{drawOnChartArea:!1},ticks:{callback:a=>s.formatTLC(a)}},yAxisComments:{type:"linear",position:"right",offset:!0,min:0,suggestedMax:10,title:{display:!0,text:"Comments"},grid:{drawOnChartArea:!1}}},plugins:{tooltip:{usePointStyle:!0,boxPadding:5,backgroundColor:"rgb(0 0 0 / 0.5)",caretSize:10,padding:{x:18,y:6},titleFont:{size:13,weight:"bold"},callbacks:{title:a=>{let c=o[a[0].parsed.x].mainTitle;return c=c.length>20?c.slice(0,20).trim()+"...":c,`${a[0].label}${c?`
${c}`:""}`},label:a=>{const c=a.parsed.x,w=a.parsed.y,h=unsafeWindow.userscriptAvgSeasonEpisodeRatings;return a.datasetIndex===0?`${w/10}${h?.personal?.average?`  (avg: ${h.personal.average.toFixed(1)})`:""}`:a.datasetIndex===1?`${w}%  (${s.formatTLC(o[c].votes)} v.)${h?.general?`  (avg: ${h.general.average?Math.round(h.general.average):"--"}%)`:""}`:a.datasetIndex===2?`${s.formatTLC(w)}${o[0].watchers?`  (${Math.round(w*100/o[0].watchers)}%)`:""}`:`${w}`},labelColor:a=>({borderColor:a.dataset.borderColor(),backgroundColor:a.dataset.backgroundColor()}),footer:a=>{const c=o[a[0].parsed.x].releaseDate;return c?unsafeWindow.formatDate?.(c)||c:void 0}}},legend:{labels:{usePointStyle:!0,filter:(a,c)=>c.datasets[a.datasetIndex].data.some(w=>w!==null)}},filler:{propagate:!1},zoom:{zoom:{mode:"x",drag:{enabled:!0,threshold:0}},limits:{x:{minRange:8}}}}}}function e(){GM_addStyle(`
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
  `)}})(),gmStorage.fyk2l3vj&&(async()=>{"use strict";let t,r,u;const m=Object.freeze({_DEFAULT_PREFIX:GM_info.script.name.replace("Trakt.tv","Userscript")+": ",_DEFAULT_TOAST:!0,_printMsg(s,n,p,{data:f,prefix:b=m._DEFAULT_PREFIX,toast:T=m._DEFAULT_TOAST}={}){p=b+p,console[s](p,f||""),T&&r[n](p+(f?" See console for details.":""))},info:(s,n)=>m._printMsg("info","info",s,n),success:(s,n)=>m._printMsg("info","success",s,n),warning:(s,n)=>m._printMsg("warn","warning",s,n),error:(s,n)=>m._printMsg("error","error",s,n)}),l={...GM_getValue("enhancedTitleMetadata")};GM_setValue("enhancedTitleMetadata",l),d(),document.addEventListener("turbo:load",async()=>{if(!/^\/(shows|movies)\//.test(location.pathname)||(t??=unsafeWindow.jQuery,r??=unsafeWindow.toastr,u??=unsafeWindow.userscriptTraktAPIModule?.isFulfilled?await unsafeWindow.userscriptTraktAPIModule:null,!t||!r))return;const s=t("#overview .additional-stats > li"),n=location.pathname.split("/").filter(Boolean);if(!s.length)return;const p=t("#summary-wrapper .year");p.parent().is("a")&&p.insertAfter(p.parent()),p.wrapAll(`<a href="/search/${n[0]}?years=${p.text().slice(0,4)}-${p.text().slice(-4)}"></a>`),t("#summary-wrapper div.certification").wrap(`<a href="${t("#external-link-imdb").attr("href").split("/episodes")[0]}/parentalguide"></a>`);const b=s.filter((g,x)=>t(x).find("label").text().toLowerCase()==="writers");b.find("label").wrap(`<a href="/search/${n[0]}?query=%22${b.find("a:not(.writers-expand)").get().map(g=>g.textContent).join("%22+%22")}%22&fields=people"></a>`);const T=s.filter(':has([itemprop="genre"])'),C=[];T.find('[itemprop="genre"]').each((g,x)=>{C[g]=t(x).text().toLowerCase().replaceAll(" ","-"),t(x).wrap(`<a href="/search/${n[0]}?genres=${C[g]}"></a>`)}),C.length>1&&T.find("label").wrap(`<a href="/search/${n[0]}?genres=+${C.join(",+")}"></a>`);const e=s.filter((g,x)=>t(x).find("label").text().toLowerCase()==="country");let a;if(e.length){const g=await v(),x=e.contents().get(-1)?.textContent;if(a=g[x],a){const $=unsafeWindow.watchnowAllCountries?.[a]?.image;$&&e.children().last().after(`<img class="country-flag" src="${$}">`),e.contents().filter((S,M)=>!t(M).is("meta, label")).wrapAll(`<a href="/search/${n[0]}?countries=${a}"></a>`)}else l.allCountriesMap=null,GM_setValue("enhancedTitleMetadata",l),m.error("Failed to match title country. Cached countries have been cleared. Reload page to try again.")}const c=s.filter((g,x)=>t(x).find("label").text().toLowerCase().startsWith("language")),w={};if(c.length){const g=await i(),x=Object.fromEntries(g);let $=c.contents().get(-1).textContent;if(g.forEach(([S,M],_)=>{const L=new RegExp(`${RegExp.escape(M)}(, |$)`);L.test($)&&(w[$.indexOf(M)]=S,$=$.replace(L,R=>" ".repeat(R.length)))}),$.trim())l.allLanguagesArrSorted=null,GM_setValue("enhancedTitleMetadata",l),m.error(`Failed to match all title languages (ORIGINAL: ${c.contents().get(-1).textContent} REMAINDER: ${$.trim()}). Cached languages have been cleared. Reload page to try again.`);else{const S=Object.values(w);c.contents().last().replaceWith(S.map(M=>`<a href="/search/${n[0]}?languages=${M}">${x[M]}</a>`).join(", ")),S.length>1&&c.find("label").wrap(`<a href="/search/${n[0]}?languages=+${S.join(",+")}"></a>`)}}const h=s.filter((g,x)=>t(x).find("label").text().toLowerCase().startsWith("network")),y=s.filter((g,x)=>/airs|aired|premiered/i.test(t(x).find("label").text())).first();if(h.length&&n[3]!=="all"){const g={},x=await o(),$=Object.fromEntries(x);let S=h.contents().get(-1).textContent;if(x.forEach(([M,{name:_,countryId:L}],R)=>{const H=new RegExp(`${RegExp.escape(_)}(, |$)`);H.test(S)&&(L===a||Object.hasOwn(w,L)||_!==x[R+1]?.[1].name)&&(g[S.indexOf(_)]=M,S=S.replace(H,A=>" ".repeat(A.length)))}),S.trim())l.allNetworksArrSorted=null,GM_setValue("enhancedTitleMetadata",l),m.error(`Failed to match all title networks (ORIGINAL: ${h.contents().get(-1).textContent} REMAINDER: ${S.trim()}). Cached networks have been cleared. Reload page to try again.`);else{const M=Object.values(g);h.contents().last().replaceWith(M.map(_=>`<a href="/search/shows?network_ids=${_}">${$[_].name}${$[_].countryId?` (${$[_].countryId.toUpperCase()})`:""}</a>`).join("")),M.length>1&&(h.find("label").wrap(`<a href="/search/shows?network_ids=${M.join(",")}"></a>`),t(`<a href onclick="$(this).hide(); $(this).next().show(); return false;"> + ${M.length-1} more</a>`).insertAfter(h.children().eq(1)).nextAll().wrapAll('<span style="display: none;"></span>')),h.find("a:not(:has(label), [onclick])").slice(1).before(", ")}}else if(y.text().includes(" on ")&&n[3]!=="all"){const g=await o(),x=y.contents().last().text().split(" on ")[1],$=x?g.find(([S,{name:M,countryId:_}],L)=>new RegExp(`${RegExp.escape(M)}(, |$)`).test(x)&&(_===a||Object.hasOwn(w,_)||M!==g[L+1]?.[1].name)):null;$?(y.contents().last().remove(),y.append(` on <a href="/search/shows?network_ids=${$[0]}">${$[1].name}${$[1].countryId?` (${$[1].countryId.toUpperCase()})`:""}</a>`)):(l.allNetworksArrSorted=null,GM_setValue("enhancedTitleMetadata",l),m.error(`Failed to match title network (${x}). Cached networks have been cleared. Reload page to try again.`))}const k=s.filter((g,x)=>t(x).find("label").text().toLowerCase().startsWith("studio"));if(k.length)if(u){let g=!1;const x=async function($){if(g)return;g=!0,$?.preventDefault(),unsafeWindow.showLoading?.();const S=await u[n[0]].studios({id:t(".summary-user-rating").attr(`data-${n[0].slice(0,-1)}-id`)}),M=S.map(_=>_.ids.trakt).join();if(unsafeWindow.hideLoading?.(),$){const _=`/search/${n[0]}?studio_ids=${t(this).find("label").length?M:S[0].ids.trakt}`;$.type==="click"?location.href=_:$.originalEvent.button===1&&GM_openInTab(location.origin+_,{insert:!0,setParent:!0})}k.children().eq(0).attr("href",`/search/${n[0]}?studio_ids=${M}`),k.children().eq(1).attr("href",`/search/${n[0]}?studio_ids=${S[0].ids.trakt}`),k.find(".studios-more").html(S.slice(1).map(_=>`, <a href="${_.ids.trakt}">${_.name}</a>`))};k.find("label").wrap(t('<a href="#"></a>').one("click auxclick",x)),k.contents().eq(1).wrap(t('<a href="#"></a>').one("click auxclick",x)),k.find(".studios-expand").one("click",()=>x())}else{const g=new Set,x=k.find(".studios-more"),$=k.find(".studios-expand"),S=x.text().split(", ").slice(1),M=+$.text().match(/\d+/)?.[0]||null,_=H=>fetch("/autocomplete/studios?query="+encodeURIComponent(H)).then(A=>A.json()).then(A=>Object.fromEntries(A.map(({label:W,value:D,tag:P})=>[W,+D,P?.toLowerCase()??null]).sort(([W,D,P],[E,I,O])=>W===E?(P&&(P===a||Object.hasOwn(w,P)))-(O&&(O===a||Object.hasOwn(w,O)))||I-D:0))),L=async function(H){H?.preventDefault(),t(this).off(),unsafeWindow.showLoading?.();const A=t(this).text(),W=await _(A),D=W[A];if(unsafeWindow.hideLoading?.(),D){g.add(D);const P=`/search/${n[0]}?studio_ids=${D}`;H&&(H.type==="click"?location.href=P:H.originalEvent.button===1&&GM_openInTab(location.origin+P,{insert:!0,setParent:!0})),t(this).attr("href",P)}else m.error("Failed to match title studio: "+A,{data:W})},R=async()=>{if(g.size>1)return;unsafeWindow.showLoading?.();const H=await Promise.all(S.map(W=>_(W).then(D=>[W,D])));let A=-1;unsafeWindow.hideLoading?.(),x.html(H.map(([W,D],P)=>{if(P<=A)return null;let E;for(let I=P;I<H.length;I++)I!==P&&(W+=", "+H[I][0]),D[W]&&(A=I,E=[W,D[W]]);if(E)return g.add(E[1]),`, <a href="/search/${n[0]}?studio_ids=${E[1]}">${E[0]}</a>`;throw m.error("Failed to match all title studios. Could not match: "+H[P][0],{data:D}),new Error("Failed to match all title studios.")}).join(""))};k.contents().eq(1).wrap(t('<a href="#"></a>').on("click auxclick",L)),M&&(M===1?x.text(", ").append(t(`<a href="#">${S.join(", ")}</a>`).on("click auxclick",L)):M===S.length?(x.empty(),S.forEach(H=>x.append(", ",t(`<a href="#">${H}</a>`).on("click auxclick",L)))):$.one("click",R),k.find("label").wrap('<a href="#"></a>').parent().on("click auxclick",async function(H){H.preventDefault(),t(this).off(),await Promise.all([...k.find('a[href="#"]:not(:has(label), .studios-expand)').get().map(W=>L.call(W)),R()]);const A=`/search/${n[0]}?studio_ids=${Array.from(g).join(",")}`;H.type==="click"?location.href=A:H.originalEvent.button===1&&GM_openInTab(location.origin+A,{insert:!0,setParent:!0}),t(this).attr("href",A)}))}},{capture:!0});async function v(){if(!l.allCountriesMap){const s=await fetch("/search/movies").then(n=>n.text()).then(n=>new DOMParser().parseFromString(n,"text/html"));l.allCountriesMap=JSON.stringify(Object.fromEntries(t(s).find("#filter-countries").children().get().map(n=>[t(n).text(),t(n).attr("value").toLowerCase()]))),GM_setValue("enhancedTitleMetadata",l)}return JSON.parse(l.allCountriesMap)}async function i(){if(!l.allLanguagesArrSorted){const s=await fetch("/search/movies").then(n=>n.text()).then(n=>new DOMParser().parseFromString(n,"text/html"));l.allLanguagesArrSorted=JSON.stringify(t(s).find("#filter-languages").children().get().map(n=>[t(n).attr("value"),t(n).text()]).sort(([,n],[,p])=>p.length-n.length)),GM_setValue("enhancedTitleMetadata",l)}return JSON.parse(l.allLanguagesArrSorted)}async function o(){if(!l.allNetworksArrSorted){const s=await fetch("/search/shows").then(p=>p.text()).then(p=>new DOMParser().parseFromString(p,"text/html")),n=new Intl.Collator;l.allNetworksArrSorted=JSON.stringify(t(s).find("#filter-network_ids").children().get().map(p=>t(p).text()?[+t(p).attr("value"),{name:t(p).text(),countryId:t(p).attr("data-tag")?.toLowerCase()}]:null).filter(Boolean).sort(([p,{name:f,countryId:b}],[T,{name:C,countryId:e}])=>C.length-f.length||n.compare(f,C)||(e&&1)-(b&&1)||T-p)),GM_setValue("enhancedTitleMetadata",l)}return JSON.parse(l.allNetworksArrSorted)}function d(){GM_addStyle(`
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
  `)}})(),gmStorage.h8vh5z16&&(async()=>{"use-strict";const t=document.cookie.match(/(?:^|; )trakt_userslug=([^;]*)/)?.[1];t&&GM_addStyle(`
:is(#avatar-wrapper h1, .comment-wrapper .user-name) [href="/users/${t}"]::after,
#results-top-wrapper [href="/users/${t}"] + h1::after {
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
#avatar-wrapper h1 [href="/users/${t}"]::after,
#results-top-wrapper [href="/users/${t}"] + h1::after {
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
.comment-wrapper .user-name [href="/users/${t}"]::after {
  margin: -3px 0 0 5px;
  padding: 2px 4px;
  font-size: 11px;
  letter-spacing: 0;
  border-radius: 2px;
}
@media (width <= 767px) and (orientation: portrait) {
  #avatar-wrapper h1 [href="/users/${t}"]::after,
  #results-top-wrapper [href="/users/${t}"] + h1::after {
    margin: 0px 0px 3px 7px;
    padding: 3px 5px 3px 23px;
    font-size: 14px;
    background-size: 14px;
  }
}


.personal-list .comment-wrapper .user-name [href="/users/${t}"] {
  white-space: nowrap;
}
:is(#avatar-wrapper h1, #results-top-wrapper, .comment-wrapper .user-name) [href="/users/${t}"] ~ .label-vip {
  display: none !important;
}
  `)})(),gmStorage.kji85iek&&(async()=>{"use strict";let t;m(),document.addEventListener("turbo:load",()=>{t??=unsafeWindow.jQuery,t&&(unsafeWindow.ratingOverlay=r,u(),t(document).off("ajaxSuccess.userscript12944").on("ajaxSuccess.userscript12944",(l,v,i)=>{i.url.endsWith("/popular_lists")&&(u(),unsafeWindow.addOverlays())}))},{capture:!0});function r(l,v){if(!l.length){const i=l.end();i.closest(".personal-list").length&&i.hasClass("poster")&&(l=i)}l.find(".corner-rating").length||l.prepend(`<div class="corner-rating corner-rating-${v}"><div class="text">${v}</div></div>`)}function u(){t(".personal-list .poster[data-url]:not(:has(> a))").each(function(){t(this).children().wrapAll(`<a href="${t(this).attr("data-url")}"></a>`)})}unsafeWindow.userscriptAddLinksToListPreviewPosters=u;function m(){GM_addStyle(`
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
  `)}})(),gmStorage.p2o98x5r&&(async()=>{"use strict";t(),document.addEventListener("turbo:load",()=>{if(!/^\/users\/[^\/]+\/lists$/.test(location.pathname))return;const r=unsafeWindow.jQuery;if(!r)return;const u=r("#sortable-grid"),m=u.children().length?r('<hr id="all-in-one-lists-view-spacer">').insertAfter(u):void 0,l=r('<button id="all-in-one-lists-view-btn" type="button">All-in-One Lists View</button>').insertAfter(m??u);l.on("click",async()=>{l.text("Loading...").prop("disabled",!0);const v=async p=>fetch(location.pathname+p).then(f=>f.text()).then(f=>r(new DOMParser().parseFromString(f,"text/html")).find(".personal-list"));let i=r((await Promise.all(["/collaborations","/liked","/liked/official"].map(v))).flatMap(p=>p.get()));const o=r(".personal-list"),d=o.map((p,f)=>r(f).attr("data-list-id")).get();if(i=i.filter((p,f)=>!d.includes(r(f).attr("data-list-id"))),!i.length){l.text("No other lists found.");return}const s=+o.last().attr("data-rank");i.each((p,f)=>r(f).attr("data-rank",s+p+1)),i.find(".btn-list-progress").click(function(){unsafeWindow.showLoading();const p=r(this).attr("data-list-id");p&&unsafeWindow.userSettings?.user.vip?unsafeWindow.redirect(unsafeWindow.userURL("progress?list="+p)):unsafeWindow.redirect("/vip/list-progress")}).end().find(".btn-list-subscribe").click(function(){unsafeWindow.showLoading();const p=r(this).attr("data-list-id");p&&unsafeWindow.userSettings?.user.vip?r.post(`/lists/${p}/subscribe`,function(f){unsafeWindow.redirect(f.url)}).fail(function(){unsafeWindow.hideLoading(),unsafeWindow.toastr.error("Doh! We ran into some sort of error.")}):unsafeWindow.redirect("/vip/calendars")}).end().find(".collaborations-deny").on("ajax:success",function(p,f){r("#collaborations-deny-"+f.id).children().addClass("trakt-icon-delete-thick"),r("#collaborations-approve-"+f.id).addClass("off"),r("#collaborations-block-"+f.id).addClass("off")});const n=r("#btn-list-edit-lists");n.hasClass("active")&&n.trigger("click"),n.hide(),u.append(i),m?.remove(),l.remove(),unsafeWindow.genericTooltips(),unsafeWindow.vipTooltips(),unsafeWindow.shareIcons(),unsafeWindow.convertEmojis(),unsafeWindow.userscriptAddLinksToListPreviewPosters?.(),unsafeWindow.addOverlays(),unsafeWindow.$grid?.isotope("insert",i),unsafeWindow.updateListsCount(),unsafeWindow.lazyLoadImages(),unsafeWindow.renderReadmore()})},{capture:!0});function t(){GM_addStyle(`
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
  `)}})(),gmStorage.pmdf6nr9&&(async()=>{"use strict";let t,r;const u=new Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:1});u.formatTLC=s=>u.format(s).toLowerCase(),d(),document.addEventListener("turbo:load",async()=>{if(!/^\/(shows|movies)\//.test(location.pathname)||(t??=unsafeWindow.jQuery,r??=unsafeWindow.userscriptTraktAPIModule?.isFulfilled?await unsafeWindow.userscriptTraktAPIModule:null,!t))return;const s=t("#summary-wrapper"),n=s.find("#summary-ratings-wrapper"),p=n.find(".trakt-rating > a").attr("href");if(!p)return;const f=t('<div id="ratings-distribution-chart-wrapper"><canvas></canvas></div>').appendTo(s.find(".shadow-base")).find("canvas"),[b,T]=await Promise.all([m(p),l(s)]),C=()=>{new Chart(f[0].getContext("2d"),{type:"bar",data:i(b,T),options:o(b,n)})};document.hidden?t(document).one("visibilitychange",C):C()},{capture:!0});async function m(s){let n;if(r){const p=s.split("/").slice(1,-1),f=isNaN(p[1])?p[1]:t(".summary-user-rating").attr(`data-${p[0].slice(0,-1)}-id`),b=await r[p[4]??p[2]??p[0]].ratings({id:f,season:p[3],episode:p[5]});n={distribution:Object.values(b.distribution),votes:b.votes}}else{const p=await fetch(s),f=new DOMParser().parseFromString(await p.text(),"text/html");n={distribution:JSON.parse(t(f).find("#charts-wrapper script").text().match(/ratingsDistribution = (\[.*\])/)[1]),votes:t("#summary-ratings-wrapper").data("vote-count")}}return n.distribution.length===11&&(console.warn(GM_info.script.name.replace("Trakt.tv","Userscript")+": Malformed ratings distribution data.",n.distribution.toString()),n.distribution.shift()),n}function l(s){const n=s.find("> .full-screenshot"),p=async()=>{const f=n.css("background-image").match(/https.*webp/)?.[0];if(!f)return .5;const b=await GM.xmlHttpRequest({url:f,responseType:"blob",fetch:!0});if(b.status!==200)throw new Error(`XHR for: ${b.finalUrl} failed with status: ${b.status}`);const T=URL.createObjectURL(b.response),C=new Image;C.src=T,await C.decode(),URL.revokeObjectURL(T);const e=document.createElement("canvas");e.width=C.naturalWidth,e.height=C.naturalHeight;const a=e.getContext("2d");a.drawImage(C,0,0);const c=C.naturalWidth/4,w=C.naturalHeight/4,h=a.getImageData(3*c,2*w,c,w).data;let y=0,k=h.length/16;for(let g=0;g<h.length;g+=16)y+=(.299*h[g]+.587*h[g+1]+.114*h[g+2])/255;return y/k};return n.attr("style")?p():new Promise(f=>{new MutationObserver((b,T)=>{T.disconnect(),f(p())}).observe(n[0],{attributeFilter:["style"]})})}function v(s,n,p,...f){if(!s)return f.pop().color;const{ctx:b,chartArea:T,scales:C}=s.chart;if(T){if(b[n]??={},!b[n].gradient||b[n].height!==T.height||b[n].yAxisMin!==C[p].min||b[n].yAxisMax!==C[p].max){let e=C[p].max-C[p].min;e=e?C[p].max/e:1,e=T.bottom*e,b[n].gradient=b.createLinearGradient(0,e,0,T.top),f.forEach(a=>b[n].gradient.addColorStop(a.offset,a.color)),b[n].height=T.height,b[n].yAxisMin=C[p].min,b[n].yAxisMax=C[p].max}return b[n].gradient}}function i(s,n){return{labels:[...Array(10)].map((p,f)=>String(f+1)),datasets:[{label:"Votes",data:s.distribution,categoryPercentage:1,barPercentage:.97,backgroundColor:`rgba(${Array(3).fill(Math.min(n+.35,1)*255).join(", ")}, ${Math.min(n+.3,.7)})`,hoverBackgroundColor:p=>v(p,"_votes","y",{offset:0,color:`rgba(155, 66, 200, ${Math.min(n+.3,.7)})`},{offset:.9,color:`rgba(255, 0, 0, ${Math.min(n+.3,.7)})`})}]}}function o(s,n){return{responsive:!0,maintainAspectRatio:!1,minBarLength:2,interaction:{mode:"index",intersect:!1},animation:{delay:p=>p.type==="data"&&p.mode==="default"?250+p.dataIndex*(750/(s.distribution.length-1)):0},scales:{x:{display:!1},y:{display:!1,suggestedMax:10}},plugins:{tooltip:{displayColors:!1,backgroundColor:"rgba(0, 0, 0, 0.7)",caretSize:10,padding:{x:12,y:5},titleAlign:"center",titleMarginBottom:2,titleFont:{weight:"bold"},bodyAlign:"center",bodyColor:"rgb(170, 170, 170)",bodyFont:{size:11},footerAlign:"center",footerColor:p=>`hsl(0, ${p.tooltip.dataPoints[0].parsed.x*11}%, 35%)`,footerMarginTop:2,footerFont:{size:18},callbacks:{title:p=>{const f=p[0].label;return`${f} - ${unsafeWindow.ratingsText?.[f]}`},label:p=>{const f=p.parsed.y;return`${s.votes>0?(f*100/s.votes).toFixed(1):"--"}% (${u.formatTLC(f)} v.)`},footer:p=>{const f=n.find('.summary-user-rating > :not([style="display: none;"]) > [class*="rating-"]').first().attr("class")?.match(/rating-(\d+)/)?.[1];return p[0].parsed.x===f-1?"\u2764":""}}},legend:{display:!1}},onClick:(p,f)=>{if(!f.length)return;const b=f[0].index+1;n.find(".summary-user-rating:not(.popover-on)").trigger("click"),setTimeout(()=>t(`.needsclick.rating-${b}`).trigger("mouseover").trigger("click"),500)}}}function d(){GM_addStyle(`
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
  `)}})(),gmStorage.txw82860&&(async()=>{"use strict";const t=document.cookie.match(/(?:^|; )trakt_userslug=([^;]*)/)?.[1],r={historySorting:(i,[o=1,...d]=[])=>({hrefPrefix:i,entries:(s=>s.with(o,{...s.at(o),anchor:!0}))([{text:"SORT BY"},{text:"Watched Date",href:"/added"},{text:"Plays",href:"/plays"},{text:"Time Spent",href:"/time"},{text:"Title",href:"/title"},{text:"Release Date",href:"/released"},{text:"Runtime",href:"/runtime"},{text:"Popularity",href:"/popularity"},{text:"Percentage",href:"/percentage"},{text:"Votes",href:"/votes"}])}),progressSorting:(i,[o=1,...d]=[])=>({hrefPrefix:i,entries:(s=>s.with(o,{...s.at(o),anchor:!0}))([{text:"SORT BY"},{text:"Watched Date",href:"/added"},{text:"Completion %",href:"/completed"},{text:"Episodes Left",href:"/episodes"},{text:"Time Left",href:"/time"},{text:"Plays",href:"/plays"},{text:"Release Date",href:"/released"},{text:"Premiere Date",href:"/premiered"},{text:"Title",href:"/title"},{text:"Popularity",href:"/popularity"},{text:"Episode Runtime",href:"/runtime"},{text:"Total Runtime",href:"/total-runtime"},{text:"Random",href:"/random"}])}),librarySorting:(i,[o=1,...d]=[])=>({hrefPrefix:i,entries:(s=>s.with(o,{...s.at(o),anchor:!0}))([{text:"SORT BY"},{text:"Added Date",href:"/added"},{text:"Title",href:"/title"},{text:"Release Date",href:"/released"},.../\/shows/.test(i)?[{text:"Episode Count",href:"/episodes"}]:[],.../\/episodes/.test(i)?[]:[{text:"Runtime",href:"/runtime"},{text:"Popularity",href:"/popularity"}],{text:"Percentage",href:"/percentage"},{text:"Votes",href:"/votes"}])}),ratingSelection:(i,[o=1,...d]=[])=>({hrefPrefix:i,entries:(s=>s.with(o,{...s.at(o),anchor:!0}))([{text:"RATING"},{text:"All Ratings",href:"/all",submenu:r.ratingsSorting(i+"/all",d)},{text:"10 - Totally Ninja!",href:"/10",submenu:r.ratingsSorting(i+"/10",d)},{text:"9 - Superb",href:"/9",submenu:r.ratingsSorting(i+"/9",d)},{text:"8 - Great",href:"/8",submenu:r.ratingsSorting(i+"/8",d)},{text:"7 - Good",href:"/7",submenu:r.ratingsSorting(i+"/7",d)},{text:"6 - Fair",href:"/6",submenu:r.ratingsSorting(i+"/6",d)},{text:"5 - Meh",href:"/5",submenu:r.ratingsSorting(i+"/5",d)},{text:"4 - Poor",href:"/4",submenu:r.ratingsSorting(i+"/4",d)},{text:"3 - Bad",href:"/3",submenu:r.ratingsSorting(i+"/3",d)},{text:"2 - Terrible",href:"/2",submenu:r.ratingsSorting(i+"/2",d)},{text:"1 - Weak Sauce :(",href:"/1",submenu:r.ratingsSorting(i+"/1",d)}])}),ratingsSorting:(i,[o=1,...d]=[])=>({hrefPrefix:i,entries:(s=>s.with(o,{...s.at(o),anchor:!0}))([{text:"SORT BY"},{text:"Rated Date",href:"/added"},{text:"Rating",href:"/rating"},.../\/ratings\/all/.test(i)?[]:[{text:"Title",href:"/title"},{text:"Release Date",href:"/released"},.../\/(movies|shows)/.test(i)?[{text:"Runtime",href:"/runtime"},{text:"Popularity",href:"/popularity"}]:[],{text:"Percentage",href:"/percentage"},{text:"Votes",href:"/votes"}]])}),listsViewSorting:(i,[o=1,...d]=[])=>({hrefPrefix:i,entries:(s=>s.with(o,{...s.at(o),anchor:!0}))([{text:"SORT BY"},.../\/lists\?/.test(i)?[{text:"Rank",href:"rank"}]:[],.../\/liked/.test(i)?[{text:"Like Date",href:"liked"}]:[],{text:"Updated Date",href:"updated"},{text:"Title",href:"title"},{text:"Likes",href:"likes"},{text:"Comments",href:"comments"},{text:"Items",href:"items"},{text:"Random",href:"random"}])}),listSorting:(i,[o=1,...d]=[])=>({hrefPrefix:i,entries:(s=>s.with(o,{...s.at(o),anchor:!0}))([{text:"SORT BY"},{text:"Rank",href:"rank"},{text:"Added Date",href:"added"},{text:"Title",href:"title"},{text:"Release Date",href:"released"},{text:"Runtime",href:"runtime"},{text:"Popularity",href:"popularity"},{text:"Random",href:"random"},{},{text:"Trakt Percentage",href:"percentage"},{text:"Trakt Votes",href:"votes"},.../\/watchlist\?sort=/.test(i)&&t?[{text:"Rotten Tomatoes <em>(mdb)</em>",href:`https://mdblist.com/watchlist/${t}?sort=rtomatoes&sortorder=desc`,useHrefPrefix:!1},{text:"Metacritic <em>(mdb)</em>",href:`https://mdblist.com/watchlist/${t}?sort=metacritic&sortorder=desc`,useHrefPrefix:!1},{text:"MyAnimeList <em>(mdb)</em>",href:`https://mdblist.com/watchlist/${t}?sort=myanimelist&sortorder=desc`,useHrefPrefix:!1}]:[],{},{text:"My Rating",href:"my_rating"},{text:"Watched Date",href:"watched"},{text:"Collected Date",href:"collected"}])}),commentType:(i,[o=1,...d]=[])=>({hrefPrefix:i,entries:(s=>s.with(o,{...s.at(o),anchor:!0}))([{text:"TYPE"},{text:"All Types",href:"/all",submenu:r.commentSorting(i+"/all",d)},{text:"Movies",href:"/movies",submenu:r.commentSorting(i+"/movies",d)},{text:"Shows",href:"/shows",submenu:r.commentSorting(i+"/shows",d)},{text:"Seasons",href:"/seasons",submenu:r.commentSorting(i+"/seasons",d)},{text:"Episodes",href:"/episodes",submenu:r.commentSorting(i+"/episodes",d)},{text:"Lists",href:"/lists",submenu:r.commentSorting(i+"/lists",d)}])}),commentSorting:(i,[o=1,...d]=[])=>({hrefPrefix:i,entries:(s=>s.with(o,{...s.at(o),anchor:!0}))([{text:"SORT BY"},{text:"Added Date",href:"/added"},{text:"Reactions <em>(30 Days)</em>",href:"/likes_30"},{text:"Reactions <em>(All Time)</em>",href:"/likes"},{text:"Replies <em>(30 Days)</em>",href:"/replies_30"},{text:"Replies <em>(All Time)</em>",href:"/replies"},{text:"Plays",href:"/plays"},{text:"Rating",href:"/rating"}])}),hiddenItemsSorting:(i,[o=1,...d]=[])=>({hrefPrefix:i,entries:(s=>s.with(o,{...s.at(o),anchor:!0}))([{text:"SORT BY"},{text:"Title",href:"/title"},{text:"Date",href:"/data"}])}),showsMoviesCatTimePeriod:(i,[o=-1,...d]=[])=>({hrefPrefix:i,entries:(s=>s.with(o,{...s.at(o),anchor:!0}))([{text:"PERIOD"},{text:"Day",href:"/daily"},{text:"Week",href:"/weekly"},{text:"Month",href:"/monthly"},.../\/streaming/.test(i)?[]:[{text:"All Time",href:"/all"}]])})},u={'.btn-profile a[href$="/history"]':{hrefPrefix:"/users/me/history",entries:[{text:"TYPE"},{text:"All Types",href:"/all",anchor:!0},{text:"Movies",href:"/movies",submenu:r.historySorting("/users/me/history/movies")},{text:"Shows",href:"/shows",submenu:r.historySorting("/users/me/history/shows")},{text:"Episodes",href:"/episodes",submenu:r.historySorting("/users/me/history/episodes")}]},'.btn-profile a[href$="/library"]':{hrefPrefix:"/users/me/library",entries:[{text:"TYPE"},{text:"All Types",href:"/all",anchor:!0},{text:"Movies",href:"/movies",submenu:r.librarySorting("/users/me/library/movies")},{text:"Shows",href:"/shows",submenu:r.librarySorting("/users/me/library/shows")},{text:"Episodes",href:"/episodes",submenu:r.librarySorting("/users/me/library/episodes")}]},'.btn-profile a[href$="/progress"]':{hrefPrefix:"/users/me/progress",entries:[{text:"SHOWS"},{text:"Watched",href:"/watched",anchor:!0,submenu:r.progressSorting("/users/me/progress/watched")},{text:"Dropped",href:"/dropped",submenu:r.progressSorting("/users/me/progress/dropped")},{text:"Library",href:"/library",submenu:r.progressSorting("/users/me/progress/library")},...unsafeWindow.userscriptPlaybackProgressManager?[{},{text:"PLAYBACK"},{text:"All Types",href:"/playback"},{text:"Movies",href:"/playback/movies"},{text:"Episodes",href:"/playback/episodes"}]:[]]},'.btn-profile a[href$="/ratings"]':{hrefPrefix:"/users/me/ratings",entries:[{text:"TYPE"},{text:"All Types",href:"/all",anchor:!0,submenu:r.ratingSelection("/users/me/ratings/all")},{text:"Movies",href:"/movies",submenu:r.ratingSelection("/users/me/ratings/movies",[,4])},{text:"Shows",href:"/shows",submenu:r.ratingSelection("/users/me/ratings/shows",[,4])},{text:"Seasons",href:"/seasons",submenu:r.ratingSelection("/users/me/ratings/seasons",[,-1])},{text:"Episodes",href:"/episodes",submenu:r.ratingSelection("/users/me/ratings/episodes",[,-1])}]},'.btn-profile a[href$="/lists"]':{hrefPrefix:"/users/me/lists",entries:[{text:"Watchlist",href:"/users/me/watchlist",useHrefPrefix:!1,submenu:{hrefPrefix:"/users/me/watchlist?display=",entries:[{text:"TYPE"},{text:"All Types",href:"/users/me/watchlist",useHrefPrefix:!1,anchor:!0,submenu:r.listSorting("/users/me/watchlist?sort=",[3])},{text:"Movies",href:"movie",submenu:r.listSorting("/users/me/watchlist?display=movie&sort=",[3])},{text:"Shows",href:"show",submenu:r.listSorting("/users/me/watchlist?display=show&sort=",[3])},{text:"Seasons",href:"season",submenu:r.listSorting("/users/me/watchlist?display=season&sort=",[3])},{text:"Episodes",href:"episode",submenu:r.listSorting("/users/me/watchlist?display=episode&sort=",[3])}]}},{text:"Favorites",href:"/users/me/favorites",useHrefPrefix:!1,submenu:{hrefPrefix:"/users/me/favorites?display=",entries:[{text:"TYPE"},{text:"All Types",href:"/users/me/favorites",useHrefPrefix:!1,anchor:!0,submenu:r.listSorting("/users/me/favorites?sort=",[3])},{text:"Movies",href:"movie",submenu:r.listSorting("/users/me/favorites?display=movie&sort=",[3])},{text:"Shows",href:"show",submenu:r.listSorting("/users/me/favorites?display=show&sort=",[3])}]}},{},{text:"YOUR LISTS"},{text:"Personal Lists",href:"",submenu:r.listsViewSorting("/users/me/lists?sort=")},{text:"Collaborations",href:"/collaborations",submenu:r.listsViewSorting("/users/me/lists/collaborations?sort=")},{},{text:"LIKED LISTS"},{text:"Personal Lists",href:"/liked",submenu:r.listsViewSorting("/users/me/lists/liked?sort=")},{text:"Official Lists",href:"/liked/official",submenu:r.listsViewSorting("/users/me/lists/liked/official?sort=")}]},'.btn-profile a[href$="/comments"]':{hrefPrefix:"/users/me/comments",entries:[{text:"YOUR COMMENTS"},{text:"All Comments",href:"/all",anchor:!0,submenu:r.commentType("/users/me/comments/all")},{text:"Reviews",href:"/reviews",submenu:r.commentType("/users/me/comments/reviews")},{text:"Shouts",href:"/shouts",submenu:r.commentType("/users/me/comments/shouts")},{text:"Replies",href:"/replies",submenu:r.commentType("/users/me/comments/replies")},{},{text:"REACTIONS"},{text:"All Comments",href:"/liked/all",submenu:r.commentType("/users/me/comments/liked/all",[-1,-1])},{text:"Reviews",href:"/liked/reviews",submenu:r.commentType("/users/me/comments/liked/reviews",[-1,-1])},{text:"Shouts",href:"/liked/shouts",submenu:r.commentType("/users/me/comments/liked/shouts",[-1,-1])},{text:"Replies",href:"/liked/replies",submenu:r.commentType("/users/me/comments/liked/replies",[-1,-1])}]},'.btn-profile a[href$="/notes"]':{hrefPrefix:"/users/me/notes",entries:[{text:"All Types",href:"/all"},{},{text:"MEDIA ITEMS"},{text:"Movies",href:"/movies"},{text:"Shows",href:"/shows"},{text:"Seasons",href:"/seasons"},{text:"Episodes",href:"/episodes"},{text:"People",href:"/people"},{},{text:"YOUR ACTIVITIES"},{text:"History",href:"/history"},{text:"Library",href:"/collection"},{text:"Ratings",href:"/ratings"}]},'.btn-profile a[href$="/network"]':{hrefPrefix:"/users/me/network",entries:[{text:"Following",href:"/following/added"},{text:"Following <em>(Pending)</em>",href:"/following_pending/added"},{text:"Followers",href:"/followers/added"}]},'.btn-profile a[href="/widgets"]':{hrefPrefix:"/widgets",entries:[{text:"Watched",href:"/watched"},{text:"Library",href:"/library"},{text:"Profile",href:"/profile"}]},'.btn-profile a:contains("Quick Actions")':{entries:[{text:'<span class="toggle-dark-mode">Toggle Dark Mode<span class="right fa-solid fa-moon"></span></span>',onclick:"toggleDarkMode(); return false;"},{text:"Clear Search History",onclick:"showLoading(); $.post(`/users/me/clear_search_history`).done(() => { toastr.success(`Your search history was cleared.`); cacheUserData(true); }).always(hideLoading); return false;"},{text:"Re-cache Progress Data",onclick:"showLoading(); $.post(`/users/me/reset_progress_cache`).done(() => { toastr.success(`Your progress cache will be updated in a few minutes.`); }).always(hideLoading); return false;"},{text:"Re-cache Browser Data",onclick:"window.reopenOverlays = [null]; window.afterLoadingBottomMessage = `Your browser data is reset!`; showLoading(`Please wait for the caching to fully complete.`); resetUserData(); return false;"}]},'.btn-profile a[href="/settings"]':{hrefPrefix:"/settings",entries:[{text:"Advanced",href:"/advanced"},{text:"Your API Apps",href:"/oauth/applications",useHrefPrefix:!1,submenu:{entries:[{text:'<span class="hidden-xs left fa fa-book"></span>API Docs',href:"/b/api-docs"},{text:'<span class="hidden-xs left fa fa-github"></span>Developer Forum',href:"/b/dev-forum"},{text:'<span class="hidden-xs left fa trakt-icon-trakt"></span>Branding',href:"/branding"},{text:'<span class="hidden-xs left fa fa-plus-circle"></span>New Application',href:"/oauth/applications/new"}]}},{text:"Connected Apps",href:"/oauth/authorized_applications",useHrefPrefix:!1,submenu:{entries:[{text:"Activate Device",href:"/activate"}]}},{text:"Reports",href:"/reports",submenu:{hrefPrefix:"/reports",entries:[{text:"STATUS"},{text:"All Reports",href:"/all",anchor:!0},{text:"Approved",href:"/approved"},{text:"Paused",href:"/paused"},{text:"Rejected",href:"/rejected"},{text:"Pending",href:"/pending"}]}},{text:"Hidden Items",href:"/hidden",submenu:{hrefPrefix:"/settings/hidden",entries:[{text:"Dropped Shows",href:"/dropped",submenu:r.hiddenItemsSorting("/settings/hidden/dropped")},{},{text:"Progress",href:"/watched",submenu:r.hiddenItemsSorting("/settings/hidden/watched")},{text:"Library",href:"/collected",submenu:r.hiddenItemsSorting("/settings/hidden/collected")},{text:"Calendar",href:"/calendars",submenu:r.hiddenItemsSorting("/settings/hidden/calendars")},{},{text:"Rewatching",href:"/rewatching",submenu:r.hiddenItemsSorting("/settings/hidden/rewatching")},{text:"Blocked Users",href:"/comments",submenu:r.hiddenItemsSorting("/settings/hidden/comments")}]}},{text:"Plex Sync",href:"/plex"},{text:"Streaming Sync",href:"/scrobblers"},{text:"Notifications",href:"/notifications"},{text:"Sharing",href:"/sharing"},{text:"Data",href:"/data"},{text:"General",href:"",anchor:!0,submenu:{hrefPrefix:"/settings",entries:[{text:"Change Password",href:"#password"},{text:"Appearance",href:"#appearance"},{text:"Search",href:"#search"},{text:"Progress",href:"#progress"},{text:"Profile",href:"#profile"},{text:"Year in Review",href:"#yir"},{text:"Calendars",href:"#calendars"},{text:"Dashboard",href:"#dashboard"},{text:"Spoilers",href:"#spoilers"},{text:"Watch Now",href:"#watchnow"},{text:"Rewatching",href:"#rewatching"},{text:"Global",href:"#global"},{text:"Date & Time",href:"#datetime"},{text:"Account",href:"#account",anchor:!0}]}}]},':is(.btn-mobile-links, .links-wrapper) a[href^="/shows"]':{hrefPrefix:"/shows",entries:[{text:"Trending",href:"/trending"},{text:"Recommendations",href:"/recommendations"},{text:"Streaming Charts",href:"/streaming",submenu:r.showsMoviesCatTimePeriod("/shows/streaming",[1])},{text:"Anticipated",href:"/anticipated"},{text:"Popular",href:"/popular"},{text:"Favorited",href:"/favorited",submenu:r.showsMoviesCatTimePeriod("/shows/favorited")},{text:"Watched",href:"/watched",submenu:r.showsMoviesCatTimePeriod("/shows/watched")},{text:"Libraries",href:"/library",submenu:r.showsMoviesCatTimePeriod("/shows/library")}]},':is(.btn-mobile-links, .links-wrapper) a[href^="/movies"]':{hrefPrefix:"/movies",entries:[{text:"Trending",href:"/trending"},{text:"Recommendations",href:"/recommendations"},{text:"Streaming Charts",href:"/streaming",submenu:r.showsMoviesCatTimePeriod("/movies/streaming",[1])},{text:"Anticipated",href:"/anticipated"},{text:"Popular",href:"/popular"},{text:"Favorited",href:"/favorited",submenu:r.showsMoviesCatTimePeriod("/movies/favorited")},{text:"Watched",href:"/watched",submenu:r.showsMoviesCatTimePeriod("/movies/watched")},{text:"Libraries",href:"/library",submenu:r.showsMoviesCatTimePeriod("/movies/library")},{text:"Box Office",href:"/boxoffice"}]},':is(.btn-mobile-links, .links-wrapper) a[href="/calendars"]':{hrefPrefix:"/calendars",entries:[{text:"Personal",href:"/my/shows-movies",submenu:{hrefPrefix:"/calendars/my",entries:[{text:"Shows & Movies",href:"/shows-movies"},{text:"Shows",href:"/shows"},{text:"Premieres",href:"/premieres"},{text:"New Shows",href:"/new-shows"},{text:"Finales",href:"/finales"},{text:"Movies",href:"/movies"},{text:"Streaming",href:"/streaming"},{text:"DVD & Blu-ray",href:"/dvd"}]}},{text:"General",href:"/shows",submenu:{hrefPrefix:"/calendars",entries:[{text:"Shows",href:"/shows"},{text:"Premieres",href:"/premieres"},{text:"New Shows",href:"/new-shows"},{text:"Finales",href:"/finales"},{text:"Movies",href:"/movies"},{text:"Streaming",href:"/streaming"},{text:"DVD & Blu-ray",href:"/dvd"}]}}]},':is(.btn-mobile-links, .links-wrapper) a[href="/discover"]':{hrefPrefix:"/discover",entries:[{text:"Trends",href:"#trends"},{text:"Featured Lists",href:"#lists"},{text:"Summer TV Shows",href:"#featured-shows"},{text:"Comments",href:"#comments"}]},':is(.btn-mobile-links, .btn-tablet-links, .links-wrapper) a[href="/apps"]':{hrefPrefix:"/apps",entries:[{text:"Android <em>(official)</em>",href:"/a/trakt-android",useHrefPrefix:!1,anchor:!0},{text:"iOS <em>(official)</em>",href:"/a/trakt-ios",useHrefPrefix:!1},{text:"Android & iOS <em>(3rd Party)</em>",href:"#community-apps"},{text:"Android TV <em>(official)</em>",href:"/a/trakt-android-tv",useHrefPrefix:!1},{text:"tvOS <em>(official)</em>",href:"/a/trakt-tvos",useHrefPrefix:!1},{},{text:"INTEGRATIONS"},{text:"Media Centers",href:"#watching-wrapper"},{text:"Plex Sync",href:"#plex-scrobblers-wrapper"},{text:"Streaming Sync",href:"#streaming-scrobbler-wrapper"}]},':is(.btn-mobile-links, .btn-tablet-links, .links-wrapper) a[href="https://forums.trakt.tv"]':{hrefPrefix:"https://forums.trakt.tv",entries:[{text:"Categories",href:"/categories",submenu:{hrefPrefix:"https://forums.trakt.tv",entries:[{text:"Announcements",href:"/c/announcements"},{text:"Discussions",href:"/c/discussions",submenu:{hrefPrefix:"https://forums.trakt.tv/c/discussions",entries:[{text:"General",href:"/general"},{text:"TV Shows",href:"/tv-shows"},{text:"Movies",href:"/movies"},{text:"Off Topic",href:"/off-topic"}]}},{text:"Trakt",href:"/c/trakt",submenu:{hrefPrefix:"https://forums.trakt.tv/c/trakt",entries:[{text:"Questions & Help",href:"/questions"},{text:"Feature Requests",href:"/feature-requests"},{text:"Lite",href:"/trakt-lite"},{text:"Release Notes",href:"/release-notes"},{text:"VIP Beta Features",href:"/vip-beta-features"}]}},{text:"3rd Party",href:"/c/3rd-party",submenu:{hrefPrefix:"https://forums.trakt.tv/c/3rd-party",entries:[{text:"Media Centers",href:"/media-centers"},{text:"Mobile Apps",href:"/mobile-apps"},{text:"Other",href:"/other"}]}},{text:"Support",href:"/c/support",submenu:{hrefPrefix:"https://forums.trakt.tv/c/support",entries:[{text:"Tutorials",href:"/tutorials"},{text:"VIP Features",href:"/vip-features"},{text:"Features",href:"/support-features"},{text:"FAQ",href:"/faq"}]}}]}},{text:"Latest",href:"/latest"},{text:"New",href:"/new"},{text:"Top",href:"/top",submenu:{hrefPrefix:"https://forums.trakt.tv/top?period=",entries:[{text:"PERIOD"},{text:"Day",href:"daily",anchor:!0},{text:"Week",href:"weekly"},{text:"Month",href:"monthly"},{text:"Quarter",href:"quarterly"},{text:"Year",href:"yearly"},{text:"All Time",href:"all"}]}},{},{text:"EXTERNAL"},{text:'<span class="left fa fa-reddit-alien"></span>r/trakt',href:"https://reddit.com/r/trakt",useHrefPrefix:!1,submenu:{hrefPrefix:"https://reddit.com/r/trakt",entries:[{text:"SORT BY"},{text:"Best",href:"/best"},{text:"Hot",href:"/hot"},{text:"New",href:"/new"},{text:"Top",href:"/top",submenu:{hrefPrefix:"https://reddit.com/r/trakt/top?t=",entries:[{text:"PERIOD"},{text:"Hour",href:"hour"},{text:"Day",href:"day"},{text:"Week",href:"week"},{text:"Month",href:"month"},{text:"Year",href:"year"},{text:"All Time",href:"all",anchor:!0}]}},{text:"Rising",href:"/rising",anchor:!0}]}},{text:'<span class="left fa-brands fa-twitter"></span>Twitter',href:"https://twitter.com/trakt",useHrefPrefix:!1},{text:'<span class="left fa-brands fa-mastodon"></span>Mastodon',href:"https://ruby.social/@trakt",useHrefPrefix:!1}]}},m=({hrefPrefix:i,entries:o})=>o.reduce((d,{text:s,href:n,useHrefPrefix:p=!0,onclick:f,submenu:b},T)=>d+(s!==void 0&&(n!==void 0||f!==void 0)?`<li${b?' class="with-ul-menu"':""}><a href="${p&&i?i:""}${n??"#"}"${f?` onclick="${f}"`:""}>${s}</a>${b?m(b):""}</li>`:s!==void 0?`<li class="dropdown-header">${s}</li>`:'<li class="divider"></li>'),`<ul class="menu" style="top: calc(-10px - ${Math.max(o.findIndex(d=>d.anchor),0)*100}%)">`)+"</ul>",l=Object.entries(u).map(([i,o])=>[i,m(o)]);v(),window.addEventListener("turbo:load",()=>{const i=unsafeWindow.jQuery;if(!i)return;const o=i("#top-nav");o.find(".links-wrapper > a").wrap('<div class="with-solid-bg"></div>'),o.find('.links-wrapper a[href="/apps"]').next().remove().end().parent().removeClass("with-top-arrow").addClass("with-solid-bg"),o.find('.btn-mobile-links li:has(> a[href="/apps"])').next().remove().end().unwrap(),o.find("li.dark-knight").removeClass("dark-knight").html('<a href="#" onclick="return false;">Quick Actions</a>').before('<li class="divider"></li>').next().remove(),o.find(".btn-profile li:has(> a.yir-loader)").wrapAll('<li class="with-ul-menu"><ul class="menu" style="top: -10px;"></ul></li>').parent().before('<a href="#" onclick="return false;">Stats</a>'),o.find('a[href="https://forums.trakt.tv"]').removeAttr("target"),l.forEach(([s,n])=>o.find(s).closest("li, div").addClass("with-ul-menu").append(n));const d=o.find(":is(.user-wrapper, .links-wrapper) .with-ul-menu");d.off("click mouseover mouseout").on("touchend",function(s){s.stopPropagation(),i(s.originalEvent.target).closest(i(this).children().first()).length&&(i(this).hasClass("selected")?i(this).removeClass("selected"):(s.preventDefault(),d.not(i(this).parents()).removeClass("selected"),i(this).addClass("selected")))}),i("body").on("touchend",()=>d.removeClass("selected"))});function v(){GM_addStyle(`
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
  `)}})(),gmStorage.wkt34fcz&&(async()=>{"use strict";const t={getDefaultTorrentQuery:e=>`${encodeURIComponent(e.title)}${e.type==="movies"&&e.year?` ${e.year}`:""}${e.season!==void 0?` s${String(e.season).padStart(2,"0")}${e.episode?`e${String(e.episode).padStart(2,"0")}`:""}`:""}`,getDefaultDirectStreamingPath:e=>`/${e.type==="movies"?`movie/${e.ids.tmdb}`:`tv/${e.ids.tmdb}/${e.season!==void 0?e.season:"1"}/${e.episode?e.episode:"1"}`}`,getWnInnerHtml:({btnStyle:e="",img:a,imgStyle:c="",text:w,textStyle:h=""})=>`<div class="icon btn-custom" style="${e}">`+(a?`<img class="lazy" src="${GM_getResourceURL(a)}" style="${w?"max-width: 35%; ":""}${c}">`:"")+(w?`<div class="text" style="${a?"max-width: 65%; ":""}${h}">${w}</div>`:"")+"</div>",getWnCategoryHtml:e=>`[${r[e]}]`,getDdgFaviconHtml:(e,a="")=>`<img src="https://icons.duckduckgo.com/ip3/${e}.ico" style="${a}">`,getFaBrandsHtml:(e,a="")=>`<i class="fa-brands fa-${e}" style="${a}"></i>`,isAdultFemale:e=>/female|non_binary/.test(e.gender)&&e.birthday&&Date.now()-new Date(e.birthday)>5680368e5,fetchAnimeId:(e,a)=>`fetch('https://arm.haglund.dev/api/v2/themoviedb?id=${e.ids.tmdb}').then((r) => r.json()).then((arr) => arr.map((e) => (e.levDist = userscriptLevDist('${e.ids.slug}${e.season>1?`-${e.season_title.toLowerCase().replaceAll(/ |'/g,"-")}`:""}', e['anime-planet'] ?? ''), e)).sort((a, b) => a.levDist - b.levDist).find((e) => e['${a}'])?.['${a}'])`,fetchWikidataClaim:(e,a)=>`fetch('https://query.wikidata.org/sparql?format=json&query=${encodeURIComponent(`SELECT ?value WHERE { ?item wdt:${e.type==="movies"?"P4947":"P4983"} "${e.ids.tmdb}" . ?item wdt:P31/wdt:P279* wd:${e.type==="movies"?"Q11424":"Q5398426"} . ?item wdt:${a} ?value . } LIMIT 1`)}').then((r) => r.json()).then((r) => r.results.bindings[0]?.value?.value)`},r={animeAggregator:"Anime Aggregator",animeStreaming:"Anime Streaming",debrid:"Debrid",streaming:"Streaming",torrentAggregator:"Torrent Aggregator",usenetIndexer:"Usenet Indexer"},u=[{buildHref:e=>`https://ext.to/browse/?q=${t.getDefaultTorrentQuery(e)} 1080p 265${/shows|seasons/.test(e.type)?"&sort=size&order=desc":"&sort=seeds&order=desc"}&with_adult=1`,innerHtml:t.getWnInnerHtml({btnStyle:"background: #242730;",text:"EXT",textStyle:"background-image: linear-gradient(90deg, #3990f6 48.2%, #2c67a6 48.2% 66.2%, #3990f6 66.2%); background-clip: text; color: transparent; font-size: 50cqi; font-weight: 850; letter-spacing: -0.5px; padding-right: 3%;"}),tooltipHtml:t.getWnCategoryHtml("torrentAggregator")},{buildHref:e=>`https://web.stremio.com/#/detail/${e.type==="movies"?`movie/${e.ids.imdb}/${e.ids.imdb}`:`series/${e.ids.imdb}${e.type==="seasons"?`?season=${e.season}`:e.type==="episodes"?encodeURIComponent(`/${e.ids.imdb}:${e.season}:${e.episode}`):""}`}`,innerHtml:t.getWnInnerHtml({btnStyle:"background: #19163a;",img:"stremio",text:"Stremio"}),tooltipHtml:t.getWnCategoryHtml("debrid")},{buildHref:e=>`javascript:${t.fetchAnimeId(e,"myanimelist")}.then((id) => open('https://kuroiru.co/anime/' + id + '/ep' + ${e.episode??"1"}))`,innerHtml:t.getWnInnerHtml({btnStyle:"background: #191919;",img:"kuroiru"}),tooltipHtml:t.getWnCategoryHtml("animeAggregator"),includeIf:e=>e.genres.includes("anime")},{buildHref:e=>`javascript:${t.fetchAnimeId(e,"anilist")}.then((id) => open('https://www.miruro.to/watch/' + id + '/episode-' + ${e.episode??"1"}))`,innerHtml:t.getWnInnerHtml({btnStyle:"background: #0e0e0e;",img:"miruro"}),tooltipHtml:t.getWnCategoryHtml("animeStreaming"),includeIf:e=>e.genres.includes("anime")},{buildHref:e=>`javascript:${t.fetchAnimeId(e,"anilist")}.then((id) => open('https://anidap.se/watch?id=' + id + '&ep=' + ${e.episode??"1"} + '&provider=yuki&type=sub'))`,innerHtml:t.getWnInnerHtml({btnStyle:"background: #1f2728;",img:"anidap",imgStyle:"transform: scale(2.2);"}),tooltipHtml:t.getWnCategoryHtml("animeStreaming"),includeIf:e=>e.genres.includes("anime")},{buildHref:e=>`javascript:${t.fetchAnimeId(e,"anilist")}.then((id) => open('https://animetsu.cc/watch/' + id + '?ep=' + ${e.episode??"1"}))`,innerHtml:t.getWnInnerHtml({btnStyle:"background: #111;",text:"GOJO.LIVE",textStyle:"font-family: GangOfThree; font-size: 18cqi;"}),tooltipHtml:t.getWnCategoryHtml("animeStreaming"),includeIf:e=>e.genres.includes("anime")},{buildHref:e=>`https://knaben.org/search/${t.getDefaultTorrentQuery(e)} 1080p (265|av1)/${e.type==="movies"?"3000000":e.genres.includes("anime")?"6000000":"2000000"}/1/seeders`,innerHtml:`<div class="icon btn-custom" style="background: #323537; flex-direction: column;">${GM_getResourceText("knaben").replace("<svg",'<svg style="max-height: 79%;"')}<div class="text" style="font-family: system-ui; font-size: 10cqi; letter-spacing: 0.3px;">KNABEN DATABASE</div></div>`,tooltipHtml:t.getWnCategoryHtml("torrentAggregator")},{buildHref:e=>`https://iframe.pstream.mov/embed/tmdb-${e.type==="movies"?`movie-${e.ids.tmdb}`:`tv-${e.ids.tmdb}/${e.season!==void 0?e.season:"1"}/${e.episode?e.episode:"1"}`}`,innerHtml:t.getWnInnerHtml({btnStyle:"background: #110d1b;",img:"pstream",text:"P-Stream",textStyle:"font-size: 11cqi;"}),tooltipHtml:t.getWnCategoryHtml("streaming")},{buildHref:e=>`https://www.cineby.gd${t.getDefaultDirectStreamingPath(e)}?play=true`,innerHtml:t.getWnInnerHtml({btnStyle:"background: #440000;",img:"cineby",text:"Cineby",textStyle:"font-family: system-ui; font-size: 17cqi;"}),tooltipHtml:t.getWnCategoryHtml("streaming")},{buildHref:e=>`https://hexa.su/watch${t.getDefaultDirectStreamingPath(e)}`,innerHtml:t.getWnInnerHtml({btnStyle:"background: #111317;",img:"hexa"}),tooltipHtml:t.getWnCategoryHtml("streaming")},{buildHref:e=>`https://www.fmovies.gd/watch${t.getDefaultDirectStreamingPath(e)}`,innerHtml:t.getWnInnerHtml({btnStyle:"background: #18252b;",text:"FMOVIES+",textStyle:"background-image: linear-gradient(to right, rgb(13 202 240), rgb(13 202 240 / 35%)); background-clip: text; color: transparent; font-family: system-ui; font-size: 15cqi; font-weight: 800; letter-spacing: 0.3px; border: 2px solid rgb(13 202 240 / 25%); border-radius: 5px; padding: 5%;"}),tooltipHtml:t.getWnCategoryHtml("streaming")},{buildHref:e=>`https://scenenzbs.com/search/${t.getDefaultTorrentQuery(e)} 1080p (265|av1)`,innerHtml:t.getWnInnerHtml({btnStyle:"background: #212529;",img:"scenenzbs",imgStyle:"transform: scale(1.8) translateY(-1px);"}),tooltipHtml:t.getWnCategoryHtml("usenetIndexer")},{buildHref:e=>`https://x.debridmediamanager.com/${e.ids.imdb}`,innerHtml:t.getWnInnerHtml({btnStyle:"background: #2e3e51;",img:"dmm",imgStyle:"transform: scale(1.7);",text:"Debrid<br>Media<br>Manager",textStyle:"font-size: 12cqi;"}),tooltipHtml:t.getWnCategoryHtml("debrid")}],m=[{buildHref:e=>`/${/seasons|episodes/.test(e.type)?"shows":e.type}/${e.ids.slug}${e.season!==void 0?`/seasons/${e.season}${e.episode?`/episodes/${e.episode}`:""}`:""}/wikipedia`,innerHtml:t.getFaBrandsHtml("wikipedia-w"),tooltipHtml:"Wikipedia"},{buildHref:e=>`https://duckduckgo.com/?q=site:reddit.com Discussion ${encodeURIComponent(e.title)}${e.type==="movies"?` ${e.year}`:""}${e.season!==void 0?` Season ${e.season}${e.episode?` Episode ${e.episode}`:""}`:""}`,innerHtml:t.getFaBrandsHtml("reddit"),tooltipHtml:"Reddit",includeIf:e=>e.type!=="people"},{buildHref:e=>`https://letterboxd.com/tmdb/${e.ids.tmdb}`,innerHtml:t.getFaBrandsHtml("letterboxd"),tooltipHtml:"Letterboxd",includeIf:e=>e.type==="movies"},{buildHref:e=>`https://reversetv.enzon19.com/${/seasons|episodes/.test(e.type)?"shows":e.type}/${e.ids.slug}${e.season!==void 0?`/seasons/${e.season_old??e.season}${e.episode?`/episodes/${e.episode_old??e.episode}`:""}`:""}`,innerHtml:t.getDdgFaviconHtml("reversetv.enzon19.com","filter: invert(1) grayscale(1);"),tooltipHtml:"ReverseTV",includeIf:e=>e.type!=="people"},{buildHref:e=>`javascript:GM_xmlhttpRequest({ url: 'https://moviemaps.org/ajax/search?token=${encodeURIComponent(e.title)}&max_matches=1&use_similar=1', responseType: 'json', onload: (r) => open('https://moviemaps.org' + (r.response[0]?.url ?? '/search?q=${encodeURIComponent(e.title)}')) })`,innerHtml:'<i class="fa-regular fa-map"></i>',tooltipHtml:"MovieMaps",includeIf:e=>e.type!=="people"&&!["animation","anime"].some(a=>e.genres.includes(a))},{buildHref:e=>`https://${e.title.toLowerCase().replaceAll(/[^a-z0-9]/g,"")}.fandom.com/wiki/`,innerHtml:t.getDdgFaviconHtml("fandom.com","filter: invert(1) grayscale(1);"),tooltipHtml:"Fandom",includeIf:e=>e.type!=="people"},{buildHref:e=>`https://aznude.com/${e.type==="people"?`view/celeb/${e.name.toLowerCase()[0]}/${e.name.toLowerCase().replaceAll(" ","")}.html`:`search.html?q=${encodeURIComponent(e.title)}`}`,innerHtml:t.getDdgFaviconHtml("aznude.com","transform: scale(1.1);"),tooltipHtml:"AZNude",includeIf:e=>e.type==="people"&&t.isAdultFemale(e)||e.type!=="people"&&!["animation","anime"].some(a=>e.genres.includes(a))},{buildHref:e=>`https://celeb.gate.cc/${e.name.toLowerCase().replaceAll(" ","-")}/gallery.html?s=i.clicks.total&cdir=desc#images`,innerHtml:'<img src="https://celeb.gate.cc/assets/logo.png" style="filter: brightness(1.3) grayscale(1);">',tooltipHtml:"CelebGate",includeIf:e=>e.type==="people"&&t.isAdultFemale(e)},{buildHref:e=>`https://rule34.xxx/index.php?page=post&s=list&tags=sort:score ${e.title.toLowerCase().replaceAll(/[^a-z0-9-:; ]/g,"").replaceAll(" ","_")}`,innerHtml:t.getDdgFaviconHtml("rule34.xxx"),tooltipHtml:"Rule 34",includeIf:e=>e.type!=="people"},{buildHref:e=>`javascript:${t.fetchAnimeId(e,"myanimelist")}.then((id) => open('https://myanimelist.net/anime/' + id))`,innerHtml:t.getDdgFaviconHtml("myanimelist.net"),tooltipHtml:"MyAnimeList",includeIf:e=>e.genres?.includes("anime")},{buildHref:e=>`javascript:${t.fetchAnimeId(e,"anilist")}.then((id) => open('https://anilist.co/anime/' + id))`,innerHtml:t.getDdgFaviconHtml("anilist.co"),tooltipHtml:"AniList",includeIf:e=>e.genres?.includes("anime")},{buildHref:e=>`javascript:${t.fetchAnimeId(e,"anidb")}.then((id) => open('https://anidb.net/anime/' + id))`,innerHtml:t.getDdgFaviconHtml("anidb.net"),tooltipHtml:"AniDB",includeIf:e=>e.genres?.includes("anime")},{buildHref:e=>`javascript:${t.fetchAnimeId(e,"livechart")}.then((id) => open('https://livechart.me/anime/' + id))`,innerHtml:t.getDdgFaviconHtml("www.livechart.me"),tooltipHtml:"LiveChart",includeIf:e=>e.genres?.includes("anime")},{buildHref:e=>`https://www.themoviedb.org/${e.type==="people"?"person":e.type==="movies"?"movie":"tv"}/${e.ids.tmdb}${e.season!==void 0?`/season/${e.season}${e.episode?`/episode/${e.episode}`:""}`:""}`,innerHtml:'<img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg">',tooltipHtml:"TMDB"},{buildHref:e=>`https://www.imdb.com/${e.type==="people"?"name":"title"}/${e.ids.imdb}${e.season?`/episodes/?season=${e.season}`:""}`,innerHtml:t.getFaBrandsHtml("imdb","font-size: 24px;"),tooltipHtml:"IMDb"},{buildHref:e=>`javascript:${t.fetchWikidataClaim(e,e.type==="movies"?"P12196":"P4835")}.then((id) => open('https://www.thetvdb.com/dereferrer/${e.type==="movies"?"movie":"series"}/' + id))`,innerHtml:t.getDdgFaviconHtml("thetvdb.com"),tooltipHtml:"TheTVDB",includeIf:e=>e.type!=="people"},{buildHref:e=>e.type!=="people"?`javascript:fetch('https://api.tvmaze.com/lookup/shows?imdb=${e.ids.imdb}').then((r) => open(r.url.replace('api.', '')))`:`https://www.tvmaze.com/search?q=${e.name.toLowerCase().replaceAll(" ","+")}`,innerHtml:t.getDdgFaviconHtml("tvmaze.com"),tooltipHtml:"TVmaze",includeIf:e=>/shows|seasons|episodes|people/.test(e.type)},{buildHref:e=>l("#external-link-justwatch").attr("href"),innerHtml:'<i class="fa-kit fa-justwatch"></i>',tooltipHtml:"JustWatch",includeIf:e=>l("#external-link-justwatch").length},{buildHref:e=>`https://open.spotify.com/search/${e.title} Soundtrack`,innerHtml:t.getFaBrandsHtml("spotify"),tooltipHtml:"Spotify",includeIf:e=>e.type!=="people"},{buildHref:e=>e.type==="movies"?`https://fanart.tv/movie/${e.ids.tmdb}`:`javascript:fetch('https://api.tvmaze.com/lookup/shows?imdb=${e.ids.imdb}').then((r) => r.json()).then((r) => open('https://fanart.tv/series/' + r.externals.thetvdb))`,innerHtml:t.getDdgFaviconHtml("fanart.tv"),tooltipHtml:"Fanart.tv",includeIf:e=>e.type!=="people"},{buildHref:e=>`https://mediux.pro/${e.type==="movies"?"movies":"shows"}/${e.ids.tmdb}`,innerHtml:t.getDdgFaviconHtml("mediux.pro"),tooltipHtml:"MediUX",includeIf:e=>e.type!=="people"},{buildHref:e=>`https://youglish.com/pronounce/${e.name.replaceAll(" ","_")}/english`,innerHtml:"YG",tooltipHtml:"YouGlish",includeIf:e=>e.type==="people"},{buildHref:e=>`https://oracleofbacon.org/graph.php?who=${e.name.replaceAll(" ","+")}`,innerHtml:"Bacon\xB0",includeIf:e=>e.type==="people"},{buildHref:e=>l("#external-link-official").attr("href"),innerHtml:'<i class="fa-light fa-clapperboard-play"></i>',tooltipHtml:"Official Site",includeIf:e=>l("#external-link-official").length}];let l,v;unsafeWindow.GM_xmlhttpRequest=GM_xmlhttpRequest,unsafeWindow.userscriptLevDist=levenshteinDistance,unsafeWindow.userscriptItemDataCache={};const i={maxSidebarWnLinks:4,...GM_getValue("customLinks")};GM_setValue("customLinks",i),C(),document.addEventListener("turbo:load",async()=>{if(l??=unsafeWindow.jQuery,v??=unsafeWindow.userscriptTraktAPIModule?.isFulfilled?await unsafeWindow.userscriptTraktAPIModule:null,!l)return;const e=location.pathname,a=l(".notable-summary").attr("data-url")||l(".sidebar").attr("data-url"),c=/^\/(movies|shows|seasons|episodes|people)\/[^\/]+$/.test(a)?await T(a):void 0;if(e===location.pathname&&(m.length&&c&&(d(c),s(c)),u.length)){c&&c.type!=="people"&&(n(c),p(c));const w=l("#watch-now-content"),h=l("#header-search-autocomplete-results");w.has(".streaming-links").length&&b(w),l(document).off("ajaxSuccess.userscript83278").on("ajaxSuccess.userscript83278",(y,k,g)=>{w.length&&g.url.includes("/streaming_links?country=")&&b(w),h.length&&/^\/search\/autocomplete(?!\/(people|lists|users))/.test(g.url)&&f(h)})}},{capture:!0});const o=(e,a,c)=>{const w=e.buildHref(a);return`<a ${w.startsWith("javascript:")?'onauxclick="event.button === 1 && this.click();"':'target="_blank"'} href="${w}" data-original-title="${e.tooltipHtml??""}">${c||e.innerHtml}</a>`};function d(e){l(m.filter(a=>a.includeIf?a.includeIf(e):!0).map(a=>o(a,e)).join("")).prependTo("#info-wrapper .sidebar .external > li").tooltip({container:"body",placement:"bottom",html:!0})}function s(e){l(m.filter(a=>a.includeIf?a.includeIf(e):!0).map(a=>o(a,e,l(a.tooltipHtml??a.innerHtml).text()||(a.tooltipHtml??a.innerHtml))+", ").join("")).insertAfter('.additional-stats.with-external-links label:contains("Links")')}function n(e){const a=l("#info-wrapper .sidebar");a.has(".btn-watch-now").length&&!a.has(".streaming-links").length&&a.find(".btn-watch-now").before('<div class="streaming-links"><div class="sources"></div></div>'),l(u.filter(c=>c.includeIf?c.includeIf(e):!0).map(c=>o(c,e)).join("")).prependTo(a.find(".streaming-links .sources")).attr("data-container","body").attr("data-html","true").tooltip()}function p(e){const a=l("#overview .action-buttons");if(a.length&&!a.has(".btn-watch-now").length){const c=l("#info-wrapper .sidebar .btn-watch-now"),w=c.attr("data-source-counts"),h=c.attr("data-url");if(!w||!h)return;a.prepend(`<div class="streaming-links"><div class="sources"></div></div><a class="btn btn-block btn-summary btn-watch-now visible-xs selected" data-source-counts="${w}" data-target="#watch-now-modal" data-toggle="modal" data-url="${h}" href="#"><i class="fa fa-fw fa-solid fa-play"></i><div class="text"><div class="main-info">Watch Now</div><div class="under-info">0 streaming services</div></div></a>`)}l(u.filter(c=>c.includeIf?c.includeIf(e):!0).map(c=>o(c,e)).join("")).prependTo(a.find(".sources")).attr("data-html","true").tooltip()}async function f(e){e.find('> .search-result:not([data-type="people"])').each(async function(){const a=await T(l(this).attr("data-url"));l(this).has(".streaming-links").length||l(this).append('<div class="streaming-links"><div class="sources"></div></div>'),l(u.filter(c=>c.includeIf?c.includeIf(a):!0).map(c=>o(c,a)).join("")).prependTo(l(this).find(".streaming-links .sources")).tooltip({placement:"bottom",html:!0}).on("click",c=>c.stopPropagation())})}async function b(e){const a=await T(e.attr("data-url"));e.find("> .streaming-links").prepend('<div class="title">Custom Links</div><div class="section"></div>'+(e.has(".no-links").length?'<div class="title"></div>':"")),l(u.filter(c=>c.includeIf?c.includeIf(a):!0).map(c=>o(c,a,c.innerHtml+(c.tooltipHtml?`<div class="price">${c.tooltipHtml}</div>`:""))).join("")).appendTo(e.find(".section").first())}async function T(e){const a=async h=>{const y=await fetch(`https://api.tvmaze.com/lookup/shows?imdb=${h.ids.imdb}`).then(g=>g.ok?fetch(g.url+"?embed[]=episodes&embed[]=seasons"):null).then(g=>g?.ok?g.json():null),k=y?._embedded.episodes.find(g=>g.name.trim().toLowerCase()===h.episode_title.trim().toLowerCase());k&&(h.season_old=h.season,h.episode_old=h.episode,h.season=k.season,h.episode=k.number,h.season_title=y._embedded.seasons.find(g=>g.number==k.season).name||`Season ${k.season}`,["season_original_title","season_ids","season_first_aired","season_episode_count"].forEach(g=>delete h[g]))},c=async()=>{const h=e.split("/").filter(Boolean),y=h[0];let k,g,x,$,S;if(y==="seasons"||y==="shows"&&!isNaN(h[1])){const _=await fetch(e);if(!_.ok)throw new Error(`getItemData: Fetching ${_.url} failed with status: ${_.status}`);k=new DOMParser().parseFromString(await _.text(),"text/html"),g=l(k).find(".notable-summary")}y==="episodes"&&([{show:x,episode:S}]=await v.search.id({id_type:"trakt",id:h[1],type:"episode",extended:"full"}),$=await v.seasons.season.info({id:x.ids.trakt,season:S.season,extended:"full"}));const M={item_url:e,type:y,...y!=="episodes"&&{...await v[y==="seasons"?"shows":y].summary({id:g?.attr("data-show-id")??h[1],extended:"full"})},...y==="seasons"&&{season:+g.attr("data-season-number"),season_title:l(k).find('#level-up-link[href*="/seasons/"]').text()||l(k).find("#summary-wrapper .mobile-title h1").contents()[0]?.textContent.trim()},...y==="episodes"&&{...x,season:$.number,season_title:$.title,season_original_title:$.original_title,season_ids:$.ids,season_first_aired:$.first_aired,season_episode_count:$.episode_count,episode:S.number,episode_abs:S.number_abs,episode_title:S.title,episode_original_title:S.original_title,episode_ids:S.ids,episode_first_aired:S.first_aired,episode_type:S.episode_type}};return y==="episodes"&&M.genres.includes("anime")&&await a(M),M},w=async()=>{let h,y;const k=await fetch(e);if(!k.ok)throw new Error(`getItemData: Fetching ${k.url} failed with status: ${k.status}`);if(h=new DOMParser().parseFromString(await k.text(),"text/html"),k.url.includes("/seasons/")){const L=await fetch(k.url.split("/seasons/")[0]);if(!L.ok)throw new Error(`getItemData: Fetching ${L.url} failed with status: ${L.status}`);y=new DOMParser().parseFromString(await L.text(),"text/html")}const g=e.split("/").filter(Boolean)[0],x=l(h).find(".notable-summary"),$=l(h).find(".additional-stats > li"),S=y?l(y).find(".additional-stats > li"):void 0,M=(L,R=$)=>R.filter((H,A)=>l(A).find("label").text().toLowerCase()===L),_={item_url:e,type:g,ids:{trakt:+(x.attr("data-movie-id")??x.attr("data-show-id")??x.attr("data-person-id")),imdb:l(y??h).find("#external-link-imdb").attr("href")?.match(/(?:tt|nm)\d+/)?.[0],tmdb:+l(h).find("#external-link-tmdb").attr("href")?.match(/\d+/)?.[0]||void 0,slug:k.url.split("/")[4]},...g!=="people"&&{title:l(h).find(':is(body > [itemtype$="Movie"], body > [itemtype$="TVSeries"], body > [itemtype] > [itemtype$="TVSeries"]) > meta[itemprop="name"]').attr("content")?.match(/(.+?)(?: \(\d{4}\))?$/)?.[1],original_title:M("original title",S).contents().get(-1)?.textContent,year:+l(y??h).find("#summary-wrapper .mobile-title .year")[0]?.textContent||void 0,genres:$.find('[itemprop="genre"]').map((L,R)=>l(R).text().toLowerCase()).get()},.../seasons|episodes/.test(g)&&{season:+x.attr("data-season-number"),season_title:l(h).find('#level-up-link[href*="/seasons/"]').text()||l(h).find("#summary-wrapper .mobile-title h1").contents()[0]?.textContent.trim()},...g==="episodes"&&{episode:+x.attr("data-episode-number"),episode_title:l(h).find('body > [itemtype$="TVEpisode"] > meta[itemprop="name"]').attr("content")},...g==="people"&&{name:l(h).find('body > [itemtype$="Person"] > meta[itemprop="name"]').attr("content"),gender:M("gender").contents().get(-1)?.textContent.toLowerCase().replace("-","_"),birthday:M("birthday").children().last().attr("data-date")}};return Object.hasOwn(_,"original_title")&&(_.original_title??=_.title),_.type==="episodes"&&_.genres.includes("anime")&&await a(_),_};return unsafeWindow.userscriptItemDataCache[e]??=await(v?c:w)()}function C(){const e=document.cookie.match(/(?:^|; )watchnow_country=([^;]*)/)?.[1]??new Intl.Locale(navigator.language).region.toLowerCase();GM_addStyle(`
@font-face {
  font-family: "GangOfThree";
  src: url("${GM_getResourceURL("gojolive")}") format("woff2");
  font-display: block;
}


#external-link-official, #external-link-imdb, #external-link-tmdb, #external-link-fanart, #external-link-justwatch, #external-link-wikipedia {
  display: none !important;
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
[data-source-counts*="'${e}'"] > .fa-play::before {
  color: #ccc !important;
}
:is([data-source-counts="{}"], [data-source-counts="{'none':1}"]) > .fa-play::before {
  color: #333 !important;
}
[data-source-counts] > .fa-play:hover::before {
  color: #fff !important;
}


.streaming-links .icon.btn-custom {
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


#info-wrapper :is(.sidebar, .action-buttons) .streaming-links a:is(:nth-child(3n), :nth-child(4n)) {
  display: inline-block !important;
}
#info-wrapper .sidebar .streaming-links a:nth-child(n+${i.maxSidebarWnLinks+1} of a),
#info-wrapper .action-buttons .streaming-links a:nth-child(n+3 of a),
#header-search-autocomplete-results .streaming-links a:nth-child(n+3 of a) {
  display: none !important;
}


#info-wrapper .sidebar .external a {
  height: 27px;
  vertical-align: middle;
}
#info-wrapper .sidebar .external a:has(> *) {
  padding: 1.5px !important;
}
#info-wrapper .sidebar .external a > img {
  height: 100%;
  border-radius: inherit;
  filter: grayscale(1);
}
#info-wrapper .sidebar .external a > :is(div, i) {
  font-size: 18px;
  vertical-align: -5px;
}


#watch-now-modal {
  top: 37.5px !important;
}
#watch-now-modal #watch-now-content .streaming-links {
  max-height: calc(100vh - 190px) !important;
  overflow: auto !important;
  scrollbar-width: none;
}


@media (767px < width) {
  #info-wrapper .sidebar:has(> .external) {
    height: calc(100vh - 25px - var(--header-height));
    overflow: auto;
    scrollbar-width: none;
  }
}
  `)}})(),gmStorage.x70tru7b&&(async()=>{"use strict";let t,r;m(),document.addEventListener("turbo:load",()=>{t??=unsafeWindow.jQuery,r??=unsafeWindow.compressedCache,!(!t||!r)&&(u(),t(document).off("ajaxSuccess.userscript38793").on("ajaxSuccess.userscript38793",(l,v,i)=>{i.url.endsWith("/settings.json")&&u()}),t("body").removeAttr("data-turbo"),t(".frame-wrapper .sidenav.advanced-filters .buttons").addClass("vip").find(".btn.vip").text("").removeClass("vip").removeAttr("href").addClass("disabled disabled-init").attr("id","filter-apply").attr("data-apply-text","Apply Filters").before('<a class="btn btn-close-2024" id="filter-close" style="display: inline-block !important; visibility: visible !important;">Close</a>').append('<span class="text">Configure Filters</span><span class="icon fa-solid fa-check"></span>'))},{capture:!0});function u(){const l=r.get("settings");l&&!l.user.vip&&(l.user.vip=!0,r.set("settings",l),unsafeWindow.userSettings&&(unsafeWindow.userSettings=l))}function m(){GM_addStyle(`
#top-nav .btn-vip,
.dropdown-menu.for-sortable > li > a.vip-only,
.alert-vip-required {
  display: none !important;
}
  `)}})(),gmStorage.yl9xlca7&&(async()=>{"use strict";let t;const r=new Intl.NumberFormat("en",{notation:"compact",maximumFractionDigits:1});r.formatTLC=o=>r.format(o).toLowerCase(),i(),document.addEventListener("turbo:load",()=>{if(!location.pathname.startsWith("/shows/")||location.pathname.includes("/episodes/")||(t??=unsafeWindow.jQuery,!t))return;const o=t("#seasons-episodes-sortable"),d=t("#summary-ratings-wrapper .summary-user-rating"),s=t("#summary-ratings-wrapper .trakt-rating");if(!o.length||!d.length||!s.length)return;const n=unsafeWindow.userscriptAvgSeasonEpisodeRatings={};let p;d[0].mutObs=new MutationObserver(()=>{d.hasClass("popover-on")||l(d,n.personal)}),l(d),v(s);const f=!location.pathname.endsWith("/seasons/0");o.on("arrangeComplete",()=>{o.data("isotope")&&(p=o.data("isotope").filteredItems.filter(b=>f?b.element.dataset.seasonNumber!=="0":!0),n.personal=u(p),n.general=m(p),l(d,n.personal),v(s,n.general))}),t(document).off("ajaxSuccess.userscript32985").on("ajaxSuccess.userscript32985",(b,T,C)=>{p&&/\/ratings\/(seasons|episodes)\.json$|\/rate/.test(C.url)&&(n.personal=u(p),l(d,n.personal))})},{capture:!0});function u(o){const d=o.map(s=>+t(s.element).find(".corner-rating > .text").text()).filter(Boolean);return{average:d.length?d.reduce((s,n)=>s+n,0)/d.length:void 0,votes:d.length}}function m(o){const d=o.reduce((s,n)=>s+n.sortData.votes,0);return{average:d?o.reduce((s,n)=>s+n.sortData.percentage*(n.sortData.votes/d),0):void 0,votes:d}}function l(o,d){o[0].mutObs.disconnect(),o.find(".rating").each(function(){const s=t(this).parent().prev().attr("class").match(/rating-(\d+)/)?.[1];s&&t(this).html(`${s}<div class="votes">${unsafeWindow.ratingsText?.[s]??""}</div>`)}),o.find(".number > .votes").removeClass("alt").text(`avg: ${d?.average?`${d.average.toFixed(1)}`:"--"} (${d?.votes!==void 0?r.formatTLC(d.votes):"--"} v.)`),o[0].mutObs.observe(o[0],{subtree:!0,childList:!0})}function v(o,d){o.has(".rating .votes").length||o.find(".votes").clone().appendTo(o.find(".rating")).text((s,n)=>`(${n.match(/^.*? v/)?.[0]??"0 v"}.)`),o.find(".number > .votes").text(`avg: ${d?.average?`${Math.round(d.average)}`:"--"}% (${d?.votes!==void 0?r.formatTLC(d.votes):"--"} v.)`)}function i(){GM_addStyle(`
#summary-ratings-wrapper .ratings .rating {
  display: flex !important;
  justify-content: space-between;
  align-items: center;
}
#summary-ratings-wrapper .ratings .rating .votes {
  margin-left: 7px !important;
  color: #fff !important;
}
  `)}})();