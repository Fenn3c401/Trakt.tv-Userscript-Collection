// ==UserScript==
// @name         Trakt.tv | Partial VIP Unlock
// @description  Unlocks some vip features: advanced filters, "more" buttons on dashboard, faster page navigation, bulk list management, rewatching, custom calendars, advanced list progress and more. Also hides some vip advertisements. See README for details.
// @version      2.1.1
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


"use strict";let $,compressedCache,Cookies;const logger={_defaults:{title:(typeof moduleName<"u"?moduleName:GM_info.script.name).replace("Trakt.tv","Userscript"),toast:!0,toastrOpt:{positionClass:"toast-top-right",timeOut:1e4,progressBar:!0},toastrStyles:"#toast-container#toast-container a { color: #fff !important; border-bottom: dotted 1px #fff; }"},_print(t,e,s="",o={}){const{title:a=this._defaults.title,toast:l=this._defaults.toast,toastrOpt:n,toastrStyles:c="",consoleStyles:d="",data:i}=o,r=`${s}${i!==void 0?" See console for details.":""}<style>${this._defaults.toastrStyles+c}</style>`;console[t](`%c${a}: ${s}`,d,...i!==void 0?[i]:[]),l&&unsafeWindow.toastr?.[e](r,a,{...this._defaults.toastrOpt,...n})},info(t,e){this._print("info","info",t,e)},success(t,e){this._print("info","success",t,{consoleStyles:"color:#00c853;",...e})},warning(t,e){this._print("warn","warning",t,e)},error(t,e){this._print("error","error",t,e)}},gmStorage={...GM_getValue("vipUnlock")};GM_setValue("vipUnlock",gmStorage);const token=null;addStyles(),document.addEventListener("turbo:load",async()=>{if($??=unsafeWindow.jQuery,compressedCache??=unsafeWindow.compressedCache,Cookies??=unsafeWindow.Cookies,!(!$||!compressedCache||!Cookies)&&($("body").removeAttr("data-turbo"),patchUserSettings(),token&&$("body:not(.dashboard) .feed-icon.csv").attr("href",location.pathname+".csv?slurm="+token+location.search.replace("?","&")),$(document).off("ajaxSuccess.userscript38793").on("ajaxSuccess.userscript38793",(t,e,s)=>{s.url.endsWith("/settings.json")&&patchUserSettings(),token&&/\/dashboard\/(on_deck|recently_watched)$/.test(s.url)&&$('.feed-icon.csv[href="/vip/csv"]').attr("href",function(){return $(this).prev().attr("data-path")+".csv?"+["slurm="+token,$(this).prev().attr("data-query")].join("&")})}),$(".frame-wrapper .sidenav.advanced-filters .buttons").addClass("vip").find(".btn.vip").text("").removeClass("vip").removeAttr("href").addClass("disabled disabled-init").attr("id","filter-apply").attr("data-apply-text","Apply Filters").before('<a class="btn btn-close-2024" id="filter-close" style="display: inline-block !important; visibility: visible !important;">Close</a>').append('<span class="text">Configure Filters</span><span class="icon fa-solid fa-check"></span>'),/^\/users\/[^\/]+\/progress(?!\/playback)/.test(location.pathname)&&/list=\d+/.test(location.search)&&!location.search.includes("terms="))){unsafeWindow.showLoading?.();const t=new URLSearchParams(location.search),e=t.get("list"),s=await fetch("/lists/"+e).then(a=>fetch(a.url+"?display=show&hide=unwatched&limit=10000")).then(a=>a.text()).then(a=>new DOMParser().parseFromString(a,"text/html")),o=[...s.querySelectorAll(".grid-item")].map(a=>a.querySelector(".titles-link")?.textContent).filter(Boolean);t.set("terms",`^${o.join("$|^")}$`),["airing","completed","ended","not-completed","rewatching"].forEach(a=>{Cookies.remove("filter-hide-progress-"+a,{path:"/"}),Cookies.remove("filter-hide-progress-"+a,{path:"/users/"+Cookies.get("trakt_userslug")})}),location.search=t.toString()}},{capture:!0});function patchUserSettings(){const t=compressedCache.get("settings");t&&(!t.user.vip||token&&t.account.token!==token)&&(t.user.vip=!0,token&&(t.account.token=token),compressedCache.set("settings",t),unsafeWindow.userSettings&&(unsafeWindow.userSettings=t))}async function addToListBtnOverride(){if(unsafeWindow.listPopupPressed){unsafeWindow.listPopupPressed=!1;return}const t=$(this).hasClass("side-btn")||$(this).parent().hasClass("side-btn"),e=$(this).hasClass("btn-list"),s=t?$(this).closest(".btn-summary"):e?$(this):$(this).closest(".grid-item"),o=s.attr("data-url"),a=s.attr("data-type"),l=+s.attr(`data-${a}-id`),n=Object.values(compressedCache.get("lists")??{}).some(d=>d.type==="list"),c=unsafeWindow.isPersonPage&&e||s.attr("data-type")==="person"?"list":unsafeWindow.userSettings.browsing.list_popup_action;if(unsafeWindow.isPersonPage&&e||n&&(c!=="watchlist"||$(this).hasClass("selected"))||t)unsafeWindow.actionListPopup(t?s:$(this));else{s.find(".loading").show();const d=$(this).hasClass("selected"),i=Object.values(compressedCache.get("lists")).find(m=>m.name==="Watchlist"),r=$(`<li class="${i.item_count>=unsafeWindow.userSettings.limits.watchlist.item_count?"maxed-out":""} ${d?"selected":""}" data-list-id="${i.ids.trakt}" data-list-type="watchlist" data-item-count="${i.item_count}"></li>`);await addToListPopupOverride(s,r,d)&&($(`[data-${a}-id="${l}"]:is(.btn-summary.btn-list, [data-type="${a}"]) .list`)[d?"removeClass":"addClass"]("selected"),unsafeWindow.cacheUserData()),s.find(".loading").hide()}}async function addToListPopupOverride(t,e,s){e.addClass("spinner").find(".icon").addClass("fa-spin");const o=t.attr("data-url"),a=t.attr("data-type"),l=+t.attr(`data-${a}-id`),n=+e.attr("data-list-id")||Object.values(compressedCache.get("lists")).find(i=>i.name==="Watchlist").ids.trakt,c=e.attr("data-list-type"),d=+e.attr("data-item-count");try{if(e.hasClass("maxed-out")&&!s){const i=.045*d;logger.info(`Target list is maxed-out, attempting bypass.. This will take about <strong>${~~(i/60)}m${~~(i%60)}s</strong>.`,{toastrOpt:{timeOut:i*1e3}});const r=await getTempListId(),f=compressedCache.get("lists");if(f[r]&&f[r].item_count>0){logger.error("Temp list is not empty. Aborting..",{data:f[r]});return}const m=await fetch(o+"/list",{method:"POST",headers:{"X-CSRF-Token":unsafeWindow.csrfToken},body:new URLSearchParams({type:a,trakt_id:l,list_id:r})});if(!m.ok){logger.error(`Failed to add item to temp list: id=${r}.`,{data:m});return}logger.info("Added item to temp list.");for(const[p,w]of[[n,r],[r,n]]){const h=await fetch("/lists/"+p).then(u=>u.text()).then(u=>new DOMParser().parseFromString(u,"text/html").querySelector("#listable-all-item-ids").value.split(",").map(Number));if(!h||!h.length){logger.error(`Failed to fetch all list item ids for list: id=${p}.`);return}const g=await fetch(`/lists/${p}/move_items/${w}`,{method:"POST",headers:{"X-CSRF-Token":unsafeWindow.csrfToken},body:new URLSearchParams([["sort_by","rank"],["sort_how","asc"],...h.map(u=>["order[]",u])])});if(!g.ok){logger.error(`Failed to move all items from ${p===n?"target to temp":"temp to target"} list.`,{data:g});return}logger.info(`Moved all items from ${p===n?"target to temp":"temp to target"} list.`)}logger.success(`Success. Item was added to <a href="/lists/${n}"><strong>target list</strong></a>.`)}else{const i=await fetch(`${o}/${/(watchlist|favorites|recommendations)/.test(c)?c:"list"}${s?"/remove":""}`,{method:"POST",headers:{"X-CSRF-Token":unsafeWindow.csrfToken},body:new URLSearchParams({type:a,trakt_id:l,list_id:n})});if(!i.ok){await i.json().then(r=>logger.error("Failed to add item to list."+(r.message?" Response: "+r.message:""),{data:i}));return}logger.success("Success. "+(await i.json()).message)}return e.toggleClass("selected"),!0}finally{e.removeClass("spinner").find(".icon").removeClass("fa-spin")}}async function getTempListId(){if(!gmStorage.tempList1Id||!compressedCache.get("lists")[gmStorage.tempList1Id]){const t=Object.values(compressedCache.get("lists")).find(a=>a.name==="Favorites").ids.trakt,e=await fetch(`/lists/${t}/copy_items/0`,{method:"POST",headers:{"X-CSRF-Token":unsafeWindow.csrfToken},body:new URLSearchParams({"order[]":"",sort_by:"rank",sort_how:"asc"})});if(!e.ok){logger.error("Failed to create temp list.",{data:e});return}const s=(await e.json()).id;logger.info(`Created temp list: id=${s}.`,{data:e});const o=await fetch("/lists/"+s,{method:"POST",headers:{"X-CSRF-Token":unsafeWindow.csrfToken},body:new URLSearchParams({authenticity_token:unsafeWindow.csrfToken,_method:"put",name:`temp1_${s}`,description:'Needed for the list limits bypass of the "Partial VIP Unlock" userscript. Keep it empty. You can edit the list title and description if you want. If you delete it another one will be created on the next attempted list limits bypass.',privacy_hidden:"private",privacy:"private",existing_collaborator_ids:"",allow_comments_hidden:1,allow_comments:1,display_numbers_hidden:1,display_numbers:1,default_sort_by:"rank",default_sort_how:"asc"})});if(!o.ok){logger.error("Failed to update temp list metadata.",{data:o});return}logger.info("Updated temp list metadata.",{data:o}),gmStorage.tempList1Id=s,GM_setValue("vipUnlock",gmStorage)}return gmStorage.tempList1Id}function addStyles(){GM_addStyle(`
#top-nav .btn-vip,
.dropdown-menu.for-sortable > li > a.vip-only,
.alert-vip-required {
  display: none !important;
}
  `);const t=document.cookie.match(/(?:^|; )trakt_userslug=([^;]*)/)?.[1];t&&GM_addStyle(`
:is(#avatar-wrapper h1, .comment-wrapper .user-name) [href="/users/${t}"]::after,
#results-top-wrapper [href="/users/${t}"] + h1::after {
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
#avatar-wrapper h1 [href="/users/${t}"]::after,
#results-top-wrapper [href="/users/${t}"] + h1::after {
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
.comment-wrapper .user-name [href="/users/${t}"]::after {
  margin: -3px 0 0 5px;
  padding: 2px 4px;
  font-size: 11px;
  letter-spacing: 0;
  border-radius: 2px;
}
@media (width <= 767px) and (orientation: portrait) {
  #avatar-wrapper h1 [href="/users/${t}"]::after,
  #results-top-wrapper [href="/users/${t}"] + h1::after {
    margin: 0px 0px 3px 7px;
    padding: 3px 5px 3px 23px;
    font-size: 14px;
    background-size: 14px;
  }
}

.personal-list .comment-wrapper .user-name [href="/users/${t}"] {
  white-space: nowrap;
}
    `)}