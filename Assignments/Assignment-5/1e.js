const prompt = require("prompt-sync")();


let number = prompt("Enter a number:");

let isPrime = true;


if (number < 2) {
    isPrime = false;
} 
else {
for (var i = 2; i < number; i++) {
    if (number % i === 0) {
    isPrime = false;
    break;
        }
    }
}

// Print the result
if (isPrime) {
    console.log(number + " is a prime number.");
} else {
    console.log(number + " is not a prime number.");
}