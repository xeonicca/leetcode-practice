/*
 * @lc app=leetcode id=287 lang=javascript
 *
 * [287] Find the Duplicate Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  // floyd algorithm
  // make two pointers starting at 0
  // slow pointer moves up by 1, while fast pointers moves up by 2
  // find the first intersection where two pointers meet
  // make another pointer start from 0
  // find the first intersection of first slow pointer and new pointer meet
  let slow = fast = 0

  while (true) {
    slow = nums[slow]
    fast = nums[nums[fast]]

    if(slow === fast) break
  }
  
  fast = 0
  while (true) {
    slow = nums[slow]
    fast = nums[fast]

    if(slow === fast) break
  }

  return fast
}
// @lc code=end
