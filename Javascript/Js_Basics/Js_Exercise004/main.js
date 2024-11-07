// JavaScript Exercise #4 : Fuctions

function add(a, b) {
    return a + b;
}

// Testing the function with different arguments
console.log(add(2, 3)); // Output: 5
console.log(add(-1, 1)); // Output: 0
console.log(add(0, 0)); // Output: 0
console.log(add(134, 566)); // Output: 700

// Convert the add function to a function expression
const adds = function(a, b) {
    return a + b;
};

// Testing the function expression with different arguments
console.log(adds(5, 7)); // Output: 12
console.log(adds(-2, 3)); // Output: 1
console.log(adds(10, -10)); // Output: 0
console.log(adds(200, 300)); // Output: 500