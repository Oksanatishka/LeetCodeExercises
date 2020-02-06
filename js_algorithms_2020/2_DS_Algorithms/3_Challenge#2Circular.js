// Without keeping node references, check if a linked list is circular.

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertHead(data) {
        this.head = new Node(data, this.head);
    }
}

function circular(list) {
    let moveByOne = list.head;
    let moveByTwo = list.head;

    while (moveByTwo.next && moveByTwo.next.next) {
        moveByOne = moveByOne.next;
        moveByTwo = moveByTwo.next.next;

        if (moveByTwo === moveByOne) return true;
    }

    return false;
}

describe('Circular Linked List', () => {
    it('Should check for circular linked list', () => {
        const chain = new LinkedList();
        chain.insertHead(1);
        chain.insertHead(2);
        chain.insertHead(3);
        chain.head.next.next.next = chain.head;
        assert.equal(circular(chain), true);
    });
});
