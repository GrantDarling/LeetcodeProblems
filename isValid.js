/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let closeToOpen = new Map([[')','('],['}','{'],[']','[']])
    const sArr = s.split("")

    for(let s of sArr) {
        if(closeToOpen.has(s)) {
            if(stack.length !== 0 && closeToOpen.get(s) === stack[stack.length -1]) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(s)
        }
    }

    return stack.length !== 0 ? false : true;

};
