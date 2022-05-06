/**
 * Each new term in the Fibonacci sequence is generated by adding the previous two terms. 
 * By starting with 1 and 2, the first 10 terms will be:
 * 
 * 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 * 
 * By considering the terms in the Fibonacci sequence 
 * whose values do not exceed four million, 
 * 
 * find the sum of the even-valued terms.
 */

export default function sumEvenValues(max){
    console.time(`p0002: max ${max}`)

    let sum = 0;
    let prev = 0, cur = 1;

    while(cur < max){
        const next = prev + cur;

        if(cur % 2 !== 0) sum += cur;

        prev = cur;
        cur = next;
    }

    console.timeEnd(`p0002: max ${max}`)
    return sum;
}