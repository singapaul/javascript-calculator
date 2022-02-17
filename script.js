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
// output to screen
const printToScreen = document.querySelector("#calculator__screen-inputs");
// output to result
const resultToScreen = document.querySelector("#calculator__screen-result");


// defining the variables 
// Variable number 1
let num1 = "";
// variable numbe 2 
let num2 = "";
// operator;
let operator = "";
// product
let product = "";
// 

// 2. Functions

const numberButtonClick = (evnt) => {
  // the below code takes the inputs and concatenates them into a single number
  // console.log(evnt);
  // let arrayValNum1 = evnt.target.innerText
  // num1 = arrayToNumber(arrayValNum1);
  let inputNum = (evnt.target.innerText);
  console.log(`The input pressed is ${inputNum}`);
  // don't want to do it in function due to scoping
  if (operator == "") {
    num1 += inputNum;
    printToScreen.innerHTML = num1;
    console.log(`we have assigned num1 the value of ${num1}`);
  } else {
    num2 += inputNum;
    printToScreen.innerHTML += num2;
    console.log(`we have assigned num2 the value of ${num2}`);

  }

};


const delButtonClick = () => {
  // const del = evnt.target;
  // I need to both 1) cut the strings based on the IF statement within them: 
  // 2) I need to trim the contents of the p tag
  console.log("you pressed delete")

  // four cases 
  // no numbers have a value
  //1. you have num 1
  //2. you have num 1 and oper
  //3. you have num 1 and oper and num 2
  //4. you have operator, no num 1 or num 2
  //5. you have nothing in values
  //6. you have multiple operators 


  if (num1 !== 0 && num2 == 0 && operator == "") {
    console.log(num1);
    num1 = num1.slice(0, -1);
    console.log(`The value of num1 is now ${num1}`);
    printToScreen.innerHTML = num1;
  } else if (num1 !== 0 && num2 == 0 && operator !== "") {
   
    console.log(`The value of the operator is ${operator}`);
    operator = "";
    console.log(`The value of the operator is ${operator}`);
    printToScreen.innerHTML = " ";
    printToScreen.innerHTML=num1;

    // maybe just reprint and reset the screen with the value of num1? 
    printToScreen.innerHTML -= operator
  } else if (num1 !== 0 && num2 !== 0 && operator !== "") {
   
   console.log(num2);

    printToScreen.innerHTML -= operator
  }


  // end of function 
};






// function for pressing an operator
const operatorButtonClick = (evnt) => {
  operator = evnt.target.innerText;
  console.log(`You pressed ${operator}`);

  num1 = printToScreen.innerHTML;
  console.log(num1);
  printToScreen.innerHTML += operator;



  // num1 is delcared as a number
  // operator is delcared 
  // num2 is undeclared
  // 


  // console.log(num1, num2);
  // num2 = num1;
  // console.log(num1, num2);
  // num1 = "";
  // console.log(num1, num2);

};

// function for equals
const equalsButtonClick = (evnt) => {
  const eql = evnt.target.innerText;
  console.log(`you pressed ${eql}`);
  // const product = num1 [operator] num2
  // using if else, or switch
  // if oprator = x, then num1 * num2, sum or total equals

  console.log(`your value of num1 is ${num1}, your value of num2 is ${num2}, your operator is ${operator}`);
  // do calculation which switchs
  // return product
  // reset variables
  // num1 = "";
  // num2 = "";
  // operator = "";
  console.log(num1, num2, operator);
  console.log(typeof (num1), typeof (num2), typeof (operator));
  num1 = parseFloat(num1);
  console.log(typeof (num1));
  num2 = parseFloat(num2);

  // now time fo the switch statement
  // new expression 

  const opt = operator;
  switch (opt) {
    case '+':
      product = num1 + num2;
      console.log(product);
      console.log(resultToScreen);
      resultToScreen.innerHTML = product;
      // return product;

      break;
    case '-':
      product = num1 - num2;
      console.log(product);
      resultToScreen.innerHTML = product;
      break;
    case 'x':
      product = num1 * num2;
      console.log(product);
      resultToScreen.innerHTML = product;
      break;
    case '/':
      product = (num1 / num2);
      console.log(product);
      resultToScreen.innerHTML = product;
      break;
    default:
      alert("you done broke me now")
  };

  num1 = "";
  num2 = "";
  product = "";
  operator = "";

};

// function for reset 
const resetButtonClick = (evnt) => {
  const rst = evnt.target.innerText;
  console.log(`you pressed ${rst}`);
  num1 = "";
  // variable numbe 2 
  num2 = "";
  // operator;
  operator = "";
  // product
  product = "";
  console.log(num1, num2, operator);
  printToScreen.innerHTML = " ";
  resultToScreen.innerHTML = " ";

};


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