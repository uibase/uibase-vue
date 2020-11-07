import DependencyOffer from '@theme/types/DependencyOffers'

export default interface IComponentModel<T> {
  offerDependenciesToProvider(): DependencyOffer
  generate(): T
}
