/**
 * A palindromic number reads the same both ways. 
 * The largest palindrome made from the product of two 2-digit numbers is 
 * 
 * 9009 = 91 × 99.
 * 
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

export function findPalindrome(digit){
    const max = parseInt(Array(digit).fill(9).join('')),
    min = parseInt(`1${Array(digit -1).fill(0).join('')}`)
    
    let palindrome = 0;
    let num1 = max, num2 = max;

    while(num1 >= min){
        let temp = num1 * num2;

        let isItPalindrome = verifyPalindrome(temp)
        
        if(isItPalindrome){
            palindrome = temp;
            break;
        }

        if(num2 === min) {
            num1 += -1;
            num2 = num1;
        }
        else num2 += -1;
    }
    return palindrome;
}

export function verifyPalindrome(num){
    let arr = num.toString().split("");
    let isItPalindrome = false;

    while(arr.length >= 1){
        if(arr.length === 1) isItPalindrome = true;
        
        let first = arr.shift(), last = arr.pop();

        if(arr.length ===0 && first === last) isItPalindrome = true;
    
        if(first !== last) break;
    }
    return isItPalindrome;
}