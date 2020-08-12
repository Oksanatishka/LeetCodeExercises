/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {
    // date.getMonth() returns an index ranging from 0 to 11. January is 0. If you create a new date()-object and you want to get information about a custom date not the current one you have to decrease only the month by 1.
    let date = new Date(year, month - 1, day);
    let answer = date.getDay();
    let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return weekday[answer];
};

console.log(dayOfTheWeek(31, 8, 2019)); // "Saturday"
console.log(dayOfTheWeek(18, 7, 1999)); // "Sunday"
