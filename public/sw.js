
self.addEventListener('install',event=>{

    console.log("[SW] Service worker is installing... V.1.2")

    event.waitUntil(
    
        caches.open('PAP-V.1.2').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/icon-192x192.png',
                '/icon-256x256.png',
                '/icon-384x384.png',
                '/icon-512x512.png',
                
            ]);
          
        })
    );


});

self.addEventListener('fetch',event =>{
    caches.match(event.request.url).then(response=>{
        if(response){
            console.log("Intercept with cache",response);
            return response;
        }
        return fetch(event.request);
    })
});

