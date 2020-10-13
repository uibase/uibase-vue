const path = require('path')
const vueDevTools = require('../../dist/vueDevTools')

module.exports = function(source) {
  const asyncCallback = this.async()
  const componentName = vueDevTools.getComponentNameFromPath(this.resourcePath)
  const configPath = path.resolve(
    process.env.PWD,
    './workspace/uibase.config.js'
  )

  this.addDependency(configPath)

  const config = require(configPath)
  console.log(config)
  vueDevTools.vueTemplateRenderer(componentName, source, config).then((str) => {
    asyncCallback(null, str)
  })
}
