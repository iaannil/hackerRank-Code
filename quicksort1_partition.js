let arr = [5,7,4,3,8];
function partition(arr) {
  const pivot = arr[0];
  const left = [];
  const right = [];
  const equal = [];

  for (let num of arr) {
    if (num < pivot) left.push(num);
    else if (num > pivot) right.push(num);
    else equal.push(num);
  }

  return [...left, ...equal, ...right];
}

let p = partition(arr);
console.log(p);


// function pivotPartition(values) {
//   let base = values[0];
//   let leftSide = [];
//   let mid = [];
//   let rightSide = [];

//   for (let i = 0; i < values.length; i++) {
//     const current = values[i];
//     if (current < base) {
//       leftSide[leftSide.length] = current;
//     } else if (current > base) {
//       rightSide[rightSide.length] = current;
//     } else {
//       mid[mid.length] = current;
//     }
//   }

//   return leftSide.concat(mid, rightSide);
// }
