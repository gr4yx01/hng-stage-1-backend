function isPerfectNumber(num) {
    if (num <= 1) return false; // 1 and negative numbers aren't perfect numbers
    
    let sum = 0;
    
    for (let i = 1; i <= Math.floor(num / 2); i++) {
        if (num % i === 0) {
            sum += i; // Add the divisor to the sum
        }
    }

    // Check if the sum of divisors equals the number
    return sum === num;
}

function isPrime(num) {
    if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
    if (num === 2) return true; // 2 is the only even prime number
    if (num % 2 === 0) return false; // Exclude all even numbers greater than 2
    
    // Check odd numbers from 3 to the square root of num
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false; // num is divisible by i, so it's not prime
        }
    }

    return true; // num is prime if no divisors are found
}

function getNumberProperties(num) {
    const properties = [];

    // Check for Armstrong property
    const numStr = num.toString();
    const numDigits = numStr.length;
    let sum = 0;
    
    for (let digit of numStr) {
        sum += Math.pow(Number(digit), numDigits);
    }
    
    if (sum === num) {
        properties.push("armstrong");
    }

    // Check for Even/Odd property
    if (num % 2 === 0) {
        properties.push("even");
    } else {
        properties.push("odd");
    }

    return properties;
}

function sumOfDigits(num) {
    // Convert the number to a string to easily loop through its digits
    const numStr = Math.abs(num).toString(); // Ensure we handle negative numbers by using Math.abs
    let sum = 0;

    // Loop through each character (digit) in the string and sum them
    for (let digit of numStr) {
        sum += Number(digit); // Convert each character back to a number and add to the sum
    }

    return sum;
}

export {
    sumOfDigits,
    getNumberProperties,
    isPrime,
    isPerfectNumber
}