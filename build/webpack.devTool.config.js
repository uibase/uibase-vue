const path = require('path')
const { merge } = require('webpack-merge')
const webpackControllerBundle = require('./webpack.controllerBundle.config')

module.exports = merge(webpackControllerBundle, {
  entry: {
    vueDevTools: path.resolve(
      __dirname,
      '../src/controllers/devTool/vue/vueDevTools.ts'
    ),
    storybookDevTools: path.resolve(
      __dirname,
      '../src/controllers/devTool/storybook/storybookDevTools.ts'
    )
  },
  node: {
    __dirname: true
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name].js',
    libraryExport: 'default',
    libraryTarget: 'umd'
  }
})
