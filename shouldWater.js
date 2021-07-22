const argumentValue1 = process.argv[2];
const argumentValue2 = process.argv[3];

const treeState = Number(argumentValue1);
const dryness = Number(argumentValue2);

if ( (treeState === 0) && (dryness > 10) ) {
    console.log('WATER');
} 