const { wordCount } = require('../src/wordCount');

test('empty string has 0 words', () => {
  expect(wordCount('')).toBe(0);
});

test('whitespace-only string has 0 words', () => {
  expect(wordCount('   \t  ')).toBe(0);
});

test('single word', () => {
  expect(wordCount('hello')).toBe(1);
});

test('multiple words with single spaces', () => {
  expect(wordCount('the quick brown fox')).toBe(4);
});

test('multiple words with irregular spacing', () => {
  expect(wordCount('the   quick    brown')).toBe(3);
});

test('leading and trailing whitespace is ignored', () => {
  expect(wordCount('  hello world  ')).toBe(2);
});
