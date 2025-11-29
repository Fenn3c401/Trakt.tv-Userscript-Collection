// ==UserScript==
// @name         Trakt.tv | Custom Links (Watch-Now + External)
// @description  Adds custom links to all the "Watch-Now" and "External" sections (for titles and people). The ~35 defaults include Letterboxd, Stremio, streaming sites (e.g. P-Stream, Hexa), torrent aggregators (e.g. EXT, Knaben), various anime sites (both for streaming and tracking) and much more. Easily customizable. See README for details.
// @version      0.6.5
// @namespace    https://github.com/Fenn3c401
// @author       Fenn3c401
// @license      GPL-3.0-or-later
// @homepageURL  https://github.com/Fenn3c401/Trakt.tv-Userscript-Collection#readme
// @supportURL   https://github.com/Fenn3c401/Trakt.tv-Userscript-Collection/issues
// @updateURL    https://raw.githubusercontent.com/Fenn3c401/Trakt.tv-Userscript-Collection/main/userscripts/meta/wkt34fcz.meta.js
// @icon         https://trakt.tv/assets/logos/logomark.square.gradient-b644b16c38ff775861b4b1f58c1230f6a097a2466ab33ae00445a505c33fcb91.svg
// @match        https://trakt.tv/*
// @match        https://classic.trakt.tv/*
// @run-at       document-start
// @resource     anidap     https://anidap.se/logo.png
// @resource     cineby     https://www.cineby.gd/logo.png
// @resource     dmm        https://raw.githubusercontent.com/debridmediamanager/debrid-media-manager/main/dmm-logo.svg
// @resource     hexa       https://hexa.su/hexa-logo.png
// @resource     knaben     data:image/svg+xml;base64,PHN2ZyBvbm1vdXNlZW50ZXI9InRoaXMucXVlcnlTZWxlY3RvckFsbCgnLmJveCcpLmZvckVhY2goKGIsaSk9Jmd0O3sgYi5zdHlsZS50cmFuc2l0aW9uPSdub25lJzsgYi5zdHlsZS5vcGFjaXR5PTA7IGIuc3R5bGUudHJhbnNmb3JtPSd0cmFuc2xhdGUoMCwtNzAlKSc7IHNldFRpbWVvdXQoKCk9Jmd0O3sgYi5zdHlsZS50cmFuc2l0aW9uPSdvcGFjaXR5IC4zcywgdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLjUsMC4yNSwwLjI3LDAuMSknOyBiLnN0eWxlLm9wYWNpdHk9MTsgYi5zdHlsZS50cmFuc2Zvcm09J3RyYW5zbGF0ZSgwLDApJzsgfSwgNTAqKChpJTMtMykqKH5+KGkvMyktMykpKTsgfSk7IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxODYyIDgwNCI+PHBhdGggZmlsbD0iI2JhYmFiYSIgZD0iTTc0LjQ4IDBoNDEzLjM2djYyLjk1SDc0LjQ4em0wIDYyLjk1aDYwLjM1djcyLjc1SDc0LjQ4em0xMzYuNDEgMGgzNy4ydjcyLjc1aC0zNy4yem0xMDcuNDcgMGgzNy4ydjcyLjc1aC0zNy4yem0xMTEuNjEgMGg1Ny44N3Y3Mi43NWgtNTcuODd6TTc0LjQ4IDEzNS40N2g0MTMuMzZ2OTcuOTNINzQuNDh6Ii8+PHBhdGggZmlsbD0iIzdhN2E3YSIgZD0iTTc0LjQ4IDIzMy4xNmg1MDIuNzR2MTQwLjdINzQuNDh6Ii8+PHBhdGggZmlsbD0iI2JhYmFiYSIgZD0iTTAgMzkxLjk5MXYuMDc4TDEwNi45ODggNjQ0LjEySDE3MTMuMDR2LTIuOTA4TDE4NjIgNDkyLjI1MVYzOTEuOTVILjA5N1oiLz48cGF0aCBmaWxsPSIjN2E3YTdhIiBkPSJNMTcxMy40ODkgNjQyLjA3SDEwNS40MTdsNjcuODgyIDE1OS45MmgxMzgwLjI2OVoiLz48cGF0aCBjbGFzcz0iYm94IiBmaWxsPSIjN2E3YTdhIiBkPSJNNzYzLjQyIDQwLjJoMjgxLjk0djEwMS43N0g3NjMuNDJ6Ii8+PHBhdGggY2xhc3M9ImJveCIgZmlsbD0iI2JhYmFiYSIgZD0iTTEwNjIuOTggNDAuMmgyODEuOTR2MTAxLjc3aC0yODEuOTR6Ii8+PHBhdGggY2xhc3M9ImJveCIgZmlsbD0iIzdhN2E3YSIgZD0iTTEzNjIuNTQgNDAuMmgyODEuOTR2MTAxLjc3aC0yODEuOTR6Ii8+PHBhdGggY2xhc3M9ImJveCIgZmlsbD0iI2JhYmFiYSIgZD0iTTY1My41NiAxNjAuMzJoMjg1LjYzdjk2Ljc2SDY1My41NnoiLz48cGF0aCBjbGFzcz0iYm94IiBmaWxsPSIjN2E3YTdhIiBkPSJNOTU1LjY3IDE2MC4zMmg0OTkuODV2OTYuNzZIOTU1LjY3eiIvPjxwYXRoIGNsYXNzPSJib3giIGZpbGw9IiNiYWJhYmEiIGQ9Ik0xNDcwLjkxIDE2MC4zMmgyODAuMTR2OTYuNzZoLTI4MC4xNHoiLz48cGF0aCBjbGFzcz0iYm94IiBmaWxsPSIjN2E3YTdhIiBkPSJNNjUzLjU2IDI3My43NmgyODUuNjN2MTAwLjFINjUzLjU2eiIvPjxwYXRoIGNsYXNzPSJib3giIGZpbGw9IiNiYWJhYmEiIGQ9Ik05NTUuNjcgMjczLjc2aDQ5OS44NXYxMDAuMUg5NTUuNjd6Ii8+PHBhdGggY2xhc3M9ImJveCIgZmlsbD0iIzdhN2E3YSIgZD0iTTE0NzAuOTEgMjczLjc2aDI4MC4xNHYxMDAuMWgtMjgwLjE0eiIvPjwvc3ZnPg==
// @resource     kuroiru    https://kuroiru.co/logo/stuff/letter-small.png
// @resource     miruro     https://www.miruro.to/assets/miruro-text-transparent-white-DRs0RmF1.png
// @resource     pstream    data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMC4wMDggMTcuNDA1Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDE4LjY3NDgpIHNjYWxlKDAuMDAzMzMzIC0wLjAwMzMzMykiIGZpbGw9IiM4NTg5ZmYiPjxwYXRoIGQ9Ik0zOTEwIDU1MjcgYy0zMyAtNCAtMTQ1IC0xNyAtMjUwIC0yOCAtNjQ1IC03MyAtOTAwIC0xODcgLTkwMCAtNDA1IGwwIC04OSAxNTQgLTIgYzIwOSAtMiAyMjUgLTE3IDM4MSAtMzU0IDE4NiAtMzk5IDMzNyAtNDkxIDU1NyAtMzQxIDEwMyA3MCAxNzYgNjcgMjUyIC05IDE0MyAtMTQyIC0xNSAtMzQyIC0zMjAgLTQwNCBsLTEyMyAtMjUgMTg1IC0zOTMgYzEwMSAtMjE3IDE4OSAtMzk2IDE5NCAtMzk4IDYgLTMgODcgNiAxODIgMjAgNDk5IDcxIDExNjAgLTI5NiA5NzIgLTU0MSAtNzcgLTEwMSAtMTgzIC0xMDAgLTMwNyAyIC0xODYgMTU0IC00MDcgMjIzIC02MTAgMTg4IC0xMjMgLTIxIC0xMTkgLTkgLTgwIC0yNzQgNDAgLTI3MyAxOCAtNzAxIC00OCAtOTE2IC0yNSAtODIgMjUyIC05OSA0NjMgLTI4IDY1NSAyMjAgMTE0NiA3NDggMTMzMCAxNDMwIDQ0IDE2NSA0NiAyMDEgNTMgMTIwNiBsOCAxMDM1IC02NyA2NiBjLTE4NSAxODMgLTEzNzYgMzM2IC0yMDI2IDI2MHogbTEwNzggLTEyMTkgYzExOCAtODEgMjA0IC04NCAzMTIgLTEwIDIzOSAxNjMgNDUzIC03MyAyNDAgLTI2NSAtMjQxIC0yMTggLTcwMyAtMTc4IC04MzIgNzEgLTkzIDE3OSAxMDUgMzIzIDI4MCAyMDR6Ii8+PHBhdGggZD0iTTI0MTAgNDU5MSBjLTk1MCAtMjAxIC0yNDA0IC0xMDE1IC0yNDA5IC0xMzQ4IC0xIC02OSA3NzEgLTE3MDcgODg1IC0xODc4IDQyMiAtNjMzIDExODUgLTk4NCAxOTI0IC04ODYgMjIxIDI5IDI5MyA2OCA0ODIgMjY0IDU3NSA1OTQgNzI3IDE0NjYgMzkwIDIyMzIgLTIzMSA1MjUgLTc0OSAxNjAwIC03ODUgMTYzMCAtNTcgNDggLTIxNCA0NCAtNDg3IC0xNHogbTU3OSAtMTEyMiBjMTE0IC01NCAxNDUgLTE4OCA2NCAtMjgxIC00OCAtNTYgLTYwIC01OCAtMjY1IC00NyAtMTAyIDYgLTE3NyAtNDIgLTIyOSAtMTQzIC05NSAtMTg3IC0zMzkgLTE0NSAtMzM5IDU3IDAgMjkxIDQ4MiA1NTAgNzY5IDQxNHogbS0xMzE5IC02MzAgYzIxNSAtMTA2IDg1IC0zNTAgLTE3MyAtMzI2IC0xNDQgMTMgLTIwOSAtMjEgLTI3MCAtMTQwIC0xMDIgLTE5NyAtMzgxIC0xMTkgLTMzOSA5NCA1OSAyOTUgNTA2IDUwOCA3ODIgMzcyeiBtMTQ3MiAtNTc3IGMyMTYgLTIxNyAtMjg3IC03ODkgLTc4NiAtODk1IC00NzMgLTEwMCAtOTA5IDEyNyAtNjU0IDM0MSA3MSA2MCA5MyA2MiAyMjYgMjIgMzQ4IC0xMDYgNzM5IDc3IDkwMyA0MjMgODMgMTc3IDIwMSAyMTggMzExIDEwOXoiLz48L2c+PC9zdmc+
// @resource     scenenzbs  https://img.house-of-usenet.com/fd4bd542330506d41778e81860f29435c7f8795a7bbefbd9d297b7d79d5a067b.webp
// @resource     stremio    https://web.stremio.com/images/stremio_symbol.png
// @resource     gojolive   https://db.onlinewebfonts.com/t/65e1ae41ad95e8bed2ac45adc765795a.woff2
// @require      https://cdn.jsdelivr.net/gh/stdlib-js/string-base-distances-levenshtein@v0.2.2-umd/browser.js
// @grant        unsafeWindow
// @grant        GM_addStyle
// @grant        GM_getResourceURL
// @grant        GM_getResourceText
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_xmlhttpRequest
// @connect      moviemaps.org
// ==/UserScript==