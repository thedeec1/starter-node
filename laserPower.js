function calculatePower(arrayOfPowers) {
    let calculatedPower = 0;

    calculatedPower = arrayOfPowers.map( item => item * 2).reduce( (sum, item) => sum + item , 0 );

    return calculatedPower;
}



let calculatedPower = calculatePower([10, 10, 10, 10, 10]);
console.log("The calculated power is: " + calculatedPower);