const lotide = require("../index");
const assert = require("chai").assert;

describe("#letterPositions", () => {
  it("returns index of 1 for the letter o in joshua", () => {
    assert.deepEqual(lotide.letterPositions("joshua").e, [1]);
  })
})