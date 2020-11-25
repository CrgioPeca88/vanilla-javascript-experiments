'use strict';

//const _version = 'v1';

self.addEventListener('install', event => {
  event.waitUntil(precache());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  
  if(request.method !== 'GET') {
    return;
  }
  event.respondWith(cachedResponse(request));
  event.waitUntil(updateCache(request));
});

async function precache() {
  const cache = await caches.open('v1');
  return cache.addAll([
    '/src',
    '/src/index.html',
    '/src/index.js',
    '/src/styles.css',
    '/src/media-player.js',
    '/src/plugins/auto-play.js',
    '/src/plugins/auto-pause.js',
    '/assets/videos/cp88.mp4',
    '/assets/images/zx10r_2021.jpg' 
  ]);
}

async function cachedResponse(request) {
  const cache = await caches.open('v1');
  const response = await cache.match(request);
  return response || fetch(request);
}

async function updateCache(request) {
  const cache = await caches.open('v1');
  const response = await fetch(request);
  return cache.put(request, response);
}