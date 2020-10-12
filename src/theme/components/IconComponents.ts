import IThemeComponent from '@theme/components/IThemeComponent'
import { IconPaths } from '@uiConfig/Icon'

export const defaultConfig = {
  IconBell: '@uibase/uibase-vue/src/assets/icons/bell.svg'
}

export default class IconComponents implements IThemeComponent<string> {
  private readonly config: IconPaths
  constructor(config: IconPaths) {
    this.config = config
  }
  generate(): Promise<string> {
    const str = `
    ${Object.keys(this.config).reduce(
      (str, iconName) =>
        (str += `import ${iconName} from '${this.config[iconName]}';`),
      ''
    )}
    
    export default {
      ${Object.keys(this.config).reduce(
        (str, iconName) => (str += `${iconName},`),
        ''
      )}
    }
    `
    return Promise.resolve(str)
  }
}
