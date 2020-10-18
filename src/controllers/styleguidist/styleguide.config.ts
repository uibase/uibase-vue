import resolve from './resolve'
import modules from './module'
import plugins from './plugins'
import merge from 'webpack-merge'
// import UiBaseTemplatePlugin from '../plugins/webpack/UiBasePlugin'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const deepmerge = require('deepmerge')

export default (userStyleguideConfig = {}, configFilePath = '') => {
  plugins
    .push
    // new UiBaseTemplatePlugin(
    //   configPath: configFilePath
    // })
    ()
  const webpackConfig = {
    resolve,
    module: modules,
    plugins
  }
  const sections = [
    {
      name: 'UIBase Components'
      // components: path.resolve(
      //   __dirname,
      //   '../src/components/**/@([A-Z]*|index).vue'
      // )
    }
  ]
  // const require = [
  //   path.resolve(pwd, './uibase/styleguide.require.js')
  // ]

  const mergedStyleguideConfig = deepmerge(
    {
      sections,
      // require,
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
