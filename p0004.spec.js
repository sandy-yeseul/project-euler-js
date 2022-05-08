import { expect } from "chai";
import findPalindrome from "./p0004.js"

describe("testin p 4", ()=>{
    it('should return 9009', ()=>{
        const res = findPalindrome(2);
        expect(res).to.be.eq(9009)
    })
})