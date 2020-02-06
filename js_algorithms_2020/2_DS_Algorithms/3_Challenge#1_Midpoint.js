// Without keeping a counter, return the middle value of a linked list.
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

function midpoint(list) {
    let moveByOne = list.head;
    let moveByTwo = list.head;

    while (moveByTwo.next && moveByTwo.next.next) {
        moveByOne = moveByOne.next;
        moveByTwo = moveByTwo.next.next;
    }

    return moveByOne;
}
describe('Midpoint of Linked List', () => {
    it('Should return midpoint of linked list', () => {
        const chain = new LinkedList();
        chain.insertHead(1);
        chain.insertHead(2);
        chain.insertHead(3);
        chain.insertHead(4);
        chain.insertHead(5);
        assert.equal(midpoint(chain).data, 3);
    });
});
