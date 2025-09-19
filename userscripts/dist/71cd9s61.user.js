// ==UserScript==
// @name         Trakt.tv | Actor Pronunciation Helper
// @description  Adds a button on /people pages for fetching an audio recording of that person's name with the correct pronunciation from forvo.com.
// @version      0.4.2
// @namespace    https://github.com/Fenn3c401
// @author       Fenn3c401
// @license      GPL-3.0-or-later
// @homepageURL  https://github.com/Fenn3c401/Trakt.tv-Userscript-Collection#readme
// @supportURL   https://github.com/Fenn3c401/Trakt.tv-Userscript-Collection/issues
// @updateURL    https://raw.githubusercontent.com/Fenn3c401/Trakt.tv-Userscript-Collection/main/userscripts/meta/71cd9s61.meta.js
// @downloadURL  https://raw.githubusercontent.com/Fenn3c401/Trakt.tv-Userscript-Collection/main/userscripts/dist/71cd9s61.user.js
// @icon         data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDQ4IDQ4Ij4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiB1cmwoI3JhZGlhbC1ncmFkaWVudCk7CiAgICAgIH0KCiAgICAgIC5jbHMtMiB7CiAgICAgICAgZmlsbDogI2ZmZjsKICAgICAgfQogICAgPC9zdHlsZT4KICAgIDxyYWRpYWxHcmFkaWVudCBpZD0icmFkaWFsLWdyYWRpZW50IiBjeD0iNDguNDYiIGN5PSItLjk1IiBmeD0iNDguNDYiIGZ5PSItLjk1IiByPSI2NC44NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM5ZjQyYzYiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuMjciIHN0b3AtY29sb3I9IiNhMDQxYzMiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuNDIiIHN0b3AtY29sb3I9IiNhNDNlYmIiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuNTMiIHN0b3AtY29sb3I9IiNhYTM5YWQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuNjQiIHN0b3AtY29sb3I9IiNiNDMzOWEiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuNzMiIHN0b3AtY29sb3I9IiNjMDJiODEiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuODIiIHN0b3AtY29sb3I9IiNjZjIwNjEiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuOSIgc3RvcC1jb2xvcj0iI2UxMTQzYyIvPgogICAgICA8c3RvcCBvZmZzZXQ9Ii45NyIgc3RvcC1jb2xvcj0iI2Y1MDYxMyIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9InJlZCIvPgogICAgPC9yYWRpYWxHcmFkaWVudD4KICA8L2RlZnM+CiAgPGcgaWQ9Il94MkRfLXByb2R1Y3Rpb24iPgogICAgPGcgaWQ9ImxvZ29tYXJrLnNxdWFyZS5ncmFkaWVudCI+CiAgICAgIDxwYXRoIGlkPSJiYWNrZ3JvdW5kIiBjbGFzcz0iY2xzLTEiIGQ9Ik00OCwxMS4yNnYyNS40N2MwLDYuMjItNS4wNSwxMS4yNy0xMS4yNywxMS4yN0gxMS4yNmMtNi4yMiwwLTExLjI2LTUuMDUtMTEuMjYtMTEuMjdWMTEuMjZDMCw1LjA0LDUuMDQsMCwxMS4yNiwwaDI1LjQ3YzMuMzIsMCw2LjMsMS40Myw4LjM3LDMuNzIuNDcuNTIuODksMS4wOCwxLjI1LDEuNjguMTguMjkuMzQuNTkuNS44OS4zMy42OC42LDEuMzkuNzksMi4xNC4xLjM3LjE4Ljc2LjIzLDEuMTUuMDkuNTQuMTMsMS4xMS4xMywxLjY4WiIvPgogICAgICA8ZyBpZD0iY2hlY2tib3giPgogICAgICAgIDxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTEzLjYyLDE3Ljk3bDcuOTIsNy45MiwxLjQ3LTEuNDctNy45Mi03LjkyLTEuNDcsMS40N1pNMjguMDEsMzIuMzdsMS40Ny0xLjQ2LTIuMTYtMi4xNiwyMC4zMi0yMC4zMmMtLjE5LS43NS0uNDYtMS40Ni0uNzktMi4xNGwtMjIuNDYsMjIuNDYsMy42MiwzLjYyWk0xMi45MiwxOC42N2wtMS40NiwxLjQ2LDE0LjQsMTQuNCwxLjQ2LTEuNDctNC4zMi00LjMxTDQ2LjM1LDUuNGMtLjM2LS42LS43OC0xLjE2LTEuMjUtMS42OGwtMjMuNTYsMjMuNTYtOC42Mi04LjYxWk00Ny44Nyw5LjU4bC0xOS4xNywxOS4xNywxLjQ3LDEuNDYsMTcuODMtMTcuODN2LTEuMTJjMC0uNTctLjA0LTEuMTQtLjEzLTEuNjhaTTI1LjE2LDIyLjI3bC03LjkyLTcuOTItMS40NywxLjQ3LDcuOTIsNy45MiwxLjQ3LTEuNDdaTTQxLjMyLDM1LjEyYzAsMy40Mi0yLjc4LDYuMi02LjIsNi4ySDEyLjg4Yy0zLjQyLDAtNi4yLTIuNzgtNi4yLTYuMlYxMi44OGMwLTMuNDIsMi43OC02LjIxLDYuMi02LjIxaDIwLjc4di0yLjA3SDEyLjg4Yy00LjU2LDAtOC4yOCwzLjcxLTguMjgsOC4yOHYyMi4yNGMwLDQuNTYsMy43MSw4LjI4LDguMjgsOC4yOGgyMi4yNGM0LjU2LDAsOC4yOC0zLjcxLDguMjgtOC4yOHYtMy41MWgtMi4wN3YzLjUxWiIvPjwhLS0gNDVkMjM4NWQzYWFjYmI1OTMyNmEzODYxNDljNWE4NzggLS0+CiAgICAgIDwvZz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPg==
// @match        https://trakt.tv/*
// @run-at       document-start
// @grant        unsafeWindow
// @grant        GM_addStyle
// @grant        GM.xmlHttpRequest
// @connect      forvo.com
// ==/UserScript==


'use strict';

let $, toastr;


addStyles();

document.addEventListener('turbo:load', () => {
  if (!/^\/people\/[^\/]+$/.test(location.pathname)) return;

  $ ??= unsafeWindow.jQuery;
  toastr ??= unsafeWindow.toastr;
  if (!$ || !toastr) return;

  let audio;

  $(`<button id="btn-pronounce-name">` +
      `<div class="audio-animation fade">` +
        `<div class="bar-1"></div>` +
        `<div class="bar-2"></div>` +
        `<div class="bar-3"></div>` +
      `</div>` +
      `<div class="fa fa-volume fade in"></div>` +
    `</button>`
  ).appendTo($('#summary-wrapper .mobile-title h1')).tooltip({
    title: 'Pronounce Name',
    container: 'body',
    placement: 'top',
    html: true,
  }).on('click', async function() {
    $(this).tooltip('hide');

    if (!audio) {
      unsafeWindow.showLoading?.();
      const name = $('body > [itemtype$="Person"] > meta[itemprop="name"]').attr('content'), // doesn't exist on /people/<slug>/lists pages
            resp = await GM.xmlHttpRequest({ url: `https://forvo.com/search/${encodeURIComponent(name)}` }),
            doc = new DOMParser().parseFromString(resp.responseText, 'text/html'),
            audioHttpHost = $(doc).find('body > script').text().match(/_AUDIO_HTTP_HOST='(.+?)'/)?.[1],
            audioVariantsPaths = $(doc).find('[onclick^="Play"]').attr('onclick')?.match(/Play\([0-9]+,'(.*?)','(.*?)',(?:true|false),'(.*?)','(.*?)'/)?.slice(1).map(atob);
      unsafeWindow.hideLoading?.();

      if (!audioVariantsPaths?.length) {
        toastr.error(`Userscript | Actor Pronunciation Helper: Could not find a pronunciation for ${name} on forvo.com`);
        return;
      }

      const mp3Path = audioVariantsPaths[0] ? `/mp3/${audioVariantsPaths[0]}` : null,
            oggPath = audioVariantsPaths[1] ? `/ogg/${audioVariantsPaths[1]}` : null,
            mp3HighPath = audioVariantsPaths[2] ? `/audios/mp3/${audioVariantsPaths[2]}` : null,
            oggHighPath = audioVariantsPaths[3] ? `/audios/ogg/${audioVariantsPaths[3]}` : null;

      audio ??= new Audio('https://' + audioHttpHost + (oggHighPath ?? mp3HighPath ?? oggPath ?? mp3Path));
      $(audio).off('ended').on('ended', () => {
        setTimeout(() => {
          $(this).find('.audio-animation').removeClass('in')
          setTimeout(() => $(this).find('.fa').addClass('in'), 100);
        }, 100);
      });
    }

    $(this).find('.fa').removeClass('in');
    setTimeout(() => {
      $(this).find('.audio-animation').addClass('in');
      audio.load();
      audio.play();
    }, 200);
  });
}, { capture: true });


function addStyles() {
  GM_addStyle(`
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
      background: linear-gradient(to bottom, rgb(255, 0, 0), rgb(155, 66, 200));
      transform: scaleY(0.2);
    }

    #btn-pronounce-name .in .bar-1 { animation: lineWave-1 .4s .3s infinite alternate; }
    #btn-pronounce-name .in .bar-2 { animation: lineWave-2 .3s .2s infinite alternate; }
    #btn-pronounce-name .in .bar-3 { animation: lineWave-3 .35s .25s infinite alternate; }

    @keyframes lineWave-1 { from { transform: scaleY(0.24); } to { transform: scaleY(0.85); } }
    @keyframes lineWave-2 { from { transform: scaleY(0.27); } to { transform: scaleY(0.98); } }
    @keyframes lineWave-3 { from { transform: scaleY(0.24); } to { transform: scaleY(0.80); } }
  `);
}