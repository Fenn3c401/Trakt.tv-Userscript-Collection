// ==UserScript==
// @name         Trakt.tv | Custom Profile Image
// @description  A custom profile image for free users. Like the vip feature, except this one only works locally. Uses the native set/reset buttons and changes the dashboard + settings background as well.
// @version      1.1.1
// @namespace    https://github.com/Fenn3c401
// @author       Fenn3c401
// @license      GPL-3.0-or-later
// @homepageURL  https://github.com/Fenn3c401/Trakt.tv-Userscript-Collection#readme
// @supportURL   https://github.com/Fenn3c401/Trakt.tv-Userscript-Collection/issues
// @updateURL    https://raw.githubusercontent.com/Fenn3c401/Trakt.tv-Userscript-Collection/main/userscripts/meta/2dz6ub1t.meta.js
// @downloadURL  https://raw.githubusercontent.com/Fenn3c401/Trakt.tv-Userscript-Collection/main/userscripts/dist/2dz6ub1t.min.user.js
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


"use strict";let $,toastr;const Logger=Object.freeze({_DEFAULT_PREFIX:GM_info.script.name.replace("Trakt.tv","Userscript")+": ",_DEFAULT_TOAST:!0,_printMsg(e,t,o,{data:r,prefix:s=Logger._DEFAULT_PREFIX,toast:a=Logger._DEFAULT_TOAST}={}){o=s+o,console[e](o,r||""),a&&toastr[t](o+(r?" See console for details.":""))},info:(e,t)=>Logger._printMsg("info","info",e,t),success:(e,t)=>Logger._printMsg("info","success",e,t),warning:(e,t)=>Logger._printMsg("warn","warning",e,t),error:(e,t)=>Logger._printMsg("error","error",e,t)}),gmStorage={...GM_getValue("customProfileImage")};GM_setValue("customProfileImage",gmStorage);let styles=addStyles();window.addEventListener("turbo:load",()=>{if(!/^\/(shows|movies|users|dashboard|settings|oauth\/(authorized_)?applications)/.test(location.pathname)||($??=unsafeWindow.jQuery,toastr??=unsafeWindow.toastr,!$||!toastr))return;const e=$("body.is-self #cover-wrapper"),t=$("body.is-self #btn-set-profile-image"),o=$("body:is(.shows, .movies) #summary-wrapper > .full-screenshot");gmStorage.imgUrl&&e.length&&t.length&&addUserPageElems(e,t),o.length&&(o.attr("style")?addTitlePageElems(o):new MutationObserver((r,s)=>{s.disconnect(),addTitlePageElems(o)}).observe(o[0],{attributeFilter:["style"]}))});function addUserPageElems(e,t){e.has('a.selected:contains("Profile")').length?(e.removeClass("slim").find("> .poster-bg-wrapper").removeClass("poster-bg-wrapper").addClass("shade"),e.find("> #watching-now-wrapper").length||e.find("> .container").before(`<div class="hidden-xs" id="fanart-info"><a href="${gmStorage.info.url}">${gmStorage.info.title} <span class="year">${gmStorage.info.year}</span></a></div>`)):e.find("> .poster-bg-wrapper").removeClass("poster-bg-wrapper").addClass("shadow-full-width"),t.popover("destroy").popover({trigger:"manual",container:"body",placement:"bottom",html:!0,template:'<div class="popover remove reset-profile-image" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',title:"Reset Profile Image?",content:`<button class="btn btn-primary less-rounded">Yes</button><button class="btn btn-cancel less-rounded" onclick="$(this).closest('.popover').popover('hide');">No</button>`}).on("click",function(){$(this).popover("show")}).find(".btn-text").text("Reset Profile Image"),$("body").on("click",".reset-profile-image .btn-primary",()=>{["imgUrl","info"].forEach(o=>delete gmStorage[o]),GM_setValue("customProfileImage",gmStorage),styles?.remove(),Logger.success("Custom profile image has been reset."),t.popover("destroy").popover({trigger:"hover",container:"body",placement:"bottom",html:!0,template:'<div class="popover set-profile-image" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',content:"Showcase your favorite movie, show, season or episode and make it your profile header image! Here's how:<br><br><ol><li>Go to any <b>movie</b>, <b>show</b>, <b>season</b>, or <b>episode</b> page.</li><li>Click <b>Set Profile Image</b> in the sidebar.</li></ol>"}).off("click").find(".btn-text").text("Set Profile Image"),e.addClass("slim").find("> :is(.shade, .shadow-full-width)").removeClass("shade shadow-full-width").addClass("poster-bg-wrapper").end().find("> #fanart-info").remove()})}function addTitlePageElems(e){const t=e.css("background-image").match(/url\("?(?!.+?placeholders)(.+?)"?\)/)?.[1],o=$('[href="/vip/cover"]'),r=s=>{o.has(".fa").parent().addClass("locked").find(".text").unwrap().append(`<div class="under-action">${["No fanart available","Already set"][s]}</div>`),o.not(":has(.fa)").off("click").on("click",a=>a.preventDefault()).css({color:"#bbb"}).find(".text").wrap("<s></s>")};t?t===gmStorage.imgUrl?r(1):o.on("click",s=>{s.preventDefault(),r(1),gmStorage.imgUrl=t,gmStorage.info={url:location.pathname,title:$("head title").text().match(/(.+?)(?: \([0-9]{4}\))? - Trakt/)[1],year:$("#summary-wrapper .year").text()},GM_setValue("customProfileImage",gmStorage),styles?.remove(),styles=addStyles(),Logger.success("Fanart is now set as custom profile image.")}):r(0)}function addStyles(){if(gmStorage.imgUrl)return GM_addStyle(`
body.users.is-self #cover-wrapper:not(:has(> #watching-now-wrapper)) > .full-bg {
  background-image: url("${gmStorage.imgUrl}") !important;
}
@media (width <= 767px) and (orientation: portrait) {
  body.users.is-self #cover-wrapper:not(:has(> #watching-now-wrapper)) > .container {
    background-color: revert !important;
  }
}

body:is(.dashboard, .settings, .authorized_applications, .applications) #results-top-wrapper .poster-bg {
  background-image: url("${gmStorage.imgUrl}") !important;
  background-size: cover !important;
  background-position: 50% 20% !important;
  opacity: 0.7 !important;
  filter: revert !important;
}
  `)}