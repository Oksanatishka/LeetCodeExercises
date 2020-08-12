// solution using regex
var validIPAddress = function (IP) {
    const ipv4 = /^((\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.){4}$/;
    const ipv6 = /^([\da-f]{1,4}:){8}$/i;
    return ipv4.test(IP + '.') ? 'IPv4' : ipv6.test(IP + ':') ? 'IPv6' : 'Neither';
};

// solution without regex
var validIPAddress = function (IP) {
    var num;
    var parts;
    var code;

    if (IP.includes('.')) {
        parts = IP.split('.');

        if (parts.length !== 4) {
            return 'Neither';
        }

        for (var i = 0; i < 4; i++) {
            if (!parts[i] || (num = +parts[i]) < 0 || num > 255 || num.toString() !== parts[i]) {
                return 'Neither';
            }
        }

        return 'IPv4';
    } else if (IP.includes(':')) {
        parts = IP.split(':');

        if (parts.length !== 8) {
            return 'Neither';
        }

        for (var i = 0; i < 8; i++) {
            if (!parts[i] || parts[i].length > 4) {
                return 'Neither';
            }

            for (var j = 0; j < parts[i].length; j++) {
                code = parts[i][j].charCodeAt();
                if (
                    ((code > 47 && code < 58) ||
                        (code > 96 && code < 103) ||
                        (code > 64 && code < 71)) === false
                ) {
                    return 'Neither';
                }
            }
        }

        return 'IPv6';
    }

    return 'Neither';
};

// -------------------------------------------------------------
var isValidIPV4 = function (str) {
    const octet = '(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)';
    const regex = new RegExp(`^${octet}\\.${octet}\\.${octet}\\.${octet}$`);
    return regex.test(str);
};

var isValidIPV6 = function (str) {
    const pattern = '[0-9a-fA-F]{1,4}';
    const regex = new RegExp(
        `^${pattern}:${pattern}:${pattern}:${pattern}:${pattern}:${pattern}:${pattern}:${pattern}$`
    );
    return regex.test(str);
};

var validIPAddress = function (IP) {
    return isValidIPV4(IP) ? 'IPv4' : isValidIPV6(IP) ? 'IPv6' : 'Neither';
};
