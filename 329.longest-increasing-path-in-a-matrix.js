/*
 * @lc app=leetcode id=329 lang=javascript
 *
 * [329] Longest Increasing Path in a Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  const rows = matrix.length,
    cols = matrix[0].length
  let cache = {}

  const dfs = (r, c, prev) => {
    if (r < 0 || r >= rows || c < 0 || c >= cols || prev >= matrix[r][c]) {
      return 0
    }

    if (typeof cache[`${r},${c}`] !== 'undefined') {
      return cache[`${r},${c}`]
    }

    const curr = matrix[r][c]
    const res =
      1 + Math.max(dfs(r, c + 1, curr), dfs(r, c - 1, curr),
      dfs(r - 1, c, curr),
      dfs(r + 1, c, curr))

    cache[`${r},${c}`] = res

    return res
  }

  let res = 0
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      res = Math.max(res, dfs(r, c, -1))
    }
  }
  cache = null
  return res
}
// @lc code=end
