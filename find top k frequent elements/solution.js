function topElements(arr, k) {
  let count = {};

  arr.forEach((i) => {
    count[i] = (count[i] || 0) + 1;
  });

  const sorted = Object.entries(count).sort((a, b) => b[1] - a[1]);
  const topK = sorted.slice(0, k).map((i) => Number(i[0]));

  return topK;
}
