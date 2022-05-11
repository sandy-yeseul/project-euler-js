import { expect } from "chai"
import { findDifferenceSumSquare } from "./p0006.js"

describe("testing p 6", ()=>{
    it("should return 3025 - 385", ()=>{
        const res = findDifferenceSumSquare(10)
        expect(res).to.be.eq(2640)
    })
})