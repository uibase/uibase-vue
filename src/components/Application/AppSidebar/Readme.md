
全部ある場合
```vue
const routes = [
    {
      name: 'ダッシュボード',
      to: '',
      num: null,
      open: true
    },
    {
      name: 'メニュー',
      to: '',
      open: true,
      children: [{ name: 'サブメニュー', to: '' }]
    },
  ];
<app-sidebar :routes="routes" />
```

