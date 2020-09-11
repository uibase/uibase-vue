import * as BaseUi from './index'

export default {
  install(Vue, options) {
    Object.keys(BaseUi).map((key) => {
      Vue.component(key, BaseUi[key])
    })
  }
}
