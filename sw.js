const CACHE_NAME = 'zastopo-v1';
const ASSETS = [
  '/AASTopo/',
  '/AASTopo/index.html',
  '/AASTopo/manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
];

// التثبيت: تحميل الملفات للتخزين المؤقت
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// التفعيل: جلب الملفات من الكاش عند انقطاع النت
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
