// using Set
const getUniqueVals = (arr) => {
  return [...new Set(arr)];
};

/*----------------------------------------------------------------------------------------------------------------------------*/

// without using set
const getUniqueVals2 = (arr) => {
  const ans = [];
  arr.forEach((i) => {
    if (!ans.includes(i)) {
      ans.push(i);
    }
  });
  return ans;
};

/*----------------------------------------------------------------------------------------------------------------------------*/

// NOTE: Using .includes() inside a loop makes this O(n²) in the worst case for large arrays.
// Below method is more optimized as it is O(n)

const getUniqueVals3 = (arr) => {
  const seen = {};
  const ans = [];

  for (const i of arr) {
    if (!seen[i]) {
      seen[i] = true;
      ans.push(i);
    }
  }

  return ans;
};

/*----------------------------------------------------------------------------------------------------------------------------*/
