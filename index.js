
// Array
let arr = [2, 3, 4, 'Hello',  5, null, 8, 9];
console.log(arr);
console.log(typeof(arr));

console.log(arr[4]);
console.log(arr.length);

for(let i = 0 ; i< arr.length ; i++){
    console.log('Value of arr :' + arr[i])
}


console.log(arr.pop());
console.log(arr);

console.log(arr.toString());
arr.sort();
console.log(arr.toString());

