// ==UserScript==
// @name         Trakt.tv | Actor Pronunciation Helper
// @description  Adds a button on /people pages for fetching an audio recording of that person's name with the correct pronunciation from forvo.com.
// @version      0.4.5
// @namespace    https://github.com/Fenn3c401
// @author       Fenn3c401
// @license      GPL-3.0-or-later
// @homepageURL  https://github.com/Fenn3c401/Trakt.tv-Userscript-Collection#readme
// @supportURL   https://github.com/Fenn3c401/Trakt.tv-Userscript-Collection/issues
// @updateURL    https://raw.githubusercontent.com/Fenn3c401/Trakt.tv-Userscript-Collection/main/userscripts/meta/71cd9s61.meta.js
// @downloadURL  https://raw.githubusercontent.com/Fenn3c401/Trakt.tv-Userscript-Collection/main/userscripts/dist/71cd9s61.min.user.js
// @icon         https://trakt.tv/assets/logos/logomark.square.gradient-b644b16c38ff775861b4b1f58c1230f6a097a2466ab33ae00445a505c33fcb91.svg
// @match        https://trakt.tv/*
// @match        https://classic.trakt.tv/*
// @run-at       document-start
// @grant        unsafeWindow
// @grant        GM_addStyle
// @grant        GM.xmlHttpRequest
// @connect      forvo.com
// ==/UserScript==


"use strict";let $,toastr;const Logger=Object.freeze({_DEFAULT_PREFIX:GM_info.script.name.replace("Trakt.tv","Userscript")+": ",_DEFAULT_TOAST:!0,_printMsg(n,e,a,{data:o,prefix:i=Logger._DEFAULT_PREFIX,toast:t=Logger._DEFAULT_TOAST}={}){a=i+a,console[n](a,o||""),t&&toastr[e](a+(o?" See console for details.":""))},info:(n,e)=>Logger._printMsg("info","info",n,e),success:(n,e)=>Logger._printMsg("info","success",n,e),warning:(n,e)=>Logger._printMsg("warn","warning",n,e),error:(n,e)=>Logger._printMsg("error","error",n,e)});addStyles(),document.addEventListener("turbo:load",()=>{if(!/^\/people\/[^\/]+$/.test(location.pathname)||($??=unsafeWindow.jQuery,toastr??=unsafeWindow.toastr,!$||!toastr))return;let n;$('<button id="btn-pronounce-name"><div class="audio-animation fade"><div class="bar-1"></div><div class="bar-2"></div><div class="bar-3"></div></div><div class="fa fa-volume fade in"></div></button>').appendTo($("#summary-wrapper .mobile-title h1")).tooltip({title:"Pronounce Name",container:"body",placement:"top",html:!0}).on("click",async function(){if($(this).tooltip("hide"),!n){unsafeWindow.showLoading?.();const e=$('body > [itemtype$="Person"] > meta[itemprop="name"]').attr("content"),a=await GM.xmlHttpRequest({url:`https://forvo.com/search/${encodeURIComponent(e)}`}),o=new DOMParser().parseFromString(a.responseText,"text/html"),i=$(o).find("body > script").text().match(/_AUDIO_HTTP_HOST='(.+?)'/)?.[1],t=$(o).find('[onclick^="Play"]').attr("onclick")?.match(/Play\([0-9]+,'(.*?)','(.*?)',(?:true|false),'(.*?)','(.*?)'/)?.slice(1).map(atob);if(unsafeWindow.hideLoading?.(),!t?.length){Logger.error(`Could not find a pronunciation for ${e} on forvo.com.`);return}const r=t[0]?`/mp3/${t[0]}`:null,s=t[1]?`/ogg/${t[1]}`:null,l=t[2]?`/audios/mp3/${t[2]}`:null,c=t[3]?`/audios/ogg/${t[3]}`:null;n??=new Audio("https://"+i+(c??l??s??r)),$(n).off("ended").on("ended",()=>{setTimeout(()=>{$(this).find(".audio-animation").removeClass("in"),setTimeout(()=>$(this).find(".fa").addClass("in"),100)},100)})}$(this).find(".fa").removeClass("in"),setTimeout(()=>{$(this).find(".audio-animation").addClass("in"),n.load(),n.play()},200)})},{capture:!0});function addStyles(){GM_addStyle(`
#btn-pronounce-name {
  margin: 0 0 2px 7px;
  position: relative;
  height: 20px;
  width: 20px;
  vertical-align: middle;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-style: none;
  background-color: transparent;
}

#btn-pronounce-name .fa {
  position: absolute;
  font-size: 16px;
  color: #aaa;
}
#btn-pronounce-name:hover .fa {
  color: var(--link-color);
}

#btn-pronounce-name .audio-animation {
  position: absolute;
  height: 75%;
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
}

#btn-pronounce-name .audio-animation [class^="bar-"] {
  flex: 1;
  height: 100%;
  border-radius: 3px;
  background: linear-gradient(180deg, rgb(255 0 0), rgb(155 66 200));
  transform: scaleY(0.2);
}

#btn-pronounce-name .in .bar-1 { animation: lineWave-1 .4s .3s infinite alternate; }
#btn-pronounce-name .in .bar-2 { animation: lineWave-2 .3s .2s infinite alternate; }
#btn-pronounce-name .in .bar-3 { animation: lineWave-3 .35s .25s infinite alternate; }

@keyframes lineWave-1 { from { transform: scaleY(0.24); } to { transform: scaleY(0.85); } }
@keyframes lineWave-2 { from { transform: scaleY(0.27); } to { transform: scaleY(0.98); } }
@keyframes lineWave-3 { from { transform: scaleY(0.24); } to { transform: scaleY(0.80); } }
  `)}