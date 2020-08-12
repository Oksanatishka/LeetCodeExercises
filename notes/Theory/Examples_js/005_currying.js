// https://blog.bitsrc.io/understanding-currying-in-javascript-ceb2188c339
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0

// Functional programming is the process of building software by
// FP concepts:
// 1)> Pure Functions    (is a function which: Given the same inputs, always returns the same output, and Has no side-effects)
// 2) Immutability      (An immutable object is an object that can’t be modified after it’s created. Conversely, a mutable object is any object which can be modified after it’s created.)
// 3) Referential transparency  (pure functions + immutable data = referential transparency)-> memoize the function.
// 4) Functions as first-class entities
// 5)> Higher-order functions    (takes one or more functions as arguments, or returns a function as its result)
// 6)> Currying    (is an advanced technique of working with functions.)
//      de-parametrization through currying is better

// ---------------------------------------------------------
// 1) Pure Functions
// impure function
// Why is this an impure function? Simply because it uses a global object that was not passed as a parameter to the function.

let PI = 3.14;

const calculateArea = radius => radius * radius * PI;

calculateArea(10); // returns 314.0

// pure function
// The code’s definitely easier to test.
let PI = 3.14;

const calculateArea = (radius, pi) => radius * radius * pi;

calculateArea(10, PI); // returns 314.0

// ---------------------------------------------------------
// 2) Immutability
// When data is immutable, its state cannot change after it’s created.
// mutable data
var values = [1, 2, 3, 4, 5];
var sumOfValues = 0;

for (var i = 0; i < values.length; i++) {
    sumOfValues += values[i];
}

sumOfValues; // 15

// immutable data
// With recursion, we keep our variables immutable.
let list = [1, 2, 3, 4, 5];
let accumulator = 0;

function sum(list, accumulator) {
    if (list.length == 0) {
        return accumulator;
    }

    return sum(list.slice(1), accumulator + list[0]);
}

sum(list, accumulator); // 15
list; // [1, 2, 3, 4, 5]
accumulator; // 0

// immutable data (f-n chaining)
const string = ' I will be a url slug   ';

const slugify = string =>
    string
        .toLowerCase()
        .trim()
        .split(' ')
        .join('-');

slugify(string); // i-will-be-a-url-slug

// ---------------------------------------------------------
// 4) Functions as first-class entities
// The idea is to treat functions as values and pass functions like data.
const doubleSum = (a, b) => (a + b) * 2;
const doubleSubtraction = (a, b) => (a - b) * 2;

// transform to:
const sum = (a, b) => a + b;
const subtraction = (a, b) => a - b;

const doubleOperator = (f, a, b) => f(a, b) * 2;

doubleOperator(sum, 3, 1); // 8
doubleOperator(subtraction, 3, 1); // 4

// ---------------------------------------------------------
// 5) Higher-order functions
// An imperative way to do it with Javascript is:
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenNumbers = [];

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        evenNumbers.push(numbers[i]);
    }
}

console.log(evenNumbers); // (6) [0, 2, 4, 6, 8, 10]

// Declarative approach, using (filter, map, and reduce) transform to:
const even = n => n % 2 == 0;
const listOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
listOfNumbers.filter(even); // [0, 2, 4, 6, 8, 10]

// Another example with map, An imperative way
var people = [
    { name: 'TK', age: 26 },
    { name: 'Kaio', age: 10 },
    { name: 'Kazumi', age: 30 }
];

var peopleSentences = [];

for (var i = 0; i < people.length; i++) {
    var sentence = people[i].name + ' is ' + people[i].age + ' years old';
    peopleSentences.push(sentence);
}

console.log(peopleSentences); // ['TK is 26 years old', 'Kaio is 10 years old', 'Kazumi is 30 years old']

// Declarative approach
const makeSentence = person => `${person.name} is ${person.age} years old`;
const peopleSentences = people => people.map(makeSentence);
peopleSentences(people);
// ['TK is 26 years old', 'Kaio is 10 years old', 'Kazumi is 30 years old']

// Another example with reduce, An imperative way
var orders = [
    { productTitle: 'Product 1', amount: 10 },
    { productTitle: 'Product 2', amount: 30 },
    { productTitle: 'Product 3', amount: 20 },
    { productTitle: 'Product 4', amount: 60 }
];

var totalAmount = 0;

for (var i = 0; i < orders.length; i++) {
    totalAmount += orders[i].amount;
}

console.log(totalAmount); // 120

// Declarative approach

let shoppingCart = [
    { productTitle: 'Product 1', amount: 10 },
    { productTitle: 'Product 2', amount: 30 },
    { productTitle: 'Product 3', amount: 20 },
    { productTitle: 'Product 4', amount: 60 }
];

const sumAmount = (currentTotalAmount, order) => currentTotalAmount + order.amount;
const getTotalAmount = shoppingCart => shoppingCart.reduce(sumAmount, 0);
getTotalAmount(shoppingCart); // 120

// ---------------------------------------------------------
// 6) Currying
// Currying is a transformation of f-ns that translates a f-n from callable as f(a, b, c) into callable as f(a)(b)(c).
function multiply(a, b, c) {
    return a * b * c;
}
multiply(1, 2, 3); // 6

// curried version of the function
function multiply(a) {
    return b => {
        return c => {
            return a * b * c;
        };
    };
}
log(multiply(1)(2)(3)); // 6

// We could separate this multiply(1)(2)(3) to understand it better:
// const mul1 = multiply(1);
//          returns the function:
//          return (b) => {
//                  return (c) => {
//                      return a * b * c
//                  }
//              }
// const mul2 = mul1(2);
// const result = mul2(3);
// log(result); // 6

// Another example
var greet = function(greeting, name) {
    console.log(greeting + ', ' + name);
};
greet('Hello', 'Heidi'); //"Hello, Heidi"

// curried version of the function
var greetCurried = function(greeting) {
    return function(name) {
        console.log(greeting + ', ' + name);
    };
};
var greetHello = greetCurried('Hello');
greetHello('Heidi'); //"Hello, Heidi"
greetHello('Eddie'); //"Hello, Eddie"

// ---------------------------------------------------------
