const { truncate } = require('../src/truncate');

test('returns the string unchanged when no truncation is needed', () => {
  expect(truncate('hi', 10)).toBe('hi');
});

test('truncates and appends "..." when the string is too long', () => {
  const result = truncate('a very long string here', 10);
  expect(result).toBe('a very ...');
  expect(result.length).toBeLessThanOrEqual(10);
});

test('maxLen=0 never exceeds the bound', () => {
  const result = truncate('hello', 0);
  expect(result.length).toBeLessThanOrEqual(0);
});

test('maxLen=2 hard-truncates with no room for an ellipsis', () => {
  const result = truncate('hello', 2);
  expect(result).toBe('he');
  expect(result.length).toBeLessThanOrEqual(2);
});

test('maxLen=3 is still too small for a full ellipsis suffix', () => {
  const result = truncate('hello', 3);
  expect(result).toBe('hel');
  expect(result.length).toBeLessThanOrEqual(3);
});

test('longer maxLen produces output length exactly equal to maxLen when truncated', () => {
  const result = truncate('this is a twenty char', 10);
  expect(result.length).toBe(10);
});
