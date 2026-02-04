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

/////////////////////// ********** Control Flow  *********

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

/////////////////////// ********** Loops  *********
