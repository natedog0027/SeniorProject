// ITERATIONS/LOOPING
const percentages: number[] = [
  0.8,
  0.9,
  1,
  0.95,
  0.85
];

// printing each item
for (const currentPercent of percentages) {
  // TODO print the current item
  // console.log(currentPercent);
}

// counting loop
for (let i = 0; i < percentages.length; i++) {
  // console.log(percentages[i]);
}


for (const currentCharacter of "CSC 123 Introduction to Computing") {
  // console.log(currentCharacter);
}



/*
const percentages: number[] = [
  0.8,
  0.9,
  1,
  0.95,
  0.85
];
*/

// How to generalise this for "top K" values?
function topKValues(list: number[], k: number) {
  // This is incomplete because it only finds the top 1 right now.
// Hint: We want to do the work below "k" times
    let hold: number = 0;
    for (const current of list) {
      if (current >= hold) {
        hold = current;
      }
    }
  return hold;
}


// repeat something, count
// counting loop
for (let counter = 0; counter < 5; counter = counter + 1) {
  // console.log(counter);
}


// Find top 5 percentages
/*
1. Math.max to find the highest percentage
2. use indexOf to find the position of that max percentage
3. use the index to find the appropriate county name
4. use splice (twice) to remove the county and percentage from the list
*/








// LOOP PATTERNS — Will continue this on Friday

// COUNT or REPEAT
// use a counting loop


// MAP -- transforms each item in a collection
// [] => mapping function => []

// square all numbers

// number[] => number[]
const toBeSquared: number[] = [2, 4, -6, 7, 9, 0, 1];
const squared: number[] = [];
for (const current of toBeSquared) {
  squared.push(current * current);
}
// console.log(squared);

// Get a list of all the names but uppercase
const names: string[] = ["Hudson", "Ryder", "Eliska", "Jacob"];
const upCased: string[] = [];
for (const current of names) {
  upCased.push(current.toUpperCase());
}
// console.log(upCased);

// Convert each item to its length
// string[] => number[]
const lengths: number[] = [];
for (const current of names) {
  lengths.push(current.length);
}
// console.log(lengths);




// FILTER: keep some items and discard others

// [] => check condition => []
// the result list is a sublist of the input list
// input and output types are the same

const evenOrOdd: number[] = [2, 5, 1, 8, 7, 23, 40];
const even: number[] = [];
for (const current of evenOrOdd) {
  if (current % 2 === 0) {
    even.push(current);
  }
}
// console.log(even);

// REDUCE (Accumulator): reduces a list to a single value

// sum

const toBeSummed: number[] = [1, 2, 3, 4, 5, 6]; // input
let sum: number = 0; // accumulator
for (const current of toBeSummed) {
  sum = current + sum // reducer
}
console.log(sum);

// max
let longestName: string = names[0];
for (const current of names) {
  if (current.length > longestName.length) {
    longestName = current;
  }
}
console.log(longestName);

const nums: number[] = [1,2,3,4,5];
const result2: number[] = nums.splice(0, 3);
console.log(nums); // [4,5]
console.log(result2); // [1,2,3]






