
```typescript
// inside ComponentObject constructor

constructor (userConfig: UserConfig) {
  // create model instance
  this.icon = new IconComponentModel(userConfig)
  this.sidebar = new SidebarComponentModel(userConfig)
  // create offer object(or class)
  const sidebarOffers = sidebar.offerDependenciesToProvider()
  const iconOffers = icon.offerDependenciesToProvider()
  // create dependency provider instance
  this.dependencyProvider = new DependencyProvider(
    sidebarOffers,
    iconOffers
  )
}
...

// method for every component
...
icon(): IconComponentObject|undefined {
  const iconComponentObject = this.icon.generate()
  // return user config component object or dependency value.
  // means create component object that uses for dependent components, if user config is not defined.
  return icon || this.dependencyProvider.icon()
}
```
