module.exports = {
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        data: `@import "@/global/global.scss";`
      }
    }
  }
  // publicPath: "./"
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '../'
  //   : '../'
}
