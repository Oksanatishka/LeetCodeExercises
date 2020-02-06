function Queue() {
    collection = [];

    this.print = function() {
        console.log(collection);
    };

    this.enqueue = function(element) {
        collection.push(element);
    };
    this.dequeue = function() {
        return collection.shift();
    };

    this.front = function() {
        return collection[0];
    };

    this.size = function() {
        return collection.length;
    };

    this.isEmpty = function() {
        return collection.length === 0;
    };
}

var a = new Queue();

a.enqueue('a');
a.enqueue('b');
a.enqueue('c');
a.dequeue();
a.print();
console.log(a.front());
console.log(a.size());
console.log(a.isEmpty());

// Priority Queue
