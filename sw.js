const CACHE_NAME = 'tracker-v1';
const urlsToCache = [
  './',
  './index.html',
  './storico.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// Installazione
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Recupero dati (Network first, poi Cache se offline)
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
