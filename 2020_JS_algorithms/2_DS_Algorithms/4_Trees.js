// Trees usually have the following functionalities:

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        this.children.push(new Node(data));
    }

    remove(data) {
        this.children = this.children.filter(node => {
            return node.data !== data;
        });
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF(fn) {
        const queue = [this.root];
        while (queue.length) {
            const node = queue.shift();
            queue.push(...node.children);
            fn(node);
        }
    }

    traverseDF(fn) {
        const stack = [this.root];
        while (stack.length) {
            const node = stack.shift();
            stack.unshift(...node.children);
            fn(node);
        }
    }
}

describe('Trees', () => {
    it('Should add and remove nodes', () => {
        const root = new Node(1);
        root.add(2);
        assert.equal(root.data, 1);
        assert.equal(root.children[0].data, 2);
        root.remove(2);
        assert.equal(root.children.length, 0);
    });
    it('Should traverse by breadth', () => {
        const tree = new Tree();
        tree.root = new Node(1);
        tree.root.add(2);
        tree.root.add(3);
        tree.root.children[0].add(4);
        const numbers = [];
        tree.traverseBF(node => numbers.push(node.data));
        assert.deepEqual(numbers, [1, 2, 3, 4]);
    });
    it('Should traverse by depth', () => {
        const tree = new Tree();
        tree.root = new Node(1);
        tree.root.add(2);
        tree.root.add(3);
        tree.root.children[0].add(4);
        const numbers = [];
        tree.traverseDF(node => numbers.push(node.data));
        assert.deepEqual(numbers, [1, 2, 4, 3]);
    });
});
