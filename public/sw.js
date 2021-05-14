self.addEventListener("install",(event)=>{
    console.log("[SW] Service Worker is installing... v1.1");

    event.waitUntil(
        caches.open('chatapp-v1.2')
        .then((caches) => {
            return caches.addAll([
                "/",
                "/index.html",
                "/logo Icon.png",
                "/add new.png",
                "armprofile.png",
                "back.png",
                "cat.png",
                "choice.png",
                "dice message logo.png",
                "dice.png",
                "friend list.png",
                "info.png",
                "list.png",
                "login icon.png",
                "plus black no bg.png",
                "plus no bg.png",
                "plus.png",
                "ppp.jpg",
                "profile.png",
                "register icon.png",
                "rut.png",
                "search.png",
                "share.png",
                "spin.png",
                "logoIcon192.png"
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    caches.match(event.request.url)
    .then(res => {
        if(res) {
            console.log("Intercept with cache", res);
            return res
        }
        return fetch(event.request);
      }
    )
});