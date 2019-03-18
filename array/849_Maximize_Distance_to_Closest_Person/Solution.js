/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
    var distanceToLeft = 0;
    var distanceToRight = 0;
    var distTR = 0;
    var distTL = 0;
    // var result;
    for (var i = 0; i < seats.length; i++) {
        var countOfmptySeats = 0;

        for (var k = i + 1; k < seats.length; k++) {
            if (seats[0] == 0) {
                // countOfmptySeats = 1;
                if (seats[k] == 0) {
                    countOfmptySeats++;
                } else {
                    distanceToRight = k;
                    if (distanceToRight > distTR) {
                        distTR = distanceToRight;
                    }
                    break;
                }
                return distTR;
                // console.log('countOfmptySeats--- ', countOfmptySeats);
                // console.log('distanceToRight-- ', distanceToRight);
                // console.log('distTR-- ', distTR);
                // console.log('distanceToLeft ', distanceToLeft);
                // console.log('distanceToRight ', distanceToRight);
            }
            if (seats[i] == 1) {
                if (seats[k] == 0) {
                    countOfmptySeats++;
                    distanceToLeft = k - i;
                    // console.log('* distanceToLeft', distanceToLeft);
                    if (distanceToLeft > distTL) {
                        distTL = distanceToLeft;
                        // console.log('** distTL', distTL);
                    }
                    for (var g = k; g < seats.length; g++) {
                        if (seats[g] == 1) {
                            distanceToRight = g - k;
                            if (distanceToRight > distTR) {
                                distTR = distanceToRight;
                                // console.log('*** distTR', distTR);
                            }
                            if (distanceToLeft == distanceToRight) {
                                // console.log('**** k', k);
                                return distanceToLeft;
                            }

                            if (
                                distanceToLeft == distanceToRight + 1 ||
                                distanceToLeft + 1 == distanceToRight
                            ) {
                                // console.log('*****');
                                return distanceToLeft;
                            }
                            break;
                        }
                    }
                } else {
                    break;
                }
                // console.log('distanceToLeft ', distanceToLeft);
                // console.log('distanceToRight ', distanceToRight);
            }
            // console.log('countOfmptySeats ', countOfmptySeats);
        }
    }

    if (distTL == 0) {
        return distTR;
        // console.log('*-');
    }
    if (distTR == 0) {
        return distTL;
        // console.log('*-*-');
    }
};

console.log(maxDistToClosest([1, 0, 0, 0, 1, 0, 1])); // 2
console.log(maxDistToClosest([1, 0, 0, 0])); // 3
console.log(maxDistToClosest([0, 1])); // 1
console.log(maxDistToClosest([1, 0, 0, 1])); // 1
console.log(maxDistToClosest([1, 1, 0, 1, 1])); // 1
console.log(maxDistToClosest([0, 0, 1, 0, 1, 1])); // 2
