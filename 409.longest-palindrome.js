/*
 * @lc app=leetcode id=409 lang=javascript
 *
 * [409] Longest Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const map = {}
  let count = 0

  // save the count of all characters
  for (const char of s) {
    if (map[char]) {
      map[char]++
    } else {
      map[char] = 1
    }
  }

  // if each character comes in pair (dividable by 2), a palindrome is created
  Object.keys(map).forEach((v) => {
    count += Math.floor(map[v] / 2) * 2

    // if count is even and current character has odd num of occurence
    // we can add 1 to the count
    if(count % 2 === 0 && map[v] % 2 !== 0) {
      count++
    }
  })

  return count
}
// @lc code=end
