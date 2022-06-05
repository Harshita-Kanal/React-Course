
## Redux

`compose()` - Take a set of functions and create a function to pass a value to each of them, take multiple functions and compose them together.
```js
const funcA = string => string.toUpperCase()
const funcB = string => string.bold()

const doBoth = string => compose(funcA, funcB);

console.log(doboth('hello'));

```
