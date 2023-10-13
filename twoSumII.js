/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let i = 0;
    let j = numbers.length - 1;
    let answer;
    while(true) {
        answer = numbers[i] + numbers[j];
        if(answer > target) j--;
        if(answer < target) i++;
        if(answer === target)
            return [i+1, j+1]
    }
};