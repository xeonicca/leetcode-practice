/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let buy = (profit = 0),
    sell = 1

  while (sell < prices.length) {
    // when we find the next high value, we can try calculate the profit
    if (prices[sell] > prices[buy]) {
      profit = Math.max(profit, prices[sell] - prices[buy])
    } else {
      // else we update the buy pointer with low value index
      buy = sell
    }
    sell++
  }

  return profit
}
// @lc code=end
