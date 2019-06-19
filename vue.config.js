module.exports = {
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        data: `@import "@/global/global.scss";`
      }
    }
  },
  transpileDependencies: ['muse-ui'],
    chainWebpack: config => {
    // config.module.rule('js').include.add(/node_modules\/(dom7|swiper| muse-ui)\/.*/)
    config.module
  .rule('js')
    .test(/\.js$/)
     .include
     .add(/.\/node_modules/)
     .add(/.\/.*\.js/)
     .add(/\.\/src\/assets\/muse-ui/)
      .add(/.\/src/)
      .add(/.\/src\/assets.\/muse-ui/)
      .add(/.\/src\/assets.\/muse-ui\/*.\/.*/)
      .add('/test/')
      .add(/node_modules\/(dom7|swiper)\/.*/)
      .end()
    .use('babel')
      .loader('babel-loader')
      .options({
        plugins: ['transform-runtime'],
        presets: [
          ['@babel-preset-es2015', { modules: false }]
        ]
      });
  },
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
