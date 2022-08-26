/*
 * @lc app=leetcode id=1480 lang=javascript
 *
 * [1480] Running Sum of 1d Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  nums.forEach((v, i) => {
    if(i > 0) {
      // add previous sum with current value
      nums[i] += nums[i - 1]
    }
  })
  return nums
};
// @lc code=end

