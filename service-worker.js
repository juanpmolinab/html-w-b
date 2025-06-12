self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('heliwb-cache').then((cache) => {
        return cache.addAll([
          '/nuevoConGrid/',
          '/nuevoConGrid/index.html',
          '/nuevoConGrid/results.html',
          '/nuevoConGrid/style.css',
          '/nuevoConGrid/results.css',
          '/nuevoConGrid/weightBalance.js',
          '/nuevoConGrid/manifest.json',
          '/nuevoConGrid/icons/icon-192.png',
          '/nuevoConGrid/icons/icon-512.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  