/**
 * babel-plugin-import
 * 按需引入 UI组件库 配置
 * 1. npm i babel-plugin-import -D
 * 2. 配置 babel 插件如下：
 */

 module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'import',
      {
        libraryName: "c-ui",
        libraryDirectory: "es",
        styleLibraryDirectory: "style",
      }
    ]
  ]
}
