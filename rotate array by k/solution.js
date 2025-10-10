function rotateArray(arr, k) {
  const rotatedNums = arr.splice(-k);
  return [...rotatedNums, ...arr];
}
