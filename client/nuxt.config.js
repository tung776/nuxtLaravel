const pkg = require("./package");

module.exports = {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: pkg.description
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#fff"
  },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["./plugins/mixins/user.js"],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios",
    // Doc: https://bootstrap-vue.js.org/docs/
    "bootstrap-vue/nuxt",
    "@nuxtjs/auth"
  ],

  /*
   ** Auth module configuration
   ** https://auth.nuxtjs.org/reference/schemes/local
   */
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "login",
            method: "post",
            propertyName: "meta.token"
          },
          logout: {
            url: "logout",
            method: "post"
          },
          user: {
            url: "user",
            method: "get",
            propertyName: "data"
          }
        }
        // tokenRequired: true,
        // tokenType: 'bearer',
      }
    }
  },
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: "http://localhost:8000/api/"
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
