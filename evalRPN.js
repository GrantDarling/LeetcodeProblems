/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];

    for (let token of tokens) {
        if(token === '+') {
            stack.push(stack.pop() + stack.pop())
        }else if(token === '-') {
            const a = stack.pop()
            const b = stack.pop()
            stack.push(b - a)
        }else if(token === '*') {
            stack.push(stack.pop() * stack.pop())
        }else if(token === '/') {
            const a = stack.pop()
            const b = stack.pop()
            const result = (b / a) >= 0 ? Math.floor(b / a) : Math.ceil(b / a)
            stack.push(result)
        } else {
            stack.push(Number(token))
        }
    }

    return stack.pop()
};