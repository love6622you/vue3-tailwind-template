module.exports = {
  devServer: {
    port: 8800
  },
  css: {
    loaderOptions: {
      // 向所有 Sass 樣式傳入共享的全局變量
      scss: {
        prependData: '@import "@/assets/css/base/index.scss";',
      },
    },
  },
  //   chainWebpack: config => {
  //     // image-webpack-loader : compress image
  //     config.module
  //       .rule('images')
  //       .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
  //       .use('image-webpack-loader')
  //       .loader('image-webpack-loader')
  //       .options({
  //         disable: process.env.NODE_ENV !== 'production'
  //       })
  //   }
};
