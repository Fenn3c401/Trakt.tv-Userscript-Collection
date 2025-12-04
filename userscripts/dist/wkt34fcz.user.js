// ==UserScript==
// @name         Trakt.tv | Custom Links (Watch-Now + External)
// @description  Adds custom links to all the "Watch-Now" and "External" sections (for titles and people). The ~35 defaults include Letterboxd, Stremio, streaming sites (e.g. P-Stream, Hexa), torrent aggregators (e.g. EXT, Knaben), various anime sites (both for streaming and tracking) and much more. Easily customizable. See README for details.
// @version      0.7.2
// @namespace    https://github.com/Fenn3c401
// @author       Fenn3c401
// @license      GPL-3.0-or-later
// @homepageURL  https://github.com/Fenn3c401/Trakt.tv-Userscript-Collection#readme
// @supportURL   https://github.com/Fenn3c401/Trakt.tv-Userscript-Collection/issues
// @updateURL    https://raw.githubusercontent.com/Fenn3c401/Trakt.tv-Userscript-Collection/main/userscripts/meta/wkt34fcz.meta.js
// @downloadURL  https://raw.githubusercontent.com/Fenn3c401/Trakt.tv-Userscript-Collection/main/userscripts/dist/wkt34fcz.user.js
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
// @grant        GM_openInTab
// @grant        GM.xmlHttpRequest
// @connect      moviemaps.org
// ==/UserScript==

/* README
> Based on Tusky's [Trakt Watchlist Downloader](https://greasyfork.org/scripts/17991) with some sites/features/ideas borrowed from Accus1958's
> [trakt.tv Streaming Services Integration](https://greasyfork.org/scripts/486706), JourneyOver's [External links on Trakt](https://greasyfork.org/en/scripts/547223),
> sergeyhist's [Watch Now Alternative](https://github.com/sergeyhist/trakt-watch-now-alternative) and Tanase Gabriel's [Trakt.tv Universal Search](https://greasyfork.org/en/scripts/508020) userscripts.

### General
- `maxSidebarWnLinks` controls how many watch-now links are visible in the watch-now preview of the sidebar. The default is 4 and can be modfied in the userscript storage tab *(note: only displayed after first run)*.
    There you can also modify `torrentResolution` which defaults to `1080p` and is used for the query of the torrent and usenet links. For modifications beyond that you'll have to mess with the actual config arrays,
    which will disable automatic updates of the userscript.
- Nearly all links are direct links to e.g. individual episodes, as opposed to search links, anime included. There's also a fix for anime which default to the "wrong" episode group
    (e.g. Solo Leveling is listed with season 2 being part of 1 due to some tmdb shenanigans). YMMV.
- Some urls are constructed dynamically on click. That means there might be a small delay before the page opens. The resolved url is then also set as href, so on a second click the element behaves just like a regular
    link. You can also resolve a dynamic link on right click. So you can e.g. do a double right click with a small delay in between to use the "open in incognito window" option like you can with a regular link.
- Some links are configured to only be added if certain conditions are met, e.g. anime links are only added for titles where "anime" is included in the genres.
- I only included anime streaming sites with predicatable path schemes, to allow for for direct episode linking. One of these is "Kuroiru", an anime aggregator
    which contains more direct episode links to other popular anime streaming sites like HiAnime or AnimeKai.
- Usually watch-now buttons of grid-items are only displayed if the title has been released and is available for streaming in your selected watch-now country.
    This script changes that by unhiding all watch-now buttons and color coding them as to the title's digital release status. White means the title is available for streaming
    in your selected watch-now country, light-grey means the title is available for streaming in another country and dark-grey means that the title is not available for streaming anywhere.
- A scrollable plot summary is added to the watch-now modal. The watch-now modal and the sidebar are also made scrollable.
- The mobile-layout sidebar from the screenshots is part of the [Trakt.tv | Bug Fixes and Optimizations](brzmp0a9.md) userscript.

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
- [Reddit](https://www.reddit.com) (Discussions)
- [Letterboxd](https://letterboxd.com)
- [ReverseTV](https://reversetv.enzon19.com) ("Where have I seen each cast member before?")
- [MovieMaps](https://moviemaps.org) (Interactive map of filming locations)
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
- [Spotify](https://open.spotify.com) (Soundtrack)
- [MediUX](https://mediux.pro) (similar to fanart.tv)
- [YouGlish](https://youglish.com) ("How do I pronounce this actors's name?")
- [Oracle of Bacon](https://oracleofbacon.org) ([Six Degrees of Kevin Bacon](https://en.wikipedia.org/wiki/Six_Degrees_of_Kevin_Bacon))
*/


/* global levenshteinDistance */

'use strict';

const customLinkHelperFns = {
  getDefaultTorrentQuery: (i) =>
    `${encodeURIComponent(i.title)}${i.type === 'movies' && i.year ? ` ${i.year}` : ''}` +
    `${i.season !== undefined ? ` s${String(i.season).padStart(2, '0')}${i.episode ? `e${String(i.episode).padStart(2, '0')}` : ''}` : ''}`,
  getDefaultDirectStreamingPath: (i) => `/${i.type === 'movies' ? `movie/${i.ids.tmdb}` : `tv/${i.ids.tmdb}/${i.season !== undefined ? i.season : '1'}/${i.episode ? i.episode : '1'}`}`,
  getWnInnerHtml: ({ btnStyle = '', img, imgStyle = '', text, textStyle = '' }) =>
    `<div class="icon btn-custom" style="${btnStyle}">` +
      (img ? `<img class="lazy" src="${GM_getResourceURL(img)}" style="${text ? 'max-width: 35%; ' : ''}${imgStyle}">` : '') +
      (text ? `<div class="text" style="${img ? 'max-width: 65%; ' : ''}${textStyle}">${text}</div>` : '') +
    `</div>`,
  getWnCategoryHtml: (category) => `[${watchNowCategories[category]}]`,
  getDdgFaviconHtml: (site, style = '') => `<img src="https://icons.duckduckgo.com/ip3/${site}.ico" style="${style}">`,
  getFaBrandsHtml: (brand, style = '') => `<i class="fa-brands fa-${brand}" style="${style}"></i>`,
  isAdultFemale: (i) => /female|non_binary/.test(i.gender) && i.birthday && Date.now() - new Date(i.birthday) > 18 * 365.25 * 24 * 60 * 60 * 1000,
  fetchAnimeId: (i, site) =>
    `fetch('https://arm.haglund.dev/api/v2/themoviedb?id=${i.ids.tmdb}').then((r) => r.json())` + // cached on disk for 6 hours
      `.then((arr) => arr.map((e) => (e.levDist = userscriptLevDist('${i.ids.slug}${i.season > 1 ? `-${i.season_title.toLowerCase().replaceAll(/ |'/g, '-')}` : ''}', e['anime-planet'] ?? ''), e))` +
                        `.sort((a, b) => a.levDist - b.levDist)` +
                        `.find((e) => e['${site}'])?.['${site}'])`,
  fetchWikidataClaim: (i, claimId) => // not for people
    `fetch('https://query.wikidata.org/sparql?format=json&query=${encodeURIComponent( // cached on disk for 5 mins
      `SELECT ?value WHERE { ` +
        `?item wdt:${i.type === 'movies' ? 'P4947' : 'P4983'} "${i.ids.tmdb}" . ` +
        `?item wdt:P31/wdt:P279* wd:${i.type === 'movies' ? 'Q11424' : 'Q5398426'} . ` +
        `?item wdt:${claimId} ?value . ` +
      `} LIMIT 1`
    )}').then((r) => r.json())` +
      `.then((r) => r.results.bindings[0]?.value?.value)`,
  hideNativeExternalLink: (idSuffix) => `#external-link-${idSuffix} { display: none !important; }`,
};

const watchNowCategories = {
  animeAggregator: 'Anime Aggregator',
  animeStreaming: 'Anime Streaming',
  debrid: 'Debrid',
  streaming: 'Streaming',
  torrentAggregator: 'Torrent Aggregator',
  usenetIndexer: 'Usenet Indexer',
};

const customWatchNowLinks = [
  {
    buildHref: (i) => `https://ext.to/browse/?q=${customLinkHelperFns.getDefaultTorrentQuery(i)} ${gmStorage.torrentResolution} 265${/shows|seasons/.test(i.type) ? '&sort=size&order=desc' : '&sort=seeds&order=desc'}&with_adult=1`, // https://ext.to/advanced/
    innerHtml: customLinkHelperFns.getWnInnerHtml({ btnStyle: 'background: #242730;', text: 'EXT', textStyle: 'background-image: linear-gradient(90deg, #3990f6 48.2%, #2c67a6 48.2% 66.2%, #3990f6 66.2%); background-clip: text; color: transparent; font-size: 50cqi; font-weight: 850; letter-spacing: -0.5px; padding-right: 3%;' }),
    tooltipHtml: customLinkHelperFns.getWnCategoryHtml('torrentAggregator'),
  },
  {
    buildHref: (i) => `https://web.stremio.com/#/detail/${i.type === 'movies' ? `movie/${i.ids.imdb}/${i.ids.imdb}` : `series/${i.ids.imdb}${i.type === 'seasons' ? `?season=${i.season}` : i.type === 'episodes' ? encodeURIComponent(`/${i.ids.imdb}:${i.season}:${i.episode}`) : ''}`}`,
    // to open in desktop app use: buildHref: (i) => `stremio:///detail/...
    innerHtml: customLinkHelperFns.getWnInnerHtml({ btnStyle: 'background: #19163a;', img: 'stremio', text: 'Stremio' }),
    tooltipHtml: customLinkHelperFns.getWnCategoryHtml('debrid'),
  },
  {
    buildHref: (i) => `${customLinkHelperFns.fetchAnimeId(i, 'myanimelist')}.then((id) => 'https://kuroiru.co/anime/' + id + '/ep' + ${i.episode ?? '1'})`,
    innerHtml: customLinkHelperFns.getWnInnerHtml({ btnStyle: 'background: #191919;', img: 'kuroiru' }),
    tooltipHtml: customLinkHelperFns.getWnCategoryHtml('animeAggregator'),
    includeIf: (i) => i.genres.includes('anime'),
  },
  {
    buildHref: (i) => `${customLinkHelperFns.fetchAnimeId(i, 'anilist')}.then((id) => 'https://www.miruro.to/watch/' + id + '/episode-' + ${i.episode ?? '1'})`,
    innerHtml: customLinkHelperFns.getWnInnerHtml({ btnStyle: 'background: #0e0e0e;', img: 'miruro' }),
    tooltipHtml: customLinkHelperFns.getWnCategoryHtml('animeStreaming'),
    includeIf: (i) => i.genres.includes('anime'),
  },
  {
    buildHref: (i) => `${customLinkHelperFns.fetchAnimeId(i, 'anilist')}.then((id) => 'https://anidap.se/watch?id=' + id + '&ep=' + ${i.episode ?? '1'} + '&provider=yuki&type=sub')`,
    innerHtml: customLinkHelperFns.getWnInnerHtml({ btnStyle: 'background: #1f2728;', img: 'anidap', imgStyle: 'transform: scale(2.2);' }),
    tooltipHtml: customLinkHelperFns.getWnCategoryHtml('animeStreaming'),
    includeIf: (i) => i.genres.includes('anime'),
    addStyles: `@font-face { font-family: "GangOfThree"; src: url("${GM_getResourceURL('gojolive')}") format("woff2"); font-display: block; }`,
  },
  {
    buildHref: (i) => `${customLinkHelperFns.fetchAnimeId(i, 'anilist')}.then((id) => 'https://animetsu.cc/watch/' + id + '?ep=' + ${i.episode ?? '1'})`,
    innerHtml: customLinkHelperFns.getWnInnerHtml({ btnStyle: 'background: #111;', text: 'GOJO.LIVE', textStyle: 'font-family: GangOfThree; font-size: 18cqi;' }),
    tooltipHtml: customLinkHelperFns.getWnCategoryHtml('animeStreaming'),
    includeIf: (i) => i.genres.includes('anime'),
  },
  {
    buildHref: (i) => `https://knaben.org/search/${customLinkHelperFns.getDefaultTorrentQuery(i)} ${gmStorage.torrentResolution} (265|av1)/${i.type === 'movies' ? '3000000' : i.genres.includes('anime') ? '6000000' : '2000000'}/1/seeders`,
    innerHtml: `<div class="icon btn-custom" style="background: #323537; flex-direction: column;">${GM_getResourceText('knaben').replace('<svg', '<svg style="max-height: 79%;"')}<div class="text" style="font-family: system-ui; font-size: 10cqi; letter-spacing: 0.3px;">KNABEN DATABASE</div></div>`,
    tooltipHtml: customLinkHelperFns.getWnCategoryHtml('torrentAggregator'),
  },
  {
    buildHref: (i) => `https://iframe.pstream.mov/embed/tmdb-${i.type === 'movies' ? `movie-${i.ids.tmdb}` : `tv-${i.ids.tmdb}/${i.season !== undefined ? i.season : '1'}/${i.episode ? i.episode : '1'}`}`,
    innerHtml: customLinkHelperFns.getWnInnerHtml({ btnStyle: 'background: #110d1b;', img: 'pstream', text: 'P-Stream', textStyle: 'font-size: 11cqi;' }),
    tooltipHtml: customLinkHelperFns.getWnCategoryHtml('streaming'),
  },
  {
    buildHref: (i) => `https://www.cineby.gd${customLinkHelperFns.getDefaultDirectStreamingPath(i)}?play=true`,
    innerHtml: customLinkHelperFns.getWnInnerHtml({ btnStyle: 'background: #440000;', img: 'cineby', text: 'Cineby', textStyle: 'font-family: system-ui; font-size: 17cqi;' }),
    tooltipHtml: customLinkHelperFns.getWnCategoryHtml('streaming'),
  },
  {
    buildHref: (i) => `https://hexa.su/watch${customLinkHelperFns.getDefaultDirectStreamingPath(i)}`,
    innerHtml: customLinkHelperFns.getWnInnerHtml({ btnStyle: 'background: #111317;', img: 'hexa' }),
    tooltipHtml: customLinkHelperFns.getWnCategoryHtml('streaming'),
  },
  {
    buildHref: (i) => `https://www.fmovies.gd/watch${customLinkHelperFns.getDefaultDirectStreamingPath(i)}`,
    innerHtml: customLinkHelperFns.getWnInnerHtml({ btnStyle: 'background: #18252b;', text: 'FMOVIES+', textStyle: 'background-image: linear-gradient(to right, rgb(13 202 240), rgb(13 202 240 / 35%)); background-clip: text; color: transparent; font-family: system-ui; font-size: 15cqi; font-weight: 800; letter-spacing: 0.3px; border: 2px solid rgb(13 202 240 / 25%); border-radius: 5px; padding: 5%;' }),
    tooltipHtml: customLinkHelperFns.getWnCategoryHtml('streaming'),
  },
  {
    buildHref: (i) => `https://scenenzbs.com/search/${customLinkHelperFns.getDefaultTorrentQuery(i)} ${gmStorage.torrentResolution} (265|av1)`, // https://scenenzbs.com/search#adv-subtabs
    innerHtml: customLinkHelperFns.getWnInnerHtml({ btnStyle: 'background: #212529;', img: 'scenenzbs', imgStyle: 'transform: scale(1.8) translateY(-1px);' }),
    tooltipHtml: customLinkHelperFns.getWnCategoryHtml('usenetIndexer'),
  },
  {
    buildHref: (i) => `https://x.debridmediamanager.com/${i.ids.imdb}`,
    innerHtml: customLinkHelperFns.getWnInnerHtml({ btnStyle: 'background: #2e3e51;', img: 'dmm', imgStyle: 'transform: scale(1.7);', text: 'Debrid<br>Media<br>Manager', textStyle: 'font-size: 12cqi;' }),
    tooltipHtml: customLinkHelperFns.getWnCategoryHtml('debrid'),
  },
];

const customExternalLinks = [
  {
    buildHref: (i) => `/${/seasons|episodes/.test(i.type) ? 'shows' : i.type}/${i.ids.slug}${i.season !== undefined ? `/seasons/${i.season}${i.episode ? `/episodes/${i.episode}` : ''}` : ''}/wikipedia`,
    innerHtml: customLinkHelperFns.getFaBrandsHtml('wikipedia-w'),
    tooltipHtml: 'Wikipedia',
    addStyles: customLinkHelperFns.hideNativeExternalLink('wikipedia'),
  },
  {
    buildHref: (i) => `https://duckduckgo.com/?q=site:reddit.com Discussion ${encodeURIComponent(i.title)}${i.type === 'movies' ? ` ${i.year}` : ''}${i.season !== undefined ? ` Season ${i.season}${i.episode ? ` Episode ${i.episode}` : ''}` : ''}`,
    innerHtml: customLinkHelperFns.getFaBrandsHtml('reddit'),
    tooltipHtml: 'Reddit',
    includeIf: (i) => i.type !== 'people',
  },
  {
    buildHref: (i) => `https://letterboxd.com/tmdb/${i.ids.tmdb}`,
    innerHtml: customLinkHelperFns.getFaBrandsHtml('letterboxd'),
    tooltipHtml: 'Letterboxd',
    includeIf: (i) => i.type === 'movies',
  },
  {
    buildHref: (i) => `https://reversetv.enzon19.com/${/seasons|episodes/.test(i.type) ? 'shows' : i.type}/${i.ids.slug}${i.season !== undefined ? `/seasons/${i.season_old ?? i.season}${i.episode ? `/episodes/${i.episode_old ?? i.episode}` : ''}` : ''}`,
    innerHtml: customLinkHelperFns.getDdgFaviconHtml('reversetv.enzon19.com', '--extra-filters: invert(1);'),
    tooltipHtml: 'ReverseTV',
    includeIf: (i) => i.type !== 'people',
  },
  {
    buildHref: (i) => `userscriptGmXhrCustomLinks({ url: 'https://moviemaps.org/ajax/search?token=${encodeURIComponent(i.title)}&max_matches=1&use_similar=1', responseType: 'json'}).then((r) => 'https://moviemaps.org' + (r.response[0]?.url ?? '/search?q=${encodeURIComponent(i.title)}'))`,
    innerHtml: `<i class="fa-regular fa-map"></i>`,
    tooltipHtml: 'MovieMaps',
    includeIf: (i) => i.type !== 'people' && !['animation', 'anime'].some((g) => i.genres.includes(g)),
  },
  {
    buildHref: (i) => `https://${i.title.toLowerCase().replaceAll(/[^a-z0-9]/g, '')}.fandom.com/wiki/`,
    innerHtml: customLinkHelperFns.getDdgFaviconHtml('fandom.com', '--extra-filters: invert(1);'),
    tooltipHtml: 'Fandom',
    includeIf: (i) => i.type !== 'people',
  },
  {
    buildHref: (i) => `https://aznude.com/${i.type === 'people' ? `view/celeb/${i.name.toLowerCase()[0]}/${i.name.toLowerCase().replaceAll(' ', '')}.html` : `search.html?q=${encodeURIComponent(i.title)}`}`,
    innerHtml: customLinkHelperFns.getDdgFaviconHtml('aznude.com', 'transform: scale(1.1);'),
    tooltipHtml: 'AZNude',
    includeIf: (i) => i.type === 'people' && customLinkHelperFns.isAdultFemale(i) || i.type !== 'people' && !['animation', 'anime'].some((g) => i.genres.includes(g)),
  },
  {
    buildHref: (i) => `https://celeb.gate.cc/${i.name.toLowerCase().replaceAll(' ', '-')}/gallery.html?s=i.clicks.total&cdir=desc#images`,
    innerHtml: '<img src="https://celeb.gate.cc/assets/logo.png" style="--extra-filters: brightness(1.1);">',
    tooltipHtml: 'CelebGate',
    includeIf: (i) => i.type === 'people' && customLinkHelperFns.isAdultFemale(i),
  },
  {
    buildHref: (i) => `https://rule34.xxx/index.php?page=post&s=list&tags=sort:score ${i.title.toLowerCase().replaceAll(/[^a-z0-9-:; ]/g, '').replaceAll(' ', '_')}`,
    innerHtml: customLinkHelperFns.getDdgFaviconHtml('rule34.xxx'),
    tooltipHtml: 'Rule 34',
    includeIf: (i) => i.type !== 'people',
  },
  {
    buildHref: (i) => `${customLinkHelperFns.fetchAnimeId(i, 'myanimelist')}.then((id) => 'https://myanimelist.net/anime/' + id)`,
    innerHtml: customLinkHelperFns.getDdgFaviconHtml('myanimelist.net'),
    tooltipHtml: 'MyAnimeList',
    includeIf: (i) => i.genres?.includes('anime'),
  },
  {
    buildHref: (i) => `${customLinkHelperFns.fetchAnimeId(i, 'anilist')}.then((id) => 'https://anilist.co/anime/' + id)`,
    innerHtml: customLinkHelperFns.getDdgFaviconHtml('anilist.co'),
    tooltipHtml: 'AniList',
    includeIf: (i) => i.genres?.includes('anime'),
  },
  {
    buildHref: (i) => `${customLinkHelperFns.fetchAnimeId(i, 'anidb')}.then((id) => 'https://anidb.net/anime/' + id)`,
    innerHtml: customLinkHelperFns.getDdgFaviconHtml('anidb.net'),
    tooltipHtml: 'AniDB',
    includeIf: (i) => i.genres?.includes('anime'),
  },
  {
    buildHref: (i) => `${customLinkHelperFns.fetchAnimeId(i, 'livechart')}.then((id) => 'https://livechart.me/anime/' + id)`,
    innerHtml: customLinkHelperFns.getDdgFaviconHtml('www.livechart.me'),
    tooltipHtml: 'LiveChart',
    includeIf: (i) => i.genres?.includes('anime'),
  },
  {
    buildHref: (i) => `https://www.themoviedb.org/${i.type === 'people' ? 'person' : i.type === 'movies' ? 'movie' : 'tv'}/${i.ids.tmdb}${i.season !== undefined ? `/season/${i.season}${i.episode ? `/episode/${i.episode}` : ''}` : ''}`,
    innerHtml: '<img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg">',
    tooltipHtml: 'TMDB',
    addStyles: customLinkHelperFns.hideNativeExternalLink('tmdb'),
  },
  {
    buildHref: (i) => `https://www.imdb.com/${i.type === 'people' ? 'name' : 'title'}/${i.ids.imdb}${i.season ? `/episodes/?season=${i.season}` : ''}`,
    innerHtml: customLinkHelperFns.getFaBrandsHtml('imdb', 'font-size: 24px;'),
    tooltipHtml: 'IMDb',
    addStyles: customLinkHelperFns.hideNativeExternalLink('imdb'),
  },
  {
    buildHref: (i) => `${customLinkHelperFns.fetchWikidataClaim(i, i.type === 'movies' ? 'P12196' : 'P4835')}.then((id) => 'https://www.thetvdb.com/dereferrer/${i.type === 'movies' ? 'movie' : 'series'}/' + id)`,
    innerHtml: customLinkHelperFns.getDdgFaviconHtml('thetvdb.com'),
    tooltipHtml: 'TheTVDB',
    includeIf: (i) => i.type !== 'people',
  },
  {
    buildHref: (i) => i.type !== 'people' ? `fetch('https://api.tvmaze.com/lookup/shows?imdb=${i.ids.imdb}').then((r) => r.url.replace('api.', ''))` : `fetch('https://api.tvmaze.com/search/people?q=${i.name}').then((r) => r.json()).then((r) => r[0]?.person.url ?? 'https://www.tvmaze.com/search?q=${i.name}')`,
    innerHtml: customLinkHelperFns.getDdgFaviconHtml('tvmaze.com'),
    tooltipHtml: 'TVmaze',
    includeIf: (i) => /shows|seasons|episodes|people/.test(i.type),
  },
  {
    buildHref: (i) => $(`.btn-watch-now[data-url="${i.item_url}"] ~ .external #external-link-justwatch`).attr('href') ?? $('#powered_by_url').attr('value'),
    innerHtml: '<i class="fa-kit fa-justwatch"></i>',
    tooltipHtml: 'JustWatch',
    includeIf: (i) => i.type !== 'people' && $(`.btn-watch-now[data-url="${i.item_url}"] ~ .external #external-link-justwatch, #watch-now-content[data-url="${i.item_url}"] > #powered_by_url`).length,
    addStyles: customLinkHelperFns.hideNativeExternalLink('justwatch'),
  },
  {
    buildHref: (i) => `https://open.spotify.com/search/${i.title} Soundtrack`,
    innerHtml: customLinkHelperFns.getFaBrandsHtml('spotify'),
    tooltipHtml: 'Spotify',
    includeIf: (i) => i.type !== 'people',
  },
  {
    buildHref: (i) => i.type === 'movies' ? `https://fanart.tv/movie/${i.ids.tmdb}` : `fetch('https://api.tvmaze.com/lookup/shows?imdb=${i.ids.imdb}').then((r) => r.json()).then((r) => 'https://fanart.tv/series/' + r.externals.thetvdb)`,
    innerHtml: customLinkHelperFns.getDdgFaviconHtml('fanart.tv'),
    tooltipHtml: 'Fanart.tv',
    includeIf: (i) => i.type !== 'people',
    addStyles: customLinkHelperFns.hideNativeExternalLink('fanart'),
  },
  {
    buildHref: (i) => `https://mediux.pro/${i.type === 'movies' ? 'movies' : 'shows'}/${i.ids.tmdb}`,
    innerHtml: customLinkHelperFns.getDdgFaviconHtml('mediux.pro'),
    tooltipHtml: 'MediUX',
    includeIf: (i) => i.type !== 'people',
  },
  {
    buildHref: (i) => `https://youglish.com/pronounce/${i.name.replaceAll(' ', '_')}/english`,
    innerHtml: customLinkHelperFns.getDdgFaviconHtml('youglish.com'),
    tooltipHtml: 'YouGlish',
    includeIf: (i) => i.type === 'people',
  },
  {
    buildHref: (i) => `https://oracleofbacon.org/graph.php?who=${i.name.replaceAll(' ', '+')}`,
    innerHtml: `<i class="fa-regular fa-chart-network"></i>`,
    tooltipHtml: 'Oracle of Bacon',
    includeIf: (i) => i.type === 'people',
  },
  {
    buildHref: (i) => i.homepage,
    innerHtml: '<i class="fa-light fa-clapperboard-play"></i>',
    tooltipHtml: 'Official Site',
    includeIf: (i) => i.homepage,
    addStyles: customLinkHelperFns.hideNativeExternalLink('official'),
  },
  {
    buildHref: (i) => $('#external-link-mastodon').attr('href'),
    innerHtml: customLinkHelperFns.getFaBrandsHtml('mastodon'),
    tooltipHtml: 'Mastodon',
    includeIf: (i) => $(`:is(.btn-watch-now, .poster[data-person-id])[data-url="${i.item_url}"] ~ .external #external-link-mastodon`).length,
    addStyles: customLinkHelperFns.hideNativeExternalLink('mastodon'),
  },
  {
    buildHref: (i) => $('#external-link-instagram').attr('href'),
    innerHtml: customLinkHelperFns.getFaBrandsHtml('instagram'),
    tooltipHtml: 'Instagram',
    includeIf: (i) => $(`:is(.btn-watch-now, .poster[data-person-id])[data-url="${i.item_url}"] ~ .external #external-link-instagram`).length,
    addStyles: customLinkHelperFns.hideNativeExternalLink('instagram'),
  },
  {
    buildHref: (i) => $('#external-link-twitter').attr('href'),
    innerHtml: customLinkHelperFns.getFaBrandsHtml('x-twitter'),
    includeIf: (i) => $(`:is(.btn-watch-now, .poster[data-person-id])[data-url="${i.item_url}"] ~ .external #external-link-twitter`).length,
    addStyles: customLinkHelperFns.hideNativeExternalLink('twitter'),
  },
  {
    buildHref: (i) => $('#external-link-facebook').attr('href'),
    innerHtml: customLinkHelperFns.getFaBrandsHtml('facebook'),
    tooltipHtml: 'Facebook',
    includeIf: (i) => $(`:is(.btn-watch-now, .poster[data-person-id])[data-url="${i.item_url}"] ~ .external #external-link-facebook`).length,
    addStyles: customLinkHelperFns.hideNativeExternalLink('facebook'),
  },
];

///////////////////////////////////////////////////////////////////////////////////////////////

let $, traktApiModule;
unsafeWindow.userscriptLevDist = levenshteinDistance;
unsafeWindow.userscriptGmOpenInTab = GM_openInTab;
unsafeWindow.userscriptGmXhrCustomLinks = GM.xmlHttpRequest;
unsafeWindow.userscriptItemDataCache = {};

const gmStorage = { maxSidebarWnLinks: 4, torrentResolution: '1080p', ...(GM_getValue('customLinks')) };
GM_setValue('customLinks', gmStorage);


addStyles();

document.addEventListener('turbo:load', async () => {
  $ ??= unsafeWindow.jQuery;
  traktApiModule ??= unsafeWindow.userscriptTraktApiModule?.isFulfilled ? await unsafeWindow.userscriptTraktApiModule : null;
  if (!$) return;

  const $watchNowContent = $('#watch-now-content'),
        $searchResults = $('#header-search-autocomplete-results'),
        itemUrl = $('.notable-summary').attr('data-url') || $('.sidebar').attr('data-url');

  $(document).off('ajaxSuccess.userscript83278').on('ajaxSuccess.userscript83278', (_evt, _xhr, opt) => {
    if ($watchNowContent.length && opt.url.includes('/streaming_links?country=')) addCustomLinksToModal($watchNowContent);
    if ($searchResults.length && /^\/search\/autocomplete(?!\/(people|lists|users))/.test(opt.url)) addWatchNowLinksToSearchResults($searchResults);
  });

  if (/^\/(movies|shows|seasons|episodes|people)\/[^\/]+$/.test(itemUrl)) { // regex filters list + alternate season itemUrls
    const pathBeforeFetch = location.pathname,
          itemData = await getItemData(itemUrl);

    if (pathBeforeFetch === location.pathname) {
      addExternalLinksToSidebar(itemData);
      addExternalLinksToAdditionalStats(itemData);
      if (itemData.type !== 'people') {
        addWatchNowLinksToSidebar(itemData);
        addWatchNowLinksToActionButtons(itemData);
      }
    }
  }
}, { capture: true });

///////////////////////////////////////////////////////////////////////////////////////////////

const getCustomLinkHtml = (l, itemData, innerHtmlOverride) => {
  const buildHref = l.buildHref(itemData);
  return `<a ${!/\)\.then\(/.test(buildHref) ? `href="${buildHref}"` : `href="javascript:void(0);" ` +
    `onclick="${buildHref}.then((url) => { this.setAttribute('href', url); userscriptGmOpenInTab(url, { active: true, setParent: true }); })" ` +
    `onauxclick="${buildHref}.then((url) => { this.setAttribute('href', url); if (event.button === 1) userscriptGmOpenInTab(url, { setParent: true }); })"`} ` +
    `target="_blank" data-original-title="${l.tooltipHtml ?? ''}">${innerHtmlOverride ?? l.innerHtml}</a>`;
};

function addExternalLinksToSidebar(itemData) {
  $(customExternalLinks
    .filter((l) => l.includeIf ? l.includeIf(itemData) : true)
    .map((l) => getCustomLinkHtml(l, itemData))
    .join('')
   ).prependTo('#info-wrapper .sidebar .external > li').tooltip({
    container: 'body',
    placement: 'bottom',
    html: true,
  });
}

function addExternalLinksToAdditionalStats(itemData) {
  $(customExternalLinks
    .filter((l) => l.includeIf ? l.includeIf(itemData) : true)
    .map((l) => getCustomLinkHtml(l, itemData, $(l.innerHtml).attr('alt') ?? l.tooltipHtml) + ', ')
    .join('')
  ).insertAfter('.additional-stats.with-external-links label:contains("Links")');
}

function addWatchNowLinksToSidebar(itemData) {
  const $sidebar = $('#info-wrapper .sidebar');

  if ($sidebar.has('.btn-watch-now').length && !$sidebar.has('.streaming-links').length) {
    $sidebar.find('.btn-watch-now').before(
      `<div class="streaming-links">` +
        `<div class="sources"></div>` +
      `</div>`
    );
  }

  $(customWatchNowLinks
    .filter((l) => l.includeIf ? l.includeIf(itemData) : true)
    .map((l) => getCustomLinkHtml(l, itemData))
    .join('')
  ).prependTo($sidebar.find('.streaming-links .sources'))
   .attr('data-container', 'body').attr('data-html', 'true').tooltip(); // loadWatchnowModal() calls $('.streaming-links a').tooltip('destroy').tooltip({ html: true })
}

function addWatchNowLinksToActionButtons(itemData) {
  const $actionButtons = $('#overview .action-buttons');

  if ($actionButtons.length && !$actionButtons.has('.btn-watch-now').length) {
    const $sidebarBtnWatchNow = $('#info-wrapper .sidebar .btn-watch-now'),
          dataSourceCounts = $sidebarBtnWatchNow.attr('data-source-counts'),
          itemUrl = $sidebarBtnWatchNow.attr('data-url');
    if (!dataSourceCounts || !itemUrl) return;

    $actionButtons.prepend(
      `<div class="streaming-links">` +
        `<div class="sources"></div>` +
      `</div>` +
      `<a class="btn btn-block btn-summary btn-watch-now visible-xs selected" data-source-counts="${dataSourceCounts}" data-target="#watch-now-modal" data-toggle="modal" data-url="${itemUrl}" href="#">` +
        `<i class="fa fa-fw fa-solid fa-play"></i>` +
        `<div class="text">` +
          `<div class="main-info">Watch Now</div>` +
          `<div class="under-info">0 streaming services</div>` +
        `</div>` +
      `</a>`
    );
  }

  $(customWatchNowLinks
    .filter((l) => l.includeIf ? l.includeIf(itemData) : true)
    .map((l) => getCustomLinkHtml(l, itemData))
    .join('')
  ).prependTo($actionButtons.find('.sources'))
   .attr('data-html', 'true').tooltip();
}

async function addWatchNowLinksToSearchResults($searchResults) {
  $searchResults.find('> .search-result:not([data-type="people"])').each(async function() { // search-by-id endpoints can return people
    const itemData = await getItemData($(this).attr('data-url'));

    if (!$(this).has('.streaming-links').length) {
      $(this).append(
        `<div class="streaming-links">` +
          `<div class="sources"></div>` +
        `</div>`
      );
    }

    $(customWatchNowLinks
      .filter((l) => l.includeIf ? l.includeIf(itemData) : true)
      .map((l) => getCustomLinkHtml(l, itemData))
      .join('')
    ).prependTo($(this).find('.streaming-links .sources')).tooltip({
      placement: 'bottom',
      html: true,
    }).on('click', (evt) => evt.stopPropagation()); // native click handler on .search-result
  });
}

async function addCustomLinksToModal($watchNowContent) {
  const itemData = await getItemData($watchNowContent.attr('data-url'));

  $watchNowContent.find('> .streaming-links').prepend(
    `<div class="title">Custom Links</div>` +
    `<div class="section external"></div>` +
    `<div class="section"></div>` +
    ($watchNowContent.has('.no-links').length ? `<div class="title"></div>` : '')
  ).end().find('> .title-wrapper .titles').append(
    `<div class="overview">${itemData.episode_overview ?? itemData.season_overview ?? itemData.overview ?? 'No overview available.'}</div>`
  );

  $(customExternalLinks
    .filter((l) => l.includeIf ? l.includeIf(itemData) : true)
    .map((l) => getCustomLinkHtml(l, itemData))
    .join('')
  ).appendTo($watchNowContent.find('.section.external')).tooltip({
    placement: 'bottom',
    html: true,
  });

  $(customWatchNowLinks
    .filter((l) => l.includeIf ? l.includeIf(itemData) : true)
    .map((l) => getCustomLinkHtml(l, itemData, l.innerHtml + (l.tooltipHtml ? `<div class="price">${l.tooltipHtml}</div>` : '')))
    .join('')
  ).appendTo($watchNowContent.find('.section.external + .section'));
}

///////////////////////////////////////////////////////////////////////////////////////////////

const getItemDataFromTraktApi = async (itemUrl) => {
  const itemUrlSplit = itemUrl.split('/').filter(Boolean),
        type = itemUrlSplit[0];
  let itemDoc, $notableSummary, showData, seasonData, episodeData;

  // itemUrlSplit[1] is trakt-id for seasons + eps and slug for shows + movs + people, can be numeric for shows e.g. /shows/1883 which gets interpreted as trakt-id by api
  if (type === 'seasons' || type === 'shows' && !isNaN(itemUrlSplit[1])) {
    const resp = await fetch(itemUrl);
    if (!resp.ok) throw new Error(`getItemData: Fetching ${resp.url} failed with status: ${resp.status}`);
    itemDoc = new DOMParser().parseFromString(await resp.text(), 'text/html');
    $notableSummary = $(itemDoc).find('.notable-summary');
  }

  if (type === 'episodes') {
    [{ show: showData, episode: episodeData }] = await traktApiModule.search.id({ id_type: 'trakt', id: itemUrlSplit[1], type: 'episode', extended: 'full' }); // doesn't work with slugs and doesn't support type: 'season'
    seasonData = await traktApiModule.seasons.season.info({ id: showData.ids.trakt, season: episodeData.season, extended: 'full' });
  };
  const itemData = {
    item_url: itemUrl,
    type,
    ...(type !== 'episodes' && {
      ...(await traktApiModule[type === 'seasons' ? 'shows' : type].summary({ id: $notableSummary?.attr('data-show-id') ?? itemUrlSplit[1], extended: 'full' })), // cached on disk for 8 hours
    }),
    ...(type === 'seasons' && {
      season: +$notableSummary.attr('data-season-number'),
      season_title: $(itemDoc).find('#level-up-link[href*="/seasons/"]').text() || $(itemDoc).find('#summary-wrapper .mobile-title h1').contents()[0]?.textContent.trim(),
      season_overview: $(itemDoc).find('#overview #overview').text() || null,
    }),
    ...(type === 'episodes' && {
      ...showData,
      season: seasonData.number,
      season_title: seasonData.title,
      season_original_title: seasonData.original_title,
      season_ids: seasonData.ids,
      season_first_aired: seasonData.first_aired,
      season_episode_count: seasonData.episode_count,
      season_overview: seasonData.overview,
      episode: episodeData.number,
      episode_abs: episodeData.number_abs,
      episode_title: episodeData.title,
      episode_original_title: episodeData.original_title,
      episode_ids: episodeData.ids,
      episode_first_aired: episodeData.first_aired,
      episode_type: episodeData.episode_type,
      episode_overview: episodeData.overview,
    }),
  };
  return itemData;
}

const getItemDataFromSummaryPage = async (itemUrl) => {
  let itemDoc, itemDoc2;

  const resp = await fetch(itemUrl);
  if (!resp.ok) throw new Error(`getItemData: Fetching ${resp.url} failed with status: ${resp.status}`);
  itemDoc = new DOMParser().parseFromString(await resp.text(), 'text/html');

  if (resp.url.includes('/seasons/')) {
    const resp2 = await fetch(resp.url.split('/seasons/')[0]);
    if (!resp2.ok) throw new Error(`getItemData: Fetching ${resp2.url} failed with status: ${resp2.status}`);
    itemDoc2 = new DOMParser().parseFromString(await resp2.text(), 'text/html');
  }

  const type = itemUrl.split('/').filter(Boolean)[0],
        $notableSummary = $(itemDoc).find('.notable-summary'),
        $additionalStatsLi = $(itemDoc).find('.additional-stats > li'),
        $additionalStatsLi2 = itemDoc2 ? $(itemDoc2).find('.additional-stats > li') : undefined,
        filterStatsElemsByLabel = (labelText, $statsElems = $additionalStatsLi) => $statsElems.filter((_, e) => $(e).find('label').text().toLowerCase() === labelText);

  const itemData = {
    item_url: itemUrl,
    type,
    ids: {
      trakt: +($notableSummary.attr('data-movie-id') ?? $notableSummary.attr('data-show-id') ?? $notableSummary.attr('data-person-id')),
      imdb: $(itemDoc2 ?? itemDoc).find('#external-link-imdb').attr('href')?.match(/(?:tt|nm)\d+/)?.[0],
      tmdb: +$(itemDoc).find('#external-link-tmdb').attr('href')?.match(/\d+/)?.[0] || undefined,
      slug: resp.url.split('/')[4],
    },
    homepage: $(itemDoc2 ?? itemDoc).find('#external-link-official').attr('href') ?? null,
    ...(type !== 'people' && {
      title: $(itemDoc).find(':is(body > [itemtype$="Movie"], body > [itemtype$="TVSeries"], body > [itemtype] > [itemtype$="TVSeries"]) > meta[itemprop="name"]').attr('content')?.match(/(.+?)(?: \(\d{4}\))?$/)?.[1],
      original_title: filterStatsElemsByLabel('original title', $additionalStatsLi2).contents().get(-1)?.textContent,
      year: +$(itemDoc2 ?? itemDoc).find('#summary-wrapper .mobile-title .year')[0]?.textContent || undefined,
      genres: $additionalStatsLi.find('[itemprop="genre"]').map((_, e) => $(e).text().toLowerCase()).get(),
      overview: $(itemDoc2 ?? itemDoc).find('#overview #overview').text() || null,
    }),
    ...(/seasons|episodes/.test(type) && {
      season: +$notableSummary.attr('data-season-number'),
      season_title: $(itemDoc).find('#level-up-link[href*="/seasons/"]').text() || $(itemDoc).find('#summary-wrapper .mobile-title h1').contents()[0]?.textContent.trim(),
    }),
    ...(type === 'seasons' && {
      season_overview: $(itemDoc).find('#overview #overview').text() || null,
    }),
    ...(type === 'episodes' && {
      episode: +$notableSummary.attr('data-episode-number'),
      episode_title: $(itemDoc).find('body > [itemtype$="TVEpisode"] > meta[itemprop="name"]').attr('content'),
      episode_overview: $(itemDoc).find('#overview #overview').text() || null,
    }),
    ...(type === 'people' && {
      name: $(itemDoc).find('body > [itemtype$="Person"] > meta[itemprop="name"]').attr('content'),
      gender: filterStatsElemsByLabel('gender').contents().get(-1)?.textContent.toLowerCase().replace('-', '_'),
      birthday: filterStatsElemsByLabel('birthday').children().last().attr('data-date'),
    }),
  };
  if (Object.hasOwn(itemData, 'original_title')) itemData.original_title ??= itemData.title;
  return itemData;
}

const verifyEpisodeGroup = async (itemData) => { // some anime don't default to the "correct" episode group e.g. /shows/cowboy-bebop (eps out of order), /shows/solo-leveling (1 instead of 2 seasons)
  const showData = await fetch(`https://api.tvmaze.com/lookup/shows?imdb=${itemData.ids.imdb}`) // max 20 calls / 10s; cached on disk for 1 hour
                           .then((r) => r.ok ? fetch(r.url + '?embed[]=episodes&embed[]=seasons') : null)
                           .then((r) => r?.ok ? r.json() : null);
  const episodeData = showData?._embedded.episodes.find((ep) => ep.name.trim().toLowerCase() === itemData.episode_title.trim().toLowerCase());

  if (episodeData && (itemData.season !== episodeData.season || itemData.episode !== episodeData.number)) { // ep group used by tvmaze is usually the "correct" one
    itemData.season_old = itemData.season;
    itemData.episode_old = itemData.episode;
    itemData.season = episodeData.season;
    itemData.episode = episodeData.number;
    itemData.season_title = showData._embedded.seasons.find((s) => s.number == episodeData.season).name || `Season ${episodeData.season}`;
    ['season_original_title', 'season_ids', 'season_first_aired', 'season_episode_count'].forEach((prop) => delete itemData[prop]);
  }
  return itemData;
}

async function getItemData(itemUrl) {
  return (unsafeWindow.userscriptItemDataCache[itemUrl] ??= await (
    (traktApiModule ? getItemDataFromTraktApi : getItemDataFromSummaryPage)(itemUrl)
      .then((i) => i.type === 'episodes' && i.genres.includes('anime') ? verifyEpisodeGroup(i) : i)
  ));
}

///////////////////////////////////////////////////////////////////////////////////////////////

function addStyles() {
  GM_addStyle(`
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
[data-source-counts*="'${document.cookie.match(/(?:^|; )watchnow_country=([^;]*)/)?.[1] ?? new Intl.Locale(navigator.language).region}'" i] > .fa-play::before {
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
#info-wrapper .sidebar .streaming-links a:nth-child(n+${gmStorage.maxSidebarWnLinks + 1} of a),
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
  display: flex;
  flex-direction: column;
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


${customWatchNowLinks.concat(customExternalLinks).map((l) => l.addStyles).filter(Boolean).join('\n')}
  `); // font data-uris are so long that everything below them doesn't get shown in style tag
}