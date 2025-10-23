// ==UserScript==
// @name         Trakt.tv | Custom Links (Watch-Now + External)
// @description  Adds custom links to all the "Watch-Now" and "External" sections (for titles and people). The defaults include Letterboxd, Stremio, streaming sites (e.g. P-Stream), torrent aggregators (e.g. EXT, Knaben) and more. Easily customizable.
// @version      0.5.4
// @namespace    wkt34fcz
// @icon         data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDQ4IDQ4Ij4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiB1cmwoI3JhZGlhbC1ncmFkaWVudCk7CiAgICAgIH0KCiAgICAgIC5jbHMtMiB7CiAgICAgICAgZmlsbDogI2ZmZjsKICAgICAgfQogICAgPC9zdHlsZT4KICAgIDxyYWRpYWxHcmFkaWVudCBpZD0icmFkaWFsLWdyYWRpZW50IiBjeD0iNDguNDYiIGN5PSItLjk1IiBmeD0iNDguNDYiIGZ5PSItLjk1IiByPSI2NC44NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM5ZjQyYzYiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuMjciIHN0b3AtY29sb3I9IiNhMDQxYzMiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuNDIiIHN0b3AtY29sb3I9IiNhNDNlYmIiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuNTMiIHN0b3AtY29sb3I9IiNhYTM5YWQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuNjQiIHN0b3AtY29sb3I9IiNiNDMzOWEiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuNzMiIHN0b3AtY29sb3I9IiNjMDJiODEiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuODIiIHN0b3AtY29sb3I9IiNjZjIwNjEiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuOSIgc3RvcC1jb2xvcj0iI2UxMTQzYyIvPgogICAgICA8c3RvcCBvZmZzZXQ9Ii45NyIgc3RvcC1jb2xvcj0iI2Y1MDYxMyIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9InJlZCIvPgogICAgPC9yYWRpYWxHcmFkaWVudD4KICA8L2RlZnM+CiAgPGcgaWQ9Il94MkRfLXByb2R1Y3Rpb24iPgogICAgPGcgaWQ9ImxvZ29tYXJrLnNxdWFyZS5ncmFkaWVudCI+CiAgICAgIDxwYXRoIGlkPSJiYWNrZ3JvdW5kIiBjbGFzcz0iY2xzLTEiIGQ9Ik00OCwxMS4yNnYyNS40N2MwLDYuMjItNS4wNSwxMS4yNy0xMS4yNywxMS4yN0gxMS4yNmMtNi4yMiwwLTExLjI2LTUuMDUtMTEuMjYtMTEuMjdWMTEuMjZDMCw1LjA0LDUuMDQsMCwxMS4yNiwwaDI1LjQ3YzMuMzIsMCw2LjMsMS40Myw4LjM3LDMuNzIuNDcuNTIuODksMS4wOCwxLjI1LDEuNjguMTguMjkuMzQuNTkuNS44OS4zMy42OC42LDEuMzkuNzksMi4xNC4xLjM3LjE4Ljc2LjIzLDEuMTUuMDkuNTQuMTMsMS4xMS4xMywxLjY4WiIvPgogICAgICA8ZyBpZD0iY2hlY2tib3giPgogICAgICAgIDxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTEzLjYyLDE3Ljk3bDcuOTIsNy45MiwxLjQ3LTEuNDctNy45Mi03LjkyLTEuNDcsMS40N1pNMjguMDEsMzIuMzdsMS40Ny0xLjQ2LTIuMTYtMi4xNiwyMC4zMi0yMC4zMmMtLjE5LS43NS0uNDYtMS40Ni0uNzktMi4xNGwtMjIuNDYsMjIuNDYsMy42MiwzLjYyWk0xMi45MiwxOC42N2wtMS40NiwxLjQ2LDE0LjQsMTQuNCwxLjQ2LTEuNDctNC4zMi00LjMxTDQ2LjM1LDUuNGMtLjM2LS42LS43OC0xLjE2LTEuMjUtMS42OGwtMjMuNTYsMjMuNTYtOC42Mi04LjYxWk00Ny44Nyw5LjU4bC0xOS4xNywxOS4xNywxLjQ3LDEuNDYsMTcuODMtMTcuODN2LTEuMTJjMC0uNTctLjA0LTEuMTQtLjEzLTEuNjhaTTI1LjE2LDIyLjI3bC03LjkyLTcuOTItMS40NywxLjQ3LDcuOTIsNy45MiwxLjQ3LTEuNDdaTTQxLjMyLDM1LjEyYzAsMy40Mi0yLjc4LDYuMi02LjIsNi4ySDEyLjg4Yy0zLjQyLDAtNi4yLTIuNzgtNi4yLTYuMlYxMi44OGMwLTMuNDIsMi43OC02LjIxLDYuMi02LjIxaDIwLjc4di0yLjA3SDEyLjg4Yy00LjU2LDAtOC4yOCwzLjcxLTguMjgsOC4yOHYyMi4yNGMwLDQuNTYsMy43MSw4LjI4LDguMjgsOC4yOGgyMi4yNGM0LjU2LDAsOC4yOC0zLjcxLDguMjgtOC4yOHYtMy41MWgtMi4wN3YzLjUxWiIvPjwhLS0gNDVkMjM4NWQzYWFjYmI1OTMyNmEzODYxNDljNWE4NzggLS0+CiAgICAgIDwvZz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPg==
// @match        https://trakt.tv/*
// @run-at       document-start
// @resource     cineby     https://www.cineby.ru/logo.png
// @resource     bitcine    https://www.bitcine.app/logo.svg
// @resource     hexa       https://hexa.watch/hexa-logo.png
// @grant        unsafeWindow
// @grant        GM_addStyle
// @grant        GM_getResourceURL
// @grant        GM.cookie
// ==/UserScript==

/* README
> Inspired by Tusky's [Trakt Watchlist Downloader](https://greasyfork.org/scripts/17991) and Accus1958's [trakt.tv Streaming Services Integration](https://greasyfork.org/scripts/486706) userscripts.

### General
- The installation of the [Trakt.tv | Trakt API Module](f785bub0.md) userscript is optional, as there is a scraping-based fallback, but very much recommended. Scraping is comparatively slow,
    resource-intensive and error prone, with a heavily reduced set of available item-data. You can see what data is available by scraping alone, in the `scrapeFromSummaryPage()` function.
- This script also makes the color of watch-now buttons correspond to the title's digital release status. White means the title is available on a streaming service for your selected watch-now country,
    light-grey means the title is available on a streaming service of another country and dark-grey means that the title is not available on any streaming service.
    Keep in mind that the data-source-counts attribute (which this is based on) can be unreliable, the attribute can be empty despite the title being available for streaming or
    contain sources which don't actually have the title available yet.
- `DEFAULT_WNLINK_ADDITIONS` controls how many custom watch-now links are added to the two-slot watch-now preview on title summary pages and header search results. Can be 0-2.

### Adding/Modifying Custom Links
- Custom links are always inserted above the default links, in the order in which they appear in the respective configuration array.
- Item-data can be of five different types: `movies`, `shows`, `seasons`, `episodes` and `people`. `people` item-data is never provided to watch-now links. `seasons` and `episodes` item-data
    is the same as that for `shows`, except for it having an additional season/episode number property. You can see what data was fetched by checking `window.userscriptItemDataCache` in the console.
- There are eight properties that can be assigned to a custom link, all of which are technically optional, though at least a `name` and either `buildUrl` or `evalOnClick` should be provided:

| *LINK_TYPE* | *PROP_NAME*   | *DESCRIPTION* |
| :---------- | :------------ | :------------ |
| both        | `name`        | The name of the link. For watch-now links this will replace the logo if none is provided. |
| both        | `buildUrl`    | A function which takes item-data and returns an absolute url, which will be opened in a new tab on click. Defaults to current page url + '#' (which does nothing). |
| both        | `evalOnClick` | Will be set as onclick attribute if provided. Useful for e.g. cross-script interactions. Still allows for page navigation if `buildUrl` was set, unless you return `false`. |
| both        | `includeIf`   | A predicate function which takes item-data (and returns a boolean) to decide on whether to include this link for the current item. Defaults to `true`. Useful for e.g. only including a watch-now link if the title is of a specific genre OR not including an external link on `/people` pages. |
| watch_now   | `category`    | A link category to be displayed in a second line below the name. See the `watchNowCategories` object, though any string will work. The category line is omitted if no category is provided. |
| watch_now   | `bgColor`     | The background color of the link button. Defaults to `DEFAULT_WNLINK_BGCOLOR`. |
| watch_now   | `textColor`   | The text color of the link button, which is used for the name that is displayed instead of the logo if none is provided. Defaults to `DEFAULT_WNLINK_TEXTCOLOR`. |
| watch_now   | `logo`        | A logo for the link. Should have a transparent background. Can be a data uri (base64 encoded image, see "Tools" section below) or a regular url. Some external sites may disallow hotlinking of images, in that case use a data uri. Or they may have a restrictive image caching policy (then logo has to constantly be re-fetched, which results in a noticeable loading delay), in that case use `GM_getResourceURL` to have the userscript manager handle caching. |

### Tools
- [https://base64.guru/converter/encode/image](https://base64.guru/converter/encode/image)
- [https://compresspng.com](https://compresspng.com)
- [https://www.svgviewer.dev/](https://www.svgviewer.dev/)
*/


'use strict';

const DEFAULT_WNLINK_ADDITIONS = 1;
const DEFAULT_WNLINK_BGCOLOR = '#333';
const DEFAULT_WNLINK_TEXTCOLOR = '#fff';

const watchNowCategories = {
  regular: 'Regular',
  streamingSiteDirectLink: 'Streaming Direct',
  streamingSiteSearchLink: 'Streaming Search',
  torrentAggregator: 'Aggregator',
  torrentTracker: 'Tracker',
  usenetIndexer: 'Indexer',
};

const buildUrlTemplates = {
  torrentsDefault: (i) => `${encodeURIComponent(i.title)}${i.type === 'movies' && i.year ? ` ${i.year}` : ''}${i.season !== undefined ? ` s${String(i.season).padStart(2, '0')}${i.episode ? `e${String(i.episode).padStart(2, '0')}` : ''}` : ''}`,
  streamingDirectPathDefault: (i) => `/${i.type === 'movies' ? `movie/${i.ids.tmdb}` : `tv/${i.ids.tmdb}/${i.season !== undefined ? i.season : '1'}/${i.episode ? i.episode : '1'}`}`,
};

const customWatchNowLinks = [
  {
    name: 'EXT',
    buildUrl: (i) => `https://ext.to/browse/?q=${buildUrlTemplates.torrentsDefault(i)} 1080p 265&with_adult=1`,
    category: watchNowCategories.torrentAggregator,
    bgColor: '#262a33',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAAAsCAMAAAC34K2TAAAACXBIWXMAAAthAAALYQFbeSumAAACfFBMVEVHcEwYj/MYj/MYj/MYj/MbdsYYj/MYj/MYj/MYj/MYj/MYj/MYj/MYj/MZftUYj/MYj/MYi+wYj/MYgt0Yj/MYj/MYj/MYj/MYj/MYj/MYj/Mbd8YYj/MYj/MYj/MYj/MYj/QYj/MbdcIYj/MYj/MYj/MYjvIadsgad8kadsgYjvIYj/MYj/MaeMoYj/MYj/MYj/Mca64ccr8caacdbbIbdsUaeMkYj/Mccr8bcb0Yj/MYj/MYj/MYj/MYj/McbrgYj/MYj/MbdcUbcLsYj/MdbbMYj/MYj/MdbrYZeMsYj/Mad8obcb4ccLsYj/MaeMobcLoadscad8gbdMEYkPQda68Yj/QYj/MdbbQYj/MdbLIadMIYj/McbrcYj/QdbbUYjvAca64bbrkca7AYj/MYkPUXeMYad8oYj/McbbYbdMEbdcQdbbMbcr8bd8ccaakYj/MYj/MYj/MYj/MYj/MYj/MYj/MYj/MYj/MYj/MYj/Mad8kaeMoYj/MebrYaeMobdcUYj/MYj/MYj/MdbbMYj/Mcbrgcc8AbcLsYj/MYj/MYj/MYj/MdbbQYj/MbdMMYj/Mccr4Yj/MYj/Mbcr8bb7kdbLAbdMMdaq0bdsUbdcQZeMscaq0bcb4ZeMsYj/MbcLsYkPQYj/MdaaoYjO0Yje4caakcc8AccLwaeMobb7ocaacYj/MYkPUYj/QbdMEYjOwYj/QYjO0bdsIYje8YkPUdbbQYj/MYj/Mdaq0bdMMda64aeMkbcb0bdsUcaakYj/MYj/McZqQYj/McZqMcZqIcZqEYkPUYjOwcZ6UcZqUcaaocaagcZaMcaacdaqscZaAdZ6YcZaEcZ6YUMviOAAAAwnRSTlMAwG7kCl0cdGm7V3lO3QK57gMYBHtk98JMLAlX4fUiiQ/BdKe++hI9J0g4k9MPyvPZ6bn76E4djgS5vz7qGtvjAeZxmvvoXbLFCN8btrANHqVZKoyk/lz01LbyjrDeCOIv+tHw/vswJTLllnffsV701FqzoH2rR1mMBlQ7AX/oGWlQrR/szceQniQ8gjTc8WaWpMXsq8vqgfJTcAz0mBjMxefi8/B8+a27L87+kfLunKHj5YmS1O3ohPaH8CG9ZP5WFYl1PCQAAAMgSURBVFjDtZjnWxNBEMZfIeFoBhII0glI71YUaSqigl0E6U2KIGLvvffee++99wJJNAn2f8gP3O5eIjkENvPlnpvn3fs9s7c7O7OAwMyVPDwED0EQBAA2r1amlBrkPtRlgGuHXXN2BwT26ucbLUVdOG/St4tmaFMqnDp6MqeeYK9esvexY6SwmVVGyvrYmsQDpiifxxyHXBgrduovEpjevGAheMDgmSyZyJUMdrrqNwnM+LYFfGAQvJmnPICwZk3pNJBJtLQ28oKFLo2ingwtgZ2po3/s59w48ILBM5W5SnaTwCw0sDmzk3oP8x7k5Sa19OVdH9YtYxMZsrfLd/IUDcw4Yzp6Dxvggu4tYAkbcDEeAGKOf/9GWLVxoky6qane3qa2C4P/IioqvlcJoOwqmUT9j4jJ/w6QwBTd++3DNGkstOfVQMMdFtjOjeALQ+gWqrr/qAFP68xkQ2fHgDdMkZdPZY/jUfuHsDpH+HCHQedLZQ+ePXxBUvCwoSPRN5h3stXSDx8sUambJuaKsvonNXfFuEzDR6GPMFsb6CmRrV5zQHR/+dpOJnFIkMohsJzMsBRbmGW0vVnvJww5odutYXrTJJWjYPDZHCyF6c0TxsFhMAQmpEhgBst4OBAGTTiD6U3zDzoS5qMN5heZzRFjtc8AYGsix3/mBVnTrT/KcTXKw1T+GTz3mVxuhHrfkVyeGUQWpgkjZU/9NVN7/3OjHCwwL4TILl8vNRNa37O+DEy9J5Koogqjb94gMIecZ5oEqrpSpIqtYC0F/5M6sCiLqiJ1QPM5GprhcCNnWHU6FeVr1UDBJVrwcK+uMleFsGpfAQAtJ+jyN1YEcYW5B1NN6mIAwNljtPomFXH/cqObm5gc4yNZci6sFDvB/bSYE2v9fmZ9sbGYFlZMPYnkIFCV1dh0MXxgWmfmSaND1+5goXXeus0J1lTC+tysFWxcRCnrY16/4QRL8GMOD4X9npoH7FOinduCdZu2sduCzvfvOMA+J9u9BynYZWB5pK2ZA0xIkdQkAdbJWbmB0vSm7A//A5O/TrK6E5K9TlJ2/1Er719Hk5i0lOpkFwAAAABJRU5ErkJggg==',
  },
  {
    name: 'Knaben Database',
    buildUrl: (i) => `https://knaben.org/search/${buildUrlTemplates.torrentsDefault(i)} 1080p 265/${i.type === 'movies' ? '3000000' : i.genres.includes('anime') ? '6000000' : '2000000'}/1/seeders`,
    category: watchNowCategories.torrentAggregator,
    bgColor: '#2c2f31',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATsAAAChCAMAAACPiOhkAAAACXBIWXMAABJ0AAASdAHeZh94AAAAPFBMVEVHcEz///////////////////////////////////////////////////////96enp6enr///+6urp6enrpNowFAAAAEXRSTlMA3WYR7swid0S7M4iZVaoPA4cPtgEAAAYzSURBVHja7ZzplqsoFIVxBBzS7b3v/65dEUSGfTRD9bKGfX4lZHuGTwTEFZWC9uddU7/XyI7syI7syI7svhC7v0/Yk5k9553syI7sfju7orVQwePIjuzIjuzIjuzIjuzIjuzIjuzIjvezP5sd9z7Jjuy+NLsnvfz9VHt6uCQ7siM7siM7siM7siM7siM7sruC3WenTHZkR3Zk9/vY/XwjO7L7Wez+x/Hps8dPsiM7siM7siM7siM7siM7siM7siM7siM7suPWGY322+0P7fUHZ6RDdmT3vdgRHtldwo7wyO4SdoRHdmT3zdgRHtldwo7wyO4SdoRHdmT3vdAR3hvoyO51dIT3Bjqyex0d4b2BjuxeR0d2r6MjvDfQkd3r6AjvDXRk9zo6wnsDHdm9jo7sXkdHeG+gI7t33pVLdGR3ATpFdIR3BTpFdF/lBTPfyb7c23l+FTpFdIR3yZu/iI7wLvnTLNGR3SV/1SY6srvkBQFER3aXvJaC6MjuipehEB3hXfIKHqIjvCvQKaIjvCvQKaIjuwvQ/WR4iuy+LrofC4/v7XvV/v2HDGg0Go1Go9FotE8xo+/Wuy/D+qUJzdpEoj4c07sf68zJZqbH7Xc7c50eVZsmSzcJXXivcXpifoJcqUbbdlkWO5qjUvRyNydpqvvncU1rbV4qd6DeNXcb3Y9taPDqYLbH7cty5ro4qktqSkMX3i1OT8xPkCvd7tJBLiVmt3rpmlhqUIFV8iNy3A6n7LBrcJSN+14SWmBXpCfmJ8inB0uJ2A3rx1RqQYH9dvQo5ra0/Sk7+yA7fzZBaMyuTE/M76Fq5FIidt39k86ON2WB4bdKzi258jE75Bp76xQOjdmV6Yn5QXnjLthO68l9ms7Z6ThNXaYTCuzC4UOidgLT7Zm4dm12O3Gt0qPGNis0De1cukrXjwNOT8wPyn34FaO7enuhlOB2SMaBHbPJC1w7ebtEnTTJTZnQw9J2de668NbYJWSPQ/veZ9PLOtNI+UH5Lfr5Y/bsdC+VEto6EG3LKilw/TItZS81cTGPsLOn7PzU7y4bGLpghzRSflBu47MV1jNH7DTIoN30SYGr776KIySOhz0RmR12DbzV8QIChC7YIY2UH5RbPwgoOam0bUAzk97SigtsXORxKWYW31Nc7PqYHXQN02z3sQiFztlBjZQflI/b3DHV/UPs3IjZNkmzsXGnjDuCVnOcsnPS2bst0UUWt39YfeIaphmVikLn7KBGyg/K53iGH3vgYivFdwCvTcc7P4fZpMCb7wauPzRwDdBquDbQJ64hu2jaQ6FzdlAj5YflXaK9NWIpaVubsvMn3UQFNtsEf4u6fua40uqUHXB9xg6GzthhjZQfljcdWJqfswsJ+ZJ874gKrLdx0Q3iN7z2rOZTdqXrM3YwdMYOa6T8BHkzlkvzQ3bpknErye6XtNnv9ebtlPmOGg8Gfjk7n7ErXWN2t3AoDJ2xwxopP8mlanSXdagjdpVfSdUpO7MkK1k/MKx7MG3OyFc7t2HakedZ5Bqzq8I3GDpjhzVSfpLLddFcT1W+DhVuHo3vtl22NWTTAue8909HV9khu9w1ZucWT/dRHIdO2QkaKT/JZdi0s9ldOGQ3hnvgbGvIpAVOxYZEmZs5PFmia8zuFgYiHDplJ2ik/AR5P28rE38xHrKLhsN8a8gmBbbFdsJQOK4fZJe5huzqfcTBoVN2gkbKD8n1/VKdkruU9pDdHG2+DGmBJi7Q4M2cxHF0C3rCzpyxa/Q+0xlpHyliZw73wor8oLyLh/0+9Hp9cpLHbAQzKu4dZlNsq6M5zMzOybQOurc2n5zCYvzDZNfFpWBtF3ceIXTCTtII+UG57+njR8ymrg5Lidn1S7pdZZKTabZJL9zltZsc7C1Wx3ufpeuDvc9ayaETdpJGyA/Lu+MdVeF5hR87p2xryC7JHt+++xOWXmBPe3iEXeT6gF0d5lsQOmYnanB+grzPRsG2eYhdHxYEutwsNFknV/uqply3nz3rKVyL7PyDKil0zE7U4PwkeW+Tu4r+oedkWz/QaMfu/q1KdrL9Yvyjm2fVTrNSj7HbXUN2rR2HeIkMQsfsRA3OT3ZZd8UjTlgKDVlvwFPwzP4Dc+XBZ7I6fcYAAAAASUVORK5CYII=',
  },
  {
    name: 'BTDigg',
    buildUrl: (i) => `https://btdig.com/search?q=${buildUrlTemplates.torrentsDefault(i)} 1080p x265`,
    category: watchNowCategories.torrentAggregator,
    bgColor: '#0e2130',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAABgFBMVEUAAAABiNIBiNIBiNIBiNIBiNIBiNIBiNIBiNIBiNIBiNIBiNIBiNIBiNIBiNIBiNIBiNIBiNIBiNIBiNIBiNIBiNIBiNIBiNIBiNIBiNIBiNIBiNIBiNIBiNIBiNIBiNIBiNIBiNL/AAABiNKH0AABiNIBiNL+AAABiNIBiNL/AAABiNIBiNIBiNIBiNIBiNL+AAABiNIBiNIBiNIBiNIBiNIBiNIBiNIBiNKJ0gIBiNL+AAABiNIBiNIBiNIBiNL/AAABiNIBiNKI0gEBiNKJ0gL+AAABiNIBiNL/AACI0gD9AAD/AAABiNKH0wD+AAABiNL+AADfRwCK0wD/AAD+AAABiNIBiNL/AAD+AAD/AAD9AAD/AAD/AAD+AACI0gH+AACI0gH9AAD/AACI0gGI0gH/AACG1QD+AAD+AAD9AAD/AAD/AAD/AAD/AAD/AAABiNKJ0QCG1gCI0wKI0wCI0gGI0wL9AAD9AACI0gKI0gD/AACI0gD+AACI0gEBiNImhaN4AAAAfXRSTlMAA/n79QsH7+to8udvElYZnoV4WxUP1s2jLRxAKeDIuTAiHosgwJWCfWMW4zjRgnTwp9m1rZBKRpqZNbFS3GBPSUMf+bGI4iXEeE+oQL1AvUzJAy0I+D07LPwQiiUg2Mqs25M7771FFObRo1tRNXFnOiQKj3azpZ2amGhOOHfzJXAAABCbSURBVHja1NrbbqJAHAbwbxhADkJBFEUFbRqNRqvxgDXGQ2pM1hsTr7qvsW/Aq29aTwztJm6gaH9XA4QMf+CbAQLSUG95HW+Qww9HttRrzftNZYmfTc6U8a7fEfADlFct/QFfKEhZfBAXLdy9+XOQaajUwmdPNsGBrtz7JRGKSu8RgMy9IEqUdByRY5MlTDPjF4K7UOHz+JDjZ4jQJREnzQ0+yXtDvcS7fQ13ILfFke8WwNr5oYK5AiLWtqcBWnahdHF7Yx9HYrEExmNQxRlR22D96oyEwyajgdtzdZxUeTbw5hYhfg0MbTEmOFg+4/bo7/CssUZIZ8mEiRKEkJ0n4khf4OaEwMHFpoaLGWVCXA4eEDJ1L4t7FTdXDsrhVNA3nPUaCCN0hous4uDsVcHNOYGAEGOHs20ODHWOs9/cBBddipt7owhbc5fIdFZgFLOhIn2E1AMRKap+NQfvJTCMMU64LhgbEycTnsnLr6CA1HRHVOnkNERYi+hEL+CABHUwpiWcFE1Ex4G0ZLmSI8h2p4LogROEEXV5bNSjhbTO+dEVDWFa8AspMZQVABCT6xGE5aPH4NfEx4plNpSgqIFhdSbHNZ4JRiGoIh0T3sFBpeOtESbNwagENOCHm9aLhoj8SAlso13FjK7BeOMJovJWtozEPW1woo0zOkJ2LbC6dQ3/QBzZGAaKugEr10BE4YlTbWoISFj7GRcyH+7AH+D/aC+fTvXIBEPMZooVYFZcOEhWlyO4qA7HOLNcxJbZs70NjyOGaCwEJCmaxsdMDyd56sR/OsjjQjQ5Xzi17SaS5epsornTslOir4ip5YWrKroVnMk2kjXqgdE+vNe+1ujmD+Iq5sLzlVFgh4FkPY3B8tU85h5nVBGbyE0FHOX4FdvNAMmyhmARr2YrT2Uk4dVWZYJ3/einmEYPyapTIbrGaxWQECJL9gSAzO3ByNM6kkU6bXyngsntZr+5OVhtF0nrefheZYMqJiJGPpK2pg6+WV0mYAlcBYkbGUidLhEk7g91kLaBgW8wqCFlorJHPLNHfFbmJ0hX3xXjleHSYOFPBESYNkGa8oqOOKrSVFvLG4Uf6SLCVkEVaTK2iENwS3gnVnwp05zhTOd6SJPF1RHH9FnEkTgfUdvCQZbKSJPDx+uvS2cIeWjxtY/km/wcqfJKiMUcgbWu8X1CjEwFqWDvDNZ6tZStAq7Ts0VEWFKxpjpImeCaCJn1alKgPnsu37pyf7WPKM3YrpG6N66NA3E/Vem2t38AgD2fw1Us5QH3QT9+GFiqyniZx8kLdXCVxgB3os3tga6n5ESElXa4ikMruBNZftWk0wewyte+NjbtO/kXAegHwzqiCJ3hKprUx71wBHzySq9Ncftu8v4VcejjSuQv9fb6ljQUwHH8t8G4aFw0bhKISARyDS9IpplUmN0hy1QUFYnMsifL6kWTf73cxoDj1ja15xmfFz46fOHXs7ONceb1Qb/iQUbDdcpb6FWAXoR6twZHoE+MJwcNqFtmnY5JLs1Ak4xxHjqUNYe1f4w7pJvTiegGnYdma7QdOlO0xKFd3uiHvqQGc7gAbwT6Yr3Yzm4fcEFPTAWjHRdATeprxXHKGxyBKrbl5XDR72DAs1r0teA4OGWDIndkymNs8Qwep3WMAjN4DbpyaxSKmHQ6fv1tkWHcbptrzOr0GCxO34IJuuKnl1TcK2aIskXnZB46U4hCVmdlcR8oKn56taj75wiIdZ9ypgvoC2FhqbRjaX52bWzZ4QYh3S9PDTlDI1nnqLlFJ82G1l/m0FC+9z6W/q5yZYak5XVmX4UpACZbMfAqEzLOoGM5+FBnh1o5AT8IKfM9dPg90f6Y7hJmptHF5fXq6wJRvflBdHNHJ/X23kMlcrUuM5UMoC95JtDDlLPo8maDoscR9KKG6VwfTpRrA2GQRryWiT45DrdREdoutTk7aMno+fY1yT1luQFJpntpeloXTzeqEfB4wpCV6o+Lem6ds4+BPMq4hH6wtBCcxb8EWjb8N9VPnAQuy+UzRBgQZB81at4UNY8rAPkCqQmgstU2nlgFaYXlvMelmPK+gdExDUuu75x2e7D77YVQ8+1UUg3AONvlzfbOUfWqQ9YK5gFfnoKS6HBXCKn2WjmEVL5/pSF+Q27RBBXMS90hpP2vKkJIH1evMGTOAFXCLVtPCOlETQipPA5ePcapXmqFCv4tYI1HCrkp7wLIkMbJyUntQXumHAN49EAgbBM0OiG3y+XtD2/EkoNVXBVHyw9ZzGIhaEiHpp0zmeG5cyHcvDj+cdr+qeMJv+kRBJ2QuwBQqe+1W/YgJ1FNQNLqVlUyX/Y8R11/Tlt8113oIEM4+9pCeO8O2O5p8e4pZwOC6l7p7OB2sLIR4144FCu+vFxn2fXSx8917oWfEHmtkMJkk5ahOQqAUkhN2LU0hWCj1L3hPstJgFPZXBcP1PzQxcCrl9i22/xXiHIzkJAxL1gZAMohFX5EfkBbCJ6xnPXE+ZAdliSE3OeyBGTIUAjnTZjtFKAmpNkQDr9aQ7DNco7OhaywMiHj3CjIhdxLuiiQRocBxZBao1HbFU4jv6E5JCZMdzJkvP1vf/krtlfuDnnK8ko7sc2753atgLFlSEad8Tl0scwqhPRqNKE95JDl7JAhe8Jf+wxnSp2QqtCxucqNGxkCppiyZ2dC9EImgLaBGwohhN3vx5pD6sJJkQwRdrk6yJAj4XoA6AkhuSeiBu+wA5zkvFIIqfb1ikIS4i+SIcIxYIsIkeDPpukcNxbeuIqQ3TP74qBUNIZ8kt61Pouzggzh58sHECHSUj768QiQnWSg7qiF5iPhguS7xpAj6cn+nv/2kAgR97kyESLL4aNn8ae6M39OGoji+EtISEICgXD24DKCIAXKUUCloJURHK3V2lFsvcb7GM9xvJ386zoGSHYDEgRj+PxSrkK+s/v2vezxnjsUPWdCiMqHgcXPKGRPfeUNJuTyRCHPpwnB2eoBOGVHdc2kkOuDIXg2Ibdvqa4bd4h99eFFVIim/MI0IXh6mISXCnG0GSHvBrHuTEL2r+nHIKOxvzAKuaQpNydkjVL/uqUo02jTU4V8HVj7LEIO936oPESEaJd+6zYqRPP4R6aFeHgYQLQjDFXxCZ6b68GJQr4OjP2UeSHHLl4YOjcwCHmhPn728iScPLunG8Ne/VD51D846B9tThcid0CDWJM7sSilUOsGIR+//OLxaPy9YkbIszNn9p5fGAW31/aNQh5qcxRYrPV8+PSW+gXThKQyYCAYbWJCcD6acIg4z48BKgQLfjEhT7QXTAhZrVCJceqEPwt5/H52IfcPYJyQw7sThMBF80J2JNduEsZQkv8k5PyHfZhVyN2XAGOFwOGZ0WfOPkMG4zebw153dIT4eRRR6CmTdgnIpYlCHt37YC761di8dnR5H8YJUXl1dO3C5rXPb/YPNK+panx95u7m3fsnbsNntXMaRWxwu46yFgDjCD0Y8e6Kxvfrx8HAU/U9fRx5cHnIw1e3DwHjUH1rHxC0keobIGiR156uM7Uy3t1tUnGU5QRMxhMFq9g/xOOYW4cDvZrSb1oAMCC0XUlL/purxJTD3iRYRf/H3aMnx/bhlxsZuP+9oazNSy/7hwAH/eF8Ul+XwWoFzLCjBMAi+mor6ObxLiPts7mpjXswosYQMB06GyNFsABVCMYnraOhPLsDIwpxmMpahMr5umAVfVzH/gQhF/qgES/AFLgoVbImY60W4Gvc2nuCmr4m48QB6GBqU5Yd4gwXBGs56L888eDFmb0zL05gq3HHzr4++nx/78ylB29ezbYy2GLiy7HAni3DHxA7FAfLgRS9ChNZ53tJWBLcDSo8SUqXX5ZNjb8JyFR4rMEnc9Vl0vELcYuMdcfcSlWWbEvQL1ZLTB0waszy6fhFkRTwV8KwlNQYL9oCXBmWk/VyTETD3aUZejGC8dwO6AjZ7OiOeYhqyA0ahTzgBJbE/p2pGA0jRDK+JbVqCZH47VXaUiSk2CGxvhmC+TRobPhKqRCjKA4+H6YUdjedvUHehOVA6BmbSUzUW9yaeqPr7cBykI5MGdocdj2Xj0KzfvgzHRsmfRDBgDT1kOEGabvTC5KyLa+h151k/DCN1BbYi4BL4CoUVRFWVsWA253caHNe0kTcXqdstiG7EQMAur4VUlQcfLh6A6aTIO11CmNlVOaEDoiryW6AAFN4qIa9vHul+neG5bDZZESdTMLsEA2XzY4cE3kZZoeu8AmwF342+Bfq43nb+ZAiexpmJsPab86RSLtuzJ7WxWb2oeKj6jAT7pzdsqEMkMg2zEInZtfZOmGmDEACswN2JUuugFnWbRaYoER6YJZ4FWxMgMnOEwis2sc7ZpkAmKKQGreW5bBPmq1exGyLdAHlXNjFZck62IQVs5n9q3H0/+LkVgCgSNmhEuZv5LITzLBDNTUVxbijpNqMj7HLpAodFcAUklqQOODx5pSwL6GlbUyC5XjYlAg4xW0whTO0XUineIVHzyoRpW0RLIZzZOJsGzDcZo8Su4u7Eam5bhC4WwFrKTpaQEhkg8bLLbTnzOjqA0vxqTFiIhQVECkc65zve6M0WEnadW54mC3q2tI6yOk5dzbcJG+AhRARZkN70kwpZfmGuujBp2EeglFrO1aWQod7kauQbEkuFqg5twT48k6wknWHwQPTzXQnFvLDXDhZP1jLP6pF3WItaBAris/kfWA1cp6A2bHhWomb8cPC8cWN2v55X5Oii/+JEAcYDSXH/WMpNHkOFsy6IuJNxG5IbLRFwL8kJcOCkWKGIkBrAHSGKfsXJ6VWwFtYCsOCiWfwqiBZ1d0XXOG3sAic/rzLEHucXvje9pxn0hqQuxOC+aGFHJtxJ6gsIBCL9sJBpBS2O+KqLTR5qOhjtjnn74Ze+7cF64JUU18RM59YaLXCBBUe5jjIMF00cszBYpFy9CgtNSMQSDZ6J8zJaUcQhkTKQSRMWXRBNme5o05IeB1e1P4yPZgHPJuXsxfbwfzXYknmQ10gBCZ2GlDiPtzhF5o7MBthQdeLq8xV9CThgqEjTIRns4BB4Gu/RDnPK8yu7OnCWIjV01c3ACWSRtdAZK3v9gRYOJ5IljYaKn4Cok0FQbya6eQUHu/eNSEd33YoDhb3DtIu2qa53uro25pgDXUGUFJpUAlstwDhqiNcKvhPiwTwHkw8DwjuCsMRauMIYBF1Fz4CdUd22ppU8HmrgkdyQUDJsmF/tx1mamAVuJC4d2KmVCGs3Y4nUfszbjt2y7zCbLnBMs5RWLlazcbzHCCkS1r/8wHqLQLjRgWwEFzIrldnLcWJgaefdaJd6//vQlpDhLR1DQJpL15vf9KUzFsS/juIkHOUgNuEhlNfZS6T05t3jYX/zopuwLlBSWivI9BP0voK9RE0v+V/x6kVwdtwZdCQGY2LhTzo6Ooru3B2OL5Szg49COMDlEoa+SDq2zhG1Hv2/0+BV4fJBCMDhp8n9A4Hc3qduD7W+v8QVUZOAqyw2MXgfauDvx9gpVFj2SK7sNMfc8TSfAMQ8ItPGjfa10luYD22qby4IkWKMAa/VuteToGBJtkCIOpVl5038fyGHt360YxnnFAyEuGp0hJk3a+mQcWXc8IY6o2GfylKUzSZpOob7VPc9i+p5oWr51oZvgBLTrAR45l8x5Kiij8BLdBpho/E8hQAAAAASUVORK5CYII=',
  },
  {
    name: 'Stremio',
    buildUrl: (i) => `https://web.stremio.com/#/detail/${i.type === 'movies' ? 'movie' : 'series'}/${i.ids.imdb}/${i.ids.imdb}${i.type === 'movies' ? '' : `%3A${i.season !== undefined ? i.season : '1'}%3A${i.episode ? i.episode : '1'}`}`,
    category: watchNowCategories.streamingSiteDirectLink,
    bgColor: '#19163a',
    logo: 'https://web.stremio.com/images/stremio_symbol.png',
  },
  {
    name: 'AnimeKAI',
    buildUrl: (i) => `https://animekai.to/browser?keyword=${i.title}`,
    includeIf: (i) => i.genres.includes('anime'),
    category: watchNowCategories.streamingSiteSearchLink,
    bgColor: '#0d1116',
    logo: 'https://animekai.to/assets/uploads/37585a39fe8c8d8fafaa2c7bfbf5374ecac859ea6a0886b7dc.png',
  },
  {
    name: 'P-Stream',
    buildUrl: (i) => `https://iframe.pstream.mov/embed/tmdb-${i.type === 'movies' ? `movie-${i.ids.tmdb}` : `tv-${i.ids.tmdb}/${i.season !== undefined ? i.season : '1'}/${i.episode ? i.episode : '1'}`}`,
    category: watchNowCategories.streamingSiteDirectLink,
    bgColor: '#080914',
    logo: 'data:image/png;base64,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',
  },
  {
    name: 'Cineby',
    buildUrl: (i) => `https://www.cineby.ru${buildUrlTemplates.streamingDirectPathDefault(i)}?play=true`,
    category: watchNowCategories.streamingSiteDirectLink,
    bgColor: '#520000',
    logo: GM_getResourceURL('cineby'),
  },
  {
    name: 'Hexa Watch',
    buildUrl: (i) => `https://hexa.watch/watch${buildUrlTemplates.streamingDirectPathDefault(i)}`,
    category: watchNowCategories.streamingSiteDirectLink,
    bgColor: '#111317',
    logo: GM_getResourceURL('hexa'),
  },
  {
    name: 'Fmovies+',
    buildUrl: (i) => `https://www.fmovies.gd/watch${buildUrlTemplates.streamingDirectPathDefault(i)}`,
    category: watchNowCategories.streamingSiteDirectLink,
    bgColor: '#111a1e',
    textColor: '#0ea6c4',
  },
  {
    name: 'Bitcine',
    buildUrl: (i) => `https://www.bitcine.app${buildUrlTemplates.streamingDirectPathDefault(i)}?play=true`,
    category: watchNowCategories.streamingSiteDirectLink,
    bgColor: '#1f0a37',
    logo: GM_getResourceURL('bitcine'),
  },
  {
    name: 'SceneNZBs',
    buildUrl: (i) => `https://scenenzbs.com/search/${buildUrlTemplates.torrentsDefault(i)} 1080p 265`,
    category: watchNowCategories.usenetIndexer,
    bgColor: '#212529',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAACXCAMAAADUFsyUAAAACXBIWXMAAC4jAAAuIwF4pT92AAADAFBMVEVHcEzNJRfkMx/WHhbKHRPSKBjkMR/WQjndRjvbJRndLhziIhnkLB3////kMR/lNyDkKhz////lNB+QEAPlOSHkIRjlOCHfGRbhHBfkIRnlPyTlQiXlQSX////lPSOoDwjjFRW6DQzlPSPlOSLlPSPlNyC0DgrkHhj////lPiPlPCPkMh7lNyH////////lQSXlOSH////////lQyb////////////////lPCPlQSXkHBfkLh3lQiXkKRvlMh7////lOCHlPSP///+5DgvlRCanDwjfEBTkJRrkKBv////lQCW7DQzkHhjlMx+eDwa3Dgu2DguxDgqhDwflLh3lQCXlPyT///////////////+1DguzDgqjDwfgFxbkJhqbDwXhHBfhExWhEAfkFBXlQSXlMR7kLx3lLx7kJxr////kIRj///////+6DQy8DQyVEASvDgm0DgvgDRP///+jDwfjERXhCBPkLRziFBXjEBTkJxr///////////////+xDgq+DQ3BDA3kHBezDgrlMh7kIxnlQCTkHRf///////++DQzKCw/ADQ27DQzZCBGXEATMCw/jCRPDDQ3kGxfjDRS1DgueDwbbCBLhEhWoDwjlMh7lPST////DDA24DQupDwmeDwacEAXjCRPkMR7///+YEATRChDUCRCmDwjcDBPkGRbkJxr///////////+MEAKPEAPZCBHUCRDSChDkHxiKEAGMEALeBxL////lNSDjChTlPSTlNyDkHxjkJBnlQCTkMx/kOCHkMR7lPCPkExXkKxzkLh3bCBLiBhPYCRLjBhPQCxDjEBXTChHSChDfBxPIDA/kKRvkIRnFDA7lQiXCDQ7lOyK9Dg3jGRfVChHjFhXkGxfkJxvkJRrjBxPkHRflRSe/DQ3kLRzcBxLjDRS5DgzXCRGyDwq2DgvlOiKsDwmmDwjKDA/GDA7MCw/dBxLLCw/aCBLBDQ20DgupDwjJDA+8DgycEAWhEAfOCxDEDQ6vDwq6Dgy3DguVEASLEAIi4p0RAAAAuHRSTlMAAxANBwohAQIECRcbKRSaeO50/idKLC46aPT67PpTF9omPEFL+2LFDLM0+VsFQtr34fPnnsgROKu8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',
  },
];

const customExternalLinks = [
  {
    name: 'Reddit',
    buildUrl: (i) => `https://google.com/search?q=site:reddit.com discussion ${encodeURIComponent(i.title)}${i.type === 'movies' && i.year ? ` ${i.year}` : ''}${i.season !== undefined ? ` season ${i.season}${i.episode ? ` episode ${i.episode}` : ''}` : ''}`,
    includeIf: (i) => i.type !== 'people',
  },
  {
    name: 'LBXD',
    buildUrl: (i) => `https://letterboxd.com/search/films/tmdb:${i.ids.tmdb}/`,
    includeIf: (i) => i.type === 'movies',
  },
  {
    name: 'Fandom',
    buildUrl: (i) => `https://${i.title.toLowerCase().replaceAll(/[^a-z0-9]/g, '')}.fandom.com/wiki/`,
    includeIf: (i) => i.type !== 'people',
  },
  {
    name: 'Spotify',
    buildUrl: (i) => `https://open.spotify.com/search/${i.title} Soundtrack`,
    includeIf: (i) => i.type !== 'people',
  },
  {
    name: 'YouGlish',
    buildUrl: (i) => `https://youglish.com/pronounce/${i.name.replaceAll(' ', '_')}/english`,
    includeIf: (i) => i.type === 'people',
  },
  {
    name: 'Forvo',
    buildUrl: (i) => `https://forvo.com/search/${i.name}/`,
    includeIf: (i) => i.type === 'people',
  },
  {
    name: 'Bacon°',
    buildUrl: (i) => `https://oracleofbacon.org/graph.php?who=${i.name.replaceAll(' ', '+')}`,
    includeIf: (i) => i.type === 'people',
  },
  {
    name: 'AZN',
    buildUrl: (i) => `https://aznude.com/${i.title ? `search.html?q=${encodeURIComponent(i.title)}` : `view/celeb/${i.name.toLowerCase()[0]}/${i.name.toLowerCase().replaceAll(/[^a-z]/g, '')}.html`}`,
    includeIf: (i) => i.type !== 'people' || /female|non_binary/.test(i.gender) && i.birthday && Date.now() - new Date(i.birthday) > 18 * 365.25 * 24 * 60 * 60 * 1000,
  },
  {
    name: 'R34',
    buildUrl: (i) => `https://rule34.xxx/index.php?page=post&s=list&tags=sort:score ${(i.title ?? i.name).toLowerCase().replaceAll(/[^a-z0-9-:; ]/g, '').replaceAll(' ', '_')}`,
    includeIf: (i) => i.type !== 'people' || /female|non_binary/.test(i.gender) && i.birthday && Date.now() - new Date(i.birthday) > 18 * 365.25 * 24 * 60 * 60 * 1000,
  },
];

///////////////////////////////////////////////////////////////////////////////////////////////

let $, trakt;
const itemDataCache = unsafeWindow.userscriptItemDataCache = {};


addStyles();

document.addEventListener('turbo:load', async () => {
  $ ??= unsafeWindow.jQuery;
  trakt ??= unsafeWindow.userscriptTraktAPIModule?.isFulfilled ? await unsafeWindow.userscriptTraktAPIModule : null;
  if (!$) return;

  const itemUrl = $('.notable-summary').attr('data-url') || $('.sidebar').attr('data-url'),
        itemData = /^\/(movies|shows|seasons|episodes|people)/.test(itemUrl) ? await getItemData(itemUrl) : undefined;

  if (customExternalLinks && itemData) {
    addExternalLinksToSidebar(itemData);
    addExternalLinksToAdditionalStats(itemData);
  }

  if (customWatchNowLinks) {
    if (itemData && itemData.type !== 'people') {
      addWatchNowLinksToSidebar(itemData);
      addWatchNowLinksToActionButtons(itemData);
    }

    const $searchResults = $('#header-search-autocomplete-results');
    if ($searchResults.length) {
      $(document).off('ajaxSuccess.userscript83278').on('ajaxSuccess.userscript83278', (_evt, _xhr, opt) => {
        if (/^\/search\/autocomplete(?!\/(people|lists|users))/.test(opt.url)) addWatchNowLinksToSearchResults($searchResults);
      });
    }

    const $watchNowContent = $('#watch-now-content');
    if ($watchNowContent.length) {
      if ($watchNowContent.has('.streaming-links').length) addWatchNowLinksToModal($watchNowContent);

      $(document).off('ajaxSuccess.userscript79689').on('ajaxSuccess.userscript79689', (_evt, _xhr, opt) => {
        if (opt.url.includes('/streaming_links?country=')) addWatchNowLinksToModal($watchNowContent);
      });
    }
  }
}, { capture: true });

///////////////////////////////////////////////////////////////////////////////////////////////

const newExternalLinkElem = (l, itemData) =>
  `<a target="_blank" id="" href="${l.buildUrl ? l.buildUrl(itemData) : '#'}"` +
  `${l.evalOnClick ? ` onclick="${l.evalOnClick(itemData)}; return $(this).attr('href') !== '#';"` : ''} data-original-title="" title="">${l.name}</a>`;

function addExternalLinksToSidebar(itemData) {
  $('#info-wrapper .sidebar .external > li').prepend(
    customExternalLinks
      .filter((l) => l.includeIf ? l.includeIf(itemData) : true)
      .map((l) => newExternalLinkElem(l, itemData))
      .join('')
  );
}

function addExternalLinksToAdditionalStats(itemData) {
  $('.additional-stats.with-external-links label:contains("Links")').after(
    customExternalLinks
      .filter((l) => l.includeIf ? l.includeIf(itemData) : true)
      .map((l) => newExternalLinkElem(l, itemData) + ', ')
      .join('')
  );
}

///////////////////////////////////////////////////////////////////////////////////////////////

const newWatchNowLinkElem = (l, itemData) =>
  `<a class="${/ (4k|uhd)/i.test(l.buildUrl) ? 'has-uhd' : ''}" target="_blank" rel="nofollow" data-source="custom_links_userscript" data-country="" ` + // no link attr to prevent href override
  `href="${l.buildUrl ? l.buildUrl(itemData) : '#'}"${l.evalOnClick ? ` onclick="${l.evalOnClick(itemData)}; return $(this).attr('href') !== '#';"` : ''} data-original-title="" title="">` +
    `<div class="icon btn-custom" data-country="" style="${l.bgColor ? `--btn-custom-bg-color: ${l.bgColor};` : ''}">` +
      (l.logo ? `<img class="lazy" data-original="" src="${l.logo}" alt="${l.name}">` : `<div class="text" style="${l.textColor ? `--btn-custom-text-color: ${l.textColor};` : ''}">${l.name?.replace(' ', '<br>')}</div>`) +
    `</div>` +
  `</a>`;

function addWatchNowLinksToSidebar(itemData) {
  const $sidebar = $('#info-wrapper .sidebar');
  let linkAdditions = DEFAULT_WNLINK_ADDITIONS;

  if ($sidebar.has('.btn-watch-now').length && !$sidebar.has('.streaming-links').length) {
    $sidebar.find('.btn-watch-now').before(
      `<div class="streaming-links">` +
        `<div class="sources"></div>` +
      `</div>`
    );
    linkAdditions = 2;
  }

  $sidebar
    .find('.streaming-links .sources').prepend(
      customWatchNowLinks
        .filter((l) => l.includeIf ? l.includeIf(itemData) : true)
        .slice(0, linkAdditions)
        .map((l) => newWatchNowLinkElem(l, itemData))
        .join('')
    )
    .find('a').slice(2).remove();
}

function addWatchNowLinksToActionButtons(itemData) {
  const $actionButtons = $('#overview .action-buttons');
  let linkAdditions = DEFAULT_WNLINK_ADDITIONS;

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
    linkAdditions = 2;
  }

  $actionButtons
    .find('.sources').prepend(
      customWatchNowLinks
        .filter((l) => l.includeIf ? l.includeIf(itemData) : true)
        .slice(0, linkAdditions)
        .map((l) => $(newWatchNowLinkElem(l, itemData)).removeAttr('rel link dataSource'))
    )
    .find('a').slice(2).remove();
}

async function addWatchNowLinksToSearchResults($searchResults) {
  $searchResults.find('> .search-result').each(async function() {
    const itemData = await getItemData($(this).attr('data-url'));
    let linkAdditions = DEFAULT_WNLINK_ADDITIONS;

    if (!$(this).has('.streaming-links').length) {
      $(this).append(
        `<div class="streaming-links">` +
          `<div class="sources"></div>` +
        `</div>`
      );
      linkAdditions = 2;
    }

    $(this)
      .find('.streaming-links .sources').prepend(
        customWatchNowLinks
          .filter((l) => l.includeIf ? l.includeIf(itemData) : true)
          .slice(0, linkAdditions)
          .map((l) => $(newWatchNowLinkElem(l, itemData))
            .removeAttr('data-original-title title')
            .on('click', (evt) => evt.stopPropagation()) // don't trigger default click handler on .search-result
          )
      )
      .find('a').slice(2).remove();
  });
}

async function addWatchNowLinksToModal($watchNowContent) {
  const itemData = await getItemData($watchNowContent.attr('data-url'));

  $watchNowContent
    .find('> .streaming-links').prepend(
      `<div class="title">Custom Links</div>` +
      `<div class="section"></div>` +
      ($watchNowContent.has('.no-links').length ? `<div class="title"></div>` : '')
    )
    .find('.section').first().append(
      customWatchNowLinks
        .filter((l) => l.includeIf ? l.includeIf(itemData) : true)
        .map((l) => $(newWatchNowLinkElem(l, itemData)).append(`<div class="price">${l.name}${l.category ? `<br><i>(${l.category})</i>` : ''}</div>`))
    );
}

///////////////////////////////////////////////////////////////////////////////////////////////

async function getItemData(itemUrl) {
  const fetchFromApi = async () => {
    let pathSplit = itemUrl.split('/').filter(Boolean),
        id = pathSplit[1]; // is trakt-id for seasons + eps and slug for shows + movs + people (can be numeric though e.g. /shows/1883 which gets interpreted as trakt-id by api)

    if (!isNaN(id)) {
      const resp = await fetch(itemUrl);
      if (!resp.ok) throw new Error(`getItemData: Fetching ${resp.url} failed with status: ${resp.status}`);

      const replaceWithShowSlug = /seasons|episodes/.test(pathSplit[0]); // use show data for seasons + eps
      if (replaceWithShowSlug) {
        pathSplit = new URL(resp.url).pathname.split('/').filter(Boolean);
        id = pathSplit[1];
      }

      const convertNumericSlugToTraktId = !isNaN(pathSplit[1]);
      if (convertNumericSlugToTraktId) {
        const itemDoc = new DOMParser().parseFromString(await resp.text(), 'text/html');
        id = $(itemDoc).find('.summary-user-rating').attr(`data-${pathSplit[0].slice(0, -1)}-id`);
      }
    }

    return {
      itemUrl,
      type: pathSplit[0],
      ...(await trakt[pathSplit[0]].summary({ id, extended: 'full' })),
      ...(pathSplit[3] && { season: +pathSplit[3] }),
      ...(pathSplit[5] && { episode: +pathSplit[5] }),
    }
  };


  const scrapeFromSummaryPage = async () => {
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
          $additionalStatsLi = $(itemDoc).find('.additional-stats > li'),
          $additionalStatsLi2 = itemDoc2 ? $(itemDoc2).find('.additional-stats > li') : undefined,
          $notableSummary = $(itemDoc).find('.notable-summary'),
          filterStatsElemsByLabel = (labelText, $statsElems = $additionalStatsLi) => $statsElems.filter((_, e) => $(e).find('label').text().toLowerCase() === labelText);

    const itemData = {
      itemUrl,
      type,
      ids: {
        trakt: +($notableSummary.attr('data-movie-id') ?? $notableSummary.attr('data-show-id') ?? $notableSummary.attr('data-person-id')),
        imdb: $(itemDoc2 ?? itemDoc).find('#external-link-imdb').attr('href')?.match(/(?:tt|nm)\d+/)?.[0], // tt = 'title type', nm = 'name'
        tmdb: +$(itemDoc).find('#external-link-tmdb').attr('href')?.match(/\d+/)?.[0] || undefined,
      },
      ...(type !== 'people' && { title: $(itemDoc).find(':is(body > [itemtype$="Movie"], body > [itemtype$="TVSeries"], body > [itemtype] > [itemtype$="TVSeries"]) > meta[itemprop="name"]')
                                                  .attr('content')?.match(/(.+?)(?: \(\d{4}\))?$/)?.[1] }),
      ...(type !== 'people' && { original_title: filterStatsElemsByLabel('original title', $additionalStatsLi2).contents().get(-1)?.textContent }),
      ...(type !== 'people' && { year: +$(itemDoc2 ?? itemDoc).find('#summary-wrapper .mobile-title .year').get(0)?.textContent || undefined }),
      ...(type !== 'people' && { genres: $additionalStatsLi.find('[itemprop="genre"]').map((_, e) => $(e).text().toLowerCase()).get() }),
      ...(/seasons|episodes/.test(type) && { season: +$notableSummary.attr('data-season-number') }),
      ...(type === 'episodes' && { episode: +$notableSummary.attr('data-episode-number') }),
      ...(type === 'people' && { name: $(itemDoc).find('body > [itemtype$="Person"] > meta[itemprop="name"]').attr('content') }),
      ...(type === 'people' && { gender: filterStatsElemsByLabel('gender').contents().get(-1)?.textContent.toLowerCase().replace('-', '_') }),
      ...(type === 'people' && { birthday: filterStatsElemsByLabel('birthday').children().last().attr('data-date') }),
    };
    if (Object.hasOwn(itemData, 'original_title')) itemData.original_title ??= itemData.title;

    return itemData;
  }


  if (!itemDataCache[itemUrl]) itemDataCache[itemUrl] = await (trakt ? fetchFromApi : scrapeFromSummaryPage)();
  return itemDataCache[itemUrl];
}

///////////////////////////////////////////////////////////////////////////////////////////////

async function addStyles() {
  const watchNowCountry = (await GM.cookie.list({ name: 'watchnow_country' }))[0]?.value ?? new Intl.Locale(navigator.language).region.toLowerCase();

  GM_addStyle(`
    .no-watchnow-sources:not([data-url^="/people"]) {
      display: block !important;
    }
    [data-source-counts] > .fa-play::before {
      color: #777 !important;
    }
    [data-source-counts="{}"] > .fa-play::before {
      color: #333 !important;
    }
    [data-source-counts*="${watchNowCountry}"] > .fa-play::before {
      color: #ccc !important;
    }
    [data-source-counts] > .fa-play:hover::before {
      color: #fff !important;
    }

    :root {
      --btn-custom-bg-color: ${DEFAULT_WNLINK_BGCOLOR};
      --btn-custom-text-color: ${DEFAULT_WNLINK_TEXTCOLOR};
    }
    .streaming-links a > .icon.btn-custom {
      display: flex !important;
      justify-content: center !important;
      border-width: 0px !important;
      padding: 4px 6px !important;
      background-color: var(--btn-custom-bg-color) !important;
    }
    .streaming-links a > .icon.btn-custom:hover {
      background-color: color-mix(in oklab, var(--btn-custom-bg-color), black 20%) !important;
    }
    .streaming-links a > .icon.btn-custom > img {
      object-fit: contain !important;
    }
    .streaming-links a > .icon.btn-custom > .text {
      color: var(--btn-custom-text-color) !important;
      font-weight: 1000 !important;
    }


    #watch-now-modal {
      top: 37.5px !important;
    }
    #watch-now-modal #watch-now-content .streaming-links {
      max-height: calc(100vh - 190px) !important;
      overflow: auto !important;
      scrollbar-width: none !important;
    }
  `);
}
