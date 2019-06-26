module.exports = {
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        data: `@import "@/global/global.scss";`
      }
    }
  },
  // transpileDependencies: ['muse-ui', 'vue'],
  //   chainWebpack: config => {
  //   config.module.rule('js').include.add(/node_modules\/(dom7|swiper| muse-ui)\/.*/)
  // },
  // chainWebpack: config => {
  // config.module
  //   .rule('vue')
  //   .use('vue-loader')
  //   .loader('vue-loader')
  //   .tap(options => {
  //   // 修改它的选项...
  //   return options
  //   })
  // },
  // chainWebpack: config => {
  // config.rule('js').include.add(/node_modules\/(dom7|swiper)\/.*/)
  // },

  // publicPath: "./"
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '../'
  //   : '../'
}
