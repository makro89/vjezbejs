let numStr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const sumEvens = (numStr) => {
  let sum = 0;
  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] % 2 === 0) {
    sum = sum + numStr[i];
    }
  }
  return sum;
}
 
console.log(sumEvens(numStr));