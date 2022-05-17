/**
 * The sum of the primes below 10 is 
 * 
 * 2 + 3 + 5 + 7 = 17.
 * 
 * Find the sum of all the primes below two million.
 */

export function findPrimeSum(max){
    console.time(`p 10: ${max}`)

    const primeNumbers = [2, 3]
    let sum = primeNumbers.reduce((prev, cur) => prev + cur, 0);
    let num = 6
    let pn1 = num -1, pn2 = num +1

    while(pn1 <= max){
        if(primeNumbers.find(n => pn1 % n === 0) === undefined) {
            primeNumbers.push(pn1);
            sum += pn1;
        }
        if(pn2 > max) break;
        if(primeNumbers.find(n => pn2 % n === 0) === undefined){
            primeNumbers.push(pn2);
            sum += pn2;
        }
        
        
        pn1 +=6, pn2 +=6;
    }

    console.timeEnd(`p 10: ${max}`)
    return sum;
}