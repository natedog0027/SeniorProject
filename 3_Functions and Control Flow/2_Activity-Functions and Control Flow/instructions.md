# In-class activity—Functions  and control flow

Work in `index.ts` as usual. You're free to discuss these questions with your tablemates, but each student must make their own submission.

1. Write a function called `celsiusToFahrenheit` which takes in a temperature in celsius and converts it to fahrenheit. The formula for the conversion is: `f = c * 9 / 5 + 32`.

Test your function. Invoke it with some inputs you choose and check that the output is what you expect.

2. Write another function called `isSuitableForHumans` which checks if a given temperature is suitable for humans. The function should take in two inputs:
 
* the temperature that needs to be checked
* the unit for the provided temperature — is it in Celsius or Fahrenheit? (We will pretend Kelvin doesn't exist for this assignment)

The function should tell us if the provided temperature is suitable for humans or not. Humans can survive in temperatures ranging from `-40 F` to `108.14 F` (inclusive). 

Test this function as well.

**Note**:
Be sure to completely specify types everywhere. This includes for variables inside functions, function inputs, and function return types.
