/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    let operators = {
        '+': (a,b) => a+b,
        '-': (a,b) => b-a,
        '*': (a,b) => a*b,
        '/': (a,b) => b/a >= 0 ? Math.floor(b/a) : Math.ceil(b/a),
    }

    for(let token of tokens) {
        if(operators[token]) {
            const a = stack.pop();
            const b = stack.pop();
            stack.push(operators[token](a,b))
        } else {
            stack.push(Number(token))
        }
    }
    return stack.pop()
};