// ==UserScript==
// @name         Trakt.tv | Scheduled E-Mail Data Exports
// @description  Automatic trakt.tv backups for free users. On every trakt.tv visit a background e-mail data export is triggered, if one is overdue based on the specified cron expression (defaults to weekly). See README for details.
// @version      1.0.3
// @namespace    https://github.com/Fenn3c401
// @author       Fenn3c401
// @license      GPL-3.0-or-later
// @homepageURL  https://github.com/Fenn3c401/Trakt.tv-Userscript-Collection#readme
// @supportURL   https://github.com/Fenn3c401/Trakt.tv-Userscript-Collection/issues
// @updateURL    https://raw.githubusercontent.com/Fenn3c401/Trakt.tv-Userscript-Collection/main/userscripts/meta/2hc6zfyy.meta.js
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


"use strict";let $,toastr,userslug,cron;const gmStorage={toastOnSuccess:!0,cronExpr:"@weekly",lastRun:{},...GM_getValue("scheduledEmailDataExports")};GM_setValue("scheduledEmailDataExports",gmStorage);const Logger=Object.freeze({_DEFAULT_PREFIX:GM_info.script.name.replace("Trakt.tv","Userscript")+": ",_DEFAULT_TOAST:!0,_printMsg(t,e,s,{data:r,prefix:o=Logger._DEFAULT_PREFIX,toast:n=Logger._DEFAULT_TOAST}={}){s=o+s,console[t](s,r||""),n&&toastr[e](s+(r?" See console for details.":""))},info:(t,e)=>Logger._printMsg("info","info",t,e),success:(t,e)=>Logger._printMsg("info","success",t,{...e,toast:gmStorage.toastOnSuccess}),warning:(t,e)=>Logger._printMsg("warn","warning",t,e),error:(t,e)=>Logger._printMsg("error","error",t,e)});window.addEventListener("turbo:load",()=>{if($??=unsafeWindow.jQuery,toastr??=unsafeWindow.toastr,userslug??=unsafeWindow.Cookies?.get("trakt_userslug"),!$||!toastr||!userslug)return;try{cron??=new Cron(gmStorage.cronExpr,{timezone:Intl.DateTimeFormat().resolvedOptions().timeZone})}catch(e){Logger.error("Invalid cron expression. Aborting..",{data:e});return}const t=new Date;(!gmStorage.lastRun[userslug]||cron.nextRun(gmStorage.lastRun[userslug])<=t)&&$.post("/settings/export_data").done(()=>{gmStorage.lastRun[userslug]=t.toISOString(),GM_setValue("scheduledEmailDataExports",gmStorage),Logger.success("Success. Your data export is processing. You will receive an e-mail when it is ready.")}).fail(e=>{e.status===409?(gmStorage.lastRun[userslug]=t.toISOString(),GM_setValue("scheduledEmailDataExports",gmStorage),Logger.warning("Failed. Cooldown from previous export is still active. Will retry on next scheduled data export.")):Logger.error(`Failed with status: ${e.status}. Reload page to try again.`,{data:e})})});