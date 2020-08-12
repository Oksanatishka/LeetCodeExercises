// https://medium.com/front-end-weekly/callbacks-promises-and-async-await-ad4756e01d90

// 1) A, B, and C print in a different and random order each time you call printAll!
function printString(string) {
    setTimeout(() => {
        console.log(string);
    }, Math.floor(Math.random() * 100) + 1);
}

function printAll() {
    printString('A');
    printString('B');
    printString('C');
}
printAll();

// 2) fix it with a callback.
function printString(string, callback) {
    setTimeout(() => {
        console.log(string);
        callback();
    }, Math.floor(Math.random() * 100) + 1);
}

function printAll() {
    printString('A', () => {
        printString('B', () => {
            printString('C', () => {});
        });
    });
}
printAll();

// 3) Promises try to fix this nesting problem.
function printString(string) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(string);
            resolve();
        }, Math.floor(Math.random() * 100) + 1);
    });
}

// function printAll() {
//     printString('A')
//         .then(() => {
//             return printString('B');
//         })
//         .then(() => {
//             return printString('C');
//         });
// }
// printAll();

function printAll() {
    printString('A')
        .then(() => printString('B'))
        .then(() => printString('C'));
}
printAll();

// 4) Await makes your asynchronous code look more like synchronous/procedural code.

function printString(string) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(string);
            resolve();
        }, Math.floor(Math.random() * 100) + 1);
    });
}

async function printAll() {
    await printString('A');
    await printString('B');
    await printString('C');
}
printAll();
