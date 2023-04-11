const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const without = require('../without');

const words = ["labrador", "sheltie", "borzoi", "frenchie", "golden"];


describe('#without', () => {

  it ('return array without specified words to remove', () => {
    const result = without(words, ["labrador", "sheltie", "borzoi"]);
    const expected = ["frenchie", "golden"];
    assert.deepEqual(result, expected);
  })

  it('if not array, return error', () => {
    expect(() => {without(words, "cat")}).to.throw(Error);
  });