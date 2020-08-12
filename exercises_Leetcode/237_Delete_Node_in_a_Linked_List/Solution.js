/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};

let head = new ListNode(4);
head.next = new ListNode(5);
head.next.next = new ListNode(1);
head.next.next.next = new ListNode(9);

function print(linked_list) {
    while (linked_list) {
        console.log(linked_list.val);
        linked_list = linked_list.next;
    }
}

let output = deleteNode(head.next);
print(head);
