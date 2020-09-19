import { Command } from 'commander'
import ICommand from './ICommand'
import { resolve } from 'path'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const styleguidist = require('vue-styleguidist')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const createStyleguideConfig = require(resolve(
  __dirname,
  '../../../build/styleguide.config.js'
))
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

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
      .option(
        '-c, --config <configPath>',
        'theme config file.',
        './uibase.config.js'
      )
      .option(
        '-s, --styleguide <styleguideConfigPath>',
        'extend styleguide config file'
      )
      .action((options: { config: string; styleguide?: string }) => {
        console.log(options.config, options.styleguide)
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const uibaseConfig = require(path.resolve(
          process.env.PWD,
          options.config
        ))

        const userStyleguideConfig = options.styleguide
          ? require(path.resolve(process.env.PWD, options.styleguide))
          : {}

        const styleguideConfig = createStyleguideConfig(
          userStyleguideConfig,
          uibaseConfig
        )

        styleguideConfig.logger = {
          warn: console.warn,
          info: console.log,
          debug: console.log
        }

        const result: any = styleguidist
          .default(styleguideConfig)
          .server((error: any, options: any) => {
            // do some callback
          })
      })
  }
}
