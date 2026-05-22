const CACHE_NAME = "ps-tournament-v70";
const OWN_ASSETS = [
  "./tournament.html",
  "./tournament-app.js",
  "./tournament_manifest.json",
  "./icon-192.png",
  "./icon-512.png",
];
const CDN_ASSETS = [
  "https://fonts.googleapis.com/css2?family=Pretendard:wght@400;500;600;700;800;900&display=swap",
  "https://unpkg.com/react@18/umd/react.production.min.js",
  "https://unpkg.com/react-dom@18/umd/react-dom.production.min.js",
  "https://unpkg.com/@babel/standalone/babel.min.js",
  "https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js",
  "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore-compat.js",
  "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth-compat.js",
  "https://www.gstatic.com/firebasejs/10.14.1/firebase-database-compat.js",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.all([
        ...OWN_ASSETS.map((url) => fetch(url, { cache: "no-store" }).then((r) => cache.put(url, r))),
        cache.addAll(CDN_ASSETS),
      ])
    )
  );
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("message", (e) => {
  if (e.data && e.data.type === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);

  // API 요청(/api/...)은 SW가 절대 가로채지 않음 — POST/PUT body 유실 + stale 캐시 방지.
  if (url.pathname.startsWith("/api/")) {
    return; // 브라우저 기본 네트워크 처리에 위임
  }
  // GET 외 메서드(POST/PUT/PATCH/DELETE)도 가로채지 않음 (Cache API는 GET만 지원)
  if (e.request.method !== "GET") {
    return;
  }

  const isOwnAsset = url.origin === self.location.origin;

  if (isOwnAsset) {
    // 우리 파일: 항상 네트워크에서 최신 가져오기 (HTTP 캐시 우회)
    e.respondWith(
      fetch(e.request, { cache: "no-store" })
        .then((res) => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
          return res;
        })
        .catch(() => caches.match(e.request))
    );
  } else {
    // CDN 파일: 캐시 우선 (변하지 않으므로)
    e.respondWith(
      caches.match(e.request).then((cached) => cached || fetch(e.request))
    );
  }
});
