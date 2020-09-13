#!/usr/bin/env node
import ThemeConfig from '../theme/types/configations/ThemeConfig'
import themeConfigCreator from '../theme/index'
import * as fs from 'fs'
import { resolve } from 'path'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Command } = require('commander')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const prettier = require('prettier')

const program = new Command()

program
  .command('create')
  .option('-c, --config <config>', 'select config file', './uibase.config.js')
  .option('-o, --outputDir <dirctory>', 'select output directory', './uibase')
  .action((options) => {
    const workingDir = process.env.PWD
    const workingDirConfigFilePath = resolve(workingDir, options.config)
    const outputFromWorkingDir = resolve(workingDir, options.outputDir)
    const outputFile = resolve(outputFromWorkingDir, 'ui.base.scss')
    const themeConfigStr: string = fs.readFileSync(workingDirConfigFilePath, {
      encoding: 'utf-8'
    })
    const themeConfig = eval(themeConfigStr) as ThemeConfig
    const result = prettier.format(themeConfigCreator(themeConfig), {
      parser: 'scss'
    })
    fs.mkdirSync(outputFromWorkingDir, { recursive: true })
    fs.writeFileSync(outputFile, result)
  })

program.parse(process.argv)
