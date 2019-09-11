// ------------------------------------------------------------
// Arrays
// ------------------------------------------------------------

//--------------------- JavaScript Arrays Basics --------------------

// Simple Array
let selectedColors = ['red', 'blue'];

// Insert/Add Value to end of Array
selectedColors[2] = 'green';

console.log(selectedColors[0]);

// Returns total number of key:value pairs in array
console.log(selectedColors.length);



// Basic Array with Strings
let movies = [ 'Avengers', 'Wonder Woman', 'Black Panther', 'The Last Jedi' ];
consel.log( movies[0] );

// Push adds value to end of array
movies.push('Lady Bird'):
consel.log(movies);

// Pop removes last item from array
movies.pop();


const numbers = [3, 4];

// End
numbers.push(5, 6);

// Beginning
numbers.unshift(1, 2);

// Middle
numbers.splice(2, 0, 'a', 'b');

// Push Example
const numbers = arrayFromRange(1, 4);

console.log(numbers);

function arrayFromRange(min, max) {
    const output = [];
    for (let 1 = min; a <= max; i++)
        output.push(i);
    return output;
}

// Example Includes
const numbers = [1, 2, 3, 4];

console.log(includes(numbers, 1));

function includes(array, searchElement) {
    for (let element of array)
        if (element === searchElement)
            return true;
    return false;
}

// Except Example
const numbers = [1, 2, 3, 4, 1, 1];

const output = except(numbers, [1, 2]);

console.log(output);

function except(array, excluded) {
    const output = [];
    for ( let element of array)
        if (!excluded.includes(element))
            output.push(element);
    return output;
}

// Moving an Element

const numbers = [1, 2, 3, 4];
const output = move(numbers, 0, 1);

console.log(output);

function move(array, index, offset) {
    const position = index + offset;
    if (position >= array.length || posistion < 0) {
        console.log('Invalid offset');
        return;
    }

    const output = [...array];
    const elemnt = output.splice(index, 1)[0];
    output.splice(position, 0, element);
    return output;
}






// ------------------------------------------------------------
// Finding Elements in an Array (Primitive Types)
// ------------------------------------------------------------
const numbers = [1, 2, 3, 1, 4];

console.log(numbers.indexOf(1, 2));
console.log(numbers.lastIndexOf(1));

console.log(numbers.indexOf(1) !== -1);
console.log(numbers.includes(1));

// ------------------------------------------------------------
// Finding Elements in an Array (Reference Types)
// ------------------------------------------------------------
const course = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'},
];

courses.find(function(course) {
    return course.name === 'a';
});

// Arrow Function
courses.findIndex(course => course.name === 'a');

console.log(course);

// ------------------------------------------------------------
// Remove Elements in an Array
// ------------------------------------------------------------

const numbers = [1, 2, 3, 4,];

// Remove End
const last = numbers.pop();

//  Remove Beginning
const first = numbers.shift();

// Remove Middle
numbers.splice(2, 1);
console.log(numbers);


// ------------------------------------------------------------
// Combining and SLicing Arrays
// ------------------------------------------------------------
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);

// Slicing an Array
const slice = combined.slice();

console.log(combined);
console.log(slice);

// Spread Operator
const combined = [...first, 'a', ...second, 'b'];

const copy = [...combined];

// Joining Arrays
const numbers = [1, 2, 3];
const joined = numbers.join(',');

const message = 'This is my first message';
const parts = message.split(' ');

const combined = parts.join('-');
console.log(combined);

// Sorting Arrays
cosnt numbers = [2, 3, 1];
numbers.sort();

numbers.reverse();
console.log(numbers);

const courses = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'JavaScript' },
];

course.sort(function(a, b) {
    // a < b => -1
    // a > b => 1
    // a === b => 0

    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});

console.log(courses);

// Test the Elements of an Array
const numbers = [1, 2, 3];

const allPositive = numbers.every(function(value) {
    return value >= 0;
});

const atLeastOnePositive = numbers.some(function(value) {
    return value >= 0;
});

console.log(allPositive);

// Filtering an Array
const numbers =[1, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0);

console.log(filtered);


// Mapping an Array
const numbers =[1, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0);

// Mapping to a String
const items = filtered.map(n => '<li>' + '</li>');
//const html = '<ul>' + items.join('') + '</ul>';

// mapping to an Object
const items = filtered.map(n => ({ value: n }) );

// Better and cleaner code (Example of Chaining)
const items = numbers
    .filter(n => n >= 0)
    .map(n => ({ value: n}))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);

console.log(items); // Returns [2, 3]


// Reducing an Array
// Calculate the sum of all numbers in array
const numbers = [1, -1, 2, 3];

let sum = 0;
for (let n of numbers)
    sum += n;

// Better
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + cuurentValue;
}, 0 );

console.log(sum);

// Sum of Arguments
console.log(sum([1, 2, 3, 4]));

function sum(...items) {
    if (items.length === 1 && Array.isArray(items[0]))
        items = [...items[0]];

    return items.reduce((a, b) => a + b);
}



// ------------------------------------------------------------
// Iterating an Array
// ------------------------------------------------------------
const number = [1, 2, 3];

for (let number of numbers)
    console.log(number);

numbers.forEach((number, index) => console.log(index, number));



// ------------------------------------------------------------
// Loops
// ------------------------------------------------------------

// Basic Array with Strings
let movies = [ 'Avengers', 'Wonder Woman', 'Black Panther', 'The Last Jedi' ];

movies.forEach(function(movie){
    alert(movie);
});

// forEach with fat arrow
movies.forEach( movie => alert(movie) );


// for Of Loop
for ( let movie of movies ) {
    console.log(movie);
}
