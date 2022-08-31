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
  // const map = {}
  // let num, i = 0
  // while(Number.isInteger(num = nums[i++])) {
  //   if(map.hasOwnProperty(num)) {
  //     delete map[num]
  //   } else {
  //     map[num] = 1
  //   }
  // }

  // return Object.keys(map)[0]

  // xor solution:
  // xor of two same numbers will always be zero
  // so we can xor every integer in the array
  // and non repeated number will remain
  let result = 0
  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i]
  }
  return result
}
// @lc code=end
