function count(string) {
  const count = {};

  string.split("").forEach((char) => {
    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  });

  return count;
}


//Solution 2 (using array.reduce)
function count(string) {
  return string.split("").reduce(function (counts, char) {
    counts[char] = (counts[char] || 0) + 1;
    return counts;
  }, {});
}
