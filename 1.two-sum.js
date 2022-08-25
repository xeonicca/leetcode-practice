var twoSum = function twoSum(nums, target) {
  let ans = null
  // let map = nums.reduce((all, v, i) => (all[v] = i, all), {})
  let map = {}
  for(let i = 0; i < nums.length; i++) {
    const v = nums[i]
    const complement = target - v
    const mapValue = map[complement]
    if (mapValue >= 0 && mapValue !== i) {
      ans = [i, mapValue]
    }
    map[v] = i
  }
  return ans
}
