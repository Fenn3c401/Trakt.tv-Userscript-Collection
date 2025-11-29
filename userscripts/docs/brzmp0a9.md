# Trakt.tv | Bug Fixes and Optimizations
A large collection of bug fixes and optimizations for trakt.tv. Organized into sections with comments detailing what specific issues are being addressed.

[![install standard](https://img.shields.io/badge/install-standard-006400)](https://raw.githubusercontent.com/Fenn3c401/Trakt.tv-Userscript-Collection/main/userscripts/dist/brzmp0a9.user.js)
[![install minified](https://img.shields.io/badge/install-minified-64962a)](https://raw.githubusercontent.com/Fenn3c401/Trakt.tv-Userscript-Collection/main/userscripts/dist/brzmp0a9.min.user.js)
[![version](https://img.shields.io/badge/version-0.7.0-blue)](../../../../blame/main/userscripts/dist/brzmp0a9.user.js)
[![lines of code](https://img.shields.io/badge/loc-502-orange)](../../userscripts/dist/brzmp0a9.user.js)

## Info
### Hotkeys and Gestures
- ***[CUSTOM]*** `alt + 1/2/3/4/5/6/7`: change header-search-category, 1 for "Shows & Movies", 2 for "Shows", ..., 7 for "Users", also expands header-search if collapsed
- ***[CUSTOM]*** `swipe in from left edge`: display title sidebar on mobile devices
- `meta(win)/ctrl + left click`: open in new tab instead of redirect (applies to header search results + "view watched history" button on title summary pages)
- `/`: expand header-search
- `w`: show filter-by-streaming-services modal
- `t`: show filter-by-terms modal
- `a`: toggle advanced-filters
- `m`: toggle manage-list mode (with item move, delete etc.)
- `r`: toggle reorder-lists mode (change list-rank on /lists page)
- `esc`: collapse header-search, hide popover, hide modal (check-in, watch-now, filter-by-terms)
- `enter`: redirect to selected header-search result, submit (advanced filters selection, date-time-picker input etc.)
- `ctrl + enter`: save note, submit comment
- `arrow-left/right OR p/n OR swipe right/left on fanart`: page navigation (e.g. prev/next episode, prev/next results page)
- `arrow-up/down`: header-search results navigation

### Filter-By-Terms Regex
The filter-by-terms (called "Filter by Title") function interprets the input as a case-insensitive regular expression, if filering is done client-side with isotope,
which is limited to places where there's no need for pagination (/lists, /seasons and /people pages). Intriguingly the /progress page, despite having pagination and
therefore relying on server-side filtering, does in fact allow for using regular expressions, though from my testing this seems to be the only exception.
The input is matched against: list title and description for /lists pages, episode title for /seasons pages, title and character name for /people pages, episode and show title for /progress pages.

