/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const rows = grid.length,
    cols = grid[0].length

  let res = 0

  const bfs = (r, c) => {
    const q = []
    const directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ]

    // add current poisition in to queue
    // acting as starting position
    grid[r][c] = '0'
    q.push([r, c])

    while (q.length) {
      const [rr, cc] = q.shift()
      // mark all adjacent islands
      for (let i = 0; i < directions.length; i++) {
        const [dr, dc] = directions[i]
        let row = rr + dr,
          col = cc + dc

        if (
          row >= 0 &&
          row < rows &&
          col >= 0 &&
          col < cols &&
          grid[row][col] === '1'
        ) {
          grid[row][col] = '0'
          // if adjacent node is island, add to queue to mark
          q.push([row, col])
        }
      }
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // if the element is land, we know we found an island regardless of its size
      if (grid[r][c] === '1') {
        // mark all adjacent islands to water as they are already counted
        bfs(r, c)
        // increase number of islands by 1
        res += 1
      }
    }
  }

  return res
}
// @lc code=end
