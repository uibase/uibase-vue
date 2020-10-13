const path = require('path')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const VueLoaderPlugin = require('vue-loader').VueLoaderPlugin
// eslint-disable-next-line @typescript-eslint/no-var-requires
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = [
  new MiniCssExtractPlugin({
    filename: 'base.ui.css'
  }),
  new VueLoaderPlugin()
]
