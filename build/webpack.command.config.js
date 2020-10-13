const path = require('path')
const { merge } = require('webpack-merge')
const webpackControllerBundle = require('./webpack.controllerBundle.config')

module.exports = merge(webpackControllerBundle, {
  entry: {
    main: path.resolve(__dirname, '../src/controllers/commands/main.ts')
  },
  node: {
    __dirname: true
  },
  output: {
    path: path.resolve(__dirname, '../lib'),
    publicPath: '/',
    filename: '[name].js'
  }
})
