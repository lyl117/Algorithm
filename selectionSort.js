//선택정렬
for (let i =0; i < array.length -1; i++){
  let minIndex = i;
   for(let j =i; j < array.length; j++ ){
    if(array[j] < array[minIndex]){
      minIndex = j;
    }
   }

   const temp = array[i];
   array[i] =array[minIndex];
   array[minIndex] = temp;
  }

  const arr = [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92];
  const output = SelectionSort(arr);
  console.log(output);
  console.log(arr);


