
self.addEventListener('install' , event =>{
    console.log("[SW] Service worker is installing . . .v3")

    event.waitUntil(
        caches.open('chatapp-v3').then ( Cache => {
            return Cache.addAll([
            '/',
            '/index.html'
            ]);
        })
    );
});

self.addEventListener('fetch' , event => {

    caches.match(event.request.url)
    .then(res => {
        if(res){
            console.log("Inetrcept with cache" , res);
            return res;
        }
        return fetch(event.request);
    })
});