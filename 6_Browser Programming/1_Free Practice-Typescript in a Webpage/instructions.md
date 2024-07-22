# Programming in the browser

Early in the quarter, I alluded to the fact that the JavaScript language is "special" because, unlike other languages like Python or Java, it can be run inside pretty much every web browser.

In this module we'll see a simple example of writing and running code for the purpose of being run in a browser. However, we'll still continue writing TypeScript code. That TypeScript code will be compiled to JavaScript, and the compiled result is what we will run in the browser.

This Replit environment takes care of many details for you, so you don't have to manually compile the TypeScript yourself. Let's walk through the different pieces at work here.

## The HTML

First, open up `index.html`. As always, this is our "entry point" to the web program.

Most of this file pretty much looks like the HTML files you played with in weeks 1 and 2. It has the `<head>` tag that contains "metadata" like the page title and a link to its (pretty basic) CSS stylesheet.

I want to draw your attention to line 14, i.e., the line that says:

```html
<script src="./script.js" type="module"></script>
```

This introduces a type of tag, the `<script>` tag. This tag is used to include JavaScript code in an HTML web page. The `src` attribute stands for "source", and refers to the path to the JavaScript code we want to include.

In this case, we want to include the file `script.js`, which we expect to be found in the current folder (that's what the `./` means).

**But wait! Where's the file?** Depending on whether you've run the project or not, there may be no `script.js`. However, there _is_ a `script.ts` (a TypeScript file). That's because the `script.js` file is created as a result of compling the TypeScript code written in `script.ts`.

For the remainder of this module, you won't need to make any changes to `index.html`.

## The TypeScript

Let's turn our attention to `script.ts`. It contains no code right now. Let's change that.

Go ahead and add the following code to the file.

```tsx
const message: string = "Hallo!";
const sum: number = 10 + 12;
```

The lines above should be familiar to you; they are regular TypeScript assignment statements.

Now, click the **&#9658; Run** button above this window. You should see the **Console** open on the right-hand side, with some output that looks like this:

```bash
> yarn dev
yarn run v1.22.17
$ tsc && vite

  vite v2.9.9 dev server running at:

  > Local:    http://localhost:3000/
  > Network:  http://172.18.0.12:3000/

  ready in 172ms.
```

Clicking the **&#9658; Run** button does the following three actions:
1. Compiles your `script.ts` code. Notice in the list of **Files** that a new `script.js` file has appeared!
2. Runs a web server. This means that your web page is accessible through a URL (in this example: `http://172.18.0.12:3000`, though your URL might be different). Don't worry about what the numbers mean.
3. Opens the `index.html` in a mini-window within Replit itself.

So our TypeScript file was compiled to a JavaScript file and, because of the `<script>` tag we talked about above, that JavaScript is being included in the webpage (i.e., it gets run as soon as the page finishes loading).

So what's the deal? Why aren't we seeing any outputs or flashing lights or anything?

Well, the `script.ts` is not really doing anything "visible". It's just creating a couple of variables. Let's add two lines to `script.ts`:

```tsx
const message: string = "Hallo!";
const sum: number = 10 + 12;

const sumMessage: string = message + " The sum of 10 and 12 is " + sum + ".";
alert(sumMessage);
```

The variable `sumMessage` stores a longer string message, using the string concatenation we've already talked about. What's new here is the `alert` function.

This function is _specific to the browser_, i.e., you would not have been able to use it in your previous TypeScript labs. It's only now that our code is being run by the browser, that it knows how to do things like `alert`.

So what exactly is `alert`? Well, re-run your code and find out! Click the **Stop** button and then the **&#9658; Run** to re-run.

What happened?

Hopefully, you see a window popup with the message `"Hallo! The sum of 10 and 12 is 22."`. And here lies the power of running TypeScript in the browser—we can now interact with the user interface, and use that ability to create interactive websites.

## Trying something different

As I mentioned above, when you're running TypeScript in the browser, you have access to some special functions and variables that let you interact with what is seen in the browser. 

The `alert` function is one example of this.

Another important item to know about is the `document` object. This is a giant object that represents, well, the _document_ that is being displayed by the webpage. By modifying attributes of this object, you can affect what is seen on the webpage.

For example, add the following line to the bottom of `script.ts`.

```tsx
document.body.style.backgroundColor = 'red';
```

Re-run the project.

Now, you should see the alert popup like before, and after you click "OK", the background color of the entire webpage should change.

Let's talk about what happened.

* `document`, as I said, is an _object_ representing the entire webpage.
* The `document` object has a "child" object called `body`. In your HTML page, this is everything that comes inside the `<body> ... </body>` set of tags (i.e., everything that's actually visible on the page).
* Since the `body` is something that is being displayed, it has a set of `style` attributes.
* As we saw when we learned CSS in Week 1, the background color is an attribute that we can manipulate. We do this by giving a value to the `backgroundColor` attribute.
* The value we gave it is the string `'red'`. Our runtime environment (i.e., the browser) can recognise some common colours by their names (e.g., `"red"`, `"green"`) and also some uncommon colours (e.g., `"burlywood"`).

And voila! The background color of the HTML page changed. In the following modules we'll experiment with some more powerful abilities we have when we run code in the browser.

## Reacting to user events

You can also do things in response to specific user actions.
For example, you can write code to perform specific action each time the user _clicks_ their mouse, _changes_ the text in a text input field, _checks_ or _unchecks_ a checkbox, etc.
There are a huge number of possible interactions a user can perform inside a web page, and TypeScript lets you "hook into" many of them.

I won't go into too many details about this, since you're not likely to need this understanding. BUt if you're interested, you can explore the **Event-driven programming** Replit project.