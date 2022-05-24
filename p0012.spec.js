import { expect } from "chai";
import { findHighlyDivisibleTriangularNum } from "./p0012";

describe('testing p 12', () => {
    it("should return 28", ()=>{
        expect(findHighlyDivisibleTriangularNum(5))
        .to.be.eq(28)
    })
});