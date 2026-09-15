const { slugify } = require('../src/slug');

test('converts the issue\'s own example', () => {
  expect(slugify('Hello, World!')).toBe('hello-world');
});

test('empty string stays empty', () => {
  expect(slugify('')).toBe('');
});

test('all-symbol input becomes empty after trimming', () => {
  expect(slugify('!!!')).toBe('');
});

test('already-slug input passes through unchanged', () => {
  expect(slugify('already-a-slug')).toBe('already-a-slug');
});
