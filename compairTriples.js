let a = [1, 2, 3]
let b = [3, 2, 1]
function compareTriplets(a, b) {
  let alice = 0;
  let bob = 0;

  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) alice++;
    else if (a[i] < b[i]) bob++;
  }

  return [alice,bob];
}
let compRes = compareTriplets(a,b);
console.log(compRes)

// function scoreComparison(arrA, arrB) {
//   let result = [0, 0];

//   arrA.forEach((val, idx) => {
//     if (val > arrB[idx]) {
//       result[0]++;
//     } else if (val < arrB[idx]) {
//       result[1]++;
//     }
//   });

//   return result;
// }


// const comparePoints = (a, b) =>
//   a.reduce(
//     (score, val, i) => {
//       if (val > b[i]) score[0]++;
//       else if (val < b[i]) score[1]++;
//       return score;
//     },
//     [0, 0]
//   );


// function evaluateTriplets(first, second) {
//   let idx = 0;
//   let scores = [0, 0];

//   while (idx < 3) {
//     if (first[idx] > second[idx]) {
//       scores[0]++;
//     } else if (first[idx] < second[idx]) {
//       scores[1]++;
//     }
//     idx++;
//   }

//   return scores;
// }
