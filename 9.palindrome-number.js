/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // negative value is always not a valid plindrome
  if (x < 0) return false

  // find the most significant digit divider
  // if x=121 then div will be 100
  let div = 1
  while (x >= div * 10) {
    div *= 10
  }

  while (x) {
    // get the least significant digit
    let right = x % 10
    // get the most significant digit
    let left = Math.floor(x / div)

    // if they are not the same, return false right away
    if (left != right) return false

    // get rid of the left and right digit
    // if we mod the divider, we will be left with digits except the first
    // then we take the number and divide by 10, we get the remaining digit
    x = Math.floor((x % div) / 10)
    // since we got rid of two digits
    // the divider is now 1/100 of what it was
    div = div / 100

    // repeat the same operation until x is 0
  }

  return true
}
// @lc code=end
