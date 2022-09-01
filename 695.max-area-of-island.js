/*
 * @lc app=leetcode id=695 lang=javascript
 *
 * [695] Max Area of Island
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
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
    let area = 1

    // add current poisition in to queue
    // acting as starting position
    grid[r][c] = 0
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
          grid[row][col] === 1
        ) {
          grid[row][col] = 0
          // if adjacent node is island, add to queue to mark
          q.push([row, col])
          area += 1
        }
      }
    }

    return area
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // if the element is land, we know we found an island regardless of its size
      if (grid[r][c] === 1) {
        // mark all adjacent islands to water as they are already counted
        res = Math.max(res, bfs(r, c))
        // increase number of islands by 1
        // res += 1
      }
    }
  }

  return res
}
// @lc code=end
