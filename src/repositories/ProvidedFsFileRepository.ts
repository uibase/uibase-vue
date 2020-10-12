import * as fs from 'fs'
import { resolve } from 'path'
import IProvidedFileRepository from '@src/repositories/IProvidedFileRepository'

export default class ProvidedFsFileRepository
  implements IProvidedFileRepository {
  add(path: string, fileName: string, str: string): void {
    fs.mkdirSync(path, { recursive: true })
    fs.writeFileSync(resolve(path, fileName), str, { encoding: 'utf-8' })
  }
  remove(path: string, fileName: string): void {
    fs.unlinkSync(resolve(path, fileName))
  }
}
