import { expect } from "chai"
import { findSmallestMultiple, getPrimeNumbers } from "./p0005.js"

describe("testing for p 5", ()=>{
    it("should return 2520", ()=>{
        expect(findSmallestMultiple(10)).to.be.eq(2520)
    })
    it("should return answer", ()=>{
        console.log(findSmallestMultiple(20))
    })

    it('should return primenumber list', ()=>{
        expect(getPrimeNumbers(10))
        .to.have.deep.members([1, 2, 3, 5, 7])
    })
})