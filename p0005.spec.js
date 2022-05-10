import { expect } from "chai"
import { findSmallestMultiple } from "./p0005"

describe("testing for p 5", ()=>{
    it("should return 2520", ()=>{
        expect(findSmallestMultiple()).to.be.eq(2520)
    })
})