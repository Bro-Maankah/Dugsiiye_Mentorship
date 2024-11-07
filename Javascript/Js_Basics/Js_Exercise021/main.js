// Chapter 4 JavaScript 
// Date: 19/Aug/2024

// JavaScript Exercise #21: Higher Order array methods reduce()

//Use the reduce() method to multiply all the numbers in the array [1, 2, 3, 4, 5] together.

const numbers = [1, 2, 3, 4,5];
const multiply = numbers.reduce((total, num) => total * num, 1);
console.log("The Product of these numbers is: " + multiply); // Output: 120
