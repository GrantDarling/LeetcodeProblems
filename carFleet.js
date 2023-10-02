/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    const pair = position.map((pos, idx) => [pos, speed[idx]]);

    const stack = [];
    pair.sort((positionA, positionB) => positionA[0] - positionB[0]);

    for (let i = pair.length - 1; i >= 0; i--) {
        const [pos, speed] = pair[i];
        stack.push((target - pos) / speed)
        if(stack.length >= 2 && stack[stack.length-1] <= stack[stack.length-2]){
            stack.pop()
        }
    }

    return stack.length;
};