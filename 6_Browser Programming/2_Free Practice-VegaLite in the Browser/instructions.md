# TypeScript and Vega-Lite

In the previous module, we learned how to write TypeScript code that executes when an HTML web-page loads.

In this module, we'll use this to help display Vega-lite visualisations in HTML web pages.
Doing this will allow us to create informative, data-driven web-pages containing figures and insights about datasets that are of interest to us.

In this activity, we'll work together to incorporate a simple Vega-lite visualisation into an HTML webpage.

## Starter files

Before you start, this project will contain the following files, just like we've seen in the previous module.

* `index.html` — The web page that will be displayed in Replit's internal interactive web-page.
* `script.ts` — The TypeScript code that will run in our web page.

When you click **Run**, the `script.ts` file will get compiled and a new `script.js` file will appear. That `script.js` file is included in the `index.html` file using the `<script>` tag, and it gets executed when the web page loads.

## Activity

We'll play with the same Cal Poly Cat Program data that we used in Lab 1. The data can be obtained at the following URL:

* [Cal Poly Cat Program (CPCP) dataset](https://gist.githubusercontent.com/ayaankazerouni/b760d0b26460d0d95d6b02e85d83cca7/raw/ad1b24a675c4285b8e4d1735d83e1dd041bc2f12/cat-program.json)

In Lab 1, we made the following visualisation using the [Vega-lite online editor](https://vega.github.io/editor/#/):

![CPCP chart](assets/image.png)

The code for doing this is is below. Take some time to recall how Vega-lite visualisations work. (Go back and look at the Lab 1 instructions in Canvas for a refresher if you need to.)

```json
{
  "data": {
    "url": "https://gist.githubusercontent.com/ayaankazerouni/b760d0b26460d0d95d6b02e85d83cca7/raw/ad1b24a675c4285b8e4d1735d83e1dd041bc2f12/cat-program.json"
  },
  "mark": {
    "type": "point"
  },
  "encoding": {
    "x": {
      "field": "Arrival Date",
      "type": "temporal"
    },
    "y": {
      "field": "Birthday",
      "type": "temporal"
    },
    "color": {
      "field": "Up for Adoption",
      "type": "nominal"
    },
    "shape": {
      "field": "Sex",
      "type": "nominal"
    }
  }
}
```

In this activity, we'll write TypeScript code to generate a Vega-lite visualisation like the one above.

The creators of Vega-lite have written a software package called "vega-embed" that we can use to generate and display Vega-lite figures in web pages.

### Task 1

Carefully look at the Vega-lite code above. That code is called the _Vega-lite specification_ because it specifies how the chart should look.

**Does the syntax remind you of any other syntax we've studied recently?**

It should remind you of the syntax for **objects** in TypeScript. Vega-lite figures are really nothing but TypeScript objects specifying how the chart should look.

Similar to the `CSCounty` objects we dealt with in the most recent lab, this object is made up of a number of individual data items.

There is one main difference. The individual data items in the Vega-lite specification are not basic data types like `string` or `number`. Instead, they are objects in and of themselves, made up of yet more data items.

For example, the Vega-lite specification above has a `data` field, whose value is another object. That object itself has a `url` field, whose value is a `string`.

Now, because we're in TypeScript, it's important for us to be able to define precisely what the different allowed fields are in this Vega-lite specification. Recall that this is what TypeScript `interface`s are used for.

As you can imagine, the `interface` for Vega-lite specification can get incredible complex! Luckily, we don't have to define it ourselves. We can _import_ it, since the creators of Vega-lite have already defined it for us.

**Go over to the `script.ts` file, and add the following code to the top of the file.**

```tsx
import { VisualizationSpec } from "vega-embed";
```

The above line makes the `VisualizationSpec` interface available for us to use as a data type. It's as if we defined it ourselves!

Now, we can use this `VisualisationSpec` to declare and initialise a new variable containing the code for our figure. Remember, the "code" for a Vega-lite figure is an object.

This means you create the variable just like any other. Use `const`, give it the type `VisualizationSpec`, and for the value, paste the entire code for the Vega-lite figure from above.

```tsx
const myChartSpec: VisualizationSpec = {
  "data": {
    "url": "https://gist.githubusercontent.com/ayaankazerouni/b760d0b26460d0d95d6b02e85d83cca7/raw/ad1b24a675c4285b8e4d1735d83e1dd041bc2f12/cat-program.json"
  },
  "mark": {
    "type": "point"
  },
  "encoding": {
    "x": {
      "field": "Arrival Date",
      "type": "temporal"
    },
    "y": {
      "field": "Birthday",
      "type": "temporal"
    },
    "color": {
      "field": "Up for Adoption",
      "type": "nominal"
    },
    "shape": {
      "field": "Sex",
      "type": "nominal"
    }
  }
};
```

The fact that the code above compiles tells you that the "object" on the right-hand side of the assignment statement is in fact a `VisualizationSpec`.

### Task 2

If we click the **Run** button above, we don't actually see a figure in our HTML page just yet. 
So far, all we have done is _define_ the chart.
We need to actually use this definition.

Let's go ahead and do that.

As I mentioned above, we can use the "vega-embed" package to, well, _embed_ the figure in our HTML webpage.

To do this, we will import the `vegaEmbed` function.

In `script.ts`, modify the `import` statement above so that it imports the `vegaEmbed` function, like so:

```tsx
import vegaEmbed, { VisualizationSpec } from "vega-embed";
```

The `vegaEmbed` function takes two inputs:
* `el`: an identifier for an HTML element where the figure should be drawn.
* `spec`: A `VisualizationSpec`.

We have `spec` taken care of, since we already created the `myChartSpec` variable. We now need to designate a space in our HTML file where the chart should be drawn.

### Task 3

Head over to `index.html`.

In this step, you're going to add a new `div` tag to the HTML file. This is where the new figure will be added.

Add the following code below the `<script>` tag that's on line 13:

```html
<div id="chart"></div>
```

This creates an **empty** `div` tag. It's empty because it has not yet been populated with the chart.

We also give the tag an `id`, that is, a unique identifier.

Now, we can tell `vegaEmbed` where to draw the figure. Head back to `script.ts`, and add the following function call:

```tsx
vegaEmbed('#chart', myChartSpec);
```

This tells vegaEmbed, to draw the chart defined in `myChartSpec` inside the HTML element identified by `'#chart'`. **The hashtag is important**. Hashtags are "short-hand" for referring to an `id` in HTML.

## Run the code

Now, hit the **Run** button, and you should see the figure appear in the Web view.

# Part 2: Exploring an expanded CS for CA dataset

We'll also (in class) discuss the dataset we'll be using for Lab 6. If you missed class or are looking for a refresher on this content, please see the Lab 6 Replit, whose introduction includes a description of the dataset.

(Note that Lab 6 may not be published yet at the time of reading this.)