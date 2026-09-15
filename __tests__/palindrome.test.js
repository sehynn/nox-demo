const { isPalindrome } = require('../src/palindrome');

test('simple true case', () => {
  expect(isPalindrome('racecar')).toBe(true);
});

test('simple false case', () => {
  expect(isPalindrome('hello')).toBe(false);
});

test('empty string is a palindrome', () => {
  expect(isPalindrome('')).toBe(true);
});

test('single character is a palindrome', () => {
  expect(isPalindrome('a')).toBe(true);
});

test('mixed case is treated case-insensitively', () => {
  expect(isPalindrome('Racecar')).toBe(true);
});

test('spaces are not stripped, so a spaced palindrome phrase is not a palindrome here', () => {
  expect(isPalindrome('a man a plan a canal panama')).toBe(false);
});
