/**
 * The sequence of triangle numbers is generated by adding the natural numbers.
 * So the 7th triangle number would be 
 * 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. 
 * 
 * The first ten terms would be:
 * 
 * 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

Let us list the factors of the first seven triangle numbers:

 1: 1
 3: 1,3
 6: 1,2,3,6
10: 1,2,5,10
15: 1,3,5,15
21: 1,3,7,21
28: 1,2,4,7,14,28

We can see that 28 is the first triangle number to have over five divisors.

What is the value of the first triangle number to have over five hundred divisors?
 */

export function findHighlyDivisibleTriangularNum(divisorsNum){
    let triangleNum = 1;
    let i = 1;
    let stop = false;

    while(!stop){
        if(getDivisors(triangleNum).length >= divisorsNum) break;

        i++;
        triangleNum = triangleNum + i;
    }

    return triangleNum;
}

export function getDivisors(num){
    const divisors = [];
    let divisor = 1;
    let threshold = num;
    while(divisor < threshold){
        if(num % divisor === 0) {
            threshold = num / divisor;
            divisors.push(divisor, threshold)
        }
        divisor++;
    }
    return divisors;
}

export function getTriangleNums(lastNum){
    let i = 1;
    let triangleNum = i;

    while(i<=lastNum){
        let divisors = getDivisors(triangleNum)
        console.log(`${i}: ${triangleNum}, [${divisors}]`)

        i++;
        triangleNum += i;
    }
}