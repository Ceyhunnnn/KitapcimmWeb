'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "be6cab536b90650bf1df9b115867ca70",
".git/config": "a132fb9c8b95cef4a36e1f7b24c31661",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "610cb2c0dc9735183b7360df479d70fb",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "52c8d6a51df88ca6194ebd20ab848b51",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0798a0eea18c1e0845bd86cdd2079956",
".git/logs/refs/heads/master": "0798a0eea18c1e0845bd86cdd2079956",
".git/logs/refs/remotes/origin/master": "0009dee746715160bb7d69e72defcebe",
".git/objects/02/17175409be769fd71d6506bd287e710ca3bb32": "24b22e0d8053aedcfee4b59702970214",
".git/objects/06/c92895355a7c554a9cf50e58211a2530f67d56": "b9c8028500cef6f284d9f3a6b40792fc",
".git/objects/0d/3fa8e0374d32be67bf499b0dd7406de1f1fc33": "f5c6bf2b645228ab2fad1d544840dce1",
".git/objects/10/9a5e24b7fae8880a4dce777dc86a95e419e745": "e14b98e21d3f70fe73831660fde10615",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/16/3e8bdac84cc34c6286a1f10fe8fbdbe7805dda": "954fb19b9eaffb553623c000f910e3fd",
".git/objects/17/13b3457b0c7ab0e5acf500ab49d904837319d9": "680d1d702d720c6ca3ed99c87c8de88f",
".git/objects/17/e698340366812d2b7d7f631f79cd7116753a02": "3bf81b741c2e947437edf283b9e6e24c",
".git/objects/19/5b859ba21517026659caca49cc79cc1201be80": "3a73d578099fd0e822591e1481d9a5e8",
".git/objects/1b/3c35d05f9309af6acead4a3bb6fd31e3863566": "47faf2a4722451243d4fe09ff5a2f819",
".git/objects/20/547d37a70c7c885eaa011118c45ca164c4f879": "5c535d193f49fd61351bb7d2617f63c1",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/21/e8f0645fe3399a12d8ca2927fa7eddb93d1f57": "ac30e12705bc4c30485146973e6c35a7",
".git/objects/26/c2ca946a5fa19632774196dee903daa2cf804e": "d40700bc2331fa5f8353aa8f92b240e2",
".git/objects/26/c976bbefa7ecd7232846896a53b2610150b246": "192fdf92a6f4b62b9de232b376e31820",
".git/objects/28/1a612e4146381a201201023f1ecfa8bb5919fc": "847477a5a5f2376b488fb2017a22f881",
".git/objects/28/9c4b5db5a4521bd137a1ff449b3e8701f1fe9e": "98b308e98077fefdb7de932f44f74c7c",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/4ada4d38f39028da597c7da8581f4e2b6824aa": "ed6c25378b836385e205fc282660ee55",
".git/objects/2e/4a2eaef67b88373450887a0842a82579c05268": "6c43c4b4e5ae4000eb3d0780e6e6b0e5",
".git/objects/2e/bdf152b7aa35ddc5fd4635f3325bb9873f4bd9": "8bafd5799235e74a82940435b46ddf44",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/fc5e6437cb1dcf57350ab511d163b1e1b4d7a3": "fc5465674ab4e8ea145386c887b8be99",
".git/objects/33/5d9f594ef32952c3abd69d40c69238bb68ba6a": "e1d666f5de1326053efff10f516d2add",
".git/objects/36/a70c8e0aa0772bdfc2ca29a79435c25d4207b1": "f3fb201d32bde0cf4f258ab272b7af46",
".git/objects/38/72e4f860bc436e7c3e99dca788626095a713a9": "42ec659a50c99b32d6ce3f35fb431c4f",
".git/objects/3c/24fb311f67eb19563616c3fa63a1dfec52fe3c": "0d2c23064bd5ccbc044480e37ec8213b",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/42/97ccc768bc33414cf54d93970e38f7946a837f": "731c7414b9a4f4f63c7e751917f5c942",
".git/objects/43/5116009fd87d901bf13007eb3b7756930b595e": "61f6341d0716b20b973451aae4ec49a2",
".git/objects/49/9068a9aa16b102b2cd8f4b2f40681b45ef523a": "dbc2fd2950cf602a0656d664222e3b92",
".git/objects/49/bc538997d339e9a507916c343ee466403de32f": "accb144e03f134bc053345e4cb1b6315",
".git/objects/4d/e60ebe53c63fd12f34151fc4689225938766cd": "8a01f23adff61a02cfdaf6f3a4e8cd6e",
".git/objects/4f/da383077f5eec11cb0c51d45271e9678a16eac": "a13eb0abef82677d326e8bf6c57bbbfe",
".git/objects/57/bf4a973da7fbd066fb025c554e4c5fd14b6be9": "17871a28552e0a57870f6d80bfaac6cc",
".git/objects/5c/6bd6e1e7c2b72f6560fd2e78cd98f5bfcbc48a": "bb1064332393830c0e1df41e9b35d834",
".git/objects/5e/99c73968493e9df4cc733aa2a3895bce470444": "ce4e96419e507dbce443ca74b228e231",
".git/objects/5f/0510f86d15601c0e1ff1cafff1f84dc7d0d2ff": "82b68be40abadce7699de7a87d9acdd0",
".git/objects/5f/d90a8213dfde85a34700bfd00650e47059fc99": "fb25e95805ab48ce9f93c87fbbd49cbb",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/6c/40151149a9fee1906488349036b51fcd9d61b6": "07b2247bed7cec21a219b29c25a925da",
".git/objects/72/3e5cd7141ffdf09cf4f409e4e0cce5d9df3f81": "7575aeb321d1a40b678fb0fa65b6bf0d",
".git/objects/77/0855e708a66ac54056fbe558a5b9ce6b10c4e0": "9514fb3a0de6b126e599b426cd886b17",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/7e7d6dbcc4036c722a0820998ae9979a414e16": "7a17b3f15fb0194b692a1a355e653188",
".git/objects/7c/8d88849d08c1f102c85c7f1bda99cc51eb10de": "822389cd08ffd4cf328e2944bf3c4fd7",
".git/objects/7e/caea7633111853106dd16c5ef7d28f6f60e7f6": "d818e1e19dd7be540d44e40ba06a4b8b",
".git/objects/80/2b9a3b5a30a715ce37c2075d0cc14339b34af9": "e53a5d221c07b869e6b40bf43869a172",
".git/objects/84/a9b5a2b09943f2aaf605c9c2239f287922b09a": "5a47d6de4b0db17854796614f4816845",
".git/objects/87/d1e751603e17ff4548cf5f7af4edb41a35d38a": "18274306a6f4832599171bd3b6514193",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/6b9cc0deedb7dc9bf555da103ed3dc5ed1897d": "f9c44dce77a9ae60e9b1a2786968c9df",
".git/objects/93/677ee070d01528d0dbbab783b95074e75b471b": "7e77005de30039e37a670b670cf13198",
".git/objects/a1/02bd5b8ba2318cf7ae4a417687a7164ef99a16": "1697a1460d287fab1b9ed018101a658b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/42c7f0c55f2656a2a9a31d319865d4eb27595c": "79b39f9294510a9a70aaa52c48c2c313",
".git/objects/ab/6f2cf4eb619bcbf7073e6abcaa410d766d7ff1": "853c0f39c302a2a62178e184e0561fdc",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ad/08a98d4ef4e5c2675c31131e799bed836fb110": "cbab68cbebe073956764540454442d97",
".git/objects/b0/d97e9e56acd7ebf30e115732531f704a1464e5": "33e02055ec9b43a607bbbbe19533cfd3",
".git/objects/b4/6c3242f07bfab6dcd336f4ba8113f046e1b0f5": "b9f7243a3f20c94cedde425f03604e16",
".git/objects/b4/de10a71d235053e550109494118d24729673e4": "6e9f2c4417563f3c98383867f92ecb9e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/f257f1f0dc319fc192c8d6f8f94628adcd65d9": "76ab2d66d67b71e06f955e2bc46fab30",
".git/objects/bc/0c0fe1e7463fe20c6fc8e1eb5f20f97cfe9494": "3583fcaa2ab03b9649b53e4fc8b934d6",
".git/objects/bd/6e57cd13529362bf767c134efab22c45f38535": "946e3fd09ad0a65f293b38df7d40e4b9",
".git/objects/c1/bf4d409d74c50de67f12200f0da0f0ca696b12": "273fc5b705d481f0347a0f0651a0235d",
".git/objects/c2/3fafbd721b049195f69a4e96a20cd659e87fb1": "676788bbfb7157288d072873e2cef701",
".git/objects/c3/72a91c6f54e3db4bf126f3d6582ffd763f6f47": "ea01d2d460f389d19e4995cf74079870",
".git/objects/cb/078e199f245839d7011d6744a32bef3540171b": "af12f78afa27be8a3bd9fae1a218abc0",
".git/objects/d3/f56e1b74f8d96c433b4f7e975772f2cc87e885": "a726659fb2e71c980c6beb4bfc3c6634",
".git/objects/d7/80e33d64e9d8d453e5812618d60f18e9b697e7": "af0be1766d46a504a08bd842ad843992",
".git/objects/d9/5a9dd316bb190d1ed4b649b1a651d350db1505": "912eb7e217295ca2eb21e920b29dccf8",
".git/objects/db/0dd5e6119a4f02dfad3dc4a4aae9481bcdc136": "4d4fb06ae23ff01554a2c3d4f6a47054",
".git/objects/dd/2a6749939eea6742ee610d950fef4cc9ba6194": "8b5a42bd7f93b12216ac4b9f81d03d1f",
".git/objects/de/4cd0873baa97b0fba74f681eb6baa3d7b1acd2": "74678aec8216a4586b7699a20aa232f7",
".git/objects/e4/8c4b82c877a33c5d59ce3b92b0ffb2502bcdea": "004652809233b7b10cb2da78743b1b6c",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/7bc7b14e19b4d824ddd8d581a4df12646e4414": "dce23561c8ef31f5865e16bf3b89e3f2",
".git/objects/e9/147cd7ae40d5915f5b18ba7b77717431e705f8": "5019e0b0626246f41ae3032e99cbc9c0",
".git/objects/ea/1218152fc3676efc910d0c0edf5866c471827f": "4b43f1fca01b6b30e14309f1dee697d8",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f2/88a9799c097cd91793704c0a9fb668708876f8": "c0e025c53f776bade1dab89bb0dba5a8",
".git/objects/f4/50d162c3de692cb096ec8bd2ceed1a66031465": "dc2dde4f44ed85986ed9b3aae753c1b5",
".git/objects/f4/6ea0d7d1fa2826b4b6aaa39b4ab223d6b6ef25": "0470acfcf70aef32ff380f1742dc39d0",
".git/objects/f4/f9091aa6efeb0fa79bee5b287835efa84a6eaf": "e56ddec91392c225c69ceab74da712be",
".git/objects/f8/018608affe35d809bad0637a8c5b77018f8fc7": "5960b4c6ca618adb16ce41078514b21e",
".git/objects/fb/c6b0c3d6a1615976a743a6960663da21641769": "ef218b30c3bbdde3d931cc3e9d280ff2",
".git/objects/fc/1707dd482dc6cacd60868b165a72148ce776d8": "e5ffd4852c27ca70b133ced21c1e8862",
".git/objects/fd/9e10f8d90038cefc1993fce7dfd24d7c7429e8": "97fa57bb3b31947178a12ba477bb8100",
".git/ORIG_HEAD": "81e7a130ef745c8c5da76873326baf74",
".git/refs/heads/master": "4d7daf2d594093dc13e8731721c1ae92",
".git/refs/remotes/origin/master": "4d7daf2d594093dc13e8731721c1ae92",
"assets/AssetManifest.json": "e75a7dc7713bd685b32dc6ab53149e92",
"assets/assets/fonts/Cinzel-Black.ttf": "978c5e3a8b70d3169531433831435f74",
"assets/assets/fonts/NanumBrushScript-Regular.ttf": "b1ce4cd13e96c14fa23147273b48d523",
"assets/assets/fonts/NovaRound-Regular.ttf": "62c5254c34d821c732659c4b62157ec3",
"assets/assets/images/anasayfa/anaSayfa.jpg": "9501fe71d50649821125aa69b8addd92",
"assets/assets/images/anasayfa/dilek.png": "abba718afc467ce17eb5911727f57df7",
"assets/assets/images/biyografi/bilimadam%25C4%25B1.jpg": "756d1b5dee806bcc85509e9248a93abd",
"assets/assets/images/biyografi/elon.jpg": "7f9008fb551a9b643705f25985de819d",
"assets/assets/images/biyografi/jobs.jpg": "5d4b981208aeef6a12ef24302f95d7eb",
"assets/assets/images/hikaye/balik.jpg": "1dc7a88d3a172a17ef97ed2071e378a7",
"assets/assets/images/hikaye/beyazdis.jpg": "285b39cf86630707d73df12acc37b18b",
"assets/assets/images/hikaye/lafontaine.jpg": "5fafe63e47ca3d1fe5b219f0d3620518",
"assets/assets/images/logo/anasayfa.jpg": "d23357f287955e2c822328cd60697027",
"assets/assets/images/logo/Logo_uyg.png": "50c43aa6e356a31bcaffb9ff09cc8c62",
"assets/assets/images/roman/calikusu.jpg": "0d6994c077a216e6fd332717faefacb1",
"assets/assets/images/roman/dokuzuncu.jpg": "bc03406c3fafbe9a84b7d0427abe48c1",
"assets/assets/images/roman/h1.png": "eb54e2d0070deeed0ae0f85443601bd1",
"assets/assets/images/roman/huzur.png": "02fff88c08f1e839c729cc4785795a3a",
"assets/assets/images/tarih/nutuk.jpg": "3ed2a757df9172199b6a4a782f61eada",
"assets/assets/images/tarih/ttarihleri.jpg": "a54a5d0dbcd37a429b9c9d94ac6096ea",
"assets/assets/images/tarih/zeytindagi.jpg": "da0123044eb843e553e1d757ed7c3e55",
"assets/FontManifest.json": "4e284a3669414bae1cb2e41b875712a7",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "dc7188c521eaa85ee87668e518e0c3cb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "1d059eaffa8ab618e121e46cd8214fcb",
"/": "1d059eaffa8ab618e121e46cd8214fcb",
"main.dart.js": "9e4260f835038b89ab1bfb5769899aae",
"manifest.json": "8788f4fc597da6797edb121e454e5d54",
"version.json": "0b1954b9d86058b256329f7487700ff6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
