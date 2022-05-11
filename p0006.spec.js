import { expect } from "chai"
import { findDifferenceSumSquare, SquareSumOfNumbers, SumNumberOfSquares } from "./p0006.js"

describe("testing p 6", ()=>{
    it("should return 3025 - 385", ()=>{
        const res = findDifferenceSumSquare(10)
        expect(res).to.be.eq(2640)
    })

    it("should return 385 - testing sum of squares", ()=>{
        expect(SumNumberOfSquares(10)).to.be.eq(385)
    })
    it("should return 3025 - testing square of sums", ()=>{
        expect(SquareSumOfNumbers(10)).to.be.eq(3025)
    })
})