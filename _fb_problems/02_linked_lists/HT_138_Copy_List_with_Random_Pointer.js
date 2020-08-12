// Recursive

var copyRandomList = function (head) {
    if (!head) return null;

    let curr = head;
    let copy = new Node(curr.val);
    let map = new Map();
    map.set(curr, copy);
    function getNode(node) {
        if (node) {
            if (!map.get(node)) {
                map.set(node, new Node(node.val));
            }
            return map.get(node);
        } else {
            return null;
        }
    }
    while (curr) {
        copy.random = getNode(curr.random);
        copy.next = getNode(curr.next);
        curr = curr.next;
        copy = copy.next;
    }
    return map.get(head);
};
