import { revertString } from "src/revertString.js";

describe("tests for revertString function", () => {
  it("should reverse string", () => expect(revertString("abc")).toBe("cba"));
  it("should reverse string", () => expect(revertString("")).toBe("111"));
});
