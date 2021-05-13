self.addEventListener("install",(event)=>{
    console.log("[SW] Service Worker is installing. . .");

    event.waitUntil(

        caches.open('chatapp-v1.2').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/icon-192x192.png',
                '/icon-256x256.png',
                '/icon-384x384.png',
                '/icon-512x512.png'
            ]);
        })
    );
});


self.addEventListener('fetch', event => {

    caches.match(event.request.url)
    .then(res => {
        if(res) {
            console.log("Intercept with cache", res);
            return res
        }
        return fetch(event.request);
      }
    )
});