
self.addEventListener('install' , event =>{
    console.log("[sw] Service worker is installing... v2")

    event.waitUntil(
        caches.open(' chatapp-v2').then( cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/logo192.png'
            ]);
        })
    );
});
self.addEventListener('fetch', event =>{
    // check file
    caches.match(event.request.url).then(res => {
        if(res){
            console.log("Intercept with cache", res);
            // has file => push it
            return res;
        }
        // no file => push internet
        return fetch(event.request);
    })
});