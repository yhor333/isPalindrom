function isPalindrom(word) {
  const length = word.length;
  let counter = 0;
  for (let i = 0, j = word.length - 1; i < word.length; i++, --j) {
    if (word[i] === word[j]) {
      counter++;
    }
  }
  if (length === counter) {
    return true;
  }
  return false;
}
