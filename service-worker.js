// Service Worker për Ligjeratat.com
const CACHE_NAME = 'ligjeratat-v3-modern';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/animations.css',
  '/modern-2025.css',
  '/app.js',
  '/modern-filters.js',
  '/manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

// Instalimi - Cache asetet
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache i hapur');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

// Aktivizimi - Pastro cache-in e vjetër
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Duke fshirë cache të vjetër:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

// Fetch - Strategjia: Network First, Cache Fallback
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Nëse përgjigja është e mirë, ruaje në cache
        if (response && response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        // Nëse network dështon, përdor cache
        return caches.match(event.request);
      })
  );
});

// Notification Click Handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  event.waitUntil(
    clients.openWindow('/')
  );
});
