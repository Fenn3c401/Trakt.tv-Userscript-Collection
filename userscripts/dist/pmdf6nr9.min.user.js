// ==UserScript==
// @name         Trakt.tv | Charts - Ratings Distribution
// @description  Adds a ratings distribution (number of users who rated a title 1/10, 2/10 etc.) chart to title summary pages. Also allows for rating the title by clicking on the bars of the chart. See README for details.
// @version      1.0.6
// @namespace    https://github.com/Fenn3c401
// @author       Fenn3c401
// @license      GPL-3.0-or-later
// @homepageURL  https://github.com/Fenn3c401/Trakt.tv-Userscript-Collection#readme
// @supportURL   https://github.com/Fenn3c401/Trakt.tv-Userscript-Collection/issues
// @updateURL    https://raw.githubusercontent.com/Fenn3c401/Trakt.tv-Userscript-Collection/main/userscripts/meta/pmdf6nr9.meta.js
// @downloadURL  https://raw.githubusercontent.com/Fenn3c401/Trakt.tv-Userscript-Collection/main/userscripts/dist/pmdf6nr9.min.user.js
// @icon         https://trakt.tv/assets/logos/logomark.square.gradient-b644b16c38ff775861b4b1f58c1230f6a097a2466ab33ae00445a505c33fcb91.svg
// @match        https://trakt.tv/*
// @match        https://classic.trakt.tv/*
// @run-at       document-start
// @require      https://cdn.jsdelivr.net/npm/chart.js@4.4.9/dist/chart.umd.min.js
// @grant        unsafeWindow
// @grant        GM_info
// @grant        GM_addStyle
// @grant        GM.xmlHttpRequest
// @connect      walter-r2.trakt.tv
// ==/UserScript==


"use strict";let $,traktApiModule;const numFormatCompact=new Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:1});numFormatCompact.formatTLC=i=>numFormatCompact.format(i).toLowerCase(),addStyles(),document.addEventListener("turbo:load",async()=>{if(!/^\/(shows|movies)\//.test(location.pathname)||($??=unsafeWindow.jQuery,traktApiModule??=unsafeWindow.userscriptTraktApiModule?.isFulfilled?await unsafeWindow.userscriptTraktApiModule:null,!$))return;const i=$("#summary-wrapper"),e=i.find("#summary-ratings-wrapper"),t=e.find(".trakt-rating > a").attr("href");if(!t)return;const r=$('<div id="ratings-distribution-chart-wrapper"><canvas></canvas></div>').appendTo(i.find(".shadow-base")).find("canvas"),[a,s]=await Promise.all([getRatingsData(t),getFanartBrightness(i)]),n=()=>{new Chart(r[0].getContext("2d"),{type:"bar",data:getChartData(a,s),options:getChartOptions(a,e)})};document.hidden?$(document).one("visibilitychange",n):n()},{capture:!0});async function getRatingsData(i){let e;if(traktApiModule){const t=i.split("/").slice(1,-1),r=isNaN(t[1])?t[1]:$(".summary-user-rating").attr(`data-${t[0].slice(0,-1)}-id`),a=await traktApiModule[t[4]??t[2]??t[0]].ratings({id:r,season:t[3],episode:t[5]});e={distribution:Object.values(a.distribution),votes:a.votes}}else{const t=await fetch(i),r=new DOMParser().parseFromString(await t.text(),"text/html");e={distribution:JSON.parse($(r).find("#charts-wrapper script").text().match(/ratingsDistribution = (\[.*\])/)[1]),votes:$("#summary-ratings-wrapper").data("vote-count")}}return e.distribution.length===11&&(console.warn(GM_info.script.name.replace("Trakt.tv","Userscript")+": Malformed ratings distribution data.",e.distribution.toString()),e.distribution.shift()),e}function getFanartBrightness(i){const e=i.find("> .full-screenshot"),t=async()=>{const r=e.css("background-image").match(/https.*webp/)?.[0];if(!r)return .5;const a=await GM.xmlHttpRequest({url:r,responseType:"blob",fetch:!0});if(a.status!==200)throw new Error(`XHR for: ${a.finalUrl} failed with status: ${a.status}`);const s=URL.createObjectURL(a.response),n=new Image;n.src=s,await n.decode(),URL.revokeObjectURL(s);const o=document.createElement("canvas");o.width=n.naturalWidth,o.height=n.naturalHeight;const c=o.getContext("2d");c.drawImage(n,0,0);const u=n.naturalWidth/4,m=n.naturalHeight/4,l=c.getImageData(3*u,2*m,u,m).data;let p=0,g=l.length/16;for(let d=0;d<l.length;d+=16)p+=(.299*l[d]+.587*l[d+1]+.114*l[d+2])/255;return p/g};return e.attr("style")?t():new Promise(r=>{new MutationObserver((a,s)=>{s.disconnect(),r(t())}).observe(e[0],{attributeFilter:["style"]})})}function getGradientY(i,e,t,...r){if(!i)return r.pop().color;const{ctx:a,chartArea:s,scales:n}=i.chart;if(s){if(a[e]??={},!a[e].gradient||a[e].height!==s.height||a[e].yAxisMin!==n[t].min||a[e].yAxisMax!==n[t].max){let o=n[t].max-n[t].min;o=o?n[t].max/o:1,o=s.bottom*o,a[e].gradient=a.createLinearGradient(0,o,0,s.top),r.forEach(c=>a[e].gradient.addColorStop(c.offset,c.color)),a[e].height=s.height,a[e].yAxisMin=n[t].min,a[e].yAxisMax=n[t].max}return a[e].gradient}}function getChartData(i,e){return{labels:[...Array(10)].map((t,r)=>String(r+1)),datasets:[{label:"Votes",data:i.distribution,categoryPercentage:1,barPercentage:.97,backgroundColor:`rgba(${Array(3).fill(Math.min(e+.35,1)*255).join(", ")}, ${Math.min(e+.3,.7)})`,hoverBackgroundColor:t=>getGradientY(t,"_votes","y",{offset:0,color:`rgba(155, 66, 200, ${Math.min(e+.3,.7)})`},{offset:.9,color:`rgba(255, 0, 0, ${Math.min(e+.3,.7)})`})}]}}function getChartOptions(i,e){return{responsive:!0,maintainAspectRatio:!1,minBarLength:2,interaction:{mode:"index",intersect:!1},animation:{delay:t=>t.type==="data"&&t.mode==="default"?250+t.dataIndex*(750/(i.distribution.length-1)):0},scales:{x:{display:!1},y:{display:!1,suggestedMax:10}},plugins:{tooltip:{displayColors:!1,backgroundColor:"rgba(0, 0, 0, 0.7)",caretSize:10,padding:{x:12,y:5},titleAlign:"center",titleMarginBottom:2,titleFont:{weight:"bold"},bodyAlign:"center",bodyColor:"rgb(170, 170, 170)",bodyFont:{size:11},footerAlign:"center",footerColor:t=>`hsl(0, ${t.tooltip.dataPoints[0].parsed.x*11}%, 35%)`,footerMarginTop:2,footerFont:{size:18},callbacks:{title:t=>{const r=t[0].label;return`${r} - ${unsafeWindow.ratingsText?.[r]}`},label:t=>{const r=t.parsed.y;return`${i.votes>0?(r*100/i.votes).toFixed(1):"--"}% (${numFormatCompact.formatTLC(r)} v.)`},footer:t=>{const r=e.find('.summary-user-rating > :not([style="display: none;"]) > [class*="rating-"]').first().attr("class")?.match(/rating-(\d+)/)?.[1];return t[0].parsed.x===r-1?"\u2764":""}}},legend:{display:!1}},onClick:(t,r)=>{if(!r.length)return;const a=r[0].index+1;e.find(".summary-user-rating:not(.popover-on)").trigger("click"),setTimeout(()=>$(`.needsclick.rating-${a}`).trigger("mouseover").trigger("click"),500)}}}function addStyles(){GM_addStyle(`
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