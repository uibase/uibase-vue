interface IFactory<T, N> {
  create(name: N): T
}

export default IFactory
