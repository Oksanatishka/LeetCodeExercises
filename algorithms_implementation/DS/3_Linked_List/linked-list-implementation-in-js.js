function LinkedList() {
    var length = 0;
    var head = null;

    var Node = function(element) {
        this.element = element;
        this.next = null;
    };
    this.size = function() {
        return length;
    };
    this.head = function() {
        return head;
    };
    this.add = function() {
        var node = new Node(element);
        if (head === null) {
            head = node;
        } else {
            var currentNode = head;

            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        length++;
    };

    // this.remove
    // this.isEmpty
    // this.indexOf
    // this.elementAt
    // this.addAt
    // this.removeAt
}
