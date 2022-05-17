/**
 * The sum of the primes below 10 is 
 * 
 * 2 + 3 + 5 + 7 = 17.
 * 
 * Find the sum of all the primes below two million.
 */

import { getPrimeNumbers } from "./p0005.js";

export function findPrimeSum(max){
    console.time(`p 10: ${max}`)

    const primeNumbers = getPrimeNumbers(max);
    const sum = primeNumbers.reduce((prev, cur)=> prev + cur, 0)

    console.timeEnd(`p 10: ${max}`)
    return sum;
}