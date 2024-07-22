# Reduce

Previously, we learned the _reduce_ pattern using `for` loops. The reduce pattern lets us take an array of items and "reduce" it to one single item, using some computation.

Some examples of problems solved by the _reduce_ pattern are:
* Finding the sum of an array of `numbers`
* Finding the max of an array of `numbers` 
* Checking if any items in an array of `booleans` are `true`
* Checking if _all_ the items in an array of `booleans` are `true`

Let's consider a couple of examples.

## Find sum

Let's use the following array as an example:

```tsx
const nums: number[] = [5, 6, 1, 4, 7, 4, 6, -9, -1,  10, 7];
```

There are two main things we need to do when solving a problem using _reduce_:
* Figure out what the _reduce operation_ is. That is, what would we do to the first two items in the array?
* Figure out the initial start value for our accumulator variable. This is usually the first item in the array (but not always).

So if we want to find the sum of the above using a `for` loop, we'd have:

```tsx
let sum: number = 0; // Accumulator variable
for (const currentNum of nums) {
  // Reduce operation: the sum so far is added to the current value 
  sum = sum + currentNum;
}
```

We can do the same using the `reduce` function on TypeScript arrays.

**The first thing we need to do is to abstract out our reduce operation into its own function.**

Our reduce operation is to add the current number to the sum of all the previous numbers. So that function would look like the following:

```tsx
function add(a, b) {
  return a + b;
}
```

Now we can use the `reduce` function in TypeScript on our list. We give it two inputs:
* the reduce operation, as a function
* the starting value for the accumulator
 
```tsx
const total: number = nums.reduce(add, 0);
```

The `reduce` function repeatedly calls our new `add` function on pairs of numbers. After each pair of numbers is added, the sum is passed forward as one of the inputs to the next call to `add`.

So for the array `[5, 6, 1, 4, 7, 4, 6, -9, -1,  10, 7]`, `reduce` would call:

* `add(0, 5)`, which gives us `5`, which is passed on to the next step.
* `add(5, 6)`, which gives us `11`, which is passed on to the next step.
* `add(11, 1)`, which gives `12`, which is passed on to the next step.
* `add(12, 4)`, which gives us `16`, and on and on it goes....

Eventually, the final `add` call is `add(33, 7)`, which gives us `40`, the total of the array above.

## Finding the max

We can do a similar operation to find the maximum number in an array. When we're finding the max, we are repeatedly comparing the _current_ number with the largest number we have seen so far.

So we can write a function to help with that simple step:
```tsx
function max(a: number, b: number) {
  return Math.max(a, b);
}
```

Now, we can use this `max` function to calculate the max of a larger list of numbers:

```tsx
const maxVal: number = nums.reduce(max, -Infinity);
```

For a reminder of why we used `-Infinity` as the start value of our accumulator, see the module on `Loop patterns`. An example is in the `reduce.ts` file.
