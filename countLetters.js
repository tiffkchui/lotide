const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual}  ===  ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
    
};


const countLetters = function(string) {
  let result = {};
//remember == makes comparison and === is strict
  for (let value of string) {
    if (value === ' ') {
      continue;
    } else {
      result[value] = (result[value] || 0) + 1;
    }
  }
  return result;
};


console.log(countLetters("Lighthouse Labs is great"));
