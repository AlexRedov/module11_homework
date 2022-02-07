import { intervalNum } from "../../utils/indexLearn.js";

describe ("tests for definePrime function", () => {
    
  
    xit("should operate correctly with pozitive number", () => {
      expect(definePrime(10,15)).toBe(`10,11,12,13,14,15`);
    }),

    it("should operate correctly with negative number", () => {
        expect(definePrime(-10,-7)).toBe(`-10,-9,-8,-7`);
    }),

    it("should operate correctly with same number", () => {
        expect(definePrime(10,10)).toBe(`10`);
    }),

    it("should operate uncorrectly with this number", () => {
        expect(definePrime(1,0)).toBe(`10`);
    })
})
