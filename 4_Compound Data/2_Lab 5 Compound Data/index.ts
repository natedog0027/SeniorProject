import fs from 'fs';

// This is file path
fs.readFileSync('somefile.txt');





// Write your code below.
interface CSCounty {
  County: string,
  schoolsWithCS: number,
  totalStudents: number,
  totalCSStudents: number,
  isRural: boolean,
  medianHouseholdIncome: number
}

function percentageRural(counties: CSCounty[]): number {
  return counties.filter((c) => c['isRural']).length / counties.length;
}

function percentRuralInCS(counties: CSCounty[]): number {




  counties.sort((a, b) => b['schoolsWithCS'] - a['schoolsWithCS'])
    .slice(0, 5);

  
  // Total students in Rural counties
  const studentsInRural: number = counties
    .filter((c) => c['isRural']) // CSCounty[]
    .map((c) => c['totalStudents']) // number[]
    .reduce((acc, curr) => acc + curr); // number

  // Total CS students in rural counties
  const csStudentsInRural: number = counties
    .filter((c) => c['isRural']) // CSCounty[]
    .map((c) => c['totalCSStudents']) // number[]
    .reduce((acc, curr) => acc + curr); // number

  return csStudentsInRural / studentsInRural;
}
