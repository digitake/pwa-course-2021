self.addEventListener('install', event => {
    console.log('[SW] Service worker is installing...');

    event.waitUntil(
        caches.open('chatapp-v3').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/chat.png',
                '/feed.png',
                '/friend_1.png',
                '/friend_2.png',
                '/friend_3.png',
                '/friend_4.png',
                '/friend_5.png',
                '/friend_6.png',
                '/friend.png',
                '/icon-192x192.png',
                '/icon-256x256.png',
                '/icon-384x384.png',
                '/icon-512x512.png',
                '/profile.png',
            ])
        })
    )
});

self.addEventListener('fetch', event => {
    caches.match(event.request.url).then(res => {
        if (res) {
            console.log('interect with canch', res);
            return res;
        }

        return fetch(event.request);
    })
});