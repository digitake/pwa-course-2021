self.addEventListener("install", (event) => {
    console.log("[SW] Service Worker is installing... v1.1");

    event.waitUntil(

        caches.open('chatapp-v1.1')

            .then((cache) => {

                return cache.addAll([
                    '/',
                    '/index.html',
                    '/icon-192x192.png',
                    '/icon-256x256.png',
                    '/icon-384x384.png',
                    '/icon-512x512.png',
                    '/manifest.json',
                    '/robots.txt',
                    '/favicon.ico',
                    '/Space.jpg'

                ]);

            })

    );
});

self.addEventListener('fetch', (event) => {
    caches.match(event.request.url)
        .then(res => {
            if (res) {
                console.log("Intercept with cache", res);
                return res
            }

            return fetch(event.request);
        }
        )

});