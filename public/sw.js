
self.addEventListener('install', event => {
    console.log("[SW] Service worker is installing...V3");

    event.waitUntil(
        caches.open('chatapp-v3').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                'chat.png',
                'cool5.png',
                'cool4.png',
                'favicon.ico',
                'logo192.png',
                'logo512.png',
                'friend.png',
                'logo.png',
                'statusOnline.png',
                'statusOffline.png'
            ]);
        })

    );
});

self.addEventListener('fetch', event =>{
    
    caches.match(event.request.url)
    .then(res => {
        if (res) {
            console.log("Internet with cache",res);
            return res;
        }
        return fetch(event.request);    
    })
});