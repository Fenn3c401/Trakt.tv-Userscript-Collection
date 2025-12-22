// ==UserScript==
// @name         Trakt.tv | Partial VIP Unlock
// @description  Unlocks some vip features: advanced filters, filter-by-terms, "more" buttons on dashboard, rewatching, bulk list management, faster page navigation and more. Also hides some vip buttons/banners. See README for details.
// @version      2.0.0
// @namespace    https://github.com/Fenn3c401
// @author       Fenn3c401
// @license      GPL-3.0-or-later
// @homepageURL  https://github.com/Fenn3c401/Trakt.tv-Userscript-Collection#readme
// @supportURL   https://github.com/Fenn3c401/Trakt.tv-Userscript-Collection/issues
// @updateURL    https://update.greasyfork.org/scripts/550079.meta.js
// @downloadURL  https://raw.githubusercontent.com/Fenn3c401/Trakt.tv-Userscript-Collection/main/userscripts/dist/x70tru7b.min.user.js
// @icon         https://trakt.tv/assets/logos/logomark.square.gradient-b644b16c38ff775861b4b1f58c1230f6a097a2466ab33ae00445a505c33fcb91.svg
// @match        https://trakt.tv/*
// @match        https://classic.trakt.tv/*
// @run-at       document-start
// @grant        unsafeWindow
// @grant        GM_info
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==

/* README
### Full Unlock
- "more" buttons on dashboard
- rewatching
- all vip settings from the `/settings` page: calendar autoscroll, limit dashboard "up next" episodes to watch-now favorites, only show watch-now icon if title is available on favorites, rewatching settings
- bulk list actions: reset ranks, copy, move, delete (Item selection is filter based, so if you're filtering a list by genre then the bulk list actions will only apply to titles with that genre.
    In fact although the native gui only allows for filtering by type, genre and terms, most other filters from the regular advanced filters work as well, just directly modify the search params in the url.)
- ~2x faster page navigation with Hotwire's Turbo (Allows for partial page updates instead of full page reloads when navigating, might break userscripts from other devs who didn't account for this.
    Also imo it's nothing short of embarassing for them to think it's good idea to intentionally slow down their website for free users. There's a reason they don't have it listed amongst the vip perks..)
- vip badge (Appends a special "Director" badge to your username. It's usually reserved for team members like Trakt's co-founders Sean and Justin. See https://trakt.tv/users/sean for how it looks.)
- filter-by-terms
- watch-now modal country selection

### Partial Unlock
- adding an item to maxed-out lists (See the "List Limits Bypass" section down below, it's kind of like the second example, just automated. So if you've got a list with >= 100 items,
    you can now directly add a new item to it using the regular ui elems. How long that takes depends on the size of that list, if it's 1000 items you're looking at about 45s until completion..
    Hefty, but it works. Mind you that this is very much experimental and I can only emphasize the importance of backups here.)
- advanced filters (no saved filters, though you can always just save the url of a search with its specific parameters as a bookmark.. works all them same)
- custom calendars (get generated and work, but are not listed in sidebar and can't be deleted, so you have to save the url of the custom calendar or "regenerate" it on the `/lists` page)
- advanced list progress (From my understanding the idea is to filter your `/progress/watched` and `/progress/dropped` pages by the shows on a specific list. As this script also unlocks
    the filter-by-terms function which on the `/progress` pages happens to have regex support, it's possible to just OR all titles of watched shows on a list to get the same result.
    Drawbacks of this are that you can't use filter-by-terms anymore, active filters are turned off in the process (e.g. hide completed), and that shows with the same name can lead to incorrect results.)
- ~~ical/rss feeds + csv exports~~ => [How anyone can create data exports of arbitrary private user accounts](https://github.com/trakt/trakt-api/issues/636)<br>
    (Makes their [privacy policy](https://trakt.tv/privacy) and "You're not the product. We never sell your data." mantra read like a bad joke, nevermind the fact that they failed to make any sort of public
    announcement about this, didn't notify the affected users and didn't produce an incident report, so god knowns on what scale this was exploited. And all I got in return was getting ghosted. Twice.)

### Related Userscripts
Of the ~14 Trakt.tv userscripts I've got, there are another four which (in part) replicate a vip feature in some way:
- [Trakt.tv \| Custom Profile Image](2dz6ub1t.md)
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
*/


"use strict";let $,compressedCache,Cookies,toastr;const userslug=document.cookie.match(/(?:^|; )trakt_userslug=([^;]*)/)?.[1],token=null,gmStorage={...GM_getValue("vipUnlock")};GM_setValue("vipUnlock",gmStorage);const logger={_defaults:{title:GM_info.script.name.replace("Trakt.tv","Userscript"),toast:!0,toastrOpt:{positionClass:"toast-top-right",timeOut:1e4,progressBar:!0},toastrStyles:"#toast-container#toast-container a { color: #fff !important; border-bottom: dotted 1px #fff; }"},_print(t,e,i="",r={}){const{title:s=this._defaults.title,toast:d=this._defaults.toast,toastrOpt:n,toastrStyles:c="",consoleStyles:u="",data:a}=r,o=`${i}${a!==void 0?" See console for details.":""}<style>${this._defaults.toastrStyles+c}</style>`;console[t](`%c${s}: ${i}`,u,...a!==void 0?[a]:[]),d&&toastr[e](o,s,{...this._defaults.toastrOpt,...n})},info(t,e){this._print("info","info",t,e)},success(t,e){this._print("info","success",t,{consoleStyles:"color:#00c853;",...e})},warning(t,e){this._print("warn","warning",t,e)},error(t,e){this._print("error","error",t,e)}};addStyles(),document.addEventListener("turbo:load",async()=>{if($??=unsafeWindow.jQuery,compressedCache??=unsafeWindow.compressedCache,Cookies??=unsafeWindow.Cookies,toastr??=unsafeWindow.toastr,!(!$||!compressedCache||!Cookies||!toastr)&&($("body").removeAttr("data-turbo"),unsafeWindow.actionList=addToListPopupOverride,document.querySelectorAll(".quick-icons .list, .btn-summary.btn-list, .btn-summary.btn-list .side-btn .icon-add").forEach(t=>t.addEventListener("click",addToListBtnOverride)),patchUserSettings(),token&&$("body:not(.dashboard) .feed-icon.csv").attr("href",location.pathname+".csv?slurm="+token+location.search.replace("?","&")),$(document).off("ajaxSuccess.userscript38793").on("ajaxSuccess.userscript38793",(t,e,i)=>{i.url.endsWith("/settings.json")&&patchUserSettings(),token&&/\/dashboard\/(on_deck|recently_watched)$/.test(i.url)&&$('.feed-icon.csv[href="/vip/csv"]').attr("href",function(){return $(this).prev().attr("data-path")+".csv?"+["slurm="+token,$(this).prev().attr("data-query")].join("&")})}),$(".frame-wrapper .sidenav.advanced-filters .buttons").addClass("vip").find(".btn.vip").text("").removeClass("vip").removeAttr("href").addClass("disabled disabled-init").attr("id","filter-apply").attr("data-apply-text","Apply Filters").before('<a class="btn btn-close-2024" id="filter-close" style="display: inline-block !important; visibility: visible !important;">Close</a>').append('<span class="text">Configure Filters</span><span class="icon fa-solid fa-check"></span>'),/^\/users\/[^\/]+\/progress(?!\/playback)/.test(location.pathname)&&/list=\d+/.test(location.search)&&!location.search.includes("terms="))){unsafeWindow.showLoading?.();const t=new URLSearchParams(location.search),e=t.get("list"),i=await fetch("/lists/"+e).then(s=>fetch(s.url+"?display=show&hide=unwatched&limit=10000")).then(s=>s.text()).then(s=>new DOMParser().parseFromString(s,"text/html")),r=[...i.querySelectorAll(".grid-item")].map(s=>s.querySelector(".titles-link")?.textContent).filter(Boolean);t.append("terms",`^${r.join("$|^")}$`),["airing","completed","ended","not-completed","rewatching"].forEach(s=>{Cookies.remove("filter-hide-progress-"+s,{path:"/"}),Cookies.remove("filter-hide-progress-"+s,{path:"/users/"+Cookies.get("trakt_userslug")})}),location.search=t.toString()}},{capture:!0});function patchUserSettings(){const t=compressedCache.get("settings");t&&(!t.user.vip||token&&t.account.token!==token)&&(t.user.vip=!0,token&&(t.account.token=token),compressedCache.set("settings",t),unsafeWindow.userSettings&&(unsafeWindow.userSettings=t))}const getTempListId=async()=>{if(!gmStorage.tempList1Id||!compressedCache.get("lists")[gmStorage.tempList1Id]){const t=Object.values(compressedCache.get("lists")).find(s=>s.name==="Favorites").ids.trakt,e=await fetch(`/lists/${t}/copy_items/0`,{method:"POST",headers:{"X-CSRF-Token":unsafeWindow.csrfToken},body:new URLSearchParams({"order[]":"",sort_by:"rank",sort_how:"asc"})});if(!e.ok){logger.error("Failed to create temp list.",{data:e});return}const i=(await e.json()).id;logger.info(`Created temp list: id=${i}.`,{data:e});const r=await fetch("/lists/"+i,{method:"POST",headers:{"X-CSRF-Token":unsafeWindow.csrfToken},body:new URLSearchParams({authenticity_token:unsafeWindow.csrfToken,_method:"put",name:`temp1_${i}`,description:'Needed for the list limits bypass of the "Partial VIP Unlock" userscript. Keep it empty. You can edit the list title and description if you want. If you delete it another one will be created on the next attempted list limits bypass.',privacy_hidden:"private",privacy:"private",existing_collaborator_ids:"",allow_comments_hidden:1,allow_comments:1,display_numbers_hidden:1,display_numbers:1,default_sort_by:"rank",default_sort_how:"asc"})});if(!r.ok){logger.error("Failed to update temp list metadata.",{data:r});return}logger.info("Updated temp list metadata.",{data:r}),gmStorage.tempList1Id=i,GM_setValue("vipUnlock",gmStorage)}return gmStorage.tempList1Id};async function addToListPopupOverride(t,e,i){e.addClass("spinner").find(".icon").addClass("fa-spin");const r=t.attr("data-url"),s=t.attr("data-type"),d=+t.attr(`data-${s}-id`),n=+e.attr("data-list-id")||Object.values(compressedCache.get("lists")).find(a=>a.name==="Watchlist").ids.trakt,c=e.attr("data-list-type"),u=+e.attr("data-item-count");try{if(e.hasClass("maxed-out")&&!i){const a=.045*u;logger.info(`Target list is maxed-out, attempting bypass.. This will take about <strong>${~~(a/60)}m${~~(a%60)}s</strong>.`,{toastrOpt:{timeOut:a*1e3}});const o=await getTempListId(),f=compressedCache.get("lists");if(f[o]&&f[o].item_count>0){logger.error("Temp list is not empty. Aborting..",{data:f[o]});return}const m=await fetch(r+"/list",{method:"POST",headers:{"X-CSRF-Token":unsafeWindow.csrfToken},body:new URLSearchParams({type:s,trakt_id:d,list_id:o})});if(!m.ok){logger.error(`Failed to add item to temp list: id=${o}.`,{data:m});return}logger.info("Added item to temp list.");for(const[l,w]of[[n,o],[o,n]]){const h=await fetch("/lists/"+l).then(p=>p.text()).then(p=>new DOMParser().parseFromString(p,"text/html").querySelector("#listable-all-item-ids").value.split(",").map(Number));if(!h||!h.length){logger.error(`Failed to fetch all list item ids for list: id=${l}.`);return}const g=await fetch(`/lists/${l}/move_items/${w}`,{method:"POST",headers:{"X-CSRF-Token":unsafeWindow.csrfToken},body:(p=>(h.forEach(y=>p.append("order[]",y)),p))(new URLSearchParams({sort_by:"rank",sort_how:"asc"}))});if(!g.ok){logger.error(`Failed to move all items from ${l===n?"target to temp":"temp to target"} list.`,{data:g});return}logger.info(`Moved all items from ${l===n?"target to temp":"temp to target"} list.`)}logger.success(`Success. Item was added to <a href="/lists/${n}"><strong>target list</strong></a>.`)}else{const a=await fetch(`${r}/${/(watchlist|favorites|recommendations)/.test(c)?c:"list"}${i?"/remove":""}`,{method:"POST",headers:{"X-CSRF-Token":unsafeWindow.csrfToken},body:new URLSearchParams({type:s,trakt_id:d,list_id:n})});if(!a.ok){await a.json().then(o=>logger.error("Failed to add item to list."+(o.message?" Response: "+o.message:""),{data:a}));return}logger.success("Success. "+(await a.json()).message)}return e.toggleClass("selected"),!0}finally{e.removeClass("spinner").find(".icon").removeClass("fa-spin")}}async function addToListBtnOverride(t){if(t.stopImmediatePropagation(),t.preventDefault(),unsafeWindow.listPopupPressed){unsafeWindow.listPopupPressed=!1;return}const e=$(this).hasClass("side-btn")||$(this).parent().hasClass("side-btn"),i=$(this).hasClass("btn-list"),r=e?$(this).closest(".btn-summary"):i?$(this):$(this).closest(".grid-item"),s=r.attr("data-url"),d=r.attr("data-type"),n=+r.attr(`data-${d}-id`),c=Object.values(compressedCache.get("lists")??{}).some(a=>a.type==="list"),u=unsafeWindow.isPersonPage&&i||r.attr("data-type")==="person"?"list":unsafeWindow.userSettings.browsing.list_popup_action;if(unsafeWindow.isPersonPage&&i||c&&(u!=="watchlist"||$(this).hasClass("selected"))||e)unsafeWindow.actionListPopup(e?r:$(this));else{r.find(".loading").show();const a=$(this).hasClass("selected"),o=Object.values(compressedCache.get("lists")).find(l=>l.name==="Watchlist"),f=$(`<li class="${o.item_count>=unsafeWindow.userSettings.limits.watchlist.item_count?"maxed-out":""} ${a?"selected":""}" data-list-id="${o.ids.trakt}" data-list-type="watchlist" data-item-count="${o.item_count}"></li>`);await addToListPopupOverride(r,f,a)&&($(`[data-${d}-id="${n}"]:is(.btn-summary.btn-list, [data-type="${d}"]) .list`)[a?"removeClass":"addClass"]("selected"),unsafeWindow.cacheUserData()),r.find(".loading").hide()}}function addStyles(){GM_addStyle(`
#top-nav .btn-vip,
.dropdown-menu.for-sortable > li > a.vip-only,
.alert-vip-required {
  display: none !important;
}

.popover:not(.copy-list) ul.lists li.maxed-out:not(.selected) {
  text-decoration: line-through dashed 2px;
}
  `),userslug&&GM_addStyle(`
:is(#avatar-wrapper h1, .comment-wrapper .user-name) [href="/users/${userslug}"]::after,
#results-top-wrapper [href="/users/${userslug}"] + h1::after {
  content: "DIRECTOR" !important; /* competes with " (@userslug)" suffix from other script */
  font-weight: var(--headings-font-weight);
  font-family: var(--headings-font-family);
  background-color: var(--brand-vip);
  display: inline-block;
  text-shadow: none;
  line-height: 1;
  vertical-align: middle;
  color: #fff;
}
#avatar-wrapper h1 [href="/users/${userslug}"]::after,
#results-top-wrapper [href="/users/${userslug}"] + h1::after {
  margin: 0px 0px 5px 10px;
  padding: 5px 6px 5px 28px;
  font-size: 16px;
  letter-spacing: 1px;
  border-radius: 20px 0px 0px 20px;
  background-image: url("/assets/logos/logomark.circle.white-8541834d655f22f06c0e1707bf263e8d5be59657dba152298297dffffb1f0a11.svg");
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: 3px center;
}
.comment-wrapper .user-name [href="/users/${userslug}"]::after {
  margin: -3px 0 0 5px;
  padding: 2px 4px;
  font-size: 11px;
  letter-spacing: 0;
  border-radius: 2px;
}
@media (width <= 767px) and (orientation: portrait) {
  #avatar-wrapper h1 [href="/users/${userslug}"]::after,
  #results-top-wrapper [href="/users/${userslug}"] + h1::after {
    margin: 0px 0px 3px 7px;
    padding: 3px 5px 3px 23px;
    font-size: 14px;
    background-size: 14px;
  }
}

.personal-list .comment-wrapper .user-name [href="/users/${userslug}"] {
  white-space: nowrap;
}
    `)}