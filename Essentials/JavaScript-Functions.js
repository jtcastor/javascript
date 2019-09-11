// ------------------------------------------------------------
// Functions
// ------------------------------------------------------------

//--------------------- JavaScript Functions Basics --------------------

// Simple Function
// Add Parameter of: name & lastName
function greet(name, lastName) {
  console.log('Hello ' + name + ' ' + lastName);
}

// Call function and pass the Arrgument 'Jason' to the name parameter and 'Castor' to the lastName parameter
greet('Jason', 'Castor');


//--------------------- JavaScript Types of Functions Basics --------------------
// Performing a task
function greet() {
  console.log('Hello World');
}

// Calculating a value
function square(number) {
  return number * number;
}
let number = square(2);
console.log(number);



// Function with concat

function sayGreeting(greeting) {
    let response = prompt("What is your name?");
    alert(greeting + ", " + response + "!");
}
sayGreeting("Have a good day");



// Function that calculates a value
function square(number) {
    return number * number;
}
let number = sqaure(2);
console.log(number);


function add(a, b) {
    return a + b;
}
console.log( add(20, 30) );
console.log( add(120, 310) );


function multiply(a, b) {
    return a * b;
}
console.log( multiply(6, 8) );
