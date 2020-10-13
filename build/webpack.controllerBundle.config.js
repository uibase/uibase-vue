const path = require('path')
const nodeExternals = require('webpack-node-externals')
const env = process.env.NODE_ENV === 'production' ? 'production' : 'development'

module.exports = {
  target: 'node',
  node: {
    __dirname: true
  },
  mode: env,
  externals: [nodeExternals()],
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      '@uiConfig': path.resolve(__dirname, '../src/theme/types/config/'),
      '@theme': path.resolve(__dirname, '../src/theme/'),
      '@helper': path.resolve(__dirname, '../src/helpers/'),
      '@factory': path.resolve(__dirname, '../src/factories/'),
      '@src': path.resolve(__dirname, '../src/')
    },
    modules: [
      path.resolve(__dirname + '../src'),
      path.resolve(__dirname + '../build'),
      path.resolve(__dirname + '../node_modules')
    ]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: path.resolve(__dirname, '../tsconfig.json')
          }
        }
      }
    ]
  }
}
