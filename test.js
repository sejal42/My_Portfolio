
let arr=[1,4,7,3];
let sum=0;
let arr2 = [];
for(let i=0;i<arr.length;i++)
  sum=sum+arr[i];
let j=0;
let sumLenght = arr.length; 
while( sumLenght != 0){
  let newsum=sum-arr[j];
  j++;
  sumLenght--;
  arr2.push(newsum)

}
console.log(arr2);
