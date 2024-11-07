// JavaScript Exercise #15 : For...in and For...of loops

//for...in loop and for...of loop with array of objects

const people = [
    { name: "Ali", age: 30, city: "Mogadishu", country: "Somalia" },
    { name: "Bilan", age: 25, city: "Growe" },
    { name: "Colaad", age: 35, city: "Hargaisa" }
];

console.log("properties and values of each person");

for (let person in people) {
    console.log("person: " + person);
    for (let property in people[person]) {
        console.log(property + ": " + people[person][property]);
    }
}