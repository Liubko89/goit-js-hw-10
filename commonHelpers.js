import{f as c,i as u}from"./assets/vendor-651d7991.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const i=document.querySelector("[data-start]");document.querySelector("[data-days]");document.querySelector("[data-hours]");document.querySelector("[data-minutes]");document.querySelector("[data-seconds]");i.addEventListener("click",d);const l={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(o){if(o[0],o[0]<=Date.now()){u.show({iconUrl:"./img/octagon.svg",theme:"dark",message:"Please choose a date in the future",messageSize:"16px",messageColor:"white",backgroundColor:"#EF4040",position:"topRight",timeout:1e4}),i.disabled=!0;return}else i.disabled=!1}};c("#datetime-picker",l);function d(){}
//# sourceMappingURL=commonHelpers.js.map
