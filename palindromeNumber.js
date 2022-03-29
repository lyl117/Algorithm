var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  const reverseResult = Number(x.toString().split("").reverse().join(""));
  if(x === reverseResult){
    return true
  } 
  return false;
}