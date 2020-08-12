var solution = function (read4) {
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Number of characters to read
     * @return {number} The number of actual characters read
     */
    return function (buf, n) {
        let temp = Array(4),
            total = 0;
        while (total < n) {
            let count = read4(temp);

            // incase input string is longer than n.
            // Let's say your file length is 10, but n = 7, you are not going to fetch 10 and return 10, you have to stop at 7.
            count = Math.min(count, n - total);

            //Transfer all the characters read from Read4 to our buffer
            for (let i = 0; i < count; i++) {
                buf[total] = temp[i];
                total++;
            }
            //  i.e) 'abc' 4 index stuck at 3. last iteration. no more characters to read.
            if (count < 4) {
                break;
            }
        }
        return total;
    };
};
