const prompt = require("prompt-sync")();
    function filter1() {
        let array = [];
        let input = prompt("Enter values:");
        let inputValues = input.split(",");
        for (let i = 0; i < inputValues.length; i++) {
            let value = parseInt(inputValues[i]);
            array.push(value);
        }
        let filteredArray = [];
    
        for (let i = 0; i < array.length; i++) {
            let number = array[i];
        if (number % 5 === 0) {
            filteredArray.push(number);
            }
        }
        if (filteredArray.length === 0) {
            console.log("No numbers found divisible by 5.");
    }
        return filteredArray;
}
        let result = filter1();
        console.log(result);