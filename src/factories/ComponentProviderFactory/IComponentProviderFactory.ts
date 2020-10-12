interface IComponentProviderFactory<T> {
  create(name: 'vue' | 'react'): T
}

export default IComponentProviderFactory
