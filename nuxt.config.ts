// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
      titleTemplate: 'درب برينت - %s',
      htmlAttrs: {
        lang: 'ar',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: { 
    enabled: true,
    target: 'server',
    
    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
      // https://go.nuxtjs.dev/tailwindcss
      //'@nuxtjs/tailwindcss',
      //'@nuxtjs/fontawesome',
    ]
  },

  ssr: true,
  
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/index.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: '~/plugins/api.js', mode: 'client' },
    { src: '~/plugins/fontawesome.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,


  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // '@nuxtjs/axios',
    'nuxt-icon' // https://icones.js.org/
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
})
