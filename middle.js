
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
    if (!(Array.isArray(array1[i])) && array1[i] !== array2[i]) {
      return false;
  }
  return true;
}
  
};

const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    return array.slice(array.length / 2 - 1, array.length / 2 + 1)
  } else {
     let newArray = [];
     let middleNum = Math.round(array.length /2)
     newArray.push(array[middleNum -1]);
     return newArray;
  }
};


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual}  ===  ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
    
};


