self.addEventListener('install',event => {
    console.log("[SW] Service worker is installing... v1");
    event.waitUntil(
        caches.open('chatapp-v1').then((caches)=>{
            return caches.addAll([
                '/',
                '/index.html',
                '/icon-192x192.png'
            ]);
        })

    );
});
self.addEventListener('fecth',event => {
    caches.match(event.request).then(res => {
        if(res){
            console.log("Intercept with cache", res);
            return;
        }
        return fetch(event.request);
    })
})