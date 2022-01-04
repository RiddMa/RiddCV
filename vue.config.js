// const webpack = require("webpack");
module.exports = {
  transpileDependencies: ["vuetify"],

  devServer: {
    open: false,
    overlay: {
      warnings: false, //不显示警告
      errors: false, //不显示错误
    },
  },
  pwa: {
    workboxOptions: {
      skipWaiting: true,
    },
  },
  //关闭eslint检查
  lintOnSave: false,

  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "马嘉骥个人简历";
      return args;
    });
    // config.plugins.delete("pwa");
    // config.plugins.delete("workbox");
  },

  productionSourceMap: false,
};
