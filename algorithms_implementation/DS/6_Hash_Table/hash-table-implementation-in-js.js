// hash f-n
var hash = (string, max) => {
    var hash = 0;
    for (var i = 0; i < string.length; i++) {
        hash += string.charCodeAt(i);
    }
    return hash % max;
};
// hast table f-n
let HashTable = function() {
    let storage = [];
    const storageLimit = 4;

    this.print = function() {
        console.log(storage);
    };
    this.add = function(key, value) {
        var index = hash(key, storageLimit);
        if (storage[index] == underfined) {
            storage[index] = [[key, value]];
        } else {
            var inserted = false;
            for (var i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    storage[index][i][1] = value;
                    inserted = true;
                }
            }
            if (inserted === false) {
                storage[index].push([key, value]);
            }
        }
    };

    // this.remove
    // this.lookup
};

let ht = new HashTable();
ht.add('beue', 'person');
// console.log(ht.lookup('tux'));
ht.print();
