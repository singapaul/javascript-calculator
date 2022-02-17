// // // function to concatenate inputs into a string
// // const concat = (a, b) => {
// //   // need to change this into a for Each and allow you to put an array in to get a string out
// //   // Convert both the integers to string
// //   var s1 = a.toString();
// //   var s2 = b.toString();

// //   // Concatenate both strings
// //   var s = s1 + s2;

// //   // Convert the concatenated string
// //   // to integer
// //   var c = parseInt(s);
// //   console.log(c);
// //   // return the formed integer
// //   return c;
// // }

// // let a = [1, 2, 3, 4];
// // let b = 0

// // // a.forEach((input) => {
// // //   // var x1 = input.toString();
// // //   // var s3 = x1;
// // //   // b.push(x1);
// // //   // console.log(b);

// // // })


// // for (let i = 0; i < a.length; i++){


// // // }
// // let num1;
// // let a;

// // const numberButtonClick = (evnt) => {
// //   // the below code takes the inputs and concatenates them into a single number
// //   num1 = arrayToNumber(evnt);
// //   console.log(`The value of num 1 is ${num1}`);

// // };

// // numberButtonClick('1')

// // // const arrayToNumber = (evnt) =>{
// // //   // the below code takes the inputs and concatenates them into a single number
// // //   let num = evnt.target.innerText;
// // //   a.push(num);
// // //   // running total
// // //   const x = Number((a).join(""));
// // //   return x;
// // //  }




// // //  Original code: 


// // // function for pressing a number
// // const numberButtonClick = (evnt) => {
// //   // the below code takes the inputs and concatenates them into a single number
// //   let num = evnt.target.innerText;
// //   a.push(num);
// //   // running total
// //   const x = Number((a).join(""));
// //   // function output
// //   num1 = x;
// //   console.log(`The value of num 1 is ${num1}`);
// //   // num1 = evnt.target.innerText;
// //   // console.log(`You pressed ${num1}`)
// // };

// // const arrayToNumber = (evnt) =>{
// //   // the below code takes the inputs and concatenates them into a single number
// //   let num = evnt.target.innerText;
// //   a.push(num);
// //   // running total
// //   const x = Number((a).join(""));
// //   return x;
// // }


// const numberToArray = (evnt) => {
//   // we will pass in the already defined num1;
//   var x = Number(evnt);
//   var y = Array(String(evnt));
//   return y;
// }
// let test = 321;
// console.log(test);
// let testResult = numberToArray(test);
// console.log(testResult)




// // Declare a variable and store an
// // integer value
// var num = 235345

// // Here we typecasting the num
// // Splitting the num, so that
// // we got an array of strings
// // Then use map function to
// // convert the array of strings
// // into array of numbers



// // Declare a variable and store an
// // integer value
// var num = 235345

// Here we typecasting the num
// Splitting the num, so that
// we got an array of strings
// Then use map function to
// convert the array of strings
// into array of numbers

// var digits = ("" + n).split("");
// console.log(n);
// console.log(digits);


const numberToArray = (evnt) => {
  return ("" + evnt).split("");
};

console.log(numberToArray(423));
