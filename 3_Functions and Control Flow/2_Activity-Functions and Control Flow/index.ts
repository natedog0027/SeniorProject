/*
1. Write a function called `celsiusToFahrenheit` which takes in a temperature in celsius and converts it to fahrenheit. The formula for the conversion is: `f = c * 9 / 5 + 32`.
*/

function celsiusToFahrenheit(tempInC: number): number {
  return tempInC * 9 / 5 + 32;
}

/*
2. Write another function called `isSuitableForHumans` which checks if a given temperature is suitable for humans. The function should take in two inputs:
* the temperature that needs to be checked
* the unit for the provided temperature — is it in Celsius or Fahrenheit? (We will pretend Kelvin doesn't exist for this assignment)

The function should tell us if the provided temperature is suitable for humans or not. Humans can survive in temperatures ranging from `-40 F` to `108.14 F` (inclusive). 
*/

function isSuitableForHumans(temp: number, isInFahrenheit: boolean): boolean {
  // temp is not a constant; it was (implicitly) declared with let
  if (!isInFahrenheit) {
    temp = celsiusToFahrenheit(temp);
  }

  return temp >= -40 && temp <= 108.14;
}
