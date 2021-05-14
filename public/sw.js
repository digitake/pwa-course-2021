self.addEventListener("install", (event) =>{
    console.log("[SW Service Worker is installng...v1.2");
    event.waitUntil(
        caches.open('chatapp-v1.2')
        .then((cache) =>{
            return cache.addAll([
                '/',
                '/index.html'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) =>{
    caches.match(event.request)
    .then(res => {
        if(res) {
            console.log("Intercept with cache", res);
            return res
        }
        return fetch(event.request);
    })
});