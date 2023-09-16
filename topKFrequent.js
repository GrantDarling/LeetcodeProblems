/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let numbers = {}
    for(let i = 0; i < nums.length; i++) {
        if(numbers[nums[i]]) {
            numbers[nums[i]]++
        } else {
            numbers[nums[i]] = 1
        }
    }

    let array = Object.entries(numbers).sort((a,b) => {
        return a[1] - b[1]
    })

    let result = []
    while(result.length != k) {
        result.push(array.pop()[0])
    }
    return result
};
