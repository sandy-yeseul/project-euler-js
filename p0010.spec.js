import { expect } from "chai";
import { findPrimeSum } from "./p0010.js";

describe('testing p 10', () => {
    it("should return 17 for below 10", ()=>{
        expect(findPrimeSum(10)).to.be.eq(17)
    })
    it("should give me answer, 142913828922", ()=>{
        expect(findPrimeSum(2* 1000 *1000)).to.be.eq(142913828922)
    })
});