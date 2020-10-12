import IThemeComponent from '@theme/components/IThemeComponent'
import Button from '@uiConfig/Button'
import Global from '@uiConfig/Global'
import { resolve } from 'path'
import renderEjsTemplateSync from '@helper/renderEjsTemplateSync'

export default class VueButtonComponent implements IThemeComponent<string> {
  private readonly config: Button
  private readonly globalConfig: Global
  constructor(config: Button, globalConfig: Global) {
    this.config = config
    this.globalConfig = globalConfig
  }
  generate(): Promise<string> {
    return renderEjsTemplateSync(
      resolve(__dirname, './template.vue.ejs'),
      this.config,
      this.globalConfig
    )
  }
}
