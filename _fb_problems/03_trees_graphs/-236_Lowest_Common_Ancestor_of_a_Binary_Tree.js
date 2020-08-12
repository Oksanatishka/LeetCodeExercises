/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
// Approach: Recursive Approach
// Time Complexity: O(N), where N is the number of nodes in the binary tree. In the worst case we might be visiting all the nodes of the binary tree.
// Space Complexity: O(N). This is because the maximum amount of space utilized by the recursion stack would be N since the height of a skewed binary tree could be N.

// Algorithm
//  - Start traversing the tree from the root node.
//  - If the current node itself is one of p or q, we would mark a variable mid as True and continue the search for the other node in the left and right branches.
//  - If either of the left or the right branch returns True, this means one of the two nodes was found below.
//  - If at any point in the traversal, any two of the three flags left, right or mid become True, this means we have found the lowest common ancestor for the nodes p and q.

var lowestCommonAncestor = function (root, p, q) {
    let ans;
    const recurseTree = (curr, p, q) => {
        // If reached the end of a branch, return false.
        if (curr === null) return false;

        // Left Recursion. If left recursion returns true, set left = 1 else 0
        let left = recurseTree(curr.left, p, q) ? 1 : 0;

        // Right Recursion
        let right = recurseTree(curr.right, p, q) ? 1 : 0;

        // If the current node is one of p or q
        let mid = curr == p || curr == q ? 1 : 0;

        // If any two of the flags left, right or mid become True
        if (mid + left + right >= 2) {
            ans = curr;
        }

        // Return true if any one of the three bool values is True.
        return mid + left + right > 0;
    };
    recurseTree(root, p, q);
    return ans;
};

// Approach: ??? 6 lines
var lowestCommonAncestor_2 = function (root, p, q) {
    if (!root) {
        return false;
    }
    let left = lowestCommonAncestor(root.left, p, q);
    let middle = root.val === p.val || root.val === q.val;
    let right = lowestCommonAncestor(root.right, p, q);

    if ((middle && right) || (middle && left) || (left && right)) {
        return root;
    }
    return middle || left || right;
};

// Approach: ???
var lowestCommonAncestor_3 = function (root, p, q) {
    function recurse(root) {
        if (!root) {
            return false;
        }
        let left = recurse(root.left);
        let middle = root.val === p.val || root.val === q.val;
        let right = recurse(root.right);

        if ((middle && right) || (middle && left) || (left && right)) {
            return root;
        }
        return middle || left || right;
    }
    return recurse(root);
};
// Approach: ???
const lowestCommonAncestor = (root, p, q) => {
    if (!root || root === p || root === q) return root;
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    if (!left) return right; // p and q are in the right subtree
    if (!right) return left; // p and q are in the left subtree
    return root; // p is in one side and q is in the other
};

// Approach: Iterative using parent pointers    - using Hash Map
// Approach: Iterative without parent pointers

// TESTS
//         3
//       /  \
//      5    1              // for 5 & 1 -> 3
//     /\    /\
//    6  2   0 8
//      /\
//      7 4                 // for 5 & 4 -> 5

//          1
//       /    \
//      2      3
//     / \     /\
//    4   5   6 7
//   /\   /\
//  8 9  10 11                 // for 9 & 11 -> 2

let tree = new TreeNode(3);
tree.left = new TreeNode(5);
tree.right = new TreeNode(1);
tree.left.left = new TreeNode(6);
tree.left.right = new TreeNode(2);
tree.left.right.left = new TreeNode(7);
tree.left.right.right = new TreeNode(4);
tree.right.left = new TreeNode(0);
tree.right.right = new TreeNode(8);

// console.log(lowestCommonAncestor(tree, 5, 1)); //3
console.log(lowestCommonAncestor_3(tree, 5, 4)); //5
