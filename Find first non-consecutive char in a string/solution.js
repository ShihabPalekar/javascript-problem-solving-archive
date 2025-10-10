function uniqueChar(str) {
  for (let i = 0; i < str.length; i++) {
    let curr = str[i];
    let prev = str[i - 1];
    let next = str[i + 1];
    if (curr !== prev && curr !== next) {
      return curr;
    }
  }
  return null;
}
