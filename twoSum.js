// 1.
var twoSum = function(nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return []; // no answer
};

//2.
// const twoSum = (nums, target) => {
//   let storage = {};

//   for(let [index, num]of nums.entries()) {
//     if(storage[num]!== undefined) return [storage[num], index];
//     storage[target-num]=index;
//   }
// };

