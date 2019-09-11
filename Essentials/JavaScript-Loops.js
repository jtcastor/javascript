// ------------------------------------------------------------
// ------------------------------------------------------------


// If...else

//Hour
// If Hour is between 6am and 12pm: Good morning!
// If it is between 12pm and 6pm: Good afternnon!
// Otherwise: Good evening!

let hour = 10;

if (hour >= 6 && hour < 12)
    console.log('Good morning!');
else if (hour >= 12 && hour < 18)
    console.log('Good afternnon!');
else
    console.log('Good evening!');


//Switch...Case

let role;

switch (role) {
    case 'guest':
        console.log('Guest user');
        break;

    case 'moderator':
        console.log('Moderator user');
        break;

    default:
        console.log('Unkown User ');
}

// ------------------------------------------------------------
// ------------------------------------------------------------

// LOOPS
for (let i = 0; i < 5; i++) {
    console.log('Hello World');
}

// Display odd numbers in 1-5
for (let i = 0; i < 5; i++) {
    if (i % 2 !== 0) console.log(i);
}

// While Loops
let i = 0;
while(i <= 5) {
    if (i % 2 !== 0) console.log(i);
    i++;
}

do {
    x++;
} while (x < 5);


// for-in
const person = {
    name: 'Mosh',
    age: 30
}
for (let key in person)
    console.log(key);


const colors = ['red', 'green', 'blue'];
for (let index in colors)
    console.log(index, colors[index]);

// Access the properties of an object
// Dot Notation
person.name
// Bracket Notation
person['name']


// for-of
const colors = ['red', 'green', 'blue'];
for (let color of colors)
    console.log(color);


// ------------------------------------------------------------
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
