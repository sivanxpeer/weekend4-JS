const arr = [1,2,3,4,5,6,7,8];

// forEach
const printArr=(arr)=>arr.forEach((item)=>console.log(item));
printArr(arr);

// filter
let oddIndexedArr = arr.filter((item)=>{return arr[item]%2===0});
printArr(oddIndexedArr);

// map
let poweredArr = arr.map((item)=>Math.pow(item,2));
console.log(poweredArr);