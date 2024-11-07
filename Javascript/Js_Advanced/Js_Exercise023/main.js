// JavaScript Exercise #23 : Es6 object destructuring

//Use object destructuring to extract the make and model properties from the object { make: "Toyota", model: "Corolla", year: 2020 }.

const car = { make: "Toyota", model: "Corolla", year: 2020 };

let { make, model } = car;

console.log(make); // Output: Toyota
console.log(model); // Output: Corolla
