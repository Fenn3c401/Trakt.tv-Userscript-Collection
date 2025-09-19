// ==UserScript==
// @name         Custom Element Hider
// @description  Allows you to specify a list of css selectors for individual websites to hide certain elements, like a custom filter of an adblocker. Comes with a couple defaults for trakt.tv.
// @version      1.0.2
// @namespace    rg49pj29
// @icon         data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iOTAuODggNjcuODQgODQ0LjggODQ0LjgiIGNsYXNzPSJpY29uIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik01MTMuMjggODAuNjRjLTIyNi41NiAwLTQwOS42IDE4My4wNC00MDkuNiA0MDkuNnMxODMuMDQgNDA5LjYgNDA5LjYgNDA5LjYgNDA5LjYtMTgzLjA0IDQwOS42LTQwOS42LTE4NC4zMi00MDkuNi00MDkuNi00MDkuNm0wIDE1My42YzQ3LjM2IDAgOTIuMTYgMTIuOCAxMjkuMjggMzUuODRMMjkzLjEyIDYxOS41MmMtMjMuMDQtMzguNC0zNS44NC04MS45Mi0zNS44NC0xMjkuMjggMC0xNDAuOCAxMTMuOTItMjU2IDI1Ni0yNTZtMCA1MTJjLTQ3LjM2IDAtOTIuMTYtMTIuOC0xMjkuMjgtMzUuODRsMzUwLjcyLTM1MC43MmMyMy4wNCAzOC40IDM1Ljg0IDgxLjkyIDM1Ljg0IDEyOS4yOC0xLjI4IDE0Mi4wOC0xMTYuNDggMjU3LjI4LTI1Ny4yOCAyNTcuMjgiIGZpbGw9IiNEODI2MjEiLz48cGF0aCBkPSJNNTEzLjI4IDkxMi42NGMtMjMyLjk2IDAtNDIyLjQtMTg5LjQ0LTQyMi40LTQyMi40czE4OS40NC00MjIuNCA0MjIuNC00MjIuNCA0MjIuNCAxODkuNDQgNDIyLjQgNDIyLjQtMTg5LjQ0IDQyMi40LTQyMi40IDQyMi40bTAtODE5LjJjLTIxOC44OCAwLTM5Ni44IDE3Ny45Mi0zOTYuOCAzOTYuOHMxNzcuOTIgMzk2LjggMzk2LjggMzk2LjggMzk2LjgtMTc3LjkyIDM5Ni44LTM5Ni44LTE3Ny45Mi0zOTYuOC0zOTYuOC0zOTYuOG0wIDY2NS42Yy00Ny4zNiAwLTk0LjcyLTEyLjgtMTM2Ljk2LTM3LjEyLTMuODQtMi41Ni01LjEyLTUuMTItNi40LTguOTYgMC0zLjg0IDEuMjgtNy42OCAzLjg0LTEwLjI0TDcyNC40OCAzNTJjMi41Ni0yLjU2IDYuNC0zLjg0IDEwLjI0LTMuODRzNy42OCAyLjU2IDguOTYgNi40YzI0LjMyIDQwLjk2IDM3LjEyIDg4LjMyIDM3LjEyIDEzNi45NiAxLjI4IDE0Ny4yLTEyMC4zMiAyNjcuNTItMjY3LjUyIDI2Ny41Mm0tMTA4LjgtNTEuMmMzMy4yOCAxNi42NCA3MS42OCAyNS42IDEwOC44IDI1LjYgMTM0LjQgMCAyNDMuMi0xMDguOCAyNDMuMi0yNDMuMiAwLTM3LjEyLTguOTYtNzUuNTItMjUuNi0xMDguOHptLTExMS4zNi03NS41MmgtMS4yOGMtMy44NCAwLTcuNjgtMi41Ni04Ljk2LTYuNC0yNC4zMi00MC45Ni0zNy4xMi04OC4zMi0zNy4xMi0xMzYuOTYgMC0xNDguNDggMTIwLjMyLTI2OC44IDI2OC44LTI2OC44IDQ3LjM2IDAgOTQuNzIgMTIuOCAxMzYuOTYgMzcuMTIgMy44NCAyLjU2IDUuMTIgNS4xMiA2LjQgOC45NnMtMS4yOCA3LjY4LTMuODQgMTAuMjRsLTM1MiAzNTJjLTIuNTYgMi41Ni02LjQgMy44NC04Ljk2IDMuODRtMjIwLjE2LTM4NS4yOGMtMTM0LjQgMC0yNDMuMiAxMDguOC0yNDMuMiAyNDMuMiAwIDM3LjEyIDguOTYgNzUuNTIgMjUuNiAxMDguOGwzMjYuNC0zMjYuNGMtMzQuNTYtMTYuNjQtNzEuNjgtMjUuNi0xMDguOC0yNS42IiBmaWxsPSIjMjMxQzFDIi8+PC9zdmc+
// @match        https://trakt.tv/*
// @run-at       document-start
// @grant        GM_addStyle
// ==/UserScript==

/* README
> Inspired by Zach Saucier's [Custom element hider](https://greasyfork.org/scripts/30410) userscript.

### General
- The full hostname is matched, subdomain included.
- Make sure the specificy of the css selectors is high enough *(note: css allows for increasing specificity by repeating the same id or class several times, useful if the default page styles use `!important`)*.
*/


'use strict';

const blacklist = {
  'trakt.tv': [
    '#top-nav .btn-vip',
    '.dropdown-menu.for-sortable > li > a.vip-only',
    '.alert-vip-required',
  ],
};


const selectors = blacklist[location.hostname];
if (!selectors) return;

GM_addStyle(`
  ${selectors.join(', ')} {
    display: none !important;
  }
`);
