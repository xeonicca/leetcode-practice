/*
 * @lc app=leetcode id=876 lang=javascript
 *
 * [876] Middle of the Linked List
 */

// @lc code=start
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
var middleNode = function(head) {
  const map = {}
  let order = 0

  if(head.next === null) return head

  const traverse = (node) => {
    if(node === null) {
      return 0
    }
    map[order] = node
    order++
    traverse(node.next)
  }
  traverse(head)

  return map[Math.floor(order/2)]
};
// @lc code=end

