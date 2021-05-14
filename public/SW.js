self.addEventListener("install",(event) =>{
    console.debug("[SW] Service Worker installing... v1.2 ");

    event.waitUnit(
        caches.open('chatapp-v1.2').then(cache=>{

            return cache.addAll([
                '/',
                '/index.html'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    caches.match(event.request)
    .then(res => {
        if(res){
            console.log("Interacept with cache",res)
            return res
        }
        return fetch(event.request)
    })
});