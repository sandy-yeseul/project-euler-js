import { expect } from "chai";
import { findLargestProductInGrid, getLargerNum, getProductOfSomeElems } from "./p0011.js";

describe('testing p 11', () => {
    it("should return answer", ()=>{
        console.log(findLargestProductInGrid(4))
    })

    it("should return 6 for sum up", ()=>{
        expect(getProductOfSomeElems([1, 2, 3, 4, 5, 6], 0, 3))
        .to.be.eq(6)
    })

    it('should return max number between two number', ()=>{
        expect(getLargerNum(10, 20)).to.be.eq(20)
    })
});