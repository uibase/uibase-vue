import { IsComponentObject } from '@theme/types/IsComponentObject'

export default interface ITemplateRenderer {
  /**
   * render Component Template
   * @param templateString
   * @param config
   * @param options other options
   */
  render(
    templateString: string,
    config: IsComponentObject,
    options?: { [key: string]: any }
  ): Promise<string>
}
