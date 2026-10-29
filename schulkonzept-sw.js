/* Offline-Speicher für die Schulkonzept-App (nur diese Dateien) */
const SPEICHER = "schulkonzept-v2";
const DATEIEN = ["schulkonzept.html", "schulkonzept-icon.png", "schulkonzept.webmanifest"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(SPEICHER).then(c => c.addAll(DATEIEN)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(k => Promise.all(k.filter(n => n.startsWith("schulkonzept-") && n !== SPEICHER).map(n => caches.delete(n))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  const name = url.pathname.split("/").pop();
  if (e.request.method !== "GET" || url.origin !== location.origin || !DATEIEN.includes(name)) return;
  /* erst das Netz (dann ist die App aktuell), ohne Netz der Speicher */
  e.respondWith(fetch(e.request).then(r => {
    if (r.ok) { const kopie = r.clone(); caches.open(SPEICHER).then(c => c.put(e.request, kopie)); }
    return r;
  }).catch(() => caches.match(e.request, {ignoreSearch: true})));
});
