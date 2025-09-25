function points(games) {
  let result = 0;
  games.forEach((game) => {
    let [x, y] = game.split(":");
    if (x === y) {
      result += 1;
    } else if (x > y) {
      result += 3;
    }
  });
  return result;
}

//In above example our values are in string, so it wont work for 2 digit scores
//ie. "9" > "2" --> true | "10" > "2" --> false

function points(games) {
  let result = 0;
  games.forEach((game) => {
    let [x, y] = game.split(":").map(Number); // convert to numbers
    if (x === y) {
      result += 1;
    } else if (x > y) {
      result += 3;
    }
  });
  return result;
}

//using array.reduce
const points = (games) =>
  games.reduce((total, game) => {
    const [x, y] = game.split(":").map(Number);
    return total + (x > y ? 3 : x === y ? 1 : 0);
  }, 0);
