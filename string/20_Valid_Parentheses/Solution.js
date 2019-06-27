/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // 1. Emulate stack behaviour using an array
    let stack = [];
    // 2. Create hash table
    let hashMap = { '(': ')', '{': '}', '[': ']' };
    // 3. Loop through the input string
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (hashMap[char]) {
            stack.push(char);
        } else {
            const topOfStack = stack[stack.length - 1];
            char === hashMap[topOfStack] ? stack.pop() : stack.push(char);
        }
    }

    return stack.length === 0;
};

console.log(isValid('()')); //true
console.log(isValid('()[]{}')); //true
console.log(isValid('(]')); //false
console.log(isValid('([)]')); //false
console.log(isValid('{[]}')); //true
