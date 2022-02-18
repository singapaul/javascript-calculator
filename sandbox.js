// const mathOperation = (opt, num1, num2) => {

//   switch (opt) {
//     case '+':
//       return num1 + num2;
//     case '-':
//       return num1 - num2;
//     case 'x':
//       return num1 * num2;
//     case '/':
//       return product = (num1 / num2);
//     case '%':
//       return  ((num1 / num2) * 100)
//     default:
//       // console.error turns up red in Chrome
//       console.error("Non compatible operator included");
//   }
// };

// let result = mathOperation('x', 2, 2);
// console.log(result);





const eggCounter = () => {
  let counts = 110;
  counts = counts + 1;
  if (counts > 10) {
    console.log(("stop trying to break me! You've pressed me times!"));
    counts = 0;
  } else {
    console.log("whatever")
  }
};

eggCounter()
//console.log(eggCounter())