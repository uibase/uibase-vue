const path = require('path')
const resolve = require('./resolve')
const modules = require('./module')
const plugins = require('./plugins')
const merge = require('webpack-merge')
const DefinePlugin = require('webpack').DefinePlugin
const deepmerge = require('deepmerge')

module.exports = (userStyleguideConfig = {}, uibaseConfig = {}) => {
  plugins.push(
    new DefinePlugin({
      _UIBASE_: uibaseConfig
    })
  )
  const webpackConfig = {
    resolve,
    module: modules,
    plugins
  }
  const sections = [
    {
      name: 'UIBase Components',
      components: path.resolve(
        __dirname,
        '../src/components/**/@([A-Z]*|index).vue'
      )
    }
  ]
  const require = [
    path.resolve(process.env.PWD, './uibase/styleguide.require.js')
  ]

  const mergedStyleguideConfig = deepmerge(
    {
      sections,
      require,
      usageMode: 'expand',
      styleguideDir: 'styleguide'
    },
    userStyleguideConfig
  )

  mergedStyleguideConfig.webpackConfig = mergedStyleguideConfig.webpackConfig
    ? merge(webpackConfig, mergedStyleguideConfig.webpackConfig)
    : webpackConfig

  return mergedStyleguideConfig
}
