const validateBrackets = (string) => {
  if (!string.length || string.length % 2 !== 0) {
    return false;
  }

  let arr = string.split("");
  let closingBrackets = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < arr.length / 2; i++) {
    if (closingBrackets[arr[i]] !== arr[arr.length - i - 1]) {
      return false;
      break;
    }
  }

  return true;
};

/*----------------------------------------------------------------------------------------------------------------------------*/

// NOTE: Solution 1 wont work for "()[]{}"
// Below Solution 2 will work for "()[]{}" and "{[()]}"
// ie. it will work for whenever we get a closing bracket, the bracket before that should have been the opening bracket of the same

const validateBrackets2 = (string) => {
  if (!string.length || string.length % 2 !== 0) return false;

  const stack = [];
  const pairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const char of string) {
    if (["(", "[", "{"].includes(char)) {
      stack.push(char);
    } else if (pairs[char]) {
      if (stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

/*----------------------------------------------------------------------------------------------------------------------------*/

// But if we want to check if all opening bracket have closing brackets, irrespective of the order, we can use the below solution 3
// Eg: "()[]{(}){[}]"

const validateBrackets3 = (string) => {
  if (!string.length || string.length % 2 !== 0) return false;

  const counts = {
    "(": 0,
    ")": 0,
    "{": 0,
    "}": 0,
    "[": 0,
    "]": 0,
  };

  for (const char of string) {
    if (counts.hasOwnProperty(char)) {
      counts[char]++;
    }
  }

  return (
    counts["("] === counts[")"] &&
    counts["{"] === counts["}"] &&
    counts["["] === counts["]"]
  );
};

/*----------------------------------------------------------------------------------------------------------------------------*/
