//////////////////////// ********** Variables and Declarations  ********* //////////////////////////////////////

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

/////////////////////// ********** Data Types + Type System  ********* ////////////////////////////////////////////

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

/////////////////////// ********** Operators  ********* /////////////////////////////////////

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


/////////////////////// ********** Control Flow  ********* ///////////////////////////////////

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

/////////////////////// ********** Loops (Repetation) ********* /////////////////////////////////

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


/////////////////////// ********** Functions ********* ///////////////////////////////////

/// parameters -> placeholders, arguments -> actual value
function add(v1, v2) {
  // console.log(v1, v2);  // undefined undefined, bcs we didn't pass any value
  // console.log(v1 + v2); // NaN, bcs we can't add undefined value
}
add();

// Default Parameters
function add(v1 = 0, v2 = 0) {
  // console.log(v1, v2); // 0 0, bcs we set default value 0 for both parameters
}
add(); 

// Rest Parameters Vs Spread Operator 
function num(...numbers) {
  console.log(numbers); // [1, 2, 3, 4, 5], bcs rest parameter takes all arguments in an array
}
let arr = [1, 2, 3, 4, 5]; 
num(...arr); // rest parameter takes all arguments in an array, we can also spread the array into individual arguments

// return and early return
function isEven(num) {
  if (num % 2 === 0) return true; // early return, if condition is true then return true and exit the function
  return false; // if condition is false then return false
}
console.log(isEven(3)); // false
console.log(isEven(4)); // true


/// First class functions ( functions are treated as first class citizens, we can pass function as an argument, return function from another function, and assign function to a variable)
function abcd(val){
  val(); // here we are calling the function passed as an argument
}
abcd(function () {
  console.log("Hello"); // Hello , this is a callback function, we are passing this function as an argument to another function
})

// High - Order functions ( functions that take another function as an argument or return a function)
function highOrder(){
  return function(){
    console.log("I am a high order function"); // I am a high order function, this is a function returned from another function
  }
}
highOrder()(); // we are calling the high order function and then calling the returned function

/// Pure vs Impure functions

// Pure function -> always returns the same output for the same input, and has no side effects ( doesn't modify any external variable or state)
function pureFunction(a, b) {
  return a + b; // this is a pure function, it always returns the same output for the same input, and has no side effects
}

// Impure function -> may return different output for the same input, and may have side effects ( modifies external variable or state)
let count1 = 0;
function impureFunction() {
  count1++; // this is an impure function, it modifies the external variable count1, and may return different output for the same input
}
impureFunction();
console.log(count1); // 1, if we call impureFunction again then count1 will be 2, this is a side effect of impure function

// Closure -> a function that has access to the outer function's variables and parameters, even after the outer function has returned
function outer() {
  let count = 0; // this variable is in the outer function's scope
  return function inner() {
    count++; // this inner function has access to the outer function's variable count, even after the outer function has returned
    console.log(count); // this will print the updated count value every time we call the inner function
  }
}
let closureFunction = outer(); // here we are calling the outer function and storing the returned inner function in a variable
closureFunction(); // 1, this is the first call to the closure function, it will print 1

// Lexical Scope -> a function that has access to the variables and parameters of its outer function, even after the outer function has returned
function outer1() {
  let name = "Harsh"; // this variable is in the outer function's scope
  function inner1() {
    console.log(name); // this inner function has access to the outer function's variable name, even after the outer function has returned
  }
  return inner1;
}
let lexicalScopeFunction = outer1(); // here we are calling the outer function and storing the returned inner function in a variable
lexicalScopeFunction(); // Harsh, this is the first call to the lexical scope function, it will print Harsh

// IIFE ( Immediately Invoked Function Expression) -> a function that is defined and immediately invoked, it is used to create a new scope and avoid polluting the global scope
(function () {
  console.log("I am an IIFE"); // I am an IIFE, this function is defined and immediately invoked
})(); // we are invoking the function immediately after defining it

// Hoisting : Declarations Vs Expressions
hoistedFunction(); // I am a hoisted function, this is a function declaration, it is hoisted to the top of the scope, so we can call it before its declaration
function hoistedFunction() {
  console.log("I am a hoisted function"); 
}

// notHoistedFunction(); // ReferenceError: Cannot access 'notHoistedFunction' before initialization, this is a function expression, it is not hoisted to the top of the scope
let notHoistedFunction = function () {
  console.log("I am not a hoisted function"); 
}; 


/////////////////////// ********** Arrays ********* ///////////////////////////////////

let arr1 = [1, 2, 3, 4, 5]; // array literal syntax
let arr2 = new Array(1, 2, 3, 4, 5); // array constructor syntax
arr1[0]; // 1, array indexing starts from 0
arr1.length; // 5, length of the array
arr1[2] = 10; // updating the value at index 2  [1, 2, 10, 4, 5]

// Array Methods
arr1.push(6); // [1, 2, 10, 4, 5, 6], adds an element at the end of the array

arr1.pop(); // [1, 2, 10, 4, 5], removes the last element of the array

arr1.shift(); // [2, 10, 4, 5], removes the first element of the array

arr1.unshift(0); // [0, 2, 10, 4, 5], adds an element at the beginning of the array

arr1.splice(2, 1); // [0, 2, 4, 5], removes 1 element at index 2

arr1.slice(1, 3); // [2, 4], returns a new array from index 1 to index 3 (not inclusive)

arr1.reverse(); // [5, 4, 10, 2, 0], reverses the array

arr1.sort(); // [0, 2, 4, 5, 10], sorts the array in ascending order

arr1.sort((a, b) => b - a); // [10, 5, 4, 2, 0], sorts the array in descending order

arr1.indexOf(4); // 2, returns the index of the first occurrence of the element 4

arr1.includes(5); // true, checks if the element 5 is present in the array

arr1.join("-"); // "0-2-4-5-10", joins the elements of the array into a string with a separator "-"

arr1.concat([6, 7]); // [0, 2, 4, 5, 10, 6, 7], concatenates the array with another array

// map 
let arr3 = [1, 2, 3, 4, 5];
let squaredArr = arr3.map((num) => num * num); // [1, 4, 9, 16, 25], returns a new array with the square of each element

// filter
let evenArr = arr3.filter((num) => num % 2 === 0); // [2, 4], returns a new array with only the even elements 

// reduce
let sum = arr3.reduce((acc, num) => acc + num, 0); // 15, returns the sum of all elements in the array, 0 is the initial value of the accumulator

// forEach
arr3.forEach((num) => console.log(num)); // 1 2 3 4 5, executes a provided function for each array element

// find
let foundNum = arr3.find((num) => num > 3); // 4, returns the first element that satisfies the condition

// findIndex
let foundIndex = arr3.findIndex((num) => num > 3); // 3, returns the index of the first element that satisfies the condition

// some
let hasEven = arr3.some((num) => num % 2 === 0); // true, checks if at least one element satisfies the condition

// every
let allEven = arr3.every((num) => num % 2 === 0); // false, checks if all elements satisfy the condition

// Destructuring
let [a, b, c] = arr3; // a = 1, b = 2, c = 3, destructuring assignment to extract values from the array into variables
// let [a, b, , c] = arr3; // a = 1, b = 2, c = 4, we can skip elements by leaving empty space in destructuring assignment

// Spread Operator
let arr4 = [6, 7, 8];
let combinedArr = [...arr3, ...arr4]; // [1, 2, 3, 4, 5, 6, 7, 8], combines two arrays into one using the spread operator


