import webpack from 'webpack'
import Compilation = webpack.compilation.Compilation
import IComponentProvider from '@src/providers/IComponentProvider'
import fs from 'fs'
import { RenderedFilePath } from 'src/theme/types/RenderedFilePath'
import UserConfig from '@theme/types/UserConfig'
import { RouterName } from '@src/providers/vue/VueComponentProvider'

export type UiBaseProviderOptionCriteria = {
  configPath: string
  router: RouterName
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
    const config = eval(configContent) as UserConfig
    provider.provide(config).then((paths: RenderedFilePath[]) => {
      console.log('Component Created', paths)
      paths.forEach((path) => compilation.fileDependencies.add(path))
      callback()
    })
  }
}
