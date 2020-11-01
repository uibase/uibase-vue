import { IsComponentObject } from '@theme/types/IsComponentObject'

export default interface IStorybookRenderer {
  render(templateString: string, config: IsComponentObject): Promise<string>
}
