self.addEventListener('install',event =>{
    console.log("[SW] Service worker is installing...")

    event.waitUntill(

       caches.open('chatapp-v1').then(caches=>{
           return caches.addAll([
            '/',
            '/index.html','faviconioc','manifest.json','/faviconioc','/manifest.json','111.png','cat-2.jpg','cat-3.jpg','catLogo.png','Chat.png','animal_background.gif'
            ]);
        })

    );
});

self.addEventListener('fetch',event =>{
    caches.match(event.request.url).then(res => {
        if(res){
            console.log("Intercept with cache",res);
            return res;
        }
        return fetch(event.request);
    })
});