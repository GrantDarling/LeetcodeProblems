/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let seen = new Map();

    let i = 0;
    while(i < nums.length) {
        let diff = target - nums[i];

        if(seen.has(diff)) {
            return [seen.get(diff), i]
        } else {
            seen.set(nums[i], i)
        }
        i++;
    }
};