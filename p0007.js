/**
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, 
 * we can see that the 6th prime is 13.
 * 
 * What is the 10 001st prime number?
 */

import { getPrimeNumbers } from "./p0005";

export function findNthPrimeNumber(nth){
    let pn = 2;
    const primeNumbers = [];

    while(primeNumbers.length < nth){
        if(primeNumbers.every(n => pn % n)) primeNumbers.push(pn);
        pn++;
    }

    return pn;
}