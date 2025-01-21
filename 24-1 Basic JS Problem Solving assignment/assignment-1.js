/*                          24-1 Basic Javascript Problem Solving assignment 

                                Assignment - (1)

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

/ --------------------------------------------------------------------------------------------------------- /  

function radianToDegree(radian) {
In this line:

    1. 'radian' is the parameter name.
        * It acts as a placeholder to represent any value you pass into the function when calling it.
        * You can think of it as a local variable that temporarily holds the input value provided by the function call.
    
    2. You can choose any name for the parameter, but it should be meaningful.

        * In this case, "radian" is a good name because it describes the value the function expects.
        * The function will work the same even if you use a different parameter name, like "angleInRadians". The name itself doesn’t matter to JavaScript, but using a descriptive name improves readability.

Example of changing the parameter name:

function radianToDegree(angleInRadians) {
    return angleInRadians * (180 / Math.PI); // Converts radians to degrees
}

const result = radianToDegree(5); // Stores the result of the conversion // Works the same, with 5 as input
console.log(result);
// Output: 286.4788975654116

In summary, the first line declares the parameter (radian), and you use that name inside the function body. However, the name you use when calling the function does not have to be "radian"—you pass any value directly.
/ ------------------------------------------------------------------------------------------------------------- /

You can name the parameter anything you want, as long as it makes sense and helps you understand the code. So if you write 'degree' instead of 'radian', it will still work perfectly fine.

Here's an example where the parameter is named 'degree' instead:


function radianToDegree(degree) {
  return degree * (180 / Math.PI); // Converts radians (degree here) to degrees
}

console.log(radianToDegree(5)); // Outputs the result
// Output: 286.4788975654116
/ ------------------------------------------------------------------------------------------------------------- /
Or:

function radianToDegree(degree) {
    return degree * (180 / Math.PI); // Converts radians (degree here) to degrees
  }
  
const result = radianToDegree(5); 
console.log(result); 
// Output: 286.4788975654116

Key Points:
    * The parameter name (degree) is just a placeholder for the value that will be passed when the function is called.
    * The function will still perform the same calculation, as long as the internal logic (the formula) is correct.
So, it's totally okay to use 'degree' as a parameter name, but remember that the function name (radianToDegree) implies converting radians to degrees, so naming the parameter 'degree' might be a bit confusing, as it sounds like the function is doing the opposite.

To keep things clear:

    * 'radian' makes sense in the context of this function because you're converting radians to degrees.

But functionally, it's entirely up to you to choose parameter names!
*/