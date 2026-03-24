// ==UserScript==
// @name         Trakt.tv | Scheduled E-Mail Data Exports
// @description  OUT OF ORDER (for the time being). Automatic trakt.tv backups for free users. On every trakt.tv visit a background e-mail data export is triggered, if one is overdue based on the specified cron expression (defaults to weekly). See README for details.
// @version      1.1.7
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
- If you don't like the success toasts, you can turn them off by setting `toastOnSuccess` to `false` in the userscript storage tab *(note: only displayed after first run)*, there you can
    also specify your own [cron expression](https://crontab.guru/examples.html). E-Mail data exports have a cooldown period of 24 hours, there is no point in going below that with your cron expression.
*/


"use strict";let $,userslug;const logger={_defaults:{title:(typeof moduleName<"u"?moduleName:GM_info.script.name).replace("Trakt.tv","Userscript"),toast:!0,toastrOpt:{positionClass:"toast-top-right",timeOut:1e4,progressBar:!0},toastrStyles:"#toast-container#toast-container a { color: #fff !important; border-bottom: dotted 1px #fff; }"},_print(t,e,s="",o={}){const{title:a=this._defaults.title,toast:n=this._defaults.toast,toastrOpt:l,toastrStyles:i="",consoleStyles:u="",data:r}=o,d=`${s}${r!==void 0?" See console for details.":""}<style>${this._defaults.toastrStyles+i}</style>`;console[t](`%c${a}: ${s}`,u,...r!==void 0?[r]:[]),n&&unsafeWindow.toastr?.[e](d,a,{...this._defaults.toastrOpt,...l})},info(t,e){this._print("info","info",t,e)},success(t,e){this._print("info","success",t,{consoleStyles:"color:#00c853;",...e})},warning(t,e){this._print("warn","warning",t,e)},error(t,e){this._print("error","error",t,e)}},gmStorage={cronExpr:"@weekly",toastOnSuccess:!0,lastRun:{},...GM_getValue("scheduledEmailDataExports")};GM_setValue("scheduledEmailDataExports",gmStorage);let cron;try{cron=new Cron(gmStorage.cronExpr,{timezone:Intl.DateTimeFormat().resolvedOptions().timeZone})}catch(t){logger.error("Invalid cron expression. Exiting..",{data:t})}