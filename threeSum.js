let nums =  [0,0,0]
let target = 9;
function sum(nums) {
  let newArr = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if ((nums[i] + nums[j] + nums[k]) === 0) {
          let sum0 = [nums[i], nums[j], nums[k]]
          sum0.sort((a, b) => a - b)
          newArr.push(sum0);
        }
      }
    }
  }
  return [...new Set(newArr.map(ele=>JSON.stringify(ele)))].map(ele=>JSON.parse(ele))
}
console.log(sum(nums))


