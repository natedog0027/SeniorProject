# Lab 3 — Variables and collections

In this lab you'll get some experience declaring and using variables. You'll also get some experience using existing commands that help us do more complex computations, like using the `Math.sqrt` function to calculate square roots.

Write all your code in `index.ts`. Use comments to indicate when you begin each part. For example

```txt
// Starting part 1
your code here....

// Starting part 2
your code here....
```

## Part 1: Variables and data types

Declare and initialize a variable for each of the values below. Give the variables appropriate types.

If you're unsure what type a given value is, you can use the `typeof` operator to find out. For example, `console.log(typeof 10)` will tell you that `10` is a `number`.

1. `10`
2. `Math.PI`
3. `"what am i"`
4. `"false"`
5. `true`
6. `[12, 10.4, 6, Math.PI, 0.000001, 1/3]`
7. `[true, false, false]`
8. `Math.pow(2, 5)`
9. `"TypeScript".toLowerCase()`

## Part 2: Collections

In this part you are given a small dataset and asked to answer some questions about it.

In `index.ts`, the array 'californiaCounties' contains a list of counties in California.
The list is quite long, so you can use the downward triangle icon next to the line number to collapse or "fold" the text into one line.

The array `percentSchoolsOfferingCS` contains a number for each county in `californiaCounties`.
Each number represents the proportion of schools in that county that offer any CS courses.

**Important**. The two arrays are ordered so that the first county in the `californiaCounties` array is associated with the first number in `percentSchoolsOfferingCS`, and so forth. _Changing the ordering of the arrays can potentially render the dataset useless!_

We're going to do some basic analysis on this dataset to better understand the state of CS education in the state of California.

Answer the following questions from this dataset. 

First, you'll want to confirm that the dataset is "correct". One way you can do that is by confirming that the lengths of the two arrays are correct.

1. **How many counties are in `californiaCounties` and how many proportions are in `percentSchoolsOfferingCS`?**

Print your answer like so, replacing `numCounties` and `numProportions` with the values you find.

```
There are numCounties counties and numProportions proportions.
```

Remember that the `length` property can give you the number of elements in an array.

2. **Which CA county has the _highest_ proportion of schools offering CS courses?**
3. **Which CA county has the _lowest_ proportion of schools offering CS courses?**
<br/>
<br/>
Take a second and think about how you would go about answering these questions. A good idea is to break the overall task into smaller subtasks. For example, three potential subtasks here are:

* Find the highest proportion in the `percentSchoolsOfferingCS`
* Find the _index_ (the position) of that number in the array
* Use that index to find the appropriate county in `californiaCounties`

Tackle each of these subtasks one at a time, and use `// comments` to structure your solution. Explain your work so that someone else reading your code can understand what you're doing.

Here are some operations that you can use to help you solve this problem.
* `Math.max(...anArray)` will give you the maximum value inside the array `anArray`. The three dots `...` are required for reasons that I will explain in class. `Math.min` operates in a similar fashion.
* `anArray.indexOf(value)` will give you the index (position) at which `value` appears in `anArray`.
* The notation `anotherArray[i]` will give you the item at index `i` in `anotherArray`. Note that array positions are "0-indexed", meaning that the first element in an array is said to be at index 0.

Answer questions 1 and 2 above and print your answers as follows, replacing `CountyA`, `CountyB`, and the two `percentValue`s with the answers you found.

```
CountyA has the highest proportion of schools (percentValue) offering CS courses.
CountyB has the lowest proportion of schools (percentValue) offering CS courses.
```

## Coding standards

Follow good coding standards throughout this lab. That is:
* Variables should be given meaningful names, particularly in Part 2. Use camelCase if your variable name needs multiple words.
* Make good use of whitespace to increase the readability of your code. For example, break your code into "paragraphs" or blocks if you think it improve readability.
* Use indentation like we've talked about in class.
* We prefer clarity over cleverness. Just because something can be done with a clever one-liner doesn't mean it should be.
* If your code is doing something for reasons that aren't immediately clear, use `// comments` to explain your rationale in plain English.

We may dock points for submissions that are unclear.

[^exp]: Remember that _expressions_ are anything that can evaluate to a value. That means the value `10` is an expression. Similarly, if `x` was a `number` variable and had been given the value `10`, then `x` would be an expression that would evaluate `10` during program execution. You can also have compound expressions that apply operations to _sub_-expressions. For example, `10 + 4` or `x / 2` or `10 === 12`.