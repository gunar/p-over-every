# p-over-every

`overEvery` for Promises (async, no concurrency)

Accepts synchronous and asynchronous (promise-returning) predicates.

It calls functions in order, that is, put your sync predicates at the beginning
to optimize for execution time.

## Usage

```js
const pOverEvery = require('p-over-every')

const isPair = x => x % 2
const isGtFour = x => Promise.resolve(x > 4)
const predicates = [isPair, isGtFour]
pOverEvery(predicates)(5).then(/* true */)
```


## Inspiration

- [lodash's overEvery](https://lodash.com/docs/4.17.4#overEvery)
- [promise-reduce](https://www.npmjs.com/package/promise-reduce)

## License

MIT [http://gunar.mit-license.org]()
