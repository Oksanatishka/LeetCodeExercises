// Without keeping a counter, return the value in a linked list that is at a given step away from the end.

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

function fromTail(list, step) {
    let moveByOne = list.head;
    let aheadByStep = list.head;

    while (step > 0) {
        aheadByStep = aheadByStep.next;
        step--;
    }

    while (aheadByStep.next) {
        moveByOne = moveByOne.next;
        aheadByStep = aheadByStep.next;
    }

    return moveByOne;
}

describe('From Tail of Linked List', () => {
    it('Should step from tail of linked list', () => {
        const chain = new LinkedList();
        chain.insertHead(1);
        chain.insertHead(2);
        chain.insertHead(3);
        chain.insertHead(4);
        chain.insertHead(5);
        assert.equal(fromTail(chain, 2).data, 3);
    });
});
