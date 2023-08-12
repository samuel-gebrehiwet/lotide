const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");

describe("#findKeyByValue", () => {
  it('should return "dram" for "Titanic"', () => {
    const bestTVShowsByGenre = {
      sci_fi: "The world we make",
      comedy: "God must be crazy",
      drama: "Titanic",
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Titanic"), "drama");
  });
});
