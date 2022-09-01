/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // create two pointers
  let start = 0,
    end = nums.length - 1

  while (start <= end) {
    const sum = nums[start] + nums[end]

    // if current sum is larger than target
    // move to end pointer back by 1
    if (sum > target) {
      end--
    } else if (sum < target) { // if sum is less than target
      // move to start pointer up by 1
      start++
    } else {
      // if sum is equal to target, return indices
      return [start + 1, end + 1]
    }
  }

  // no need to return here as a solution is guaranteed
}
// @lc code=end
