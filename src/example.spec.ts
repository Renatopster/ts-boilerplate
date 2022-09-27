import { expect } from "chai";
import { example } from "./example";

describe("example", () => {
  it("asserts that 3 + 5 = 8", () => {
    expect(example(5, 3)).to.be.equal(8);
  });
});
