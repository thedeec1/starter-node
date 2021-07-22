function construct(objectName) {
    let newObject = {
        name: objectName,
        material: 'human',
        assemble: true,
        duration: 1000
    }

    return newObject;
}


let returnedObject1 = construct('fred');
console.log("The constructed object is: " + returnedObject1.name + " " + 
                                            returnedObject1.material + " " +
                                            returnedObject1.assemble + " " +
                                            returnedObject1.duration);

let returnedObject2 = construct('barney');
console.log("The constructed object is: " + returnedObject2.name + " " + 
                                            returnedObject2.material + " " +
                                            returnedObject2.assemble + " " +
                                            returnedObject2.duration);
let returnedObject3 = construct('wilma');
console.log("The constructed object is: " + returnedObject3.name + " " + 
                                            returnedObject3.material + " " +
                                            returnedObject3.assemble + " " +
                                            returnedObject3.duration);