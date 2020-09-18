const VueLoaderPlugin = require('vue-loader').VueLoaderPlugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

module.exports = [
  new MiniCssExtractPlugin({
    filename: 'base.ui.css'
  }),
  new VueLoaderPlugin()
]
