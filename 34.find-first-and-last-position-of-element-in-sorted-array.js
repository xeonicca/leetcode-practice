/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

  const findLeft = () => {
    let res = -1
    let start = 0, end = nums.length - 1

    while(start <= end) {
      const mid = start + Math.floor((end - start) / 2)

      // using equal here because even if we do find the target
      // we need to keep searching until it is the left most one
      if(nums[mid] >= target) {
        end = mid -1
      } else {
        start = mid + 1
      }

      if(nums[mid] === target) res = mid
    }

    return res
  }
  

  const findRight = () => {
    let res = -1
    let start = 0,
      end = nums.length - 1

    while (start <= end) {
      const mid = start + Math.floor((end - start) / 2)

      if (nums[mid] <= target) {
        start = mid + 1
      } else {
        end = mid - 1
      }

      if (nums[mid] === target) res = mid
    }

    return res
  }

  return [findLeft(), findRight()]
};
// @lc code=end

