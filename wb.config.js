module.exports = {
  disable: process.env.NODE_ENV === 'development',
  dest: 'public',
  register: true,
  scope: '/',
  sw: 'service-worker.js',
  buildExcludes: ['/robots.txt', '/sitemap.xml', '/googlef2c6f29e2afa4132.html', /\/images\/.*$/],
  runtimeCaching: [
    {
      urlPattern: /.(png|jpg|jpeg|webp|svg|woff|woff2|mp3)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'assets',
        expiration: {
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 200
        }
      }
    },
    {
      urlPattern: /.(js|css)$/,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'js-css'
      }
    }
  ]
}
