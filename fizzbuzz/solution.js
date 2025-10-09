function fizzbuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

/*----------------------------------------------------------------------------------------------------------------------------*/

const fizzbuzz = (n) => {
  for (let i = 1; i <= n; i++)
    console.log((i % 3 ? "" : "fizz") + (i % 5 ? "" : "buzz") || i);
};
