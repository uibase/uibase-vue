import IThemeComponent from './IThemeComponent'
import { IconPaths } from '../../theme/types/configations/Icon'

export const defaultConfig = {
  IconBell: '@uibase/uibase-vue/src/assets/icons/bell.svg'
}

export default class IconComponents implements IThemeComponent {
  private config: IconPaths
  constructor(config: IconPaths) {
    this.config = config
  }
  generate(): string {
    return `
    ${Object.keys(this.config).reduce(
      (str, iconName) =>
        (str += `import ${iconName} from '${this.config[iconName]}'`),
      ''
    )}
    
    export default {
      ${Object.keys(this.config).reduce(
        (str, iconName) => (str += `${iconName},`),
        ''
      )}
    }
    `
  }
}
