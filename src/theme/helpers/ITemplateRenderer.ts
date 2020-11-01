import { IsComponentObject } from '@theme/types/IsComponentObject'

export default interface ITemplateRenderer {
  render(templateString: string, config: IsComponentObject): Promise<string>
}
