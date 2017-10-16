self.addEventListener('install',function(){
    console.log('service worker installed');
});

self.addEventListener('activate',function(){
    console.log('service worker activated');
});