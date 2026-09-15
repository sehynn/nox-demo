function isPalindrome(str) {
  const lower = str.toLowerCase();
  return lower === lower.split('').reverse().join('');
}

module.exports = { isPalindrome };
