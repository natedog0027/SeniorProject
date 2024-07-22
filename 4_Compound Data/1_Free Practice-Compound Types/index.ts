// Before we start, an aside about functions

/*
// Global data
const countyNames: string[] = ["s", "f", "fg", "f"];
const schoolsOfferingCS: number[] = [0.9, 0.7, 0.5, 0.54];

// Lists are passed "by reference"
function someFunc(counties: string[], percentages: number[]) {
  const countyCopy: string[] = counties.slice();
  const percentagesCopy: number[] = percentages.slice();
  countyCopy.splice(0, 2);
  percentagesCopy.splice(0, 2);
}

someFunc(countyNames, schoolsOfferingCS);

console.log(countyNames, schoolsOfferingCS);
*/

// COMPOUND TYPES, "OBJECTS"
// (also sometimes called "records" or "dictionaries")

const todaysDate = {
  day: 1,
  month: 'November',
  year: 2023
};

// Reading a field
const day: number = todaysDate['day']; // type is important
const month: string = todaysDate['month'];

// Interfaces

interface CSCounty {
  name: string,
  schoolsOfferingCS: number
};

const sloCounty: CSCounty = {
  name: "San Luis Obispo",
  schoolsOfferingCS: 0.44
};

const santaClara: CSCounty = {
  name: "Santa Clara",
  schoolsOfferingCS: 0.66,
};

const listCounties: CSCounty[] = [sloCounty, santaClara];

// Nested interfaces

interface MyDate {
  month: number,
  year: number,
  day: number
};

interface Cat {
  name: string,
  healthIssues: [],
  isUpForAdoption: boolean,
  dateOfBirth: MyDate, // nested object
  fivFelvDate: MyDate, // nested object
  litterMates: Cat[] // self-referential field
};

const cat: Cat = {
  name: "Ranger",
  healthIssues: [],
  isUpForAdoption: false,
  dateOfBirth: {
    day: 1,
    month: 11,
    year: 2020
  },
  fivFelvDate: {
    day: 1,
    month: 12,
    year: 2020
  },
  litterMates: []
};

// Modifying objects






// Functions using objects























