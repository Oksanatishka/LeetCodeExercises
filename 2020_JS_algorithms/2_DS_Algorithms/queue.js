// Stacks and Queues are array-like structures that differ only in how items are inserted and removed.

// the queue is first-in, first-out (FIFO). We add to the back and remove from the front.
class Queue {
    constructor() {
        this.queue = {};
        this.length = 0;
        this.head = 0;
    }
    enqueue(value) {
        this.queue[this.length + this.head] = value;
        this.length++;
    }
    dequeue() {
        const firstVal = this.queue[this.head];
        delete this.queue[this.head];
        this.length--;
        this.head++;
        return firstVal;
    }
    peek() {
        const firstVal = this.queue[this.head];
        return firstVal;
    }
}
// ---------------------------------------------
class Queue1 {
    // Array is used to implement a Queue
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        // adding element to the queue
        this.items.push(element);
    }
    dequeue() {
        // removing element from the queue returns underflow when called on empty queue
        if (this.isEmpty()) return 'Underflow';
        return this.items.shift();
    }

    front() {
        // returns the Front element of the queue without removing it.
        if (this.isEmpty()) return 'No elements in Queue';
        return this.items[0];
    }
    // Helper Methods
    isEmpty() {
        // return true if the queue is empty.
        return this.items.length == 0;
    }
    printQueue() {
        var str = '';
        for (var i = 0; i < this.items.length; i++) str += this.items[i] + ' ';
        return str;
    }
}
// ---------------------------------------------
let myQueue = new Queue();
myQueue.enqueue(23);
myQueue.enqueue(45);
console.log(myQueue);

console.log(myQueue.dequeue());
console.log(myQueue);

console.log(myQueue.peek());

// ---------------------------------------------
// creating object for queue class
var queue1 = new Queue1();

// Testing dequeue and pop on an empty queue
// returns Underflow
console.log(queue1.dequeue());

// returns true
console.log(queue1.isEmpty());

// Adding elements to the queue
// queue contains [10, 20, 30, 40, 50]
queue1.enqueue(10);
queue1.enqueue(20);
queue1.enqueue(30);
queue1.enqueue(40);
queue1.enqueue(50);
queue1.enqueue(60);

// returns 10
console.log(queue1.front());

// removes 10 from the queue
// queue contains [20, 30, 40, 50, 60]
console.log(queue1.dequeue());

// returns 20
console.log(queue1.front());

// removes 20
// queue contains [30, 40, 50, 60]
console.log(queue1.dequeue());

// printing the elements of the queue
// prints [30, 40, 50, 60]
console.log(queue1.printQueue());
