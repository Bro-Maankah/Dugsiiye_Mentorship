// JavaScript Exercise #24 : Default parameters

//Create a function calculateArea that takes width and height as parameters and returns the area. If no height is provided, it should default to width (for calculating the area of a square).



function calculateArea(width, height = width) {
    return width * height;
}

console.log("Height and width: "+calculateArea(5, 6)); // Output: 30

console.log("width only:  "+calculateArea(5)); // Output: 25

