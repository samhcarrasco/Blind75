var threeSum = function(nums) {
  nums.sort((a, b) => a - b)
  
  let res = []
  
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) break                  // Sum of pos integers will never be = to 0
      
      const target = -nums[i]
      
      let left = i + 1
      let right = nums.length - 1
      
      if (nums[i] === nums[i - 1]) continue                     // Avoid duplicates
      
      while (left < right) {
          if (nums[left] + nums[right] === target) {
              res.push([nums[i], nums[left], nums[right]])
              left++
              while (nums[left] === nums[left - 1]) {           // Avoid duplicates
                  left++
              }
          } else if (nums[left] + nums[right] < target) {
              left++
          } else {
              right--
          }
      }
      
  }
  return res
};
console.log(threeSum([-1,0,1,2,-1,-4,5,6,2,3,5-1,0,-6,-5]))