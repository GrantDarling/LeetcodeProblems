/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const sortedStrs = strs.map(str => str.split("").sort().toString());

    let anagrams = new Map();
    let i =0;
    while(i<strs.length) {
        const word = sortedStrs[i];

        if(anagrams.has(word)) {
            anagrams.set(word, `${anagrams.get(word)} ${strs[i]}`)
        } else {
            anagrams.set(word, strs[i])
        }

        i++;
    }

    let result = []
    for (let [key, words] of anagrams) {
        result.push(words.split(" "))
    }

    return result
};