# Event-driven Programming

Like any website or app on your phone or computer, this webpage is _user interface_ (UI). This means you can interact with parts of the page (e.g., by clicking or pressing keys on your keyboard) to accomplish some tasks.

UI programming environments (for example, TypeScript code that's being written to run in the browser) are different from "regular" programming environments (for example, TypeScript code that's being run directly on your computer).

When you run a TypeScript program on your computer, that program runs more-or-less from top-to-bottom. We call this an _imperative_ programming environment. The order in which statements are written in the TypeScript file dictates the order in which they will run.

However, the situation is different when code is being run in the browser. In the browser, in addition to accomplishing some set of tasks in order, you often want to respond to interactions by the user. Some examples are:

* You allow the user to choose a file from their computer, and when they have chosen it, you read the contents of that file.
* When the user clicks a button, you trigger some action, such as logging in, "liking" a post, or posting a comment.
* When the user scrolls, you load more data so that they never reach the end of a page. This "infinite scroll" experience is a big part of what keeps us glued to our phones on apps like Instagram or TikTok.

This style of programming is called _event-driven_ programming. Our programs are driven by _events_ that take place in the browser. We can "listen" for those events and take some actions when they are triggered.

## An example: Click listener 

Web browsers provide several event types for which we can "listen". This section outlines one example: a **click** listener.

Click the **Run** button at the top of this window. You should see an HTML page appear on the right, with the heading **Event-driven programming examples**. You should also see a button with the label **Click me!**.

If you click on that button, nothing's going to happen just yet. Let's write code in `script.ts` that would update the message `This button has been clicked 0 times.` with each click of the button.

First, let's examine `index.html`. See that the button is represented by a `<button>` tag, and has been given an `id` of `myButton`. This unique identifier lets us refer to the button in code.

Additionally, we have the message `This button has been clicked 0 times.`, and the `0` is in a `<span>` tag. A `<span>` is a simple container for some HTML code—in this case, it contains the string "0". This span has been given the unique id `clickCount`. You will soon see why it's useful to uniquely refer to this portion of the message.

Now open `script.ts` and make the following changes:

1. First, create a variable to help keep track of how many times it has been clicked. We'll increase this variable's value by 1 each time the button is clicked.
 
```tsx
let clickCount: number = 0;
```

2. Next, we add a _listener_ to listen for clicks on `myButton`.

This takes place in two steps:
* First, you obtain a reference to the HTML element to which you want to add a listener. In this case, we want a reference to the `button`. You can do this by using `document.querySelector`.

```tsx
const button: HTMLElement = document.querySelector('#myButton');
```

**This `querySelector` function is your bread and butter if you want to listen to user interaction events!**

We use the string `"#myButton"` to indicate that we are looking for an element with the id `myButton`. The hashtag is required! To select elements by their CSS classes, you would use a dot `.` instead of a hashtag.

* Next, you add the event listener. You can do this by using `addEventListener` on the element that was obtained in the previous step.

To add an event listener to an element, we must specify two things:

* The type of event to listen for. In this case, we are listening for a `"click"`.
* The action that must be taken when the event is triggered (i.e., what should happen when the button is clicked). This action is specified as an _anonymous function_.

Let's look at an example below:

```tsx
const button: HTMLElement = document.querySelector('#myButton');
button.addEventListener('click', function(event: Event) {
  // Things that should happen when the button is clicked.
});
```

The `button` variable holds the `HTMLElement` (i.e., our button) to which we add the event listener. It listens for `"click"` events, and defines a `function` which will get called each time the click takes place. Right now, the function doesn't do anything.

The function is _anonymous_ because we haven't given it a name. We don't need to, because we'll never manually call this function ourselves. It will automatically be called each time the button is clicked.

The function takes one input of type [`Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event). We don't need to bother with this input, so we'll just ignore it.

Now within the function, we can specify what should happen when the button is clicked. Here's our strategy for doing this:
1. Update the `clickCount` variable that we had initialised to `0` earlier. Increase its value by 1.
2. Obtain a reference to the `<span>` in the HTML message that says how many times the button was clicked.
3. Update the HTML to use the new value of our `clickCount` variable.

Here is the code in full:

```tsx
// We use "let" instead of "const" because the value of clickCount will change.
let clickCount: number = 0;

const button: HTMLElement = document.querySelector('#myButton');
button.addEventListener('click', function(event: Event) {
  // Things that should happen when the button is clicked.
  clickCount = clickCount + 1;
  const messageSpan: HTMLElement = document.querySelector('#clickCountMessage');
  messageSpan.innerHTML = clickCount.toString();
});
```

When you have an `HTMLElement`, you can use its `innerHTML` property to read or update its contents. This property is a `string`, so we have to convert our `clickCount` variable to a `string` before updating the message.
