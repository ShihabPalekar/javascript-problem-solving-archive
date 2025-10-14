function compressString(str) {
  let ans = "";
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      ans += `${str[i]}${count}`;
      count = 1;
    }
  }

  return ans;
}

// NOTE: If for single occurrence we dont wanna put x1 and just x, we can use belowe function.

function compressString(str) {
  let ans = "";
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      ans += `${str[i]}${count > 1 ? count : ""}`;
      count = 1;
    }
  }

  return ans;
}
