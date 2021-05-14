self.addEventListener("install" , (event) => {
    console.log("[SW] Service worker is installing... V1.1");
    event.waitUntil(
        caches.open('chatapp-v1.1').then((caches) =>{
            return caches.addAll([

                '/',
                '/index.html'
            ]);
        })
    );
});


self.addEventListener('fetch',(event) => {
    caches.match(event.request).then(res => {
        if(res){
            console.log("Intercept with cache" , res);
            return res
        }

        return fetch(event.request);
    })
});