
self.addEventListener('install', event => {
    console.log("[SW] Service worker is installing...V3");

    event.waitUntil(

        caches.open('Chatapp-V3').then( cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/Logo.png'
            ]);
        })
    );
});
self.addEventListener('fetch', event =>{
    caches.match(event.request.url).then(res => {
        if(res) {
            console.log("Intercept with cache", res);
            return res;
        }

        return fetch(event.request);
    })
});
