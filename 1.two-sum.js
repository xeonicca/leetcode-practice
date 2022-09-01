/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // storing the value as key, and index as value
  const map = {}
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index]
    
    const diff = target - element

    // if the diff exists in map, then return its index
    if(typeof map[diff] !== 'undefined') {
      return [index, map[diff]]
    }

    // save the value and its index
    map[element] = index
  }
}
// @lc code=end
