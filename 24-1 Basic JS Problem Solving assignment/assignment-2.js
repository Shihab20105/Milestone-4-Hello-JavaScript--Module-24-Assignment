/*                          24-1 Basic Javascript Problem Solving assignment 

                                Assignment - (2)

** Question 1:
 Convert radian to degree. You need to write a function where I give a number as the amount of radians, and you return how many degrees are in 5 radians, Return only the number. You must name the function exactly as it is written here.
'radianToDegree'

function radianToDegree(radian){
    return radian * (180 / Math.PI);
}

const result = radianToDegree(5);
console.log(result);
// Output: 286.4788975654116
/ ----------------------------------------------------------------------------------------------------------- /

function radianToDegree(radian){
    return (radian * (180 / Math.PI)).toFixed(1);
}
const result = radianToDegree(5);
console.log(result); 
// Output: 286.5
/ ----------------------------------------------------------------------------------------------------------- /

Here's your code for reference:

function radianToDegree(radian) {
    return radian * (180 / Math.PI); // Converts radians to degrees
}

const result = radianToDegree(5);
console.log(result); 
// Output: 286.4788975654116

What it does:
    * The function 'radianToDegree' correctly converts 5 radians to degrees using the formula.
    * 'console.log(result)' prints the value 286.4788975654116 to the console.

Output:
286.4788975654116

This is the expected output for 5 radians converted to degrees.

If you'd like to round the result to a more concise number (e.g., '286.5'), you can use '.toFixed()' or other rounding methods, but as it stands, this code is perfectly fine for showing the full decimal value.

/ ------------------------------------------------------------------------------------------------------------ /

Here's the breakdown of your code:

function radianToDegree(radian) {
    return (radian * (180 / Math.PI)).toFixed(1); // Converts radians to degrees, rounded to 1 decimal
}

const result = radianToDegree(5);
console.log(result); 
// Output: 286.5

Explanation: 
    1. 'toFixed(1)':
    This method rounds the result to 1 decimal place. So, instead of the full number '286.4788975654116', you get '286.5'.

    2. Output:

    * When you call 'radianToDegree(5)', the function computes the degree equivalent of 5 radians.
    * 'toFixed(1)' ensures that the result is rounded to 1 decimal place.
    * 'console.log(result)' prints '286.5'.
Output:

286.5

Conclusion:
    *The code is perfectly fine and will give you a cleaner, rounded result to 1 decimal place.
    *If you want more or fewer decimal places, you can change the argument inside '.toFixed()', like '.toFixed(2)' for 2 decimal places.
*/
