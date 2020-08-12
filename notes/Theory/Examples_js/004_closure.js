// EXERCISE
// Write a design that takes a string and returns a character at a time. If the new string is given,
// it should replace the old one.

// JavaScript closure is a function that returns another function and wraps data.

function generator(input) {
    // The index value is preserved between multiple function calls.
    var index = 0;
    return {
        next: function() {
            if (index < input.length) {
                index += 1;
                return input[index - 1];
            }
            return '';
        }
    };
}

var mygenerator = generator('boomerang');
console.log(mygenerator);
// mygenerator.next(); // returns "b"
console.log(mygenerator.next());
// mygenerator.next(); // returns "o"
console.log(mygenerator.next());
mygenerator = generator('toon');
// mygenerator.next(); // returns "t"
console.log(mygenerator.next());
