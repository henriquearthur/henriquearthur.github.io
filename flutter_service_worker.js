'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/main.dart.js.deps": "1a862082640a0b0646345a7480752982",
"/assets/LICENSE": "e4c83b509d8e6c8bec3f820672dbb448",
"/assets/assets/images/projects/icons/congressos_sereducacional.png": "54cc1c93144224fdb722ec4af2820eb1",
"/assets/assets/images/projects/icons/congressos_unama.png": "7fe2185e1e94a5f9875360f45b0143f9",
"/assets/assets/images/projects/icons/passefacil.png": "fc2d343b9cd48508fae73beb4c8d4350",
"/assets/assets/images/projects/icons/thehits.png": "e94260dbed3f1b47e57ad53c7b1718b5",
"/assets/assets/images/projects/icons/superpagg.png": "77825bb496cc064a29ef7a4ab7a8ae30",
"/assets/assets/images/projects/icons/simulador_timbeta.png": "53af587bdfb3bf92c9e527e7168364e8",
"/assets/assets/images/projects/icons/prohabbo.png": "904ddafeafe09952b0eef6a46f093092",
"/assets/assets/images/projects/icons/papo_e_midia.png": "977fd103b666bf9bed821e3c31a9d7a7",
"/assets/assets/images/projects/icons/icehabbo.png": "a3a58d1fb33ad2a32d38a0e3253e564c",
"/assets/assets/images/projects/icons/idhabbo.png": "76378d9a4089a92692e027cba847cfa0",
"/assets/assets/images/projects/icons/prohabbo_v4.png": "79428bab5eeb5f6edc8dc45ae17f8ebb",
"/assets/assets/images/projects/screenshots/manu_hbl.png": "ee56553e7da0025bf465140c8653500e",
"/assets/assets/images/projects/screenshots/bobbabr.png": "3b9b2f53e275347ad5e18afa3756572b",
"/assets/assets/images/projects/screenshots/papoemidia.png": "046afcc792818f076bc73d3ca573aff0",
"/assets/assets/images/projects/screenshots/cooeebeat.png": "38033d8b9a8aaccb2aaff9289e2f1e9c",
"/assets/assets/images/projects/screenshots/cooeetube.png": "3b403e44b4f6e3c82451077565336f2b",
"/assets/assets/images/projects/screenshots/thehits.png": "9ce6c73bc7a1062d23614525644d7fe6",
"/assets/assets/images/projects/screenshots/manu_habboz.png": "afd4c7c9b9a76b90515bf2c959751f11",
"/assets/assets/images/projects/screenshots/superpagg.png": "64f953089a5b005dd3ef2c7fe19c443e",
"/assets/assets/images/projects/screenshots/whispers.png": "7b57ee8e8f0512a75d220b8c0e5e6f2e",
"/assets/assets/images/projects/screenshots/prohabbo.png": "bc74a77aa91f73519f85b80b0d6a6356",
"/assets/assets/images/projects/screenshots/kibboa.png": "a4d0d806e68a48fddcc79d64c6f8d046",
"/assets/assets/images/projects/screenshots/cooeenection.png": "5ee744dd2b444201389151434ca50ade",
"/assets/assets/images/projects/screenshots/habboz.png": "c6c4c086ae9d8d3e1e136b67187ae23c",
"/assets/assets/images/projects/screenshots/thebobba.png": "e1f6b2841527ee76e0337fa316d5dafe",
"/assets/assets/images/projects/screenshots/pixelaria.png": "bd686088b388e61535bcbe57c048eb37",
"/assets/assets/images/projects/screenshots/icehabbo.png": "5c827b040767d5f36f66b63474e2bf24",
"/assets/assets/images/projects/screenshots/idhabbo.png": "e9ebf5d61ce52f2faac43ce23a2b59c2",
"/assets/assets/images/projects/screenshots/prohabbo_v4.png": "d60e68f6c8387770811a60a8ad5d2e5b",
"/assets/assets/images/avatar.png": "3ef0cc2322258a1ec44b1116b35f2760",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "bdd8d75eb9e6832ccd3117e06c51f0d3",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d21f791b837673851dd14f7c132ef32e",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3ca122272cfac33efb09d0717efde2fa",
"/assets/AssetManifest.json": "11111f52b654ae6b2922d3356c2abfa6",
"/assets/FontManifest.json": "5fa2baa1355ee1ffd882bec6ab6780c7",
"/index.html": "ece4672ff5a2235069a63626896f8976",
"/main.dart.js": "38e7df59a68ab95d3026f00ba727da8c"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
