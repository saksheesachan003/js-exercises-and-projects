

///////////////////////////  Loops ********************************  //////////////////////////////////


// Q1.  Print numbers from 1 to 10 using for loop
  for(let i = 1; i < 11; i ++){
    // console.log(i);
    i++;
  }

// Q1.  Print numbers from 10 to 1 using while loop
  let i = 10;
  while(i > 0){
    console.log(i);
    i--;
  }

// Q3. print even numbers from 1 to 20 using a for loop
  for(let i = 1; i < 20 ; i++){
    if(i % 2 === 0) console.log(i);
  }

// Q4. Print odd numbers from 1 to 15 using while loop
  let j = 1;
  while( j <= 15){
    if(j % 2 === 1) console.log(j);
    j++;
  }

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

// Q7. Print all numbers between 1 to 20 that are divisible by 3.
  for(let i = 1; i <= 20; i++){
    if(i % 3 === 0) console.log(i);
  }

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

//  Sum of even numbers from 1 to 20
let sum1 = 0;
for ( let i = 1; i <= 20; i++){
  if(i % 2 === 0) sum1 = sum1 + i;
}
console.log("Sum of even numbers from 1 to 20:", sum1);

// Directly jump by 2 and add to sum
// for (let i = 2; i <=20; i = i +2){
//   sum1 = sum1 + i;
// }


// Square pattern using *
// Expected output:    *****
//                     *****
//                     *****
//                     *****
//                     *****
  // What happens here
  //           Outer loop runs 5 times → 5 rows
  //           Each time the inner loop creates:   *****
for ( let i = 1; i <= 5; i++){
  let row = "";
  for(let j = 1; j <= 5; j++){
    row = row + "*";
  }
  console.log(row);
}


// Triangle pattern
// Expected output:    *
//                     **
//                     ***
//                     ****
//                     *****
for(let i = 1; i <= 5; i++){
  let row = "";
  for ( let j = 1; j <= i; j++){
    row = row + "*";
  }
  console.log(row);
}

// Guess number game, use while to ask until correct
    // let secretNumber = 7;
    // let guess = Number(prompt("Guess the number between 1 and 10"));

    // while (guess !== secretNumber) {

    //   if (guess > secretNumber) {
    //     guess = Number(prompt("Too high! Try again:"));
    //   } else {
    //     guess = Number(prompt("Too low! Try again:"));
    //   }

    // }
    // console.log("Correct! You guessed the number.");


// Write a program that calculates the factorial of a number.
        // Example:
                  // Input: 5
                  // Output: 120 (5 * 4 * 3 * 2 * 1)

    let number = 5; // You can change this to any number you want
    let factorial = 1;

    for(let i = 1; i <= number; i++){
      factorial = factorial * i; // factorial *= i;
    }
    console.log(`The factorial of ${number} is ${factorial}`);

    // Another way ( Reverse Loop)
    for(let i = number; i >= 1; i--){
      factorial = factorial * i; 
    }


// Reverse the digits of a number using a loop.
    // Example:
              // Input: 12345
              // Output: 54321           

    let num = 12345;
    let reversedNum = 0;
    while(num > 0){
      let lastDigit = num % 10; // Get the last digit
      reversedNum = reversedNum * 10 + lastDigit; // Append the last digit to the reversed number ( most imp )
      num = Math.floor(num / 10); // Remove the last digit from the original number
    }
    console.log(`The reversed number is ${reversedNum}`);


// Find how many digits are present.    
  // Example:
          // Input: 987654
          // Output: 6     Each time you divide a number by 10, you remove its last digit
                                                // So: 987654 → 98765 → 9876 → 987 → 98 → 9 → 0
    let num1 = 12345;
    let count = 0;
    while(num1 > 0){
      num1 = Math.floor(num1 / 10); // Remove the last digit from the original number
      count++;
    }
    console.log(`The number of digits in the number is ${count}`);


// Check if a number is prime
      //  A prime number is divisible only by 1 and itself.
              // Example:
                        // Input: 7
                        // Output: Prime
                        // Input: 9
                        // Output: Not Prime                      You only need to check till:  √num
      let num2 = 9;
      let isPrime = true;
      if(num2 <= 1) isPrime = false; // 0 and 1 are not prime numbers
      for(let i = 2; i <= Math.sqrt(num2); i++){
        if(num2 % i === 0){
          isPrime = false;
          break;
        }
      }
      console.log(`${num2} is ${isPrime ? "Prime" : "Not Prime"}`); 


// Print all prime numbers from 1 to 50
     // Output : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47
    



///////////////////////////  Functions ********************************  //////////////////////////////////

// Q1. What's the difference between function declaration and expression in terms of hoisting?
  // Function Declaration is hoisted, meaning you can call it before its definition in the code. 
  // Function Expression is not hoisted, so you cannot call it before it is defined.

declarationExample(); // This works because of hoisting
function declarationExample() {
  console.log("This is a function declaration");
}

// expressionExample(); // This will throw an error because it's not hoisted
let expressionExample = function() {
  console.log("This is a function expression");
}

// Q2. Use the rest parameter to accept any number of scores and return the total
function getScore(...scores){
  let total = 0;
  scores.forEach(function(val) {
    total = total + val
  });
  // console.log("Total Score:", total);
  return total;

}
// getScore(10, 20, 30); // Output: 60
console.log(getScore(10, 20, 30)); // Output: 60


// Q3. pass a function into another function and execute it inside
function abcd(func){ 
  func(); // This will execute the passed function
}
abcd(function() {
  console.log("Hello from the passed function!");
})

// Q4. Convert the  below function into a pure function
  // let total = 0;
  // function addToTotal(num) {
  //   total = total + num; // This modifies the external variable, making it impure
  //   return total;
  // }

let total = 0;
function addToTotal(num) {
  return total + num; // This creates a new value instead of modifying the external variable, making it pure
}

// Q3. Use of IIFE ( Immediately Invoked Function Expression)
let result = (function () {
  let score = 0;
  return {
    getScore: function() {
      console.log(score);
    },
    setScore: function(val) {
      score = val;
    },
  };
})(); // This function will execute immediately after it's defined


/// Q4. Write a BMI Calculator function that takes weight and height as parameters and returns the BMI value.
function calculateBMI(weight, height) {
  return weight / (height * height); // BMI formula: weight (kg) / height (m)^2
}
console.log(calculateBMI(70, 1.75)); // Output: 22.857142857142858
console.log(calculateBMI(70, 1.75).toFixed(2)); // Output: 22.86 (rounded to 2 decimal places)

/// Q5. Create a reusable discount calculator (HOF) that takes a discount percentage and returns a function that can be used to calculate the discounted price for any given original price.
function discountCalculator(discountPercentage) {
  return function(price) {
    return price - price * (discountPercentage / 100); // Calculate the discounted price
  }
}
let discounter = discountCalculator(10); // This will create a function that applies a 10% discount
console.log(discounter(100)); // 90 (10% off of 100)

/// Q6. Create a closure counter function that maintains a private count variable and returns an object with two methods: increment() to increase the count and getCount() to retrieve the current count value.
function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
let c = createCounter();
console.log(c()); // 1
console.log(c()); // 2

/// Q6. Create a greet function with default name parameter that returns a greeting message. If no name is provided, it should greet "Guest".
function greet(name = "guest"){
  return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet()); // Output: Hello, Guest!

/// Q7. Use a function to log even numbers in array
function logEvenNumbers(arr) {
  arr.forEach(function(num){
    if(num % 2 === 0) console.log(num);
  });
}
let numbers = [1, 2, 3, 4, 5, 6];
logEvenNumbers(numbers); // Output: 2, 4, 6

/// Q8. Create a pure function to add tax to a price. The function should take the original price and tax rate as parameters and return the final price after adding tax.
function addTax(price, taxRate) {
  return price + (price * taxRate / 100); // Calculate the final price after adding tax
}
console.log(addTax(100, 10)); // Output: 110 (100 + 10% of 100)


/// Q9. Use IIFE to show welcome message immediately when the script loads.
(function(){
  console.log("Welcome to the JavaScript practice session!");
})();

/// Q 10. Make a toUpperCase transformer using HOF
function transformer(func) {
  return function(str) {
    return func(str);
  }
}
let toUpperCase = transformer(function(str) {
  return str.toUpperCase();
});
console.log(toUpperCase("hello")); // Output: HELLO


///////////////////////////  Arrays ********************************  //////////////////////////////////

/// Create an array with 3 fruits and log the second fruit to the console.
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[1]); // Output: Banana

/// Add "Mango" at the end and "Pineapple" at the beginning of this array
fruits.push("Mango"); // Add "Mango" at the end
fruits.unshift("Pineapple"); // Add "Pineapple" at the beginning
console.log(fruits);

/// Replace "banana" with "kiwi" in array above
fruits.splice(2, 1, "Kiwi"); // Replace "Banana" with "Kiwi"
console.log(fruits);

/// Remove the last item from this array uisng a method
let numbers1 = [1, 2, 3, 4];
numbers1.pop(); // This will remove the last item (4) from the array
console.log(numbers1); // Output: [1, 2, 3]

/// Insert "Red" and "Blue" at index 1 in the array 
let colors = ["Green", "Yellow"];
colors.splice(1, 0, "Red", "Blue"); // This will insert "Red" and "Blue" at index 1
console.log(colors); // Output: ["Green", "Red", "Blue", "Yellow"]

/// Extract only the middle 3 items from this array
let items = [1, 2, 3, 4, 5, 6];
console.log(items.slice(2, 5)); // Output: [3, 4, 5]

/// Sort this array alphabetically and then reverse it
let names = ["Zara", "Alice", "Bob", "Charlie"];
names.sort().reverse(); // This will sort the array alphabetically and then reverse it
console.log(names); // Output: ["Zara", "Charlie", "Bob", "Alice"]

/// uSE .MAP() to square each number in the array and return a new array with squared values
let nums = [1, 2, 3, 4];
let squareNums = nums.map(n => n * n); // This will create a new array with squared values
console.log(squareNums); // Output: [1, 4, 9, 16]

/// Use .FILTER() to keep numbers grater than 10 in the array and return a new array with those values
let mixedNums = [5, 10, 15, 20, 25];
let filteredNums = mixedNums.filter(n => n > 10); // This will create a new array with numbers greater than 10
console.log(filteredNums); // Output: [15, 20, 25]

/// Use .REDUCE() to find sum of all numbers in the array
let Nums = [1, 2, 3, 4];
let Num = Nums.reduce ((acc, val) => acc + val, 0); // This will calculate the sum of all numbers in the array
console.log(Num); // Output: 10

/// use .FIND() to get the first number less than 10 in the array
let values = [12, 5, 8, 20, 3];
let firstLessThan10 = values.find(n => n < 10); // This will find the first number less than 10 in the array
console.log(firstLessThan10); // Output: 5

/// Use .some() to check if any student has scored below 35
let scores = [45, 78, 32, 90, 28];
let hasFailed = scores.some(score => score < 35); // This will check if any student has scored below 35
console.log(hasFailed); // Output: true

/// Use .every() to check if all numbers are even
let evenNums = [2, 4, 6, 8];
let allEven = evenNums.every(n => n % 2 === 0); // This will check if all numbers are even
console.log(allEven); // Output: true

/// Destructure this  array to get firstName and lastName
let fullName = ["Sakshee", "Singh"];
let [fname, lname] = fullName; // This will destructure the array to get firstName and lastName
console.log(fname); // Output: Sakshee
console.log(lname); // Output: Singh

/// Merge these two arrays using spread operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let mergedArr = [...arr1, ...arr2]; // This will merge the two arrays using spread operator
console.log(mergedArr); // Output: [1, 2, 3, 4, 5, 6]

/// Add "India" to the start of this array using spread operator
let countries = ["USA", "UK", "Australia"];
countries = ["India", ...countries]; // This will add "India" to the start of the array using spread operator
console.log(countries); // Output: ["India", "USA", "UK", "Australia"]


/// Q1. Create an array of student names and print each
let students = ["Alice", "Bob", "Charlie"];
students.forEach(function(student) {
  console.log(student);
})

/// Q2. Filter even numbers from an array
let numbers2 = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers2.filter(n => n % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]


/// Q3. Map prices to include GST (18%)
let prices = [100, 200, 300];
let priceWithGST = prices.map ( price => price + ( price * 0.18));
console.log(priceWithGST); // Output: [118, 236, 354]

/// Q4. Reduce salaries to calculate total payroll
let salaries = [50000, 60000, 55000];
let totalPayroll = salaries.reduce((acc, salary) => acc + salary, 0);
console.log(totalPayroll); // Output: 165000

/// Q5. Find the first student with grade A
let students1 = [
  { name: "Alice", grade: "B" },
  { name: "Bob", grade: "A" },
  { name: "Charlie", grade: "C" }
];
let firstAStudent = students1.find(student => student.grade === "A");
console.log(firstAStudent); // Output: { name: "Bob", grade: "A" }

/// Q6. Write a function to reverse an array
function reverseArray(arr) {
  return arr.reverse();
}
let numbers3 = [1, 2, 3, 4, 5];
console.log(reverseArray(numbers3)); // Output: [5, 4, 3, 2, 1]

/// Q7. Sort array of ages in ascending order
let ages = [25, 18, 30, 22];
ages.sort((a, b) => a - b);
console.log(ages); // Output: [18, 22, 25, 30]


/////////////////////// ********** Objects ********* ///////////////////////////////////

/// Create an object for a student with name , age and isEnrolled
let student = {
  name: "Ritika Chaurasiya",
  age: 27,
  isEnrolled: true
}
console.log(student);

//// Can an object key be a number? Yes, but it will be converted to a string. 
/// Can an object key be a boolean? Yes, but it will also be converted to a string.
let obj = {
  true: "Yes",
  42: "answer"
}
console.log(obj); // {true: "Yes", "42": "answer"}
console.log(obj[true]); // Output: "Yes"
console.log(obj[42]); // Output: "answer"

//// Access the value of "first-name" from this object:
let user = {
  "first-name": "john"
}
console.log(user["first-name"]); // Output: "john"

/// Add a new key "last-name" with value "doe" to the above object
user["last-name"] = "doe";
console.log(user); // Output: { "first-name": "john", "last-name": "doe" }

//// Given a dynamic key let key = "age", how will you access user[key]?
let key = "age";
const user1 = {
  age: 26,
}
console.log(user1[key]); // Output: 26

/// From the object below, print the latitude
const locations = {
  city: "kanpur",
  cordinates: {
    lat: 26.4499,
    long: 80.3319
  }
}
console.log(locations.cordinates.lat); // Output: 26.4499

/// Add a new key "country" with value "India" to the above object
locations.country = "India";
console.log(locations); // Output: { city: "kanpur", cordinates: { lat: 26.4499, long: 80.3319 }, country: "India" }


//// What will happen if you try to access a non-existing key in an object? It will return undefined.
console.log(locations?.population); // Output: undefined

//// Destructure the city and lat from the locations object
const {city, cordinates: {lat}} = locations;
console.log(city); // Output: "kanpur"
console.log(lat); // Output: 26.4499


/// Destructure the key "first-name" as a variable called firstName
let{["first-name"]: firstName} = user;
console.log(firstName); // Output: "john"

/// Use for-in to log all keys in this object
const course = {
  title: "JavaScript",
  duration: "3 months",
};
for(let key in course){
  console.log(key);
}

//// Use Object.entries() to print all key-value pairs
Object.entries(course).forEach(([key, value]) => {
  console.log(`${key}: ${value}`)
})

/// copy the original array
const original = {a : 1, b : 2}
const copyOriginal = {...original}
console.log(copyOriginal); // Output: {a: 1, b: 2}


/// Deep Clone the obj1 safely
const obj1 = {info : {score : 80}};
let newObj = JSON.parse(JSON.stringify(obj1));
newObj.info.score = 90;
console.log(obj1); // output: {info: {score: 80}}
console.log(newObj); // Output: {info: {score: 90}}


//// Rewrite this safely using optional chainning
const person = {}
// console.log(person.profile.name);
console.log(person?.profile?.name); // Output: undefined

/// Use a variable to dynamic assign a property
const key1 = "role";
let obj2 ={
  name: "evin",
  [key1]: "admin"
}
console.log(obj2); // Output: {name: "evin", role: "admin"}