const prompt = require("prompt-sync")();

function arraysum(){
    let input = prompt("entervalues:");
    let values = input.split(",");
    let sum = 0
    for (let i = 0; i < values.length; i++ ) {
        sum = sum + parseInt(values[i]);
    }
    return sum;
}
console.log(arraysum());