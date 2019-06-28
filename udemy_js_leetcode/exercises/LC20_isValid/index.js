const isValid = s => {
    // 1. Use stack data structure
    let stack = [];
    // 2. Create hash map
    let hashMap = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    // 3. Iterate through string
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (hashMap[char]) {
            stack.push(char);
        } else {
            let topOfStack = stack[stack.length - 1];
            char === hashMap[topOfStack] ? stack.pop() : stack.push(char);
        }
    }
    return stack.length === 0;
};

module.exports = isValid;
