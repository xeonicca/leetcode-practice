/*
 * @lc app=leetcode id=278 lang=javascript
 *
 * [278] First Bad Version
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  // good ol binary search
  // const bs = (start, end) => {
  //   // if end is less than start, just return start
  //   if (end < start) return start

  //   // find mid point
  //   let mid = Math.floor((end + start) / 2)

  //   // if a version is bad
  //   // we wanna keep looking back to see if it is the first bad version
  //   if (isBadVersion(mid)) {
  //     return bs(start, mid - 1)
  //   } else {
  //     // if a version is good, we look forward to find bad versions
  //     return bs(mid + 1, end)
  //   }
  // }
  // /**
  //  * @param {integer} n Total versions
  //  * @return {integer} The first bad version
  //  */
  // return function (n) {
  //   return bs(1, n)
  // }

  
  // this solution is easier to understand
  return function (n) {
    let left = 0,
      right = n

    // same ol two pointers
    while (left < right) {
      // find mid point
      let mid = left + Math.floor((right - left) / 2)

      // if a version is bad, all version behind em are bad
      // so we set our end boundary to mid
      // (since we are doing left < right, we dont need to minus 1 to mid)
      if (isBadVersion(mid)) {
        right = mid
      } else {
        // if a version is good, we keep looking, starting from mid+1
        left = mid + 1
      }
    }

    // when the loop completes, left should equal to right
    // check if this version is bad
    if(left === right && isBadVersion(left)) {
      return left
    }

    return -1
  }
}
// @lc code=end
