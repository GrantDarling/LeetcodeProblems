/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var top = function(a) {
    return a[a.length - 1];
}

var dailyTemperatures = function(temperatures) {
    let result = new Array(temperatures.length).fill(0);
    let stack = [];

    for(let i=0;i<temperatures.length;i++) {
        while(stack.length && temperatures[i] > temperatures[top(stack)]) {
            let idx = stack.pop();
            result[idx] = (i - idx)
        }
        stack.push(i)
    }
    return result
};