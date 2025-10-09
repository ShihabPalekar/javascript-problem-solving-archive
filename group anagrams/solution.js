function groupAnagrams(arr) {
  let group = {};

  arr.forEach((i) => {
    let sorted = i.split("").sort().join("");
    if (!group[sorted]) {
      group[sorted] = [i];
    } else {
      group[sorted].push(i);
    }
  });

  return Object.values(group);
}
