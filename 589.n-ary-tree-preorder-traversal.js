/*
 * @lc app=leetcode id=589 lang=javascript
 *
 * [589] N-ary Tree Preorder Traversal
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  // if root is null, return empty result
  if(!root) return []

  // dfs (recursive)
  const dfs = (node) => {
    let res = []
    
    // push current node first
    res.push(node.val)

    // traverse through the children and run dfs on them
    if (node.children?.length) {
      // merge the result of children
      // using concat because our dfs function returns array
      res = res.concat(...node.children.map((v) => dfs(v)))
    }

    return res
  }

  return dfs(root)
}
// @lc code=end
