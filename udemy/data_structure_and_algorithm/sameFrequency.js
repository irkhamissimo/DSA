// function array(arr) {
//   let obj = {};
//   for (let element of arr) {
//     obj[element] = ++obj[element] || 1;
//   }
//   console.log(obj);
//   return obj;
// }

// array([1,2,3,4])

function sameFrequency(num1, num2) {
  num1 = num1.toString();
  num2 = num2.toString();

  if (num1.length !== num2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let char of num1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
    // console.log(frequencyCounter1[char])
  }
  for (let char of num2) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
    // console.log(frequencyCounter2[char])
  }
  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
