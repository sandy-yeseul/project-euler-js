import { expect } from "chai"
import { findNthPrimeNumber } from "./p0007.js"

describe("testing p 7", ()=>{  
    it("should return 13 for 6th prime number", ()=>{
        expect(findNthPrimeNumber(6)).to.be.eq(13)
    })

    it("should return answer = 104743", ()=>{
        expect(findNthPrimeNumber(10001)).to.be.eq(104743)
    })
})