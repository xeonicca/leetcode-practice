/*
 * @lc app=leetcode id=142 lang=javascript
 *
 * [142] Linked List Cycle II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  // floyd algorithm, just like no.287

  // create two pointers, slow advance by 1, fast advance by 2
  let slow = (fast = head)

  // while theres node for fast pointer to advance
  while (fast !== null && fast.next !== null) {
    // advance both pointer
    slow = slow.next
    fast = fast.next.next

    // when they intersect, we know there is a cycle
    if (slow == fast) break
  }

  // if the while loop break when theres no node to advance
  // we can assume that we reach the end of linked list
  // so there is no cycle
  if (fast == null || fast.next == null) {
    return null
  }

  // reset the slow pointer (or fast pointer, dont matter) to head
  slow = head

  // floyd algorithm: find the node when two pointers meet
  // that is where the cycle begins
  while (slow != fast) {
    slow = slow.next
    fast = fast.next
  }

  return slow
}
// @lc code=end
