/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
    const results = []
    nums = nums.sort((a, b) => a - b)
    let target = 0

    if (nums.length < 3) return results

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > target) break
        if (i > 0 && nums[i] === nums[i - 1]) continue
        let j = i + 1
        let k = nums.length - 1

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k]
            if (sum === target) {
                results.push([nums[i], nums[j], nums[k]])

                while (nums[j] === nums[j + 1]) j++
                while (nums[k] === nums[k - 1]) k--

                j++
                k--
            }
            if(sum < target) j++
            if(sum > target) k--
        }
    }
    return results
};