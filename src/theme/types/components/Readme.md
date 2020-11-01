## Config Parameters

Config & ComponentObject

* user input should be `config`
* configs for create component should be `componentObject`

some configs have difference from user input, like `icons`

exp:<br />
`icons` for user input are like this.

```js
const icons = {
  paths: './assets/icons',
  defaultColors: true,
  colors: {
    otherColor: '#ff00ff',
    ...
  }
}
``` 

config for creating component.

```js
const icons = {
  paths: {
    iconName: '/path/to/directory',
    ...
  },
  colors: {
    colorName: '#ff00ff',
    ...
  }
}
```

