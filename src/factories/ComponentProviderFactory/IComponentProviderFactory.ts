import { ComponentType } from '@theme/types/ComponentType'

interface IComponentProviderFactory<T> {
  create(name: ComponentType): T
}

export default IComponentProviderFactory
