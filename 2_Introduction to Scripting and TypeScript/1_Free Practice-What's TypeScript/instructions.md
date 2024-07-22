
# Introduction to Scripting and TypeScript

## What's JavaScript?

So far we’ve talked about the fundamentals of the Web, and how to create (and host?) webpages using HTML and CSS. HTML and CSS are great for *presenting content*. HTML lets you express your page’s content in terms that your web browser (Chrome, Firefox, etc.) will understand, and CSS helps you control what that content looks like.

So far, the web pages we have created have been *static*, meaning they are not interactive. Once the page is loaded, no further changes are possible unless you manually change the HTML or CSS files and reload the page. We will change that in this module.

There’s a third piece of modern web development that we’re going to touch on, and that is *web scripting*. Just like every web browser knows how to read HTML and CSS use that to render your content, every web browser also knows how to interpret **JavaScript**.

**JavaScript** is a programming language. What makes it “special” is that, unlike other languages, every web browser can interpret and run JavaScript code right out of the box.

Not only that, the browsers also give us useful libraries that we can “hook into” so that we can make our pages interactive.

Some examples of things you can do with JavaScript are:

- Change the values of any CSS style rule after some event takes place. For example, you could change the background color of the webpage each time the user clicks their mouse.
- Automatically reload or redirect the page after some pre-determined length of time. For example, you can imagine doing this when there is updated information to be displayed.

Of course, these are two really simple examples. JavaScript is the workhorse of the modern web. Everything in your browser runs because it knows how to read and run JavaScript!

This quarter, we will build up to writing code that can be executed in our web browsers. For now, we will start by writing and running scripts that can be run “standalone”, i.e., without a browser.

(Well, you're using a browser-based editor, but what I mean is that the JavaScript code you write is being run totally independently from the browser.)

### Node.js

Remember how I said your browser can run JavaScript on its own, and that’s what makes JavaScript special? Well, we’re going to start by using JavaScript just like any other “unspecial” programming language—this is possible using **Node.js** (pronounced “node jay ess” or simply “node”).

Why is it called Node.js? Honestly, I have no idea.

This Replit project is already set up to be able to read and write JavaScript code. Open the file `javascript-fun.js` and write the following code in it:

```js
console.log("This is going to be fun!");
```

You can run this code by going to the **Console** window within Replit. This is a _command line interface_. Instead of using a mouse to click on buttons, you have to type in commands to do things. So in the **Console**, type in:
```bash
node javascript-fun.js
```

And press `Enter`. You should see your message printed to the console.

## TypeScript

TypeScript is a specialised version of JavaScript. The main difference is that it has support for _types_. The goal of this module is understand what exactly that means.

### Data Types

In programming, a data type specifies what the type of a value is. For example, in JavaScript, the value `54` is a `number`. The value `"fifty four"` is referred to as a `string` (as in, a “string of characters”).

JavaScript is a dynamically typed programming language. Let’s unpack that, one word at a time.

* "typed": This has nothing to do with “typing” on your keyboard. Instead, this has to do with the different types of data types that your programs can deal with, like numbers or strings.
* "dynamically": This means that JavaScript figures out the **types** of values and variables “on the fly”, i.e., as the program runs.

JavaScript also allows implicit conversions of variables from one type to another.

For example, consider the following JavaScript program. On the first line, it’s creating a new variable called `course` and giving it the value `"CSC 123"`. We didn’t have to specify the fact that the `course` variable is a `string`. On the second line, we are able to give the `course` variable the value `123`, which is a number. This implicitly converts the course variable from a string to a number.

```js
let course = "CSC 123";
course = 123;
```

While this affords you a certain level of flexibility while programming, it can also lead to hard-to-find bugs in larger programs.

For example, suppose in the future, you have forgotten that you changed course to a number, and you want to know how many characters were in the original "CSC 123" string.

```js
let course = "CSC 123";
course = 123;

// Assume
// some more
// code has been written
// between these lines

console.log(course.length);
```

> ❓ If you run the code above, what do you expect to be printed?

Running the code will print out the word `undefined`. We’ll talk about what that means later this quarter, but that’s certainly not what we wanted here! If I want to know the length of `"CSC 123"`, I am expecting the value `7` to be printed (i.e., the number of characters in the string `"CSC 123"`). However, at the  line where we print, `course` is a `number`, and the JavaScript runner doesn’t know what `length` means for a `number`. So it craps out and says `undefined` instead.

In this particular example, it’s relatively easy to see where we went wrong. But in larger programs, it’s not so simple, and you might spend hours trying to figure out why `course.length` is `undefined`.

Since JavaScript is dynamically typed, by definition issues like this will only reveal themselves at while the program is running. This is bad! Now wouldn’t it be nice if we were warned about things like this before we ran our program in the first place?

Imagine a super-simplified software development lifecycle that goes like this:

![A super simplified software development process.](assets/process1.png)

In general, you want to move any bug-fixing activities “to the left” on the timeline above. It’s better to find a bug before running your code, and definitely before deploying it.

To help with this problem in JavaScript programming, we’re going to use a version of JavaScript that helps us detect type-related errors before we run the program. This version of JavaScript is rather cleverly named **TypeScript**.

### Enter TypeScript

Essentially, TypeScript helps us by moving the **Type-related error** step in the figure above “to the left”.

![A software development process in which the type-related error occurs during compiling, not during running.](assets/process2.png)

It enables us to find (most) type-related errors before we ever run our code. This results in a code-writing process in which we massage out type-related errors _as they appear_.

You can write TypeScript code in the `index.ts` file.

Notice that the file name ends with `ts`, not with `js`. `ts` is the file extension for TypeScript files.

Go ahead and try writing the code we saw earlier, this time specifying the **types** of the variables.

```tsx
let course: string = "CSC 123";
course = 123;
```

What happens when you type this code into `index.ts`? What happens when you click the green **Run** button at the top of the window?