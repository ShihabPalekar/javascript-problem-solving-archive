//SOLUTION 1
function mergeSortedArrays(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

// above approach is is more time complex coz we are sperading each char in both arrays & sorting each char
// It also takes extra memory to create the spread array.



//SOLUTION 2
function mergeSortedArrays(arr1, arr2) {
  let i = 0,
    j = 0;
  const merged = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  // add remaining
  return merged.concat(arr1.slice(i)).concat(arr2.slice(j));
}

/*
    at the end of while loop, either arr1 or arr2 might have some leftover elements
    so slice takes all remaining elements of arr starting from index i/j until the end
    and concat creates a new array by joining arrays together
    -
    slices only copy what’s left after the main while loop
    so, concat and slice also take time but less compared to soln1
*/



//SOLUTION 3
function mergeSortedArrays(arr1, arr2) {
    let i = 0, j = 0;
    const merged = [];
  
    // Merge while both arrays have elements left
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        merged.push(arr1[i]);
        i++;
      } else {
        merged.push(arr2[j]);
        j++;
      }
    }
  
    while (i < arr1.length) {
      merged.push(arr1[i]);
      i++;
    }
  
    while (j < arr2.length) {
      merged.push(arr2[j]);
      j++;
    }
  
    return merged;
  }
  
  
  /*
    Instead of slice + concat like in soln2, we added two small while loops at the end
    Functionally the same, but avoids making extra arrays
  */

