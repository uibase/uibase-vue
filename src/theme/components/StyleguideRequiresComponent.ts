import IThemeComponent from './IThemeComponent'
import ThemeConfig from '../types/configations/ThemeConfig'
import IconPaths from '../types/configations/Icon'

export default class StyleguideRequiresComponent implements IThemeComponent {
  config: ThemeConfig
  constructor(config: ThemeConfig) {
    this.config = config
  }

  generate(): string {
    // icon path
    const icons =
      typeof this.config.icons === 'string'
        ? {}
        : (this.config.icons as IconPaths)

    return `
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
  }
}
