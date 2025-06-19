// mathModule.js
import { toUpperCase } from "./stringModule.js";
import { findMax } from "./arrayModule.js";

// add function
export function add(a, b) {
  return a + b;
}

console.log(add(5, 10));

// subtraction function

export function substract(a, b) {
  return a - b;
}
console.log(substract(20, 5));

// mutltiply function
export default function multiply(a, b) {
  return a * b;
}

// add and uppercase function
export function addAndLogUpper(a, b) {
  const result = add(a, b);
  console.log(toUpperCase(result.toString()));

  return result;
}

export function findMaxAndMultiply(maxNum, multiplier) {
  const maxValue = findMax(maxNum) * multiplier;
  console.log(toUpperCase(maxValue.toString()));
  return maxValue;
}
