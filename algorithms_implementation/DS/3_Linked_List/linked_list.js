// https://medium.com/siliconwat/data-structures-in-javascript-1b9aed0ea17c

// Linked Lists, Trees, and Graphs are structures with nodes that keep references to other nodes.

// In terms of efficiency, Linked Lists are most optimal for recording and storing of data,
// while Hash Tables are most performant for searching and retrieving of data.

// why would we use a linked list?
// A linked list is mostly used for languages that do not have dynamic sizing arrays.
// Linked lists organize items sequentially, with each item pointing to the next item.
// Each node in a linked list has a data value and a next value.

// a LinkedList is just a bunch of nested objects!
const myLinkedList = {
    head: {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 37,
                next: null
            }
        }
    }
};

class LinkedList {
    constructor(value) {
        this.head = { value, next: null };
        this.tail = this.head;
    }
    insert(value) {
        const node = { value, next: null };
        this.tail.next = node;
        this.tail = node;
    }
    removeNode(val) {
        let currentNode = this.head;
        let previousNode;
        while (currentNode) {
            if (currentNode.value === val) {
                break;
            }
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        // we return undefined as we have found no node with that value
        if (currentNode === null) {
            return false;
        }
        if (currentNode === this.head) {
            this.head = this.head.next;
            return;
        }
        // currentNode = currentNode.next;
        // previousNode.next = currentNode;
        previousNode.next = currentNode.next;
    }
    removeTail() {
        let currentNode = this.head;
        let previousNode;

        while (currentNode) {
            if (!currentNode.next) {
                break;
            }
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        previousNode.next = null;
    }
}

// ---------------------------------------------
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // adds an element at the end of list
    add(element) {
        var node = new Node(element);
        var current;

        if (this.head == null) this.head = node;
        else {
            current = this.head;

            // iterate to the end of the list
            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }
        this.size++;
    }

    // insert element at the position index of the list
    insertAt(element, index) {
        if (index > 0 && index > this.size) return false;
        else {
            var node = new Node(element);
            var curr, prev;

            curr = this.head;

            // add the element to the first index
            if (index == 0) {
                node.next = head;
                this.head = node;
            } else {
                curr = this.head;
                var it = 0;

                // iterate over the list to find the position to insert
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }
    // removes an element from the specified location
    removeFrom(index) {
        if (index > 0 && index > this.size) return -1;
        else {
            var curr,
                prev,
                it = 0;
            curr = this.head;
            prev = curr;

            // deleting first element
            if (index === 0) {
                this.head = curr.next;
            } else {
                // iterate over the list to the position to remove an element
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // remove the element
                prev.next = curr.next;
            }
            this.size--;

            // return the remove element
            return curr.element;
        }
    }
    // removes a given element from the list
    removeElement(element) {
        var current = this.head;
        var prev = null;

        // iterate over the list
        while (current != null) {
            // comparing element with current element if found then remove the and return true
            if (current.element === element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }

    // Helper Methods
    // finds the index of element
    indexOf(element) {
        var count = 0;
        var current = this.head;

        // iterae over the list
        while (current != null) {
            // compare each element of the list with given element
            if (current.element === element) return count;
            count++;
            current = current.next;
        }

        // not found
        return -1;
    }
    // checks the list for empty
    isEmpty() {
        return this.size == 0;
    }
    // gives the size of the list
    size_of_list() {
        console.log(this.size);
    }
    // prints the list items
    printList() {
        var curr = this.head;
        var str = '';
        while (curr) {
            str += curr.element + ' ';
            curr = curr.next;
        }
        console.log(str);
    }
}

// creating an object for the
// Linkedlist class
var ll = new LinkedList();

// testing isEmpty on an empty list
// returns true
console.log(ll.isEmpty());

// adding element to the list
ll.add(10);

// prints 10
ll.printList();

// returns 1
console.log(ll.size_of_list());

// adding more elements to the list
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);

// returns 10 20 30 40 50
ll.printList();

// prints 50 from the list
console.log('is element removed ?' + ll.removeElement(50));

// prints 10 20 30 40
ll.printList();

// returns 3
console.log('Index of 40 ' + ll.indexOf(40));

// insert 60 at second position
// ll contains 10 20 60 30 40
ll.insertAt(60, 2);

ll.printList();

// returns false
console.log('is List Empty ? ' + ll.isEmpty());

// remove 3rd element from the list
console.log(ll.removeFrom(3));

// prints 10 20 60 40
ll.printList();
