// Single linked lists usually have the following functionalities:

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

    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }

        return counter;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        if (!this.head) return null;

        let node = this.head;
        while (node) {
            if (!node.next) return node;
            node = node.next;
        }
    }

    clear() {
        this.head = null;
    }

    removeHead() {
        if (!this.head) return;
        this.head = this.head.next;
    }

    removeTail() {
        if (!this.head) return;

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;
        while (node.next) {
            previous = node;
            node = node.next;
        }
        previous.next = null;
    }

    insertTail(data) {
        const last = this.getTail();
        if (last) last.next = new Node(data);
        else this.head = new Node(data);
    }

    getAt(index) {
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) return node;
            counter++;
            node = node.next;
        }
        return null;
    }

    removeAt(index) {
        if (!this.head) return;

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        const previous = this.getAt(index - 1);
        if (!previous || !previous.next) return;
        previous.next = previous.next.next;
    }

    insertAt(index, data) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const previous = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, previous.next);
        previous.next = node;
    }

    forEach(fn) {
        let node = this.head;
        let index = 0;
        while (node) {
            fn(node, index);
            node = node.next;
            index++;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
}

describe('Linked List', () => {
    it('Should implement insertHead', () => {
        const chain = new LinkedList();
        chain.insertHead(1);
        assert.equal(chain.head.data, 1);
    });
    it('Should implement size', () => {
        const chain = new LinkedList();
        chain.insertHead(1);
        assert.equal(chain.size(), 1);
    });
    it('Should implement getHead', () => {
        const chain = new LinkedList();
        chain.insertHead(1);
        assert.equal(chain.getHead().data, 1);
    });
    it('Should implement getTail', () => {
        const chain = new LinkedList();
        chain.insertHead(1);
        assert.equal(chain.getTail().data, 1);
    });
    it('Should implement clear', () => {
        const chain = new LinkedList();
        chain.insertHead(1);
        chain.clear();
        assert.equal(chain.size(), 0);
    });
    it('Should implement removeHead', () => {
        const chain = new LinkedList();
        chain.insertHead(1);
        chain.removeHead();
        assert.equal(chain.size(), 0);
    });
    it('Should implement removeTail', () => {
        const chain = new LinkedList();
        chain.insertHead(1);
        chain.removeTail();
        assert.equal(chain.size(), 0);
    });
    it('Should implement insertTail', () => {
        const chain = new LinkedList();
        chain.insertTail(1);
        assert.equal(chain.getTail().data, 1);
    });
    it('Should implement getAt', () => {
        const chain = new LinkedList();
        chain.insertHead(1);
        assert.equal(chain.getAt(0).data, 1);
    });
    it('Should implement removeAt', () => {
        const chain = new LinkedList();
        chain.insertHead(1);
        chain.removeAt(0);
        assert.equal(chain.size(), 0);
    });
    it('Should implement insertAt', () => {
        const chain = new LinkedList();
        chain.insertAt(0, 1);
        assert.equal(chain.getAt(0).data, 1);
    });
    it('Should implement forEach', () => {
        const chain = new LinkedList();
        chain.insertHead(1);
        chain.insertHead(2);
        chain.forEach((node, index) => (node.data = node.data + index));
        assert.equal(chain.getTail().data, 2);
    });
    it('Should implement iterator', () => {
        const chain = new LinkedList();
        chain.insertHead(1);
        chain.insertHead(2);
        for (let node of chain) node.data = node.data + 1;
        assert.equal(chain.getTail().data, 2);
    });
});
