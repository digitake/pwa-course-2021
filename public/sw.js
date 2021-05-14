
self.addEventListener("install",(event) => {
    console.log("[SW] Service Worker is installing...v1.1");
    
    event.waitUntil(

        caches. open('chatapp-v1.1')
        
        .then((cache) =>{
            
            return cache.addAll([
                '/',
                '/index.html',
                '/PrivateChatRoom.js',
                '/public/icon-192x192.png',
                '/public/icon-256x256.png',
                '/public/icon-512x512.png'
    //การบ้านเพิ่มส่วนนี้เพื่อจัดเก็บแคช
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