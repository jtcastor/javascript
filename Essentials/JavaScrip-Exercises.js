// JavaScript Exercise

//--------------------- Exercise 1  --------------------
// Write a function that takes two numbers and returns the maximum of the two
function maxNum(num1, num2) {
  return (num1 > num2) ? num1 : num2;
  //if(num1 > num2) return num1;
  // ....
  //return num2;
}
console.log( 'Max Number: ' + maxNum(12, 9) );

//--------------------- Exercise 2  --------------------
function isLandscape(width, height) {
  return  (width > height) ;
}
console.log( 'Is Landscape: ' + isLandscape(20, 90) );

//--------------------- Exercise 3  --------------------
// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not Divisible by 3 or 5 => input
// Not a number => 'Not a Number'
const output = fizzBuzz(false);
console.log(output);
function fizzBuzz(input) {
  if(typeof input !== 'number')
    return NaN;
  if(input % 3 === 0 && input % 5 === 0)
    return 'FizzBuzz';
  if (input % 3 === 0)
    return 'Fizz';
  if (input % 5 === 0)
    return 'Buzz';
  // Else return input
  return input;
}

//--------------------- Exercise 4  --------------------
// Speed Limit = 70
// 5 -> 1 point
// Math.floor(1.3)
// 12 points -> suspended
checkSpeed(79 );
function checkSpeed(speed) {
  const speedLimit = 70;
  const mphPerPoint = 5;

  if(speed < speedLimit + mphPerPoint) {
    console.log('Speed Ok');
    return;
  }
  const points = Math.floor( (speed - speedLimit) / mphPerPoint );
  if(points >= 12)
    console.log('License Suspended');
  else
    console.log('Points', points);
}

//--------------------- Exercise 5  --------------------
//Return Even and Odd
showNumbers(0);
function showNumbers(limit) {
  for(let i = 0; i <= limit; i++) {
    if(i % 2 === 0) console.log(i, 'EVEN');
    else console.log(i, 'ODD');
  }
}

//--------------------- Exercise 6  --------------------
//Count Truthy
const array = [1, 2, 3, 0];
function countTruthy(array) {
  let total = 0;
  for (let item of array)
    if(item)
      total++;
  return 'Total Truthy: ' + total;
}
console.log(countTruthy(array));

//--------------------- Exercise 7  --------------------
// String Properties
const movie = {
  title: 'a',
  releaseYear: 2018,
  rating: 4.5,
  director: 'b'
};
showProperties(movie);

function showProperties(obj) {
  // Option 1
  // for (let property in obj) {
  //   if(property === 'title')
  //     console.log(property + ': ' + obj[property]);
  //   if(property === 'director')
  //     console.log(property + ': ' + obj[property]);
  // }
  // Option 2
  for(let key in obj)
    if (typeof obj[key] === 'string')
      console.log(key, obj[key]);
}

//--------------------- Exercise 8  --------------------
//Return The Sum of Multiples of 3 and 5
console.log('Sum Total: ' + sum(10));
// Multiples of 3: 3, 6, 9
// Multiples of 5: 5, 10
//                 Sum = 33
function sum(limit) {
  let sum = 0;

  for (let i = 1; i <= limit; i++)
    if(i % 3 === 0 || i % 5 === 0)
      sum += i;
  return sum;
}
//--------------------- Exercise 9  --------------------
// Return Grade
// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A
const marks = [80, 40, 100];
// Average = 70
console.log(calculateGrade(marks));

function calculateGrade(marks) {
  const average = calculateAverage(marks);
  if(average < 60) return('Grade: F');
  if(average < 70) return('Grade: D');
  if(average < 80) return('Grade: C');
  if(average < 90) return('Grade: B');
  return('Grade: A');
}

function calculateAverage(array) {
  let sum = 0;
  for (let value of array)
    sum += value;
  return sum / array.length;
}

//--------------------- Exercise 10  --------------------
//Show stars
// For Every row return x amount of '*' depending on the row number.
// Iterate through every time i is > 0 and < the number passed
// for every i console.log that number with matching number of * | Example Row 5 returns '*****'
showStars(4);

function showStars(rows) {
  for (let row = 1; row <= rows; row++) {
    let pattern = '';
    for(let i = 0; i < row; i++)
      pattern += '*';
    console.log(pattern);
  }
}

//--------------------- Exercise 11  --------------------
// Show Primes
// Prime (whose factors are only 1 and itself)
showPrimes(20);

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++)
    if(isPrime(number)) console.log(number);
}

function isPrime (number) {
  for (let factor = 2; factor < number; factor++)
    if(number % factor === 0)
      return false;
  return true;
}
