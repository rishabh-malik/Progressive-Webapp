self.addEventListener('install',function(event){
    console.log('service worker installed');
    //waits until cache are saved
    event.waitUntil(
         //caching things
         //static cache
        caches.open('static')
            .then(function(cache){
            // cache.add('/');
            // cache.add('/index.html');
            // cache.add('/src/js/app.js');
            //OR
            cache.addAll([
                '/',
                '/index.html',
                '/src/js/app.js',
                '/src/css/app.css',
                '/src/images/pwa.jpg',
                'https://fonts.googleapis.com/css?family=Raleway:400,700'
        ]);
    }));
    
});

self.addEventListener('activate',function(){
    console.log('service worker activated');
});

self.addEventListener('fetch',function(event){
    event.respondWith(
        caches.match(event.request)
        .then(function(res){
                if(res){
                    return res;
                } else{
                    return fetch(event.request);
                }
        })
    );
});