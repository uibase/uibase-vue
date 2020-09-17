const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const env = process.env.NODE_ENV === 'production' ? 'production' : 'development'

const svg = {
  test: /\.svg(\?[a-z0-9=&.]+)?$/,
  loader: 'vue-svg-loader'
}

const pug = {
  test: /\.pug$/,
  loader: 'pug-plain-loader'
}

const vue = {
  test: /\.vue$/,
  loader: 'vue-loader'
}

const js = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: require(path.resolve(__dirname, '../babel.config'))
  }
}

const extractOrInject =
  env === 'production' ? 'vue-style-loader' : MiniCssExtractPlugin.loader

const sassOptions = {
  prependData: "@import 'uibase/uibase.theme.scss';"
}

const scss = {
  test: /\.(sass|scss|css)$/,
  use: [
    extractOrInject,
    {
      loader: 'css-loader',
      options: {
        modules: {
          localIdentName: '[local]_[hash:base64:8]'
        }
      }
    },
    {
      loader: 'sass-loader',
      options: sassOptions
    }
  ]
}

module.exports = {
  rules: [svg, pug, vue, js, scss]
}
