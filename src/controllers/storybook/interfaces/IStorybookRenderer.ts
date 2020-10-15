import { isConfig } from '@uiConfig/isConfig'

export default interface IStorybookRenderer {
  render(templateString: string, config: isConfig): Promise<string>
}
