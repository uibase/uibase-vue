import { isConfig } from '@uiConfig/isConfig'

export default interface ITemplateRenderer {
  render(templateFilePath: string, config: isConfig): Promise<string>
}
