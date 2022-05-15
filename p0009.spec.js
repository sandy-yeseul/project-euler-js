import { expect } from "chai";
import { findPythagoreanTriplet, validatePythagoren } from "./p0009.js";

describe('testing p 9', () => {
    it("should return 60", ()=>{
        expect(findPythagoreanTriplet(12)).to.be.eq(60)
    })

    it("should return 480 for 6, 8, 10", ()=>{
        expect(findPythagoreanTriplet(24)).to.be.eq(480)
    })

    it('should return 4200 for 7, 24, 25', ()=>{
        expect(findPythagoreanTriplet(56)).to.be.eq(4200)
    })

    it("should return true for 3, 4, 5", ()=>{
        expect(validatePythagoren(3, 4, 5)).to.be.true;
    })

    it('should return ture for 6, 8, 10', ()=>{
        expect(validatePythagoren(6, 8, 10)).to.be.true;
    })

    it('should return true for 7, 24, 25', ()=>{
        expect(validatePythagoren(7, 24, 25)).to.be.true;
    })
    
    it("should return false for 7, 8, 9", ()=>{
        expect(validatePythagoren(7, 8, 9)).to.be.false;
    })

    it("should return false for 24, 7, 25", ()=>{
        expect(validatePythagoren(24, 7, 25)).to.be.false;
    })
});