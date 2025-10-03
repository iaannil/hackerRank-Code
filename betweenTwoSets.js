function gcd(x, y) {
  while (y !== 0) {
    [x, y] = [y, x % y];
  }
  return x;
}

// LCM of two numbers
function lcm(x, y) {
  return (x * y) / gcd(x, y);
}

// LCM of array
function lcmArray(arr) {
  return arr.reduce((acc, val) => lcm(acc, val), 1);
}

// GCD of array
function gcdArray(arr) {
  return arr.reduce((acc, val) => gcd(acc, val));
}

function getTotalX(a, b) {
  const l = lcmArray(a);
  const g = gcdArray(b);

  let count = 0;
  for (let x = l; x <= g; x += l) {
    if (g % x === 0) count++;
  }

  return count;
}
let a=[2,6]
let b = [24,36]
console.log(getTotalX(a, b));


// Greatest Common Divisor using Euclidean algorithm
// const findGCD = (a, b) => {
//   while (b) {
//     const temp = b;
//     b = a % b;
//     a = temp;
//   }
//   return a;
// };

// // Least Common Multiple of two numbers
// const findLCM = (a, b) => (a * b) / findGCD(a, b);

// // LCM of an entire list
// const calcLCM = list => list.reduce((res, num) => findLCM(res, num), list[0]);

// // GCD of an entire list
// const calcGCD = list => list.reduce((res, num) => findGCD(res, num));

// function countBetweenSets(arrA, arrB) {
//   const multiple = calcLCM(arrA);
//   const divisor = calcGCD(arrB);
//   let validCount = 0;

//   for (let candidate = multiple; candidate <= divisor; candidate += multiple) {
//     if (divisor % candidate === 0) {
//       validCount++;
//     }
//   }

//   return validCount;
// }

// // Example usage:
// const first = [2, 6];
// const second = [24, 36];
// console.log(countBetweenSets(first, second)); // Output: 2
