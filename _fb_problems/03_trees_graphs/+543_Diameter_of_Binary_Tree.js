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
 * @return {number}
 */

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}
var diameterOfBinaryTree = function (root) {
    let max = 0;
    DFS(root);
    return max;

    function DFS(root) {
        if (root === null) return 0; // off the tree

        let left = DFS(root.left); // get left depth
        let right = DFS(root.right); // get right depth

        max = Math.max(max, left + right); // check if path is longer than max (update diameter at every node) (if the path doesn't go through the root we just get the max of them)
        return Math.max(left, right) + 1; // return the length of the deepest path (update the largest number of edge so far) (the path goes through the root so we add 1(for the root))
    }
};
// TESTS
//       1
//      / \
//     2   3
//    / \
//   4   5          // Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].
let tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);

console.log(diameterOfBinaryTree(tree));
