import path from 'path'
import { ComponentType } from '@theme/types/ComponentType'
import UiBaseTemplateProviderPlugin from '@src/controllers/plugins/webpack/UiBaseTemplateProviderPlugin'
import { RouterName } from '@factory/ComponentProviderFactory/vue/VueComponentProvider'

export function useUiBasePlugin(
  type: ComponentType,
  configPath: string,
  router: RouterName = 'router-link'
): [UiBaseTemplateProviderPlugin] {
  const pwd = process.env.PWD || ''
  const pathToProvide = path.join(
    pwd,
    './node_modules/@uibase/uibase-vue/.uiBase'
  )
  return [
    new UiBaseTemplateProviderPlugin({
      pathToProvide,
      router,
      configPath,
      type
    })
  ]
}

export default useUiBasePlugin
