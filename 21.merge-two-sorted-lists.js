/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // create a dummy node "temp" to hold the first node
  // also create a tail node to keep track of current node
  let temp = (tail = new ListNode())

  // while iteration is done, one of list1 and list2 will be empty
  while (list1 && list2) {
    // determine which list goes to tail
    if (list1.val <= list2.val) {
      tail.next = list1
      list1 = list1.next
    } else {
      tail.next = list2
      list2 = list2.next
    }

    // always advance to next node
    tail = tail.next
  }

  // one of the list may still be not empty,
  // link the rest of node to current node
  if (list1) {
    tail.next = list1
  } else {
    tail.next = list2
  }

  return temp.next
}
// @lc code=end
