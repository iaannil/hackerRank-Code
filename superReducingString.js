function superReducedString(s) {
  const stack = [];

  for (let char of s) {
    if (stack.length > 0 && stack[stack.length - 1] === char) {
      stack.pop(); // remove pair
    }
     else {
      stack.push(char);
    }
  }

  return stack.length > 0 ? stack.join('') : "EmptyString";
}

let s = "baab"
let redstr = superReducedString(s);
console.log(redstr);

// function uniqueInOrder(s) {
//   const seen = new Set();
//   const result = [];

//   for (const char of s) {
//     if (!seen.has(char)) {
//       result.push(char);
//       seen.add(char);
//     }
//   }

//   return result.join('');
// }

// // Examples:
// console.log(uniqueInOrder("aa"));     // Output: "a"
// console.log(uniqueInOrder("baab"));   // Output: "ba"
// console.log(uniqueInOrder("abbac"));  // Output: "abc"
// console.log(uniqueInOrder("abbbcac")); // Output: "abc"


