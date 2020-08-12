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
 * @return {number[][]}
 */

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}
// Approach: BFS (with Sorting)
// Time Complexity: O(NlogN) where BFS traversal - O(N), sort - O(NlogN)
// Space Complexity: O(N) where N is the number of nodes in the tree.

// Algorithm
//     - create a hash table        -- First, we create a hash table named columnTable to keep track of the results.
//     - use a queue                -- As to the BFS traversal, a common code pattern would be to use a queue data structure to keep track of the order we need to visit nodes. We initialize the queue by putting the root node along with its column index value (0).
//     - run the BFS traversal      -- We then run the BFS traversal with a loop consuming the elements from the queue.
//          - pop out element from queue                                    -- At each iteration within the BFS, we pop out an element from the queue. The element consists of a node and its corresponding column index. If the node is not empty, we then populate the columnTable with the value of the node. Subsequently, we then put its child nodes along with their respective column indices (i.e. column-1 and column+1) into the queue.
//          - hash table contains node values grouped by column indices     -- At the end of the BFS traversal, we obtain a hash table that contains the desired node values grouped by their column indices. For each group of values, they are further ordered by their row indices.
//     - sort the hash table        -- We then sort the hash table by its keys, i.e. column index in ascending order. And finally we return the results column by column.

var verticalOrder1 = function (root) {
    let columnTable = {};

    // BFS
    let queue = [[root, 0]]; // to keep track of the order, column index value (0)
    // loop consuming the elements from the queue.
    while (queue.length > 0) {
        let [node, column] = queue.shift();
        if (node === null) continue;
        if (columnTable[column] === undefined) columnTable[column] = [];
        columnTable[column].push(node.val);

        queue.push([node.left, column - 1]);
        queue.push([node.right, column + 1]);
    }
    let orderedCols = Object.keys(columnTable).sort((a, b) => a - b); // [ '-2', '-1', '0', '1' ]

    return orderedCols.map((colKey) => columnTable[colKey]); // [ [ 1 ], [ 2 ], [ 4, 3 ], [ 5 ] ]
};

// Approach: BFS without Sorting
// Time Complexity: O(N)
// Space Complexity: O(N)

var verticalOrder = function (root) {
    if (!root) return [];
    let columnTable = {};
    let queue = [[root, 0]];
    let minColumn = 0,
        maxColumn = 0; // ADD
    while (queue.length > 0) {
        let [node, column] = queue.shift();
        if (node === null) continue;
        if (columnTable[column] === undefined) columnTable[column] = [];
        columnTable[column].push(node.val);

        minColumn = Math.min(minColumn, column); // ADD
        maxColumn = Math.max(maxColumn, column); // ADD

        queue.push([node.left, column - 1]);
        queue.push([node.right, column + 1]);
    }
    // let orderedCols = Object.keys(columnTable).sort((a, b) => a - b);
    // return orderedCols.map((colKey) => columnTable[colKey]);

    let orderedCols = []; // ADD this chunk
    for (let i = minColumn; i < maxColumn + 1; ++i) {
        orderedCols.push(columnTable[i]);
    }
    return orderedCols;
};

// Tests
//       4
//     /  \
//    2    5
//   /\
//  1 3
let tree = new TreeNode(4);
tree.left = new TreeNode(2);
tree.right = new TreeNode(5);
tree.left.left = new TreeNode(1);
tree.left.right = new TreeNode(3);

console.log(verticalOrder(tree)); // [ [ 1 ], [ 2 ], [ 4, 3 ], [ 5 ] ]
