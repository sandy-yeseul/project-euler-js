/**
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
 * The sum of these multiples is 23.
 * 
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

/**
 * 1. try to solve it
 * 2. testing sheet?
 */

export default function findSum(max){
    console.time(max.toString())

    max = parseInt(max)
    // find sum of multiple 3 and 5
    let i = 0;
    let sum = 0;
    while(i < max){
        if(i % 3 === 0 || i % 5 === 0) 
            sum += i;

        i++;
    }

    console.timeEnd(max.toString())

    return sum
}