// Stacks and Queues are array-like structures that differ only in how items are inserted and removed.

// the stack is last-in, first-out (LIFO)
class Stack {
    constructor() {
        this.storage = {};
        this.length = 0;
    }
    push(value) {
        this.storage[this.length] = value;
        this.length++;
    }
    pop() {
        const lastVal = this.storage[this.length--];
        delete this.storage[this.length--];
        this.length--;
        return lastVal;
        // const lastIdx = this.length - 1;
        // const lastVal = this.storage[lastIdx];
        // delete this.storage[lastIdx];
        // this.length--;
        // return lastVal;
    }
    peep() {
        const lastVal = this.storage[--this.length];
        return lastVal;
    }
}
// ---------------------------------------------
class Stack1 {
    // Array is used to implement stack
    constructor() {
        this.items = [];
    }

    push(element) {
        // push element into the items
        this.items.push(element);
    }
    pop() {
        // return top most element in the stack
        // and removes it from the stack
        // Underflow if stack is empty
        if (this.items.length == 0) return 'Underflow';
        return this.items.pop();
    }
    peek() {
        // return the top most element from the stack
        // but does'nt delete it.
        return this.items[this.items.length - 1];
    }
    // Helper methods
    isEmpty() {
        // return true if stack is empty
        return this.items.length == 0;
    }
    printStack() {
        var str = '';
        for (var i = 0; i < this.items.length; i++) str += this.items[i] + ' ';
        return str;
    }
}
// ---------------------------------------------
let myStack = new Stack();
myStack.push(23);
myStack.push(45);
console.log(myStack);

console.log(myStack.pop());
console.log(myStack);

console.log(myStack.peep());

console.log('// ---------------------------------------------');
// ---------------------------------------------
// creating object for stack class
var stack1 = new Stack1();

// testing isEmpty and pop on an empty stack

// returns false
console.log(stack1.isEmpty());

// returns Underflow
console.log(stack1.pop());
// Adding element to the stack
stack1.push(10);
stack1.push(20);
stack1.push(30);

// Printing the stack element
// prints [10, 20, 30]
console.log(stack1.printStack());

// returns 30
console.log(stack1.peek());

// returns 30 and remove it from stack
console.log(stack1.pop());

// returns [10, 20]
console.log(stack1.printStack());
