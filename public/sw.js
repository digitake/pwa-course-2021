
self.addEventListener("install" , event => {
    console.log("[SW] Service worker is installing...v3")

    event.waitUntil(

        caches.open('chatapp-benzchk-v3').then( cache =>{
            return cache.addAll([
                '/',
                '/index.html',
                '/Benz.jpg',
                '/logo192.png',
                '/logo512.png'
            ]);
        })
    );
});

self.addEventListener('fetch' , event => {
    caches.match(event.request.url).then(res => {
        if(res) {
            console.log("Intercept with cache" , res);
            return res;
        }

        return fetch(event.request);
    })
});