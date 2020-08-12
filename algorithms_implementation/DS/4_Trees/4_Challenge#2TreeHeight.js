// For a given tree, return the height (maximum number of levels).

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        this.children.push(new Node(data));
    }
}

function treeHeight(root) {
    const queue = [root, 'reset'];
    let counter = 0;

    while (queue.length > 1) {
        const node = queue.shift();

        if (node === 'reset') {
            counter++;
            queue.push('reset');
        } else {
            queue.push(...node.children);
        }
    }

    return counter;
}

function _treeHeight(root) {
    const stack = [root];
    let counter = 0;

    while (stack.length > 0) {
        const node = stack.shift();
        counter++;
        stack.unshift(...node.children);
    }

    return counter;
}

describe('Height of Tree', () => {
    it('Should return max number of levels', () => {
        const root = new Node(1);
        root.add(2);
        root.add(3);
        root.children[1].add(4);
        assert.deepEqual(treeHeight(root), 2);
    });
});
