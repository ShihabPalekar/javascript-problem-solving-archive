//SCEANRIO 1
//return count

//Solution 1
function count(string) {
  const count = {};

  string.split("").forEach((char) => {
    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  });

  return count;
}

//Solution 2 (using array.reduce)
function count(string) {
  return string.split("").reduce(function (counts, char) {
    counts[char] = (counts[char] || 0) + 1;
    return counts;
  }, {});
}

/*----------------------------------------------------------------------------------------------------------------------------*/

//SCENARIO 2
//return most repeated letter (first most repeated letter)
function mostRepeated(str) {
  const count = {};

  str.split("").forEach(i => {
    count[i] = (count[i] || 0) + 1
  })

  let highestCount = 0
  let mostRepeatedLetter = null
  
  for(let key in count){
    if(count[key] > highestCount){
      highestCount = count[key]
      mostRepeatedLetter = key
    }
  }
  
  return mostRepeatedLetter
}

/*----------------------------------------------------------------------------------------------------------------------------*/

//SCENARIO 3
//return most repeated letter (last most repeated letter)
function mostRepeated(str) {
  const count = {};

  str.split("").forEach(i => {
    count[i] = (count[i] || 0) + 1
  })

  let highestCount = 0
  let mostRepeatedLetter = null
  
  for(let key in count){
    if(count[key] >= highestCount){
      highestCount = count[key]
      mostRepeatedLetter = key
    }
  }
  
  return mostRepeatedLetter
}

/*----------------------------------------------------------------------------------------------------------------------------*/

//SCENARIO 4
//return most repeated letter (array of all most repeated letters)
function mostRepeated(str) {
  const count = {};

  str.split("").forEach(i => {
    count[i] = (count[i] || 0) + 1
  })

  let highestCount = 0
  
  for(let key in count){
    if(count[key] > highestCount){
      highestCount = count[key]
    }
  }

  const mostRepeatedLetters = [];
  for (let key in count) {
    if (count[key] === highestCount) {
      mostRepeatedLetters.push(key);
    }
  }
  
  return mostRepeatedLetters
}

/*----------------------------------------------------------------------------------------------------------------------------*/

//SCENARIO 5
//return count of letters in descending order

function mostRepeated(str) {
  const count = {};

  str.split("").forEach(i => {
    count[i] = (count[i] || 0) + 1
  })

 const sorted = Object.entries(count)
    .sort((a, b) => b[1] - a[1]);
    
    return Object.fromEntries(sorted)
}

/*----------------------------------------------------------------------------------------------------------------------------*/
