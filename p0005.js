/**
 * 2520 is the smallest number 
 * that can be divided by each of the numbers from 1 to 10 without any remainder.
 * 
 * What is the smallest positive number that is 
 * evenly divisible by all of the numbers from 1 to 20?

*/

export function findSmallestMultiple(lastNum){
    const pmCount = new Map();
    for(let i = 1; i<= lastNum; i++){
        if(i===1) {
            pmCount.set(i, 1);
            continue;
        }

        for(let pm of pmCount.keys()){
            if(i % pm === 0){

            }
        }
    }
}
export function getPrimeNumbers(lastNum){
    const primeNumbers = []
    for(let i = 2; i <= lastNum; i++){
        if(i===2) primeNumbers.push(i)
        else if(primeNumbers.every(n => i%n)) primeNumbers.push(i)
    }
    return primeNumbers
}