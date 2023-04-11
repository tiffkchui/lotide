const chai = require('chai');
const findKey = require('../findkey');
const findKeyByValue = require('../findKeyByValue');
const assert = chai.assert;
const expect = chai.expect;

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
  action: "The Last of Us"
};


describe('#findKeyByValue', () => {

  it ('return undefined if object does not match value ', () => {
    expect(findKeyByValue(bestTVShowsByGenre, "This will will return undefined")).to.be.undefined;
  })

  it('should throw an error if the data passed in as the first argument is not a strict object', () => {
    expect(() => {findKeyByValue(284763, 'The Wire')}).to.throw(Error);
    expect(() => {findKeyByValue(['data', 'more data'], 'The Wire')}).to.throw(Error);
    expect(() => {findKeyByValue(null, 'The Wire')}).to.throw(Error);
  });
})