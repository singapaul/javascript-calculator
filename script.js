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
let counter = "";

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

  // scenario 1. where num1 has value, num2 blank, operator blank
  if (num1 !== "" && num2 == "" && operator == "") {
    console.log(num1);
    // This line removes the last value from num1, it redefines the string, from index 0 to 1 minus the final index
    num1 = num1.slice(0, -1);
    console.log(`The value of num1 is now ${num1}`);
    printToScreen.innerHTML = num1;
    // scenario 2. where num1 has value, num2 blank, operator has value 
  } else if (num1 !== "" && num2 == "" && operator !== "") {

    console.log(`The value of the operator is ${operator}`);
    operator = "";
    console.log(`The value of the operator is ${operator}`);
    printToScreen.innerHTML = " ";
    printToScreen.innerHTML = num1;
    // scenario 3. where num1 has value, num2 has value operator has value
  } else if (num1 !== "" && num2 !== "" && operator !== "") {
    console.log(num2);
    // number 
    num2 = num2.slice(0, -1);
    console.log(`The value of num2 is now ${num2}`);
    printToScreen.innerHTML = " ";
    printToScreen.innerHTML = num1 + operator + num2;
  } else if (num1 === "" && operator === "" && num2 === "") {
    console.log("This button isn't doing anything")
    // easter egg
    counter = counter + 1;
    let counts = (counter.length);
    if (counter.length > 10) {
      alert(`stop trying to break me! You've pressed me ${counts} times!`)
    }
  } else {
    console.log("Edge case please fix")
  }
  // end of function 
};



// function for pressing an operator
const operatorButtonClick = (evnt) => {
  operator = evnt.target.innerText;
  console.log(`You pressed ${operator} `);
  // num1 = printToScreen.innerHTML;
  // console.log(num1);
console.log(num1,num2)
if(num1==""){
  printToScreen.innerHTML = "";
}
else if (num1 !=="" && num2 ==""){
  printToScreen.innerHTML = "";
  printToScreen.innerHTML = num1 + operator;
}
// else if (num1 !=="" && num2!=="" && product !==""){
//   printToScreen.innerHTML ="";
//   printToScreen.innerHTML = num1 + operator + num2+ operator;
// }
else {console.log("edge case")}


  

  // we use if statement here :
  // if operator is blank we won't use a switch statement, we will use IF logic 
  // if (num1 == "") {
  //   console.log(operator);
  //   operator = "";
  //   console.log(operator);
  //   // most typical scenario
  // } else if (num1 !== "" && num2 == "") {
  //   console.log("hot potato")
  //   printToScreen.innerHTML += operator;
  // }

  // if the operator already has a value
  // else if (operator !== "") {
  //   operator = evnt.target.innerText;
  //   console.log(operator);
  // } else {
  //   console.log("hi")
  // }

  // need iF logic here 
  // display logics
  // So if there is no operator defined, we want to push the operator onto the screen and define it, if one is already defined, we want to refine it. 
  // we can later expand this logic and push more operators onto the screen when we calculate product = num1 x product 
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