
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

        })
    );
});

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
