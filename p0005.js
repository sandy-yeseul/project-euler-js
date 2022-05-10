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

        for(let pm of temp.keys()){
            let prev = pmCount.get(pm);
            let cur = temp.get(pm)
            if(cur > prev) pmCount.set(pm, cur)
        }
    }

    for(let pm of pmCount.keys()){
        let count = pmCount.get(pm);
        
        res = res * pm * count;
    }

    return res;
}
export function getPrimeNumbers(lastNum){
    const primeNumbers = []
    for(let i = 2; i <= lastNum; i++){
        if(i===2) primeNumbers.push(i)
        else if(primeNumbers.every(n => i%n)) primeNumbers.push(i)
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