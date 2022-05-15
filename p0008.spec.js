import { expect } from "chai";
import { findLargestProductInSeries } from "./p0008.js";

describe('testing p 8', () => {
    it("should retrun 5832", ()=>{
        expect(findLargestProductInSeries(4)).to.be.eq(5832)
    })
    
    it('should return answer', ()=>{
        expect(findLargestProductInSeries(13))
        .to.be.eq(23514624000)
    })
});