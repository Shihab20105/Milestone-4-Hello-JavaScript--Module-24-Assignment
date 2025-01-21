/*                          24-1 Basic Javascript Problem Solving assignment 

                                Assignment - (4)

** Question 4: 
For example, I am going on a picnic. I can use three types of transportation. How much do I have to pay for public bus?

    Reserved bus capacity 50
    Reserved microbus capacity 11
    Rest will go by public bus

Total people 65
    Reserved bus will take 50 (With the bus i will take 50, even not less than 50. That means i will take first 50.)
    People remaining 15
    Microbus will take 4
    Public bus will take rest 

Public bus fare 250

You must name the function exactly as it is written here.
    'publicBusFare'

function publicBusFare(totalPeople){
    const reservedBusCapacity = 50;
    const microbusCapacity = 11;
    const publicBusFarePerPerson = 250;

    let remainingAfterBus = totalPeople % reservedBusCapacity;
    let remainingAfterMicrobus = remainingAfterBus % microbusCapacity;

    const publicBusFareTotal = remainingAfterMicrobus * publicBusFarePerPerson;
    return publicBusFareTotal;
}
console.log(publicBusFare(65));
// Output: 1000 
/ ------------------------------------------------------------------------------------------------------------- /
Or:

function publicBusFare(totalPeople) {
    const reservedBusCapacity = 50;
    const microbusCapacity = 11;
    const publicBusFarePerPerson = 250;

    // Step 1: Calculate remaining people after using the reserved bus
    let remainingAfterBus = totalPeople % reservedBusCapacity;

    // Step 2: Calculate remaining people after using the microbus
    let remainingAfterMicrobus = remainingAfterBus % microbusCapacity;

    // Step 3: Calculate total fare for remaining people using public bus
    const publicBusFareTotal = remainingAfterMicrobus * publicBusFarePerPerson;

    return publicBusFareTotal;
}

// Example usage
console.log(publicBusFare(65));
// Output: 1000

Explanation:

1. 'remainingAfterBus = totalPeople % reservedBusCapacity':

    * 'totalPeople % reservedBusCapacity' uses the modulo operator ('%') to find the remainder when 'totalPeople' is divided by the capacity of the reserved bus.
    * The reserved bus takes as many full loads as possible (50 people per bus).
    * The remainder (people who cannot fit on the reserved bus) is assigned to 'remainingAfterBus'.

    Example:
    If 'totalPeople = 65' and 'reservedBusCapacity = 50':
    'remainingAfterBus = 65 % 50 = 15'
    So, 15 people are left after filling the reserved bus.

2. 'remainingAfterMicroBus = remainingAfterBus % microbusBusCapacity':

    * This line uses the modulo operator again to find how many people are left after using as many full microbuses (11 people per microbus) as possible.
    * It divides 'remainingAfterBus' by 'microbusBusCapacity' and keeps the remainder.
    
    Example:
    If 'remainingAfterBus = 15' and 'microbusBusCapacity = 11':
    'remainingAfterMicroBus = 15 % 11 = 4'
    So, 4 people remain after using the microbus.

3. 'publicBusFareTotal = remainingAfterMicroBus * publicBusFarePerPerson':

    * The final fare for the public bus is calculated by multiplying the number of people left ('remainingAfterMicroBus') by the fare per person ('publicBusFarePerPerson').

    Example:
    If 'remainingAfterMicroBus = 4' and 'publicBusFarePerPerson = 250':
    'publicBusFareTotal = 4 * 250 = 1000'

4. 'return publicBusFareTotal':

    * The function returns the total fare for the public bus passengers.

Summary:
    * The reserved bus fills first, and any remaining people are handled by the microbus.
    * The modulo operator ('%') ensures only the leftover people are counted for each step.
    * Finally, the total fare is calculated based on the remaining people using the public bus.

Here’s the breakdown of how the function works with 'totalPeople = 65':

Steps:

1. Reserved Bus Capacity:
    'totalPeople = 65'
    'reservedBusCapacity = 50'
    'remainingAfterBus = 65 % 50 = 15'
    So, after filling the reserved bus, 15 people remain.

2. Microbus Capacity:
    'microbusBusCapacity = 11'
    'remainingAfterMicroBus = 15 % 11 = 4'
    So, after using the microbus, 4 people remain.

3. Public Bus Fare Calculation:
    'publicBusFarePerPerson = 250'
    'publicBusFareTotal = 4 * 250 = 1000'

Output:
The function correctly returns '1000', which is the total fare for the 4 people who need to use the public bus. Therefore, the result is accurate based on the given transportation rules and fare per person.


function publicBusFare(totalPeople){
    const reservedBusCapacity = 50;
    const microbusCapacity = 11;
    const publicBusFarePerPerson = 250;

    // Step 1: Calculate people remaining after using reserved bus
    let remainingAfterBus = totalPeople > reservedBusCapacity ? totalPeople - reservedBusCapacity : totalPeople;
    while (remainingAfterBus >= reservedBusCapacity){
        remainingAfterBus -= reservedBusCapacity;
    }

    // Step 2: Calculate people remaining after using microbus
    let remainingAfterMicroBus = remainingAfterBus > microbusCapacity ? remainingAfterBus - microbusCapacity : remainingAfterBus;
    while(remainingAfterBus >= microbusCapacity){
        remainingAfterBus -= microbusCapacity;
    }

    // Step 3: Calculate total fare for the remaining people using public bus
    const publicBusFareTotal = remainingAfterMicroBus * publicBusFarePerPerson;
    return publicBusFareTotal;
}

console.log(publicBusFare(65));
// Output: 1000

Let’s break down each step of this code and explain how it works:

Step 1: Calculating Remaining People After Using Reserved Bus

let remainingAfterBus = totalPeople > reservedBusCapacity ? totalPeople - reservedBusCapacity : totalPeople;
while (remainingAfterBus >= reservedBusCapacity) {
    remainingAfterBus -= reservedBusCapacity;
}

    1. Conditional Assignment (Ternary Operator):

        * 'remainingAfterBus' is initialized to the number of people left after filling as many full reserved buses as possible.
        * If 'totalPeople > reservedBusCapacity', it starts by subtracting one reserved bus capacity ('totalPeople - reservedBusCapacity'). Otherwise, 'remainingAfterBus' is set directly to 'totalPeople'.

    2. Loop (While Statement):

        * 'while (remainingAfterBus >= reservedBusCapacity)' keeps subtracting 'reservedBusCapacity' from 'remainingAfterBus' until the value is less than the bus capacity.
        * This handles any scenario where multiple buses are needed, not just one. Each loop subtracts another full reserved bus.
        * More explanation:
        
        What is Happening in the' while' Loop?
        The 'while' loop is repeatedly subtracting the reserved bus capacity from the total number of people until no more full buses can be filled.

        Why Use a Loop?
        In case there are more people than can fit in one reserved bus, we need to account for multiple buses. Instead of dividing the number by the bus capacity (like the modulo '%' operation does), the loop keeps subtracting full bus capacities to find out how many people remain.

        Example:
        Imagine there are 135 people going on a picnic, and the capacity of a reserved bus is 50 people. Let’s see how the loop works step-by-step.

        1. First Subtraction:
            remainingAfterBus = totalPeople - reservedBusCapacity;
            Initially, 'remainingAfterBus = 135 - 50 = 85'.

        2. Loop Iteration 1:
        The loop condition checks if 'remainingAfterBus >= reservedBusCapacity' (is 85 ≥ 50?).
        Since this is true, we subtract again:

        remainingAfterBus = 85 - 50 = 35.

        3. Loop Iteration 2:
        The loop checks again: is 'remainingAfterBus >= reservedBusCapacity' (is 35 ≥ 50?)
        This time, the condition is false, so the loop stops.

        4. Final Result:
        'remainingAfterBus = 35' — this is the number of people who could not fit on any reserved bus.
   
    3. Example:

    If 'totalPeople = 135' and 'reservedBusCapacity = 50':

        * First, 'remainingAfterBus = 135 - 50 = 85'.
        * Loop iteration 1: '85 - 50 = 35'.
        * Loop ends since '35 < 50'.
        Now, 'remainingAfterBus = 35'.


Step 2: Calculating Remaining People After Using Microbus

let remainingAfterMicroBus = remainingAfterBus > microbusCapacity ? remainingAfterBus - microbusCapacity : remainingAfterBus;
while (remainingAfterMicroBus >= microbusCapacity) {
    remainingAfterMicroBus -= microbusCapacity;
}

    1. Conditional Assignment:

        * 'remainingAfterMicroBus' starts by subtracting one microbus capacity ('remainingAfterBus - microbusCapacity') if 'remainingAfterBus > microbusCapacity'. Otherwise, it’s set directly to 'remainingAfterBus'.

    2. Loop (While Statement):

        * 'while (remainingAfterMicroBus >= microbusCapacity)' subtracts the microbus capacity repeatedly until 'remainingAfterMicroBus' is smaller than 'microbusCapacity'.

    3. Example:
    If 'remainingAfterBus = 35' and 'microbusCapacity = 11':

        * First, 'remainingAfterMicroBus = 35 - 11 = 24'.
        * Loop iteration 1: '24 - 11 = 13'.
        * Loop iteration 2: '13 - 11 = 2'.
        Now, 'remainingAfterMicroBus = 2'.

Step 3: Calculating Public Bus Fare

const publicBusFareTotal = remainingAfterMicroBus * publicBusFarePerPerson;

    * This line calculates the total fare by multiplying the remaining number of people who need to use the public bus ('remainingAfterMicroBus') by the fare per person ('publicBusFarePerPerson').

    Example:
    If 'remainingAfterMicroBus = 2' and 'publicBusFarePerPerson = 250':
    'publicBusFareTotal = 2 * 250 = 500'.

Final Output:
    The function returns 'publicBusFareTotal', which represents the total cost for those who use the public bus.
*/