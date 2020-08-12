function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}
// Approach: Inorder traversal
var isValidBST = function (root) {
    if (!root) return 1;
    let arr = [];
    const dfs = (node) => {
        if (!node) return;
        dfs(node.left);
        arr.push(node.val);
        dfs(node.right);
    };
    dfs(root);
    // console.log(arr);
    let elem = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (elem < arr[i]) {
            elem = arr[i];
        } else {
            return false;
        }
    }
    return true;
};
// Approach: Recursion  - сложнее
var isValidBST_2 = function (root) {
    let res = true;

    const isValidNode = (curNode, min_val, max_val) => {
        if (curNode == null) return;
        if (max_val != null && curNode.val >= max_val) {
            res = false;
            return;
        }
        if (min_val != null && curNode.val <= min_val) {
            res = false;
            return;
        }
        // console.log(curNode.val);
        isValidNode(curNode.left, min_val, curNode.val);
        isValidNode(curNode.right, curNode.val, max_val);
    };

    isValidNode(root, null, null);

    return res;
};
// TESTS
// let tree = new TreeNode(5);
// tree.left = new TreeNode(1);
// tree.right = new TreeNode(4);
// tree.right.left = new TreeNode(3);
// tree.right.right = new TreeNode(6);

// let tree = new TreeNode(2);
// tree.left = new TreeNode(1);
// tree.right = new TreeNode(3);

let tree = new TreeNode(10);
tree.left = new TreeNode(5);
tree.right = new TreeNode(15);
tree.right.left = new TreeNode(6);
tree.right.right = new TreeNode(20);

console.log(isValidBST_2(tree));

// Time complexity : O(N) in the worst case when the tree is BST or the "bad" element is a rightmost leaf.
// Space complexity : O(N) to keep stack.
