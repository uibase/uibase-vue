import { ConfigProperties } from '@uiConfig/ConfigProperties'

export default interface IStyleManager<T> {
  generate(configProperties: ConfigProperties): T
}
