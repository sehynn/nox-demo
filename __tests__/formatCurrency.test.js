const { formatCurrency } = require('../src/formatCurrency');

test('formats a number with cents as USD currency', () => {
  expect(formatCurrency(1234.5)).toBe('$1,234.50');
});

test('formats a whole number as USD currency', () => {
  expect(formatCurrency(5)).toBe('$5.00');
});

test('formats zero as USD currency', () => {
  expect(formatCurrency(0)).toBe('$0.00');
});

test('formats a negative number as USD currency', () => {
  expect(formatCurrency(-42.1)).toBe('-$42.10');
});

test('rounds to two decimal places', () => {
  expect(formatCurrency(1.005)).toBe('$1.01');
});
