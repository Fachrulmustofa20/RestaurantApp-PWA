/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
console.log('hello, from service worker');

workbox.core.skipWaiting();
workbox.core.clientsClaim();

if (workbox) console.log('Yay! Workbox is loaded 🎉');
else console.log('Boo! Workbox didn\'t load');

workbox.core.setCacheNameDetails({
  prefix: 'Bresto-PWA',
  precache: 'precache',
  runtime: 'runtime',
});

// eslint-disable-next-line no-restricted-globals
workbox.precaching.precacheAndRoute(self.__precacheManifest);

workbox.routing.registerRoute(
  ({ request }) => request.destination === 'image',
  new workbox.strategies.NetworkFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  }),
);

workbox.routing.registerRoute(
  new RegExp('^https://restaurant-api.dicoding.dev/'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'dicoding-restaurant-api',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [200, 404],
      }),
    ],
  }),
);

// Menyimpan cache dari CSS Google Fonts
workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  }),
);

// Menyimpan cache dari font awesome
workbox.routing.registerRoute(
  /^https:\/\/kit\.fontawesome\.com/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'font-awesome',
  }),
);

// Menyimpan cache untuk file font selama 1 tahun
workbox.routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  workbox.strategies.cacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30,
      }),
    ],
  }),
);

workbox.precaching.cleanupOutdatedCaches();
