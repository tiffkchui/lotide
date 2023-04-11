const tail = require('../tail');
const assert = require('chai').assert;

describe('#tail', () => {

  it ('"Hello shining world" "becomes shining world"', () => {
    const result = tail(['Shining', 'Shining', 'World']);
    const expected = ['Shining', 'World'];
    assert.deepEqual(result, expected);
  });

});
