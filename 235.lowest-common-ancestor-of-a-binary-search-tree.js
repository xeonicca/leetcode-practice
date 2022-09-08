/*
 * @lc app=leetcode id=235 lang=javascript
 *
 * [235] Lowest Common Ancestor of a Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  const dfs = (node) => {
    // if both values are less than current node, we go left
    // otherwise we go right
    // if current value happens to be one of p and q, we found the node
    if (node.val > p.val && node.val > q.val) {
      return dfs(node.left)
    } else if (node.val < p.val && node.val < q.val) {
      return dfs(node.right)
    }

    return node
  }

  return dfs(root)
}
// @lc code=end
