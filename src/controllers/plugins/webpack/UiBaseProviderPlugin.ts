import webpack from 'webpack'
import Compilation = webpack.compilation.Compilation
import IComponentProvider from 'src/factories/ComponentProviderFactory/IComponentProvider'
import fs from 'fs'
import ThemeConfig from 'src/theme/types/config/ThemeConfig'
import { RenderedFilePath } from 'src/theme/types/RenderedFilePath'

export type UiBaseProviderOptionCriteria = {
  configPath: string
}

export default class UiBaseProviderPlugin {
  protected prevTimestamps: Map<any, any>
  protected readonly startTime: number
  protected configPath: string
  constructor(options: UiBaseProviderOptionCriteria) {
    this.configPath = options.configPath
    this.startTime = Date.now()
    this.prevTimestamps = new Map()
  }

  protected changedFiles(compilation: Compilation): string[] {
    const result = Array.from(compilation.fileTimestamps.keys()).filter(
      (watchfile) => {
        return (
          (this.prevTimestamps.get(watchfile) || this.startTime) <
          (compilation.fileTimestamps.get(watchfile) || Infinity)
        )
      }
    )
    this.prevTimestamps = compilation.fileTimestamps
    return result
  }

  protected compile(
    provider: IComponentProvider,
    callback: () => void,
    compilation: Compilation
  ): void {
    const configContent = fs.readFileSync(this.configPath, {
      encoding: 'utf-8'
    })
    const config = eval(configContent) as ThemeConfig
    provider.provide(config).then((paths: RenderedFilePath[]) => {
      console.log('Component Created', paths)
      paths.forEach((path) => compilation.fileDependencies.add(path))
      callback()
    })
  }
}
