# Trakt.tv | Scheduled E-Mail Data Exports
Automatic trakt.tv backups for free users. On every trakt.tv visit a background e-mail data export is triggered, if one is overdue based on the specified cron expression (defaults to weekly).

[![install standard](https://img.shields.io/badge/install-standard-006400)](https://raw.githubusercontent.com/Fenn3c401/Trakt.tv-Userscript-Collection/main/userscripts/dist/2hc6zfyy.user.js)
[![install minified](https://img.shields.io/badge/install-minified-64962a)](https://raw.githubusercontent.com/Fenn3c401/Trakt.tv-Userscript-Collection/main/userscripts/dist/2hc6zfyy.min.user.js)
[![version](https://img.shields.io/badge/version-1.1.1-blue)](../../../../blame/main/userscripts/dist/2hc6zfyy.user.js)
[![lines of code](https://img.shields.io/badge/loc-59-orange)](../../userscripts/dist/2hc6zfyy.user.js)

## Info
### General
- You might want to consider the use of an e-mail filter, so as to e.g. automatically move the data export e-mails to a dedicated trakt-tv-data-exports folder.
- If you don't like the success toasts, you can turn them off by setting `toastOnSuccess` to false in the userscript storage tab *(note: only displayed after first run)*, there you can
    also specify your own [cron expression](https://crontab.guru/examples.html). E-Mail data exports have a cooldown period of 24 hours, there is no point in going below that with your cron expression.

