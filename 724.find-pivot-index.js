/*
 * @lc app=leetcode id=724 lang=javascript
 *
 * [724] Find Pivot Index
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let i = (left = 0)
  // get total sum first
  const total = nums.reduce((all, v) => all + v)

  while (i < nums.length) {
    // if total sum minus left sum thus far and minus current value
    // then current index is the pivot
    // can think of this way
    // total sum minus current value will equal to left sum plus right sum
    // then current index is the pivot
    if (total - left - nums[i] === left) {
      return i
    }
    left += nums[i++]
  }

  return -1
}
// @lc code=end
