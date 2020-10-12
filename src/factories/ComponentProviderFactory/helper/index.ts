import ThemeConfig from '@uiConfig/ThemeConfig'
import { DiffResult } from '@theme/types/DiffResult'
import Global from '@uiConfig/Global'
import { RenderedFilePath } from '@theme/types/RenderedFilePath'

export function findConfigDiff(
  newConfig: ThemeConfig,
  prevConfig: ThemeConfig & { global?: Global }
): DiffResult {
  let result = [{}, {}] as DiffResult
  Object.keys(newConfig).forEach((name) => {
    const configName = name as keyof ThemeConfig
    if (newConfig[configName] && !prevConfig[configName]) {
      result = [
        { ...result[0], [configName]: newConfig[configName] },
        { ...result[1] }
      ]
    } else if (!newConfig[configName] && prevConfig[configName]) {
      result = [
        { ...result[0] },
        { ...result[1], [configName]: prevConfig[configName] }
      ]
    } else {
      const newConfigJsonStringify = JSON.stringify(newConfig[configName])
      const prevConfigJsonStringify = JSON.stringify(prevConfig[configName])
      if (newConfigJsonStringify !== prevConfigJsonStringify) {
        result = [
          { ...result[0], [configName]: newConfig[configName] },
          { ...result[1] }
        ]
      }
    }
  })
  Object.keys(prevConfig).forEach((name) => {
    const configName = name as keyof ThemeConfig
    if (!newConfig[configName] && prevConfig[configName]) {
      result = [
        { ...result[0] },
        { ...result[1], [configName]: prevConfig[configName] }
      ]
    }
  })
  return result
}

export function componentNamePath(
  path: RenderedFilePath,
  extension: string
): [string, string] {
  const regExp = new RegExp(`/([a-z0-9A-Z]*)\\.${extension}$`)
  const match = path.match(regExp)
  if (match) {
    return [match[1], path]
  } else {
    throw 'componentNamePathError:: Cannot find component name. Component file name should be [a-z0-9A-Z]* pattern. or check extension'
  }
}
