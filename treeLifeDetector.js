const argumentValue = process.argv[2];

const treeState = Number(argumentValue);

if (treeState === 0 ) {
    console.log('alive');
} else {
    console.log('other');
}