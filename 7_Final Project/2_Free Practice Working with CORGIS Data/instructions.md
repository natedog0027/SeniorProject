# Working with CORGIS datasets

This Replit is meant to demonstrate how you can work with a [CORGIS](https://think.cs.vt.edu/corgis/json/) dataset of your choosing.

While CORGIS provides a wonderful array of datasets about various topics, the structure in which it makes data available can be a bit tricky to work with.
Specifically, I am talking about its JSON data — "JSON" stands for "JavaScript Object Notation", and it is the data format we have been using all quarter.

I _really_ don't want the data format to stop you from exploring the topic you're interested in. So this demo will show you how to work with a format that may not necessarily be similar to what we've seen this quarter.

## An example dataset

I am going to pick a dataset more-or-less at random from [the CORGIS website](https://think.cs.vt.edu/corgis/json/).
For this example, let's go with **[The Astronauts dataset](https://think.cs.vt.edu/corgis/json/astronauts/)**.
It contains publicly available data about astronauts before January 15, 2020.

An example record for this dataset is:

```ts
{
  "Profile": {
    "Astronaut Numbers": {
      "Overall": 1,
      "Nationwide": 1
    },
    "Name": "Gagarin, Yuri",
    "Gender": "male",
    "Birth Year": 1934,
    "Nationality": "U.S.S.R/Russia",
    "Military": true,
    "Selection": {
      "Group": "TsPK-1",
      "Year": 1960
    },
    "Lifetime Statistics": {
      "Mission count": 1,
      "Mission duration": 1.77,
      "EVA duration": 0.0
    }
  },
  "Mission": {
    "Role": "pilot",
    "Year": 1961,
    "Name": "Vostok 1",
    "Vechicles": {
      "Ascent": "Vostok 1",
      "Orbit": "Vostok 2",
      "Decent": "Vostok 3"
    },
    "Durations": {
      "Mission duration": 1.77,
      "EVA duration": 0.0
    }
  }
}
```
Each record in this dataset is actually a _mission_, not an astronaut.
So some individual astronauts might appear multiple times in this dataset.

As you can see, the dataset contains _nested_ records. That is, it contains records within records.
From a TypeScript perspective, this shouldn't present too much of a challenge, since you can use the box bracket syntax (`[]`) to grab specific data from inside the record.

### An example task

For example, suppose we have all the astronaut data and we want to find the average amount of EVA time that occurs per astronaut per mission.
"EVA" stands for "extravehicular activity".
In our dataset, the `EVA duration` field represents the number of hours an astronaut spent outside their spacecraft in outer space (e.g., because they're fixing something on the outside of the craft, they're on the Moon, and so on).

We can write something like this (assuming that we have a variable called `data` that contains all the records):

```ts
// From the array of records, obtain an array of numbers
// representing each astronauts EVA time on each mission
const evaHours: number[] = data.map((d) => d['Mission']['Duration']['EVA duration']);

// Then compute the average like you're used to
const totalEVAHours: number = evaHours.reduce((a, b) => a + b);
const averagePerAstronautPerMission: number = totalEvaHours / evaHours.length;
```

### Using the dataset in Vega-lite

If we want to use the data in Vega-lite, we'll need to do some work to get it into the shape we want.

Recall how you draw charts in Vega-lite: You provide a `data` attribute (the data to be drawn), and you map individual _fields_ in the data to specific _visual channels_. For example, in the Cat Program dataset, we did something like:

```json
{
  "data": {
    "url": "...."
  },
  "mark": "point",
  "encoding": {
    "x": {
      "type": "temporal",
      "field": "Birthday"
    },
    "y": {
      "type": "temporal",
      "field": "Arrival Date"
    }
  }
}
```

This is only possible because `Birthday` and `Arrival` date are "top-level" fields in each Cat Program record.
This aalows allows us to simply provide the names of those fields as `string`s, and Vega-lite knows how to go into each record to obtain the required values.

Now let's turn back to our Astronaut dataset. If we wanted to plot `EVA duration`, which is a couple of levels deep in the record, we can't simply provide a `string` to refer to the field we want.

So we will use TypeScript to "flatten" the object into the shape we want before plotting a chart.

### Flattening an object for plotting in Vega-lite

(I definitely did not get time to write this. See the example in `script.ts` and your notes from class, or ask me if you have questions.)
