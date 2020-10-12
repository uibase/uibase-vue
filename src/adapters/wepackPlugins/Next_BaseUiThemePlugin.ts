import { Compiler } from 'webpack'
// import FileProviderFactory from '../factory/provider/fileProvider/FileProviderFactory'
// import ThemeConfig from '@uiConfig/ThemeConfig'
// import BaseUiTheme from '@theme/index'
// import * as fs from 'fs'
// import path from 'path'

export type BaseUiThemePluginOption = {
  pathToProvide: string
  configPath: string
}

export default class BaseUiThemePlugin {
  private readonly options: BaseUiThemePluginOption
  private prevTimestamps: Map<any, any>
  private readonly startTime: number
  constructor(options: BaseUiThemePluginOption) {
    this.options = options
    this.startTime = Date.now()
    this.prevTimestamps = new Map()
  }
  apply(compiler: Compiler) {
    compiler.hooks.beforeRun.tapAsync('create files', (compiler, callback) => {
      console.log('run!!!!')
      callback()
    })
    // add config to watching files.
    compiler.hooks.emit.tapAsync('emit', (compilation, callback) => {
      console.log('emit!!!!')
      callback()
    })
  }
}
