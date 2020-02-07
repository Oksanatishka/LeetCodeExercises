// The sort() method sorts the elements of an array in place and returns the sorted array.
// Syntax: arr.sort([compareFunction])

// Array sorting
const array = ['March', 'Jan', 'Feb', 'Dec'];

array.sort();

console.log(array); // [ 'Dec', 'Feb', 'Jan', 'March' ]

// ---------------------------------------------
const array1 = [1, 30, 4, 21, 100000];

array1.sort();

console.log(array1); // [ 1, 100000, 21, 30, 4 ]    !!!!!!!!!!

// ---------------------------------------------
const array2 = [1, 30, 4, 21, 100000];

array2.sort((a, b) => a - b);

console.log(array2); // [ 1, 4, 21, 30, 100000 ]

// ---------------------------------------------
// Object sorting
var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
];

// sort by value
items.sort(function(a, b) {
    return a.value - b.value;
});

// sort by name
items.sort(function(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }

    // names must be equal
    return 0;
});

console.log(items);
