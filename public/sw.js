self.addEventListener("install", (event) => {
  console.log("[SW] Service Worker is installing... v1.2");
  
  event.waitUntil(
      
      caches.open('chatapp-v1.2')
      .then((caches) => {

          return caches.addAll([
              '/',
              '/index.html',
              '/public/favicon.ico',
              '/src/back_button.png',
              '/src/background_01.gif',
              '/src/Chatbutton.png',
              '/src/friendList_button.png',
              '/src/icon2.png',
              '/src/shop_button.png'
          ]);
      })

  );
});


self.addEventListener('fetch', (event) =>{
  caches.match(event.request)
  .then(res => {
      if(res){
          console.log("Intercept with cache", res);
          return res
      }

      return fetch(event.request);
  })
})
  