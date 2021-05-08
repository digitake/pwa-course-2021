
self.addEventListener('install', event => {
    console.log("[SW] Service worker is  installing ... v3")

    event.waitUntil(

        caches.open('chatapp-V3').then((Cache)=> {
            return Cache.addAll([
                '/',
                '/index.html',
                '/Logo.png'
            ]);
        })
    );
});

self.addEventListener('fetch' , event => {
    caches.match(event.request.url).then(res => {
        if(res) {
            console.log("intercept with cache",res);
            return res;
        }

        return fetch(event.request);
    })
})