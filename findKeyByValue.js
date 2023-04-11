const assertEqual = function(actual, expected) {
  if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const findKeyByValue = function(object, value) {
  let objectKeys = Object.keys(object);
  let index = 0;
  for (let element in object) {
    if (object[element] === value) {
      return objectKeys[index];
    }
    index++;
  }
  return undefined;
}


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  action: "The Last of Us"
};

// that 70's show and first love aren't listed, therefore are undefined.

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));
console.log(findKeyByValue(bestTVShowsByGenre, "First Love"));
console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));
console.log(findKeyByValue(bestTVShowsByGenre, "The Last of Us"));