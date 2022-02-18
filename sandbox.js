// // // // function to concatenate inputs into a string
// // // const concat = (a, b) => {
// // //   // need to change this into a for Each and allow you to put an array in to get a string out
// // //   // Convert both the integers to string
// // //   var s1 = a.toString();
// // //   var s2 = b.toString();
// // //   // Concatenate both strings
// // //   var s = s1 + s2;

// // //   // Convert the concatenated string
// // //   // to integer
// // //   var c = parseInt(s);
// // //   console.log(c);
// // //   // return the formed integer
// // //   return c;
// // // }

// // // let a = [1, 2, 3, 4];
// // // let b = 0

// // // // a.forEach((input) => {
// // // //   // var x1 = input.toString();
// // // //   // var s3 = x1;
// // // //   // b.push(x1);
// // // //   // console.log(b);

// // // // })


// // // for (let i = 0; i < a.length; i++){


// // // // }
// // // let num1;
// // // let a;

// // // const numberButtonClick = (evnt) => {
// // //   // the below code takes the inputs and concatenates them into a single number
// // //   num1 = arrayToNumber(evnt);
// // //   console.log(`The value of num 1 is ${num1}`);

// // // };

// // // numberButtonClick('1')

// // // // const arrayToNumber = (evnt) =>{
// // // //   // the below code takes the inputs and concatenates them into a single number
// // // //   let num = evnt.target.innerText;
// // // //   a.push(num);
// // // //   // running total
// // // //   const x = Number((a).join(""));
// // // //   return x;
// // // //  }




// // // //  Original code: 


// // // // function for pressing a number
// // // const numberButtonClick = (evnt) => {
// // //   // the below code takes the inputs and concatenates them into a single number
// // //   let num = evnt.target.innerText;
// // //   a.push(num);
// // //   // running total
// // //   const x = Number((a).join(""));
// // //   // function output
// // //   num1 = x;
// // //   console.log(`The value of num 1 is ${num1}`);
// // //   // num1 = evnt.target.innerText;
// // //   // console.log(`You pressed ${num1}`)
// // // };

// // // const arrayToNumber = (evnt) =>{
// // //   // the below code takes the inputs and concatenates them into a single number
// // //   let num = evnt.target.innerText;
// // //   a.push(num);
// // //   // running total
// // //   const x = Number((a).join(""));
// // //   return x;
// // // }


// // const numberToArray = (evnt) => {
// //   // we will pass in the already defined num1;
// //   var x = Number(evnt);
// //   var y = Array(String(evnt));
// //   return y;
// // }
// // let test = 321;
// // console.log(test);
// // let testResult = numberToArray(test);
// // console.log(testResult)




// // // Declare a variable and store an
// // // integer value
// // var num = 235345

// // // Here we typecasting the num
// // // Splitting the num, so that
// // // we got an array of strings
// // // Then use map function to
// // // convert the array of strings
// // // into array of numbers



// // // Declare a variable and store an
// // // integer value
// // var num = 235345

// // Here we typecasting the num
// // Splitting the num, so that
// // we got an array of strings
// // Then use map function to
// // convert the array of strings
// // into array of numbers

// // var digits = ("" + n).split("");
// // console.log(n);
// // console.log(digits);


// const numberToArray = (evnt) => {
//   return ("" + evnt).split("");
// };

// console.log(numberToArray(423));
// // the below function tidies up the code for the above;

// // let a = [];
// // const arrayToNumber = (evnt) => {
// //   // the below code takes the inputs and concatenates them into a single number

// //   // console.log(evnt);
// //   a.push(evnt);
// //   // running total
// //   const x = Number((a).join(""));
// //   return x;
// // };



// // //  The below function will take a number and convert it into an array and remove the last value;

// // const numberDeleteSingleDigit = (evnt) => {
// //   // we will pass in the already defined num1;
// //   console.log(evnt);
// //   var str = evnt;
// //   str = str.toString();
// //   str = str.substring(0, str.length - 1);
// //   // this will now return a number -1 in length
// //   str = arrayToNumber(str);
// //   return;
// // };



// // const delButtonClick = () => {
// //   // const del = evnt.target;
// //   console.log(`you pressed del button`);
// //   // remember the num1 is the active number you are modifying: 
// //   // num1 = 2131231;
// //   // this will return a number;
// //   // I have a value for num1, I want to convert it to a array, I want to pop the last digit, I want to convert it back into a number, this function should return num1 and console log its new value 
// //   // num1 has a value we want to manipulate 
// //   const num1Array = numberDeleteSingleDigit(num1);


// // };


// // switch case: 
// console.log("start of switch expression")
// const expr = 'Mangoesss';
// switch (expr) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);


// };

// // new expression 
// var num1 = 2;
// var num2 = 3;
// let operator = '+'
// const opt = operator;
// switch (opt) {
//   case '+':
//     console.log(num1 + num2);
//     break;
//   case '-':
//     console.log(num1 - 2);
//     break;
//   default:
//     console.log("awakward");

// }


var strp = "Hello TecAdmin!";
var newStrp = strp.slice(0, -1);
console.log(strp)
console.log(newStrp);



// Add event listener on keyup
document.addEventListener('keyup', (event) => {
  var name = event.key;
  var code = event.code;
  // Alert the key name and key code on keydown
  alert(`Key pressed ${name}  Key code value: ${code}`);
}, false);