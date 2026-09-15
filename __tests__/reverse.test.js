const { reverse } = require('../src/reverse');

test('reverses a simple string', () => {
  expect(reverse('hello')).toBe('olleh');
});
