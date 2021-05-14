
<<<<<<< HEAD
self.addEventListener("install", (event) =>{
    console.log("[SW] Service Worker is installing...v1.1");

    event.waitUntil(
        caches.open('chatapp-v1.1').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/logo192.png',
                '/logo512.png'
            ]);
=======
self.addEventListener("install", (event) => {
    console.log("[SW] Service Worker is instaling. . .v1.2");

    event.waitUntil(

        caches.open('chatapp-v1.2')

        .then((cache) => {

            return cache.addAll([
                '/',
                '/index.html',
                'coo.jpg',
                'favicon.ico',
                'Logo192.png',
                'Logo512.png',
                'manifest.json',
                'robots.txt'
            ]);

>>>>>>> 8b5db0b92e44a9750c0c0ffe7d02a1ca88efe0c8
        })
    );
});

<<<<<<< HEAD

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
})
=======
self.addEventListener('fetch', event => {

    caches.match(event.request.url)
    .then(res => {
        if(res){

            console.log("Intercept with cache", res);
            return res
        }

        return fetch(event.request);
    }
    )
});
>>>>>>> 8b5db0b92e44a9750c0c0ffe7d02a1ca88efe0c8
