function maxSubarraySum(arr, num) {
  // If the length of the subarray is greater than the length of the array, return null
  if (num > arr.length) {
    return null;
  }

  // Create a variable to store the maximum sum of the subarray
  let maxSum = 0;

  // Create a variable to store the current sum of the subarray
  let currentSum = 0;

  // Loop through the first num elements in the array to calculate the initial sum of the subarray
  for (let i = 0; i < num; i++) {
    // console.log(arr[i])
    currentSum += arr[i];
  }

  // Set the maximum sum to the initial sum of the subarray
  maxSum = currentSum;
  // Loop through the remaining elements in the array
  for (let i = num; i < arr.length; i++) {
    // Calculate the current sum of the subarray by subtracting the first element and adding the next element
    currentSum = currentSum - arr[i - num] + arr[i];
    console.log(currentSum);

    // Update the maximum sum if the current sum is greater
    maxSum = Math.max(maxSum, currentSum);
  }
  // Return the maximum sum
  return maxSum;
}

// Test the function with different arrays and subarray lengths
(maxSubarraySum([100, 200, 300, 400], 2)); // 700
// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
// console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
// console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
// console.log(maxSubarraySum([2, 3], 3)); // null
