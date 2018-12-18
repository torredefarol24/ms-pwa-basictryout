self.addEventListener("install", event => {
  console.log("SW Installed")
  event.waitUntil(
    caches.open("static")
    .then( cache => {
      cache.addAll([
        '/',
        '/index.html',
        '/src/js/app.js',
        '/src/css/app.css',
        '/src/images/pwa.jpg',
        'https://fonts.googleapis.com/css?family=Raleway:400,700'
      ])
    })
  )
  
})

self.addEventListener("activate", () => {
  console.log("SW Activated")
})

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(resp => {
        if (resp){
          return resp
        } else {
          return fetch(event.request)
        }
      })
  )
})
