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
 * @return {string[]}
 */

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}
// DFS - preorder traversal
// O(n)-time, O(n)-space
var binaryTreePaths = function (root) {
    if (!root) return [];
    let output = [];
    const dfs = (node, str) => {
        if (!node.right && !node.left) output.push(str + node.val); // output.push([...str,node.val].join('->'));

        if (node.left) dfs(node.left, str + node.val + '->'); // dfs(node.left,[...str,node.val]);
        if (node.right) dfs(node.right, str + node.val + '->'); // dfs(node.right,[...str,node.val]);
    };
    dfs(root, ''); // dfs(root,[]);
    return output;
};

// TESTS
let tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.right = new TreeNode(5);

console.log(binaryTreePaths(tree)); //["1->2->5", "1->3"]
