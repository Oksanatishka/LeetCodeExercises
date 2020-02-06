// For a given number, find all the prime numbers from zero to that number.

// function findPrimeNums(number) {
//     let result = [];
//     let obj = {};
//     for (let i = 2; i <= number; i++) {
//         obj[i] = true;
//         console.log(i, obj[i]);
//     }

//     return result;
// }

function primes(number) {
    const numbers = new Array(number + 1);
    numbers.fill(true);
    numbers[0] = numbers[1] = false;
    console.log(numbers); // [ false, false, true, true, true, true, true, true, true, true, true ]

    console.log(Math.sqrt(number)); // 3.1622776601683795
    for (let i = 2; i <= Math.sqrt(number); i++) {
        for (let j = 2; i * j <= number; j++) numbers[i * j] = false;
    }

    return numbers.reduce(
        (primes, isPrime, prime) => (isPrime ? primes.concat(prime) : primes),
        []
    );
}
console.log(primes(10)); //[2, 3, 5, 7]

// time complexity O(n * log (log n)).
