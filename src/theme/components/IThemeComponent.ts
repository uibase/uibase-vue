export default interface IThemeComponent<T> {
  /**
   * Generate Sass Configuration String.
   */
  generate(): Promise<T>
}
