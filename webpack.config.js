const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.js',
    path: path.resolve(__dirname, 'build')
  },
  plugins: [
    new WorkboxWebpackPlugin.GenerateSW({
      /*
        1. 帮助serviceworker快速启动
        2. 删除旧的 serviceworker
        生成一个 serviceworker 配置文件~
        https://webpack.docschina.org/guides/progressive-web-application/#adding-workbox
      */
      clientsClaim: true,
      skipWaiting: true
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 1000,
    open: true, 
  }, 
  mode: 'development',
};
