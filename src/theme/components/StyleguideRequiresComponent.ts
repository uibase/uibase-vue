import IThemeComponent from './IThemeComponent'
import StyleguideRequire from '../types/configations/StyleGuideRequire'

export const defaultConfig: StyleguideRequire = {
  icons: {}
}

export default class StyleguideRequiresComponent implements IThemeComponent {
  config: StyleguideRequire
  constructor(config: StyleguideRequire) {
    this.config = config
  }

  generate(): string {
    return `
import '!vue-style-loader!css-loader!sass-loader!@uibase/uibase-vue/src/assets/css/base.scss';
${Object.keys(this.config.icons).reduce(
  (str, iconName) =>
    (str += `import ${iconName} from '${this.config.icons[iconName]}';`),
  ''
)}
import Vue from 'vue';

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
