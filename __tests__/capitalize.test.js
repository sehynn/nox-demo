const { capitalize } = require('../src/capitalize');

test('uppercases the first letter, leaves the rest unchanged', () => {
  expect(capitalize('hello world')).toBe('Hello world');
});

test('empty string returns empty string', () => {
  expect(capitalize('')).toBe('');
});

test('already-capitalized input is unchanged', () => {
  expect(capitalize('Hello')).toBe('Hello');
});

test('single-character string', () => {
  expect(capitalize('h')).toBe('H');
});
