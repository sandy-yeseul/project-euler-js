import { expect } from "chai";
import {findPalindrome, verifyPalindrome} from "./p0004.js"

describe("testin p 4", ()=>{
    it('verify palindrome - should return true', ()=>{
        const res = verifyPalindrome(9009)
        expect(res).to.be.true
    })
    it("verify palindrome - should return false", ()=>{
        const res = verifyPalindrome(9199)
        expect(res).to.be.false
    })
    it('find palindrome should return 9009', ()=>{
        const res = findPalindrome(2);
        expect(res).to.be.eq(9009)
    })
    
})