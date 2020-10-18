const path = require('path')
const {getOptions} = require('loader-utils')
const storyDevTools = require('../../../dist/storybookDevTools')

module.exports = function(source) {
  const options = getOptions(this)
  const asyncCallback = this.async()
  const componentName = storyDevTools
    .getStoryNameFromPath(this.resourcePath)
    .split('-')
  console.log(componentName)
  const configPath = path.resolve(process.env.PWD, './uibase.config.js')

  this.addDependency(configPath)

  const config = require(configPath)
  storyDevTools
    .storyTemplateRenderer(componentName[0].toLowerCase(), source, config, options.type, options.path)
    .then((str) => {
      console.log('---- compiled source ----')
      console.log(str)
      console.log('---- end ----')
      asyncCallback(null, str)
    })
  return source
}
