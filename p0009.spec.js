import { expect } from "chai";
import { findPythagoreanTriplet } from "./p0009";

describe('testing p 9', () => {
    it("should return 60", ()=>{
        expect(findPythagoreanTriplet(12)).to.be.eq(60)
    })
});