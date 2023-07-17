const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      // babel-plugin-import 引文件是不加后缀名的，这里是尝试让 webpack 去引入 css 文件
      extensions: ['.js', '.json', '.css'],
    }
  }
})
