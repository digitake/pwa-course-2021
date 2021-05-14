self.addEventListener("install",(event)=>{
    console.log("[SW] Service Worker is installing. . .");

    event.waitUntil(

        caches.open('chatapp-v1.3').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/icon-192x192.png',
                '/icon-256x256.png',
                '/icon-384x384.png',
                '/icon-512x512.png',
                '/Project/ProAccount/correct.png',
                '/Project/ProAccount/gosignin.jpg',
                '/Project/Prochatroom/backCR.jpg',
                '/Project/Prochatroom/blockCR.png',
                '/Project/Prochatroom/send.png',
                '/Project/Prochatroom/lock.jpg',
                '/Project/Prochatroom/plus.jpg',
                '/Project/Profile/k1.png',
                '/Project/Profile/k2.png',
                '/Project/Profile/k3.png',
                '/Project/Profile/k4.png',
                '/Project/Profile/k5.png',
                '/Project/Profile/k6.png',
                '/Project/Profriend/3Line.png',
                '/Project/Profriend/friendblock.png',
                '/Project/Profriend/fubuki.png',
                '/Project/Profriend/G1.png',
                '/Project/Profriend/G2.png',
                '/Project/Profriend/gogo.png',
                '/Project/Profriend/kanata.png',
                '/Project/Profriend/namebarblock.png',
                '/Project/Profriend/noel.png',
                '/Project/Profriend/pekora.png',
                '/Project/Profriend/rushia.png',
                '/Project/Profriend/Sbarblock.png',
                '/Project/Profriend/Sbaricon.png',
                '/Project/Profriend/suisei.png',
                '/Project/Prologin/boxchat.jpg',
                '/Project/Prologin/register.jpg',
                '/Project/Prologin/sign.jpg',
                '/Project/Proregister/confirmText.jpg',
                '/Project/Proregister/inputText.jpg',
                '/Project/Proregister/newAcount.jpg',
                '/Project/Proregister/passwordText.jpg',
                '/Project/Proregister/registerComplete.jpg',
                '/Project/Proregister/usernameText.jpg',
                '/Project/Prosetting/go-menu.png',
                '/Project/Prosetting/Setting_Pro.png',
                '/Project/Prosetting/setting-block.png'
                
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