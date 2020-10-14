const path = require('path')
const vueDevTools = require('../../dist/vueDevTools')

module.exports = function(source) {
  const asyncCallback = this.async()
  const componentName = vueDevTools
    .getComponentNameFromPath(this.resourcePath)
    .split('-')
  console.log(componentName)
  const configPath = path.resolve(process.env.PWD, './uibase.config.js')

  this.addDependency(configPath)

  const config = require(configPath)
  vueDevTools
    .vueTemplateRenderer(componentName[0], source, config)
    .then((str) => {
      console.log('---- compiled source ----')
      console.log(str)
      console.log('---- end ----')
      asyncCallback(null, str)
    })
}
