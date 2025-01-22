/*                          24-1 Basic Javascript Problem Solving assignment 

                                Assignment - (5)
** Question 5:
'isBestFriend' For this i will take two parameters. And as parameter i will take two objects and every object must have at least two properties.
    {name: 'Tom', friend: 'Rock'}   // First parameter
    {name: 'Rock', friend: 'Tom'}   // Second parameter

What do you have to check, if the first object i gave that one 'name' property if second objects 'friend' property value are same, and the first object we have that one 'friend' name, and the second object we have that one 'name', if both are similar then we will call them friend. 
    That means Tom saying Rock his friend
    And Rock saying Tom his friend.

And they will became friend. 

    {name: 'Chris', friend: 'John'} 
    {name: 'Roy', friend: 'Chris'}

You have to return true or false?
You must name the function exactly as it is written here.
    'isBestFriend'


function isBestFriend(obj1, obj2) {
    // Check if obj1's friend matches obj2's name and obj2's friend matches obj1's name
    return obj1.name === obj2.friend && obj1.friend === obj2.name;
  }

console.log(isBestFriend({name: 'Tom', friend: 'Rock'}, {name: 'Rock', friend: 'Tom'}));
console.log(isBestFriend({name: 'Chris', friend: 'John'}, {name: 'Roy', friend: 'Chris'}));
// Output: 
true
false

Function Overview:
The 'isBestFriend' function checks if two people (represented by objects) consider each other as friends. It returns 'true' if they both identify the other as their friend and 'false' otherwise.

Parameters:
    * 'obj1' and 'obj2' are objects.
    Each object has at least two properties:
        * 'name': The name of a person.
        * 'friend': The name of the person this person considers a friend.

Example of Input:

obj1 = {name: 'Tom', friend: 'Rock'};
obj2 = {name: 'Rock', friend: 'Tom'};

Code Explanation:

return obj1.name === obj2.friend && obj1.friend === obj2.name;

This line of code does two comparisons:

    1. 'obj1.name === obj2.friend'
        It checks if the 'name' property of 'obj1' matches the 'friend' property of 'obj2'.
        In the example, ' 'Tom' === 'Tom' ' (true).

    2. 'obj1.friend === obj2.name'
        It checks if the 'friend' property of 'obj1' matches the 'name' property of 'obj2'.
        In the example, ' 'Rock' === 'Rock' ' (true).

Both comparisons must be true for the function to return 'true'. The '&&' (logical AND) operator ensures this condition. If either comparison is false, the function will return 'false'.

Example Usage:

console.log(isBestFriend({name: 'Tom', friend: 'Rock'}, {name: 'Rock', friend: 'Tom'})); // true
console.log(isBestFriend({name: 'Chris', friend: 'John'}, {name: 'Roy', friend: 'Chris'})); // false

Summary:
    * This function verifies a mutual friendship by checking if both objects list each other as friends.
    * It returns 'true' if the names match both ways, indicating they are best friends, and 'false' otherwise.
/ ------------------------------------------------------------------------------------------------------------- /

function isBestFriend(obj1, obj2) {
    // Destructure name and friend from obj1 and obj2 for better readability
    const { name: name1, friend: friend1 } = obj1;
    const { name: name2, friend: friend2 } = obj2;
  
    // Check if obj1's friend matches obj2's name and obj2's friend matches obj1's name
    return name1 === friend2 && friend1 === name2;
  }
  
  // Example usage:
  console.log(isBestFriend({name: 'Tom', friend: 'Rock'}, {name: 'Rock', friend: 'Tom'})); // true
  console.log(isBestFriend({name: 'Chris', friend: 'John'}, {name: 'Roy', friend: 'Chris'})); // false
// Output:
true
false
*/