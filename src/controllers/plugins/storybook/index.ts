import {
  WebpackOptions,
  WebpackPluginInstance
} from 'webpack/declarations/WebpackOptions'
import { useUiBasePlugin } from '@src/controllers/plugins/webpack/index'

export function presetUiBasePlugin(
  config: WebpackOptions,
  configPath: string
): WebpackOptions {
  const plugins: WebpackPluginInstance[] = useUiBasePlugin(
    'vue',
    configPath
  ) as WebpackPluginInstance[]

  plugins.forEach((plugin) =>
    (config.plugins as WebpackPluginInstance[]).push(plugin)
  )
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
