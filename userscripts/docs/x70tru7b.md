# Trakt.tv | Partial VIP Unlock
Unlocks some vip features: adding titles to maxed-out lists, advanced filters, "more" buttons on dashboard, faster page navigation, bulk list management, rewatching, custom calendars, advanced list progress and more. Also hides some vip advertisements.

[![install standard](https://img.shields.io/badge/install-standard-006400)](https://raw.githubusercontent.com/Fenn3c401/Trakt.tv-Userscript-Collection/main/userscripts/dist/x70tru7b.user.js)
[![install minified](https://img.shields.io/badge/install-minified-64962a)](https://raw.githubusercontent.com/Fenn3c401/Trakt.tv-Userscript-Collection/main/userscripts/dist/x70tru7b.min.user.js)
[![version](https://img.shields.io/badge/version-2.0.5-blue)](../../../../blame/main/userscripts/dist/x70tru7b.user.js)
[![lines of code](https://img.shields.io/badge/loc-257-orange)](../../userscripts/dist/x70tru7b.user.js)

## Info
### Full Unlock
- ***"more" buttons on dashboard***
- ***~2x faster page navigation with Hotwire's Turbo***<br>
    (Allows for partial page updates instead of full page reloads when navigating, might break userscripts from other devs who didn't account for this.
    Also imo it's nothing short of embarassing for them to think it's good idea to intentionally slow down their website for free users. There's a reason they don't have it listed amongst the vip perks..)
- ***bulk list actions: reset ranks, copy, move, delete***<br>
    (Item selection is filter based, so if you're filtering a list by genre then the bulk list actions will only apply to titles with that genre.
    In fact although the native gui only allows for filtering by type, genre and terms, most other filters from the regular advanced filters work as well, just directly modify the search params in the url.)
- ***rewatching***
- ***vip badge***<br>
    (Appends a special "Director" badge to your username. It's usually reserved for team members like Trakt's co-founders Sean and Justin. See https://trakt.tv/users/sean for how it looks.)
- ***all vip settings from the `/settings` page***<br>
    (calendar autoscroll, limit dashboard "up next" episodes to watch-now favorites, only show watch-now icon if title is available on favorites, rewatching settings)
- ***filter-by-terms***
- ***watch-now modal country selection***

### Partial Unlock
- ***adding an item to maxed-out lists***<br>
    (See the "List Limits Bypass" section down below, it's kind of like the second example, just automated. So if you've got a list with >= 100 items,
    you can now directly add a new item to it using the regular ui elems. How long that takes depends on the size of that list, if it's 1000 items you're looking at about 45s until completion..
    Hefty, but it works. Mind you that this is very much experimental and I can only emphasize the importance of backups here.)
- ***advanced filters***<br>
    (no saved filters, though you can always just save the url of a search with its specific parameters as a bookmark.. works all the same)
- ***custom calendars***<br>
    (get generated and work, but are not listed in sidebar and can't be deleted, so you have to save the url of the custom calendar or "regenerate" it on the `/lists` page)
- ***advanced list progress***<br>
    (From my understanding the idea is to filter your `/progress/watched` and `/progress/dropped` pages by the shows on a specific list. As this script also unlocks
    the filter-by-terms function which on the `/progress` pages happens to have regex support, it's possible to just OR all titles of watched shows on a list to get the same result.
    Drawbacks of this are that you can't use filter-by-terms anymore, active filters are turned off in the process (e.g. hide completed), and that shows with the same name can lead to incorrect results.)
- ***~~rss/ical feeds + csv exports~~ => [How anyone can create data exports of arbitrary private user accounts](https://github.com/trakt/trakt-api/issues/636)***<br>
    (Makes their [privacy policy](https://trakt.tv/privacy) and "You're not the product. We never sell your data." mantra read like a bad joke, nevermind the fact that they failed to make any sort of public
    announcement about this, didn't notify the affected users and didn't produce an incident report, so god knowns on what scale this was exploited. And all I got in return was getting ghosted. Twice.)

### Related Userscripts
I've got a couple more Trakt.tv userscripts which replicate other vip features in some way:
- [Trakt.tv \| Custom Profile Header Image](2dz6ub1t.md)
- [Trakt.tv \| Enhanced Title Metadata](fyk2l3vj.md)
- [Trakt.tv \| Scheduled E-Mail Data Exports](2hc6zfyy.md)

Though you can always just install the [Trakt.tv \| Megascript](zzzzzzzz.md) instead.

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
Let's say `watchlist` + `watchlist2` have 99 items each and `watchlist3` has 100 items. I can now do a bulk move from `watchlist3` to `watchlist2`,
followed by a bulk move from `watchlist2` to `watchlist`, to accumulate all 298 items on that list. Ranks are preserved this way as the new items always get appeded.
You can grow lists to arbitrary(ish, at ~4100 items I get 400 responses) sizes by sequentially merging them with target lists that have <= 99 items.<br>
***=> copy/move bulk list actions don't enforce max. item limit on target list; target needs to already exist and have <= 99 items***

Please don't draw any attention to this. I'd also suggest you make use of the [Trakt.tv \| Scheduled E-Mail Data Exports](2hc6zfyy.md) userscript, just in case.

### Semi-Private Notes in Comments
Trakt supports markdown syntax in comments, including reference-style links which you can misuse as a semi-private notes container like `[//]: # (hidden text goes here)`.
The raw markdown is of course still accessible to anyone through the Trakt api and the `/comments/<comment-id>.json` endpoint (you yourself can also see the raw version when editing),
but the content is not rendered in the classic and new web versions, in fact a comment can appear to be completely empty this way. I found this interesting because it's a relatively elegant way to
work around the max. limit for private notes (currently 100), as the note-comments are still stored directly on your Trakt account on a per-title basis and can easily be accessed on arbitrary
platforms, including ones that don't support userscripts. It's probably advisable to disguise the note-comments by always adding some generic one-liner.

### Filter-By-Terms Regex
The filter-by-terms (also called "Filter by Title") function works either server or client-side, depending on whether the exact place you're using it from is paginated or not.
The `/users/<userslug>/lists`, `/seasons` and `/people` pages are all not paginated, so there the filtering is done client-side, with the input being interpreted as a case-insensitive regular expression.
All other places where the filter-by-terms function is available are paginated and therefore use server-side filtering, those usually don't allow for regular expressions, with the exception of
the `/progress` page and list pages. The input is matched against:
- list title and description for `/users/<userslug>/lists` pages
- episode title for `/seasons` pages
- title and character name for `/people` pages
- episode and show title for `/progress` pages
- title name for list pages

