self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('first-app')
      .then( cache => {
        cache.addAll([
          '/',
          '/index.html',
          '/src/css/app.css',
          '/src/js/app.js'
        ])
      })
  )
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(res => res)
  )
})