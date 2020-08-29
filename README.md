## useLoadMore hook for React.js

`Typescript, React.js, React hooks`

#### Usage

Pass the API url that you want to fetch from and the maximum expected results in the response (used to hide the 'Load more' button).

The hook is a generic function and accepts the interface for a result item.

```
const {list, loading, error, hasMore} = useLoadMore<IRow>(url, limit);
```

See [ListWrapper.tsx](src/components/ListWrapper.tsx) for real-life example.
