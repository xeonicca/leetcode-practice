/*
 * @lc app=leetcode id=1672 lang=javascript
 *
 * [1672] Richest Customer Wealth
 */

// @lc code=start
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  return accounts.reduce((max, curr) => {
    return Math.max(max, curr.reduce((all, v) => all + v))
  }, 0)
};
// @lc code=end

