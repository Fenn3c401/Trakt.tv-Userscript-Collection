# Trakt.tv | Partial VIP Unlock
Unlocks some vip features: advanced filters, creation of new lists, "more" buttons on dashboard, faster page navigation, bulk list management, rewatching, custom calendars, advanced list progress and more. Also hides some vip advertisements.

[![install standard](https://img.shields.io/badge/install-standard-006400)](https://raw.githubusercontent.com/Fenn3c401/Trakt.tv-Userscript-Collection/main/userscripts/dist/x70tru7b.user.js)
[![install minified](https://img.shields.io/badge/install-minified-64962a)](https://raw.githubusercontent.com/Fenn3c401/Trakt.tv-Userscript-Collection/main/userscripts/dist/x70tru7b.min.user.js)
[![version](https://img.shields.io/badge/version-2.2.0-blue)](../../../../blame/main/userscripts/dist/x70tru7b.user.js)
[![lines of code](https://img.shields.io/badge/loc-248-orange)](../../userscripts/dist/x70tru7b.user.js)

## Info
### Full Unlock
- ***"more" buttons on dashboard***
- ***~2x faster page navigation with Hotwire's Turbo***<br>
    (Allows for partial page updates instead of full page reloads when navigating, might break userscripts from other devs who didn't account for this.
    Also imo it's nothing short of embarassing for them to think it's good idea to intentionally slow down their website for free users. There's a reason they don't have it listed amongst the vip perks..)
- ***rewatching***
- ***vip badge***<br>
    (Appends a special "Director" badge to your username. It's usually reserved for team members like Trakt's co-founders Sean and Justin. See https://trakt.tv/users/sean for how it looks.)
- ***all vip settings from the `/settings` page***<br>
    (calendar autoscroll, limit dashboard "up next" episodes to watch-now favorites, only show watch-now icon if title is available on favorites, rewatching settings)
- ***filter-by-terms***
- ***watch-now modal country selection***

### Partial Unlock
- ***advanced filters***<br>
    (You can save filter presets to the sidebar with the "Save Filters" context menu command (available via Tampermonkey's extension popup window as well).)
- ***custom calendars***<br>
    (get generated and work, but are not listed in sidebar and can't be deleted, so you have to save the url of the custom calendar or "regenerate" it on the `/lists` page)
- ***advanced list progress***<br>
    (From my understanding the idea is to filter your `/progress/watched` and `/progress/dropped` pages by the shows on a specific list. As this script also unlocks
    the filter-by-terms function which on the `/progress` pages happens to have regex support, it's possible to just OR all titles of watched shows on a list to get the same result.
    Drawbacks of this are that you can't use filter-by-terms anymore, active filters are turned off in the process (e.g. hide completed), and that shows with the same name can lead to incorrect results.)
- ***bulk list copy and delete***<br>
    (The "move" bulk list action is also unlocked but [can fail and result in data loss](https://greasyfork.org/en/scripts/557305-trakt-tv-megascript/discussions/320717),
    which is why I removed the respective ui elem. If you want to make a bulk move you can instead first do a bulk copy and then a bulk deletion of the source list (same result but much safer).<br>
    The item selection is filter based, so if you're filtering a list by genre then the bulk list actions will only apply to titles with that genre. Filtering by trakt-rating, trakt-votes,
    years and runtime works as well, just directly modify the search params in the url (it's the same as for the advanced filters).)
- ***creation of new lists***<br>
    (You can bypass the limit for the amount of lists a free user is allowed to have, by going to any existing list (doesn't have to be your own) with 1-100 items,
    and then using the "copy to new list" option and it will create a new list for you, which you can then edit and use however you want.
    The "copied from..." text is not added if you use one of your own lists as source (like your favorites).)
- ***~~adding items to maxed-out lists~~ => They unfortunately fixed that.***<br>
    (This bypass was discovered thanks to an issue from [SET19724](https://github.com/SET19724). You can now add titles to maxed-out lists with the regular ui elements, which will trigger
    two background bulk move ops because those don't properly enforce the max item limit for lists. Per 1000 items on the target list this will take ~45s. In the same way
    you can also merge lists manually. Say you've got the lists: `watchlist1` + `watchlist2` with 99 items each and `watchlist3` with 100 items. You can now do a bulk move
    from `watchlist3` to `watchlist2`, followed by a bulk move from `watchlist2` to `watchlist1`, to accumulate all 298 items on that list.
    So you can grow lists to a max-size of ~4100 items by sequentially merging them with target lists that have <= 99 items.)
- ***~~rss/ical feeds + csv exports~~ => [Trakt was leaking private user data](https://www.reddit.com/r/Addons4Kodi/comments/1rklk67/trakt_was_leaking_private_user_data/)***<br>

### Semi-Private Notes in Comments
Trakt supports markdown syntax in comments, including reference-style links which you can misuse as a semi-private notes container like `[//]: # (hidden text goes here)`.
The raw markdown is of course still accessible to anyone through the Trakt api and the `/comments/<comment-id>.json` endpoint (you yourself can also see the raw version when editing),
but the content is not rendered in the classic and new web versions, in fact a comment can appear to be completely empty this way. I think this is interesting because it's a relatively elegant way
to work around the max. limit for private notes (currently 100), as the note-comments are still stored directly on your Trakt account on a per-title basis and can easily be accessed on arbitrary
platforms, including ones that don't support userscripts. It's probably advisable to disguise the note-comments by always adding some generic one-liner.

### Filter-By-Terms Regex
The filter-by-terms (also called "Filter by Title") function works either server or client-side, depending on whether the exact place you're using it from is paginated or not.
The `/users/<userslug>/lists`, `/seasons` and `/people` pages are all not paginated, so there the filtering is done client-side, with the input being interpreted as
a case-insensitive regular expression. All other places where the filter-by-terms function is available are paginated and therefore use server-side filtering,
those usually don't allow for regular expressions, with the exception of the `/progress` page and list pages. The input is matched against:
- list title and description for `/users/<userslug>/lists` pages
- episode title for `/seasons` pages
- title and character name for `/people` pages
- episode and show title for `/progress` pages
- title name for list pages

