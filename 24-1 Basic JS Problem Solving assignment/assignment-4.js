/*                          24-1 Basic Javascript Problem Solving assignment 

                                Assignment - (4)

** Question 3:
Calculate the total oil price that I have to pay.
    diesel per litre 114
    petrol per litre 130
    octane per litre 135

    The first parameter will be how much diesel I want to take. For the first parameter I want 15 litre.
    The second parameter will be how much petrol I want to take. For the second parameter I want 10 litre.
    The third parameter will be how much octane I want to take. For the third  parameter I want 8 litre.
How much will I have to pay in total? Return that to me in a number. You must name the function exactly as it is written here. 
    'oilPrice'


function oilPrice(diesel, petrol, octane){
    const dieselPricePerLitre = 114;
    const petrolPricePerLitre = 130;
    const octanePricePerLitre = 135;

    const totalDieselCost = diesel * dieselPricePerLitre;
    const totalPetrolCost = petrol * petrolPricePerLitre;
    const totalOctaneCost = octane * octanePricePerLitre;

    const totalCost = totalDieselCost + totalPetrolCost + totalOctaneCost;
    return totalCost;
}

const totalToPay = oilPrice(15, 10, 8);
console.log(totalToPay);
// Output: 4090
/ ------------------------------------------------------------------------------------------------------------- /
Or:

function oilPrice(diesel, petrol, octane){
    const dieselPricePerLitre = 114;
    const petrolPricePerLitre = 130;
    const octanePricePerLitre = 135;

    // Directly calculate and return the total cost
    return ((diesel * dieselPricePerLitre) + (petrol * petrolPricePerLitre) + (octane * octanePricePerLitre));
}

const totalToPay = oilPrice(15, 10, 8);
console.log(totalToPay);
// Output: 4090

Explanation:
1. Instead of creating separate variables for individual costs ('totalDieselCost', 'totalPetrolCost', 'totalOctaneCost'), the calculation is done directly inside the 'return' statement.
2. This version is more compact while still being readable and functional.
*/