// JavaScript Basics

// Simple Variable example / Can be ovewritten
let test = 'Test Let Variable';

// Simple Constant / Cannot be ovewritten
const testConst = 'Test Constant Variable';

// JavaScript Basic Operators

let x = 10;
let y = 3;

//--------------------- JavaScript Arithmetic Operators --------------------

// Addition
console.log(x + y);
// Subtraction
console.log(x - y);
// Multiplication
console.log(x * y);
// Division
console.log(x / y);
// Remainder
console.log(x % y);
// Exponentiation
console.log(x ** y);

// Increment (++)
console.log(++x);

// Decrement (--)
console.log(--x);


//--------------------- JavaScript Assignment Operators --------------------

// = Operator
let x = 10;

x = x + 5;
x += 5;

x = x * 3;
x *= 3;


//--------------------- JavaScript Comparison Operators --------------------

// Relational
// Greater then
console.log(x > 0);
console.log(x >= 1);
// Less Then
console.log(x < 0);
console.log(x <= 1);

// Equality
// Strict Equality (Type + Value)
console.log(x === 1);
// Lose Equality (Value)
console.log(x == 1);
// Not equal to
console.log(x !== 1);


//--------------------- JavaScript Ternary Operators --------------------
// If a customer has more than 100 points,
// they are 'gold' customer, Otherwise,
// they are a 'silver' customer

let points = 110;
let type = points > 100 ? 'gold' : 'silver';

console.log('type');


//--------------------- JavaScript Logical Operators --------------------
// Logical AND (&&)
// Returns TRUE if both operands are True
let highIncome = true;
let goodCredittScore = true;
let eligibleForLoan = highIncome && goodCredittScore;
console.log(eligibleForLoan);

// Logical OR (||)
// Returns TRUE if one of the operands is TRUE
let eligibleForLoan = highIncome || goodCredittScore;
console.log(eligibleForLoan);

// NOT (!)
let applicationRefused = !eligibleForLoan;
console.log(eligibleForLoan);


//--------------------- JavaScript Operators Exercise --------------------
let a = 'red';
let b = 'blue';

console.log(a);
console.log(b);

// flip the returned order of the variable so it displays blue, red
let c = a;
a = b;
b = c;

console.log(a);
console.log(b);


//--------------------- JavaScript Object Basics --------------------
// Simple Object
let person = {
  name: 'Jason',
  age: 30
}

// Dot Notation
person.name = 'John';

// Bracket Notation
person['name'] = 'Mary';
// Option 2
let selection = 'name';
person[selection] = 'Mary';

console.log(person.name);


//--------------------- JavaScript Arrays Basics --------------------

// Simple Array
let selectedColors = ['red', 'blue'];

// Insert/Add Value to end of Array
selectedColors[2] = 'green';

console.log(selectedColors[0]);

// Returns total number of key:value pairs in array
console.log(selectedColors.length);


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
