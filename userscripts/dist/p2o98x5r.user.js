// ==UserScript==
// @name         Trakt.tv | Consolidated Lists View
// @description  Adds a button to your personal lists summary page (/lists) which appends the lists from other categories (/collaborations, /liked, /liked/official) for a consolidated view.
// @version      1.0.1
// @namespace    https://github.com/Fenn3c401
// @author       Fenn3c401
// @homepageURL  https://github.com/Fenn3c401/Trakt.tv-Userscript-Collection#readme
// @supportURL   https://github.com/Fenn3c401/Trakt.tv-Userscript-Collection/issues
// @updateURL    https://raw.githubusercontent.com/Fenn3c401/Trakt.tv-Userscript-Collection/main/userscripts/meta/p2o98x5r.meta.js
// @downloadURL  https://raw.githubusercontent.com/Fenn3c401/Trakt.tv-Userscript-Collection/main/userscripts/dist/p2o98x5r.user.js
// @icon         data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDQ4IDQ4Ij4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiB1cmwoI3JhZGlhbC1ncmFkaWVudCk7CiAgICAgIH0KCiAgICAgIC5jbHMtMiB7CiAgICAgICAgZmlsbDogI2ZmZjsKICAgICAgfQogICAgPC9zdHlsZT4KICAgIDxyYWRpYWxHcmFkaWVudCBpZD0icmFkaWFsLWdyYWRpZW50IiBjeD0iNDguNDYiIGN5PSItLjk1IiBmeD0iNDguNDYiIGZ5PSItLjk1IiByPSI2NC44NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM5ZjQyYzYiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuMjciIHN0b3AtY29sb3I9IiNhMDQxYzMiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuNDIiIHN0b3AtY29sb3I9IiNhNDNlYmIiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuNTMiIHN0b3AtY29sb3I9IiNhYTM5YWQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuNjQiIHN0b3AtY29sb3I9IiNiNDMzOWEiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuNzMiIHN0b3AtY29sb3I9IiNjMDJiODEiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuODIiIHN0b3AtY29sb3I9IiNjZjIwNjEiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuOSIgc3RvcC1jb2xvcj0iI2UxMTQzYyIvPgogICAgICA8c3RvcCBvZmZzZXQ9Ii45NyIgc3RvcC1jb2xvcj0iI2Y1MDYxMyIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9InJlZCIvPgogICAgPC9yYWRpYWxHcmFkaWVudD4KICA8L2RlZnM+CiAgPGcgaWQ9Il94MkRfLXByb2R1Y3Rpb24iPgogICAgPGcgaWQ9ImxvZ29tYXJrLnNxdWFyZS5ncmFkaWVudCI+CiAgICAgIDxwYXRoIGlkPSJiYWNrZ3JvdW5kIiBjbGFzcz0iY2xzLTEiIGQ9Ik00OCwxMS4yNnYyNS40N2MwLDYuMjItNS4wNSwxMS4yNy0xMS4yNywxMS4yN0gxMS4yNmMtNi4yMiwwLTExLjI2LTUuMDUtMTEuMjYtMTEuMjdWMTEuMjZDMCw1LjA0LDUuMDQsMCwxMS4yNiwwaDI1LjQ3YzMuMzIsMCw2LjMsMS40Myw4LjM3LDMuNzIuNDcuNTIuODksMS4wOCwxLjI1LDEuNjguMTguMjkuMzQuNTkuNS44OS4zMy42OC42LDEuMzkuNzksMi4xNC4xLjM3LjE4Ljc2LjIzLDEuMTUuMDkuNTQuMTMsMS4xMS4xMywxLjY4WiIvPgogICAgICA8ZyBpZD0iY2hlY2tib3giPgogICAgICAgIDxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTEzLjYyLDE3Ljk3bDcuOTIsNy45MiwxLjQ3LTEuNDctNy45Mi03LjkyLTEuNDcsMS40N1pNMjguMDEsMzIuMzdsMS40Ny0xLjQ2LTIuMTYtMi4xNiwyMC4zMi0yMC4zMmMtLjE5LS43NS0uNDYtMS40Ni0uNzktMi4xNGwtMjIuNDYsMjIuNDYsMy42MiwzLjYyWk0xMi45MiwxOC42N2wtMS40NiwxLjQ2LDE0LjQsMTQuNCwxLjQ2LTEuNDctNC4zMi00LjMxTDQ2LjM1LDUuNGMtLjM2LS42LS43OC0xLjE2LTEuMjUtMS42OGwtMjMuNTYsMjMuNTYtOC42Mi04LjYxWk00Ny44Nyw5LjU4bC0xOS4xNywxOS4xNywxLjQ3LDEuNDYsMTcuODMtMTcuODN2LTEuMTJjMC0uNTctLjA0LTEuMTQtLjEzLTEuNjhaTTI1LjE2LDIyLjI3bC03LjkyLTcuOTItMS40NywxLjQ3LDcuOTIsNy45MiwxLjQ3LTEuNDdaTTQxLjMyLDM1LjEyYzAsMy40Mi0yLjc4LDYuMi02LjIsNi4ySDEyLjg4Yy0zLjQyLDAtNi4yLTIuNzgtNi4yLTYuMlYxMi44OGMwLTMuNDIsMi43OC02LjIxLDYuMi02LjIxaDIwLjc4di0yLjA3SDEyLjg4Yy00LjU2LDAtOC4yOCwzLjcxLTguMjgsOC4yOHYyMi4yNGMwLDQuNTYsMy43MSw4LjI4LDguMjgsOC4yOGgyMi4yNGM0LjU2LDAsOC4yOC0zLjcxLDguMjgtOC4yOHYtMy41MWgtMi4wN3YzLjUxWiIvPjwhLS0gNDVkMjM4NWQzYWFjYmI1OTMyNmEzODYxNDljNWE4NzggLS0+CiAgICAgIDwvZz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPg==
// @match        https://trakt.tv/*
// @run-at       document-start
// @grant        unsafeWindow
// @grant        GM_addStyle
// ==/UserScript==


/*
### General
- Sorting, filtering and list actions (unlike, delete etc.) should work as usual. Also works on /lists pages of other users.
- The [Trakt.tv | Bug Fixes and Optimizations](brzmp0a9.md) userscript contains an improved/fixed "Read more..." function which greatly speeds up the rendering of the appended lists.
*/


'use strict';

addStyles();

document.addEventListener('turbo:load', () => {
  if (!/^\/users\/[^\/]+\/lists$/.test(location.pathname)) return;

  const $ = unsafeWindow.jQuery;
  if (!$) return;


  const $sortableGrid = $('#sortable-grid'),
        $spacer = $sortableGrid.children().length ? $(`<hr id="consolidated-lists-view-spacer">`).insertAfter($sortableGrid) : undefined,
        $btn = $(`<button id="consolidated-lists-view-btn" type="button">Consolidated Lists View</button>`).insertAfter($spacer ?? $sortableGrid);

  $btn.on('click', async () => {
    $btn.text('Loading...').prop('disabled', true);

    const fetchListElems = async (pathSuffix) => fetch(location.pathname + pathSuffix)
                                                   .then((r) => r.text())
                                                   .then((r) => $(new DOMParser().parseFromString(r, 'text/html')).find('.personal-list'));
    let $fetchedLists = $((await Promise.all(['/collaborations', '/liked', '/liked/official'].map(fetchListElems))).flatMap(($listElems) => $listElems.get()));

    const $personalLists = $('.personal-list'),
          personalListsIds = $personalLists.map((_i, e) => $(e).attr('data-list-id')).get();
    $fetchedLists = $fetchedLists.filter((_i, e) => !personalListsIds.includes($(e).attr('data-list-id'))); // duplicate removal because a user can like his own personal lists

    if (!$fetchedLists.length) {
      $btn.text('No other lists found.')
      return;
    }

    const rankOffset = +$personalLists.last().attr('data-rank');
    $fetchedLists.each((i, e) => $(e).attr('data-rank', rankOffset + i + 1));

    $fetchedLists
      .find('.btn-list-progress').click(function() {
        unsafeWindow.showLoading();
        const dataListId = $(this).attr('data-list-id');
        if(dataListId && unsafeWindow.userSettings?.user.vip) unsafeWindow.redirect(unsafeWindow.userURL('progress?list=' + dataListId));
        else unsafeWindow.redirect('/vip/list-progress');
      })
      .end().find('.btn-list-subscribe').click(function() {
        unsafeWindow.showLoading();
        const dataListId = $(this).attr('data-list-id');
        if(dataListId && unsafeWindow.userSettings?.user.vip) {
          $.post(`/lists/${dataListId}/subscribe`, function(response) {
            unsafeWindow.redirect(response.url);
          }).fail(function() {
            unsafeWindow.hideLoading();
            unsafeWindow.toastr.error('Doh! We ran into some sort of error.');
          });
        }
        else unsafeWindow.redirect('/vip/calendars');
      })
      .end().find('.collaborations-deny').on('ajax:success', function(_e, response) {
        $('#collaborations-deny-' + response.id).children().addClass('trakt-icon-delete-thick');
        $('#collaborations-approve-' + response.id).addClass('off');
        $('#collaborations-block-' + response.id).addClass('off');
      });

    const $btnListEditLists = $('#btn-list-edit-lists');
    if ($btnListEditLists.hasClass('active')) $btnListEditLists.trigger('click');
    $btnListEditLists.hide();

    $sortableGrid.append($fetchedLists);
    $spacer?.remove();
    $btn.remove();

    unsafeWindow.genericTooltips();
    unsafeWindow.vipTooltips();
    unsafeWindow.shareIcons();
    unsafeWindow.convertEmojis();
    unsafeWindow.userscriptAddLinksToListPreviewPosters?.();
    unsafeWindow.addOverlays();
    unsafeWindow.$grid?.isotope('insert', $fetchedLists); // isotope instance is only initiliazed after first filtering/sorting
    unsafeWindow.updateListsCount();
    unsafeWindow.lazyLoadImages();

    // pre-filtering because the readmore plugin is a serious performance bottleneck
    // requires the renderReadmore() function override from the "Trakt.tv | Bug Fixes and Optimizations" userscript to actually speed things up
    requestAnimationFrame(() => {
      const $readmoreElemsToCollapse = $fetchedLists.find('.readmore').filter((_i, e) => $(e).height() > 300);
      unsafeWindow.renderReadmore($readmoreElemsToCollapse);
    });
  });
}, { capture: true });


function addStyles() {
  GM_addStyle(`
    #consolidated-lists-view-btn {
      margin: 20px auto 0;
      padding: 8px 16px;
      border-radius: var(--btn-radius);
      border: 1px solid hsl(0deg 0% 20% / 65%);
      background-color: #fff;
      color: #333;
      font-size: 18px;
      font-weight: var(--headings-font-weight);
      font-family: var(--headings-font-family);
      transition: all 0.2s;
    }
    #consolidated-lists-view-btn:hover {
      color: var(--brand-primary);
    }
    #consolidated-lists-view-btn:active {
      background-color: #ccc;
    }
    body.dark-knight #consolidated-lists-view-btn {
      border: none;
      background-color: #333;
      color: #fff;
    }
    body.dark-knight #consolidated-lists-view-btn:hover {
      background-color: var(--brand-primary);
    }
    body.dark-knight #consolidated-lists-view-btn:active {
      background-color: #666;
    }

    @media (min-width: 768px) {
      body:has(> .bottom[id*="content-page"]) #consolidated-lists-view-btn {
        margin-bottom: -20px;
      }
    }

    :is(#consolidated-lists-view-btn, #consolidated-lists-view-spacer) {
      display: block !important;
    }
    body:has(#btn-list-edit-lists.active) :is(#consolidated-lists-view-btn, #consolidated-lists-view-spacer) {
      display: none !important;
    }
  `);
}