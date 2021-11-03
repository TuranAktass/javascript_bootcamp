function findPrime(...numbers) {

    let len = numbers.length;

    for (let i = 0; i < len; i++) {
        let isPrime = true;

        for (let j = 2; j < numbers[i]; j++) {
            if (numbers[i] % j == 0) {
                isPrime = false;
            }
        }

        if (isPrime) {
            console.log(`${numbers[i]} is prime!`);
        } else {
            console.log(`${numbers[i]} is not prime!`);
        }
    }

}

findPrime(2, 5, 8, 21, 13);