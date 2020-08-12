/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
    // let output = [];
    // for (let i = 0; i < accounts.length; i++) {
    //     let name = accounts[i][0]; // 'John'
    //     let obj = {};
    //     for (let j = 1; j < accounts.length; j++) {
    //         obj[accounts[i][j]] = obj[accounts[i][j]] ? obj[accounts[i][j]] + 1 : 1;
    //         if (name === accounts[i][j]) {
    //         }
    //     }
    // }
    // return output;
};

let input1 = [
    ['John', 'johnsmith@mail.com', 'john00@mail.com'],
    ['John', 'johnnybravo@mail.com'],
    ['John', 'johnsmith@mail.com', 'john_newyork@mail.com'],
    ['Mary', 'mary@mail.com'],
];
console.log(accountsMerge(input1)); // [["John", 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com'],  ["John", "johnnybravo@mail.com"], ["Mary", "mary@mail.com"]]
