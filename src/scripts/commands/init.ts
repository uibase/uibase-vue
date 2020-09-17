import { Command } from 'commander'
import BaseUiTheme from '../../theme'
import ICommand from './ICommand'
import { resolve } from 'path'
import * as fs from 'fs'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const prettier = require('prettier')

export class InitCommand implements ICommand {
  private readonly workingDir: string
  private program: Command

  constructor(program: Command, workingDir: string) {
    this.workingDir = workingDir
    this.program = program
  }

  handle(): void {
    this.program.command('init').action(() => {
      const defaultConfig = BaseUiTheme.getDefaultConfig()
      const defaultConfigStr = `
  module.exports = ${JSON.stringify(defaultConfig)}
  `
      const outputFile = resolve(this.workingDir, './uibase.config.js')
      const result = prettier.format(defaultConfigStr, { parser: 'babel' })
      fs.writeFileSync(outputFile, result)
    })
  }
}
