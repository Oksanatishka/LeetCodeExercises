/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

// Approach
//  O(1) Space
var merge = function (intervals) {
    intervals.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));

    for (let i = 0; i < intervals.length - 1; i++) {
        const [start1, end1] = intervals[i];
        const [start2, end2] = intervals[i + 1];

        if (start2 <= end1) {
            const newInterval = [Math.min(start1, start2), Math.max(end1, end2)];
            intervals.splice(i, 2, newInterval);
            i--;
        }
    }
    return intervals;
};

// Approach: using MinHeap //  MinHeap class is a bit different from mine

class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp(this.size() - 1);
    }

    bubbleUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);

            if (this.heap[parentIndex][1] < this.heap[index][1]) break;

            this.swap(parentIndex, index);
            index = parentIndex;
        }
    }

    peek() {
        if (this.size() == 0) return;
        else this.heap[0];
    }

    poll() {
        let min = this.heap[0];
        let last = this.heap.pop();
        if (this.size() !== 0) {
            this.heap[0] = last;
            this.bubbleDown(0);
        }
        return min;
    }

    bubbleDown(index) {
        let left = 2 * index + 1,
            right = 2 * index + 2;
        let min = index;

        if (left < this.size() && this.heap[left][1] < this.heap[min][1]) min = left;

        if (right < this.size() && this.heap[right][1] < this.heap[min][1]) min = right;

        if (min !== index) {
            this.swap(min, index);
            this.bubbleDown(min);
        }
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    size() {
        return this.heap.length;
    }
}

var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let minHeap = new MinHeap();
    let result = [];
    if (intervals.length > 0) minHeap.insert(intervals[0]);

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= minHeap.heap[0][1]) {
            let temp = minHeap.poll();
            temp[1] = Math.max(intervals[i][1], temp[1]);
            minHeap.insert(temp);
        } else {
            result.push(minHeap.poll());
            minHeap.insert(intervals[i]);
        }
    }

    while (minHeap.size() !== 0) result.push(minHeap.poll());
    return result;
};

console.log(
    merge([
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
    ])
); // [[1,6],[8,10],[15,18]]
console.log(
    merge([
        [1, 4],
        [4, 5],
    ])
); // [[1,5]]
