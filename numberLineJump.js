function kangaroo(x1, v1, x2, v2) {
  // If one is ahead and jumps faster, they can never meet
  if (v1 === v2) {
    return x1 === x2 ? "YES" : "NO";
  }

  const n = (x2 - x1) / (v1 - v2);
  if (n >= 0 && Number.isInteger(n)) {
    return "YES";
  }
  return "NO";
}
let result = kangaroo(0,2,5,3)
console.log(result)