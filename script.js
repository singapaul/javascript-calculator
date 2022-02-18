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
// easter egg
let counter = "";
// continue calc flag: 
let Continueflag = false;
// switch for additional operator: 
secondOperatorSwitch = false;

// 2. Functions

const numberButtonClick = (evnt) => {

  let inputNum = (evnt.target.innerText);
  console.log(`The input pressed is ${inputNum}`);

  // case 1. No operator = blank, putting num1 in 
  if (operator == "" && Continueflag == false) {
    console.log("on num1 path")
    num1 += inputNum;
    printToScreen.innerHTML = num1;
    console.log(`we have assigned num1 the value of ${num1}`);
    //case 2. Num1 has value, operator has value, put num2 in
  } else if (operator !== "" && num1 !== "" && Continueflag == false) {
    num2 += inputNum;
    printToScreen.innerHTML = num1 + operator + num2;
    console.log(`we have assigned num2 the value of ${num2}`);
    // case 3. num 1 and num2 unassigned dont print operator (might need to add a flag in later)
  } else if (operator !== "" && num1 == "" && num2 == "" && Continueflag == false) {
    resetButtonClick(evnt);
  }
  // case 4. we are continuining after initial calculation, num1 is assigned value of product, num2 = blank, operator is blank, continue flag is true;
  else if (num1 !== "" && num2 == "" && operator == "" && Continueflag == true) {
    console.log("scenario 4");
    // we are fine with this, we actually don't want anything to happen

  }
  //case 5. we are continuining after initial calculation, num1 is assigned value of product, num2 = blank, operator is full, continue flag is true;
  else if (num1 !== "" && secondOperatorSwitch == false && operator !== "" && Continueflag == true) {
    console.log("scenario 5");
    num2+=inputNum;
    console.log(num2);
    printToScreen.innerHTML+=num2;
    console.log(num1,num2, operator, secondOperatorSwitch, Continueflag)
    // here we want to remove brackets and add them and reshow the display
    //will also need another flag here to show that operator is down
  }
};

// function for pressing an operator
const operatorButtonClick = (evnt) => {
  operator = evnt.target.innerText;
  console.log(`You pressed ${operator} `);
  // num1 = printToScreen.innerHTML;
  // console.log(num1);
  console.log(num1, num2)
  console.log(Continueflag);

  console.log(`the state of the continue flag is  ${Continueflag}`);
  console.log(`the state of the operator switch is  ${secondOperatorSwitch}`)

  // We are assignign the operator a value here, so it will always have a value, however we can use our two switches
  // Scenario 1 num1 no value, num2 has no value (by extension) and we are not continuining from a previous sum
  if (num1 == "" && Continueflag == false) {
    printToScreen.innerHTML = "";
    console.log("scenario1")
  }
  // Scenario 2 num 1 has a value, num2 has no value and we are not continuining from a previous sum
  else if (num1 !== "" && num2 == "" && Continueflag == false) {
    console.log("scenario2");
    printToScreen.innerHTML = "";
    printToScreen.innerHTML = num1 + operator;
  }
  //scenario 3
  else if (num1 !== "" && num2 == "" && Continueflag == true &&secondOperatorSwitch==true) {
    console.log("we are continuining down this line of logic");

    printToScreen.innerHTML += operator;
    console.log(secondOperatorSwitch);
    secondOperatorSwitch = false;
    console.log(secondOperatorSwitch);
    console.log(Continueflag);
    console.log(num1, num2, operator);

  }
  // else if (num1 !=="" && num2!=="" && product !==""){
  //   printToScreen.innerHTML ="";
  //   printToScreen.innerHTML = num1 + operator + num2+ operator;
  // }
  else {
    console.log("edge case")
  }
};



const delButtonClick = () => {
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
      alert(`stop trying to break me! You've pressed me ${counts} times!`);
      counter = 0;
    }
  } else {
    console.log("Edge case please fix")
  }
  // end of function 
};


// function for equals
const equalsButtonClick = (evnt) => {
  const eql = evnt.target.innerText;
  console.log(`you pressed ${eql}`);
  // const product = num1 [operator] num2
  // using if else, or switch
  // if oprator = x, then num1 * num2, sum or total equals

  console.log(`your value of num1 is ${num1}, your value of num2 is ${num2}, your operator is ${operator}`);
// Converting the strings to numbers
  console.log(num1, num2, operator);
  console.log(typeof (num1), typeof (num2), typeof (operator));
  num1 = parseFloat(num1);
  console.log(typeof (num1));
  num2 = parseFloat(num2);

// In the case I want to keep calculating, and I have entered = a second/third/fourth time, I want to output my result






// Switch statement
  const opt = operator;
  switch (opt) {
    case '+':
      product = num1 + num2;
      console.log(product);
      // console.log(resultToScreen);
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

    case '%':
      product = ((num1 / num2) * 100)
      console.log(product);
      resultToScreen.innerHTML = product;
      break;

    default:
      console.log("result already computed")
  };

  // maybe I want to redefine these seperately
  num1 = product;
  Continueflag = true;
  console.log(num1);
  console.log(Continueflag);
  product = "";
  num2 = ""
  operator = "";
  secondOperatorSwitch = true;

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
  // flag
  Continueflag = false;

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