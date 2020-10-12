export default interface IProvidedFileRepository {
  add(path: string, fileName: string, str: string): void
  remove(path: string, fileName: string): void
}
