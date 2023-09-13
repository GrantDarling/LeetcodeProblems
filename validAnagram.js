/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let word1 = s.split("").sort();
    let word2 = t.split("").sort();

    if(word1.toString() === word2.toString()) {
        return true;
    }
    return false;
};