/**
 * A palindromic number reads the same both ways. 
 * The largest palindrome made from the product of two 2-digit numbers is 
 * 
 * 9009 = 91 × 99.
 * 
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

export default function findPalindrome(digit){
    const max = parseInt(Array(digit).fill(9).join('')),
    min = parseInt(`1${Array(digit -1).fill(0).join('')}`)
    
    let palindrome = 0;
    let num1 = max, num2 = max;

    while(num1 > min && num2 > min){
        let temp = (num1 * num2).toString().split('');
        while(temp.length <2){
            if(temp.length <2) {
                palindrome = num1 * num2;
                break;
            }
            let first = temp.shift(), last = temp.pop();

            if(first !== last) break;
        }
        if(palindrome!== 0) break;

        if(num1 !== num2) num1 += -1;
        else num2 += -1;
        
        // 99 * 99
        // 99 * 98
        // 98 * 98
    }
    return palindrome;
}