# Trakt.tv | Partial VIP Unlock
Unlocks some vip features: advanced filters, filter-by-terms, "more" buttons on dashboard, rewatching, bulk list management, faster page navigation and more. Also hides some vip buttons/banners.

[![install standard](https://img.shields.io/badge/install-standard-006400)](https://raw.githubusercontent.com/Fenn3c401/Trakt.tv-Userscript-Collection/main/userscripts/dist/x70tru7b.user.js)
[![install minified](https://img.shields.io/badge/install-minified-64962a)](https://raw.githubusercontent.com/Fenn3c401/Trakt.tv-Userscript-Collection/main/userscripts/dist/x70tru7b.min.user.js)
[![version](https://img.shields.io/badge/version-1.1.4-blue)](../../../../blame/main/userscripts/dist/x70tru7b.user.js)
[![lines of code](https://img.shields.io/badge/loc-37-orange)](../../userscripts/dist/x70tru7b.user.js)

## Info
### Full Unlock
- filter-by-terms
- "more" buttons on dashboard
- rewatching
- watch-now modal country selection
- bulk list actions: reset ranks, copy, move, delete (Item selection is filter based, so if you're filtering a list by genre then the bulk list actions will only apply to titles with that genre.
    In fact although the native gui only allows for filtering by type, genre and terms, most other filters from the regular advanced filters work as well, just directly modify the search params in the url.)
- all vip settings from the `/settings` page: calendar autoscroll, limit dashboard "up next" episodes to watch-now favorites, only show watch-now icon if title is available on favorites, rewatching settings
- ~2x faster page navigation with Hotwire's Turbo (allows for partial page updates instead of full page reloads when navigating, might break userscripts from other devs who didn't account for this)

### Partial Unlock
- custom calendars (get generated and work, but are not listed in sidebar and can't be deleted, so you have to save the url of the custom calendar or "regenerate" it on the `/lists` page)
- advanced filters (no saved filters)
- ~~ical/atom feeds + csv exports~~ [How anyone can create data exports of arbitrary private user accounts](https://github.com/trakt/trakt-api/issues/636)<br>
    (Makes their [privacy policy](https://trakt.tv/privacy) and "You're not the product. We never sell your data." mantra read like a bad joke, nevermind the fact that they failed to make any sort of public
    announcement about this, didn't notify the affected users and didn't produce an incident report, so god knowns on what scale this was exploited. And all I got in return was getting ghosted. Twice.)

### Related Userscripts
Of the ~15 Trakt.tv userscripts I've got, there are another four which don't unlock an actual vip feature but instead replicate one in some way:
- [Trakt.tv \| Custom Profile Image](2dz6ub1t.md)
- [Trakt.tv \| Director Badge](h8vh5z16.md)
- [Trakt.tv \| Enhanced Title Metadata](fyk2l3vj.md)
- [Trakt.tv \| Scheduled E-Mail Data Exports](2hc6zfyy.md)

### List Limits Bypass
Credit for this one goes to [SET19724](https://github.com/SET19724) who pointed out some inconsistencies with the unlocked bulk list actions in an issue.
Turns out with those it's possible to bypass the imposed limits for both the number of lists and items per list:

***Example 1:***<br>
You've got your number of lists maxed out (2 by default). If you now want another list you can just go to any existing list (doesn't have to be your own) with 1-100 items,
then use the "copy to new list" option and it creates a new list for you, which you can then edit and use however you want. Rinse and repeat. It works at least all the way up to 15 lists,
I didn't push it any further. The "copied from..." text is not added if you use one of your own lists as source.<br>
***=> "new list" target option of bulk list actions doesn't enforce max. list limit; source needs to have 1-100 items***

***Example 2:***<br>
Ever since they introduced the 100 items per list limit (watchlist included) I've been adding new titles to overflow lists (`watchlist2`, `watchlist3` etc).
Say `watchlist` has 100 items and `watchlist2` + `watchlist3` have 99 items. I can do a bulk move from `watchlist` to `watchlist2` which now has 199 items.
Then I do a bulk move from `watchlist2` to `watchlist3` which gets that one to 298 items, and then I can move it all back to `watchlist`.
That's it. You can grow lists to arbitrary(ish, at ~4100 items I get 400 responses) sizes by sequentially merging them with target lists that have <= 99 items.<br>
***=> copy/move bulk list actions don't enforce max. item limit on target list; target needs to already exist and have <= 99 items***

Please don't draw any attention to this. I'd also suggest you make use of the [Trakt.tv \| Scheduled E-Mail Data Exports](2hc6zfyy.md) userscript, just in case.

