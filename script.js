// alert("Half life part 3 coming soon!")


// 1. Constants - where we fetch the buttons 

// number buttons definition 
const numberButtons = document.querySelectorAll(".calculator__button--number");
// operator buttons definition
const opertrButtons = document.querySelectorAll(".calculator__button--operator");
// equal button definition 
const equalsButton = document.querySelector(".calculator__button--equal");
// reset button definition 
const resetButton = document.querySelector(".calculator__button--reset");
// del button definition
const delButton = document.querySelector(".calculator__button--del");

// defining the variables 
// Variable number 1
let num1;
// variable numbe 2 
var num2;
// operator;
var operator;
// operator to solve long digit issue 
let a = [];

// 2. Functions

const numberButtonClick = (evnt) => {
  // the below code takes the inputs and concatenates them into a single number
  // console.log(evnt);
  let arrayValNum1 = evnt.target.innerText
  num1 = arrayToNumber(arrayValNum1);
  console.log(`The value of num1 is ${num1}`);

};

// the below function tidies up the code for the above;
const arrayToNumber = (evnt) => {
  // the below code takes the inputs and concatenates them into a single number

  console.log(evnt);
  a.push(evnt);
  // running total
  const x = Number((a).join(""));
  return x;
};


//  The below function will take a number and convert it into an array and remove the last value;

const numberDeleteSingleDigit = (evnt) => {
  // we will pass in the already defined num1;
  let newArray = ("" + evnt).split("");
  console.log(newArray);
  // Trims the last value from the new array
  let trimNum = newArray.pop();
  return arrayToNumber(trimNum);
  
};

const delButtonClick = () => {
  // const del = evnt.target;
  console.log(`you pressed del button`);
  // remember the num1 is the active number you are modifying: 
  // num1 = 2131231;
  // this will return a number;
  // I have a value for num1, I want to convert it to a array, I want to pop the last digit, I want to convert it back into a number, this function should return num1 and console log its new value 
  // num1 has a value we want to manipulate 
  const num1Array = numberDeleteSingleDigit(num1);


};



// function for pressing an operator
const operatorButtonClick = (evnt) => {
  operator = evnt.target.innerText;
  console.log(`You pressed ${operator}`)
  console.log(num1, num2);
  num2 = num1;
  console.log(num1, num2);
  num1 = "";
  console.log(num1, num2);

};

// function for equals
const equalsButtonClick = (evnt) => {
  const eql = evnt.target.innerText;
  console.log(`you pressed ${eql}`);
  // const product = num1 [operator] num2
  // using if else, or switch
  // if oprator = x, then num1 * num2, sum or total equals

  console.log(num1, num2, operator);
  // do calculation which switchs
  // return product
  // reset variables
  num1 = "";
  num2 = "";
  operator = "";
  console.log(num1, num2, operator);
};

// function for reset 
const resetButtonClick = (evnt) => {
  const rst = evnt.target.innerText;
  console.log(`you pressed ${rst}`);
};

// function for pressing del






// 3. Logic Execution 

// Button logic 

// logic for for each for numbers 
// On button click run the numberButtonClick function
numberButtons.forEach((numberButton) => {
  // console.log(numberButton);
  numberButton.addEventListener("click", numberButtonClick);
});

// logic for for each for each operator
opertrButtons.forEach((operatorButton) => {
  // console.log(operatorButton);
  operatorButton.addEventListener("click", operatorButtonClick);
});

// logic for equals
equalsButton.addEventListener("click", equalsButtonClick);

//logic for reset
resetButton.addEventListener("click", resetButtonClick);

// Variable logic 
// we will use push to push a new item into the array

//logic for the delete button
delButton.addEventListener("click", delButtonClick);

// 1+2= 
// 1-2 = 
// * 
// 5 (divide symbol)5 = 
// 5 x 5 
// 5/5

// I need to define a new function which takes in a number 