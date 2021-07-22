function scan(itemsToCheck) {
    let contrabandNumber = 0;

    itemsToCheck.forEach(function(item, index, array) {
        if (item.toLowerCase() === 'contraband') {
            contrabandNumber++;
        }
    });

    return contrabandNumber;
}

// [1][3]


let numberOfContribandItems = scan(["contraband", "contraband", "contraband", "contraband"]);
console.log('Number of contrababd items is: ' + numberOfContribandItems);

numberOfContribandItems = scan(["contraband", "fred", "contraband", "fred"]);
console.log('Number of contrababd items is: ' + numberOfContribandItems);

numberOfContribandItems = scan(["one", "two", "three", "four"]);
console.log('Number of contrababd items is: ' + numberOfContribandItems);
