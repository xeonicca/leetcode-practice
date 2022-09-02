/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
// iterative solution
// var reverseList = function(head) {
//   let prev = null, curr = head
//   while (curr !== null) {
//     let next = curr.next
//     curr.next = prev
//     prev = curr
//     curr = next
//   }

//   return prev
// };

// recursive solution 1
// var reverseList = function (head) {
//   const reverse = (prev, curr) => {
//     // if current node is not null
//     if (curr !== null) {
//       // keep the next node so we can advance
//       let next = curr.next
//       // reset current node to prev node
//       curr.next = prev

//       // now prev node is curr, and next node is curr.next
//       return reverse(curr, next)
//     } else {
//       // if there is no next node, we are at the end
//       // just return prev
//       return prev
//     }
//   }

//   return reverse(null, head)
// }

// recursive solution 2
var reverseList = function (head) {
  // if list is empty or next node is empty
  if (head === null || head.next === null) return head
  // keep calling until we reach the last node
  // reverseHead will be the first node in the reversed linked list
  let reverseHead = reverseList(head.next)

  // head is now at the node before reverseHead
  // so we want the next node's next points to head
  // 4 -> 5 -> null
  // 4 <- 5
  head.next.next = head
  // null <- 4 <- 5
  head.next = null

  // in the previous call stack
  // head will be 3, since 3.next is 4, after reversal
  // null <- 3 <- 4 <- 5
  return reverseHead
}
// @lc code=end

