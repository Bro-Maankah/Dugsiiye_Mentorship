// JavaScript Exercise #7 : Arrays

//1. Add a color to the end of the colors array, remove the first color, and log the array.

let colors = ["yellow", "green", "cyan"];
console.log(colors[0]); // Output: yellow
console.log(colors[1]); // Output: green
console.log(colors[2]); // Output: cyan

//Add a color to the end of the colors array
colors.push("blue");
console.log(colors); // Output: added blue

//Removing the first color
colors.shift();
console.log(colors); // Output: starts with green