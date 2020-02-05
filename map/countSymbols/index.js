// посчитать количество уникальных символов в строке
function countSymbols(string) {
    const map = new Map();

    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        let newValue = 1;

        if (map.has(char)) {
            newValue += map.get(char);
        }
        map.set(char, newValue);
    }
    return map;
}

console.log(countSymbols('aabbfff'));

// О(1)
