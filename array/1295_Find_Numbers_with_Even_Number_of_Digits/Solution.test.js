/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        let len = nums[i].toString().split('').length;

        if (len % 2 == 0) {
            result++;
        }
    }
    return result;
};

// экспорты для внешнего файла с тестами
export default findNumbers;
export { findNumbers }; // экспорт многих ф-й/переменных/классов из файла

// console.log(findNumbers([12, 345, 2, 6, 7896])); // 2
// console.log(findNumbers([555, 901, 482, 1771])); // 1

test('my test', () => {
    expect(findNumbers([12, 345, 2, 6, 7896])).toEqual(2);
    expect(findNumbers([555, 901, 482, 1771])).toEqual(1);
});
