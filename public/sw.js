self.addEventListener("install",(event)=>{
    console.log("[SW] Service Worker is installing. . .");

    event.waitUntil(

        caches.open('chatapp-v1.2').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html'
            ]);
        })
    );
});