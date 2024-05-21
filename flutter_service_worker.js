'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"version.json": "23e9d24d5b36279cbfede1d4ebb467c0",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"manifest.json": "dae412191356a938d12aec62db4d6567",
"main.dart.js": "5fec2bbe9243fe8d9ffa945097204c88",
"index.html": "dacb659c1e2a8786d736a6f9de78f1c4",
"/": "dacb659c1e2a8786d736a6f9de78f1c4",
"assets/FontManifest.json": "e75df30dc526b6ad31e3a71dfd4900fe",
"assets/AssetManifest.json": "a9ebca43f48012f78f7a32b00afb9efd",
"assets/fonts/MaterialIcons-Regular.otf": "a5076314ea0cf042bb289cc37b9d3a83",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin.json": "eb5d245190c719174faf517a55596472",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/NOTICES": "f9b723f7b8f6f8bdc726489f4451a82e",
"assets/AssetManifest.bin": "e8fdf0422a198c0fc36bb33a57f8319b",
"assets/assets/icons/night.png": "bd8a4bf10fdeba422950f16b1a673665",
"assets/assets/icons/sunset.png": "04648b251c6b7193b5d730c8bcc66623",
"assets/assets/icons/sunrise.png": "aa98ce9eee8f774a9621acacc685a2a5",
"assets/assets/icons/moonrise.png": "b781c40fc1190ffb4500ed724943da5c",
"assets/assets/icons/pressure.png": "97356a38680c4cd5581d88356f154bda",
"assets/assets/icons/day.png": "00744019446eaff8295eea60e6ddb9d6",
"assets/assets/icons/moonset.png": "f07e96846493628569a13d34b39d42b2",
"assets/assets/icons/humidity.png": "3804b12abf34c3f0f4ed54ab3c8f03e3",
"assets/assets/icons/clouds.png": "4c6399e70be76e4272c36cc732bf2485",
"assets/assets/icons/winddegree.png": "b320bca0893cad92f8bf64236df72eb5",
"assets/assets/icons/windspeed.png": "55b6ee8c473952bde995a7f340f1a6c8",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/weather/01d.png": "6a7d9f787a87f83090010986f49b6de9",
"assets/assets/weather/50d.png": "e820e76eec5a9d47298de19b850328aa",
"assets/assets/weather/11d.png": "62d423feaef03378270aa03d6c1aaf7f",
"assets/assets/weather/10d.png": "7b84187f2a4f8e133e23716a5a4fad0e",
"assets/assets/weather/02n.png": "92ee5ac3260778fecaa2909d24392324",
"assets/assets/weather/03n.png": "f78f82de403ff4ebfbcc290ea1eb04b7",
"assets/assets/weather/01n.png": "54f5016d12c859a5dcadb0cc4142bd0b",
"assets/assets/weather/03d.png": "f78f82de403ff4ebfbcc290ea1eb04b7",
"assets/assets/weather/50n.png": "d97b7cf8b97863f74515627fc17282ba",
"assets/assets/weather/10n.png": "c3ccb495e81f36f0a0f1f14c71ff9657",
"assets/assets/weather/13n.png": "3c527a68b4821e67fe01ae1ac7d00120",
"assets/assets/weather/09n.png": "c3ccb495e81f36f0a0f1f14c71ff9657",
"assets/assets/weather/13d.png": "3c527a68b4821e67fe01ae1ac7d00120",
"assets/assets/weather/02d.png": "26ba54ea066a854140f7fd8c3a17a19b",
"assets/assets/weather/09d.png": "7b84187f2a4f8e133e23716a5a4fad0e",
"assets/assets/weather/11n.png": "6b27dda3a5fa3b9d596b8cbb2c34c166",
"assets/assets/weather/04d.png": "b8bc18062b81dd5d8c53b908177e8e9a",
"assets/assets/weather/04n.png": "b8bc18062b81dd5d8c53b908177e8e9a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
