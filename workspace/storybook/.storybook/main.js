const path = require('path')
const storybookDevTool = require('../../../dist/storybookDevTools')
module.exports = {
  stories: ['../**/*.stories.mdx', '../../../src/controllers/storybook/**/*.stories.ejs'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: (config) => {
    const plugins = storybookDevTool.UiBasePlugin('vue')
    // // Add plugins for Storybook development
    config.plugins.push(plugins[0])
    // add vue-style-loader
    config.module.rules.push({
      test: /\.(sass|scss|css)$/,
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
          loader: 'sass-loader'
        }
      ]
    })
    // console.dir(config.module.rules, { depth: 2 })
    // config.module.rules.forEach(rule => console.log(rule.test.toString()))
    // console.dir(config.module.rules.find(rule => rule.test.toString() === "/\\.(mjs|jsx?)$/"), { depth: null })
    // const storyMdxRule = config.module.rules.find(rule => rule.test.toString() === "/\\.(stories|story).mdx$/")
    // const storyJsRule = config.module.rules.find(rule => rule.test.toString() === "/\.(stories|story)\.[tj]sx?$/")
    // const jsRule = config.module.rules.find(rule => rule.test.toString() === "/\.js$/")
    // const mdxRule = config.module.rules.find(rule => rule.test.toString() === "/\.mdx$/")
    // console.dir(config.module.rules.find(rule => rule.test.toString() === "/\\.(stories|story).mdx$/"), { depth: null })
    // console.dir(config.module.rules.find(rule => rule.test.toString() === "/\\.(stories|story)\\.[tj]sx?$/"), { depth: null })
    // console.dir(config.module.rules.find(rule => rule.test.toString() === "/\\.js$/"), { depth: null })
    // console.dir(config.module.rules.find(rule => rule.test.toString() === "/\\.mdx$/"), { depth: null })
    config.module.rules.push({
      test: /\.stories\.ejs$/,
      use: [
        {
          loader: path.resolve(__dirname, './loader.js'),
          options: {
            type: 'vue',
            path: path.resolve(__dirname, '../uiBase')
          }
        }
      ]
    })
    return config
  }
}
