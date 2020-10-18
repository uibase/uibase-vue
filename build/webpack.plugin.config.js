const path = require('path')
const controllerBundle = require('./webpack.controllerBundle.config')
const { merge } = require('webpack-merge')

module.exports = merge(controllerBundle, {
  entry: {
    webpack: path.resolve(
      __dirname,
      '../src/controllers/plugins/webpack/index.ts'
    ),
    storybook: path.resolve(
      __dirname,
      '../src/controllers/plugins/storybook/index.ts'
    )
  },
  output: {
    path: path.resolve(__dirname, '../lib/plugins'),
    publicPath: '/',
    filename: '[name].js',
    libraryExport: 'default',
    libraryTarget: 'umd'
  }
})
