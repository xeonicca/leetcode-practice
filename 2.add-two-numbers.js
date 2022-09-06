/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let head = (node = new ListNode(0)),
    sum = 0
  while (l1 !== null || l2 !== null) {
    // add to sum if node is available and advance to next node
    if (l1) {
      sum += l1.val
      l1 = l1.next
    }

    if (l2) {
      sum += l2.val
      l2 = l2.next
    }

    // set the base value of new node
    node.next = new ListNode(sum % 10)
    node = node.next
    // if current sum is greater than 10, our base value for next node starts from 1
    sum = sum > 9 ? 1 : 0
  }

  if (sum > 0) {
    node.next = new ListNode(1)
  }

  // the first node is the dummy node, so we wanna return its next node
  return head.next
}
// @lc code=end
