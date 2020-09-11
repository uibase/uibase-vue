const path = require('path')
const resolve = require('./resolve')
const modules = require('./module')
const plugins = require('./plugins')
const env = process.env.NODE_ENV === 'production' ? 'production' : 'development'

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  mode: env,
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'base.ui.js'
  },
  devtool: 'source-map',
  resolve,
  module: modules,
  plugins
}
