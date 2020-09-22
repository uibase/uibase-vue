# UIBase

**THIS PROJECT IS WORK IN PROGRESS**

## Concept

* provides own theme UI with less configure.
* to make very simple UI properties.

## why we need this?

* other ui framework is very useful. but its has many properties on provided components.


## Install

```shell script
$ npm install @uibase/uibase-vue
```

### Install Dependencies

This project need `vue-svg-loader`

```shell script
$ npm install vue-svg-loader
```

## Get Start.

### initialize `uibase.config.js`

```shell script
$ npx uibase init
```
### create files

```shell script
$ npx uibase create
```

### vue cli application

#### add vue.config.js and setup

```javascript
const path = require("path");
// Load BaseUiThemePlugin to watch uibase.config.js changes
const BaseUiThemePlugin = require("@uibase/uibase-vue/dist/plugins/BaseUiThemePlugin")
  .default;

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // set theme scss file for prependData
        prependData: '@import "uibase/uibase.theme.scss";'
      }
    }
  },
  chainWebpack: config => {
    // initialize svg-loader
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");

    // initialize BaseUiPlugin
    const baseUiThemePlugin = config.plugin("baseUi");
    baseUiThemePlugin.use(BaseUiThemePlugin, [
      {
        configPath: path.resolve(process.env.PWD, "./uibase.config.js"),
        pathToProvide: path.resolve(process.env.PWD, "./uibase/")
      }
    ]);
  }
};
```

### load BaseUi vue plugin

```javascript
import Vue from "vue";
import App from "./App.vue";
// BaseUi Plugin
import BaseUi from "@uibase/uibase-vue";
// Load Icons
import icons from "../uibase/icons";
// setup.
Vue.use(BaseUi, { icons });
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
```
