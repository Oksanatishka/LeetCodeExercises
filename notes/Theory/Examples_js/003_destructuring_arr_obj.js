// https://javascript.info/destructuring-assignment
// https://codeburst.io/es6-destructuring-the-complete-guide-7f842d08b98f

// Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of
// variables, as sometimes that’s more convenient.
// It’s called “destructuring assignment,” because it “destructurizes” by copying items into variables.
// But the array itself is not modified.

// ---------------------------------------------
// 1) ARRAY DESTRUCTURING
let arr = ['Ilya', 'Kantor'];
// let firstName = arr[0];
// let surname = arr[1];
let [firstName, surname] = arr;
// let [firstName, surname] = "Ilya Kantor".split(' ');
alert(firstName); // Ilya
alert(surname); // Kantor

// ---------------------------------------------
// 2) OBJECT DESTRUCTURING
let user = {
    name: 'John',
    years: 30
};

let { name, years: age, isAdmin = false } = user;

alert(name); // John
alert(age); // 30
alert(isAdmin); // false

// ---------------------------------------------
// 3) MIXED DESTRUCTURING
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
};
const {
    name,
    location: {
        country,
        city,
        coordinates: [lat, lng]
    }
} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

// ---------------------------------------------
// 4) DESTRUCTURED FUNCTION PARAMETERS
const student = {
    name: 'John Doe',
    age: 16,
    scores: {
        maths: 74,
        english: 63,
        science: 85
    }
};

// Without Destructuring
function displaySummary(student) {
    console.log('Hello, ' + student.name);
    console.log('Your Maths score is ' + (student.scores.maths || 0));
    console.log('Your English score is ' + (student.scores.english || 0));
    console.log('Your Science score is ' + (student.scores.science || 0));
}

// With Destructuring
function displaySummary({ name, scores: { maths = 0, english = 0, science = 0 } }) {
    console.log('Hello, ' + name);
    console.log('Your Maths score is ' + maths);
    console.log('Your English score is ' + english);
    console.log('Your Science score is ' + science);
}

displaySummary(student);

// ---------------------------------------------
// EXERCISE
// Create the function topSalary(salaries) that returns the name of the top-paid person.
// If salaries is empty, it should return null.
// If there are multiple top-paid persons, return any of them.
// P.S. Use Object.entries and destructuring to iterate over key/value pairs.

// Object.keys, values, entries

let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250
};
function topSalary(salaries) {
    let nameAnswer = null;
    let topSalary = 0;
    // console.log('salaries.length ', Object.keys(salaries).length); // object length
    // if (Object.keys(salaries).length === 0) return null;

    for (let [name, salary] of Object.entries(salaries)) {
        // console.log('name', name);
        // console.log('salary', salary);

        if (salary > topSalary) {
            topSalary = salary;
            nameAnswer = name;
        }
    }
    return nameAnswer;
}
console.log(topSalary(salaries));
console.log('// ---------------------------------------------');
// ---------------------------------------------
