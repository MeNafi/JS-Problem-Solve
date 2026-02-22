let arr = [18, 13 ,64, 23 ,45];

for (let j = 0; j < arr.length; j++){

  for (let i = 0; i < arr.length - 1; i++ ){
   if (arr[i] > arr [i+1]){
    let temp = arr[i];
    arr[i] = arr [i+1];
    arr[i+1] = temp;
    }
  }
}
console.log(arr);