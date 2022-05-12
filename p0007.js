/**
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, 
 * we can see that the 6th prime is 13.
 * 
 * What is the 10 001st prime number?
 */

export function findNthPrimeNumber(nth){
    let pn = 1;
    const primeNumbers = [];

    while(primeNumbers.length < nth){
        pn ++
        if(primeNumbers.every(n => pn % n)) primeNumbers.push(pn);
    }

    return pn;
}