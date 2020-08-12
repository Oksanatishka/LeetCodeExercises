// Binary Search Tree

// Linked Lists, Trees, and Graphs are structures with nodes that keep references to other nodes.

// In terms of complexity, Stacks and Queues are the simplest and can be constructed from Linked Lists.
// Trees and Graphs are the most complex because they extend the concept of a linked list.

// When we think of a binary search tree, the three things we should think of are:

// Root: This is the very top node of a tree structure and does not have a parent
// Parent: It is a child of a node but also the parent of a node
// Child: This node is the child of a node and does not necessarily have a child

// In a binary search tree, each node either has zero, one, or two children.
// The child on the left is called the left child, and the child on the right is the right child.
// In a binary search tree, the child on the left must be smaller than the child on the right.

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
class Tree {
    constructor(value) {
        this.root = null;
    }
    add(value) {
        // if we do not have a root, then we create one
        if (this.root === null) {
            this.root = new Node(value);
            return;
        }
        let current = this.root;
        // keep looping
        while (true) {
            // go left if our current value is greater than the value passed in
            if (current.value > value) {
                // if there is a left child then run the loop again
                if (current.left) {
                    current = current.left;
                } else {
                    current.left = new Node(value);
                    return;
                }
            }
            // the value is smaller, so we go right
            else {
                // go right, if there is a left child then run the loop again
                if (current.right) {
                    current = current.right;
                } else {
                    current.right = new Node(value);
                    return;
                }
            }
        }
    }
    contains(value) {
        // get the root
        let current = this.root;
        // while we have a node
        while (current) {
            // check if our current node has the value
            if (value === current.value) {
                return true; // leave the function
            }
            // we decide on the next current node by comparing our value
            // against current.value - if its less go left else right
            current = value < current.value ? current.left : current.right;
        }
        return false;
    }
}

const t = new Tree();
t.add(2);
t.add(5);
t.add(3);
