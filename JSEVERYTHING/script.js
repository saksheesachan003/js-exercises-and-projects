//////////////////////// ********** Variables and Declarations  *********

var a; // declarations
var a = 12; // initalization
let p;
// let p = 12;  can't re-declate let
const q = 12;

// scope ( global -> all code, block -> {}, functional -> function () {} )

// var - function scope ( use under function or globally, reassign and redeclare)
function a() {
  if (true) {
    var a = 13; // this var is accesible in all function
  }
}

{
  var a = 25; // here i didn't used function then var will accesiable in whole code
}

var x = 1; // global
{
  var x = 2; // global
}
// console.log(x); // 2, bcs var is functional scope so overrides second value

// let -> Block scope ( use under curly brackets, reassign not redeclare)
function a() {
  if (true) {
    let a = 13; // this let is accesible in only under if statement not function
  }
}

let m = 10; // global scope
{
  let m = 20; // block scope
  console.log("Inside:", m); // 20
}
console.log("Outside:", m); // 10

// Reassignment and Redeclaration

var z = 5; // declare and initalize
var z = 7; // Re-decalre ( giving value  using keyword) (again declared) (var is re-declared and re-assigned)

let n = 10;
n = 15; // re-assign ( giving value without using keyword) (value update) (let is re-assigned not re-declared)
// let n = 17; // throw error, can't re-declared

//***** Temporal Dead Zone (TDZ)

/*  let a = undefinied; 
  console.log(a); 
  a = 10; */

// console.log(o); //ReferenceError: Cannot access 'a' before initialization
let o = 10; // bcs let can't access value until and unless value is initalised but here value is not initalised

//**********  Hoisting Impact Per Type

var r = 12;

/* Two phases of Variable in JS......
  1. Declaration Part (moves on top side)
       var r = undefinied;

  2. Initalization Part (stays in bottom)
       r = 12;
*/

console.log(s);
var s = 60; // undefinied, won't throw error

////// confusion questions......

// why var leaks outside block but let doesn't
if (true) {
  var a = 1;
  let b = 2;
}
console.log(a); // 1, here didn't used function so var is globally accessible
// console.log(b); // RefrenceError, here let is block scope so we can't access outside of curly braces

// why const allows changing object properties
const person = { name: "Harsh" };
person.name = "akshat"; // allowed
// person = {}; // not allowed, bcs in const we can't re assign new value

/////////////////////// ********** Data Types + Type System  *********

// Symbol  -> unique immutable value (value can't change, override)

let obj = {
  uid: 1,
  name: "harsh",
  age: 12,
  email: "test@test.com",
};
let u1 = Symbol("uid"); // how to create symbol
obj[u1] = "001"; // uid : 1,   Symbol(uid) : "001" ( won't uid replace, a identifier will create)

// bigINT -> A largest Integer
// console -> Number.MAX_SAFE_INTEGER :) Gives largest integer

let a1 = 9007199254740991n; // put "n" in last

///------- Primitive type -> copied directly
let t = 2; // 2
let u = t; // 2

t = 10;
console.log("T:", t, "U:", u); // T : 10, U: 2 , this is copy directly, if u will change in T then change will reflect only in T not in U

/// ------- Refrence type -> doesn't copy directly, but by refrence
let v = [1, 2, 3]; // [1, 2, 3]
let w = v; // [1, 2, 3], this is not copy of x, this is refrence of x if you will change in x , in y as well be changes
v.pop();
console.log("V:", v, "W:", w); // V : [1, 2] w: [1, 2]

let a2 = {
  name: "alia",
};
let b2 = a2;
a2.name = "lisa";
console.log(`Obj1: ${a2.name} Obj2: ${b2.name}`); // in both name will change

// Truthy Vs Falsy Values
// Falsy Value  (0) -> 0 false " " null undefinied NaN document.all
// Truthy Value  (1) -> remaining all

// true + false -> 1 ,     null + 1 -> 1 ,     5 + "5" -> "55", !!undefinied -> false

//////// Common Confusion

// Why NaN is a number
// Undefinied Vs null
// "5" + 1 Vs "5" - 1

/////////////////////// ********** Operators  *********

let x3 = 10;
let y3 = 20;

if (x3 > 5 && y3 < 25) {
  console.log("A"); // A
} else {
  console.log("B");
}

let isAdmin = true;
let isLoggedIn = false;
if (isAdmin || isLoggedIn) {
  console.log("Access Granted"); // Access Granted
} else {
  console.log("Access denied");
}

let temp = 35;
if (!(temp < 30)) {
  console.log("Hot"); // Hot
} else {
  console.log("Pleasant");
}

let a5 = 0;
if (a5) {
  console.log("Truthy");
} else {
  console.log("Falsy"); // Falsy
}

let score = 78;
let grade = score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "fail"; // B

let loggedIn = true;
let hasToken = false;
let access = loggedIn && hasToken ? "Allow" : "Deny"; // Deny

let incr = 5;
incr++; // 5 (first give value and then increase)
++incr; // 6 (first increase value then give )

let x1 = 3;
let y1 = x1++;
console.log(x1, y1); // 4, 3

let x2 = 4;
let y2 = ++x2;
console.log(x2, y2); // 5 5

let p1 = 10;
p1--; // 10
p; // 9

let n1 = 5;
let result = n++ + ++n; // 5 + 7 -> 12

let likes = 100;
function likePost() {
  return ++likes;
}
likePost(); // 101
likes; // 101

let count = 5;
if (count-- === 5) {
  console.log("Matched"); // Matched -> 5 === 5
} else {
  console.log("Not Matched");
}

//  Score logic:
// Print "Excellent", "Good", "Average", or "Fail" based on range

function gradeChecker(marks) {
  if(marks > 90 ) return "Excellent";
  if(marks > 80 ) return "Good";
  if(marks > 65 ) return "Average";
  return "Fail";
}
console.log(gradeChecker(85))


/////////////////////// ********** Control Flow  *********

// Build a calculator
// Using switch + arithmetic operators ( +, -, *, / )

let operator = "+"
let operand1 = 10;
let operand2 = 3;
switch(operator){
  case "+":
    result = operand1 + operand2;
    break;
  case "-":
    result = operand1 - operand2;
    break;
  case "*":
    result = operand1 * operand2;
    break;
  case "/":
    result = operand1 / operand2;
    break;
  default:
    console.log("Invalid Operator")
}
console.log("Result:", result);


//// Early Return Pattern 
function getVal(val){
  if(val < 25) return "D";
  else if(val < 50) return "C";
  else if(val < 75) return "B";
  else return "A"
}
console.log(getVal(76)) // A

/*   Write a function getGrade(score) that : 
  . Takes a student marks ( 0 to 100 ) 
  . Returns the grade based on this logic
  90 - 100 A+
  80 - 89 A
  70 - 79 B
  60 - 69 C
  33 - 59 D
  0 - 32 Fail
  Anything else Invalid Marks
*/

//// Using Early Return Pattern :)
function getGrade(score) {
  if (score >= 90 && score <= 100) return "Grade A+";
  if (score >= 80 && score <= 89) return "Grade A";
  if (score >= 70 && score <= 79) return "Grade B";
  if (score >= 60 && score <= 69) return "Grade C";
  if (score >= 33 && score <= 59) return "Grade D";
  if (score >= 0 && score <= 32) return "Fail";
  return "Invalid Marks";
}
getGrade(54); // Grade D

// Rock-Paper-Scissors Logic
// Given player1 and player2's choice, print winner or draw

function rps(user, computer) {
  if (user === computer) return "Draw";

  if (user === "rock" && computer === "scissor") return "user";
  if (user === "scissor" && computer === "paper") return "user";
  if (user === "paper" && computer === "rock") return "user";

  return "computer";
}
console.log(rps("rock", "rock")); // Draw
console.log(rps("rock", "scissor")); // user

// Use Switch Case What to Wear
// Weather advice:

let weather = "rainy";
switch (weather) {
  case "rainy":
    console.log("Wear Rain Coat");
    break;
  case "summer":
    console.log("Wear Shorts");
    break;
  default:
    console.log("Wear Warm");
}

// Login message:
// Show different messages based on combination
let isLoggedInValue = true;
let isAdminValue = false;
let message;

if (isLoggedInValue && isAdminValue) {
    message = "Logged In with admin";
} else if (isLoggedInValue) {
    message = "Logged In user";
} else if (isAdminValue) {
    message = "Admin user";
} else {
    message = "Not user";
}
console.log(message);


// Age checker:
// Return "Kid", "Teen", "Adult", or "Senior"
const ageChecker = (age) =>
  age <= 12 ? "Kid" :
  age <= 19 ? "Teen" :
  age <= 59 ? "Adult" :
  "Senior";

console.log(ageChecker(10)); // Kid
console.log(ageChecker(16)); // Teen
console.log(ageChecker(30)); // Adult
console.log(ageChecker(65)); // Senior

/////////////////////// ********** Loops (Repetation) *********

//// There are two types of loops... ( repetation are going in both)
    // 1. 1 1 1 1 1 1 1 1  ( without increment) ( print -> 1 1..)
    // 2. 1 2 3 4 5 6 7 8  ( with increment) ( orint -> 1 2..)



/// For loop 
  // kaha se jana hai -> kaha tak jana hai -> kaise jana hai
  // for(start; end; change)

  // 1 - 5
  for(let i = 1;  i <=5; i++){
    console.log(i)  // 1 2 3 4 5
  }

  
/// While loop
  // kaha se jana hai -> kab rukna hai -> kaise jana hai
// in 4 should stop
  let i = 1;
  while ( i < 5) {
    console.log(i);  // 1 2 3 4
    i++;
  }


/// do - while loop ( atleast run one time if condition false )
let j = 12;
do{
  console.log(12); // 12
  i++;
}
while ( j < 2)


/// Break ( exits from loop)
for(let i = 1; i < 5; i++){
  console.log(i);
  if(i === 3) break; // 1 2 3
}

/// continue ( skips current iteration)
for(let i = 1; i < 5; i++){
  if(i === 3) continue; 
  console.log(i); // 1 2 4 ( skips -> 3 )
}


// Q1.  Print numbers from 1 to 10 using for loop
  // for(let i = 1; i < 11; i ++){
  //   // console.log(i);
  //   i++;
  // }

// Q1.  Print numbers from 10 to 1 using while loop
  // let i = 10;
  // while(i > 0){
  //   console.log(i);
  //   i--;
  // }

// Q3. print even numbers from 1 to 20 using a for loop
  // for(let i = 1; i < 20 ; i++){
  //   if(i % 2 === 0) console.log(i);
  // }

// Q4. Print odd numbers from 1 to 15 using while loop
  // let i = 1;
  // while( i <= 15){
  //   if(i % 2 === 1) console.log(i);
  //   i++;
  // }

// Q5. Print the multiplication table of 5 ( i.e. 5 * 1 = 5, 5 * 2 = 10)
  for(let i = 1; i < 10; i ++){
    // console.log( 5 * i);
    console.log(`5 * ${i} = ${5 * i}`)
    i++;
  }

// Q6. find the sum of numbers from 1 to 100 using a loop 
  let sum = 0;
  for(let i = 1; i < 101; i++){
    sum = sum + i;
  }
  console.log("SUM:", sum);

// Q7. Print all numbers between 1 to 50 that are divisible by 3.
  // for(let i = 1; i <= 50; i++){
  //   if(i % 3 === 0) console.log(i);
  // }

// Q8. ask the user for a number and print wheteher each number from 1 to that number is even or odd
// e.g. "1 is odd" , "2 is even" ....
  // let val = prompt("Give a number");
  // for(let i = 1; i <= val; i++){
  //   if(i % 2 === 0) console.log(`${i} is even`);
  //   else console.log(`${i} is odd`);
  // }

// Q9. count how many numbers between 1 to 100 are divisible by both 3 and 5
  // for(let i = 1; i <= 100; i++){
  //   if(i % 3 === 0 && i % 5 === 0) console.log(i);
  // }

// Q1. Stop at first multiple of 7
// write a loop from 1 to 100 that:
//   ->  prints each Number
//   ->  stops completly when it finds the first number divisible by 7

    for(let i = 1; i <= 100; i++){
      // console.log(i);
      if(i % 7 === 0) break; // 1 to 7 and then stop
    }

// Q2. Skip multiplies of 3
// Write a loop from 1 to 20 that:
//    -> skips numbers divisible by 3
//    -> print all others
// Expected Output : 1 2 4 5 7..toExponential.apply. (no 3, 6..)

for(let i = 1; i < 21; i++){
  if(i % 3 === 0) continue;
  // console.log(i);
}

// Q3. Print first 5 Odd Numbers only
// Write a loop from 1 to 100
//      -> prints only 5 odd numbers
//      -> then stops the loop
// Use both if, continue, and a counter + break
// Expected output : 1 3 5 7 9
let counter = 0;
for(let i = 1; i < 101; i++){
  if(i % 2 === 1){
    counter++;
    console.log(i);
  }
  if(counter === 5) break;
}
