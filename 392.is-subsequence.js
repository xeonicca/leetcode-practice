/*
 * @lc app=leetcode id=392 lang=javascript
 *
 * [392] Is Subsequence
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  // if both string are equal to each other, return true
  if(s === t) return true
  // pointer for s
  let i = 0
  // traverse through t
  for (let index = 0; index < t.length; index++) {
    // if a character of s is found in t, move up the pointer
    if(s[i] === t[index]) {
      i++
    }
    
    // if all characters are found, return true
    if(i === s.length) {
      return true
    }
  }

  return false
};
// @lc code=end

