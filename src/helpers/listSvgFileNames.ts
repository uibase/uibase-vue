import * as fs from 'fs'
import { IconPaths } from '@uiConfig/Icon'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const camelCase = require('lodash.camelcase')

export const listSvgFileNames = (dir: string): IconPaths => {
  const files = {} as IconPaths
  fs.readdirSync(dir, { withFileTypes: true }).forEach((file) => {
    if (file.isFile() && file.name.match(/\.svg$/)) {
      const fileName = camelCase(file.name.replace(/\.svg$/, ''))
      const keyName = `Icon${fileName.charAt(0).toUpperCase() +
        fileName.slice(1)}`
      files[keyName] = `${dir}/${file.name}`
    }
  })
  return files
}

