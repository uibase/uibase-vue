const path = require('path')
const resolve = require('./resolve')
const modules = require('./module')
const plugins = require('./plugins')

module.exports = {
  sections: [
    {
      name: 'Base UI Components',
      components: path.resolve(
        __dirname,
        '../src/components/**/@([A-Z]*|index).vue'
      )
    }
  ],
  require: [path.resolve(__dirname, './styleguide.require.js')],
  webpackConfig: {
    resolve,
    module: modules,
    plugins
  },
  usageMode: 'expand',
  styleguideDir: 'styleguide'
}
