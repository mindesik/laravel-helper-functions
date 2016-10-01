## Laravel Helper Functions

See [Laravel docs](https://laravel.com/docs/master/helpers#available-methods) for methods.

```javascript
var lh = require('laravel-helper-functions');

console.log(lh.camelCase('Foo bar Baz'));
```

### Notes

- Not all functions are available
- All functions are camel case and called from `laravel-helper-functions` object.

### List of available functions:

```javascript
camelCase();
snakeCase();
strLimit();
strContains();

```