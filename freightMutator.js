function calculatePower(arrayOfStrings) {
    let mutatedArray = [];

    mutatedArray = arrayOfStrings.map( item => item.toUpperCase() );

    return mutatedArray;
}



let mutatedArray = calculatePower(["dog", "cat", "ant", "cat", "mouse"], 'cat');
console.log("The mutated array is: " + mutatedArray);
