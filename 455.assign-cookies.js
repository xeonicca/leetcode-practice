/*
 * @lc app=leetcode id=455 lang=javascript
 *
 * [455] Assign Cookies
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  // sort the array first so we may use two pointer approach
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)

  let count = 0
  for (let i = 0; i < s.length; i++) {
    // if current child can be satisfied, we move on to next child
    if (g[count] <= s[i]) {
      count++
    }
  }

  return count
}
// @lc code=end
