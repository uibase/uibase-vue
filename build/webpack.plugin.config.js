const path = require('path')
const controllerBundle = require('./webpack.controllerBundle.config')
const { merge } = require('webpack-merge')

module.exports = merge(controllerBundle, {
  entry: {
    UiBasePlugin: path.resolve(
      __dirname,
      '../src/controllers/plugins/webpack/UiBasePlugin.ts'
    )
  },
  output: {
    path: path.resolve(__dirname, '../dist/plugins'),
    publicPath: '/',
    filename: '[name].js',
    libraryExport: 'default',
    libraryTarget: 'umd'
  }
})
