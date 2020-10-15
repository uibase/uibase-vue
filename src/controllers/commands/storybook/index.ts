import { Command } from 'commander'
import ICommand from '../ICommand'
import path from 'path'
import ThemeConfig from '@uiConfig/ThemeConfig'
import fs from 'fs'
import StorybookProvider from '@src/controllers/storybook/StorybookProvider'
import StorybookEjsRenderer from '@src/controllers/storybook/StorybookEjsRenderer'
import ProvidedFsFileRepository from '@src/repositories/ProvidedFsFileRepository'

export class StorybookCommand implements ICommand {
  private readonly workingDir: string
  private program: Command

  constructor(program: Command, workingDir: string) {
    this.workingDir = workingDir
    this.program = program
  }

  handle(): void {
    this.program
      .command('storybook')
      .option(
        '-c, --config <configPath>',
        'theme config file.',
        './uibase.config.js'
      )
      .option(
        '-d, --dist <distPath>',
        'distribution path',
        './src/uibase-stories'
      )
      .action((options: { config: string; dist: string }) => {
        const pwd = process.env.PWD || ''
        const configPath = path.resolve(pwd, options.config)
        const configContent = fs.readFileSync(configPath, {
          encoding: 'utf-8'
        })
        const config = eval(configContent) as ThemeConfig
        const pathToProvide = path.join(pwd, options.dist)
        const provider = new StorybookProvider(
          pathToProvide,
          'vue',
          new StorybookEjsRenderer('vue', '@uibase/uibase-vue'),
          new ProvidedFsFileRepository()
        )
        provider.provide(config).then((paths) => {
          console.log('UI Base::these stories.js are provided!')
          console.log(paths)
        })
      })
  }
}
