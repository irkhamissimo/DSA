/*
Write a function called areThereDuplicates that accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. The function should return true if any value appears more than once, and false otherwise.
Constraints:
The function should work with any number of arguments.
The arguments can be of any type (numbers, strings, etc.).
Aim for O(n) time complexity.
Hint:
Use a frequency counter (object) to keep track of how many times each argument appears.
*/
function areThereDuplicates(...args) {
    let obj = {};

    for (let arg of args) {
        obj[arg] = (obj[arg] || 0 ) + 1;
    }

    for (let key in obj) {
        if ((obj[key]) > 1) {
            return true;
            } 
        }
    return false;
    
}

// areThereDuplicates(1,2,3);
console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true

