import { expect } from "chai";
import findSum from "./p0001.js";

describe("Testing P0001", ()=>{
    describe("Testing numbers below 0", ()=>{
        it("should return 23", ()=>
            expect(findSum(10)).to.be.eq(23)
        )
    })
    describe("Testing numbers below 1000", ()=>{
        it('should return 233168', ()=>
            expect(findSum(1000)).to.be.eq(233168)
        )
    })
})