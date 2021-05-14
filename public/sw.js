
self.addEventListener('install' , event =>{
    console.log("[SW] Service worker is installing . . .v3")3

    event.waitUntil(
        caches.open('chatapp-v3').then ( Cache => {
            return Cache.addAll([
            '/',
            '/index.html'
            ]);
        })
    );
});