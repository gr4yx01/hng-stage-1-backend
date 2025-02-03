function isPerfectNumber(num) {
    if (num <= 1) return false; // 1 and negative numbers aren't perfect numbers
    
    let sum = 1;  // Start with 1 since it's always a divisor (excluding the number itself)
    let sqrtNum = Math.sqrt(num);
    
    for (let i = 2; i <= sqrtNum; i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i) {
                sum += num / i; // Add the paired divisor
            }
        }
    }

    return sum === num;
}

function isPrime(num) {
    if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
    if (num === 2 || num === 3) return true; // 2 and 3 are prime numbers
    if (num % 2 === 0 || num % 3 === 0) return false; // Exclude all numbers divisible by 2 or 3
    
    let sqrtNum = Math.sqrt(num);
    for (let i = 5; i <= sqrtNum; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false; // Check divisibility by i and i + 2
        }
    }

    return true; // num is prime if no divisors are found
}

function getNumberProperties(num) {
    const properties = [];

    // Check for Armstrong property
    const numDigits = Math.floor(Math.log10(num)) + 1; // Calculate number of digits efficiently
    let sum = 0;
    let temp = num;
    
    while (temp > 0) {
        sum += Math.pow(temp % 10, numDigits);  // Add the digit raised to the power of the number of digits
        temp = Math.floor(temp / 10);  // Remove the last digit
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
    let sum = 0;

    // Take the absolute value to handle negative numbers
    num = Math.abs(num);

    // Use a while loop to sum digits efficiently
    while (num > 0) {
        sum += num % 10; // Add the last digit
        num = Math.floor(num / 10); // Remove the last digit
    }

    return sum;
}

export {
    sumOfDigits,
    getNumberProperties,
    isPrime,
    isPerfectNumber
}
