/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let node2 = new TreeNode(2,4,5);
let node3 = new TreeNode(3,null,null);
let node1 = new TreeNode(1,node2,node3);

var diameterOfBinaryTree = function(root) {
    let diameter = 0;

    dfs(root);

    return diameter;

    function dfs(node) {
        if (!node) return 0;

        const left = dfs(node.left);
        const right = dfs(node.right);

        diameter = Math.max(diameter, left + right);

        return 1 + Math.max(left, right);
    }
};

console.log(diameterOfBinaryTree(node1))