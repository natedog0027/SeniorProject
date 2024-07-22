// FILTER
const nums: number[] = [23, -9, 8, 12, -8];
const filterResult: number[] = [];
for (const current of nums) {
  if (current >= 0) {
    filterResult.push(current);
  }
}
// [23, 8, 12]