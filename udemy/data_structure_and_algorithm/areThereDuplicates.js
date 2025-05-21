function areThereDuplicates() {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }

  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}

// function areThereDuplicates(...args) {
//   // good luck. (supply any arguments you deem necessary.)
//   const argSet = new Set(args);
//   console.log(argSet)

//   // Return true if the length of the Set is less than the number of arguments,
//   // indicating that there are duplicates
//   return argSet.size < args.length;

// }

console.log(areThereDuplicates(1, 2, 3, 5, 5));
