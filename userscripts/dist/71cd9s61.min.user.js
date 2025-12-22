// ==UserScript==
// @name         Trakt.tv | Actor Pronunciation Helper
// @description  Adds a button on /people pages for fetching an audio recording of that person's name with the correct pronunciation from https://forvo.com
// @version      1.0.4
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


"use strict";let $,toastr;const logger={_defaults:{title:GM_info.script.name.replace("Trakt.tv","Userscript"),toast:!0,toastrOpt:{positionClass:"toast-top-right",timeOut:1e4,progressBar:!0},toastrStyles:"#toast-container#toast-container a { color: #fff !important; border-bottom: dotted 1px #fff; }"},_print(t,e,o="",a={}){const{title:n=this._defaults.title,toast:i=this._defaults.toast,toastrOpt:s,toastrStyles:r="",consoleStyles:c="",data:l}=a,d=`${o}${l!==void 0?" See console for details.":""}<style>${this._defaults.toastrStyles+r}</style>`;console[t](`%c${n}: ${o}`,c,...l!==void 0?[l]:[]),i&&toastr[e](d,n,{...this._defaults.toastrOpt,...s})},info(t,e){this._print("info","info",t,e)},success(t,e){this._print("info","success",t,{consoleStyles:"color:#00c853;",...e})},warning(t,e){this._print("warn","warning",t,e)},error(t,e){this._print("error","error",t,e)}};addStyles(),document.addEventListener("turbo:load",()=>{/^\/people\/[^\/]+(\/lists.*)?$/.test(location.pathname)&&($??=unsafeWindow.jQuery,toastr??=unsafeWindow.toastr,!(!$||!toastr)&&$('<button id="btn-pronounce-name"><div class="audio-animation fade"><div class="bar-1"></div><div class="bar-2"></div><div class="bar-3"></div></div><div class="fa fa-volume fade in"></div></button>').appendTo($("#summary-wrapper .mobile-title h1")).tooltip({title:"Pronounce Name",container:"body",placement:"top",html:!0}).one("click",async function(){$(this).tooltip("hide");const t=$(this),e=$('body > [itemtype$="Person"] > meta[itemprop="name"]').attr("content")??$("#summary-wrapper .mobile-title > :last-child").text();unsafeWindow.showLoading?.();const o=await fetchAudio(e),a=o?[o]:await Promise.all(e.split(/\s+/).map(n=>/^\w\.?$/.test(n)?new SpeechSynthesisUtterance(n):fetchAudio(n).then(i=>i??new SpeechSynthesisUtterance(n))));unsafeWindow.hideLoading?.(),a.some(n=>n instanceof SpeechSynthesisUtterance)&&(a.forEach(n=>{n instanceof SpeechSynthesisUtterance&&(n.lang="en-US")}),logger.warning(`Could not find a full pronunciation for "${e}" on <a href="https://forvo.com/search/${encodeURIComponent(e)}" target="_blank"><strong>forvo.com</strong></a>. Falling back to TTS..`)),["ended","end"].forEach(n=>{a.slice(1).forEach((i,s)=>{a[s]?.addEventListener(n,()=>i.play?i.play():speechSynthesis.speak(i))}),a.at(-1).addEventListener(n,()=>{t.find(".audio-animation").removeClass("in"),setTimeout(()=>t.find(".fa").addClass("in"),150)})}),playAudios(a,t),t.on("click",()=>playAudios(a,t))}))},{capture:!0});async function fetchAudio(t){const e=await GM.xmlHttpRequest({url:`https://forvo.com/search/${encodeURIComponent(t)}`}),o=new DOMParser().parseFromString(e.responseText,"text/html"),a=$(o).find("body > script").text().match(/_AUDIO_HTTP_HOST='(.+?)'/)?.[1],n=$(o).find('[onclick^="Play"]').attr("onclick")?.match(/Play\([0-9]+,'(.*?)','(.*?)',(?:true|false),'(.*?)','(.*?)'/)?.slice(1),i=n?.map((s,r)=>s&&["/mp3/","/ogg/","/audios/mp3/","/audios/ogg/"][r]+atob(s)).filter(Boolean).reverse();return i?.length?$("<audio>"+i.map(s=>`<source src="https://${a}${s}" type="${s.endsWith("mp3")?"audio/mpeg":"audio/ogg; codecs=vorbis"}" />`).join("")+"</audio>")[0]:null}function playAudios(t,e){e.find(".fa").removeClass("in"),setTimeout(()=>{e.find(".audio-animation").addClass("in"),t.forEach(o=>o.load?.()),speechSynthesis.cancel(),t[0].play?t[0].play():speechSynthesis.speak(t[0])},150)}function addStyles(){GM_addStyle(`
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