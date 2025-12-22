// ==UserScript==
// @name         Trakt.tv | Scheduled E-Mail Data Exports
// @description  Automatic trakt.tv backups for free users. On every trakt.tv visit a background e-mail data export is triggered, if one is overdue based on the specified cron expression (defaults to weekly). See README for details.
// @version      1.1.1
// @namespace    https://github.com/Fenn3c401
// @author       Fenn3c401
// @license      GPL-3.0-or-later
// @homepageURL  https://github.com/Fenn3c401/Trakt.tv-Userscript-Collection#readme
// @supportURL   https://github.com/Fenn3c401/Trakt.tv-Userscript-Collection/issues
// @updateURL    https://update.greasyfork.org/scripts/550078.meta.js
// @downloadURL  https://raw.githubusercontent.com/Fenn3c401/Trakt.tv-Userscript-Collection/main/userscripts/dist/2hc6zfyy.min.user.js
// @icon         https://trakt.tv/assets/logos/logomark.square.gradient-b644b16c38ff775861b4b1f58c1230f6a097a2466ab33ae00445a505c33fcb91.svg
// @match        https://trakt.tv/*
// @match        https://classic.trakt.tv/*
// @run-at       document-start
// @require      https://cdn.jsdelivr.net/npm/croner@9.0.0/dist/croner.umd.min.js
// @grant        unsafeWindow
// @grant        GM_info
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==

/* README
### General
- You might want to consider the use of an e-mail filter, so as to e.g. automatically move the data export e-mails to a dedicated trakt-tv-data-exports folder.
- If you don't like the success toasts, you can turn them off by setting `toastOnSuccess` to false in the userscript storage tab *(note: only displayed after first run)*, there you can
    also specify your own [cron expression](https://crontab.guru/examples.html). E-Mail data exports have a cooldown period of 24 hours, there is no point in going below that with your cron expression.
*/


"use strict";let $,toastr,userslug;const gmStorage={toastOnSuccess:!0,cronExpr:"@weekly",lastRun:{},...GM_getValue("scheduledEmailDataExports")};GM_setValue("scheduledEmailDataExports",gmStorage);const logger={_defaults:{title:GM_info.script.name.replace("Trakt.tv","Userscript"),toast:!0,toastrOpt:{positionClass:"toast-top-right",timeOut:1e4,progressBar:!0},toastrStyles:"#toast-container#toast-container a { color: #fff !important; border-bottom: dotted 1px #fff; }"},_print(t,e,s="",o={}){const{title:r=this._defaults.title,toast:n=this._defaults.toast,toastrOpt:i,toastrStyles:l="",consoleStyles:u="",data:a}=o,d=`${s}${a!==void 0?" See console for details.":""}<style>${this._defaults.toastrStyles+l}</style>`;console[t](`%c${r}: ${s}`,u,...a!==void 0?[a]:[]),n&&toastr[e](d,r,{...this._defaults.toastrOpt,...i})},info(t,e){this._print("info","info",t,e)},success(t,e){this._print("info","success",t,{consoleStyles:"color:#00c853;",toast:gmStorage.toastOnSuccess,...e})},warning(t,e){this._print("warn","warning",t,e)},error(t,e){this._print("error","error",t,e)}};let cron;try{cron=new Cron(gmStorage.cronExpr,{timezone:Intl.DateTimeFormat().resolvedOptions().timeZone})}catch(t){logger.error("Invalid cron expression. Exiting..",{data:t})}cron&&window.addEventListener("turbo:load",async()=>{if($??=unsafeWindow.jQuery,toastr??=unsafeWindow.toastr,userslug??=unsafeWindow.Cookies?.get("trakt_userslug"),!$||!toastr||!userslug)return;const t=new Date;if(!gmStorage.lastRun[userslug]||cron.nextRun(gmStorage.lastRun[userslug])<=t){const e=await fetch("/settings/data").then(s=>s.text()).then(s=>$(new DOMParser().parseFromString(s,"text/html")).find("#exporters .alert-success .format-date").attr("data-date"));if(e&&cron.nextRun(e)>t){gmStorage.lastRun[userslug]=e,GM_setValue("scheduledEmailDataExports",gmStorage);return}$.post("/settings/export_data").done(()=>{gmStorage.lastRun[userslug]=t.toISOString(),GM_setValue("scheduledEmailDataExports",gmStorage),logger.success("Success. Your data export is processing. You will receive an e-mail when it is ready.")}).fail(s=>{s.status===409?(gmStorage.lastRun[userslug]=t.toISOString(),GM_setValue("scheduledEmailDataExports",gmStorage),logger.warning(`Failed. Cooldown from previous export is still active. Will retry on next scheduled data export at: ${cron.nextRun(gmStorage.lastRun[userslug]).toISOString()}`)):logger.error(`Failed with status: ${s.status}. Reload page to try again.`,{data:s})})}});