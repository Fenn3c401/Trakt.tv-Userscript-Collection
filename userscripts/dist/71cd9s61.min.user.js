// ==UserScript==
// @name         Trakt.tv | Actor Pronunciation Helper
// @description  Adds a button on /people pages for fetching an audio recording of that person's name with the correct pronunciation from forvo.com.
// @version      1.0.0
// @namespace    https://github.com/Fenn3c401
// @author       Fenn3c401
// @license      GPL-3.0-or-later
// @homepageURL  https://github.com/Fenn3c401/Trakt.tv-Userscript-Collection#readme
// @supportURL   https://github.com/Fenn3c401/Trakt.tv-Userscript-Collection/issues
// @updateURL    https://update.greasyfork.org/scripts/550069.meta.js
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


"use strict";let $,toastr;const logger={_defaults:{title:GM_info.script.name.replace("Trakt.tv","Userscript"),toast:!0,toastrOpt:{positionClass:"toast-top-right",timeOut:8e3,progressBar:!0}},_print(e,t,n="",a={}){const{data:o,title:i=this._defaults.title,consoleStyles:s,toast:r=this._defaults.toast,toastrOpt:l}=a;console[e](`%c${i}: ${n}`,s??"",...o!==void 0?[o]:[]),r&&toastr[t](n+(o!==void 0?" See console for details.":""),i,{...this._defaults.toastrOpt,...l})},info(e,t){this._print("info","info",e,t)},success(e,t){this._print("info","success",e,{consoleStyles:"color:#00c853;",...t})},warning(e,t){this._print("warn","warning",e,t)},error(e,t){this._print("error","error",e,t)}};addStyles(),document.addEventListener("turbo:load",()=>{/^\/people\/[^\/]+(\/lists.*)?$/.test(location.pathname)&&($??=unsafeWindow.jQuery,toastr??=unsafeWindow.toastr,!(!$||!toastr)&&$('<button id="btn-pronounce-name"><div class="audio-animation fade"><div class="bar-1"></div><div class="bar-2"></div><div class="bar-3"></div></div><div class="fa fa-volume fade in"></div></button>').appendTo($("#summary-wrapper .mobile-title h1")).tooltip({title:"Pronounce Name",container:"body",placement:"top",html:!0}).one("click",async function(){$(this).tooltip("hide");const e=$(this),t=$('body > [itemtype$="Person"] > meta[itemprop="name"]').attr("content")??$("#summary-wrapper .mobile-title > :last-child").text();unsafeWindow.showLoading?.();let n=[await fetchAudio(t)];n[0]||(n=await Promise.all(t.split(/\s+/).map(a=>fetchAudio(a).then(o=>o??new SpeechSynthesisUtterance(a))))),unsafeWindow.hideLoading?.(),n.some(a=>a instanceof SpeechSynthesisUtterance)&&(n.forEach(a=>{a instanceof SpeechSynthesisUtterance&&(a.lang="en-US")}),logger.warning(`Could not find a full pronunciation for "${t}" on <a href="https://forvo.com/search/${encodeURIComponent(t)}" target="_blank"><b>forvo.com</b></a>. Falling back to TTS..`)),["ended","end"].forEach(a=>{n.slice(1).forEach((o,i)=>{n[i]?.addEventListener(a,()=>o.play?o.play():speechSynthesis.speak(o))}),n.at(-1).addEventListener(a,()=>{e.find(".audio-animation").removeClass("in"),setTimeout(()=>e.find(".fa").addClass("in"),150)})}),playAudios(n,e),e.on("click",()=>playAudios(n,e))}))},{capture:!0});async function fetchAudio(e){const t=await GM.xmlHttpRequest({url:`https://forvo.com/search/${encodeURIComponent(e)}`}),n=new DOMParser().parseFromString(t.responseText,"text/html"),a=$(n).find("body > script").text().match(/_AUDIO_HTTP_HOST='(.+?)'/)?.[1],o=$(n).find('[onclick^="Play"]').attr("onclick")?.match(/Play\([0-9]+,'(.*?)','(.*?)',(?:true|false),'(.*?)','(.*?)'/)?.slice(1),i=o?.map((s,r)=>s&&["/mp3/","/ogg/","/audios/mp3/","/audios/ogg/"][r]+atob(s)).filter(Boolean).reverse();return i?.length?$("<audio>"+i.map(s=>`<source src="https://${a}${s}" type="${s.endsWith("mp3")?"audio/mpeg":"audio/ogg; codecs=vorbis"}" />`).join("")+"</audio>")[0]:null}function playAudios(e,t){t.find(".fa").removeClass("in"),setTimeout(()=>{t.find(".audio-animation").addClass("in"),e.forEach(n=>n.load?.()),speechSynthesis.cancel(),e[0].play?e[0].play():speechSynthesis.speak(e[0])},150)}function addStyles(){GM_addStyle(`
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