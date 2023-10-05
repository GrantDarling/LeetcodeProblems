/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// recursive
const reverseListRecursive = function(head) {
    if (head == null || head.next == null) return head;

    const result = reverseListRecursive(head.next);
    head.next.next = head;
    head.next = null;
    return result;
};

class ListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

// iterative
const reverseListIterator = function(head) {
    let prev = null;
    let curr = head;
    let next;

    // null->1->2->3->4->null
    while(curr) {
        next = curr.next;
        curr.next = prev; // null
        prev = curr; // 1

        curr = next; // null
    }
}


let node1 = new ListNode(1)
let node2 = new ListNode(2)
let node3 = new ListNode(3)
let node4 = new ListNode(4)
let node5 = new ListNode(5)
let node6 = new ListNode(6)
let node7 = new ListNode(7)
let node8 = new ListNode(8)
let node9 = new ListNode(9)
node1.next = node2
/*node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node6
node6.next = node7
node7.next = node8
node8.next = node9*/

const answer = reverseListRecursive(node1)
console.log(answer)