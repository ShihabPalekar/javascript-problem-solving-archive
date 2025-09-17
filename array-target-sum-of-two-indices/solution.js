// Solution 1
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};



//Solution 2  (Using Hash Map)
var twoSumHashMap = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let needed = target - nums[i];

    if (map.has(needed)) {
      return [map.get(needed), i];
    }

    map.set(nums[i], i);
  }
};



//Solution 3  (Using Object)
var twoSumUsingObject = function (nums, target) {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    let needed = target - nums[i];

    if (needed in obj) {
      return [obj[needed], i];
    }

    obj[nums[i]] = i;
  }
};
