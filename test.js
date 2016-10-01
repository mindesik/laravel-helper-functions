var lh = require('./lh');

console.log('camelCase:', lh.camelCase('Foo bar Baz'));
console.log('snakeCase:', lh.snakeCase('Foo bar Baz'));
console.log('strLimit:', lh.strLimit('Foo bar Baz', 5));
console.log('strContains:', lh.strContains('Foo bar Baz', 'bar'));
