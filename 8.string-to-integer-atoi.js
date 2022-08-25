/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  s = s.trim() // doesnt matter where space occurs 
  let len = s.length,
    i = 0,
    k = 1,
    res = 0

  // if there is sign
  if (s[i] === '-') {
    k = -1
    i++
  } else if (s[i] === '+') {
    i++
  }

  // check if the following characters are number
  while(i < len && s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57 ) {
    // add up the parsed number
    res = res * 10 + parseInt(s[i])
    i++
  }

  // dont forget the sign
  res *= k

  // check for constraint
  return res >= Math.pow(2, 31)
    ? Math.pow(2, 31) - 1
    : res < Math.pow(-2, 31)
    ? Math.pow(-2, 31)
    : res
}
// @lc code=end
