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
 * @return {TreeNode}
 */

// Approach: Recursive
var invertTree = function (root) {
    if (root) {
        [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
    }
    return root;
};

// Approach: Iterative using BFS
var invertTree_2 = function (root) {
    if (!root) return null;
    let queue = [];

    queue.push(root);
    while (queue.length > 0) {
        let curr = queue.shift();
        // if (curr != null) {
        //   [curr.left, curr.right] = [curr.right, curr.left];
        //   queue.push(curr.left, curr.right);
        // }

        // swap curr.left & curr.right
        let temp = curr.left;
        curr.left = curr.right;
        curr.right = temp;

        if (curr.left) queue.push(curr.left);
        if (curr.right) queue.push(curr.right);
    }
    return root;
};
