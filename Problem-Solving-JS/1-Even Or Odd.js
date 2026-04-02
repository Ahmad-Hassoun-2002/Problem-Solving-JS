// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

let n = prompt();
let number = parseInt(n);

function evenOddNumber(number){
    if(number % 2 == 0){
        return "Even number";
    }else{
        return "Odd number"
    }
}

console.log(evenOddNumber());



function evenOddNumber2(number1){
    return number1 % 2 == 0? "Even Number" : "Odd Number";
}

console.log(evenOddNumber2(8));