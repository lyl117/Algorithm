function longestCommonPrefix(strs) {
  if (!strs.length) return '';
  // 문자열 길이가 아니면 ' ' 을 리턴하고
  for (let i = 0; i < strs[0].length; i++) {
    // 0번째 줄의 배열 갯수 보다 작으면 
    for (let str of strs) {
      // str: 위 반복에 서로 다른 속성값이 str에 저장 
      // strs : 반복되는 열거가능한 속성이 있는 객체
      // 배열 strs 값이 str로 넘어감 (순환)
      if (str[i] !== strs[0][i]) {
        return str.slice(0, i);
        // 0번째부터 i까지 자르기 그리고 리턴 
      }
    }
  }
  
  return strs[0];
}


