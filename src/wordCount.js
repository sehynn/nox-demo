function wordCount(str) {
  const trimmed = str.trim();
  return trimmed === '' ? 0 : trimmed.split(/\s+/).length;
}

module.exports = { wordCount };
