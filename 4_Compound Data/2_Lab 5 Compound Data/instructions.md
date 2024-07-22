# Compound data (objects)

## Objectives

* To use collections of compound data to solve a problem
* To use the definition of an 'interface' to define a type of compound data and name its fields
* To use `if` statements, `for-of` loops, and `functions` to design and implement solutions to complex problems
* To use computation to critically examine inequities in access to K-12 computing Education in the state of California 
* To use computation to critically examine the gender gap in participation in K-12 CS Education in California

## Overview

We've learned a number of TypeScript programming constructs this quarter.
* Statements and expressions
* Data types and variables
* `if`, `else`, and `else-if` statements
* Functions
* Loops and loop patterns for collections

In this lab, we're going to put these constructs together, applied to more complex data (compound) to create solutions to increasingly complex problems. 
Like the previous lab, we'll study data about enrollments in CS classes in California schools.
However, we want to add a lot more data fields for consideration.
For example, if we wanted to know if the counties that have the largest percentage of female students taking computing classes are the same as the counties with the largest number of female students taking the CS AP exam, and whether any of these counties lay in rural areas, we will need more information—thus compound data!

## Instructions

### Part 0 

Similar to prior labs, we have a data array defined for us, but this time in a separate file called `dataset.json`.
The format for this data is very similar to the data you used in the Vega-lite lab.
Take some time to look at this data and see that now for each county we also list several other fields of data associated with that county, such as the total number of students and the percentage of female students, etc.
If you look at 'index.ts', you will see there is some example base code to open the data file (`dataset.json`) and read it into an array of objects.

Your first task is to define a type for our compound data via an `interface`. Please name the type: `CSCounty`. The "type" for a compound value is simply a combination of the types of the simpler values it holds.

For example, suppose you have a set of values that represent a `Person`:
```tsx
{
  name: 'Aakash',
  age: 28,
  canDrive: false
}
```

The `interface` for objects of this type would be:
```tsx
interface Person {
  name: string,
  age: number,
  canDrive: boolean
}
```

This ensures that any future objects of type 'Person' will have the right fields and that those fields will have the right types.

In our `dataset.json`, we have records that look like this:

```json
{
  "County": 'Alameda',
  "schoolsWithCS": 0.53,
  "totalNumStudents": 69296,
  "female": 0.48,
  "totalAPCS": 792,
  "femaleAPCS": 0.34,
  "totalNonAPCS": 6070,
  "femaleNonAPCS": 0.35,
  "isRural": false,
  "medianHouseholdIncome": 112017
}
```

_Note: The dataset provided by the CSforCA organisation does not include non-binary responses._

**Specify an `interface` called `CSCounty` to represent these objects.**

<!-- Then, change the `countyData` array of objects to an array of `CSCounty`, as follows:

```tsx
const countyData: CSCounty[] = JSON.parse(countyDataStr);
``` -->

<!-- Run your code to ensure that you see one example of the compound data printed:

```
{
  County: 'Alameda',
  schoolsWithCS: 0.53,
  totalNumStudents: 69296,
  female: 0.48,
  totalAPCS: 792,
  femaleAPCS: 0.34,
  totalNonAPCS: 6070,
  femaleNonAPCS: 0.35,
  isRural: false,
  medianHouseholdIncome: 112017
}
``` -->

### Implementation tips 
This lab asks you to write a total of 9 functions. No small ask!

Here are some implementation tips.

As always, first come up with a plan to solve the problem. Consider question 1 first. What are the substeps involved in solving this?

In the previous lab, you used `Math.max` or `Math.min` to find the highest or lowest percentage. For this lab we will not be easily able to use these because we no longer have an array of just numbers.  In addition, we no longer need `indexOf` to match that value with a particular county because we have all the data stored together in a single slot/index.
Similar to in lab 4, you may want to modify the original arrays while solving the problem. If you do this, you'll want to work with _copies_ of the original arrays, not the arrays themselves. You can create a copy of an array like this: `const copiedArray: object[] = originalArray.slice();`. All work will then be done only using this copy. (Note you will use your newly defined compound type, not `object`.)

It's a good idea to make a copy of the array as the _first step_ in any function that you write.

### Part 1 — CS enrollments in rural/urban counties

Write **functions** that answer the following questions. Each function should take one input parameter: an array of compound county data.

**I have deliberately not provided the data-set for this lab.** You will first write your functions, and test them yourself with your own test cases.
I will give you the full data-set next week, at which point you will be able to use your code to learn about trends in CS Education in California.

---

To start with, we'd like to compare how rural and urban counties are doing with teaching CS. We'll write functions to help with this.

1. First, we want to know what percentage of counties in California are rural (vs urban). Write a function that takes in an array of `CSCounty` objects and returns the percentage of counties that are rural.

Read the next two questions carefully. Think carefully about what they're asking for. What subgoals can we break the problem into? Can any loop patterns help?

If individual subgoals are reasonably complex, it may make sense to put them into their own functions.

2. Write a function to compute the percentage of students in rural counties who are taking CS courses.

Take a second to think about what this is asking.
* This is a value you need to compute based on the **total population of students in RURAL counties** and the **number of students in those counties who took APCS or Non-APCS computing courses**.

3. Next, also compute the percentage of students in URBAN counties who are taking computing classes.

From questions 2 and 3, which percentage is higher? _(You'll be able to answer this question once I release the data-set.)_

### Part 2 — CS enrollments and income levels

4. What is the average median household income? Each record has a `medianHouseholdIncome`. We would like to find the average (mean) of this, across all counties. This gives us a sense of where the typical California household falls in terms of income levels.

5. We'd like to learn about CS enrollments in terms of income levels. Of the counties with `medianHouseholdIncome` income _less than_ the average, what's the average percentage of schools that offer CS courses?

6. Similarly, of the counties with `medianHouseholdIncome` income _greater than or equal to_ the average, what's the average percentage of schools that offer CS courses?

### Part 3 — CS enrollments and gender

7. What are the names of the 5 counties with the _highest_ percentages of schools offering CS courses?

Notice that this is a rewrite of a question from Lab 4. This time, you have two new skills you can use to solve this problem: compound objects and `for` loops.

Name your function `countiesWithMostCS`—it should ONLY take a single input parameter of the array of compound data. Make sure to specify the type of the input array.

Take a moment to reflect on which parts are easier about keeping all the associated data together, instead of in parallel arrays.

8. What is the (complete compound data of the) 3 counties with the _largest_ percentages of female student enrollment in AP CS courses?

Name your function `countiesWithMostPerFemaleAPCS`—it should ONLY take a single input parameter of the array of compound data. 

9. What is the (complete compound data of the) 3 counties with the _largest_ total number of female student enrollment in AP CS courses?

Name your function `countiesWithMostFemaleAPCS`- it should ONLY take a single input parameter of the array of compound data. Note this requires some thought about how to compute the total number of female computing students enrolled in AP CS.

As usual, remember to specify the _types_ in the functions completely. That is, each parameter's type should be specified, and the functions' return types should be specified. Notice that these questions will require different return types.  After the function, you should be able to print the returned data to answer the question.  For example, if the question were "What is the (complete compound data of the) 3 counties with the _largest_ percentages of female student enrollment in CS *AP* courses?", we should be able to call:

```tsx
const topFemaleAPcounties: CSCounty[] = countiesWithMostFemaleAPCS(countyData);
console.log(topFemaleAPcounties);
```

and produce a result like this:
```tsx
[
  {
    County: 'Santa Cruz',
    schoolsWithCS: 0.38,
    totalNumStudents: 12568,
    female: 0.48,
    totalAPCS: 25,
    femaleAPCS: 0.48,
    totalNonAPCS: 554,
    femaleNonAPCS: 0.33,
    isRural: false
  },
  {
    County: 'Glenn',
    schoolsWithCS: 0.15,
    totalNumStudents: 1775,
    female: 0.51,
    totalAPCS: 11,
    femaleAPCS: 0.45,
    totalNonAPCS: 73,
    femaleNonAPCS: 0.42,
    isRural: false
  },
  {
    County: 'Shasta',
    schoolsWithCS: 0.35,
    totalNumStudents: 8438,
    female: 0.49,
    totalAPCS: 100,
    femaleAPCS: 0.43,
    totalNonAPCS: 647,
    femaleNonAPCS: 0.46,
    isRural: false
  }
]
```

