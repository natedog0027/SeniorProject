interface Course {
  name: string,
  fullName: string,
  order: number
}

const names: Course[] = [
  {
    name: 'CSC 123',
    fullName: 'Introduction to computing',
    order: 0
  },
  {
    name: 'CSC 101',
    fullName: 'Fundamentals of computer science',
    order: 1,
  },
  {
    name: 'CSC 202',
    order: 2
  },
  {
    name: 'CSC 203',
    order: 3
  }
];

// Teach it how to compare two Course objects
// a negative number if c1 < c2
// a positive number c1 > c2
// zero if c1 === c2
function compareCourses(c1: Course, c2: Course): number {
  return c1['fullName'].length - c2['fullName'].length;
}

// names.sort(); // "Commonsense sort" if available, otherwise converts to a string

names.sort(compareCourses);

console.log(names);