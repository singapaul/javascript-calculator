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
// Decimal press
const decimalPress = document.getElementById("decimal");


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
// is decimal allowed? 
let decimalAllowed = true;

// 2. Functions

//Print calculation to the DOM function:
const printCalculation = () => {
  printToScreen.innerHTML = num1 + operator + num2;
};
// Print result to the DOM function: 
const printResult = () => {
  resultToScreen.innerHTML = product
}

// number press function 
const numberButtonClick = (evnt) => {

  let inputNum = (evnt.target.innerText);
  console.log(`The input pressed is ${inputNum}`);

  // case 1. No operator = blank, putting num1 in 
  if (operator == "" && Continueflag == false) {
    console.log("on num1 path");

    // if there is a decimal point in the number, disbale that button/or not add the input, don need flags

    const containsDecimal = inputNum.includes(".");

    if (containsDecimal === true) {
      decimalPress.disabled = true
    } else {
      decimalPress.disabled =false
    };

    num1 += inputNum;
    printCalculation();
    console.log(`we have assigned num1 the value of ${num1}`);
    //case 2. Num1 has value, operator has value, put num2 in
  } else if (operator !== "" && num1 !== "" && Continueflag == false) {
    num2 += inputNum;
    printCalculation();
    // printToScreen.innerHTML = num1 + operator + num2;
    console.log(`we have assigned num2 the value of ${num2}`);
      // if there is a decimal point in the number, disbale that button/or not add the input, don need flags

      const containsDecimal = inputNum.includes(".");

      if (containsDecimal === true) {
        decimalPress.disabled = true
      } else {
        decimalPress.disabled =false
      };


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
    num2 += inputNum;
    console.log(num2);
    printCalculation()
    console.log(num1, num2, operator, secondOperatorSwitch, Continueflag)
    // here we want to remove brackets and add them and reshow the display
    //will also need another flag here to show that operator is down
  } else if (num1 !== "" && operator !== "" && product == "") {
    console.log("think im nearly there")
    num2 += inputNum;
    console.log(num2);
    printCalculation();
  }

};

// function for pressing an operator
const operatorButtonClick = (evnt) => {
  operator = evnt.target.innerText;
  console.log(`You pressed ${operator} `);

  console.log(num1, num2)
  console.log(Continueflag);


  // We are assignign the operator a value here, so it will always have a value, however we can use our two switches
  // Scenario 1 num1 no value, num2 has no value (by extension) and we are not continuining from a previous sum
  if (num1 == "" && Continueflag == false) {
    // printToScreen.innerHTML = "";
    console.error("can't enter operator without a number")
  }
  // Scenario 2 num 1 has a value, num2 has no value and we are not continuining from a previous sum
  else if (num1 !== "" && num2 == "" && Continueflag == false) {
    console.log("scenario2");
    printCalculation();
  }
  // scenrio 3, num1 has val, num2 has val, operator blank, product blank
  else if (num1 !== "" && num2 == "" && product == "") {
    printCalculation();
    console.log("is this happening?")
  } else if (num1 !== "" && num2 !== "") {
    console.log("diff case")
    num2 = "";
    printCalculation();
  } else {
    console.log("edge case")
  };
};


const delButtonClick = () => {
  console.log("you pressed delete")

  // scenario 1. where num1 has value, num2 blank, operator blank
  if (num1 !== "" && num2 == "" && operator == "") {
    console.log(num1);
    // This line removes the last value from num1, it redefines the string, from index 0 to 1 minus the final index
    num1 = num1.slice(0, -1);
    console.log(`The value of num1 is now ${num1}`);
    printCalculation()

    // scenario 2. where num1 has value, num2 blank, operator has value 
  } else if (num1 !== "" && num2 == "" && operator !== "") {
    console.log(`The value of the operator is ${operator}`);
    operator = "";
    console.log(`The value of the operator is ${operator}`);
    printCalculation();
    // scenario 3. where num1 has value, num2 has value operator has value
  } else if (num1 !== "" && num2 !== "" && operator !== "") {
    console.log(num2);
    num2 = num2.slice(0, -1);
    console.log(`The value of num2 is now ${num2}`);
    printCalculation()
  } else if (num1 === "" && operator === "" && num2 === "") {
    console.log("This button isn't doing anything")
    // easter egg
    eggCounter();

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

  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  // We do our maths in an if statement to test if we are using actual numbers
  if (isNaN(num1) || isNaN(num2)) {
    console.error(`One or more of your values of the values is NaN, the value of num1 is ${num1} & the value of num2 is ${num2}`);
    resetButtonClick(evnt);
  } else {

    // do maths 
    product = mathOperation(operator, num1, num2);
    printResult();
    // maybe I want to redefine these seperately
    num1 = product;
    Continueflag = true;
    product = "";
    operator = "";
    // num2 = "";
    secondOperatorSwitch = true;
    console.log(num1, num2, operator, product)
  }
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
  // printToScreen.innerHTML = " ";
  // resultToScreen.innerHTML = " ";
  printCalculation()
  printResult()


};

// Math function 

const mathOperation = (opt, num1, num2) => {

  switch (opt) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case 'x':
      return num1 * num2;
    case '/':
      return product = (num1 / num2);
    case '%':
      return ((num1 / num2) * 100)
    default:
      // console.error turns up red in Chrome
      console.error("Non compatible operator included");
  }
};

// function to test for decimals
const containsDecimal = (inputNum) => {
  inputNum.includes(".");

  if (containsDecimal === true) {
    decimalPress.disabled = true
  } else {
    decimalPress.disabled = false
  }
};



// easter egg: 

const eggCounter = () => {
  console.log(counter);
  if (counter > 10) {
    console.log(("stop trying to break me! You've pressed me times!"));
    counts = 0;
  } else {
    console.log("whatever")
  }
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