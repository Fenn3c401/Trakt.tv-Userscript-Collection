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
// @downloadURL  https://raw.githubusercontent.com/Fenn3c401/Trakt.tv-Userscript-Collection/main/userscripts/dist/wkt34fcz.min.user.js
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
// @require      https://cdn.jsdelivr.net/gh/stdlib-js/string-base-distances-levenshtein@v0.2.2-umd/browser.js#sha256-0SIsWI8h2EJjO46eyuxL1XnuGNhycW/o0yxyw/U+jrU=
// @grant        unsafeWindow
// @grant        GM_addStyle
// @grant        GM_getResourceURL
// @grant        GM_getResourceText
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_xmlhttpRequest
// @connect      moviemaps.org
// ==/UserScript==

/* README
> Based on Tusky's [Trakt Watchlist Downloader](https://greasyfork.org/scripts/17991) with some sites/features/ideas borrowed from Accus1958's
> [trakt.tv Streaming Services Integration](https://greasyfork.org/scripts/486706), JourneyOver's [External links on Trakt](https://greasyfork.org/en/scripts/547223),
> sergeyhist's [Watch Now Alternative](https://github.com/sergeyhist/trakt-watch-now-alternative) and Tanase Gabriel's [Trakt.tv Universal Search](https://greasyfork.org/en/scripts/508020) userscripts.

### General
- Usually watch-now buttons of grid-items are only displayed if the title has been released and is available for streaming in your selected watch-now country.
    This script changes that by unhiding all watch-now buttons and color coding them as to the title's digital release status. White means the title is available for streaming
    in your selected watch-now country, light-grey means the title is available for streaming in another country and dark-grey means that the title is not available for streaming anywhere.
- `maxSidebarWnLinks` controls how many watch-now links are visible in the watch-now preview of the sidebar.
    The default is 4 and can be modfied in the userscript storage tab *(note: only displayed after first run)*.
- Nearly all links are direct links to e.g. individual episodes, as opposed to search links, anime included. There's also a fix for anime which default to the "wrong" episode group
    (e.g. Solo Leveling is listed with season 2 being part of 1 due to some tmdb shenanigans). YMMV.
- Some links are configured to only be added if certain conditions are met, e.g. anime links are only added for titles where "anime" is included in the genres.
- I only included anime streaming sites with predicatable path schemes, to allow for for direct episode linking. One of these is "Kuroiru", an anime aggregator
    which contains more direct episode links to other popular anime streaming sites like HiAnime or AnimeKai.

### Default Custom Links
#### Watch-Now
- [EXT](https://ext.to) (Torrent Aggregator)
- [Knaben Database](https://knaben.org) (Torrent Aggregator)
- [Stremio](https://www.stremio.com) (Debrid)
- [Kuroiru](https://kuroiru.co) (Anime Aggregator)
- [Miruro](https://www.miruro.to) (Anime Streaming)
- [AniDap](https://anidap.se) (Anime Streaming)
- [GOJO.LIVE](https://animetsu.cc) (Anime Streaming)
- [P-Stream](https://iframe.pstream.mov) (Streaming)
- [Cineby](https://www.cineby.gd) (Streaming)
- [Hexa](https://hexa.su) (Streaming)
- [FMOVIES+](https://www.fmovies.gd) (Streaming)
- [SceneNZBs](https://scenenzbs.com) (Usenet Indexer)
- [Debrid Media Manager](https://x.debridmediamanager.com) (Debrid)

#### External
- [Reddit](https://www.reddit.com)
- [Letterboxd](https://letterboxd.com)
- [ReverseTV](https://reversetv.enzon19.com)
- [MovieMaps](https://moviemaps.org)
- [Fandom](https://www.fandom.com)
- [AZNude](https://www.aznude.com)
- [CelebGate](https://celeb.gate.cc)
- [Rule 34](https://rule34.xxx)
- [MyAnimeList](https://myanimelist.net)
- [AniList](https://anilist.co)
- [AniDB](https://anidb.net)
- [LiveChart](https://www.livechart.me)
- [TheTVDB](https://thetvdb.com)
- [TVmaze](https://www.tvmaze.com)
- [Spotify](https://open.spotify.com)
- [MediUX](https://mediux.pro)
- [YouGlish](https://youglish.com)
- [Oracle of Bacon](https://oracleofbacon.org)
*/


"use strict";const customLinkHelperFns={getDefaultTorrentQuery:e=>`${encodeURIComponent(e.title)}${e.type==="movies"&&e.year?` ${e.year}`:""}${e.season!==void 0?` s${String(e.season).padStart(2,"0")}${e.episode?`e${String(e.episode).padStart(2,"0")}`:""}`:""}`,getDefaultDirectStreamingPath:e=>`/${e.type==="movies"?`movie/${e.ids.tmdb}`:`tv/${e.ids.tmdb}/${e.season!==void 0?e.season:"1"}/${e.episode?e.episode:"1"}`}`,getWnInnerHtml:({btnStyle:e="",img:t,imgStyle:n="",text:r,textStyle:i=""})=>`<div class="icon btn-custom" style="${e}">`+(t?`<img class="lazy" src="${GM_getResourceURL(t)}" style="${r?"max-width: 35%; ":""}${n}">`:"")+(r?`<div class="text" style="${t?"max-width: 65%; ":""}${i}">${r}</div>`:"")+"</div>",getWnCategoryHtml:e=>`[${watchNowCategories[e]}]`,getDdgFaviconHtml:(e,t="")=>`<img src="https://icons.duckduckgo.com/ip3/${e}.ico" style="${t}">`,getFaBrandsHtml:(e,t="")=>`<i class="fa-brands fa-${e}" style="${t}"></i>`,isAdultFemale:e=>/female|non_binary/.test(e.gender)&&e.birthday&&Date.now()-new Date(e.birthday)>5680368e5,fetchAnimeId:(e,t)=>`fetch('https://arm.haglund.dev/api/v2/themoviedb?id=${e.ids.tmdb}').then((r) => r.json()).then((arr) => arr.map((e) => (e.levDist = userscriptLevDist('${e.ids.slug}${e.season>1?`-${e.season_title.toLowerCase().replaceAll(/ |'/g,"-")}`:""}', e['anime-planet'] ?? ''), e)).sort((a, b) => a.levDist - b.levDist).find((e) => e['${t}'])?.['${t}'])`,fetchWikidataClaim:(e,t)=>`fetch('https://query.wikidata.org/sparql?format=json&query=${encodeURIComponent(`SELECT ?value WHERE { ?item wdt:${e.type==="movies"?"P4947":"P4983"} "${e.ids.tmdb}" . ?item wdt:P31/wdt:P279* wd:${e.type==="movies"?"Q11424":"Q5398426"} . ?item wdt:${t} ?value . } LIMIT 1`)}').then((r) => r.json()).then((r) => r.results.bindings[0]?.value?.value)`},watchNowCategories={animeAggregator:"Anime Aggregator",animeStreaming:"Anime Streaming",debrid:"Debrid",streaming:"Streaming",torrentAggregator:"Torrent Aggregator",usenetIndexer:"Usenet Indexer"},customWatchNowLinks=[{buildHref:e=>`https://ext.to/browse/?q=${customLinkHelperFns.getDefaultTorrentQuery(e)} 1080p 265${/shows|seasons/.test(e.type)?"&sort=size&order=desc":"&sort=seeds&order=desc"}&with_adult=1`,innerHtml:customLinkHelperFns.getWnInnerHtml({btnStyle:"background: #242730;",text:"EXT",textStyle:"background-image: linear-gradient(90deg, #3990f6 48.2%, #2c67a6 48.2% 66.2%, #3990f6 66.2%); background-clip: text; color: transparent; font-size: 50cqi; font-weight: 850; letter-spacing: -0.5px; padding-right: 3%;"}),tooltipHtml:customLinkHelperFns.getWnCategoryHtml("torrentAggregator")},{buildHref:e=>`https://web.stremio.com/#/detail/${e.type==="movies"?`movie/${e.ids.imdb}/${e.ids.imdb}`:`series/${e.ids.imdb}${e.type==="seasons"?`?season=${e.season}`:e.type==="episodes"?encodeURIComponent(`/${e.ids.imdb}:${e.season}:${e.episode}`):""}`}`,innerHtml:customLinkHelperFns.getWnInnerHtml({btnStyle:"background: #19163a;",img:"stremio",text:"Stremio"}),tooltipHtml:customLinkHelperFns.getWnCategoryHtml("debrid")},{buildHref:e=>`javascript:${customLinkHelperFns.fetchAnimeId(e,"myanimelist")}.then((id) => open('https://kuroiru.co/anime/' + id + '/ep' + ${e.episode??"1"}))`,innerHtml:customLinkHelperFns.getWnInnerHtml({btnStyle:"background: #191919;",img:"kuroiru"}),tooltipHtml:customLinkHelperFns.getWnCategoryHtml("animeAggregator"),includeIf:e=>e.genres.includes("anime")},{buildHref:e=>`javascript:${customLinkHelperFns.fetchAnimeId(e,"anilist")}.then((id) => open('https://www.miruro.to/watch/' + id + '/episode-' + ${e.episode??"1"}))`,innerHtml:customLinkHelperFns.getWnInnerHtml({btnStyle:"background: #0e0e0e;",img:"miruro"}),tooltipHtml:customLinkHelperFns.getWnCategoryHtml("animeStreaming"),includeIf:e=>e.genres.includes("anime")},{buildHref:e=>`javascript:${customLinkHelperFns.fetchAnimeId(e,"anilist")}.then((id) => open('https://anidap.se/watch?id=' + id + '&ep=' + ${e.episode??"1"} + '&provider=yuki&type=sub'))`,innerHtml:customLinkHelperFns.getWnInnerHtml({btnStyle:"background: #1f2728;",img:"anidap",imgStyle:"transform: scale(2.2);"}),tooltipHtml:customLinkHelperFns.getWnCategoryHtml("animeStreaming"),includeIf:e=>e.genres.includes("anime")},{buildHref:e=>`javascript:${customLinkHelperFns.fetchAnimeId(e,"anilist")}.then((id) => open('https://animetsu.cc/watch/' + id + '?ep=' + ${e.episode??"1"}))`,innerHtml:customLinkHelperFns.getWnInnerHtml({btnStyle:"background: #111;",text:"GOJO.LIVE",textStyle:"font-family: GangOfThree; font-size: 18cqi;"}),tooltipHtml:customLinkHelperFns.getWnCategoryHtml("animeStreaming"),includeIf:e=>e.genres.includes("anime")},{buildHref:e=>`https://knaben.org/search/${customLinkHelperFns.getDefaultTorrentQuery(e)} 1080p (265|av1)/${e.type==="movies"?"3000000":e.genres.includes("anime")?"6000000":"2000000"}/1/seeders`,innerHtml:`<div class="icon btn-custom" style="background: #323537; flex-direction: column;">${GM_getResourceText("knaben").replace("<svg",'<svg style="max-height: 79%;"')}<div class="text" style="font-family: system-ui; font-size: 10cqi; letter-spacing: 0.3px;">KNABEN DATABASE</div></div>`,tooltipHtml:customLinkHelperFns.getWnCategoryHtml("torrentAggregator")},{buildHref:e=>`https://iframe.pstream.mov/embed/tmdb-${e.type==="movies"?`movie-${e.ids.tmdb}`:`tv-${e.ids.tmdb}/${e.season!==void 0?e.season:"1"}/${e.episode?e.episode:"1"}`}`,innerHtml:customLinkHelperFns.getWnInnerHtml({btnStyle:"background: #110d1b;",img:"pstream",text:"P-Stream",textStyle:"font-size: 11cqi;"}),tooltipHtml:customLinkHelperFns.getWnCategoryHtml("streaming")},{buildHref:e=>`https://www.cineby.gd${customLinkHelperFns.getDefaultDirectStreamingPath(e)}?play=true`,innerHtml:customLinkHelperFns.getWnInnerHtml({btnStyle:"background: #440000;",img:"cineby",text:"Cineby",textStyle:"font-family: system-ui; font-size: 17cqi;"}),tooltipHtml:customLinkHelperFns.getWnCategoryHtml("streaming")},{buildHref:e=>`https://hexa.su/watch${customLinkHelperFns.getDefaultDirectStreamingPath(e)}`,innerHtml:customLinkHelperFns.getWnInnerHtml({btnStyle:"background: #111317;",img:"hexa"}),tooltipHtml:customLinkHelperFns.getWnCategoryHtml("streaming")},{buildHref:e=>`https://www.fmovies.gd/watch${customLinkHelperFns.getDefaultDirectStreamingPath(e)}`,innerHtml:customLinkHelperFns.getWnInnerHtml({btnStyle:"background: #18252b;",text:"FMOVIES+",textStyle:"background-image: linear-gradient(to right, rgb(13 202 240), rgb(13 202 240 / 35%)); background-clip: text; color: transparent; font-family: system-ui; font-size: 15cqi; font-weight: 800; letter-spacing: 0.3px; border: 2px solid rgb(13 202 240 / 25%); border-radius: 5px; padding: 5%;"}),tooltipHtml:customLinkHelperFns.getWnCategoryHtml("streaming")},{buildHref:e=>`https://scenenzbs.com/search/${customLinkHelperFns.getDefaultTorrentQuery(e)} 1080p (265|av1)`,innerHtml:customLinkHelperFns.getWnInnerHtml({btnStyle:"background: #212529;",img:"scenenzbs",imgStyle:"transform: scale(1.8) translateY(-1px);"}),tooltipHtml:customLinkHelperFns.getWnCategoryHtml("usenetIndexer")},{buildHref:e=>`https://x.debridmediamanager.com/${e.ids.imdb}`,innerHtml:customLinkHelperFns.getWnInnerHtml({btnStyle:"background: #2e3e51;",img:"dmm",imgStyle:"transform: scale(1.7);",text:"Debrid<br>Media<br>Manager",textStyle:"font-size: 12cqi;"}),tooltipHtml:customLinkHelperFns.getWnCategoryHtml("debrid")}],customExternalLinks=[{buildHref:e=>`/${/seasons|episodes/.test(e.type)?"shows":e.type}/${e.ids.slug}${e.season!==void 0?`/seasons/${e.season}${e.episode?`/episodes/${e.episode}`:""}`:""}/wikipedia`,innerHtml:customLinkHelperFns.getFaBrandsHtml("wikipedia-w"),tooltipHtml:"Wikipedia"},{buildHref:e=>`https://duckduckgo.com/?q=site:reddit.com Discussion ${encodeURIComponent(e.title)}${e.type==="movies"?` ${e.year}`:""}${e.season!==void 0?` Season ${e.season}${e.episode?` Episode ${e.episode}`:""}`:""}`,innerHtml:customLinkHelperFns.getFaBrandsHtml("reddit"),tooltipHtml:"Reddit",includeIf:e=>e.type!=="people"},{buildHref:e=>`https://letterboxd.com/tmdb/${e.ids.tmdb}`,innerHtml:customLinkHelperFns.getFaBrandsHtml("letterboxd"),tooltipHtml:"Letterboxd",includeIf:e=>e.type==="movies"},{buildHref:e=>`https://reversetv.enzon19.com/${/seasons|episodes/.test(e.type)?"shows":e.type}/${e.ids.slug}${e.season!==void 0?`/seasons/${e.season_old??e.season}${e.episode?`/episodes/${e.episode_old??e.episode}`:""}`:""}`,innerHtml:customLinkHelperFns.getDdgFaviconHtml("reversetv.enzon19.com","filter: invert(1) grayscale(1);"),tooltipHtml:"ReverseTV",includeIf:e=>e.type!=="people"},{buildHref:e=>`javascript:GM_xmlhttpRequest({ url: 'https://moviemaps.org/ajax/search?token=${encodeURIComponent(e.title)}&max_matches=1&use_similar=1', responseType: 'json', onload: (r) => open('https://moviemaps.org' + (r.response[0]?.url ?? '/search?q=${encodeURIComponent(e.title)}')) })`,innerHtml:'<i class="fa-regular fa-map"></i>',tooltipHtml:"MovieMaps",includeIf:e=>e.type!=="people"&&!["animation","anime"].some(t=>e.genres.includes(t))},{buildHref:e=>`https://${e.title.toLowerCase().replaceAll(/[^a-z0-9]/g,"")}.fandom.com/wiki/`,innerHtml:customLinkHelperFns.getDdgFaviconHtml("fandom.com","filter: invert(1) grayscale(1);"),tooltipHtml:"Fandom",includeIf:e=>e.type!=="people"},{buildHref:e=>`https://aznude.com/${e.type==="people"?`view/celeb/${e.name.toLowerCase()[0]}/${e.name.toLowerCase().replaceAll(" ","")}.html`:`search.html?q=${encodeURIComponent(e.title)}`}`,innerHtml:customLinkHelperFns.getDdgFaviconHtml("aznude.com","transform: scale(1.1);"),tooltipHtml:"AZNude",includeIf:e=>e.type==="people"&&customLinkHelperFns.isAdultFemale(e)||e.type!=="people"&&!["animation","anime"].some(t=>e.genres.includes(t))},{buildHref:e=>`https://celeb.gate.cc/${e.name.toLowerCase().replaceAll(" ","-")}/gallery.html?s=i.clicks.total&cdir=desc#images`,innerHtml:'<img src="https://celeb.gate.cc/assets/logo.png" style="filter: brightness(1.3) grayscale(1);">',tooltipHtml:"CelebGate",includeIf:e=>e.type==="people"&&customLinkHelperFns.isAdultFemale(e)},{buildHref:e=>`https://rule34.xxx/index.php?page=post&s=list&tags=sort:score ${e.title.toLowerCase().replaceAll(/[^a-z0-9-:; ]/g,"").replaceAll(" ","_")}`,innerHtml:customLinkHelperFns.getDdgFaviconHtml("rule34.xxx"),tooltipHtml:"Rule 34",includeIf:e=>e.type!=="people"},{buildHref:e=>`javascript:${customLinkHelperFns.fetchAnimeId(e,"myanimelist")}.then((id) => open('https://myanimelist.net/anime/' + id))`,innerHtml:customLinkHelperFns.getDdgFaviconHtml("myanimelist.net"),tooltipHtml:"MyAnimeList",includeIf:e=>e.genres?.includes("anime")},{buildHref:e=>`javascript:${customLinkHelperFns.fetchAnimeId(e,"anilist")}.then((id) => open('https://anilist.co/anime/' + id))`,innerHtml:customLinkHelperFns.getDdgFaviconHtml("anilist.co"),tooltipHtml:"AniList",includeIf:e=>e.genres?.includes("anime")},{buildHref:e=>`javascript:${customLinkHelperFns.fetchAnimeId(e,"anidb")}.then((id) => open('https://anidb.net/anime/' + id))`,innerHtml:customLinkHelperFns.getDdgFaviconHtml("anidb.net"),tooltipHtml:"AniDB",includeIf:e=>e.genres?.includes("anime")},{buildHref:e=>`javascript:${customLinkHelperFns.fetchAnimeId(e,"livechart")}.then((id) => open('https://livechart.me/anime/' + id))`,innerHtml:customLinkHelperFns.getDdgFaviconHtml("www.livechart.me"),tooltipHtml:"LiveChart",includeIf:e=>e.genres?.includes("anime")},{buildHref:e=>`https://www.themoviedb.org/${e.type==="people"?"person":e.type==="movies"?"movie":"tv"}/${e.ids.tmdb}${e.season!==void 0?`/season/${e.season}${e.episode?`/episode/${e.episode}`:""}`:""}`,innerHtml:'<img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg">',tooltipHtml:"TMDB"},{buildHref:e=>`https://www.imdb.com/${e.type==="people"?"name":"title"}/${e.ids.imdb}${e.season?`/episodes/?season=${e.season}`:""}`,innerHtml:customLinkHelperFns.getFaBrandsHtml("imdb","font-size: 24px;"),tooltipHtml:"IMDb"},{buildHref:e=>`javascript:${customLinkHelperFns.fetchWikidataClaim(e,e.type==="movies"?"P12196":"P4835")}.then((id) => open('https://www.thetvdb.com/dereferrer/${e.type==="movies"?"movie":"series"}/' + id))`,innerHtml:customLinkHelperFns.getDdgFaviconHtml("thetvdb.com"),tooltipHtml:"TheTVDB",includeIf:e=>e.type!=="people"},{buildHref:e=>e.type!=="people"?`javascript:fetch('https://api.tvmaze.com/lookup/shows?imdb=${e.ids.imdb}').then((r) => open(r.url.replace('api.', '')))`:`https://www.tvmaze.com/search?q=${e.name.toLowerCase().replaceAll(" ","+")}`,innerHtml:customLinkHelperFns.getDdgFaviconHtml("tvmaze.com"),tooltipHtml:"TVmaze",includeIf:e=>/shows|seasons|episodes|people/.test(e.type)},{buildHref:e=>$("#external-link-justwatch").attr("href"),innerHtml:'<i class="fa-kit fa-justwatch"></i>',tooltipHtml:"JustWatch",includeIf:e=>$("#external-link-justwatch").length},{buildHref:e=>`https://open.spotify.com/search/${e.title} Soundtrack`,innerHtml:customLinkHelperFns.getFaBrandsHtml("spotify"),tooltipHtml:"Spotify",includeIf:e=>e.type!=="people"},{buildHref:e=>e.type==="movies"?`https://fanart.tv/movie/${e.ids.tmdb}`:`javascript:fetch('https://api.tvmaze.com/lookup/shows?imdb=${e.ids.imdb}').then((r) => r.json()).then((r) => open('https://fanart.tv/series/' + r.externals.thetvdb))`,innerHtml:customLinkHelperFns.getDdgFaviconHtml("fanart.tv"),tooltipHtml:"Fanart.tv",includeIf:e=>e.type!=="people"},{buildHref:e=>`https://mediux.pro/${e.type==="movies"?"movies":"shows"}/${e.ids.tmdb}`,innerHtml:customLinkHelperFns.getDdgFaviconHtml("mediux.pro"),tooltipHtml:"MediUX",includeIf:e=>e.type!=="people"},{buildHref:e=>`https://youglish.com/pronounce/${e.name.replaceAll(" ","_")}/english`,innerHtml:"YG",tooltipHtml:"YouGlish",includeIf:e=>e.type==="people"},{buildHref:e=>`https://oracleofbacon.org/graph.php?who=${e.name.replaceAll(" ","+")}`,innerHtml:"Bacon\xB0",includeIf:e=>e.type==="people"},{buildHref:e=>$("#external-link-official").attr("href"),innerHtml:'<i class="fa-light fa-clapperboard-play"></i>',tooltipHtml:"Official Site",includeIf:e=>$("#external-link-official").length}];let $,trakt;unsafeWindow.GM_xmlhttpRequest=GM_xmlhttpRequest,unsafeWindow.userscriptLevDist=levenshteinDistance,unsafeWindow.userscriptItemDataCache={};const gmStorage={maxSidebarWnLinks:4,...GM_getValue("customLinks")};GM_setValue("customLinks",gmStorage),addStyles(),document.addEventListener("turbo:load",async()=>{if($??=unsafeWindow.jQuery,trakt??=unsafeWindow.userscriptTraktAPIModule?.isFulfilled?await unsafeWindow.userscriptTraktAPIModule:null,!$)return;const e=location.pathname,t=$(".notable-summary").attr("data-url")||$(".sidebar").attr("data-url"),n=/^\/(movies|shows|seasons|episodes|people)\/[^\/]+$/.test(t)?await getItemData(t):void 0;if(e===location.pathname&&(customExternalLinks.length&&n&&(addExternalLinksToSidebar(n),addExternalLinksToAdditionalStats(n)),customWatchNowLinks.length)){n&&n.type!=="people"&&(addWatchNowLinksToSidebar(n),addWatchNowLinksToActionButtons(n));const r=$("#watch-now-content"),i=$("#header-search-autocomplete-results");r.has(".streaming-links").length&&addWatchNowLinksToModal(r),$(document).off("ajaxSuccess.userscript83278").on("ajaxSuccess.userscript83278",(s,o,a)=>{r.length&&a.url.includes("/streaming_links?country=")&&addWatchNowLinksToModal(r),i.length&&/^\/search\/autocomplete(?!\/(people|lists|users))/.test(a.url)&&addWatchNowLinksToSearchResults(i)})}},{capture:!0});const getCustomLinkHtml=(e,t,n)=>{const r=e.buildHref(t);return`<a ${r.startsWith("javascript:")?'onauxclick="event.button === 1 && this.click();"':'target="_blank"'} href="${r}" data-original-title="${e.tooltipHtml??""}">${n||e.innerHtml}</a>`};function addExternalLinksToSidebar(e){$(customExternalLinks.filter(t=>t.includeIf?t.includeIf(e):!0).map(t=>getCustomLinkHtml(t,e)).join("")).prependTo("#info-wrapper .sidebar .external > li").tooltip({container:"body",placement:"bottom",html:!0})}function addExternalLinksToAdditionalStats(e){$(customExternalLinks.filter(t=>t.includeIf?t.includeIf(e):!0).map(t=>getCustomLinkHtml(t,e,$(t.tooltipHtml??t.innerHtml).text()||(t.tooltipHtml??t.innerHtml))+", ").join("")).insertAfter('.additional-stats.with-external-links label:contains("Links")')}function addWatchNowLinksToSidebar(e){const t=$("#info-wrapper .sidebar");t.has(".btn-watch-now").length&&!t.has(".streaming-links").length&&t.find(".btn-watch-now").before('<div class="streaming-links"><div class="sources"></div></div>'),$(customWatchNowLinks.filter(n=>n.includeIf?n.includeIf(e):!0).map(n=>getCustomLinkHtml(n,e)).join("")).prependTo(t.find(".streaming-links .sources")).attr("data-container","body").attr("data-html","true").tooltip()}function addWatchNowLinksToActionButtons(e){const t=$("#overview .action-buttons");if(t.length&&!t.has(".btn-watch-now").length){const n=$("#info-wrapper .sidebar .btn-watch-now"),r=n.attr("data-source-counts"),i=n.attr("data-url");if(!r||!i)return;t.prepend(`<div class="streaming-links"><div class="sources"></div></div><a class="btn btn-block btn-summary btn-watch-now visible-xs selected" data-source-counts="${r}" data-target="#watch-now-modal" data-toggle="modal" data-url="${i}" href="#"><i class="fa fa-fw fa-solid fa-play"></i><div class="text"><div class="main-info">Watch Now</div><div class="under-info">0 streaming services</div></div></a>`)}$(customWatchNowLinks.filter(n=>n.includeIf?n.includeIf(e):!0).map(n=>getCustomLinkHtml(n,e)).join("")).prependTo(t.find(".sources")).attr("data-html","true").tooltip()}async function addWatchNowLinksToSearchResults(e){e.find('> .search-result:not([data-type="people"])').each(async function(){const t=await getItemData($(this).attr("data-url"));$(this).has(".streaming-links").length||$(this).append('<div class="streaming-links"><div class="sources"></div></div>'),$(customWatchNowLinks.filter(n=>n.includeIf?n.includeIf(t):!0).map(n=>getCustomLinkHtml(n,t)).join("")).prependTo($(this).find(".streaming-links .sources")).tooltip({placement:"bottom",html:!0}).on("click",n=>n.stopPropagation())})}async function addWatchNowLinksToModal(e){const t=await getItemData(e.attr("data-url"));e.find("> .streaming-links").prepend('<div class="title">Custom Links</div><div class="section"></div>'+(e.has(".no-links").length?'<div class="title"></div>':"")),$(customWatchNowLinks.filter(n=>n.includeIf?n.includeIf(t):!0).map(n=>getCustomLinkHtml(n,t,n.innerHtml+(n.tooltipHtml?`<div class="price">${n.tooltipHtml}</div>`:""))).join("")).appendTo(e.find(".section").first())}async function getItemData(e){const t=async i=>{const s=await fetch(`https://api.tvmaze.com/lookup/shows?imdb=${i.ids.imdb}`).then(a=>a.ok?fetch(a.url+"?embed[]=episodes&embed[]=seasons"):null).then(a=>a?.ok?a.json():null),o=s?._embedded.episodes.find(a=>a.name.trim().toLowerCase()===i.episode_title.trim().toLowerCase());o&&(i.season_old=i.season,i.episode_old=i.episode,i.season=o.season,i.episode=o.number,i.season_title=s._embedded.seasons.find(a=>a.number==o.season).name||`Season ${o.season}`,["season_original_title","season_ids","season_first_aired","season_episode_count"].forEach(a=>delete i[a]))},n=async()=>{const i=e.split("/").filter(Boolean),s=i[0];let o,a,p,m,d;if(s==="seasons"||s==="shows"&&!isNaN(i[1])){const l=await fetch(e);if(!l.ok)throw new Error(`getItemData: Fetching ${l.url} failed with status: ${l.status}`);o=new DOMParser().parseFromString(await l.text(),"text/html"),a=$(o).find(".notable-summary")}s==="episodes"&&([{show:p,episode:d}]=await trakt.search.id({id_type:"trakt",id:i[1],type:"episode",extended:"full"}),m=await trakt.seasons.season.info({id:p.ids.trakt,season:d.season,extended:"full"}));const c={item_url:e,type:s,...s!=="episodes"&&{...await trakt[s==="seasons"?"shows":s].summary({id:a?.attr("data-show-id")??i[1],extended:"full"})},...s==="seasons"&&{season:+a.attr("data-season-number"),season_title:$(o).find('#level-up-link[href*="/seasons/"]').text()||$(o).find("#summary-wrapper .mobile-title h1").contents()[0]?.textContent.trim()},...s==="episodes"&&{...p,season:m.number,season_title:m.title,season_original_title:m.original_title,season_ids:m.ids,season_first_aired:m.first_aired,season_episode_count:m.episode_count,episode:d.number,episode_abs:d.number_abs,episode_title:d.title,episode_original_title:d.original_title,episode_ids:d.ids,episode_first_aired:d.first_aired,episode_type:d.episode_type}};return s==="episodes"&&c.genres.includes("anime")&&await t(c),c},r=async()=>{let i,s;const o=await fetch(e);if(!o.ok)throw new Error(`getItemData: Fetching ${o.url} failed with status: ${o.status}`);if(i=new DOMParser().parseFromString(await o.text(),"text/html"),o.url.includes("/seasons/")){const u=await fetch(o.url.split("/seasons/")[0]);if(!u.ok)throw new Error(`getItemData: Fetching ${u.url} failed with status: ${u.status}`);s=new DOMParser().parseFromString(await u.text(),"text/html")}const a=e.split("/").filter(Boolean)[0],p=$(i).find(".notable-summary"),m=$(i).find(".additional-stats > li"),d=s?$(s).find(".additional-stats > li"):void 0,c=(u,f=m)=>f.filter((h,g)=>$(g).find("label").text().toLowerCase()===u),l={item_url:e,type:a,ids:{trakt:+(p.attr("data-movie-id")??p.attr("data-show-id")??p.attr("data-person-id")),imdb:$(s??i).find("#external-link-imdb").attr("href")?.match(/(?:tt|nm)\d+/)?.[0],tmdb:+$(i).find("#external-link-tmdb").attr("href")?.match(/\d+/)?.[0]||void 0,slug:o.url.split("/")[4]},...a!=="people"&&{title:$(i).find(':is(body > [itemtype$="Movie"], body > [itemtype$="TVSeries"], body > [itemtype] > [itemtype$="TVSeries"]) > meta[itemprop="name"]').attr("content")?.match(/(.+?)(?: \(\d{4}\))?$/)?.[1],original_title:c("original title",d).contents().get(-1)?.textContent,year:+$(s??i).find("#summary-wrapper .mobile-title .year")[0]?.textContent||void 0,genres:m.find('[itemprop="genre"]').map((u,f)=>$(f).text().toLowerCase()).get()},.../seasons|episodes/.test(a)&&{season:+p.attr("data-season-number"),season_title:$(i).find('#level-up-link[href*="/seasons/"]').text()||$(i).find("#summary-wrapper .mobile-title h1").contents()[0]?.textContent.trim()},...a==="episodes"&&{episode:+p.attr("data-episode-number"),episode_title:$(i).find('body > [itemtype$="TVEpisode"] > meta[itemprop="name"]').attr("content")},...a==="people"&&{name:$(i).find('body > [itemtype$="Person"] > meta[itemprop="name"]').attr("content"),gender:c("gender").contents().get(-1)?.textContent.toLowerCase().replace("-","_"),birthday:c("birthday").children().last().attr("data-date")}};return Object.hasOwn(l,"original_title")&&(l.original_title??=l.title),l.type==="episodes"&&l.genres.includes("anime")&&await t(l),l};return unsafeWindow.userscriptItemDataCache[e]??=await(trakt?n:r)()}function addStyles(){const e=document.cookie.match(/(?:^|; )watchnow_country=([^;]*)/)?.[1]??new Intl.Locale(navigator.language).region.toLowerCase();GM_addStyle(`
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
#info-wrapper .sidebar .streaming-links a:nth-child(n+${gmStorage.maxSidebarWnLinks+1} of a),
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
  `)}