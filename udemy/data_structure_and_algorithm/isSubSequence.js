function isSubsequence(str1, str2) {
  // Create a variable to keep track of the index in str2
  // let index = 0;
  // // Loop through each character in str1
  // for (let i = 0; i < str1.length; i++) {
  //   // Find the index of the current character in str1 in str2
  //   index = str2.indexOf(str1[i], index);
  //   // If the character is not found, return false
  //   if (index === -1) {
  //     return false;
  //   }
  // }

  // // If all characters in str1 are found in str2 in order, return true
  // return true;

  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

console.log(isSubsequence('word', 'hello world')); // true
// console.log(isSubsequence("sing", "sting")); // true
// console.log(isSubsequence("abc", "abracadabra")); // true
// console.log(isSubsequence("abc", "acb")); // false
