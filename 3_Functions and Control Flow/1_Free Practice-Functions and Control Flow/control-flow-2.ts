function areaFromDiameter(diameter: number): number {
  const area: number = Math.PI * (diameter / 2) * (diameter / 2);
  return area;
}

// SCOPE

const ten: number = 10;
const five: number = 5;

function areaOfAnnulus(dInner: number, dOuter: number): number {
  const outerArea: number = areaFromDiameter(dOuter);
  const innerArea: number = areaFromDiameter(dInner);

  return outerArea - innerArea; // forces an exit from the function
}

const area: number = areaOfAnnulus(5, 10); // control is passed to that function


const result: string = "If an annulus has an outer circle with area " + ten + " and an inner circle with area " + five + ", its area is " + area;

const A: boolean = true;
const B: boolean = false;
