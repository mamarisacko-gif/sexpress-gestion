// Cache de secours : l'application s'ouvre même sans réseau (les données, elles, viennent toujours de la base).
const C = 'sx-gestion-v1';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(
  caches.keys().then(ks => Promise.all(ks.filter(k => k !== C).map(k => caches.delete(k)))).then(() => self.clients.claim())
));
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.hostname.endsWith('supabase.co')) return;   // jamais de cache pour les données
  e.respondWith(
    fetch(e.request).then(r => {
      if (r.ok || r.type === 'opaque') { const cl = r.clone(); caches.open(C).then(c => c.put(e.request, cl)); }
      return r;
    }).catch(() => caches.match(e.request))
  );
});
