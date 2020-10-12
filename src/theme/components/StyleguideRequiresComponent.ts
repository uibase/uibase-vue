import IThemeComponent from '@theme/components/IThemeComponent'
import ThemeConfig from '@uiConfig/ThemeConfig'
import IconPaths from '@uiConfig/Icon'

export default class StyleguideRequiresComponent
  implements IThemeComponent<string> {
  config: ThemeConfig
  constructor(config: ThemeConfig) {
    this.config = config
  }

  generate(): Promise<string> {
    // icon path
    const icons =
      typeof this.config.icons === 'string'
        ? {}
        : (this.config.icons as IconPaths)

    const str = `
${Object.keys(icons).reduce(
  (str, iconName) => (str += `import ${iconName} from '${icons[iconName]}';`),
  ''
)}
import Vue from 'vue';

const uibConfig = ${JSON.stringify(this.config)}
Vue.prototype.$uibConfig = uibConfig;

Vue.component('nuxt-link', {
  props: ['to'],
  methods: {
    log() {
      console.log(this.to)
    }
  },
  template:
    '<a href="#" @click.prevent="log()" v-on="$listeners"><slot>NuxtLink</slot></a>'
})

// Load Icon Data
${Object.keys(this.config.icons).reduce(
  (str, iconName) =>
    (str += `
    Vue.component('${iconName}', ${iconName});
    `),
  ''
)}
    `
    return Promise.resolve(str)
  }
}
