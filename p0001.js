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
    // find sum of multiple 3, 5 and 15(for substracting duplicates)
    let i = 0;
    let sumOf3 = 0;
    let sumOf5 = 0;
    let sumOf15 = 0;
    while(i < max){
        if(i % 3 === 0) sumOf3 = sumOf3 + i

        else if(i % 5 === 0) sumOf5 = sumOf5 + i

        else if(i % 15 === 0) sumOf15 = sumOf15 + i

        i++;
    }

    console.timeEnd(max.toString())

    return sumOf3 + sumOf5 - sumOf15
}