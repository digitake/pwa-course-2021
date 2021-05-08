
self.addEventListener("install",(event) => {
    console.log("[SW] Service Worker is installing...v1.1");
    
    event.waitUntil(

        caches. open('chatapp-v1.1')
        
        .then((cache) =>{
            
            return cache.addAll([
                '/',
                '/index.html'
            ]);
        })
    );
});

self.addEventListener('fetch',(event) =>{
    caches.match(event.request.url).then(
        res =>{
            if(res){
                console.log("Intercept with cache",res);
                return res
            }

            return fetch(event.request);
        }
    )
});