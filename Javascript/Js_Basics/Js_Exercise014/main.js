// JavaScript Exercise #14 : do...while loop

//Write a do...while loop that asks the user to enter a their age if they are older than 18 log a message to the console welcoming them to adulthood.

let number;
do {
    number = prompt("Enter Your Age: ");
} while (number <= 18);
console.log("Welcome you are now an adult");