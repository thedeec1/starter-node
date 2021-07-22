const argumentValue1 = process.argv[2];
const argumentValue2 = process.argv[3];

const stringOne = String(argumentValue1);
const stringTwo = String(argumentValue2);

if ( stringOne.toLowerCase() === stringTwo.toLowerCase() ) {
    console.log(0);
} else if ( stringOne.toLowerCase() < stringTwo.toLowerCase() ) {
    console.log(-1);
} else if ( stringOne.toLowerCase() > stringTwo.toLowerCase() ) {
    console.log(1);
}

