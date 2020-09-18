// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as BaseUi from './index'
import 'vue/types/vue'
import { listSvgFileNames } from './theme/helpers/listSvgFileNames'

export default {
  install(Vue: any, options: any) {
    Object.keys(BaseUi).forEach((key) => {
      Vue.component(key, BaseUi[key])
    })
    Object.keys(options.icons).forEach((iconName) => {
      Vue.component(iconName, options.icons[iconName])
    })
  }
}

export { listSvgFileNames }
