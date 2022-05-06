import { expect } from "chai"
import sumEvenValues from "./p0002.js"

describe("p 0002 testing", ()=>{
    it("should sum up to 20, even-valued terms", ()=>{
        const sum = sumEvenValues(20)
        expect(22)
    })

    it("should sum up to 100", ()=>{
        const sum = sumEvenValues(100)
        console.log(sum)
    })
})