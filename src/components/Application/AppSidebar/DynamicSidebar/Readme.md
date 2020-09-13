```vue
const routes = [
  { 
    name: 'テスト',
    num: null,
    to: '/test',
    open: true,
    children: [
      { name: 'テスト子供1', num: 3, to: '/test/child1', click: (evt) => alert("test!!") },
      { name: 'テスト子供2', num: null, to: '/test/child2' },
      { name: 'テスト子供3', num: null, to: '/test/child3' },
      { name: 'テスト子供4', num: null, to: '', open: false, children: [ { name: 'テスト孫1', to: '', num: 1 } ] },
    ]
  },
  { name: 'テスト2', num: 100, to: '/test' }
];
<app-dynamic-sidebar :routes="routes" />
```

```vue
const routes1 = [
  { 
    name: 'テスト',
    num: null,
    to: '/test',
    open: true,
    children: [
      { name: 'テスト子供1', num: 3, to: '/test/child1', click: (evt) => alert("test!!") },
      { name: 'テスト子供2', num: null, to: '/test/child2' },
      { name: 'テスト子供3', num: null, to: '/test/child3' },
      { name: 'テスト子供4', num: null, to: '', open: false, children: [ { name: 'テスト孫1', to: '', num: 1 } ] },
    ]
  },
  { name: 'テスト2', num: 100, to: '/test' }
];
const routes2 = [
  { 
    name: 'テスト',
    num: null,
    to: '/test',
    open: true,
    children: [
      { name: 'テスト子供1', num: 30, to: '/test/child1', click: (evt) => alert("test!!") },
      { name: 'テスト子供2', num: 1, to: '/test/child2' },
      { name: 'テスト子供3', num: 3, to: '/test/child3' },
      { name: 'テスト子供4', num: 1000, to: '', open: false, children: [ { name: 'テスト孫1', to: '', num: 1 } ] },
    ]
  },
  { name: 'テスト2', num: 100, to: '/test' }
];
const selectedRoute = 1;
<div>
  <app-dynamic-sidebar :routes="selectedRoute === 1 ? routes1 : routes2" />
  <hr />
  <base-button @click="selectedRoute = (selectedRoute === 1 ? 2 : 1)">Toggle</base-button>
</div>
```