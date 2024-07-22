// Functions in TypeScript

// f(x) = x + 1

const atkin: string = "atkin";


// Declaration and definition
// Scope is a property of variables 
function add1(x: number): number {
  console.log(atkin);
  return x + 1;
}

for (let i = 1; i <= 10; i= i + 1) {
  console.log(i);
}

// Invocation or "function call"
// Or "function application"
const r: number = add1(add1(3)) + 5;

// Scope
function squared(x: number): number {
  return Math.pow(x, 2);
}

function containsA(str: string): boolean {
  // includes
  return str.includes("A");
}

const r3: boolean = containsA("CSC 123");

const r2: number = add1(squared(10));




// Functions are abstractions — diameter example 

// 1. Formulate the data definitions
// 2. Formulate a plan
// 3. Write the function
function areaFromDiameter(diameter: number): number {
  const r: number = diameter / 2;
  const area: number = Math.PI * Math.pow(r, 2);

  return area;
}

function areaOfAnnulus(dOuter: number, dInner: number): number {
  return areaFromDiameter(dOuter) - areaFromDiameter(dInner);
}

const areaAnnulus1: number = areaOfAnnulus(20, 10);
console.log(areaAnnulus1);












// Beware of mutation 
// Mutable global data


// californiaCounties
// percentages
// Math.min, indexOf, splice

const listOfNums: number[] = [ 4, 5, 7, 2, 43];

function mutatesList(l: number[]): number[] {
  // Make a copy
  const lCopy: number[] = l.slice();
  lCopy.splice(0, 2); // mutated 
  return lCopy;
}




// Control flow using conditionals (take a look at control-flow-1.ts)


// if-else
// Can drive?

function canDrive(age: number): boolean {
  // Only one of these can run
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

// if-else-if -- Full, Learners, No license
function typeOfPermit(age: number): string {
  // Only one condition will ever run
  let result: string;
  if (age >= 16) {
    result = 'learners';
  } else if (age >= 18) {
    result = 'full';
  } else {
    result = 'no license'; 
  }

  return result;  
}







const gt: boolean = 1 >= 2;

// const gt2: boolean = 1 >= "csc 123";

function doubleEquals(input1: any, input2: any) {
  console.log(input1 != input2);
}

function tripleEquals(input1: any, input2: any) {
  console.log(input1 !== input2);
}

doubleEquals(1, "1");
tripleEquals(1, "1");
console.log("csc 123".includes("123") === false);

// BOOLEAN OPERATORS

// boolean, boolean => boolean
// and, or, not

function cannotBeServed(age: number, isAlcohol: boolean): boolean {
  return age < 21 && isAlcohol; // De Morgan's law
}

