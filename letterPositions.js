const assertArraysEqual = function(array1, array2) {
  if ((array1, array2)) {
    console.log(`✅✅✅  Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed: ${array1} !== ${array2}`);
  }
};


const letterPositions = function(sentence) {
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
     
    if (results[sentence[i]] !== undefined) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }

  }

  return results;
};

console.log(letterPositions('hello'));

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
