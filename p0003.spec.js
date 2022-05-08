import { expect } from "chai"
import getLargestPF from "./p0003.js"

describe("testing for p 3", ()=>{
    it("should return 29 - the largest prime factor for 13195", ()=>{
        const res = getLargestPF(13195)
        expect(res).to.be.eq(29)
    })
    it("should return largest prime factor for 600851475143", ()=>{
        const res = getLargestPF(600851475143)
        console.log(res)
    })
})