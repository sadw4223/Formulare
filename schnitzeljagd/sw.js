// Speichert die Schnitzeljagd beim ersten Öffnen komplett auf dem Gerät – danach läuft sie auch ohne Internet.
// Texte (index.html, stationen.js, peilungen.json) kommen, wenn möglich, frisch aus dem Netz (höchstens 2,5 s warten), sonst aus dem Speicher.
// Alles andere kommt aus dem Speicher. Ändert sich VERSION (setzt bauen.py), wird alles neu geladen.
const VERSION = "36aa358816";
const CACHE = "schnitzeljagd-" + VERSION;
const DATEIEN = ["./", "index.html", "stationen.js", "logo.png", "vendor/aframe-v1.5.0.min.js", "vendor/mindar-image-aframe.prod.js", "targets/stationen.mind"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE)
    .then(c => c.addAll(DATEIEN.map(u => new Request(u, { cache: "reload" })))
      .then(() => c.add(new Request("peilungen.json", { cache: "reload" })).catch(() => {})))   // gibt es erst nach dem Einmessen
    .then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(namen => Promise.all(namen.filter(n => n.startsWith("schnitzeljagd-") && n !== CACHE).map(n => caches.delete(n))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request; if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin === location.origin) {
    const frisch = req.mode === "navigate" || url.pathname.endsWith("/") || /\/(index\.html|stationen\.js|peilungen\.json)$/.test(url.pathname);
    e.respondWith(frisch ? netzZuerst(req, url) : speicherZuerst(req, url));
  } else if (/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) {
    e.respondWith(speicherZuerst(req, url));
  }
});
async function netzZuerst(req, url) {
  const c = await caches.open(CACHE), schluessel = url.origin + url.pathname;
  const netz = fetch(req).then(a => { if (a.ok) c.put(schluessel, a.clone()); return a; });
  try {
    return await Promise.race([netz, new Promise((_, nein) => setTimeout(() => nein(new Error("langsam")), 2500))]);
  } catch (err) {
    const gespeichert = await c.match(req, { ignoreSearch: true }) || (req.mode === "navigate" ? await c.match("./") : null);
    return gespeichert || netz;
  }
}
async function speicherZuerst(req, url) {
  const c = await caches.open(CACHE);
  const gespeichert = await c.match(req, { ignoreSearch: url.origin === location.origin });
  if (gespeichert) return gespeichert;
  const a = await fetch(req);
  if (a.ok || a.type === "opaque") c.put(req, a.clone());
  return a;
}
