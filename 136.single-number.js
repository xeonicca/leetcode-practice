/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const map = {}
  let num, i = 0
  while(Number.isInteger(num = nums[i++])) {
    if(map.hasOwnProperty(num)) {
      delete map[num]
    } else {
      map[num] = 1
    }
  }

  return Object.keys(map)[0]
}
// @lc code=end
