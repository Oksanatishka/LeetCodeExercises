/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}
// Approach: Recursion
// Time Complexity: O(N) since we process each node of the tree exactly once.
// Space Complexity: O(N) which is occupied by the recursion stack.

var flatten = function (root) {
    const flattenTree = (node) => {
        if (node === null) return null;
        if (node.left === null && node.right === null) return node;

        // flatten the left subtree
        let leftTail = flattenTree(node.left); // 3    -> right subtree: null

        // flatten the right subtree
        let rightTail = flattenTree(node.right); // 4    -> right subtree: 5 -> 6

        if (leftTail !== null) {
            leftTail.right = node.right; // leftTail.right = 4   (node=2) -> right subtree: 5 (node=1) - добавит в конец left subtree
            node.right = node.left; // node.right = 3   (node=2)    -> right subtree: добавит после root нода left subtree
            node.left = null; // node.left = null             -> right subtree: уберет весь left subtree
        }
        return rightTail === null ? leftTail : rightTail; // rightTail=4  -> right subtree: rightTail=6
    };
    flattenTree(root);
    return root;
};

// Approach: Iterative Solution
// Time Complexity: O(N) since we process each node of the tree at most twice.
// Space Complexity: O(1

var flatten_2 = function (root) {
    if (root === null) return null;

    let node = root;
    while (node !== null) {
        // If the node has a left child
        if (node.left != null) {
            // Find the rightmost node
            let rightmost = node.left;
            while (rightmost.right != null) {
                rightmost = rightmost.right;
            }

            // rewire the connections
            rightmost.right = node.right;
            node.right = node.left;
            node.left = null;
        }

        // move on to the right side of the tree
        node = node.right;
    }
};

// TESTS
// given tree:
//        1
//       /\
//      2 5
//     /\  \
//    3 4   6

// flattened tree:
// 1
//  \
//   2
//    \
//     3
//      \
//       4
//        \
//         5
//          \
//           6
let tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(5);
tree.left.left = new TreeNode(3);
tree.left.right = new TreeNode(4);
tree.right.right = new TreeNode(6);

console.log(flatten(tree));
