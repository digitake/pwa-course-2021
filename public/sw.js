self.addEventListener("install", (event) => {
    console.log("[SW] Service Worker is installing...v1.1");

    event.waitUntil(
        caches.open('Mango Chat').then((cache) => {

            return cache.addAll([
                '/',
                '/index.html'
            ])
        })
    )
})
