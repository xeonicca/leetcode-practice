/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const dp = []
dp[0] = 1 // when there is no steps, theres only 1 way to get to 0 step
dp[1] = 1 // when there is 1 step, theres only 1 way to get to 1 step (take 1 step)
dp[2] = 2 // when there is 2 steps, there are 2 ways to get to 2 step

var climbStairs = function (n) {
  // dynamic programming: solving the sub problems of main problem first
  // basic recursion will take too long because it tries to
  // re-solve problems, so need to add memorizations

  if(!dp[n]) {
    dp[n] = climbStairs(n - 2) + climbStairs(n - 1)
  }

  return dp[n]
}
// @lc code=end
