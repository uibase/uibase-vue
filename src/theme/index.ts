import ButtonComponent, {
  defaultConfig as buttonDefaultConfig
} from './ButtonComponent'
import ThemeConfig from './types/configations/ThemeConfig'

export default (themeConfig: ThemeConfig): string => {
  let str = ''
  const buttonConfig = themeConfig.button
    ? themeConfig.button
    : buttonDefaultConfig
  str += new ButtonComponent(buttonConfig).generate()
  str += `\n`
  return str
}
