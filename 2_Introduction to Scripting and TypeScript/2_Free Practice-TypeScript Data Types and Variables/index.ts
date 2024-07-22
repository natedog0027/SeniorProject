/*
NUMBERS
*/

// declare -- create
// initialise -- give it an initial value

const myNum: number = 12;
let myOtherNum: number = 13;

// complex expressions

const exp: number = ((myNum + 2) / (8 * 2));
// const n: string = 10;

/*
STRINGS Text
*/

// double quotes or single quotes
const myStr: string = "csc 123";
const singleQuotes: string = 'csc 123';

// using quotes inside strings
const quote: string = 'He said "What\'s up"';

// string concatenation
const first: string = "CSC";
const second: string = "123";

const l: number = first.length;

const combined: string = first + " " + second;

// type coercion

// string + number => string
const whichType: string = first + 123;

/*
BOOLEANS --- true or false
*/

const t: boolean = true;
const f: boolean = false;

// >, >=, <, <=, ==

// false 0, true 1
console.log(false < true);

// Not operator

const flipped: boolean = !t;

/*
ARRAYS -- collection, lists
*/
const myList: number[] = [1, 2, 3, 4];
const emptyList: number[] = [];

// push to array

// even though it is a const
myList.push(5); // mutating the exist array
emptyList.push(4);

// 2-dimensional
// City { string, number }
const table: string[][] = [
  ["San Luis Obispo", "50000"],
  ["San Diego", "100000"]
];


/*
TYPE INFERENCE
*/
let inferred: string = "CSC 123";

// Not specifying a type lets you do gross things like this
// This type gets inferred as any[] (which is TypeScript's way of saying it doesn't what this is.)
const anyList = [];
anyList.push(10);
anyList.push(false);
anyList.push([1, "false"]);

// MORE ABOUT ARRAYS

// Operations on collections

// push 

// retrieve item

// indexOf

// max, min

// slice

// splice