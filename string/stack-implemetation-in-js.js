// Array as a stack
// JS methods: push, pop, peek, length/size.

// STACK IMPLEMENTATION

var Stack = function() {
    this.count = 0;
    this.storage = {};

    this.push = function(val) {
        this.storage[this.count] = val;
        this.count++;
    };
    this.pop = function() {
        if (this.count == 0) {
            return undefined;
        }
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    };
    this.size = function(val) {
        return this.count;
    };
    this.peek = function(val) {
        return this.storage[this.count - 1];
    };
};

var myStack = new Stack();

myStack.push(2);
myStack.push(4);
console.log(myStack);

myStack.pop();
console.log(myStack);

console.log(myStack.size());
console.log(myStack.peek());
