const path = require('path')
class ThemeRegisterPlugin {
  apply(compiler) {
    console.log(
      'theme register plugin active..',
      compiler.context,
      compiler.addEntry,
      compiler
    )
    // compiler.addEntry(path.resolve(compiler.context, '/theme.config.js'))
    compiler.hooks.watchRun.tap('test', (compiler) => {
      console.log('beforeRun===================')
    })
  }
}

module.exports = ThemeRegisterPlugin
