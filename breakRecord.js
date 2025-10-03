
function breakingRecords(scores) {
  let maxScore = scores[0];
  let minScore = scores[0];
  let maxBreaks = 0;
  let minBreaks = 0;

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > maxScore) {
      maxScore = scores[i];
      maxBreaks++;
    } else if (scores[i] < minScore) {
      minScore = scores[i];
      minBreaks++;
    }
  }

  return [maxBreaks, minBreaks];
}
let bR = breakingRecords([10,5,20,20,4,5,2,25,1]);
console.log(bR);