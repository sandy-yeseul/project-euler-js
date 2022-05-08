/**
 * A palindromic number reads the same both ways. 
 * The largest palindrome made from the product of two 2-digit numbers is 
 * 
 * 9009 = 91 × 99.
 * 
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

export default function findPalindrome(digit){
    const palindromeDigit = digit * 2;

    const max = parseInt(Array(digit).fill(9).toLocaleString())
    console.log(Array(digit).fill(9).toLocaleString())
}