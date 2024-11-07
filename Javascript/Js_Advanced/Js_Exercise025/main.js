// JavaScript Exercise #25 : Es6 Basics spread and rest operator

//1. Use the spread operator to combine two arrays `[1, 2, 3]` and `[4, 5, 6]` into a single array.

let arr1 = [1, 2, 3];
let arr2 = [50, 60, 70,80];
let arr3 = [...arr1, ...arr2];
console.log(arr3); // Output: [1, 2, 3, 4, 5, 6]


// 2. Create a function `multiply` that takes any number of arguments and returns their product using the rest parameter.

function multiply(...args) {
    return args.reduce((acc, val) => acc * val, 1);
}

console.log("The product is :"+ multiply(1, 20, 3, 40,5)); // Output: 12000 

var x = 10;
(function() {
    console.log(x);
    var x = 5;
    console.log(x);
})();

// 3. What will be the output of the following code?
// var x = 10;
// (function() {
//     console.log(x);
//     var x = 5;
//     console.log(x);