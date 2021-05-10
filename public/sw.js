self.addEventListener("install",(event) => {
    console.log("[SW] Service worker is installing... v1.2");

    event.waitUntil(

        caches.open('pwa-appv1.2').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html'
            ]);
        })
    );
});

self.addEventListener('fetch',(event) => {

    caches.match(event.request.url).then(res=> {
        if(res){
            console.log("Intercept with cache",res);
            return res
        }

    return fetch(event.request);
    })
});