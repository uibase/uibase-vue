#!/usr/bin/env node
import ThemeConfig from '../theme/types/configations/ThemeConfig'
import BaseUiTheme from '../theme/index'
import * as fs from 'fs'
import { resolve } from 'path'
import { ExecutableCommandOptions } from 'commander'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Command } = require('commander')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const prettier = require('prettier')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const styleguidist = require('vue-styleguidist')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const styleguideConfig = require(resolve(
  __dirname,
  '../../build/styleguide.config.js'
))

styleguideConfig.logger = {
  warn: console.warn,
  info: console.log,
  debug: console.log
}

const program = new Command()

const baseUi = new BaseUiTheme()
const workingDir: string = process.env.PWD as string

// create
program
  .command('create')
  .option('-c, --config <config>', 'select config file', './uibase.config.js')
  .option('-o, --outputDir <dirctory>', 'select output directory', './uibase')
  .action(
    (
      options: ExecutableCommandOptions & { config: string; outputDir: string }
    ) => {
      const workingDirConfigFilePath = resolve(workingDir, options.config)
      const outputFromWorkingDir = resolve(workingDir, options.outputDir)
      const outputFile = resolve(outputFromWorkingDir, 'uibase.theme.scss')
      const themeConfigStr: string = fs.readFileSync(workingDirConfigFilePath, {
        encoding: 'utf-8'
      })
      const themeConfig = eval(themeConfigStr) as ThemeConfig
      const defaultConfig = baseUi.getDefaultConfig()
      const config = baseUi.mergeConfig(defaultConfig, themeConfig)
      const result = prettier.format(baseUi.create(config), {
        parser: 'scss'
      })
      fs.mkdirSync(outputFromWorkingDir, { recursive: true })
      fs.writeFileSync(outputFile, result)
    }
  )

// init
program.command('init').action(() => {
  const defaultConfig = baseUi.getDefaultConfig()
  const defaultConfigStr = `
  module.exports = ${JSON.stringify(defaultConfig)}
  `
  const outputFile = resolve(workingDir, './uibase.config.js')
  const result = prettier.format(defaultConfigStr, { parser: 'babel' })
  fs.writeFileSync(outputFile, result)
})

// styleguide
program
  .command('styleguide')
  .option('-c, --config <config>', 'additional styleguide config file.')
  .action((options: { config: string }) => {
    styleguidist.default(styleguideConfig).server(() => {})
  })

program.parse(process.argv)
