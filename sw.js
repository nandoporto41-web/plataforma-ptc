self.addEventListener('install', (e) => {
    console.log('[Service Worker] Aplicativo Instalado');
});

self.addEventListener('fetch', (e) => {
    // Mantém o site sempre puxando os dados em tempo real da internet
    e.respondWith(fetch(e.request));
});
