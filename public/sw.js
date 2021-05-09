
self.addEventListener('install', event => {
    console.log("[SW] Service worker is installing...V3");

    event.waitUntil(
        caches.open('chatapp-v3').then(cache => {
            return cache.addAll([
                '/',
                '/index.html'
            ]);
        })

    );
});

self.addEventListener('fetch', event =>{
    
    caches.match(event.request.url)
    .then(res => {
        if (res) {
            console.log("Internet with cache",res);
            return res;
        }
        return fetch(event.request);    
    })
});