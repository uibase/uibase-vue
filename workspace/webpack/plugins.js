const path = require('path')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const VueLoaderPlugin = require('vue-loader').VueLoaderPlugin
// eslint-disable-next-line @typescript-eslint/no-var-requires
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UiBasePlugin = require('../../dist/plugins/UiBasePlugin')

module.exports = [
  new UiBasePlugin({
    pathToProvide: path.join(__dirname, '../.uiBase'),
    configPath: path.resolve(__dirname, '../uibase.config.js')
  }),
  new MiniCssExtractPlugin({
    filename: 'base.ui.css'
  }),
  new VueLoaderPlugin()
]
