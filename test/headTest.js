const head = require("../head");
const assert = require('chai').assert;

describe("#head", () => {
  it("returns 3 for [3, 4, 5 ]", () => {
    assert.strictEqual(head(3, 4, 5), 3);
  });

  it("should return 'Joshua' for ['Joshua', 'Harlow', 'Darrien]", () => {
    assert.strictEqual(head(['Joshua', 'Harlow', 'Darrien']), 'Joshua');
  });

  it('should return undefined if passed an empty array', () => {
    assert.strictEqual(head([]), undefined);
  });

  it("return 8 for [8]", () => {
    assert.strictEqual(head([8]), 8);
  });

}); 