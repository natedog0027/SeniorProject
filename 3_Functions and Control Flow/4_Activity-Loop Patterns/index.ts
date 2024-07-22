// Rainfall problem — write your code below.
// The files map.ts, filter.ts, and reduce.ts are
// available for reference.


// [1, 3, 5, -9, 0, -99999, 12, -8] => 9
// [-1, -99999] => -Infinity

/*
1. Find the index of the sentinel value
2. use slice to take everything before the sentinel value
3. Filter to only keep positive integers
4. Find the sum (reduce)
5. Divide it by the # of positive numbers
*/

function rainfall(dailyRainfall: number[]): number {
  const sentinelIndex: number = dailyRainfall.indexOf(-99999);
  let activeValues: number[];
  if (sentinelIndex !== -1) {
    activeValues = dailyRainfall.slice(0, sentinelIndex);
  } else {
    activeValues = dailyRainfall;
  }
  const positiveInts: number[] = activeValues.filter((a) => a > 0);
  const sum: number = positiveInts.reduce((a, b) => a + b);

  return sum / positiveInts.length;
}
