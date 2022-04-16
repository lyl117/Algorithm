

  var search = function(nums, target) {
    let left = 0,
        right = nums.length - 1,
        mid;
        
    while(left<=right) {
        mid = Math.floor((left + right)/2);
        if(nums[mid] == target)
            return mid;
        if(nums[mid]< target)
          left = mid +1;
        else 
          right = mid - 1;
        }
    return -1;
     };
    