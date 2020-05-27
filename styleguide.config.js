const { resolve } = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  // components: './client/components/**/*.vue',
  // renderRootJsx: resolve(__dirname, 'styleguide/styleguide.root.js'),
  sections: [
    {
      name: 'Base UI Components',
      components: 'src/components/**/@([A-Z]*|index).vue'
    }
  ],
  require: ['./styleguide.require.js'],
  webpackConfig: {
    resolve: {
    },
    module: {
      rules: [
        {
          test: /\.svg(\?[a-z0-9=&.]+)?$/,
          loader: 'vue-svg-loader'
        },
        {
          test: /\.pug$/,
          loader: 'pug-plain-loader'
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: require('./babel.config')
          }
        },
        {
          test: /\.css$/,
          use: ['vue-style-loader', 'css-loader']
        },
        {
          test: /\.(sass|scss)$/,
          use: [
            'vue-style-loader',
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
              options: {
                prependData: "@import 'src/assets/css/theme.scss';"
              }
            }
          ]
        }
      ]
    },
    plugins: [new VueLoaderPlugin()]
  },
  usageMode: 'expand',
  styleguideDir: 'styleguide'
}
