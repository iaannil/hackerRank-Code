// function staircase(n) {
//   for (let i = 1; i <= n; i++) {
//     const spaces = ' '.repeat(n - i);
//     const hashes = '#'.repeat(i);
//     console.log(spaces + hashes);
//   }
// }
// staircase(4);

function buildStaircase(size) {
  for (let row = 0; row < size; row++) {
    let line = '';
    for (let col = 0; col < size; col++) {
      line += col < size - row - 1 ? ' ' : '#';
    }
    console.log(line);
  }
}

buildStaircase(4);
