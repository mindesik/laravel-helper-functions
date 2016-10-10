## Laravel Helper Functions

Helper functions as nodejs module. See [Laravel docs](https://laravel.com/docs/master/helpers#available-methods) for methods.

```javascript
var lh = require('laravel-helper-functions');

lh.camel_case('Foo bar Baz');
```

### Notes

- Not all functions are available (only arrays and strings)

### List of available functions:

```javascript
// Arrays
array_add();
array_collapse();
array_divide();
array_dot();


// Strings
camel_case();
class_basename();
e();
ends_with();
snake_case();
str_limit();
starts_with();
str_contains();
str_finish();
str_is();
str_plural();
str_random();
str_singular();
str_slug();
studly_case();
title_case();
```
