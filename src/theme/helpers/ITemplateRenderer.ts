import { isConfig } from '@uiConfig/isConfig'

export default interface ITemplateRenderer {
  render(templateString: string, config: isConfig): Promise<string>
}
