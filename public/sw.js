var CACHE_NAME = 'my-chatapp-v2';
var urlsToCache = [
'/',
'/index.html',
'/logo192.png',
'/index.css',
'/App.css',
'/Chatbox.css'
];

self.addEventListener('install', function(event) {
    console.log("[sw] Service worker is installing... v2")
    // Perform install steps
event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
    })
);
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
    caches.match(event.request).then(function(response) {
        // Cache hit - return response
        if (response) {
            console.log("Intercept with cache", res);
            return response;
        }
        return fetch(event.request).then(
            function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
                return response;
            }
            var responseToCache = response.clone();
            caches.open(CACHE_NAME)
                .then(function(cache) {
                cache.put(event.request, responseToCache);
                });
            return response;
            }
        );
        })
    );
});
