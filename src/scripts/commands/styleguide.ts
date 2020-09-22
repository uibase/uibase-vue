import { Command } from 'commander'
import ICommand from './ICommand'
import { resolve } from 'path'
import ThemeConfig from '../../theme/types/configations/ThemeConfig'

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
        const uibaseConfigPath = path.resolve(process.env.PWD, options.config)
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const uibaseConfig = require(uibaseConfigPath) as ThemeConfig

        if (typeof uibaseConfig.icons === 'string') {
          uibaseConfig.icons = path.resolve(process.env.PWD, uibaseConfig.icons)
        }

        const userStyleguideConfig = options.styleguide
          ? require(path.resolve(process.env.PWD, options.styleguide))
          : {}

        const styleguideConfig = createStyleguideConfig(
          userStyleguideConfig,
          uibaseConfig,
          uibaseConfigPath
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
