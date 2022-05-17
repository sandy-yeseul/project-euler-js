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
        if(verifyPrimeFactor(pn1)) sum += pn1;
        if(pn2 > max) break;
        if(verifyPrimeFactor(pn2)) sum += pn2;
        
        pn1 +=6, pn2 +=6;
    }

    console.timeEnd(`p 10: ${max}`)
    return sum;
}

export function verifyPrimeFactor(n){
    let isPrimeFactor = true;
    if(n === 1) isPrimeFactor = false;
    else if(n < 4) isPrimeFactor = true;
    else if(n % 2 === 0) isPrimeFactor = false;
    else if(n < 9) return isPrimeFactor = true;
    else if(n % 3 === 0) isPrimeFactor = false;
    else {
        const r = Math.floor(Math.sqrt(n))
        let f = 5;
        while(f <= r){
            if(f % n === 0) {
                isPrimeFactor = false;
                break;
            }
            else if(f % (n+2) === 0) {
                isPrimeFactor = false;
                break;
            }
            f +=6;
        }
    }
    return isPrimeFactor;
}