const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

describe('#middle', () => {



  it ('the middle element is ["Alder"] in ["Pine", "Alder", "Cedar"]', () => {
    const result = middle(["Pine", "Alder", "Cedar"]);
    const expected = ["Alder"];
    assert.deepEqual(result, expected);


it ('the middle numbers are [2, 3] in [1, 2, 3, 4]', () => {
  const result = middle([1, 2, 3, 4]);
  const expected = [2, 3];
  assert.deepEqual(result, expected);
});

