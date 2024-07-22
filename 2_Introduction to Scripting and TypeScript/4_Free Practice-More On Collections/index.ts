// Important array operations --- you will need most of these for Lab 3

// can't re-assign the variable
const nums: number[] = [46, 52, 81, 32, 9, 8.1, -22.5];

// push -- append to array

// "statement" -- side effects, adds to the list
// "expression" -- it evaluates to a value
const newLength: number = nums.push(10);
console.log(nums);

// indexing -- retrieving items from specific positions, or "index"
// [ 46, 52, 81, 32, 9, 8.1, -22.5, 10 ]

// 0-indexed
const fourth: number = nums[3];

const doesntExist: number = nums[23];
console.log(doesntExist);

// max and min

// Math module
// ... spread operator
const maxVal: number = Math.max(...nums);
const minVal: number = Math.min(...nums);



// includes 

const is10InList: boolean = 
  nums.includes(12);

// indexOf

const positionOf10: number = 
  nums.indexOf(10);

const isInList: boolean = 
  positionOf10 !== -1;


// shift -- remove and return the first item
// empty list gives undefined
const first: number | undefined = nums.shift();

// pop --- remove and return the last item
const last: number | undefined = nums.pop();



// slice -- obtains a "slice" of the array
// start,end --- range

// returns a copy. does not mutate the list
const shorterList: number[] = 
  nums.slice(3, 5)

// start --- everything from the start position onward

const onlyStart: number[] = nums.slice(2);

// ____ --- everything, i.e., a copy of the list

// same as nums.slice(0);
const copy: number[] = nums.slice();



// splice -- remove, replace, or add items in the middle of an array


// start, deleteCount --- remove `deleteCount` items starting at `start`

nums.splice(3, 3);


// start, deleteCount, item1, item2, item3, ... --- remove `deleteCount` items and add the specified items starting at the `start` position

const newList: number[] = 
  [ 0, 1, 2, 3, 6, 7 ];
console.log(newList);

const fourAndFive: number[] = [4, 5];

newList.splice(4, 2, ...fourAndFive);
console.log(newList);





