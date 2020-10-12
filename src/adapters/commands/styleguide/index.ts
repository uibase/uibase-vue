import { Command } from 'commander'
import ICommand from 'src/scripts/commands/ICommand'
import ThemeConfig from '@uiConfig/ThemeConfig'
import path from 'path'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const styleguidist = require('vue-styleguidist')

// eslint-disable-next-line @typescript-eslint/no-var-requires
const createStyleguideConfig = require('./styleguide.config')

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
        const pwd = process.env.PWD || ''
        const uibaseConfigPath = path.resolve(pwd, options.config)
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const uibaseConfig = require(uibaseConfigPath) as ThemeConfig

        if (typeof uibaseConfig.icons === 'string') {
          uibaseConfig.icons = path.resolve(pwd, uibaseConfig.icons)
        }

        const userStyleguideConfig = options.styleguide
          ? require(path.resolve(pwd, options.styleguide))
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
