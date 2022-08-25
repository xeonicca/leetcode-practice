/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const mapping = {
    '{': '}',
    '(': ')',
    '[': ']',
  }

  const stack = []
  let i = 0,
    char
  while (char = s.charAt(i++)) {
    if (mapping.hasOwnProperty(char)) {
      stack.push(char)
    } else {
      const last = stack.pop()
      if (char !== mapping[last]) {
        return false
      }
    }
  }
  return !stack.length
}
// @lc code=end
