import { expect } from "chai";
import {findPalindrome, verifyPalindrome} from "./p0004.js"

describe("testin p 4", ()=>{
    it('verify palindrome - should return true for 9009', ()=>{
        const res = verifyPalindrome(9009)
        expect(res).to.be.true
    })
    it("verify palindrome - should return false for 9199", ()=>{
        const res = verifyPalindrome(9199)
        expect(res).to.be.false
    })
    it('verify palindrome - should return true for 121', ()=>{
        expect(verifyPalindrome(121)).to.be.true
    })
    it('find palindrome should return 9009', ()=>{
        const res = findPalindrome(2);
        expect(res).to.be.eq(9009)
    })
    it("find palindrome should return", ()=>{
        // expect(findPalindrome(3)).to.be.eq(906609)
    })
})