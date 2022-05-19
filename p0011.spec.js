import { expect } from "chai";
import { findLargestProductInGrid, getSumOfSomeElems } from "./p0011.js";

describe('testing p 11', () => {
    it("should return answer", ()=>{
        console.log(findLargestProductInGrid(4))
    })

    it("should return 6 for sum up", ()=>{
        expect(getSumOfSomeElems([1, 2, 3, 4, 5, 6], 0, 3))
        .to.be.eq(6)
    })
});