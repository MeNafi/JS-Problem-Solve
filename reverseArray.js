// actual pattern to find reverse array
let arr = [1,2,3,4,5];
for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length -1 - i];
    arr[arr.length -1 - i] = temp;

}

console.log(arr);


// write like this reverse array
let reverseArray = [1,2,3,4,5];

for (let i = reverseArray.length -1; i>=0; i--) {
    console.log(reverseArray[i]);
}


// very short way to solve reverse array problem
let arr = [1,2,3,4,5];

arr.reverse()
console.log(arr);