// ==UserScript==
// @name         Trakt.tv | Charts - Ratings Distribution
// @description  Embeds the ratings distribution chart of a title (from its /stats page) on the title summary page. Also allows for rating the title by clicking on the bars.
// @version      1.0.2
// @namespace    https://github.com/Fenn3c401
// @author       Fenn3c401
// @homepageURL  https://github.com/Fenn3c401/Trakt.tv-Userscript-Collection#readme
// @supportURL   https://github.com/Fenn3c401/Trakt.tv-Userscript-Collection/issues
// @updateURL    https://raw.githubusercontent.com/Fenn3c401/Trakt.tv-Userscript-Collection/main/userscripts/meta/pmdf6nr9.meta.js
// @downloadURL  https://raw.githubusercontent.com/Fenn3c401/Trakt.tv-Userscript-Collection/main/userscripts/dist/pmdf6nr9.min.user.js
// @icon         data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDQ4IDQ4Ij4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiB1cmwoI3JhZGlhbC1ncmFkaWVudCk7CiAgICAgIH0KCiAgICAgIC5jbHMtMiB7CiAgICAgICAgZmlsbDogI2ZmZjsKICAgICAgfQogICAgPC9zdHlsZT4KICAgIDxyYWRpYWxHcmFkaWVudCBpZD0icmFkaWFsLWdyYWRpZW50IiBjeD0iNDguNDYiIGN5PSItLjk1IiBmeD0iNDguNDYiIGZ5PSItLjk1IiByPSI2NC44NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM5ZjQyYzYiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuMjciIHN0b3AtY29sb3I9IiNhMDQxYzMiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuNDIiIHN0b3AtY29sb3I9IiNhNDNlYmIiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuNTMiIHN0b3AtY29sb3I9IiNhYTM5YWQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuNjQiIHN0b3AtY29sb3I9IiNiNDMzOWEiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuNzMiIHN0b3AtY29sb3I9IiNjMDJiODEiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuODIiIHN0b3AtY29sb3I9IiNjZjIwNjEiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuOSIgc3RvcC1jb2xvcj0iI2UxMTQzYyIvPgogICAgICA8c3RvcCBvZmZzZXQ9Ii45NyIgc3RvcC1jb2xvcj0iI2Y1MDYxMyIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9InJlZCIvPgogICAgPC9yYWRpYWxHcmFkaWVudD4KICA8L2RlZnM+CiAgPGcgaWQ9Il94MkRfLXByb2R1Y3Rpb24iPgogICAgPGcgaWQ9ImxvZ29tYXJrLnNxdWFyZS5ncmFkaWVudCI+CiAgICAgIDxwYXRoIGlkPSJiYWNrZ3JvdW5kIiBjbGFzcz0iY2xzLTEiIGQ9Ik00OCwxMS4yNnYyNS40N2MwLDYuMjItNS4wNSwxMS4yNy0xMS4yNywxMS4yN0gxMS4yNmMtNi4yMiwwLTExLjI2LTUuMDUtMTEuMjYtMTEuMjdWMTEuMjZDMCw1LjA0LDUuMDQsMCwxMS4yNiwwaDI1LjQ3YzMuMzIsMCw2LjMsMS40Myw4LjM3LDMuNzIuNDcuNTIuODksMS4wOCwxLjI1LDEuNjguMTguMjkuMzQuNTkuNS44OS4zMy42OC42LDEuMzkuNzksMi4xNC4xLjM3LjE4Ljc2LjIzLDEuMTUuMDkuNTQuMTMsMS4xMS4xMywxLjY4WiIvPgogICAgICA8ZyBpZD0iY2hlY2tib3giPgogICAgICAgIDxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTEzLjYyLDE3Ljk3bDcuOTIsNy45MiwxLjQ3LTEuNDctNy45Mi03LjkyLTEuNDcsMS40N1pNMjguMDEsMzIuMzdsMS40Ny0xLjQ2LTIuMTYtMi4xNiwyMC4zMi0yMC4zMmMtLjE5LS43NS0uNDYtMS40Ni0uNzktMi4xNGwtMjIuNDYsMjIuNDYsMy42MiwzLjYyWk0xMi45MiwxOC42N2wtMS40NiwxLjQ2LDE0LjQsMTQuNCwxLjQ2LTEuNDctNC4zMi00LjMxTDQ2LjM1LDUuNGMtLjM2LS42LS43OC0xLjE2LTEuMjUtMS42OGwtMjMuNTYsMjMuNTYtOC42Mi04LjYxWk00Ny44Nyw5LjU4bC0xOS4xNywxOS4xNywxLjQ3LDEuNDYsMTcuODMtMTcuODN2LTEuMTJjMC0uNTctLjA0LTEuMTQtLjEzLTEuNjhaTTI1LjE2LDIyLjI3bC03LjkyLTcuOTItMS40NywxLjQ3LDcuOTIsNy45MiwxLjQ3LTEuNDdaTTQxLjMyLDM1LjEyYzAsMy40Mi0yLjc4LDYuMi02LjIsNi4ySDEyLjg4Yy0zLjQyLDAtNi4yLTIuNzgtNi4yLTYuMlYxMi44OGMwLTMuNDIsMi43OC02LjIxLDYuMi02LjIxaDIwLjc4di0yLjA3SDEyLjg4Yy00LjU2LDAtOC4yOCwzLjcxLTguMjgsOC4yOHYyMi4yNGMwLDQuNTYsMy43MSw4LjI4LDguMjgsOC4yOGgyMi4yNGM0LjU2LDAsOC4yOC0zLjcxLDguMjgtOC4yOHYtMy41MWgtMi4wN3YzLjUxWiIvPjwhLS0gNDVkMjM4NWQzYWFjYmI1OTMyNmEzODYxNDljNWE4NzggLS0+CiAgICAgIDwvZz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPg==
// @match        https://trakt.tv/*
// @run-at       document-start
// @require      https://cdn.jsdelivr.net/npm/chart.js@4.4.9/dist/chart.umd.min.js#sha256-vOFUCAlZxXS+C7axqST/MvCOvG/0YMFZFx9RxTgCyEQ=
// @grant        unsafeWindow
// @grant        GM_info
// @grant        GM_addStyle
// @grant        GM.xmlHttpRequest
// @connect      walter-r2.trakt.tv
// ==/UserScript==


"use strict";let $,trakt;const numFormatCompact=new Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:1});numFormatCompact.formatTLC=i=>numFormatCompact.format(i).toLowerCase(),addStyles(),document.addEventListener("turbo:load",async()=>{if(!/^\/(shows|movies)\//.test(location.pathname)||($??=unsafeWindow.jQuery,trakt??=unsafeWindow.userscriptTraktAPIModule?.isFulfilled?await unsafeWindow.userscriptTraktAPIModule:null,!$))return;const i=$("#summary-wrapper"),e=i.find("#summary-ratings-wrapper"),t=e.find(".trakt-rating > a").attr("href");if(!t)return;const r=$('<div id="ratings-distribution-chart-wrapper"><canvas></canvas></div>').appendTo(i.find(".shadow-base")).find("canvas"),[a,s]=await Promise.all([getRatingsData(t),getFanartBrightness(i)]),n=()=>{new Chart(r[0].getContext("2d"),{type:"bar",data:getChartData(a,s),options:getChartOptions(a,e)})};document.hidden?$(document).one("visibilitychange",n):n()},{capture:!0});async function getRatingsData(i){let e;if(trakt){const t=i.split("/").slice(1,-1),r=isNaN(t[1])?t[1]:$(".summary-user-rating").attr(`data-${t[0].slice(0,-1)}-id`),a=await trakt[t[4]??t[2]??t[0]].ratings({id:r,season:t[3],episode:t[5]});e={distribution:Object.values(a.distribution),votes:a.votes}}else{const t=await fetch(i),r=new DOMParser().parseFromString(await t.text(),"text/html");e={distribution:JSON.parse($(r).find("#charts-wrapper script").text().match(/ratingsDistribution = (\[.*\])/)[1]),votes:$("#summary-ratings-wrapper").data("vote-count")}}return e}function getFanartBrightness(i){const e=i.find("> .full-screenshot"),t=async()=>{const r=e.css("background-image").match(/https.*webp/)?.[0];if(!r)return .5;const a=await GM.xmlHttpRequest({url:r,responseType:"blob",fetch:!0});if(a.status!==200)throw new Error(`XHR for: ${a.finalUrl} failed with status: ${a.status}`);const s=URL.createObjectURL(a.response),n=new Image;n.src=s,await n.decode(),URL.revokeObjectURL(s);const o=document.createElement("canvas");o.width=n.naturalWidth,o.height=n.naturalHeight;const c=o.getContext("2d");c.drawImage(n,0,0);const u=n.naturalWidth/4,m=n.naturalHeight/4,l=c.getImageData(3*u,2*m,u,m).data;let p=0,g=l.length/16;for(let d=0;d<l.length;d+=16)p+=(.299*l[d]+.587*l[d+1]+.114*l[d+2])/255;return p/g};return e.attr("style")?t():new Promise(r=>{new MutationObserver((a,s)=>{s.disconnect(),r(t())}).observe(e[0],{attributeFilter:["style"]})})}function getGradientY(i,e,t,...r){if(!i)return r.pop().color;const{ctx:a,chartArea:s,scales:n}=i.chart;if(s){if(a[e]??={},!a[e].gradient||a[e].height!==s.height||a[e].yAxisMin!==n[t].min||a[e].yAxisMax!==n[t].max){let o=n[t].max-n[t].min;o=o?n[t].max/o:1,o=s.bottom*o,a[e].gradient=a.createLinearGradient(0,o,0,s.top),r.forEach(c=>a[e].gradient.addColorStop(c.offset,c.color)),a[e].height=s.height,a[e].yAxisMin=n[t].min,a[e].yAxisMax=n[t].max}return a[e].gradient}}function getChartData(i,e){return{labels:[...Array(10)].map((t,r)=>String(r+1)),datasets:[{label:"Votes",data:i.distribution,categoryPercentage:1,barPercentage:.97,backgroundColor:`rgba(${Array(3).fill(Math.min(e+.35,1)*255).join(", ")}, ${Math.min(e+.3,.7)})`,hoverBackgroundColor:t=>getGradientY(t,"_votes","y",{offset:0,color:`rgba(155, 66, 200, ${Math.min(e+.3,.7)})`},{offset:.9,color:`rgba(255, 0, 0, ${Math.min(e+.3,.7)})`})}]}}function getChartOptions(i,e){return{responsive:!0,maintainAspectRatio:!1,minBarLength:2,interaction:{mode:"index",intersect:!1},animation:{delay:t=>t.type==="data"&&t.mode==="default"?250+t.dataIndex*(750/(i.distribution.length-1)):0},scales:{x:{display:!1},y:{display:!1,suggestedMax:10}},plugins:{tooltip:{displayColors:!1,backgroundColor:"rgba(0, 0, 0, 0.7)",caretSize:10,padding:{x:12,y:5},titleAlign:"center",titleMarginBottom:2,titleFont:{weight:"bold"},bodyAlign:"center",bodyColor:"rgb(170, 170, 170)",bodyFont:{size:11},footerAlign:"center",footerColor:t=>`hsl(0, ${t.tooltip.dataPoints[0].parsed.x*11}%, 35%)`,footerMarginTop:2,footerFont:{size:18},callbacks:{title:t=>{const r=t[0].label;return`${r} - ${unsafeWindow.ratingsText?.[r]}`},label:t=>{const r=t.parsed.y;return`${i.votes>0?(r*100/i.votes).toFixed(1):"--"}% (${numFormatCompact.formatTLC(r)} v.)`},footer:t=>{const r=e.find('.summary-user-rating > :not([style="display: none;"]) > [class*="rating-"]').first().attr("class")?.match(/rating-(\d+)/)?.[1];return t[0].parsed.x===r-1?"\u2764":""}}},legend:{display:!1}},onClick:(t,r)=>{if(!r.length)return;const a=r[0].index+1;e.find(".summary-user-rating:not(.popover-on)").trigger("click"),setTimeout(()=>$(`.needsclick.rating-${a}`).trigger("mouseover").trigger("click"),500)}}}function addStyles(){GM_addStyle(`
    #summary-wrapper {
      container-type: inline-size;
      --rat-dist-chart-width: 28cqi;
    }
    #summary-wrapper .shadow-base {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
    }
    #ratings-distribution-chart-wrapper {
      position: relative;
      z-index: 30;
      height: 100%;
      width: var(--rat-dist-chart-width);
    }
    #summary-wrapper:has(#summary-ratings-wrapper) .summary .mobile-title {
      padding-right: calc(var(--rat-dist-chart-width) - ((100cqi - 100%) / 2) + 5px) !important;
    }
    @media (width <= 767px) {
      #ratings-distribution-chart-wrapper {
        height: 65%;
      }
    }


    #summary-wrapper .summary .mobile-title .year {
      white-space: nowrap;
    }
    #summary-wrapper .summary .mobile-title .year::after {
      content: "\\2060";
    }
  `)}