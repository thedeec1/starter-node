function getFirstAmountSorted(itemArray, splitNumber) {
    let newArray = itemArray.sort();

    newArray.length = splitNumber;

    return newArray;
}


let newArray = getFirstAmountSorted(['bird', 'dog', 'cat', 'ant'], 2);
console.log('The returned array is: ' + newArray);

newArray = getFirstAmountSorted(['third', 'second', 'first'], 2);
console.log('The returned array is: ' + newArray);

newArray = getFirstAmountSorted(['golden', 'terrier'], 1);
console.log('The returned array is: ' + newArray);

newArray = getFirstAmountSorted(['cheerios', 'apple jacks', 'lucky charms'], 3);
console.log('The returned array is: ' + newArray);

newArray = getFirstAmountSorted(['golden', 'terrier', 'boxer'], 0);
console.log('The returned array is: ' + newArray);