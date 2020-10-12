import ThemeConfig from '@uiConfig/ThemeConfig'
import { DiffResult } from '@theme/types/DiffResult'
import Global from '@uiConfig/Global'

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
