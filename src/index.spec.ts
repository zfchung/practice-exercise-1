import { add } from "./index";

describe("Test addition function", () => {
  it("should return 0 when string is empty", () => {
    expect(add()).toBe(0);
  });
});
