

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
