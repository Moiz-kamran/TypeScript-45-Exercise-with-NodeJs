// Define Variable
let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "banana", "orange"];

// Test for equality and inequality with strings
console.log("\nIs apple is equal to apple?");
console.log(apple == "apple"); // Data type Boolean true

console.log("\nIs apple is not equal to apple?");
console.log(apple != "apple"); // Data type Boolean false

// Test using Lowercase Function
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple"); // Data type Boolean true

console.log("\nIs APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple"); // Data type Boolean false

// Numericaal tests
// Equal to
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty); // Data type Boolean false

// Not Equal to
console.log("\nIs ten is not equal to twenty?");
console.log(10 != twenty); // Data type Boolean true

// Greater than
console.log("\nIs ten is greater than zero?");
console.log(ten > 0); // Data type Boolean true

// Less than
console.log("\nIs twenty is less than 10?");
console.log(twenty < 10); // Data type Boolean false

// Greater than or equal to
console.log("\nIs ten is greater than or equal to 5?");
console.log(10 >= 5); // Data type Boolean true

// Less than or equal to
console.log("\nIs twenty is less than or equal to 10?");
console.log(twenty <= 10); // Data type Boolean false

// Tests using "and" and "or" operators

// Using && (and)
console.log("\nTwenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && 20 > 10); // Data type Boolean true

console.log("\nTwenty is not equal to 10 and twenty is greater than 30");
console.log(twenty != 10 && 20 > 30); // Data type Boolean false

// Using || (or)
console.log("\nTwenty is greater than 50 or twenty is equal to 20");
console.log(twenty > 50 || 20 == 20); // Data type Boolean true

console.log("\nTwenty is greater than 50 or twenty is not equal to 20");
console.log(twenty > 50 || 20 != 20); // Data type Boolean false

// Test whether an item is include in array
// tsc --init => (tsconfig.json) "lib": ["es2016", "DOM"], Print: node main.js
console.log("\nIs orange include in my fruits array");
console.log(fruits.includes("orange")); // Data type Boolean true

// Test whether an item is not include in array
console.log("\nIs orange not include in my fruits array");
console.log(!fruits.includes("orange")); // Data type Boolean false







 





 











