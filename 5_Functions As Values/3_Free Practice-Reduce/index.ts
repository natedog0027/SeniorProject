// Reduce
const nums: number[] = [5, 6, 1, 4, 7, 4, 6, -9, -1,  10, 7]

// Sum
// let acc: number = 0; // running total
// for (const current of nums) {
//   acc = acc + current;
// }

// Reduce --> 2 parameters (accumulator, current)
// const total: number = nums.reduce(function (acc, curr) {
//   return acc + curr;
// });

const total: number = nums.reduce((acc, curr) => acc + curr);

// [5, 6, 1, 4, 7, 4, 6, -9, -1,  10, 7]

// Find max

const max: number = nums.reduce((maxSoFar, current) => {
  if (maxSoFar >= current) {
    return maxSoFar;
  } else {
    return current;
  }
});
