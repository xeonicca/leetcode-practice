/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  const old = nums.slice()

  for (let i = 0; i < nums.length; i++) {
    // assign curr value to new index after rotation k
    nums[(i + k) % nums.length] = old[i]
  }
};
// @lc code=end

