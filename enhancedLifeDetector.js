const argumentValue1 = process.argv[2];

const treeState = Number(argumentValue1);

if ( treeState === 0 ) {
    console.log('alive');
} else if ( treeState === 1 ) {
    console.log('flowering');
} else if ( treeState === 2 ) {
    console.log('shedding');
} else {
    console.log('other');
}
