# Trakt.tv | Partial VIP Unlock
Unlocks some vip features: advanced filters, filter-by-terms, "more" buttons on dashboard, rewatching, bulk list management, faster page navigation and more. Also hides some vip buttons/banners.

[![install standard](https://img.shields.io/badge/install-standard-006400)](https://raw.githubusercontent.com/Fenn3c401/Trakt.tv-Userscript-Collection/main/userscripts/dist/x70tru7b.user.js) [![install minified](https://img.shields.io/badge/install-minified-64962a)](https://raw.githubusercontent.com/Fenn3c401/Trakt.tv-Userscript-Collection/main/userscripts/dist/x70tru7b.min.user.js) [![version](https://img.shields.io/badge/version-1.1.2-blue)](../../../../blame/main/userscripts/dist/x70tru7b.user.js) [![lines of code](https://img.shields.io/badge/loc-37-orange)](../../userscripts/dist/x70tru7b.user.js)

## Info
### Full Unlock
- filter-by-terms
- "more" buttons on dashboard
- rewatching
- watch-now modal country selection
- bulk list copy and move *(note: item selection is filter based)*
- all vip settings from /settings page (calendar autoscroll + limit dashboard "up next" episodes to watch-now favorites + only show watch-now icon if title is available on favorites + rewatching settings)
- ~2x faster page navigation with Hotwire's Turbo (allows for partial page updates instead of full page reloads when navigating, might break userscripts from other devs who didn't account for this)

### Partial Unlock
- custom calendars (get generated and work, but are not listed in sidebar (can't be deleted either), so you have to save the url of the custom calendar or "regenerate" it via /lists)
- advanced filters (no saved filters)
- ~~ical/atom feeds + csv exports~~ [How anyone can create data exports of arbitrary private user accounts](https://github.com/trakt/trakt-api/issues/636)

