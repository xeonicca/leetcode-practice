/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const buildNode = (list) => {
    if(!list.length) return null
    const mid = Math.floor(list.length / 2)

    const node = new TreeNode(list[mid])
    node.left = buildNode(list.slice(0, mid))
    node.right = buildNode(list.slice(mid + 1, list.length))

    return node
  }

  return buildNode(nums)
}
// @lc code=end
