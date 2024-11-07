// JavaScript Exercise #9 : Objects


//Add a method start to the car object that logs "The car has started" to the console and call this method.

let car = { 
    make: "Nissan", 
    model: "Sentra", 
    year: 2022,
    start: function(){
        console.log("The car has started");
    }
};

car.start();

