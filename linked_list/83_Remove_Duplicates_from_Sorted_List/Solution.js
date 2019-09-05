/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}
var deleteDuplicates = function(head) {
    let current = head;
    if (current === null) {
        return null;
    }

    while (current !== null) {
        while (current.next !== null && current.val === current.next.val) {
            current.next = current.next.next;
        }
        current = current.next;
    }
    return head;
};

let head = new ListNode(1);
head.next = new ListNode(1);
head.next.next = new ListNode(2);

function print(linked_list) {
    while (linked_list) {
        console.log(linked_list.val);
        linked_list = linked_list.next;
    }
}

let output = deleteDuplicates(head);
print(output);
