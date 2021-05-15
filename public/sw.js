self.addEventListener("install", (event) =>{
    console.log("[SW] Service Worker is installing... v1.2")

    event.waitUntil(
        caches.open('chatapp-v1.2')

        .then((cache) => {

            return cache.addAll([
                '/',
                '/index.html',
                '/friend-list',
                '/menu',
                '/Mangosetting',
                '/AccountSetting',
                '/FriendSetting',
                '/AdvanceSetting',
                '/NotificationSetting',
                '/GameSetting',
                '/profile',
                '/Post',
                '/Friend',
                '/Image',
                '/Video',
                '/Game',
                '/Chatbox',
                '/Profile.png',
                '/mango-64.png',
                '/mango-192.png',
                '/mango-512.png',
                '/mango.png',
                '/mango64.png',
                '/profile-250.png',
                '/back-32.png',
                '/Profile-img.png',
                '/maskable_icon_x72.png',
                '/maskable_icon_x192.png',
                '/maskable_icon_x512.png'
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
