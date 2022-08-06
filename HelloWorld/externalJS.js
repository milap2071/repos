console.log("From External Javascript");

//variables
let a = 5;
console.log("5 * a");

//string variables with quotation types
const single = "I'm from Nepal";
console.log(single);

const double = 'John says "Hurry Up" to James';
console.log(double);

//Escaping characters in string
const escaped = 'I\'m a escaped sentence';
console.log(escaped);

//Concatenating string & using backtick
const name = "John";
const greeting = `Hello, ${name}`;
console.log(greeting);

const one = 'Hello';
const two = "How are you?";
const joined = `${one}, ${two}`;
console.log(joined);

//Concatenation in context
const button = document.querySelector('button');

function greet(){
    const name = prompt("What is your name?");
    alert(`Hello ${name}, nice to see you!`);

}

button.addEventListener('click', greet);

//Numbers vs Strings
const myString = '123';
const myNum = Number(myString);
console.log(typeof myNum + `${myNum}`);

const myString2 = '123';
const myNum2 = myString2.toString();
console.log(typeof myNum + ` ${myNum}`);

