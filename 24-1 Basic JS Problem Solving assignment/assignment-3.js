/*                          24-1 Basic Javascript Problem Solving assignment 

                                Assignment - (3)

** Question 2: 
You have to check, I will give you a file name, you tell me whether it is a JavaScript file or not. You must name the function exactly as it is written here. Return output as true or false? 
'isJavaScriptFile'

    Examples:
    script.js
    app.min.js
    main.module.js

    index.html
    style.css
    data.json
    image.png

function isJavaScriptFile(fileName){
    return fileName.endsWith('.js'); // Checks if the file name ends with '.js'
}

console.log(isJavaScriptFile('script.js'));
console.log(isJavaScriptFile('app.min.js'));
console.log(isJavaScriptFile('main.module.js'));

console.log(isJavaScriptFile('index.html'));
console.log(isJavaScriptFile('style.css'));
console.log(isJavaScriptFile('data.json'));
console.log(isJavaScriptFile('image.png'));
// Output:
true
true
true
false
false
false
false

Explanation:
'fileName.endsWith('.js')' checks if the file name ends with the '.js' extension, returning 'true' for JavaScript files and 'false' for others. 
/ ------------------------------------------------------------------------------------------------------------ /

Or:

Code with Regular Expression:

function isJavaScriptFile(fileName) {
    return /\.js$/.test(fileName); // Uses a regular expression to check if it ends with '.js'
}

console.log(isJavaScriptFile('script.js')); 
console.log(isJavaScriptFile('app.min.js'));
console.log(isJavaScriptFile('main.module.js'));

console.log(isJavaScriptFile('index.html'));
console.log(isJavaScriptFile('style.css'));
console.log(isJavaScriptFile('data.json'));
console.log(isJavaScriptFile('image.png'));
// Output:
true
true
true
false
false
false
false

Explanation:
    * '/\.js$/': This regular expression checks if the string ends with '.js'.
        * '\.' matches the literal dot character.
        * '$' asserts that '.js' is at the end of the string.
    * '.test(fileName)' returns 'true' if the pattern matches and 'false' otherwise.

This approach works exactly like the previous method but showcases another technique using regular expressions.

* Both approaches are effective, but they have different use cases and performance implications. Here's a comparison to help you decide which one is better for your needs.

1. 'Using endsWith('.js')' (First Method)

    Advantages:
        * Simpler and more readable: Easy to understand and maintain.
        * Built-in method: Optimized for string operations.
        * Recommended for modern browsers: It’s supported in most modern JavaScript environments.
    Disadvantages:
        * Limited to newer environments: 'endsWith()' is not available in very old JavaScript engines (pre-ES6).

2. Using Regular Expression (Second Method)

    Advantages:
        * More flexible: Can be extended easily for more complex patterns (e.g., handling multiple extensions).
        * Works in older environments: Supported in older JavaScript versions (pre-ES6).
    Disadvantages:
        * Less readable: Regular expressions can be harder to understand at a glance.
        * Slightly slower: Regular expressions are generally a bit slower than simple string methods for basic checks.


Recommendation:
For this specific task (checking if a file name ends with '.js'):

    * Use 'endsWith()' if readability and simplicity are your priority, especially if you're working in modern environments.
    * Use the regular expression method if flexibility or compatibility with older environments is a concern or if you plan to check more complex patterns in the future.

Conclusion
    * 'endsWith()' is preferred for this specific use case because it’s easier to read and maintain.
*/