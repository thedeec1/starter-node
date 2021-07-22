function calculatePower(arrayOfStrings) {
    let calculatedMass = 0;

    calculatedMass = arrayOfStrings.reduce( (sum, item) => sum + item.length , 0 );

    return calculatedMass;
}



let calculatedMass = calculatePower(["dog", "cat", "ant", "cat", "mouse"]);
console.log("The calculated mass is: " + calculatedPower);