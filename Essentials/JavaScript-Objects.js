// ------------------------------------------------------------
// Objects
// ------------------------------------------------------------

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


// Store and access data

let movie = {
  title: 'Wonder Woman',
  time: '2pm'
};

// Access Specific Property of an Object
alert( movie.title );

// Add New Proptery with Dot Notation
movie.status = 'unavailable';
consel.log ( movie );

// Array of Objects
let movies = [
    {
        title: 'Avengers',
        time: '12pm',
        status: 'available'
    },
    {
        title: 'Wonder Woman',
        time: '2pm',
        status: 'unavailable'
    },
    {
        title: 'Last Jedi',
        time: '4pm',
        status: 'available'
    },
    {
        title: 'Black Panther',
        time: '6pm',
        status: 'unavailable'
    },
    {
        title: 'Lady Bird',
        time: '8pm',
        status: 'available'
    }
];

// Program that displays a message depentent on property value
// Need to look through each object and check if the value of Status is a or b

for (let movie of movies) {
    if ( movie.status === 'available' ) {
        // Done with Concat
        console.log( "The movie " + movie.title + " plays at " + movie.time );
        // Done with Template Literals
        console.log( `The movie ${movie.title} plays at ${movie.time}`):
    } else {
        // Done with Template Literals
        console.log(`Sorry, the movie ${movie.title} is sold out `);
    }
}


// ------------------------------------------------------------
// ------------------------------------------------------------


// ------------------------------------------------------------
// OOP Objects Literals
// ------------------------------------------------------------

const circle = {
    radius: 1,            // Property
    location: {
        x: 1,
        y: 1
    }
    draw: function() {    // Method

    }
};

ciclce.draw();


// ------------------------------------------------------------
// OOP Object Factories/Constructor
// ------------------------------------------------------------

// Factory Function
function createCircle (radius) {
    return {
        radius,               // If the Key and the value are the same you can remove one
        draw: function() {    // Method
             console.log('draw');
        }
    };
}
const circle = createCircle(1);
circle.draw();

// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const another = new Circle(1);


// ------------------------------------------------------------
// Enumerating Properties of an Object
// ------------------------------------------------------------

const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

for (let key in circle)
    console.log(key, circle[key]);

for (let key of Object.keys(circle))
    console.log(key);

for (let entry of Object.entries(circle))
    console.log(entry);

if ('color' in circle) console.log('yes');


// ------------------------------------------------------------
for
// ------------------------------------------------------------

const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

/*
const another = {};
for (let key in circle)
    another[key] = circle[key];
*/

const another = Object.assign({
    color: 'yellow'
}, circle);

// New cleaner way to clone an object
const another = { ...circle }; // spread ( ...objectName ) propoerties and mthods of one object into another.

console.log(another);


// ------------------------------------------------------------
// Date
// ------------------------------------------------------------

const now = new Date();
const date1 = new Date('may 11 2018 09:00');
const date2 = new Date(2018, 4, 11, 9);

now.setFullYear(2017);

now.toISOString();

// ------------------------------------------------------------
// Object Exercise 1 Address Object
// ------------------------------------------------------------

// street
// city
// zipCode
// showAddress(address)

const address = {
    street: '3460 w 104th pl',
    city: 'Westminster',
    zipCode: '80031'
}

function showAddress(address) {
    for (let key in address)
        console.log(key, address[key]);
}

showAddress(address);

// Factory Function
let address = createAddress('a', 'b', 'c');
console.log(address);

function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

// Contructor Function
let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function areEqual(address1, address2) { // Are they the properties the same?
    if (address1 === address2) {
        return address1.street === address2.street && address1.city === address2.city && address1.zipCode === address2.zipCode;
    }
}

function areSame(address1, address2) { // Are they referencing the same object?
    return address1 === address2;
}


// ------------------------------------------------------------
// Blog Post Object
// ------------------------------------------------------------

// Create blog post object with these properties:
// Title
// Body
// author
// views
// comments
//   (author, body)
// isLive

let post = {
    title: 'test post',
    body: 'more words go here',
    author: 'Jane',
    views: 67,
    comments: [
        { author: 'blank', body: 'test comment'},
        { author: 'test', body: 'test comment'},
    ],
    isLive: true
}

console.log(post);

// Constructor Function
let post = new Post('test', 'b', 'c', 'd', 'e', 'f');
console.log(post);

function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}


// ------------------------------------------------------------
// Price Range Object Exercise
// ------------------------------------------------------------

// what properties would this objects have?

// Inexpensive
// Moderate
// Pricey

let priceRanges = [
    { label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPricePerPerson:; 10 },
    { label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPricePerPerson:; 20 },
    { label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPricePerPerson:; 50 },
];

let restaruant = [
    { averagePerPerson: 5 },
];
