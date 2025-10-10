function flattenObject(obj) {
  let ans = {};

  function flatten(currObj, parentKey = "") {
    for (let key in currObj) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;

      if (typeof currObj[key] === "object" && currObj[key] !== null) {
        flatten(currObj[key], newKey);
      } else {
        ans[newKey] = currObj[key];
      }
    }
  }

  flatten(obj);
  return ans;
}
