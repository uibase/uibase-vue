import styleguideConfig from './styleguide.config'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const styleguidist = require('vue-styleguidist')

type ExtendedStyleguidistOptions = { [key: string]: any }

export class Styleguidist {
  private readonly extendedOptions: ExtendedStyleguidistOptions
  private configFilePath: string
  constructor(
    extendedOptions: ExtendedStyleguidistOptions,
    configFilePath: string
  ) {
    this.extendedOptions = extendedOptions
    this.configFilePath = configFilePath
    this.styleguideConfig = styleguideConfig(this.extendedOptions)
  }
  server(): void {
    //do some
  }
  build(): void {
    //do some
  }
}
