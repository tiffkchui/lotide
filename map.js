


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅  Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed: ${array1} !== ${array2}`);
  }
};

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


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);

const results2 = map(words, word => word.toLowerCase());
assertArraysEqual(results2, [ 'GROUND', 'CONTROL', 'TO', 'MAJOR', 't' ]);









