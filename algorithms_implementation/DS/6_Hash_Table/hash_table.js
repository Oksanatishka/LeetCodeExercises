// Hash Tables depend on hash functions to save and locate data.

// In terms of efficiency, Linked Lists are most optimal for recording and storing of data,
// while Hash Tables are most performant for searching and retrieving of data.

// A JavaScript object is a hash table, as it stores key-value pairs.

class HashTable {
    constructor(size) {
        this.size = size;
        this.storage = [];
    }
    insert(key, value) {
        const index = this.myHashingFunction(key, this.size);
        if (!this.storage[index]) {
            this.storage[index] = [];
        }
        this.storage[index].push([key, value]);
    }

    remove(key) {
        // first we get the index of our key
        // remember, the hashing function will always return the same index for the same key
        const index = this.myHashingFunction(key, this.size);
        // remember we could have more than one array at an index (unlikely)
        let arrayAtIndex = this.storage[index];
        if (arrayAtIndex) {
            for (let i = 0; i < arrayAtIndex.length; i++) {
                let pair = arrayAtIndex[i];

                if (pair[0] === key) {
                    delete arrayAtIndex[i];

                    break;
                }
            }
        }
    }

    get(key) {
        const index = this.myHashingFunction(key, this.size);
        let arrayAtIndex = this.storage[index];
        if (arrayAtIndex) {
            for (let i = 0; i < arrayAtIndex.length; i++) {
                const pair = arrayAtIndex[i];
                if (pair[0] === key) {
                    // return the value
                    return pair[1];
                }
            }
        }
    }

    myHashingFunction(str, n) {
        let sum = 0;
        for (let i = 0; i < n; i++) {
            sum += str.charCodeAt(i) * 3;
        }
        return sum % n;
    }
}

const myHT = new HashTable(5);
myHT.insert('a', 1);
myHT.insert('b', 2);
// console.log(myHT);
