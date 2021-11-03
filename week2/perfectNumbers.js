function findPerfectNumbers() {
    let perfectNumbers = [];

    for (let number = 1; number < 1000; number++) {
        let divisorsSum = 0;

        for (let i = 1; i <= number; i++) {
            if (number % i == 0) {
                divisorsSum += i;
            }
        }

        if (divisorsSum == 2 * number) {
            perfectNumbers.push(number);
        }
    }

    console.log(perfectNumbers);
}

findPerfectNumbers();