function splitNumber(num) {
  const hundreds = Math.floor(num / 100) * 100;
  const remainder = num - hundreds;
  return [hundreds, remainder];
}
