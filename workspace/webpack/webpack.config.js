const resolve = require('./resolve')
const modules = require('./module')
const plugins = require('./plugins')
const env = process.env.NODE_ENV === 'production' ? 'production' : 'development'

module.exports = {
  mode: env,
  devtool: 'source-map',
  resolve,
  module: modules,
  plugins
}
