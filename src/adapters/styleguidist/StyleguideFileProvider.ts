import IComponentProvider from '@factory/ComponentProviderFactory/IComponentProvider'
import BaseUiTheme from '@src/theme'
import { resolve } from 'path'
import * as fs from 'fs'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const prettier = require('prettier')

export default class StyleguideFileProvider
  implements IComponentProvider<boolean> {
  private readonly pathToProvide: string
  private baseUi: BaseUiTheme
  constructor(baseUi: BaseUiTheme, pathToProvide: string) {
    this.baseUi = baseUi
    this.pathToProvide = pathToProvide
  }
  provide(): Promise<boolean> {
    const path = resolve(this.pathToProvide, 'styleguide.require.js')
    const result = prettier.format(this.baseUi.create('styleguide'), {
      parser: 'babel'
    })
    fs.mkdirSync(this.pathToProvide, { recursive: true })
    fs.writeFileSync(path, result)
    return Promise.resolve(true)
  }
}
