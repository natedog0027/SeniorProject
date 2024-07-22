# Instructions

**"Free practice"** Replits are the ones I use while teaching in class. I'll usually publish them after class and you can use them to study and experiment.

This Replit gives you a basic introduction to TypeScript, focusing on _variables_.

At this point, we have a good idea of what TypeScript is and why its features like static type checking are useful to us. If you need to remind yourself, please see the **Free Practice — What's TypeScript** Replit.

In this module we'll focus on getting familiar with 
1. Basic TypeScript syntax
2. The Replit development environment

**Note**: You'll do all your editing in the file `index.ts`. Keep this file open as you work through this module, and follow along with the changes.

## Basic data types

In the modules on **Numbers** and **Thinking about Data**, we learned about some different basic types of data. They were **numbers**, **text**, and **collections**.

TypeScript has the following basic data types. They are often referred to as “primitive” data types.

* `number`: Referring to numeric values like `5, 12.5, -4`
* `string`: Referring to text values like `"Hello world", "A", "65"`
* `boolean`: Referring to the two values `true` and `false`

Simply put, these are "primitive" because they are available _as they are_, i.e., they are not combinations of other, more basic, data types.
(Of course this depends on the level of abstraction you're working at—if you spend your time doing systems programming, then `number`, `string`, and `boolean` are certainly not primitive!)

Additionally, you can also have lists of values of the types above, known as **arrays** in TypeScript.

We’ll talk about all of these types of data in this module.

## Declaring and initializing variables

**A *variable* is an identifier to which some value is *bound*.** In simpler terms, a variable is a “name” that you give to a value. So for example, we might use the name `x` to refer to the value `5` in a program.

**Variable values can also change.** For example, as your program progresses, you might want to change the value that is bound to `x` from `5` to `10`. From now on, anytime you refer to the variable `x`, your program runner will evaluate `x` to `10` instead of `5`.

This section will talk about declaring and initializing variables. For simplicity, we’ll deal only with `number` types for the time being.

### Declaring a variable

Before using a variable for the first time, it must be *declared*. This “creates” the variable for the first time.

When you declare a variable in TypeScript, you need the following three pieces:

- The `const` keyword indicates to your runner that you are about to declare a new variable.
  - It also indicates that the variable is a _constant_. That is, once the variable's value is set for the first time, it cannot be changed.[^let]
- The name of the variable.
- The type of the variable.

[^let]: If you want to be able to update a variable's value, you would declare it using `let` instead of `const`. **We will prefer to use `const` over `let` this quarter.**

For example:

```tsx
const x: number; // x does not have a value
```

In the code above, we have declared a variable `x` as a constant (i.e., once set, its value can't be changed), and told TypeScript that `x` can only have `number` values bound to it. Note that `x` does not have a value as yet!

The text that comes after the two slashes (`//`) is a *comment*. Comments are not executed as code and are a good way to explain to yourself or others what your code does.

Go ahead and write this code in `index.ts`.

### Initializing a variable

Next, we need to *initialize* the variable, i.e., give it a value for the first time.

```tsx
const x: number; // Declaration step from before
x = 5;
```

We’ve now initialized `x` by binding the value `5` to it. You can also *declare and initialize* a variable in a single statement:

```tsx
const x: number = 5; // Declare and initialize in one statement

// Let's also print the value of x
console.log(x);
```
Don't forget to update `index.ts`!

## Running TypeScript code

We're now ready to run this very simple program.

With `index.ts` open, click the **Run** button above the editor window in Replit.

Your should see some text appear in the **Console** window. Something like:

```bash
sh -c ./.config/build.sh
node --enable-source-maps .build/index.js
5
```
You don't need to worry about those first two lines above. They are, respectively, compiling your TypeScript code to JavaScript and then running it. The third line, with the value `5` is the result of your `console.log(x)` line in `index.ts`.

Hurray! You've written and run your first (albeit extremely simple) TypeScript program.

## Compiler errors

Now, suppose we had some type errors in our code.

Modify the code in `index.ts` so that we try to give `x` a `string` value instead of a `number`.

```tsx
const x: number = "five";
```

**What do you see?** Hopefully, you see a red line under the `x` variable name.

If you hover your mouse over it, you should see the error message below. `"five"` is a `string` type, we've declared `x` to be a `number` type. TypeScript is telling us that we can't assign a `string` to a `number` variable.

![A compiler error](assets/compiler-error.png "A compiler error")

This is a useful feature in the Replit editor. It automatically and continuously checks your code for compiler errors as you write it. So this can help you avoid simple things like typos (e.g., writing `console.logg` by mistake), but also more insidious things like type errors.