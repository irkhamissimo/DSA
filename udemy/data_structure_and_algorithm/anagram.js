function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let char of str1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
    // console.log(frequencyCounter1[char])
  }
  for (let char of str2) {
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
// console.log(isAnagram(123,321));
// console.log(isAnagram('aaz','zak'));
// console.log(isAnagram('anagram','nagaram'));
// console.log(isAnagram('rat','car'));
// console.log(isAnagram('awesome','awesom'));
// console.log(isAnagram('qwerty','qeywrt'));
// console.log(isAnagram('texttwisttime','timetwisttext'));

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookUp = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookUp[letter] ? (lookUp[letter] += 1) : (lookUp[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    console.log(lookUp[letter]);

    if (!lookUp[letter]) {
      return false;
    } else {
      lookUp[letter] -= 1;
    }
  }

  return true;
}

console.log(validAnagram('aaz', 'zak'));
// console.log(validAnagram('anagram','nagaram'));
// console.log(validAnagram('rat','car'));
// console.log(validAnagram('awesome','awesom'));
// console.log(validAnagram('qwerty','qeywrt'));
// console.log(validAnagram('texttwisttime','timetwisttext'));
