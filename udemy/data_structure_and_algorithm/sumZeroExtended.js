function zeroSumArray(arr) {
  // Check if any number in the array is 0
  if (arr.includes(0)) {
    return [0];
  }

  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Create a variable to store the result array
  const result = [];

  // Loop through the sorted array, starting from the first and last elements
  for (let i = 0, j = arr.length - 1; i <= j; ) {
    // If the sum of the current first and last elements is 0, add the current first and last elements to the result array and move to the next first and last elements
    if (arr[i] + arr[j] === 0) {
      result.push(arr[i], arr[j]);
      i++;
      j--;
    }
    // If the sum of the current first and last elements is greater than 0, move to the next last element
    else if (arr[i] + arr[j] > 0) {
      j--;
    }
    // If the sum of the current first and last elements is less than 0, move to the next first element
    else {
      i++;
    }
  }

  // Return the result array
  return result;
}

// Test the function with different arrays
console.log(zeroSumArray([-4, -3, -2, -1, 0, 1, 2, 5]));
console.log(zeroSumArray([-4, -3, -2, -1, 1, 2, 3, 5]));
console.log(zeroSumArray([-4, -3, -1, 1, 2, 5]));
console.log(zeroSumArray([-4, -1, 1, 2, 5]));
console.log(zeroSumArray([-4, 2, 5]));
