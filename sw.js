
const CACHE="fm-apocalipsis-cache-v2";
const assets=["./","./index.html","./logo.png","./manifest.webmanifest"];

self.addEventListener("install",e=>{
e.waitUntil(caches.open(CACHE).then(c=>c.addAll(assets)));
});

self.addEventListener("fetch",e=>{
e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));
});
