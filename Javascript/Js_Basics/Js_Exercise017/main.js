// JavaScript Exercise #17 : Else If Statement

/* 1. Write an `else if` statement that logs:
    - "Very cold" if the temperature is below 0,
    - "Cold" if the temperature is between 0 and 15,
    - "Warm" if the temperature is between 15 and 25,
    - "Hot" if the temperature is above 25.
*/

let temperature = 23;
//"Very cold" if the temperature is below 0,
if (temperature < 0) {
    console.log("Very cold");
}
//"Cold" if the temperature is between 0 and 15,
else if (temperature >=0 && temperature <= 15) {
    console.log("Cold");
}
//"Warm" if the temperature is between 15 and 25,
else if (temperature > 15 && temperature <= 25 ){
    console.log("Warm");
}
//"Hot" if the temperature is above 25.
else {
    console.log("Hot");
}