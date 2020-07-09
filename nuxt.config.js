export default {
  mode: 'spa',
  router: {
    mode: 'hash'
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }],
    script: [{
      src: '/js/flexible.js',
      type: 'text/javascript',
      charset: 'utf-8'
    }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [
    'normalize.css',
    '@/assets/css/global.css',
    '@/assets/iconfont/iconfont.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{
    src: '@/plugins/vant-ui',
    ssr: true
  }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios'
  ],
  /*
   ** Build configuration
   */
  build: {
    transpile: [/vant.*?less/],
    babel: {
      plugins: [
        [
          'import',
          {
            libraryName: 'vant',
            style: (name) => {
              return `${name}/style/less.js`
            }
          },
          'vant'
        ]
      ]
    },
    loaders: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          '@red': '#0091ff'
        }
      }
    },
    postcss: [
      require('postcss-px2rem')({
        remUnit: 100
      })
    ],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    cache: false
  }
}
