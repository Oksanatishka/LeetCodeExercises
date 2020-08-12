// Steps:
// - use fast & slow pointer to get to the middle of linked list. Note when list has even number of nodes, get the middle left node of the list.
// - break the list in the middle, and reverse the second half of the list
// - interleave the reversed second half with the first half

var reorderList = function (head) {
    // nothing need to be done in case list is either empty or contains only one or two nodes
    if (!head || !head.next || !head.next.next) return head;

    // step 1: use fast and slow pointer to move to the middle of linked list
    // in case list is even, then move to the middle left node
    let fast = head.next,
        slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    // get the second half of list
    const secondHalf = slow.next;

    // break the list
    slow.next = null;

    // step 2: reverse the second half
    let curr = secondHalf,
        prev = null,
        tmp;

    while (curr) {
        tmp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = tmp;
    }

    // step 3: interleave the first half with second half
    let first = head,
        second = prev;
    while (second) {
        tmp = first.next;
        first.next = second;
        second = second.next;
        first.next.next = tmp;
        first = tmp;
    }
};
