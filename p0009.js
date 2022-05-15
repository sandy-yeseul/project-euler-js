/**
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
 * 
 * a2 + b2 = c2
 * 
 * For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
 */

export function findPythagoreanTriplet(sum){
    let stop = false;
    let product = 1;

    let a = 1;

    while(!stop){
        for(let b=a+1; b< sum; b++){
            let c = sum - (a+b);
            if(c <= b) break;

            if(validatePythagoren(a, b, c)){
                stop = true;
                console.log(a, b, c)
                product = a * b * c;
                break;
            }
        }
        a++;
    }

    return product;
}

export function validatePythagoren(a, b, c){
    if(a >= c || b >= c || a >= b) return false;
    return Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) && a < b < c
}