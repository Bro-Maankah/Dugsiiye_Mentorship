// JavaScript Exercise #20 : High Order Array Methods Map()

//Use the map() method to create a new array that contains the lengths of each string in the array ["apple", "banana", "cherry"].


const fruits = ["apple", "banana", "cherry"];
const lengths = fruits.map(fruit => fruit.length);
console.log(lengths); // [5, 6, 6]
