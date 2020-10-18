import path from 'path'
import { ComponentType } from '@theme/types/ComponentType'
import UiBaseTemplateProviderPlugin from '@src/controllers/plugins/webpack/UiBaseTemplateProviderPlugin'

export function useUiBasePlugin(
  type: ComponentType,
  configPath: string
): [UiBaseTemplateProviderPlugin] {
  const pwd = process.env.PWD || ''
  const pathToProvide = path.join(
    pwd,
    './node_modules/@uibase/uibase-vue/.uiBase'
  )
  return [
    new UiBaseTemplateProviderPlugin({
      pathToProvide,
      configPath,
      type
    })
  ]
}

export default useUiBasePlugin
