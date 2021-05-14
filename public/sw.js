
//ทดลองดูว่า Service Worker install สำเร็จไหม

self.addEventListener("install", (event) =>{
    console.log("[SW] Service Worker is installing... v1.2")

    event.waitUntil(

        caches.open('chatapp-v1.2')

        .then((cache) => {

            return cache.addAll([
                '/',
                '/index.html'
            ]);
            
        })

    );
});



self.addEventListener('fecth', (event) =>{

    caches.match (event.request)
    .then(res => {
        
        if(res) {
            console.log("Intercept with cache", res);
            return res
        }
        
        return fetch(event.request);
    })
    
});
