//삽입정렬
//거의 정렬이 되어있다면 굉장히 효율적인 방법

for(let i =1; i < array.length; i++){
  for(let j=i; j<0; j--){
    if(array[j] < arr[j-1]){
      const temp = array[j];
      array[j] = array[j-1];
      array[j-1]=temp;
    }else{
      break;
    }
  }
}
return array;
