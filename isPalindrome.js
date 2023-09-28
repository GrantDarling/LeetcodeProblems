/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const sArr = s.replace(/[^0-9a-z]/gi, '').toLowerCase().split("")
    for(let i=0;i<sArr.length;i++) {
        const reverseCurrPos = [sArr.length - 1 - i];
        if(sArr[reverseCurrPos] !== sArr[i])
            return false
    }
    return true
};