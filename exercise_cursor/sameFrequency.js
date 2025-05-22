/* 
Exercise: Anagram Arrays
Write a function called sameFrequency that accepts two arrays of positive integers. The function should return true if both arrays contain the same numbers with the same frequencies (order does not matter), and false otherwise.
*/

// function sameFrequency(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     let correctIndex = arr2.indexOf(arr1[i]);
//     if (correctIndex === -1) {
//       return false;
//     }
//     arr2.splice(correctIndex, 1);
//   }
//   return true;
// }

function sameFrequency(arr1, arr2) {
  let obj1 = {};
  let obj2 = {};
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let ar of arr1) {
    obj1[ar] = (obj1[ar] || 0) + 1;
  }

  for (let ar of arr2) {
    obj2[ar] = (obj2[ar] || 0) + 1;
  }

  for (let key in obj1) {
    if (!(key in obj2)) {
        return false;
    }

    if (obj2[key] !== obj1[key]) {
        return false;
    }
  }
  return true;

}

console.log(sameFrequency([1, 2, 3, 2], [2, 1, 2, 3])); // true
console.log(sameFrequency([1, 2, 3], [1, 9, 3])); // false
console.log(sameFrequency([4, 4, 4, 2], [4, 2, 4, 4])); // true
console.log(sameFrequency([1, 2, 3], [1, 2, 2])); // false

/*
Constraints:
You may assume the arrays only contain positive integers.
Try to solve it with O(n) time complexity.
Hint:
Use two frequency counters (objects) to count the occurrences of each number in both arrays, then compare the counters.
Would you like a solution or a step-by-step hint?
*/
