const percentages: number[] = [
  0.8,
  0.9,
  1,
  0.95,
  0.85
];

// Accumulator/reduce
let sum: number = 0;
for (const currentPercent of percentages) {
  sum = sum + currentPercent;
}
const average: number = sum / percentages.length;
