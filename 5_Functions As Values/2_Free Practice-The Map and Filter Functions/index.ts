const numbers: number[] = [4, 5, -1, 0, 12, -10];

// We want to keep only the non-negative numbers
// const result: number[] = [];
// for (const current of numbers) {
//   if (current >= 0) {
//     result.push(current);
//   }
// }

// filter
function isNonNegative(a: number): boolean {
  return a >= 0;
}
const result: number[] = numbers.filter(isNonNegative);


// const even: number[] = [];
// for (const current of numbers) {
//   if (_______________) {
//     even.push(current);
//   }
// }
function isEven(a: number): boolean {
  return a % 2 === 0;
}
const even: number[] = numbers.filter(isEven);

// Map example: We want to square each of the numbers
// const squared: number[] = [];
// for (const current of numbers) {
//   squared.push(current * current);
// }


function square(a: number): number {
  return a * a;
}
const squared: number[] = numbers.map(square);











// Map example: find the square root of each number
const squareRoots: number[] = [];
for (const current of numbers) {
  squared.push(Math.sqrt(current));
}




