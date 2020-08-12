/**
 * @param {number} num
 * @return {string}
 */
// Approach: Divide and conquer
// 1. split integer 1234567890 on groups containing not more than three digits 1.234.567.890.
//      1 Billion 234 Million 567 Thousand 890
//      234 -> 2 Hundred 34

// Time complexity : O(N). Intuitively the output is proportional to the number N of digits in the input.
// Space complexity : O(1) since the output is just a string.
var numberToWords = function (num) {
    const one = (num) => {
        switch (num) {
            case 1:
                return 'One';
            case 2:
                return 'Two';
            case 3:
                return 'Three';
            case 4:
                return 'Four';
            case 5:
                return 'Five';
            case 6:
                return 'Six';
            case 7:
                return 'Seven';
            case 8:
                return 'Eight';
            case 9:
                return 'Nine';
        }
        return '';
    };
    const twoLessThan20 = (num) => {
        switch (num) {
            case 10:
                return 'Ten';
            case 11:
                return 'Eleven';
            case 12:
                return 'Twelve';
            case 13:
                return 'Thirteen';
            case 14:
                return 'Fourteen';
            case 15:
                return 'Fifteen';
            case 16:
                return 'Sixteen';
            case 17:
                return 'Seventeen';
            case 18:
                return 'Eighteen';
            case 19:
                return 'Nineteen';
        }
        return '';
    };

    const ten = (num) => {
        switch (num) {
            case 2:
                return 'Twenty';
            case 3:
                return 'Thirty';
            case 4:
                return 'Forty';
            case 5:
                return 'Fifty';
            case 6:
                return 'Sixty';
            case 7:
                return 'Seventy';
            case 8:
                return 'Eighty';
            case 9:
                return 'Ninety';
        }
        return '';
    };

    const two = (num) => {
        if (num == 0) return '';
        else if (num < 10) return one(num);
        else if (num < 20) return twoLessThan20(num);
        else {
            let tenner = Math.floor(num / 10);
            let rest = num - tenner * 10;
            if (rest != 0) return ten(tenner) + ' ' + one(rest);
            else return ten(tenner);
        }
    };
    const three = (num) => {
        let hundred = Math.floor(num / 100);
        let rest = num - hundred * 100;
        let res = '';
        if (hundred * rest != 0) res = one(hundred) + ' Hundred ' + two(rest);
        else if (hundred == 0 && rest != 0) res = two(rest);
        else if (hundred != 0 && rest == 0) res = one(hundred) + ' Hundred';
        return res;
    };

    if (num == 0) return 'Zero';

    let billion = Math.floor(num / 1000000000); // 9 zeros
    let million = Math.floor((num - billion * 1000000000) / 1000000); // 6 zeros
    let thousand = Math.floor((num - billion * 1000000000 - million * 1000000) / 1000);
    let rest = num - billion * 1000000000 - million * 1000000 - thousand * 1000;

    let result = '';
    if (billion != 0) result = three(billion) + ' Billion';
    if (million != 0) {
        if (result.length > 0) result += ' ';
        result += three(million) + ' Million';
    }
    if (thousand != 0) {
        if (result.length > 0) result += ' ';
        result += three(thousand) + ' Thousand';
    }
    if (rest != 0) {
        if (result.length > 0) result += ' ';
        result += three(rest);
    }
    return result;
};

// Approach(1): using Hash Map + recursion
var numberToWords_1 = function (num) {
    if (num === 0) {
        return 'Zero';
    }

    if (num <= 20) {
        return translations.get(num);
    }

    let result = [];

    for (let [value, translation] of translations) {
        const times = Math.floor(num / value);

        if (times === 0) {
            continue;
        }

        num -= times * value;

        if (times === 1 && value >= 100) {
            result.push('One', translation);
            continue;
        }

        if (times === 1) {
            result.push(translation);
            continue;
        }

        result.push(numberToWords(times), translation);
    }

    return result.join(' ');
};

const translations = new Map([
    [1000000000, 'Billion'],
    [1000000, 'Million'],
    [1000, 'Thousand'],
    [100, 'Hundred'],
    [90, 'Ninety'],
    [80, 'Eighty'],
    [70, 'Seventy'],
    [60, 'Sixty'],
    [50, 'Fifty'],
    [40, 'Forty'],
    [30, 'Thirty'],
    [20, 'Twenty'],
    [19, 'Nineteen'],
    [18, 'Eighteen'],
    [17, 'Seventeen'],
    [16, 'Sixteen'],
    [15, 'Fifteen'],
    [14, 'Fourteen'],
    [13, 'Thirteen'],
    [12, 'Twelve'],
    [11, 'Eleven'],
    [10, 'Ten'],
    [9, 'Nine'],
    [8, 'Eight'],
    [7, 'Seven'],
    [6, 'Six'],
    [5, 'Five'],
    [4, 'Four'],
    [3, 'Three'],
    [2, 'Two'],
    [1, 'One'],
]);
// Approach(2): using Hash Map + recursion
var numberToWords_2 = function (num) {
    const map19 = [
        null,
        'One',
        'Two',
        'Three',
        'Four',
        'Five',
        'Six',
        'Seven',
        'Eight',
        'Nine',
        'Ten',
        'Eleven',
        'Twelve',
        'Thirteen',
        'Fourteen',
        'Fifteen',
        'Sixteen',
        'Seventeen',
        'Eighteen',
        'Nineteen',
    ];
    const mapDozens = [
        null,
        null,
        'Twenty',
        'Thirty',
        'Forty',
        'Fifty',
        'Sixty',
        'Seventy',
        'Eighty',
        'Ninety',
    ];
    const map = {
        '10e8': 'Billion',
        '10e5': 'Million',
        '10e2': 'Thousand',
        '10e1': 'Hundred',
    };

    function word(n) {
        if (n === 0) return [];
        if (n <= 19) return [map19[n]];
        if (n <= 99) return [mapDozens[Math.trunc(n / 10)], ...word(n % 10)];
        for (const div of Object.keys(map)) {
            if (Math.trunc(n / div) > 0) {
                return [...word(Math.trunc(n / div)), map[div], ...word(n % div)];
            }
        }
    }

    return word(num).join(' ') || 'Zero';
};

// Approach(3): using Hash Map + recursion (short)
const belowTen = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
const belowTwenty = [
    'Ten',
    'Eleven',
    'Twelve',
    'Thirteen',
    'Fourteen',
    'Fifteen',
    'Sixteen',
    'Seventeen',
    'Eighteen',
    'Nineteen',
];
const belowHundred = [
    '',
    'Ten',
    'Twenty',
    'Thirty',
    'Forty',
    'Fifty',
    'Sixty',
    'Seventy',
    'Eighty',
    'Ninety',
];

var numberToWords_3 = function (num) {
    if (num === 0) return 'Zero';
    return helper(num);
};

const helper = (num) => {
    let result = '';

    if (num < 10) result = belowTen[num];
    else if (num < 20) result = belowTwenty[num - 10];
    else if (num < 100) result = belowHundred[Math.floor(num / 10)] + ' ' + helper(num % 10);
    else if (num < 1000) result = belowTen[Math.floor(num / 100)] + ' Hundred ' + helper(num % 100);
    else if (num < 10000)
        result = belowTen[Math.floor(num / 1000)] + ' Thousand ' + helper(num % 1000);
    else if (num < 1000000)
        result = helper(Math.floor(num / 1000)) + ' Thousand ' + helper(num % 1000);
    else if (num < 1000000000)
        result = helper(Math.floor(num / 1000000)) + ' Million ' + helper(num % 1000000);
    else if (num < 1000000000000)
        result = helper(Math.floor(num / 1000000000)) + ' Billion ' + helper(num % 1000000000);

    return result.trim();
};
// TESTS
console.log(numberToWords(123)); //"One Hundred Twenty Three"
console.log(numberToWords(12345)); //"Twelve Thousand Three Hundred Forty Five"
console.log(numberToWords(1234567)); //"One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
console.log(numberToWords(1234567891)); //"One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"
