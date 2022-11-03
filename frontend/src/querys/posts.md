

```js
{
  posts(where: {
      dateQuery: {
        after: {
          year: 2020
        }
      }
    }) {
    nodes {
      title
    }
  }
}
```