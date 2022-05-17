/**
 * 2520 is the smallest number 
 * that can be divided by each of the numbers from 1 to 10 without any remainder.
 * 
 * What is the smallest positive number that is 
 * evenly divisible by all of the numbers from 1 to 20?

*/

export function findSmallestMultiple(lastNum){
    const pmNumbers = getPrimeNumbers(lastNum);
    const pmCount = new Map();

    let res = 1;

    for(let i = 2; i<= lastNum; i++){
        if(pmNumbers.includes(i)) {
            pmCount.set(i, 1);
            continue;
        }
        
        let num = i, temp = getPrimeNumberCount(num, pmNumbers)

        temp.forEach((cur, pm) => {
            let prev = pmCount.get(pm);
            if(cur > prev) pmCount.set(pm, cur)
        })
    }

    pmCount.forEach((count, pm) => res = res * Math.pow(pm, count))

    return res;
}

export function getPrimeNumbers(lastNum){
    const primeNumbers = []
    let pn = 1;
    while(pn <= lastNum){
        if(pn===1) primeNumbers.push(2)
        else if(primeNumbers.every(n => pn%n)) primeNumbers.push(pn);

        pn+=2;
    }
    return primeNumbers
}

export function getPrimeNumberCount(num, pmNumbers){
    const temp = new Map();
    while(num !== 1){
        const pm = pmNumbers.find(n => !(num % n))

        if(temp.get(pm)){
            let count = temp.get(pm);
            count ++;
            temp.set(pm, count)
        } 
        else temp.set(pm, 1)

        num /= pm;
    }
    
    return temp;
}

export function isPrimeNumber(num){
    if(num === 1) return false;
    if(num < 4) return true;
    if(num % 2 === 0 || num % 3 ===0) return false;
}