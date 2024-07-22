# More on collections

So far, we've learned about the following array operations in TypeScript:
* accessing an array element by its index using, e.g., using `myList[2]` to get the element at position `2` in `myList`
* `Math.max` and `Math.min` to find the maximum or minimum items in an array
* using `indexOf` to find the position of a given item in an array if it exists
* using `shift` to remove and obtain the first item in an array

This module gives a quick overview and reference of a number of other generally useful array operations.

## `push`

This is the most basic array operation. It is used to append new items to the array, i.e., to add the new item to the end of the array. 

```tsx
const nums: number[] = [0, 1, 2, 3, 4, 5];

nums.push(6);
nums.push(7);
console.log(nums); // [0, 1, 2, 3, 4, 5, 6, 7]
```

You can also push multiple values: `nums.push(8, 9, 10)`;

:question: What do you think would happen if we did `nums.push("8");`?

## `pop`

Similar to the `shift` operation we already talked about. This operation removes and returns the _last_ element from the array.

```tsx
const nums: number[] = [0, 1, 2, 3, 4, 5];

const last = nums.pop();
console.log(last); // 5
```

Just like `shift`, returns `undefined` if there is no last element (i.e., if the array is empty).

## `includes`

The `includes` operation checks if the specified item exists in the array.

```tsx
const nums: number[] = [0, 1, 2, 3, 4, 5];

console.log(nums.includes(6)); // this would print false
console.log(nums.includes(3)); // this would print true
```

:question: What do you think `nums.includes("another item");` would give you?

## `slice`

`slice` obtains a, well, a "slice" of the array. You give it a `start` value and an `end` value and it gives you everything starting at `start` and ending _before_ `end`.

**Unlike other operations we have seen, `slice` does not modify the original array. It returns a copy.** 

```tsx
const nums: number[] = [0, 1, 2, 3, 4, 5];
const mySlice: number[] = nums.slice(1, 3);
console.log(mySlice); // [1, 2]
```

It's important to remember that the slice begins _at_ the `start` value, but ends _before_ the `end` value!

If you don't give the operation a `end` value, it defaults to the end of the array.

```tsx
const nums: number[] = [0, 1, 2, 3, 4, 5];
const mySlice: number[] = nums.slice(1);
console.log(mySlice); // [1, 2, 3, 4, 5]
```

If you don't give the operation a `start` _or_ and `end` value, it defaults to obtaining a slice starting at `0` and ending at the end of the array. That is, **it gives you a copy of the entire array**.

```tsx
const nums: number[] = [0, 1, 2, 3, 4, 5];
const mySlice: number[] = nums.slice();
console.log(mySlice); // [0, 1, 2, 3, 4, 5]
```

Changes that you make to this copy of the array do not affect the original array.

```tsx
const nums: number[] = [0, 1, 2, 3, 4, 5];
const mySlice: number[] = nums.slice();
mySlice.shift();

console.log(nums);
console.log(mySlice);
```

## `splice`

The `splice` method changes an array by removing or replacing existing items, and/or adding new items to the array. Yes...it does a lot. Let's unpack it!

You can tell `splice` to all of these things by varying the options that you give it.

For example, in its most basic form, the `splice` operation can take the following options:
* A `start` position
* The number of items to remove from the array, i.e., a `deleteCount`

Suppose you have an array like so:
```tsx
const nums: number[] = [0, 1, 2, 3, 6, 7];
```

Suppose we want to delete the last two items, `6` and `7`. This means we want to _start_ changing the array at index `4`, and we want to delete _two items_. So our `start` is `4` and our `deleteCount` is `2`.

```tsx
const nums: number[] = [0, 1, 2, 3, 6, 7];
nums.splice(4, 2); // start at position 4 and delete 2 items
console.log(nums); // [0, 1, 2, 3]
```

Additionally, you can also use `splice` to add items to the middle of an array by giving it additional options. Suppose we have this array:

```tsx
const nums: number[] = [0, 1, 2, 3, 6, 7];
```

We want to add the numbers `4` and `5` to the array between the numbers `3` and `6`, meaning that we want the array to be `[0, 1, 2, 3, 4, 5, 6, 7]`;

First, what would our `start` and `deleteCount` be? We want to _start_ changing the array at index `4` (i.e., after the `3`). And we want to _delete no items_. So our `start` is `4` and `deleteCount` is `0`.

We can do this operation like so:

```tsx
const nums: number[] = [0, 1, 2, 3, 6, 7];
nums.splice(4, 0, 4, 5); // starting at index 4, delete 0 items, and 4 and 5 to the array
console.log(nums); // [0, 1, 2, 3, 4, 5, 6, 7]
```

:question: What if we wanted to turn the array `[0, 1, 2, 3, 6, 7]` into `[0, 1, 2, 3, 4, 5]`? How would you do this with one `splice` operation?

