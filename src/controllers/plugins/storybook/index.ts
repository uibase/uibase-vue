import {
  WebpackOptions,
  WebpackPluginInstance
} from 'webpack/declarations/WebpackOptions'
import UiBasePlugin from '@src/controllers/plugins/webpack/UiBasePlugin'

export function presetUiBasePlugin(
  config: WebpackOptions,
  configPath: string
): WebpackOptions {
  const plugin: WebpackPluginInstance = new UiBasePlugin({
    configPath
  }) as WebpackPluginInstance
  ;(config.plugins as WebpackPluginInstance[]).push(plugin)
  return config
}

export function presetUiBaseActivate(config: WebpackOptions): WebpackOptions {
  config.watchOptions = {
    ignored: [/node_modules\/(?!.*\@uibase).*/]
  }
  return config
}

export default {
  presetUiBasePlugin,
  presetUiBaseActivate
}
