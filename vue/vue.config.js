const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    port: 7111
  },
  chainWebpack: config => {
    config.plugin('html')
        .tap(args => {
          args[0].title = "TESTTEST";
          return args;
        })
    }
})
