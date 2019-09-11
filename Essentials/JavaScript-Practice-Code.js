// ------------------------------------------------------------
// ------------------------------------------------------------

// Write a function that takes two numbers and returns the maximum of the two.

let number = max(10, 3);
console.log(number);

function max(a, b) {
    if (a > b) return a;
    // ...
    return b;

    // ... Better way
    return (a > b) ? a : b;
}

// ------------------------------------------------------------
// ------------------------------------------------------------

//Return TRUE of FALSE if picture is landscape which would mean the width is greater then the height.

console.log(isLandscape(800, 400);

function isLandscape(width, height) {
    return (width > height);
}

// ------------------------------------------------------------
// ------------------------------------------------------------

// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not a number => 'Not a number'

const output = fizzBuzz(3);
console.log(output);


function fizzBuzz(input) {

    if (typeof input !== 'number')
        return NaN;

    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';

    if (input % 3 === 0)
        return 'Fizz';

    if (input % 5 === 0)
        return 'Buzz';

    return input;

}


// ------------------------------------------------------------
// ------------------------------------------------------------

// Speed Limit = 70
// 5 -> 1 point
// Math.floor(1.3)
// 12 points -> suspended

checkSpeed(180);

function checkSpeed(speed) {

    const speedLimit = 70;
    const mphPerPoint = 5;

    if (speed <= speedLimit + mphPerPoint)  {
        console.log('Ok');
        return;
    }

    const points = Math.floor((speed - speedLimit) / mphPerPoint);
    if (points >= 12 )
        console.log('License suspended');
    else
        console.log('Points ', points);

}


// ------------------------------------------------------------
// ------------------------------------------------------------

// Right a function that returns a list of numbers from 0 to the number entered and display weather each nuymber is even or odd

showNumber(10);

function showNumbers(limit) {

    for ( i = 0; i <= limit; i++ ) {

        // Option 1
        if (i % 2 === 0) console.log(i, 'Even');
        else console.log(i, 'Odd');

        // Option 2
        const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
        console.log(i, message);
    }
}

// ------------------------------------------------------------
// ------------------------------------------------------------

// Counts Truthly values in array

const arrayList = [0, null, undefined, '', 2, 3];
console.log(countTruthy(arrayList));

function countTruthy(arrayList) {
    let truthyValue = 0;
    for ( let listValue of arrayList )
        if(listValue)
            truthyValue++;
    return truthyValue;
}


// ------------------------------------------------------------
// ------------------------------------------------------------

// Write a function that return properties of an object that of type STRING

const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
}

showProperties(movie);

function showProperties(obj)
    for ( let key in obj )
        if( typeof obj[key] === 'string' )
            console(key, obj[key]);
}

// ------------------------------------------------------------
// ------------------------------------------------------------

//Create a function that will return the sum of the multiples of 3 and 5 up to the passed limit
// Multiples of 3: 3, 6, 9
// Multiplees of 5: 5, 10


console.log(sum(10));

function sum(limit) {
    let sum = 0;

    for (let i = 0; i <= limit; i++)
        if (i % 3 === 0 || i % 5 === 0)
            sum+= i;

    return sum;
}


// ------------------------------------------------------------
// ------------------------------------------------------------

// Calculate the average grade of a student

// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const marks = [80, 80, 50];

console.log(calculateGrade(marks));

function calculateGrade(marks) {
    const average = calculateAverage(marks);

    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';

    return 'A';
}

function calculateAverage(array) {
    let sum = 0;
    for (let value of array)
        sum += value;
    return sum / array.length;
}


// ------------------------------------------------------------
// ------------------------------------------------------------

showStars(5);

function showStars(rows) {
    for (let row = 1; row <= rows; row++)
        let starCount = '';
        for (let i = 0; i < row; i++)
            starCount += '*';
        console.log(starCount);
}


// ------------------------------------------------------------
// ------------------------------------------------------------

// Prime (whose factors are only 1 and itself)
// Composite

// 12 = 1, 2, 3, 4, 6, 12
// Can be divided evenly by its factors

// 11 = 1, 11
// 13 = 1, 13

showPrimes(20);

function showPrimes(limit) {
    for (let number = 2;number <= limit; number++)
        if(isPrime(number)) console.log(number);
}

function isPrime(number) {
    for (let factor = 2; factor < number; factor++)
        if (number % factor === 0)
            return false;

    return true;
}


// Find sum of total numbers in array

function sum() {
    let total = 0;
    for (let value of arguments)
        total += value;

    return total;
};

console.log(sum(1, 2));


// Rest Operator
function sum(...args) {
    return args.reduce((a, b) => a + b);
};

console.log(sum(1, 2, 3, 4, 5, 6));



function sum(discount, ...prices) {
    const total =  prices.reduce((a, b) => a +b);
    return total * (1 -discount);
};

console.log(sum(0.1, 20, 33));


// Getters and Setters

// getters => access properties
// setters => change (mutate) them

const person = {
    firstName: 'Mosh',
    lastName: 'test',
    get fullname() {
        return `${person.firstName} ${person.lastname}`;
    },
    set fullName(value) {
        const parts = value.split (' ');
        this.FirstName = parts[0];
        this.lastname = parts[1];
    }
};

person.fullName = 'John Smith';

console.log(person);


const sum = a => b => c => a + b + c;

let sum = (a, b) => a + b;
console.log(sum(2, 5));
// output: 7

// ------------------------------------------------------------
// ------------------------------------------------------------

// Create a function that finds all subsets

// I: Array with unique data and no duplicates
// O: Print each subset


// ------------------------------------------------------------
// ------------------------------------------------------------

var data = {
  example1: [{
    firstName: 'Alice',
    lastName: 'Wonderland',
    age: 12
  }],
  example2: [{
    firstName: 'Thomas',
    lastName: 'Mathison',
    age: 14
  }],
  example3: [{
    firstName: 'David',
    lastName: 'Jacobsen',
    age: 18
  }]
};
var result = [];
for (var key in data) {
  var arr = data[key];
  for (var i = 0; i < arr.length; i++) {
    var obj = arr[i];
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {


result.unshift(prop + ': ' + obj[prop])


      }
    }
  }
}

console.log(result)



// ------------------------------------------------------------
// ------------------------------------------------------------

// Find max / maximum Sum of a Subarray, a JavaScript
// Kadane's Algorithm

function findMaxAverage(nums, k) {

	var curr_max = 0;
	for (var i = 0; i < k; i++) {
		curr_max += nums[i];
	}

	var max_so_far = curr_max;

	for (var j = k; j < nums.length; j++) {
		curr_max += (nums[j] - nums[j - k]);
		// Each time we get a new curr_sum compare it with max_so_far and update max_so_far if it is greater than max_so_far
		max_so_far = Math.max(curr_max, max_so_far);
	}
	return max_so_far / k;
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));



// ------------------------------------------------------------
// ------------------------------------------------------------
// Linked List

function LinkedList() {
    let length = 0;
    let head = null;

    let node = function() {

    };
}


// ------------------------------------------------------------
// ------------------------------------------------------------
// Two Sum

// One-Pass Hash Table

var twoSum = function(nums, target) {
    const result = [];
    const map = new Map();
    try {
        nums.forEach((value, index) => {
            const complementIndex = map.get(target - value);
            if (complementIndex >= 0) {
                result.push(complementIndex, index);
                throw new Error();
            }
            map.set(value, index);
        });
     } catch (e) {
         // Shortcircuiting our forEach, ignore errors
     }
    return result;
};
console.log(twoSum([2, 7, 11, 15], 9));


//The approach is to store values as you iterate through them, comparing the current iteration to past iterations to see if there's a match.
// We're using an object (hash map), where the {key = iteration, value = index} of previous values, so we only go through the array once.

function twoSum(arr, target){
  let store = {};
  for(let i = 0 ; i < arr.length ; i++) {
    let current = arr[i];
    let match = target - current;
    if (match in store) {
      return [ store[match], i ];
    } else {
      store[current] = i;
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));


const twoSum = (nums, target) => {
    const map = new Map()
    let result = []
    nums.map((v, i) => {
        const complement = target - v
        map.has(complement) ? result = [map.get(complement), i] : map.set(v, i)
    })
    return result
}

const twoSum = (nums, target) => {
    const map = new Map()
    for (let i = 0; i < nums.length; i += 1) {
        const current = nums[i]
        const complement = target - current
        if (map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(current, i)
    }
    return false
}

const twoSum = (nums, target) => {
    const map = {}
    let result = []
    nums.map((v, i) => {
        const complement = target - v
        complement in map ? result = [map[complement], i] : map[v] = i
    })
    return result
}

const twoSum = (nums, target) => {
    const map = {}
    for (let i = 0; i < nums.length; i += 1) {
        const current = nums[i]
        const complement = target - current
        if (complement in map) {
            return [map[complement], i]
        }
        map[current] = i
    }
    return false
}

const twoSum = (nums, target) => {
    let sums = []
    let result = []
    nums.map((v, i) => {
        const complement = target - v
        sums.includes(complement) ? result = [sums.indexOf(complement), i] : sums.push(v)
    })
    return result
}


// ------------------------------------------------------------
// ------------------------------------------------------------


var input = [1, 4, [5, [6]], [[7, ['hi']], 8, 9], 10];


var output = [1, 4, 5, 6, 7, 'hi', 8, 9, 10];

output == flatten(input)

function flatten(arr) {
  let arrLength = arr.length;
  let flat = [];
  for (let i = 0; i < arrLength; i++ ) {
    if is arry create for of/in loop
      flat += value;
    else
      flat += value;
  }
  return flat;
}

console.log(flatten(input));

// ------------------------------------------------------------
// ------------------------------------------------------------

var store = new DOMStore();
// From an event listener...
buttonEl.addEventListener('click', (e) => {
  const button = e.currentTarget;
  if (!store.has(button)) {
    store.set(button, 1);
  } else {
    store.set(button, store.get(button) + 1);
  }
}, false);

/*
.has(DOMNode) => boolean
.set(DOMNode, value) => void
.get(DOMNode) => value
*/


// dom-store.js

function DOMStore() {

}

DOMStore.prototype.has = function (node) {

}
