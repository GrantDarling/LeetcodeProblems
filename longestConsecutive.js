/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const numSet = new Set(nums);
    let longest = 0;

    for (let num of nums) {
        if(!numSet.has(num - 1)) {
            let length = 0;
            while(numSet.has(num+length)) {
                length++;
            }
            longest = Math.max(longest, length);
        }
    }
    return longest
};