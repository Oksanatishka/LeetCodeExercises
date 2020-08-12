/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
// Algorithm
// - Initialize current node to dummy head of the returning list.
// - Initialize carry to 00.
// - Initialize pp and qq to head of l1l1 and l2l2 respectively.
// - Loop through lists l1l1 and l2l2 until you reach both ends.
//      - Set xx to node pp's value. If pp has reached the end of l1l1, set to 00.
//      - Set yy to node qq's value. If qq has reached the end of l2l2, set to 00.
//      - Set sum = x + y + carrysum=x+y+carry.
//      - Update carry = sum / 10carry=sum/10.
//      - Create a new node with the digit value of (sum \bmod 10)(summod10) and set it to current node's next, then advance current node to next.
//      - Advance both pp and qq.
// - Check if carry = 1carry=1, if so append a new node with digit 11 to the returning list.
// - Return dummy head's next node.

// Time complexity : O(max(m,n)). Assume that mm and nn represents the length of l1 and l2 respectively, the algorithm above iterates at most max(m,n) times.
// Space complexity : O(max(m,n)). The length of the new list is at most max(m,n)+1.

var addTwoNumbers = function (l1, l2) {
    if (l1 === null) return l2;
    if (l2 === null) return l1;

    let newHead = new ListNode(0);
    let curr = newHead;
    let carry = 0;

    while (l1 || l2) {
        let val_1 = l1 ? l1.val : 0;
        let val_2 = l2 ? l2.val : 0;
        let sum = val_1 + val_2 + carry;
        // carry = sum / 10;
        // curr.next = new ListNode(sum % 10); // 9%10=9
        curr.next = new ListNode(null);
        curr = curr.next;

        if (sum >= 10) {
            carry = 1;
            curr.val = sum % 10;
        } else {
            carry = 0;
            curr.val = sum;
        }
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    if (carry > 0) {
        curr.next = new ListNode(carry);
    }
    return newHead.next;
};

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.
