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
// @downloadURL  https://raw.githubusercontent.com/Fenn3c401/Trakt.tv-Userscript-Collection/main/userscripts/dist/2hc6zfyy.user.js
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


/* global Cron */

'use strict';

let $, toastr,
    userslug, cron;

const gmStorage = { toastOnSuccess: true, cronExpr: '@weekly', lastRun: {}, ...(GM_getValue('scheduledEmailDataExports')) };
GM_setValue('scheduledEmailDataExports', gmStorage);

const Logger = Object.freeze({
  _DEFAULT_PREFIX: GM_info.script.name.replace('Trakt.tv', 'Userscript') + ': ',
  _DEFAULT_TOAST: true,
  _printMsg(fnConsole, fnToastr, msg, { data, prefix = Logger._DEFAULT_PREFIX, toast = Logger._DEFAULT_TOAST } = {}) {
    msg = prefix + msg;
    console[fnConsole](msg, (data ? data : ''));
    if (toast) toastr[fnToastr](msg + (data ? ' See console for details.' : ''));
  },
  info: (msg, opt) => Logger._printMsg('info', 'info', msg, opt),
  success: (msg, opt) => Logger._printMsg('info', 'success', msg, { ...opt, toast: gmStorage.toastOnSuccess }),
  warning: (msg, opt) => Logger._printMsg('warn', 'warning', msg, opt),
  error: (msg, opt) => Logger._printMsg('error', 'error', msg, opt),
});


window.addEventListener('turbo:load', () => {
  $ ??= unsafeWindow.jQuery;
  toastr ??= unsafeWindow.toastr;
  userslug ??= unsafeWindow.Cookies?.get('trakt_userslug');
  if (!$ || !toastr || !userslug) return;

  try {
    cron ??= new Cron(gmStorage.cronExpr, {
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    });
  } catch (err) {
    Logger.error('Invalid cron expression. Aborting..', { data: err });
    return;
  }

  const dateNow = new Date();

  if (!gmStorage.lastRun[userslug] || cron.nextRun(gmStorage.lastRun[userslug]) <= dateNow) {
    $.post('/settings/export_data').done(() => {
      gmStorage.lastRun[userslug] = dateNow.toISOString();
      GM_setValue('scheduledEmailDataExports', gmStorage);
      Logger.success('Success. Your data export is processing. You will receive an e-mail when it is ready.');
    }).fail((xhr) => {
      if (xhr.status === 409) {
        gmStorage.lastRun[userslug] = dateNow.toISOString();
        GM_setValue('scheduledEmailDataExports', gmStorage);
        Logger.warning('Failed. Cooldown from previous export is still active. Will retry on next scheduled data export.');
      } else {
        Logger.error(`Failed with status: ${xhr.status}. Reload page to try again.`, { data: xhr });
      }
    });
  }
});