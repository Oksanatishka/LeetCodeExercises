function isPalindrome(s) {
    // 1. Make code case insensitive.
    // /W matches all non-alphanumeric characters, _ for underscore, /g close regular expression
    const sanitized = s.toLowerCase().replace(/[\W_]+/g, '');

    return (
        sanitized ===
        sanitized
            .split('')
            .reverse()
            .join('')
    );
}

module.exports = isPalindrome;
