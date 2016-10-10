var lh = require('./lh');

// Arrays
console.log('array_add', lh.array_add({foo: 'bar'}, 'bar', 'baz'));
console.log('array_collapse', lh.array_collapse({foo: 'bar', bar: 'baz'}, {baz: 'bar'}));
console.log('array_divide', lh.array_divide({foo: 'bar', bar: 'baz'}));
console.log('array_dot', lh.array_dot({foo: {bar: {baz: 'bar'}}, bar: 'baz'}));

// Strings
console.log('camel_case:', lh.camel_case('Foo bar Baz'));
console.log('class_basename:', lh.class_basename('Foo\\Bar\\Baz'));
console.log('e:', lh.e('<a href="#foo">bar</a>'));
console.log('ends_with:', lh.ends_with('Foo Bar', 'Bar'));
console.log('snake_case:', lh.snake_case('Foo bar Baz'));
console.log('str_limit:', lh.str_limit('Foo bar Baz', 5));
console.log('starts_with:', lh.starts_with('Foo bar Baz', 'Foo'));
console.log('str_contains:', lh.str_contains('Foo bar Baz', 'bar'));
console.log('str_finish:', lh.str_finish('http://foo.bar/baz', '/'));
console.log('str_is:', lh.str_is('foo*', 'foobar'));
console.log('str_plural:', lh.str_plural('car'));
console.log('str_random:', lh.str_random(16));
console.log('str_singular:', lh.str_singular('cars'));
console.log('str_slug:', lh.str_slug('laravel helper functions'));
console.log('studly_case:', lh.studly_case('foo bar'));
console.log('title_case:', lh.title_case('foo bar'));
