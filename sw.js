// Offline support for the home-screen web app. build.mjs fills in the names below.
// - SHELL: the small app files of this release, installed together.
// - LAZY: big files with content-hashed names (HWP engine, PPT and PDF renderers). Cached the first time
//   they are used, or when the user asks in 정보, and kept across releases while still needed.
// Documents are never fetched from the network, so they are never cached.
const VERSION = '644046e08b50';
const SHELL_CACHE = `folio-shell-${VERSION}`;
const ASSET_CACHE = 'folio-assets';
const SHELL = ["./","app.js","apple-touch-icon.png","archive-CXKFRCWN.js","chunk-2MRUTDOC.js","chunk-2TVEUNJG.js","chunk-ANDFYJVQ.js","chunk-CDFZ5IF5.js","chunk-CDVCJUH4.js","chunk-HATP7GRN.js","chunk-J3SMTYDZ.js","chunk-SLTV4PDC.js","chunk-SUKO2BVV.js","chunk-U5BUAFEI.js","chunk-VWWWYZJE.js","chunk-Y6URMNV2.js","chunk-ZCCQB25U.js","docx-SU2ALRE2.js","encrypted-BOQRBYWF.js","html-ZEPIOQ27.js","hwp-N7ZI4XCT.js","icon-192.png","icon-512.png","icon-maskable-512.png","image-ELFOAYP4.js","jszip.min-ETSSBAKK.js","legacy-CRD6Y4V5.js","manifest.webmanifest","odf-XKIRIZBK.js","pages-KRG76TZK.js","print-KT72V2TP.js","scan-CIBIIDQH.js","sheet-FYB6OFCL.js","style.css","text-3JF5H5MY.js","theme.js"];
const LAZY = ["es-DJKXAJ4E.js","pdf-SEPKXQYC.js","pdf-worker-b4c8353ded0d.js","pptx-J3P6GIDV.js","rhwp_bg-54cf95014312.wasm"];
// Release-specific files that are rarely needed (the ~1 MB license data behind 정보, the character
// maps and fonts only some PDFs ask for): kept with the shell once fetched, instead of being
// downloaded up front.
const ON_DEMAND = ["licenses.json","pdf/cmaps/78-EUC-H.bcmap","pdf/cmaps/78-EUC-V.bcmap","pdf/cmaps/78-H.bcmap","pdf/cmaps/78-RKSJ-H.bcmap","pdf/cmaps/78-RKSJ-V.bcmap","pdf/cmaps/78-V.bcmap","pdf/cmaps/78ms-RKSJ-H.bcmap","pdf/cmaps/78ms-RKSJ-V.bcmap","pdf/cmaps/83pv-RKSJ-H.bcmap","pdf/cmaps/90ms-RKSJ-H.bcmap","pdf/cmaps/90ms-RKSJ-V.bcmap","pdf/cmaps/90msp-RKSJ-H.bcmap","pdf/cmaps/90msp-RKSJ-V.bcmap","pdf/cmaps/90pv-RKSJ-H.bcmap","pdf/cmaps/90pv-RKSJ-V.bcmap","pdf/cmaps/Add-H.bcmap","pdf/cmaps/Add-RKSJ-H.bcmap","pdf/cmaps/Add-RKSJ-V.bcmap","pdf/cmaps/Add-V.bcmap","pdf/cmaps/Adobe-CNS1-0.bcmap","pdf/cmaps/Adobe-CNS1-1.bcmap","pdf/cmaps/Adobe-CNS1-2.bcmap","pdf/cmaps/Adobe-CNS1-3.bcmap","pdf/cmaps/Adobe-CNS1-4.bcmap","pdf/cmaps/Adobe-CNS1-5.bcmap","pdf/cmaps/Adobe-CNS1-6.bcmap","pdf/cmaps/Adobe-CNS1-UCS2.bcmap","pdf/cmaps/Adobe-GB1-0.bcmap","pdf/cmaps/Adobe-GB1-1.bcmap","pdf/cmaps/Adobe-GB1-2.bcmap","pdf/cmaps/Adobe-GB1-3.bcmap","pdf/cmaps/Adobe-GB1-4.bcmap","pdf/cmaps/Adobe-GB1-5.bcmap","pdf/cmaps/Adobe-GB1-UCS2.bcmap","pdf/cmaps/Adobe-Japan1-0.bcmap","pdf/cmaps/Adobe-Japan1-1.bcmap","pdf/cmaps/Adobe-Japan1-2.bcmap","pdf/cmaps/Adobe-Japan1-3.bcmap","pdf/cmaps/Adobe-Japan1-4.bcmap","pdf/cmaps/Adobe-Japan1-5.bcmap","pdf/cmaps/Adobe-Japan1-6.bcmap","pdf/cmaps/Adobe-Japan1-UCS2.bcmap","pdf/cmaps/Adobe-Korea1-0.bcmap","pdf/cmaps/Adobe-Korea1-1.bcmap","pdf/cmaps/Adobe-Korea1-2.bcmap","pdf/cmaps/Adobe-Korea1-UCS2.bcmap","pdf/cmaps/B5-H.bcmap","pdf/cmaps/B5-V.bcmap","pdf/cmaps/B5pc-H.bcmap","pdf/cmaps/B5pc-V.bcmap","pdf/cmaps/CNS-EUC-H.bcmap","pdf/cmaps/CNS-EUC-V.bcmap","pdf/cmaps/CNS1-H.bcmap","pdf/cmaps/CNS1-V.bcmap","pdf/cmaps/CNS2-H.bcmap","pdf/cmaps/CNS2-V.bcmap","pdf/cmaps/ETHK-B5-H.bcmap","pdf/cmaps/ETHK-B5-V.bcmap","pdf/cmaps/ETen-B5-H.bcmap","pdf/cmaps/ETen-B5-V.bcmap","pdf/cmaps/ETenms-B5-H.bcmap","pdf/cmaps/ETenms-B5-V.bcmap","pdf/cmaps/EUC-H.bcmap","pdf/cmaps/EUC-V.bcmap","pdf/cmaps/Ext-H.bcmap","pdf/cmaps/Ext-RKSJ-H.bcmap","pdf/cmaps/Ext-RKSJ-V.bcmap","pdf/cmaps/Ext-V.bcmap","pdf/cmaps/GB-EUC-H.bcmap","pdf/cmaps/GB-EUC-V.bcmap","pdf/cmaps/GB-H.bcmap","pdf/cmaps/GB-V.bcmap","pdf/cmaps/GBK-EUC-H.bcmap","pdf/cmaps/GBK-EUC-V.bcmap","pdf/cmaps/GBK2K-H.bcmap","pdf/cmaps/GBK2K-V.bcmap","pdf/cmaps/GBKp-EUC-H.bcmap","pdf/cmaps/GBKp-EUC-V.bcmap","pdf/cmaps/GBT-EUC-H.bcmap","pdf/cmaps/GBT-EUC-V.bcmap","pdf/cmaps/GBT-H.bcmap","pdf/cmaps/GBT-V.bcmap","pdf/cmaps/GBTpc-EUC-H.bcmap","pdf/cmaps/GBTpc-EUC-V.bcmap","pdf/cmaps/GBpc-EUC-H.bcmap","pdf/cmaps/GBpc-EUC-V.bcmap","pdf/cmaps/H.bcmap","pdf/cmaps/HKdla-B5-H.bcmap","pdf/cmaps/HKdla-B5-V.bcmap","pdf/cmaps/HKdlb-B5-H.bcmap","pdf/cmaps/HKdlb-B5-V.bcmap","pdf/cmaps/HKgccs-B5-H.bcmap","pdf/cmaps/HKgccs-B5-V.bcmap","pdf/cmaps/HKm314-B5-H.bcmap","pdf/cmaps/HKm314-B5-V.bcmap","pdf/cmaps/HKm471-B5-H.bcmap","pdf/cmaps/HKm471-B5-V.bcmap","pdf/cmaps/HKscs-B5-H.bcmap","pdf/cmaps/HKscs-B5-V.bcmap","pdf/cmaps/Hankaku.bcmap","pdf/cmaps/Hiragana.bcmap","pdf/cmaps/KSC-EUC-H.bcmap","pdf/cmaps/KSC-EUC-V.bcmap","pdf/cmaps/KSC-H.bcmap","pdf/cmaps/KSC-Johab-H.bcmap","pdf/cmaps/KSC-Johab-V.bcmap","pdf/cmaps/KSC-V.bcmap","pdf/cmaps/KSCms-UHC-H.bcmap","pdf/cmaps/KSCms-UHC-HW-H.bcmap","pdf/cmaps/KSCms-UHC-HW-V.bcmap","pdf/cmaps/KSCms-UHC-V.bcmap","pdf/cmaps/KSCpc-EUC-H.bcmap","pdf/cmaps/KSCpc-EUC-V.bcmap","pdf/cmaps/Katakana.bcmap","pdf/cmaps/NWP-H.bcmap","pdf/cmaps/NWP-V.bcmap","pdf/cmaps/RKSJ-H.bcmap","pdf/cmaps/RKSJ-V.bcmap","pdf/cmaps/Roman.bcmap","pdf/cmaps/UniCNS-UCS2-H.bcmap","pdf/cmaps/UniCNS-UCS2-V.bcmap","pdf/cmaps/UniCNS-UTF16-H.bcmap","pdf/cmaps/UniCNS-UTF16-V.bcmap","pdf/cmaps/UniCNS-UTF32-H.bcmap","pdf/cmaps/UniCNS-UTF32-V.bcmap","pdf/cmaps/UniCNS-UTF8-H.bcmap","pdf/cmaps/UniCNS-UTF8-V.bcmap","pdf/cmaps/UniGB-UCS2-H.bcmap","pdf/cmaps/UniGB-UCS2-V.bcmap","pdf/cmaps/UniGB-UTF16-H.bcmap","pdf/cmaps/UniGB-UTF16-V.bcmap","pdf/cmaps/UniGB-UTF32-H.bcmap","pdf/cmaps/UniGB-UTF32-V.bcmap","pdf/cmaps/UniGB-UTF8-H.bcmap","pdf/cmaps/UniGB-UTF8-V.bcmap","pdf/cmaps/UniJIS-UCS2-H.bcmap","pdf/cmaps/UniJIS-UCS2-HW-H.bcmap","pdf/cmaps/UniJIS-UCS2-HW-V.bcmap","pdf/cmaps/UniJIS-UCS2-V.bcmap","pdf/cmaps/UniJIS-UTF16-H.bcmap","pdf/cmaps/UniJIS-UTF16-V.bcmap","pdf/cmaps/UniJIS-UTF32-H.bcmap","pdf/cmaps/UniJIS-UTF32-V.bcmap","pdf/cmaps/UniJIS-UTF8-H.bcmap","pdf/cmaps/UniJIS-UTF8-V.bcmap","pdf/cmaps/UniJIS2004-UTF16-H.bcmap","pdf/cmaps/UniJIS2004-UTF16-V.bcmap","pdf/cmaps/UniJIS2004-UTF32-H.bcmap","pdf/cmaps/UniJIS2004-UTF32-V.bcmap","pdf/cmaps/UniJIS2004-UTF8-H.bcmap","pdf/cmaps/UniJIS2004-UTF8-V.bcmap","pdf/cmaps/UniJISPro-UCS2-HW-V.bcmap","pdf/cmaps/UniJISPro-UCS2-V.bcmap","pdf/cmaps/UniJISPro-UTF8-V.bcmap","pdf/cmaps/UniJISX0213-UTF32-H.bcmap","pdf/cmaps/UniJISX0213-UTF32-V.bcmap","pdf/cmaps/UniJISX02132004-UTF32-H.bcmap","pdf/cmaps/UniJISX02132004-UTF32-V.bcmap","pdf/cmaps/UniKS-UCS2-H.bcmap","pdf/cmaps/UniKS-UCS2-V.bcmap","pdf/cmaps/UniKS-UTF16-H.bcmap","pdf/cmaps/UniKS-UTF16-V.bcmap","pdf/cmaps/UniKS-UTF32-H.bcmap","pdf/cmaps/UniKS-UTF32-V.bcmap","pdf/cmaps/UniKS-UTF8-H.bcmap","pdf/cmaps/UniKS-UTF8-V.bcmap","pdf/cmaps/V.bcmap","pdf/cmaps/WP-Symbol.bcmap","pdf/standard_fonts/FoxitDingbats.pfb","pdf/standard_fonts/FoxitFixed.pfb","pdf/standard_fonts/FoxitFixedBold.pfb","pdf/standard_fonts/FoxitFixedBoldItalic.pfb","pdf/standard_fonts/FoxitFixedItalic.pfb","pdf/standard_fonts/FoxitSerif.pfb","pdf/standard_fonts/FoxitSerifBold.pfb","pdf/standard_fonts/FoxitSerifBoldItalic.pfb","pdf/standard_fonts/FoxitSerifItalic.pfb","pdf/standard_fonts/FoxitSymbol.pfb","pdf/standard_fonts/LiberationSans-Bold.ttf","pdf/standard_fonts/LiberationSans-BoldItalic.ttf","pdf/standard_fonts/LiberationSans-Italic.ttf","pdf/standard_fonts/LiberationSans-Regular.ttf","pdf/wasm/jbig2.wasm","pdf/wasm/openjpeg.wasm","pdf/wasm/qcms_bg.wasm"];

const SHARE_INBOX = 'share-inbox'; // the same names as in app.js
const SHARED_FILE = 'shared-file';

const toUrl = (f) => new URL(f, self.registration.scope).href;
const lazyUrls = new Set(LAZY.map(toUrl));
const onDemandUrls = new Set(ON_DEMAND.map(toUrl));

// The kinds of big file: the HWP engine, the PPT renderer, the PDF renderer with its worker, and
// the library that turns PDF pages (which the 정보 screen doesn't report on).
const kindOf = (url) => {
  if (/rhwp_bg-[^/]*\.wasm$/.test(url)) return 'hwp';
  if (/\/es-[^/]*\.js$/.test(url)) return 'pdf-turning';
  return /\/pdf-[^/]*\.js$/.test(url) ? 'pdf' : 'pptx';
};

async function prefetchLazy(kinds = null) {
  const cache = await caches.open(ASSET_CACHE);
  for (const url of lazyUrls) {
    if (kinds && !kinds.has(kindOf(url))) continue;
    if (!(await cache.match(url))) await cache.add(url);
  }
}

// Kinds of big file kept offline by any earlier release: the asset cache, and the single
// "folio-<hash>" cache that the first releases kept everything in.
async function kindsInUse() {
  const kinds = new Set();
  for (const key of await caches.keys()) {
    if (!key.startsWith('folio-') || key === SHELL_CACHE) continue;
    for (const request of await (await caches.open(key)).keys()) {
      if (/\/rhwp_bg[^/]*\.wasm$/.test(request.url)) kinds.add('hwp');
      else if (/\/pptx-[^/]*\.js$/.test(request.url)) kinds.add('pptx');
      else if (/\/pdf-[^/]*\.js$/.test(request.url)) kinds.add('pdf');
      else if (/\/es-[^/]*\.js$/.test(request.url)) kinds.add('pdf-turning');
    }
  }
  return kinds;
}

// For each kind of big file someone already keeps offline, fetch this release's version now
// (while online, installing): activation drops the old ones, and offline use mustn't silently
// disappear. Kinds never used aren't downloaded. A failure fails the install, which the
// browser retries later, rather than activating without the offline copy.
async function refreshLazyIfUsed() {
  const kinds = await kindsInUse();
  if (kinds.size) await prefetchLazy(kinds);
}

self.addEventListener('install', (event) => {
  // cache: 'reload' skips the HTTP cache, so a release never picks up files from the last one.
  event.waitUntil(Promise.all([
    caches.open(SHELL_CACHE).then((cache) => cache.addAll(SHELL.map((f) => new Request(f, { cache: 'reload' })))),
    refreshLazyIfUsed(),
  ]));
  // No skipWaiting: pages already open keep the release they started with (the chunks they
  // import lazily are still in its cache) until the user accepts the update.
});

// Which formats can open offline: { hwp: bool, pptx: bool, pdf: bool }.
async function lazyStatus() {
  const cache = await caches.open(ASSET_CACHE);
  const status = {};
  for (const url of lazyUrls) {
    const kind = kindOf(url);
    status[kind] = (status[kind] ?? true) && Boolean(await cache.match(url));
  }
  return status;
}

// The 정보 screen asks over a MessageChannel: "status" (which big files are cached?) and
// "prefetch" (cache them now). "skipWaiting" comes from the update bar.
self.addEventListener('message', (event) => {
  const reply = (value) => event.ports[0]?.postMessage(value);
  if (event.data === 'skipWaiting') self.skipWaiting();
  if (event.data === 'status') event.waitUntil(lazyStatus().then(reply, () => reply({})));
  if (event.data === 'prefetch') {
    event.waitUntil(prefetchLazy().then(() => reply('prefetched'), () => reply('failed')));
  }
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    // Files fetched from 정보 while this release was waiting were the old release's; get this
    // release's versions of those kinds too before the old ones go (best effort: maybe offline).
    await refreshLazyIfUsed().catch(() => {});
    // Every other cache of this app goes, including the single "folio-<hash>" cache of the first
    // releases. Only this app's: other sites on the same github.io origin may keep their own.
    for (const key of await caches.keys()) {
      if (key.startsWith('folio-') && key !== SHELL_CACHE && key !== ASSET_CACHE) await caches.delete(key);
    }
    const assets = await caches.open(ASSET_CACHE);
    for (const request of await assets.keys()) {
      if (!lazyUrls.has(request.url)) await assets.delete(request);
    }
    await self.clients.claim();
  })());
});

// A file shared from another app arrives as a POST, which a static site can't answer, so it's
// taken here and left for the page to pick up. Only ever one, and the page deletes it at once.
async function receiveShared(request) {
  const [file, ...others] = (await request.formData()).getAll('file').filter((part) => part instanceof File);
  if (file) {
    const headers = {
      'content-type': file.type || 'application/octet-stream',
      'x-file-name': encodeURIComponent(file.name),
      'x-more-files': String(others.length),
    };
    await (await caches.open(SHARE_INBOX)).put(SHARED_FILE, new Response(file, { headers }));
  }
  return Response.redirect(toUrl('./?shared=1'), 303);
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method === 'POST' && request.url === toUrl('share')) {
    event.respondWith(receiveShared(request));
    return;
  }
  if (request.method !== 'GET' || !request.url.startsWith(self.registration.scope)) return;
  event.respondWith((async () => {
    // ignoreSearch: the start page is cached as ./ but may be opened with a query string.
    const hit = (await (await caches.open(SHELL_CACHE)).match(request, { ignoreSearch: true }))
      ?? (await (await caches.open(ASSET_CACHE)).match(request));
    if (hit) return hit;
    const response = await fetch(request);
    const target = lazyUrls.has(request.url) ? ASSET_CACHE : onDemandUrls.has(request.url) ? SHELL_CACHE : null;
    if (response.ok && target) {
      const copy = response.clone();
      event.waitUntil(caches.open(target).then((cache) => cache.put(request, copy)));
    }
    return response;
  })());
});
