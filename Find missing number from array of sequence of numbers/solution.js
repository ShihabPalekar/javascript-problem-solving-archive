// SCENARIO 1
// Q: [1, 2, 3, 5, 6]
// A: 4
function findMissingNum(nums) {
  let ans;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] - nums[i] !== 1) {
      ans = nums[i] + 1;
      break;
    }
  }
  return ans ?? null;
}

/*----------------------------------------------------------------------------------------------------------------------------*/

// SCENARIO 2
// More than one missing num
// Q: [1, 2, 3, 5, 6, 8]
// A: [4,7]

//Return array
function findMissingNums(nums) {
  let ans = [];
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] - nums[i] !== 1) {
      ans.push(nums[i] + 1);
    }
  }
  return ans;
}

//Return array if multiple nums missing, just num if one num missing, and null if no num is missing
//[1,2,3,5] --> 4
//[5,6,8,9,11] --> [ 7, 10 ]
//[1,2,3,4] --> null
function findMissingNums(nums) {
  let ans = [];
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] - nums[i] !== 1) {
      ans.push(nums[i] + 1);
    }
  }
  return !ans.length ? null : ans.length === 1 ? ans[0] : ans;
}

/*----------------------------------------------------------------------------------------------------------------------------*/

// SCENARIO 3
// More than one missing nums and they can be consecutive
// [1, 2, 5, 6, 8] --> [3,4,7]
function findMissingNums(nums) {
  let ans = [];
  for (let i = 0; i < nums.length - 1; i++) {
    let diff = nums[i + 1] - nums[i];
    if (diff > 1) {
      for (let j = 1; j < diff; j++) {
        ans.push(nums[i] + j);
      }
    }
  }
  return !ans.length ? null : ans.length === 1 ? ans[0] : ans;
}

/*----------------------------------------------------------------------------------------------------------------------------*/

// SCENARIO 4
// If array is not sorted
// Eg: [6,2,1,5,8]

function findMissingNums(nums) {
  nums.sort((a, b) => a - b);

  let ans = [];
  for (let i = 0; i < nums.length - 1; i++) {
    let diff = nums[i + 1] - nums[i];
    if (diff > 1) {
      for (let j = 1; j < diff; j++) {
        ans.push(nums[i] + j);
      }
    }
  }
  return !ans.length ? null : ans.length === 1 ? ans[0] : ans;
}

/*----------------------------------------------------------------------------------------------------------------------------*/
