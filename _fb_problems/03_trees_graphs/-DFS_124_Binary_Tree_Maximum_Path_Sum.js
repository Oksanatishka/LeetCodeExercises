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

// Approach: Recursion
// Time complexity: O(N), where N is number of nodes, since we visit each node not more than 2 times.
// Space complexity: O(H), where HH is a tree height, to keep the recursion stack. In the average case of balanced tree, the tree height H = \log NH=logN, in the worst case of skewed tree, H = NH=N.

var maxPathSum = function (root) {
    let max_sum = Number.MIN_VALUE;

    let recursion = (node) => {
        if (node == null) return 0;

        // max sum on the left and right sub-trees of node
        let left_gain = Math.max(recursion(node.left), 0);
        let right_gain = Math.max(recursion(node.right), 0);

        let max_gain = node.val + Math.max(left_gain, right_gain);
        // the price to start a new path where `node` is a highest node
        let sum_newpath = node.val + left_gain + right_gain;

        // update max_sum if it's better to start a new path
        max_sum = Math.max(max_sum, sum_newpath, max_gain);

        // for recursion :
        // return the max gain if continue the same path
        return max_gain;
    };
    recursion(root);
    return max_sum;
};
