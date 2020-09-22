const path = require('path')
const resolve = require('./resolve')
const modules = require('./module')
const plugins = require('./plugins')
const merge = require('webpack-merge')
const BaseUiThemePlugin = require('../dist/plugins/BaseUiThemePlugin').default
const deepmerge = require('deepmerge')

module.exports = (
  userStyleguideConfig = {},
  uibaseConfig = {},
  configFilePath = ''
) => {
  plugins.push(
    new BaseUiThemePlugin({
      configPath: configFilePath,
      pathToProvide: path.resolve(process.env.PWD, './uibase')
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
