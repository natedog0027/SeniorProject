/*
In TypeScript, every variable must have a type that is set at compile time.
If you don't explicitly set a type, TypeScript will attempt to infer the type
on its own. However, for the rest of this course, we ask that you explicitly
specify types in all your programs.

Below are some lines of TypeScript code that create and use variables.
*/

/*************************************
***********   NUMBERS   **************
**************************************/
const x: number = 5; // Declare a variable and give it a value. Remember that "const" means this variable's value cannot be changed after this initial assignment.

let z: number; // Declare a variable without giving it a value.
z = 10; // Assign a value to a declared variable.

// Note: The "let" keyword allows you to create variables whose values can be changed. We will prefer to use "const" unless necessary in most cases.

z = 10.5; // This is fine, because 10.5 is a number.

z = "10"; // This causes a type error, because z was declared as a number.

/*************************************
***********   STRINGS   **************
**************************************/
const char: string = "A";
const make: string = "Santa Cruz";
const model: string = "Bronson";

/*************************************
***********   BOOLEANS  **************
**************************************/
const boolTrue: boolean = true;
const boolFalse: boolean = False;
const yetAnother: boolean = "true";

/*************************************
***********   ARRAYS  ****************
**************************************/
// An array in TypeScript is a collection of items of the same type.
// The "scores" list below is declared as a list of numbers. The box brackets
// indicate that "scores" is not just a number, but rather a list of numbers.
const scores: number[] = [83, 42, 77, 92, 73, 95, 81, 42]; 

// A list *must* have items of the same type.
const badScores: number[] = [83, 42, 77, "92", 73, 95, 81, 42]; 

const courses: string[] = ["CSC 123", "CSC 101", "CSC 202", "CSC 203"];

const trueFalse: boolean[] = [true, false, "true", True, False];

// Why do you think this code is not compiling?
const trueFalseBad: boolean[] = ["true", "false"];
