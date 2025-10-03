let n1 = 9;
let ar1 = [10,20,20,10,10,30,50,20];
let n2=10;
let ar2 = [1,1,3,1,2,1,3,3,3,3]


function sockMerchant(n, ar) {
  ar.sort((a, b) => a - b);
  let pairs = 0;

  for (let i = 0; i < n - 1; i++) {
    if (ar[i] === ar[i + 1]) {
      pairs++;
      i++;
    }
  }

  return pairs;
}

let result1 = sockMerchant(n1,ar1);
let result2 = sockMerchant(n2,ar2);
console.log(result1,result2);