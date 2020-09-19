import IProvider from '../IProvider'
import BaseUiTheme from '../../../../theme'
import { resolve } from 'path'
import * as fs from 'fs'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const prettier = require('prettier')

export default class StyleguideFileProvider implements IProvider {
  private readonly pathToProvide: string
  private baseUi: BaseUiTheme
  constructor(baseUi: BaseUiTheme, pathToProvide: string) {
    this.baseUi = baseUi
    this.pathToProvide = pathToProvide
  }
  provide(): void {
    const path = resolve(this.pathToProvide, 'styleguide.require.js')
    const result = prettier.format(this.baseUi.create('styleguide'), {
      parser: 'babel'
    })
    fs.mkdirSync(this.pathToProvide, { recursive: true })
    fs.writeFileSync(path, result)
  }
}
