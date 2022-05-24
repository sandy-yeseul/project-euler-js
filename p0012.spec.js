import { expect } from "chai";
import { 
    findHighlyDivisibleTriangularNum, 
    getDivisors 
} from "./p0012.js";

describe('testing p 12', () => {
    it("should return 28", ()=>{
        expect(findHighlyDivisibleTriangularNum(5))
        .to.be.eq(28)
    })

    it("should return 1, 2, 3, 6 for 6", ()=>{
        expect(getDivisors(6))
        .to.have.deep.members([1, 2, 3, 6])
    })
});