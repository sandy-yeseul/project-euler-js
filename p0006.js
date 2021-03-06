/**
 * The sum of the squares of the first ten natural numbers is,
 * 
 * 1^2 + 2^2 + ... + 10^2 = 385
 * 
 * The square of the sum of the first ten natural numbers is,
 * 
 * (1 + 2 + ... + 10)^2 = 55^2 = 3025
 * 
 * Hence the difference between the sum of the squares of the first ten natural numbers 
 * and the square of the sum is 3025 - 385 = 2640.
 * 
 * Find the difference between the sum of the squares of the first one hundred 
 * natural numbers and the square of the sum.
*/

export function findDiffSumSquare(max){
    return SquareSumOfNumbers(max) - SumNumberOfSquares(max)
}

export function SumNumberOfSquares(max){
    const arr = new Array(max).fill(0).map((v, i) => Math.pow(i + 1, 2))
    return SumArrElems(arr);
}

export function SquareSumOfNumbers(max){
    const sum = SumArrElems(new Array(max).fill(0).map((v, i) => i+1))
    return Math.pow(sum, 2)
}

export function SumArrElems(arr){
    return arr.reduce((prev, cur) => prev + cur)
}