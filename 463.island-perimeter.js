/*
 * @lc app=leetcode id=463 lang=javascript
 *
 * [463] Island Perimeter
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  const row = grid.length,
    col = grid[0].length,
    visited = {}

  const dfs = (r, c) => {
    // if cord is out of bound, it is considered a boundary
    if (r < 0 || r >= row || c < 0 || c >= col) {
      return 1
    }

    // if cord is not an island, it is also considered a boundary
    if(grid[r][c] == 0) {
      return 1
    }

    // if cord is visited, return 0
    if(visited[`${r},${c}`]) {
      return 0
    } else {
      visited[`${r},${c}`] = 1
    }

    // do a dfs on all neighboring cell
    let res = 0
    res += dfs(r + 1, c)
    res += dfs(r - 1, c)
    res += dfs(r, c + 1)
    res += dfs(r, c - 1)

    return res
  }

  // find the first encountered island and start dfs
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] == 1) {
        return dfs(i, j)
      }
    }
  }
}
// @lc code=end
