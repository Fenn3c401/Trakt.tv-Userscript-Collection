# Trakt.tv | Enhanced Title Metadata
Adds links of filtered search results to the metadata section (languages, genres, networks, studios, writers, certification, year) on title summary pages, similar to the vip feature. Also adds a country flag and allows for "combined" searches by clicking on the labels.

[![install standard](https://img.shields.io/badge/install-standard-006400)](https://raw.githubusercontent.com/Fenn3c401/Trakt.tv-Userscript-Collection/main/userscripts/dist/fyk2l3vj.user.js)
[![install minified](https://img.shields.io/badge/install-minified-64962a)](https://raw.githubusercontent.com/Fenn3c401/Trakt.tv-Userscript-Collection/main/userscripts/dist/fyk2l3vj.min.user.js)
[![version](https://img.shields.io/badge/version-0.8.16-blue)](../../../../blame/main/userscripts/dist/fyk2l3vj.user.js)
[![lines of code](https://img.shields.io/badge/loc-317-orange)](../../userscripts/dist/fyk2l3vj.user.js)

## Info
> Based on sergeyhist's [Trakt.tv Clickable Info](https://github.com/sergeyhist/trakt-scripts/blob/main/trakt-info.user.js) userscript.

### General
- By clicking on the label for languages, genres, networks, studios and writers, you can make a search for all their respective values combined, ANDed for genres, languages and writers,
    ORed for networks and studios. For example if the genres are "Crime" and "Drama", then a label search will return a selection of other titles that also have the genres "Crime" AND "Drama".
- The writers label search was mostly added as an example of how to search for filmography intersections with trakt's search engine (there's no official tutorial about this,
    just some vague one liner in the api docs about how `+ - && || ! ( ) { } [ ] ^ " ~ * ? : /` have "special meaning" when used in a query).
    It's much more intersting with actors e.g. [Movies with Will Smith and Alan Tudyk](https://trakt.tv/search/movies?query=%22Will%20Smith%22+%22Alan%20Tudyk%22&fields=people).
- The title's certification links to the respective `/parentalguide` imdb page (which contains descriptions of nude scenes, graphic content etc.).
- The title's year links to the search page for other titles from the same year.
- The search results default to either the "movies" or "shows" search category depending on the type of the current title.
- A "+ n more" button is added for networks when needed (some anime have more than a dozen listed).
- Installing the [Trakt.tv | Partial VIP Unlock](x70tru7b.md) userscript will allow free users to further modify the applied advanced filters on the linked search pages.
- This script won't work for vip users.

## Screenshots
<p align=center>
  <img src="screenshots/fyk2l3vj-1.png" alt="screenshot" align="middle">
</p>