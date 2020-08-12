// You should return the pointer to the smallest element of the linked list.

// traverse the tree: implement DFS inorder traversal
// class NodeBST {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }
// class BST {
//     constructor(root) {
//         this.root = root;
//     }
// }
// class NodeDLL {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//         this.prev = null;
//     }
//     setNextNode(node) {
//         if (node instanceof NodeDLL) {
//             this.next = node;
//         }
//     }
//     setPrevNode(node) {
//         if (node instanceof NodeDLL) {
//             this.prev = node;
//         }
//     }
// }
// class DLL {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//     }
//     insertToTail(value) {
//         let newNode = new NodeDLL(value);
//         let currTail = this.tail;
//         if (currTail) {
//             currTail.setNextNode(newNode);
//             newNode.setPrevNode(currTail);
//         }
//         this.tail = newNode;
//         if (!this.head) {
//             this.head = newNode;
//         }
//     }
// }

function Node(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Approach 1: Recursion
// algorithm :
//     -Initiate the first and the last nodes as nulls.
//     -Call the standard inorder recursion helper(root) :
//         - If node is not null :
//             - Call the recursion for the left subtree helper(node.left).
//             - If the last node is not null, link the last and the current node nodes.
//             - Else initiate the first node.
//             - Mark the current node as the last one : last = node.
//             - Call the recursion for the right subtree helper(node.right).
//     - Link the first and the last nodes to close DLL ring and then return the first node.

const convert_BST_to_DLL = (root) => {
    if (!root) return root;
    let first = null;
    let last = null;

    function dfs(node) {
        if (!node) return;
        dfs(node.left);

        if (last != null) {
            // link last & current node
            last.right = node;
            node.left = last;
        } else {
            first = node;
        }
        last = node;

        dfs(node.right);
    }
    dfs(root);
    last.right = first;
    first.left = last;
    return first;
};

// Approach 1: Brute Force - P.S. not 'in place' solution
var convert_BST_to_DLL_2 = function (root) {
    if (root == null) return null;

    let result = [];

    let inorder = (root) => {
        if (root == null) return;
        inorder(root.left);
        result.push(root);
        inorder(root.right);
    };

    inorder(root);
    if (result.length == 1) {
        result[0].left = result[0];
        result[0].right = result[0];
        return result[0];
    }
    for (let i = 0; i < result.length; i++) {
        result[i].left = i == 0 ? result[result.length - 1] : result[i - 1];
        result[i].right = i == result.length - 1 ? result[0] : result[i + 1];
    }

    return result[0];
};

// Tests
let tree = new Node(4);
tree.left = new Node(2);
tree.right = new Node(5);
tree.left.left = new Node(1);
tree.left.right = new Node(3);

console.log(convert_BST_to_DLL(tree));

// Time Complexity: O(N)    - since each node is processed exactly once.
// Space Complexity: O(N)   - We have to keep a recursion stack of the size of the tree height, which is \mathcal{O}(\log N)O(logN) for the best case of completely balanced tree and \mathcal{O}(N)O(N) for the worst case of completely unbalanced tree.
