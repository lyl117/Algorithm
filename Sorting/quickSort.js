
if(array.length === 1){
  return array;
}

const paivot = array[array.length-1];
const leftArr = [];
const rightArr =[];
for(let i =0; i < array.length-1; i++){
  if(array[i]<paivot){
    leftArr.push(array[i]);
  }else {
    rightArr.push(array[i]);
  }
}
if(leftArr.length> 0 && rightArr.length>0){
  return[...quickSort(leftArr), paivot, ...quickSort(rightArr)];
} else if (leftArr.length > 0){
} else {
  return[paivot, ...quickSort(rightArr)];
  }
