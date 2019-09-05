/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}
var mergeTwoLists = function(l1, l2) {
    let result = new ListNode(null);
    let head = result;

    while (l1 != null || l2 != null) {
        if (l1 === null) {
            head.next = l2;
            l2 = l2.next;
        } else if (l2 === null) {
            head.next = l1;
            l1 = l1.next;
        } else if (l1.val < l2.val) {
            head.next = l1;
            l1 = l1.next;
        } else {
            head.next = l2;
            l2 = l2.next;
        }
        head = head.next;
    }

    return result.next;
};

const head1 = new ListNode(1);
head1.next = new ListNode(2);
head1.next.next = new ListNode(4);

// console.log(head1.next);
const head2 = new ListNode(1);
head2.next = new ListNode(3);
head2.next.next = new ListNode(4);

function print(linked_list) {
    while (linked_list) {
        console.log(linked_list.val);
        linked_list = linked_list.next;
    }
}

let output = mergeTwoLists(head1, head2); // Output: 1->1->2->3->4->4
print(output);
// console.log(output.next.next.next);
