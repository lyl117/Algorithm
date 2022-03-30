var romanToInt = function(s){
  const roman ={
    'I':1,
    'V':5,
    'X':10,
    'L':50,
    'C':50,
    'D':100,
    'M':500,
  };
// using charAt()
  let sum = roman[s.charAt(0)];
  for(let i = 1; i<s.length; i++){
    let prev = roman[s.charAt(i-1)];
    let curr = roman[s.charAt(i)];
    if(curr <= prev){
      sum += curr;
    } else {
      sum=(sum-prev)+(curr-prev);
    }
  }
  return sum;
}