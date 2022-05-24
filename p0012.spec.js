import { expect } from "chai";
import { 
    findHighlyDivisibleTriangularNum, 
    getDivisors, 
    getTriangleNums
} from "./p0012.js";

describe('testing p 12', () => {
    it("should return 28", ()=>{
        expect(findHighlyDivisibleTriangularNum(5))
        .to.be.eq(28)
    })

    it("shoudl return answer", ()=>{
        console.log(findHighlyDivisibleTriangularNum(500))
    })

    it("should return 1, 2, 3, 6 for 6", ()=>{
        expect(getDivisors(6))
        .to.have.deep.members([1, 2, 3, 6])
    })
    it("should return 6 length of arr for 28", ()=>{
        expect(getDivisors(28))
        .to.be.lengthOf(6)
    })
    it("should return 40 length of 4560 divisors", ()=>{
        expect(getDivisors(4560))
        .to.be.lengthOf(40)
    })

    it('should test get triangle nums', ()=>{
        // getTriangleNums(100)
    })
});