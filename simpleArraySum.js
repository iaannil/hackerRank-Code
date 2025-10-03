function simpleArraySum(arr) {
  let sum = 0;              // start with 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];          // add each element one by one
  }
  return sum;
}
let add = simpleArraySum([1,2,3,4,5]);
console.log(add);