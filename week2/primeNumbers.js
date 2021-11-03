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
            return true;
        } else {
            return false;
        }
    }

}

function findPrimeNumbers() {
    let primeNumbers = [];

    for (let i = 2; i < 1000; i++) {
        if (findPrime(i)) {
            primeNumbers.push(i);
        }
    }

    console.log(primeNumbers);

}

findPrimeNumbers();