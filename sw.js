if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let d={};const l=e=>s(e,o),t={module:{uri:o},exports:d,require:l};i[o]=Promise.all(n.map((e=>t[e]||l(e)))).then((e=>(r(...e),d)))}}define(["./workbox-7369c0e1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-6b3c7233.css",revision:null},{url:"assets/index-d112f74c.js",revision:null},{url:"index.html",revision:"2ee47133a291d67511d95b044dec3a71"},{url:"registerSW.js",revision:"d0b4c69af3d0bbe78834f7bd7c8f1f59"},{url:"logo32.png",revision:"0eaf632e4b668ba6f6415edaa8184bc0"},{url:"logo64.png",revision:"6e46829d27188a13e28da416cfd230d8"},{url:"logo128.png",revision:"9aa83843d4f4c0e39cd578a18d65d4e3"},{url:"logo256.png",revision:"31af58d9c03b2909b8084677ed4ac5b6"},{url:"manifest.webmanifest",revision:"a336ffab61f7b31a320a78cd8244d5e3"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));