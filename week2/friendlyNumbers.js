function findFriendlyNumbers(x, y) {
    let xDivisorsSum = 0;
    let yDivisorsSum = 0;

    for (let i = 1; i < x; i++) {
        if (x % i == 0) {
            xDivisorsSum += i;
        }
    }

    for (let i = 1; i < y; i++) {
        if (y % i == 0) {
            yDivisorsSum += i;
        }
    }

    if (xDivisorsSum == y && yDivisorsSum == x) {
        console.log(`${x} and ${y} are friendly numbers`);
    } else {
        console.log(`${x} and ${y} are not friendly numbers`);
    }
}

findFriendlyNumbers(17296, 18416);