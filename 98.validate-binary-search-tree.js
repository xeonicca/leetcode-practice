/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
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
 * @return {boolean}
 */
var isValidBST = function(root) {
  // since all subtree nodes has to be smaller or greater than the root
  // we define two params to keep track of min/max value 
  const dfs = (node, min, max) => {
    if (node === null) return true

    // basic binary search tree check
    if(node.val <= min || node.val >= max) {
      return false
    }

    // the left subtree should be between the current min and root
    // the right subtree should be between root and current max
    // we keep passing down min max values
    return dfs(node.left, min, node.val) && 
           dfs(node.right, node.val, max)
  }
  
  // in the initial call, we give infinity values as initial boundaries
  return dfs(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)
};
// @lc code=end

