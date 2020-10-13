const path = require('path')
const { merge } = require('webpack-merge')
const webpackConfig = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const chokidar = require('chokidar')

module.exports = merge(webpackConfig, {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      inject: true
    })
  ],
  devServer: {
    hot: true,
    hotOnly: true,
    open: true,
    inline: true,
    stats: {
      children: false,
      modules: false,
      chunks: false
    },
    port: 8080,
    before(app, server) {
      chokidar
        .watch([path.resolve(__dirname, '../src/**/*.html')])
        .on('all', () => {
          server.sockWrite(server.sockets, 'content-changed')
        })
    }
  }
})
