// function averagePair(arr, target) {
//   // add whatever parameters you deem necessary - good luck!
//   // Check for empty array or invalid target
//   if (arr.length === 0 || target < 0) return false;

//   // Initialize pointers at the start and end of the array
//   let start = 0;
//   let end = arr.length - 1;

//   // Loop until the pointers meet or pass each other
//   while (start < end) {
//     // Calculate the average of the current pair
//     const average = (arr[start] + arr[end]) / 2;

//     // If the average matches the target, return true
//     if (average === target) return true;

//     // If the average is less than the target, move the left pointer forward
//     // to try a larger pair
//     if (average < target) start++;

//     // If the average is greater than the target, move the right pointer backward
//     // to try a smaller pair
//     if (average > target) end--;
//   }

//   // If no pair is found, return false
//   return false;
// }

function averagePair1(arr, target) {
  if (arr.length === 0 || target < 0) return false;

  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    const average = (arr[start] + arr[end]) / 2;

    if (average === target) return true;
    if (average < target) start++;
    if (average > target) end--;
  }
  return false;
}

console.log(averagePair1([1, 2, 3], 2.5)); // true
console.log(averagePair1([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair1([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair1([], 4)); // false
