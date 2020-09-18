import * as BaseUi from './index'

export default {
  install(Vue, options) {
    Object.keys(BaseUi).forEach((key) => {
      Vue.component(key, BaseUi[key])
    })
    Object.keys(options.icons).forEach((iconName) => {
      Vue.component(iconName, options.icons[iconName])
    })
  }
}

