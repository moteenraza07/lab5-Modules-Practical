// app.js

import multiply, { add, substract } from "./mathModule.js"; // import multiply, add and substract from ./mathModule.js
import { toUpperCase, toLowerCase } from "./stringModule.js"; // import toUpperCase, toLowerCase from ./stringModule.js
import { findMax, reverseArray } from "./arrayModule.js"; // import findMax and reverseArray from ./arra
import { addAndLogUpper } from "./mathModule.js"; // import addAndLogUpper from ./mathModule.js
import { findMaxAndMultiply } from "./mathModule.js"; // import findMaxAndMultiply ./mathModule.js

// call the functions and log results

console.log("Add: ", add(5, 3)); // test your add function
console.log("uppercase: ", toUpperCase("Hello")); // test string manipulation uppercase
console.log("lowercase: ", toLowerCase("HELLO")); // test lower case
console.log("Substract: ", substract(15, 5)); // test subtraction
console.log("multiply: ", multiply(4, 5)); // test multiply
console.log("Max: ", findMax([1, 2, 3, 4, 5])); // test findMax
console.log("Reversed: ", reverseArray([1, 2, 3, 4, 5, 6, 7])); // test reverse array
console.log("addAndLogUpper: ", addAndLogUpper(10, 20)); // testing addAndLogUpper
console.log("findMaxAndMultiply: ", findMaxAndMultiply([1, 2, 3, 4, 5], 10)); // find the max in array and multiply by a value
