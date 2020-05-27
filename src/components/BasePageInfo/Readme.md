```vue
const pageInfo = {
  current_page: 1,
  from: 1,
  last_page: 1,
  per_page: 50000,
  to: 3,
  total: 3
}
<base-page-info :total="pageInfo.total" :from="pageInfo.from" :to="pageInfo.to" />
```