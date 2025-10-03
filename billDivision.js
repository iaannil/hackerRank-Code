function bonAppetit(bill, k,b) {
  const total = bill.reduce((sum, cost) => sum + cost, 0);
  const annaShare = (total - bill[k]) / 2;

  if (annaShare === b) {
    console.log("Bon Appetit");
  } else {
    console.log(b - annaShare);
  }
}
let bill = [2,4,6];
let k = bill[2];
let b = 3;


bonAppetit(bill,k,b);