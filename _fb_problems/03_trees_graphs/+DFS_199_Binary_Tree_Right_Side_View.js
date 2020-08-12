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
 * @return {number[]}
 */
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}
// var rightSideView = function (root) {
//     if (!root) return [];
//     let output = [];
//     const search = (node) => {
//         if (node === null) return;
//         output.push(node.val);

//         if (node.left && node.right === null) {
//             search(node.left);
//         } else {
//             search(node.right);
//         }
//     };
//     search(root);
//     return output;
// };

// Approach: BFS
var rightSideView = function (root) {
    if (!root) return [];
    let queue = [root];
    let result = [];

    while (queue.length) {
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let curr = queue.shift();
            if (i === 0) result.push(curr.val); // [1] ->
            if (curr.right) queue.push(curr.right);
            if (curr.left) queue.push(curr.left);
        }
    }
    return result;
};

//  Approach:  (level order traversal)
var rightSideView_2 = function (root) {
    var result = [];

    var traversal = function (node, level) {
        if (!node) {
            return;
        }

        result[level] = node.val; // left subtree [0:1, 1:2, 2:5] -> right subtree [0:1, 1:3, 2:4]
        traversal(node.left, level + 1);
        traversal(node.right, level + 1);
    };
    traversal(root, 0);

    return result;
};

// TESTS
//      1
//     / \
//    2   3
//    \    \
//    5     4
let tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.right = new TreeNode(5);
tree.right.right = new TreeNode(4);

// console.log(lowestCommonAncestor(tree, 5, 1)); //3
console.log(rightSideView_2(tree)); //[1, 3, 4]
