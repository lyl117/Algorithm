function longestCommonPrefix(strs) {
  if (!strs.length) return '';
  
  for (let i = 0; i < strs[0].length; i++) {
    for (let str of strs) {
      if (str[i] !== strs[0][i]) {
        return str.slice(0, i);
      }
    }
  }
  
  return strs[0];
}


// function longestCommonPrefix(strs) {
//   ans = []
//   for (let i in strs[0]){
//     for (let in strs){
//     if (let <= i != let[i]);
//     return ''
//     ans.append(ch)
//     return ans
//   }
// }
// }
