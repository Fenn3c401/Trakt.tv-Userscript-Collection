// ==UserScript==
// @name         Trakt.tv | Partial VIP Unlock
// @description  Unlocks some vip features: advanced filters, filter-by-terms, "more" buttons on dashboard, rewatching, bulk list management, faster page navigation and more. Also hides some vip buttons/banners.
// @version      1.1.6
// @namespace    x70tru7b
// @updateURL    https://update.greasyfork.org/scripts/550079.meta.js
// @icon         https://trakt.tv/assets/logos/logomark.square.gradient-b644b16c38ff775861b4b1f58c1230f6a097a2466ab33ae00445a505c33fcb91.svg
// @match        https://trakt.tv/*
// @match        https://classic.trakt.tv/*
// @run-at       document-start
// @grant        unsafeWindow
// @grant        GM_info
// @grant        GM_addStyle
// ==/UserScript==

/* README
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
Say `watchlist` has 100 items and `watchlist2` + `watchlist3` have 99 items each. I can do a bulk move from `watchlist` to `watchlist2` which now has 199 items.
Then I do a bulk move from `watchlist2` to `watchlist3` which gets that one to 298 items, and then I can move it all back to `watchlist`.
That's it. You can grow lists to arbitrary(ish, at ~4100 items I get 400 responses) sizes by sequentially merging them with target lists that have <= 99 items.<br>
***=> copy/move bulk list actions don't enforce max. item limit on target list; target needs to already exist and have <= 99 items***

Please don't draw any attention to this. I'd also suggest you make use of the [Trakt.tv \| Scheduled E-Mail Data Exports](2hc6zfyy.md) userscript, just in case.

### Semi-Private Notes in Comments
Trakt supports markdown syntax in comments, including reference-style links which you can misuse as a semi-private notes container like `[//]: # (hidden text goes here)`.
The raw markdown is of course still accessible to anyone through the Trakt api and the `/comments/<comment-id>.json` endpoint (you yourself can also see the raw version when editing),
but the content is not rendered in the classic and new web versions, in fact a comment can appear to be completely empty this way. I found this interesting because it's a relatively elegant way to
work around the max. limit for private notes (currently 100), as the note-comments are still stored directly on your Trakt account on a per-title basis and can easily be accessed on arbitrary
platforms, including ones that don't support userscripts. It's probably advisable to disguise the note-comments by always adding some generic one-liner.
*/


'use strict';

let $, compressedCache;
// const token = atob(GM_info.script.icon.split(',')[1]).match(/<!-- (.*?) -->/)[1];


addStyles();

document.addEventListener('turbo:load', () => {
  $ ??= unsafeWindow.jQuery;
  compressedCache ??= unsafeWindow.compressedCache;
  if (!$ || !compressedCache) return; // || !token) return;

  patchUserSettings();

  $(document).off('ajaxSuccess.userscript38793').on('ajaxSuccess.userscript38793', (_evt, _xhr, opt) => {
    if (opt.url.endsWith('/settings.json')) patchUserSettings();

    // if (/\/dashboard\/(on_deck|recently_watched)$/.test(opt.url)) {
    //   $('.feed-icon.csv[href="/vip/csv"]').attr('href', function() {
    //     return $(this).prev().attr('data-path') + '.csv?' + ['slurm=' + token, $(this).prev().attr('data-query')].join('&');
    //   });
    // }
  });

  // $('body:not(.dashboard) .feed-icon.csv').attr('href', location.pathname + '.csv?slurm=' + token + location.search.replace('?', '&'));

  $('body').removeAttr('data-turbo');

  $('.frame-wrapper .sidenav.advanced-filters .buttons')
    .addClass('vip')
    .find('.btn.vip')
    .text('').removeClass('vip').removeAttr('href')
    .addClass('disabled disabled-init').attr('id', 'filter-apply').attr('data-apply-text', 'Apply Filters')
    .before('<a class="btn btn-close-2024" id="filter-close" style="display: inline-block !important; visibility: visible !important;">Close</a>')
    .append('<span class="text">Configure Filters</span><span class="icon fa-solid fa-check"></span>');
}, { capture: true });


function patchUserSettings() {
  const userSettings = compressedCache.get('settings');

  if (userSettings && (!userSettings.user.vip)) { // || userSettings.account.token !== token)) {
    userSettings.user.vip = true;
    // userSettings.account.token = token;
    compressedCache.set('settings', userSettings);
    if (unsafeWindow.userSettings) unsafeWindow.userSettings = userSettings;
  }
}


function addStyles() {
  GM_addStyle(`
#top-nav .btn-vip,
.dropdown-menu.for-sortable > li > a.vip-only,
.alert-vip-required {
  display: none !important;
}
  `);
}
