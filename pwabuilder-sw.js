
self.addEventListener('install', function(event) {
  event.waitUntil(preLoad());
});

var preLoad = function(){
  console.log('[PWA Builder] Install Event processing');
  return caches.open('pwabuilder-offline').then(function(cache) {
    console.log('[PWA Builder] Cached all assets page during Install');
    return cache.addAll([
      '/pwabuilder-sw.js',
      '/index.html',
      '/offline.html',
      '/assets/styles/style.min.css',
      '/assets/styles/style.map.min.css',
      '/assets/scripts/script.min.js',
      '/assets/icons.png',
      '/assets/ads.jpg',
      'assets/images/misc/arrow-left.png',
      '/assets/images/misc/dining-small.png',
      '/assets/images/misc/nav_dropup.png',
      '/assets/images/misc/fids-icon.png',
      '/assets/images/misc/arrow-right.png',
      '/assets/images/misc/map-icon.png',
      '/assets/images/misc/nav_unselected.png',
      '/assets/images/misc/health-icon.png',
      '/assets/images/misc/tours-icon.png',
      '/assets/images/misc/delete-nav.png',
      '/assets/images/misc/dining-icon.png',
      '/assets/images/misc/shopping-icon.png',
      '/assets/images/misc/landing.png',
      '/assets/images/misc/deploy-nav.png',
      '/assets/images/status.gif',
      '/dining.html',
      '/shopping.html',
      '/health.html',
      '/tours.html',
      '/map.html',
      '/fids.html'
    ]);
  });
}

self.addEventListener('fetch', function(event) {
  console.log('The service worker is serving the asset.');
  event.respondWith(checkResponse(event.request).catch(function() {
    return returnFromCache(event.request)}
  ));
  event.waitUntil(addToCache(event.request));
});

var checkResponse = function(request){
  return new Promise(function(fulfill, reject) {
    fetch(request).then(function(response){
      if(response.status !== 404) {
        fulfill(response)
      } else {
        reject()
      }
    }, reject)
  });
};

var addToCache = function(request){
  return caches.open('pwabuilder-offline').then(function (cache) {
    return fetch(request).then(function (response) {
      console.log('[PWA Builder] add page to offline'+response.url)
      return cache.put(request, response);
    });
  });
};

var returnFromCache = function(request){
  return caches.open('pwabuilder-offline').then(function (cache) {
    return cache.match(request).then(function (matching) {
     if(!matching || matching.status == 404) {
       return cache.match('offline.html')
     } else {
       return matching
     }
    });
  });
};