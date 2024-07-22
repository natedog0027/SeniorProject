# Data types (In-class activity)

This is a brief introduction to data types in TypeScript. We have previously seen the basic ("primitive") data types available to use in TypeScript:

- `number`: Referring to numeric values like `5`, `12.5`, `-4`
- `string`: Referring to text values like `"Hello world"`, `"A"`, `"65"`
- `boolean`: Referring to the two values `true` and `false`

## Instructions

The file `index.ts` contains some example code that declares, initializes, and uses variables.
In pairs, take some time to examine this file.

Go ahead and fix all the type errors you notice in the file, and add the following code to the bottom of the file.

```tsx
console.log("x: " + x);
console.log("z: " + z);
console.log("char: " + char);
console.log("make: " + make);
console.log("model: " + model);
console.log("boolTrue: " + boolTrue);
console.log("boolFalse: " + boolFalse);
console.log("yetAnother: " + yetAnother);
console.log("scores: " + scores);
console.log("badScores: " + badScores);
console.log("courses: " + courses);
console.log("trueFalseList: " + trueFalseList);
```
The code above will print out a number of lines to the **Console** window.

If all is well and good, you should see the following output in the **Console**.

```txt
x: 5
z: 10.5
char: A
make: Santa Cruz
model: Bronson
boolTrue: true
boolFalse: false
yetAnother: true 
scores: 83,42,77,92,73,95,81,42
badScores: 83,42,77,92,73,95,81,42
courses: CSC 123,CSC 101,CSC 202,CSC 203
trueFalseList: true,false
```

### Anatomy of the code above

Let's consider one of the print statements.

```tsx
console.log("x: " + x);
```

We've already seen what `console.log` does. It prints. But what does the `"x: " + x` bit mean?

That portion is an _expression_.
When we use the plus operator (`+`) with a `string`, we aren't really "adding" anything in the mathematical sense, because strings are not numeric.
Instead, we are _concatenating_ or "joining" two strings together.

For example, the expression `"Hello " + " World"` will result in `"Hello World"`.

So, the first part of our expression—the stuff on the left of `+`—is a _string literal_, i.e., it is literally the string `"x: "`. 

The second part—the stuff on the right of `+`—is the expression `x`. This evaluates to value of `x`, which in this case is `5`. Now even though `5` is a `number`, it doesn't make any sense to "add" a number to a string. So for this expression, the `5` is implicitly treated as a `string`, and it is _concatenated_ to the string `"x: "`.

So putting it together, the expression `"x: " + x` will evaluate to the string `"x: 5"`, and that is what gets printed.