/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const sReverse = s.split("").reverse().join("").toLowerCase().replace(/\s/g, '').replace(/[^0-9a-z]/gi, '');
    const sFiltered = s.toLowerCase().replace(/\s/g, '').replace(/[^0-9a-z]/gi, '')
    return sFiltered === sReverse ? true: false
};