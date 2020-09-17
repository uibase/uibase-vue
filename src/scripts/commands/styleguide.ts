import { Command } from 'commander'
import ICommand from './ICommand'
import { resolve } from 'path'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const styleguidist = require('vue-styleguidist')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const styleguideConfig = require(resolve(
  __dirname,
  '../../../build/styleguide.config.js'
))
// add logger
styleguideConfig.logger = {
  warn: console.warn,
  info: console.log,
  debug: console.log
}

export class StyleguideCommand implements ICommand {
  private readonly workingDir: string
  private program: Command

  constructor(program: Command, workingDir: string) {
    this.workingDir = workingDir
    this.program = program
  }

  handle(): void {
    this.program
      .command('styleguide')
      .option('-c, --config <config>', 'additional styleguide config file.')
      .action((options: { config: string }) => {
        const result: any = styleguidist
          .default(styleguideConfig)
          .server((error: any, options: any) => {
            // do some callback
          })
      })
  }
}
