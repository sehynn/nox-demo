function truncate(str, maxLen) {
  if (str.length <= maxLen) return str;
  if (maxLen <= 3) return str.slice(0, maxLen);
  return str.slice(0, maxLen - 3) + '...';
}

module.exports = { truncate };
