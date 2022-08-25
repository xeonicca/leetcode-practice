/*
 * @lc app=leetcode id=190 lang=javascript
 *
 * [190] Reverse Bits
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let res = 0

  for (let i = 0; i < 32; i++) {
    // left shift result by 1
    res <<= 1
    // get the first bit of n (using logic and 1)
    // then logic or the result with result (to preserve 0 and 1s)
    res |= n & 1
    // right shift n by 1 to move on to the next bit
    n >>= 1
  }

  // logic right shift to preserve the signed bit
  return res >>> 0
}
// @lc code=end
