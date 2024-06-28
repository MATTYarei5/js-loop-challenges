for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

const arr = ["a", "b", "c", "d", "e", "f", "g", "h"];
const val = [4, 6];
let newArr = [];

for (let i = 0; i < val.length; i++) {
  let results = val[i];
  if (results >= 0 && results < arr.length) {
    newArr.push(arr[results]);
  }
}
console.log(newArr);

const numToArr = 12345;
let newArrResults = [];

for (let num of String(numToArr)) {
  newArrResults.push(num);
}
console.log(newArrResults);

// const arrayOne = [1, 2, 3];
// const arrayTwo = ["a", "b", "c", "d"];
// const comboArr = [];

// for (let num = 0; num < arrayOne.length; num++) {
//   for (let letter = 0; letter < arrayTwo.length; letter++) {
//     comboArr.push([arrayOne[num], arrayTwo[letter]]);
//     comboArr.push([arrayTwo[letter], arrayOne[num]]);
//   }
// }
// console.log(comboArr);

const arrayOne = [1, 2, 3];
const arrayTwo = ["a", "b", "c", "d"];
const comboArr = [];

for (let num of arrayOne) {
  for (let letter of arrayTwo) {
    comboArr.push([num, letter]);
    comboArr.push([letter, num]);
  }
}
console.log(comboArr);
