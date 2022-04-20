//버블정렬

function bubbleSort(array){
  const arr = array.slice();
  for(let i =0; i <array.length-1; i++){
    for(let j=0; j<array.length-1-i; j++){
    if(array[j] > array[j+1]){
      const temp = array[j];
      array[j]= array[j+1];
      array[j+1]=temp;
    }
  }
}
return array;
}
console.log(bubbleSort([1,2,3,567,432,10]));
console.log(bubbleSort(arr));
console.log(arr);
