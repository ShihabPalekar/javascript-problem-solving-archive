function flattenArray(array) {
  const ans = [];

  function flatten(arr) {
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        flatten(item);
      } else {
        ans.push(item);
      }
    });
  }

  flatten(array);

  return ans;
}
