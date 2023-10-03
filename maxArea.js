/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let result = 0;

    let i = 0;
    let j = height.length - 1;
    while(i < j) {
        if(i === j) break;

        let minHeight = Math.min(height[i], height[j])
        result = Math.max(result, minHeight * (j-i))

        if(height[i] === minHeight) i++;
        if(height[j] === minHeight) j--;
    }
    return result
};