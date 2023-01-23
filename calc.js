import { question } from 'readline-sync'
//6a

// let firstNumber = Number(question('Please enter a number'))
// console.log(firstNumber)

// let secondNumber = Number(question('Please enter another one'))
// console.log(secondNumber)

// let sum = firstNumber + secondNumber

// console.log ('The sum of ' +firstNumber+ '+' +secondNumber+ 'is ' +sum)

//6b

// let operator = question ('Enter operator(either+,-,* or /)')

// let firstNumber = Number(question('Please enter a number'))
// console.log(firstNumber)

// let secondNumber = Number(question('Please enter another one'))
// console.log(secondNumber)

// let result;

// if(operator =='+'){
// 	result = firstNumber + secondNumber;
// }

// else if(operator =='-'){
// 	result = firstNumber - secondNumber;
// }

// else if(operator =='*'){
// 	result = firstNumber * secondNumber;
// }

// else {
// 	result = firstNumber / secondNumber;
// }

// console.log(`${firstNumber} ${operator} ${secondNumber} = ${result}`);

// 6c

let operator = question ('Enter operator(either+,-,* or /)')

let firstNumber = Number(question('Please enter a number'))
console.log(firstNumber)

let secondNumber = Number(question('Please enter another one'))
console.log(secondNumber)

let result;

if(operator =='+'){
	result = firstNumber + secondNumber;
}

else if(operator =='-'){
	result = firstNumber - secondNumber;
}

else if(operator =='*'){
	result = firstNumber * secondNumber;
}

else {
	result = firstNumber / secondNumber;
}

console.log(`${firstNumber} ${operator} ${secondNumber} = ${result}`);







