/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // let res = -1
  // const search = (start, end) => {
  //   // if start pointer is greater than end pointer, we have no list
  //   if (end < start) return res

  //   // find mid point
  //   let mid = Math.floor((end + start) / 2)

  //   // if mid value is greater than target
  //   // we will keep looking in lower bound
  //   // if mid value is smaller than target
  //   // we will keep looking in upper bound
  //   if (nums[mid] > target) {
  //     return search(start, mid - 1)
  //   } else if (nums[mid] < target) {
  //     return search(mid + 1, end)
  //   } else {
  //     // if mid value is equal to target, we return its index
  //     return mid
  //   }
  // }

  // res = search(0, nums.length - 1)

  // this solution is easier to understand
  // calculate the mid point, compare and reset pointers
  let left = 0,
    right = nums.length - 1

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2)

    if (nums[mid] > target) {
      right = mid - 1
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      return mid
    }
  }

  return -1
}
// @lc code=end
