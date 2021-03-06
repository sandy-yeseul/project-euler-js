/**
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 * 
 * prime factors: 
 * Prime factor is the factor of the given number which is a prime number. 
 * Factors are the numbers you multiply together to get another number. 
 * In simple words, 
 * prime factor is finding which prime numbers multiply together to make the original number.
 */
export default function getLargestPF(num){
    let cur = 2;

    while(cur < num){
        if(num % cur === 0) num = num / cur;
        cur++;
    }

    return num
}