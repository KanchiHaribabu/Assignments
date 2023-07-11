const prompt = require("prompt-sync")();


let username = prompt("Enter your username:");
let address = prompt("Enter your address:");


let usernameLength = username.length;
let addressLength = address.length;


let usernameUpperCase = username.toUpperCase();
let addressUpperCase = address.toUpperCase();


console.log("Username Length: " + usernameLength);
console.log("Address Length: " + addressLength);
console.log("Username Uppercase: " + usernameUpperCase); 
console.log("Address Uppercase: " +addressUpperCase);