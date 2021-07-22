function addFirstToLast(listOfItems) {

    let firstAndLast = '';

    if (listOfItems.length > 0) {
        firstAndLast = listOfItems[0] + listOfItems[listOfItems.length-1];
    }


    return firstAndLast;
}



let firstAndLast = addFirstToLast(["One", "Two", "Three"]);
console.log("First and Last Smash: " + firstAndLast);

firstAndLast = addFirstToLast(["One", "Three"]);
console.log("First and Last Smash: " + firstAndLast);

firstAndLast = addFirstToLast(["One"]);
console.log("First and Last Smash: " + firstAndLast);
