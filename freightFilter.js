function scanAndFilter(arrayOfStrings, stringToFilter) {
    let filteredArray = [];

    filteredArray = arrayOfStrings.filter(item => item !== stringToFilter)

    return filteredArray;
}



let filteredArray = scanAndFilter(["dog", "cat", "ant", "cat", "mouse"], 'cat');
console.log("The filtered array is: " + filteredArray);
