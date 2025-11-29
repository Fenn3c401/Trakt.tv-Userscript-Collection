// ==UserScript==
// @name         Trakt.tv | Director Badge
// @description  Appends a special "Director" badge to your username because you deserve it. It's usually reserved for team members like Trakt's co-founders Sean and Justin. See https://classic.trakt.tv/users/sean for how it looks.
// @version      1.0.0
// @namespace    h8vh5z16
// @icon         https://trakt.tv/assets/logos/logomark.square.gradient-b644b16c38ff775861b4b1f58c1230f6a097a2466ab33ae00445a505c33fcb91.svg
// @match        https://trakt.tv/*
// @match        https://classic.trakt.tv/*
// @run-at       document-start
// @grant        GM_addStyle
// ==/UserScript==


'use-strict';

const userslug = document.cookie.match(/(?:^|; )trakt_userslug=([^;]*)/)?.[1];

if (userslug) {
  GM_addStyle(`
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
:is(#avatar-wrapper h1, #results-top-wrapper, .comment-wrapper .user-name) [href="/users/${userslug}"] ~ .label-vip {
  display: none !important;
}
  `);
}
