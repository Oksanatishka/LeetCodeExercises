/**
 * @param {number[][]} intervals
 * @return {number}
 */

// Approach 1: Priority Queues (Min-Heap DS)

// Sort:
// Instead of manually iterating on every room that's been allocated and checking if the room is available or not,
// we can keep all the rooms in a min heap where the
//      key for the min heap would be the ending time of meeting.
// So, every time we want to check if any room is free or not, simply check the topmost element of the min heap
// as that would be the room that would get free the earliest out of all the other rooms currently occupied.

// Algorithm
// 1.Sort the given meetings by their start time.
// 2.Initialize a new min-heap and add the first meeting's ending time to the heap. We simply need to keep track of the ending times as that tells us when a meeting room will get free.
// 3.For every meeting room check if the minimum element of the heap i.e. the room at the top of the heap is free or not.
// 4.If the room is free, then we extract the topmost element and add it back with the ending time of the current meeting we are processing.
// 5.If not, then we allocate a new room and add it to the heap.
// 6.After processing all the meetings, the size of the heap will tell us the number of rooms allocated. This will be the minimum number of rooms needed to accommodate all the meetings.

// Time Complexity: O(NlogN).   // sorting of the array that takes O(NlogN) && extract-min operation on a heap takes O(logN)
// Space Complexity: O(N) because we construct the min-heap and that can contain N elements in the worst case

var minMeetingRooms = function (intervals) {
    if (intervals.length === 0) return 0; // Check for the base case. If there are no intervals, return 0
    if (intervals.length === 1) return 1;
    intervals.sort((a, b) => a[0] - b[0]); // Sort the intervals by start time
    // console.log('intervals', intervals); // [ [ 0, 30 ], [ 5, 10 ], [ 15, 20 ] ]

    let endTimes = new MinHeap();
    endTimes.add(intervals[0][1]); // Add the first meeting
    // console.log('endTimes[heap] 1', endTimes.heap); // [ null, 30 ]
    // Iterate over remaining intervals
    for (let i = 1; i < intervals.length; i++) {
        // console.log('endTimes[0]', endTimes.heap[1]);
        if (intervals[i][0] >= endTimes.heap[1]) {
            endTimes.popMin();
            // console.log('endTimes[heap] POP', endTimes.heap);
        }
        // console.log('SIZE1', endTimes.size);
        endTimes.add(intervals[i][1]);

        // console.log('endTimes[heap]', endTimes.heap); // [ null, 10, 30 ] -> [ null, 10, 30, 20 ]
        // console.log('SIZE2', endTimes.size);
    }
    return endTimes.size; // [ null, 10, 30, 20 ] надо отнять null
};

class MinHeap {
    constructor() {
        this.heap = [null];
        this.size = 0;
    }
    popMin() {
        if (this.size === 0) {
            return null;
        }
        // console.log(`\n.. Swap ${this.heap[1]} with last element ${this.heap[this.size]}`);
        this.swap(1, this.size);
        const min = this.heap.pop();
        this.size--;
        // console.log(`.. Removed ${min} from heap`);
        // console.log('..', this.heap);
        this.heapify();
        return min;
    }

    add(value) {
        // console.log(`.. adding ${value}`);
        this.heap.push(value);
        this.size++;
        this.bubbleUp();
        // console.log(`added ${value} to heap`, this.heap);
    }

    bubbleUp() {
        let current = this.size;
        while (current > 1 && this.heap[getParent(current)] > this.heap[current]) {
            // console.log(`.. swap ${this.heap[current]} with parent ${this.heap[getParent(current)]}`);
            this.swap(current, getParent(current));
            // console.log('..', this.heap);
            current = getParent(current);
        }
    }

    heapify() {
        let current = 1;
        let leftChild = getLeft(current);
        let rightChild = getRight(current);
        // Check that there is something to swap (only need to check the left if both exist)
        while (this.canSwap(current, leftChild, rightChild)) {
            // Only compare left & right if they both exist
            if (this.exists(leftChild) && this.exists(rightChild)) {
                // Make sure to swap with the smaller of the two children
                if (this.heap[leftChild] < this.heap[rightChild]) {
                    this.swap(current, leftChild);
                    current = leftChild;
                } else {
                    this.swap(current, rightChild);
                    current = rightChild;
                }
            } else {
                // If only one child exist, always swap with the left
                this.swap(current, leftChild);
                current = leftChild;
            }
            leftChild = getLeft(current);
            rightChild = getRight(current);
        }
    }

    exists(index) {
        return index <= this.size;
    }

    canSwap(current, leftChild, rightChild) {
        // Check that one of the possible swap conditions exists
        return (
            (this.exists(leftChild) && this.heap[current] > this.heap[leftChild]) ||
            (this.exists(rightChild) && this.heap[current] > this.heap[rightChild])
        );
    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
}
const getParent = (current) => Math.floor(current / 2);
const getLeft = (current) => current * 2;
const getRight = (current) => current * 2 + 1;

// Approach 2: Chronological Ordering

// Algorithm
// 1.Separate out the start times and the end times in their separate arrays.
// 2.Sort the start times and the end times separately. Note that this will mess up the original correspondence of start times and end times. They will be treated individually now.
// 3.We consider two pointers: s_ptr and e_ptr which refer to start pointer and end pointer. The start pointer simply iterates over all the meetings and the end pointer helps us track if a meeting has ended and if we can reuse a room.
// 4.When considering a specific meeting pointed to by s_ptr, we check if this start timing is greater than the meeting pointed to by e_ptr. If this is the case then that would mean some meeting has ended by the time the meeting at s_ptr had to start. So we can reuse one of the rooms. Otherwise, we have to allocate a new room.
// 5.If a meeting has indeed ended i.e. if start[s_ptr] >= end[e_ptr], then we increment e_ptr.
// 6.Repeat this process until s_ptr processes all of the meetings.

// Time Complexity: O(NlogN) because all we are doing is sorting the two arrays for start timings and end timings individually
// Space Complexity: O(N) because we create two separate arrays of size N

var minMeetingRooms_2 = function (intervals) {
    let startArr = [];
    intervals.map((el) => startArr.push(el[0]));
    startArr.sort((a, b) => a - b);
    let endArr = [];
    intervals.map((el) => endArr.push(el[1]));
    endArr.sort((a, b) => a - b);

    console.log('startArr', startArr);
    console.log('endArr', endArr);
    let k = 0;
    let rooms = 0;
    for (let i = 0; i < startArr.length; i++) {
        if (startArr[i] < endArr[k]) {
            rooms++;
        } else {
            k++;
        }
    }
    return rooms;
};

// TEST 1
console.log(
    minMeetingRooms([
        [5, 8],
        [6, 8],
    ])
); //2
console.log(
    minMeetingRooms([
        [0, 30],
        [5, 10],
        [15, 20],
    ])
); //2
console.log(
    minMeetingRooms([
        [7, 10],
        [2, 4],
    ])
); //1

// TEST 2
// console.log(
//     minMeetingRooms_2([
//         [0, 30],
//         [5, 10],
//         [15, 20],
//     ])
// ); //2
// console.log(
//     minMeetingRooms_2([
//         [7, 10],
//         [2, 4],
//     ])
// ); //1
