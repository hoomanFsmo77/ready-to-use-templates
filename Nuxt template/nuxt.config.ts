// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  build:{
    transpile:[]
  },
  css:['~/assets/App.scss'],
  app:{
    rootId:'v-app',
    rootTag:'main',
    head:{
      title:'my website',
      meta: [
        { name: 'viewport', content: 'width=device-width ,initial-scale=1.0' },
        { name: 'description', content: 'welcome to My project' },
        { name: 'keyword', content: 'HTML,CSS,Js developer' },
        { "http-equiv": 'X-UA-Compatible', content: 'ie=edge' },
      ],
      bodyAttrs:{}
    }
  },
  srcDir: './src',
  modules: [
    '@pinia/nuxt','@nuxt/image-edge'
  ],
})
