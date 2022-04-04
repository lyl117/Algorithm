const mergeTwoLists = function(l1, l2) { 
  if (!l1) return l2; //l1이 아니면 l2 리턴
  if (!l2) return l1; //l2가 아니면 l1 리턴
  
  if(l1.val < l2.val) { 
    //l1값이 l2값보다 작으면
      l1.next = mergeTwoLists(l1.next, l2);
      // li 다음 l2가 나와야하고
      return l1; 
      // 그리고 나서 합쳐진 값인, l1이 리턴
  } else { 
      l2.next = mergeTwoLists(l1, l2.next); 
      // 아니면, l2다음에 l1이 나온다.
      return l2;
      // 그리고 합쳐진 l2를 리턴
  } 
};