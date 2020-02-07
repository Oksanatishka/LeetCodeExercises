// https://medium.com/dev-bits/a-perfect-guide-for-cracking-a-javascript-interview-a-developers-perspective-23a5c0fa4d0d

var mathLib = {
    pi: 3.14,
    area: function(r) {
        return this.pi * r * r;
    },
    circumference: function(r) {
        return 2 * this.pi * r;
    }
};

mathLib.area(2); //12.56
// console.log(mathLib.area(2));
// Now you have no chance to send the library as the deadline was over. JS call function saves you. Just call your code in this way
mathLib.area.call({ pi: 3.14159 }, 2); // 12.56636
console.log('call', mathLib.area.call({ pi: 3.14159 }, 2));

// call function takes two arguments:
// - Context (an object that replaces this keyword inside the area function).
// - Function arguments

// Apply is exactly same except Function arguments are passed as a list for god’s sake.
mathLib.area.apply({ pi: 3.14159 }, [2]); // 12.56636
console.log('apply', mathLib.area.apply({ pi: 3.14159 }, [2]));

// Bind attaches a brand new this to a given function. In bind’s case, the function is not executed instantly like Call or Apply.
var newArea = mathLib.area.bind({ pi: 3.14159 }); // 12.56636
// After some long time, somewhere in the wild
newArea(2);
console.log('bind', newArea(2));
