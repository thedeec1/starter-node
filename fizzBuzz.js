const argumentValue1 = process.argv[2];

const number = Number(argumentValue1);

if ( (number % 3 === 0) && (number % 5 === 0) ) {
    console.log('JavaScript');
} else if (number % 5 === 0 ) {
    console.log('Script');
} else if (  number % 3 === 0 ) {
    console.log('Java');
} else {
    console.log(number);
}