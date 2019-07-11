/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let resultArr = [];
    for (let i = 0; i < emails.length; i++) {
        let validEmail = [];
        let part1 = emails[i].match(/\S+@/);
        let part2 = emails[i].match(/@\S+\.\S+/);

        // console.log('part1[0] ', part1[0]);
        // console.log('part2 ', part2);
        for (let j = 0; j < part1[0].length - 1; j++) {
            // console.log('part1[0][j] ', part1[0][j]);
            if (part1[0][j] == '.') {
                continue;
            }
            if (part1[0][j].match(/\w/)) {
                validEmail.push(part1[0][j]);
                // console.log('validEmail ', validEmail);
            }

            if (part1[0][j] == '+') {
                break;
            }
        }
        resultArr.push(validEmail.join('').concat(part2[0]));
    }

    let hashMap = {};
    for (let i = 0; i < resultArr.length; i++) {
        hashMap[resultArr[i]] = hashMap[resultArr[i]] ? ++hashMap[resultArr[i]] : 1;
    }

    return Object.keys(hashMap).length;
};

console.log(
    numUniqueEmails([
        'test.email+alex@leetcode.com',
        'test.e.mail+bob.cathy@leetcode.com',
        'testemail+david@lee.tcode.com'
    ])
); // 2    "testemail@leetcode.com" and "testemail@lee.tcode.com"
