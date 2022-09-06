/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
 */

// @lc code=start
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return []

  // set initial node
  let queue = [root],
    res = []

  // while there are nodes to traverse 
  while (queue.length) {
    // collect values for this level
    let level = []
    // temp queue
    const q = []

    // we are visiting all nodes on same level
    for (let i = 0; i < queue.length; i++) {
      // add current value
      level.push(queue[i].val)

      // if this node has children, push them to temp queue
      if (queue[i].left) q.push(queue[i].left)
      if (queue[i].right) q.push(queue[i].right)
    }

    // we visited all nodes in previous queue, replace it with new queue
    queue = q

    // add current level values to result
    level.length && res.push(level)
  }

  return res
}
// @lc code=end
