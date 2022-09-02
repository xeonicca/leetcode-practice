/*
 * @lc app=leetcode id=205 lang=javascript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let i = 0,
    smap = {}, tmap = {}

  // create a mapping between two string
  while (i < s.length) {
    if(!smap[s[i]]) {
      smap[s[i]] = t[i]
    }

    if(!tmap[t[i]]) {
      tmap[t[i]] = s[i]
    }

    // if mapping exists and mapping value is not equal to current character
    // return false
    if (smap[s[i]] !== t[i] || tmap[t[i]] !== s[i]) {
      return false
    }
    i++
  }

  return true
}
// @lc code=end
