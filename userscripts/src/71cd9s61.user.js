// ==UserScript==
// @name         Trakt.tv | Actor Pronunciation Helper
// @description  Adds a button on /people pages for fetching an audio recording of that person's name with the correct pronunciation from forvo.com.
// @version      0.4.5
// @namespace    71cd9s61
// @icon         https://trakt.tv/assets/logos/logomark.square.gradient-b644b16c38ff775861b4b1f58c1230f6a097a2466ab33ae00445a505c33fcb91.svg
// @match        https://trakt.tv/*
// @match        https://classic.trakt.tv/*
// @run-at       document-start
// @grant        unsafeWindow
// @grant        GM_addStyle
// @grant        GM.xmlHttpRequest
// @connect      forvo.com
// ==/UserScript==


'use strict';

let $, toastr;

const Logger = Object.freeze({
  _DEFAULT_PREFIX: GM_info.script.name.replace('Trakt.tv', 'Userscript') + ': ',
  _DEFAULT_TOAST: true,
  _printMsg(fnConsole, fnToastr, msg, { data, prefix = Logger._DEFAULT_PREFIX, toast = Logger._DEFAULT_TOAST } = {}) {
    msg = prefix + msg;
    console[fnConsole](msg, (data ? data : ''));
    if (toast) toastr[fnToastr](msg + (data ? ' See console for details.' : ''));
  },
  info: (msg, opt) => Logger._printMsg('info', 'info', msg, opt),
  success: (msg, opt) => Logger._printMsg('info', 'success', msg, opt),
  warning: (msg, opt) => Logger._printMsg('warn', 'warning', msg, opt),
  error: (msg, opt) => Logger._printMsg('error', 'error', msg, opt),
});


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
        Logger.error(`Could not find a pronunciation for ${name} on forvo.com.`);
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
  background: linear-gradient(180deg, rgb(255 0 0), rgb(155 66 200));
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
