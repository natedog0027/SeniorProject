# The map and filter functions

We've already talked about the map and filter "loop patterns". Take a second to remind yourself of what they are and how they're used.

## filter

The _filter_ pattern takes in an array of data and keeps on those items that satisfy a certain condition. I.e., it _filters_ the array.

For example, consider the following array of numbers:

```tsx
const nums: number[] = [4, 5, -1, 0, 12, -10];
```

Suppose only want to keep the non-negative numbers (i.e., those that are greater than or equal to 0).

Hopefully you have recognised that this is a _filter_ problem. We already know how to do this using a `for` loop. **If you need a reminder, please see the Replit on Loop patterns.** An example is available in the `filter.ts` file.

After the code below runs, the `filterResult` array will hold only the items that are `>= 0`.

`[4, 5, 0, 12]`

```tsx
1 | // Step 1. First prepare an array to hold the filtered items
2 | const filterResult: number[] = [];
3 | 
4 | // Step 2. Loop over the items in the original array
5 | for (const current of nums) {
6 | // Step 3. Do the filter operation. If the condition
7 |  // is satisfied, add the item to the filterResult array.
8 |  if (current >= 0) {
9 |    filterResult.push(current);
10|  }
11| }
```

Filtering items in an array is a very common pattern in programming problem-solving. you'll write many "filter" loops like the above in your lifetime. The only thing that will really be different each time will be the conditional check on line 8 above.

We can abstract this out into a function that takes in a number and checks if it's positive or negative.

```tsx
function isNonNegative(x: number): boolean {
  if (x >= 0) {
    return true;
  } else {
    return false;
  }
}
```

Note that since the function is returning `boolean` value, you can also directly return the expression `x >= 0`. That is, the function can be re-written as:

```tsx
function isNonNegative(x: number): boolean {
  return x >= 0;
}
```

Now, we can use TypeScript's `filter` function to solve this problem. Like `sort`, the `filter` function operates on an array, and takes _another function_ as an input.

The `filter` function then uses this given function by applying it to each individual item in the array, and deciding whether or not to keep it.

For example:

```tsx
const filtered: number[] = nums.filter(isNonNegative);
```

After the code above, the `filtered` array will have the items

`[4, 5, 0, 12]`

We used the `isNonNegative` function _as a value_, and gave it to the `filter` function.

Below are both ways of doing a filter. Which one do you prefer?

```tsx
// Original array
const nums: number[] = [4, 5, -1, 0, 12, -10];

// ------- Using a for loop
const filterResult: number[] = [];
for (const current of nums) {
  if (current >= 0) {
     filterResult.push(current);
  }
}

// -------- Using the filter function
function isNonNegative(x: number): boolean {
  return x >= 0;
}
const filterResult2: number[] = nums.filter(isNonNegative);
```

## map

The _map_ pattern takes in an array of data and _maps_ each item to some other item.
So the input is an array of data, and the output is an array of data.

For example, consider the following array of numbers:

```tsx
const nums: number[] = [4, 5, -1, 0, 12, -10];
```

It's a common task in statistics to want to perform some transformation on a collection of numbers.
For example, suppose we want to **square** all the numbers in the original array.

We already know how to do this using a `for` loop. **If you need a reminder, please go see the "Free practice — Loop patterns" Replit.** There is an example in the `map.ts` file.

After the code below finishes running, the `result` array will contain the following numbers:

`[16, 25, 1, 0, 144, 100]`

```tsx
1| // Step 1. Create the empty result array.
2| const result: number[] = [];
3|
4| // Step 2. Loop over all the items in our original "numbers" array.
5| for (const current of nums) {
6|  // Step 3. Do the map operation
7|  const squared: number = current * current;
8|  result.push(squared);
9| }
```

Recall that "map" is a common pattern in programming. You will write a number of "map" loops in your lifetime, and really the only thing that will change is the operation on line 7 above.

Therefore, TypeScript provides the `map` function for lists. This allows you to only worry about "Step 3" from the code above. It takes care of the rest for you.

Similar to the `sort` function we talked about before, you first need to describe the operation you want as a function.

```tsx
function squareNum(x: number): number {
  return x * x;
}
```

Then, you can use this function _as a value_, i.e., you can give it to the `map` function. For example:

```tsx
const result: number[] = nums.map(squareNum);
```

We have called `map` on our `nums` array, and given it the `squareNum` function as an input. So the `map` function will run through the `nums` array, and apply `squareNum` to each value in the `nums` array.

Below are both ways of doing a "map". Which do you like more?

```tsx
// Original array
const nums: number[] = [4, 5, -1, 0, 12, 10];

// ----- Using a for loop
const result: number[] = [];
for (const current of nums) {
 const squared: number = current * current;
 result.push(squared);
}

// ----- Using the map function
function squareNum(x: number): number {
  return x * x;
}
const result2: number[] = nums.map(squareNum);
```