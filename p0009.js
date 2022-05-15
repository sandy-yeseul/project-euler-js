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
    /**
     * 12
     * a < b < c
     * 
     * 1 2 9
     * 1 3 8
     * 1 4 7
     * 1 5 6
     * 2 3 7
     * 2 4 6
     * 3 4 5
     */
}

export function validatePythagoren(a, b, c){
    return Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)
}